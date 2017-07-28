'use strict';

/*
 * Global packages required
 */
var _ = require('underscore'),
  os = require('os');

/*
 * Project packages required
 */
var base64 = require('./base64.js'),
  pkg = require('../package'),
  locales = require('./locales.json');

/*
 * Global project constants
 */
var API_VERSION = '2.0.0',
  API_BASE = 'https://api.conekta.io',
  ERROR_PAGINATION = {
    details: [
      {
        message: 'There\'s no next page url',
        param: 'next_page_url'
      }
    ]
  };

function setHeaders(version) {
  if (!version) version = "2.0.0";
  return {
    'Accept': ['application/vnd.conekta-v', version, '+json'].join(''),
    'Content-Type': 'application/json'
  };
} 

/*
 *  Conekta base object initialized
 */
var Conekta = {
  api_key: '',
  api_base: API_BASE,
  api_version: API_VERSION,
  locale: 'en'
};

var Requestor = function(params) {
  this.apiUrl = API_BASE;
  this.headers = {
    bindings_version: ['Conekta::', pkg.version].join(''),
    lang: 'node',
    lang_version: process.version,
    publisher: 'conekta',
    uname: [os.arch(), os.platform(), os.release()].join(' ')
  };
  /*
   * Call to API resources
   */
  this.request = function(opts) {

    if (!Conekta.api_key || Conekta.api_key == '') {
      opts.next({
        message: locales[Conekta.locale ||  'en'].api_key_required,
        code: 'api_key_required'
      }, null);
      return;
    }

    if ( parseInt(Conekta.api_version.split('.')[0]) < 1) {
      console.log(locales[Conekta.locale ||  'en'].api_version_suggestion)
    }

    if (parseFloat(Conekta.api_version) < 2.0) {
      console.log(locales[Conekta.locale || 'en'].api_version_unsupported);
      return opts.next({
        message: locales[Conekta.locale || 'en'].api_version_unsupported,
        code: 'api_version_unsupported'
      });
    }

    var HEADERS = setHeaders(Conekta.api_version);


    HEADERS['X-Conekta-Client-User-Agent'] = JSON.stringify(this.headers);
    HEADERS['User-Agent'] = 'Conekta/v1 NodeBindings/' + ['Conekta::', pkg.version].join('');
    HEADERS['Accept-Language'] = Conekta.locale;
    HEADERS['Authorization'] = ['Basic ', base64.encode(Conekta.api_key), ':'].join('');

    var request = require('request'),
      fs = require('fs');

    var options = {
      url: opts.url,
      headers: HEADERS,
      agentOptions: {
        ca: fs.readFileSync(__dirname + '/../cert/ca_bundle.crt'),
        rejectUnauthorized: false
      }
    };

    //Preventing the failure when reading the results on post or get calls
    if (opts.method == 'get') {
      options['qs'] = opts.data;
    } else {
      options['json'] = true;
      options['body'] = opts.data;
    }

    request[opts.method](options, function(err, req, res) {
      var error = null,
        result = null;

      // Check response status code for assign error or result with data
      if ((req.statusCode != 200 &&  req.statusCode != 201) || err) {
        error = _.extend({
          http_code: req.statusCode
        }, res, err);
      } else {
        result = typeof(res) == 'object' ? res : JSON.parse(res);
      }

      opts.next(error, result);
    });
  }
};

var Resource = function(instance) {
  return _.extend({
    _id: null,
    classUrl: '',
    children_resources: {},
    _json: {},
    _items: [],
    /*
     * Convert objects with object = list to javascript array
     */
    listObjectsToArray: function(response) {
      _.each(response, function(value, key) {
        response[key] = value;
      });

      return response;
    },
    /*
     * Convert the object with functions to just
     * a representation of the resource object.
     */
    toObject: function() {
      return this._json;
    },
    /*
     * Convert the object that contains a list to just
     * an array with resource objects.
     */
    toArray: function() {
      var items = [];
      _.each(this._items, function(item) {
        items.push(item.toObject());
      });
      return items;
    },
    /*
     * Method to populate attributes that are
     * of another kind of resource.
     */
    build_children: function() {

      // Iterate children_resources
      _.each(this.children_resources, function(resource, resource_name) {

        // Iterate object json data
        _.each(this._json, function(object, key) {

          // If children_resource and object different, next
          if (resource_name != key) {
            return;
          }

          if (object instanceof Array) {

            /*
             * Iterate array object to extend from
             * target Conekta resource and overwrite attribute
             */
            var children_objects = [];
            _.each(object, function(elem) {
              var resource_instance = _.extend({},
                Conekta[resource]
              );
              children_objects.push(
                _.extend(resource_instance, {
                  _json: elem,
                  _id: elem.id
                })
              );
            });

            /* overwrite property */
            this[key] = children_objects;

          } else {

            if (object) {
              /* overwrite property */
              this[key] = _.extend(Conekta[resource], {
                _json: object,
                _id: object.id
              });
            }

          }

        }.bind(this));

      }.bind(this));
    },
    /*
     * Method to build GET calls
     */
    get: function(opts, id) {
      var uri = this.classUrl;
      if (id) {
        uri += '/' + id;
      }

      if (typeof opts.data == 'function') {
        opts.next = opts.data;
        opts.data = {};
      }

      new Requestor({api_version: instance.api_version}).request({
        method: 'get',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, result) {
          if (error) {
            return opts.next(error, null);
          }

          result = this.listObjectsToArray(result);
          this._json = result;
          if (id) {
            this._id = result.id;
          } else {
            _.each(result.data, function(item) {
              var index = _.extend({
                _json: item,
                _id: item._id
              }, this);
              this._items.push(index);
            }.bind(this));
          }
          this.build_children();
          opts.next(null, this);
        }.bind(this)
      });
    },
    /*
     * Method to build POST calls
     */
    post: function(opts, id) {
      var uri = this.classUrl;
      if (id) {
        uri += '/' + id;
      }

      new Requestor({api_version: instance.api_version}).request({
        method: 'post',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
          response = this.listObjectsToArray(response);
          this._json = response;
          this._id = response.id;
          this.build_children();
          opts.next(null, this);
        }.bind(this)
      });
    },
    /*
     * Method to build PUT calls
     */
    put: function(opts, id) {
      var uri = this.classUrl;
      if (id) {
        uri += '/' + id;
      }
      new Requestor({api_version: instance.api_version}).request({
        method: 'put',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
          response = this.listObjectsToArray(response);
          this._json = response;
          this._id = response.id;
          this.build_children();
          opts.next(null, this);
        }.bind(this)
      });
    },
    /*
     * Method to build DEL calls
     */
    del: function(opts, id) {
      var uri = this.classUrl;
      if (id) {
        uri += '/' + id;
      }

      new Requestor({api_version: instance.api_version}).request({
        method: 'del',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
          response = this.listObjectsToArray(response);
          this._json = response;
          this.build_children();
          opts.next(null, this);
        }.bind(this)
      });
    },
    /*
     * Method to build complex api calls
     */
    custom: function(method, customURI, opts) {
      new Requestor({api_version: instance.api_version}).request({
        method: method,
        url: [Conekta.api_base, customURI].join(''),
        data: opts.data ||  {},
        next: function(err, response) {
          response = this.listObjectsToArray(response);
          opts.next(err, response);
        }.bind(this)
      });
    }
  }, instance);
}

var Order = new Resource({
  classUrl: '/orders',
  children_resources: {
    'line_items': 'LineItem',
    'tax_lines': 'TaxLine',
    'shipping_lines': 'ShippingLine',
    'discount_lines': 'DiscountLine',
    'charges': 'Charge'
  },
  find: function(id, next) {
    this.get({
      next: next
    }, id);
  },
  where: function(data, next) {
    this.get({
      data: data,
      next: next
    });
  },
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
  },
  update: function(data, next) {
    this.put({
      data: data,
      next: next
    }, this._id)
  },
  capture: function (next) {
    this.custom('put', [this.classUrl, this._id, 'capture'].join('/'), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createShippingContact: function (data, next) {
    data = {
      shipping_contact: data
    }
    this.put({
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res._json.shipping_contact);
      }
    }, this._id);
  },
  createLineItem: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'line_items'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createTaxLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'tax_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createShippingLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'shipping_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createDiscountLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'discount_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createCharge: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'charges'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createRefund: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'refunds'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }
    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  }
});

var Charge = new Resource({
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }
    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
});

var LineItem = new Resource({
  classUrl: '/orders',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function (data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'line_items', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  delete: function (next) {
    this.custom('del', [this.classUrl, this._json.parent_id, 'line_items', this._id].join('/'), {
      data: {},
      next: function (err, res) {
        if(err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
})

var TaxLine = new Resource({
  classUrl: '/orders',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function (data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'tax_lines', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  },
  delete: function (next) {
    this.custom('del', [this.classUrl, this._json.parent_id, 'tax_lines', this._id].join('/'), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  }
});

var ShippingLine = new Resource({
  classUrl: '/orders',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function (data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'shipping_lines', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  },
  delete: function (next) {
    this.custom('del', [this.classUrl, this._json.parent_id, 'shipping_lines', this._id].join('/'), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
});

var DiscountLine = new Resource({
  classUrl: '/orders',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function (data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'discount_lines', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  },
  delete: function (next) {
    this.custom('del', [this.classUrl, this._json.parent_id, 'discount_lines', this._id].join('/'), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
});


var Plan = new Resource({
  classUrl: '/plans',
  children_resources: {},
  where: function(data, next) {
    this.get({
      data: data,
      next: next
    });
  },
  find: function(id, next) {
    this.get({
      data: {},
      next: next
    }, id);
  },
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
  },
  update: function(data, next) {
    this.put({
      data: data,
      next: next
    }, this._id);
  },
  delete: function(next) {
    this.del({
      data: {},
      next: next
    }, this._id);
  }
});

var Event = new Resource({
  classUrl: '/events',
  children_resources: {},
  where: function(data, next) {
    this.get({
      data: data,
      next: next
    });
  }
});

var Customer = new Resource({
  classUrl: '/customers',
  children_resources: {
    'payment_sources': 'Card',
    'subscription': 'Subscription',
    'shipping_contacts': 'ShippingContact'
  },
  where: function(data, next) {
    this.get({
      data: data,
      next: next
    });
  },
  find: function(id, next) {
    this.get({
      next: next
    }, id);
  },
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
  },
  update: function(data, next) {
    this.put({
      data: data,
      next: next
    }, this._id);
  },
  delete: function(next) {
    this.del({
      data: {},
      next: next
    }, this._id);
  },
  createCard: function(data, next) {
    this.custom('post', [this.classUrl, this._id, 'payment_sources'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createSubscription: function(data, next) {
    this.custom('post', [this.classUrl, this._id, 'subscription'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  createShippingContact: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'shipping_contacts'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    }); 
  },
  createPaymentSource: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'payment_sources'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  }
});

var ShippingContact = new Resource({
  classUrl: '/customers',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function (data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'shipping_contacts', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    })
  },
  delete: function(next) {
    this.custom('del', [this.classUrl, this._json.parent_id, 'shipping_contacts', this._id].join('/'), {
      data: {},
      next:function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
});

var Card = new Resource({
  classUrl: '/customers',
  get: function (position) {
    this.build_children();
    this._id = this._json.data[position].id
    this._json = this._json.data[position];
    return this;
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  update: function(data, next) {
    this.custom('put', [this.classUrl, this._json.parent_id, 'payment_sources', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  delete: function(next) {

    this.custom('del', [this.classUrl, this._json.parent_id, 'payment_sources', this._id].join('/'), {
      data: {},
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }

        next(null, res);
      }.bind(this)
    });
  }
});

var Subscription = new Resource({
  classUrl: '/customers',
  update: function(data, next) {
    this.custom('put', [this.classUrl, this._json.customer_id, 'subscription'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  pause: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'pause'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  resume: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'resume'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  },
  cancel: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'cancel'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        next(null, res);
      }.bind(this)
    });
  }
});

Conekta.Order = Order;
Conekta.LineItem = LineItem;
Conekta.TaxLine = TaxLine;
Conekta.ShippingLine = ShippingLine;
Conekta.DiscountLine = DiscountLine;
Conekta.Event = Event;
Conekta.Customer = Customer;
Conekta.ShippingContact = ShippingContact;
Conekta.Card = Card;
Conekta.Subscription = Subscription;
Conekta.Charge = Charge;
Conekta.Plan = Plan;

module.exports = Conekta;
