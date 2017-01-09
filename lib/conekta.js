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
var API_VERSION = '1.1.0',
  API_BASE = 'https://api.conekta.io',
  HEADERS = {
    'Accept': ['application/vnd.conekta-v', API_VERSION, '+json'].join(''),
    'Content-Type': 'application/json'
  };

/*
 *  Conekta base object initialized
 */
var Conekta = {
  api_key: '',
  api_base: API_BASE,
  api_version: API_VERSION,
  locale: 'en'
};

/*
 * Object to prepare and execute the calls for API resources
 */
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

    if (!Conekta.api_key ||  Conekta.api_key == '') {
      opts.next({
        message: locales[Conekta.locale ||  'en'].api_key_required,
        code: 'api_key_required'
      }, null);
      return;
    }

    if (parseInt(Conekta.api_version.split('.')[0]) < 1) {
      console.log(locales[Conekta.locale ||  'en'].api_version_suggestion)
    }

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

      // Parse response to JSON
      res = typeof res == 'object' ? res : JSON.parse(res);

      var error = null,
        result = null;

      // Check response status code for assign error or result with data
      if (req.statusCode != 200 &&  req.statusCode != 201)
        error = _.extend(res, {
          http_code: req.statusCode
        });
      else
        result = res;

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

      new Requestor().request({
        method: 'get',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, result) {
          // console.log(error, result);
          if (error) {
            return opts.next(error, null);
          }
          this._json = result;

          if (id) {
            this._id = result.id;
          } else {
            _.each(result.data, function(item) {
              var index = _.extend(this, {
                _json: item,
                _id: item._id
              });
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

      new Requestor().request({
        method: 'post',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
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

      new Requestor().request({
        method: 'put',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
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

      new Requestor().request({
        method: 'del',
        url: [Conekta.api_base, uri].join(''),
        data: opts.data ||  {},
        next: function(error, response) {
          if (error) {
            return opts.next(error, null);
          }
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
      new Requestor().request({
        method: method,
        url: [Conekta.api_base, customURI].join(''),
        data: opts.data ||  {},
        next: opts.next
      });
    }
  }, instance);
}

var Charge = new Resource({
  classUrl: '/charges',
  children_resources: {},
  find: function(id, next) {
    this.get({
      next: next
    }, id);
  },
  where: function(data, next) {
    console.log('Charge.where');
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
  refund: function(data, next) {
    // Prevent just callback param
    if (typeof data == 'function') {
      next = data;
      data = {};
    }

    this.custom('post', [this.classUrl, this._id, 'refund'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  capture: function(next) {
    this.custom('post', [this.classUrl, this._id, 'capture'].join('/'), {
      data: {},
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  }
});

var Order = new Resource({
  classUrl: '/orders',
  children_resources: {},
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
    'cards': 'Card',
    'subscription': 'Subscription'
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
    this.custom('post', [this.classUrl, this._id, 'cards'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json.cards.push(res);
        this.build_children();
        var card = _.extend(Card, {
          _json: res,
          _id: res.id
        });
        next(null, card);
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
        this._json.subscription = res;
        this.build_children();
        var subscription = _.extend(Subscription, {
          _json: res,
          _id: res.id
        });
        next(null, subscription);
      }.bind(this)
    });
  }
});

var Card = new Resource({
  classUrl: '/customers',
  update: function(data, next) {
    this.custom('put', [this.classUrl, this._json.customer_id, 'cards', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  delete: function(next) {
    this.custom('del', [this.classUrl, this._json.customer_id, 'cards', this._id].join('/'), {
      data: {},
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
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
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  pause: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'pause'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  resume: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'resume'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  cancel: function(next) {
    this.custom('post', [this.classUrl, this._json.customer_id, 'subscription', 'cancel'].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json = res;
        this._id = res.id;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  }
});

var PayoutMethod = new Resource({
  classUrl: '/payees',
  update: function(data, next) {
    this.custom('put', [this.classUrl, this._json.payee_id, 'payout_methods', this._id].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._id = res.id;
        this._json = res;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  },
  delete: function(next) {
    this.custom('del', [this.classUrl, this._json.payee_id, 'payout_methods', this._id].join('/'), {
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._id = res.id;
        this._json = res;
        this.build_children();
        next(null, this);
      }.bind(this)
    });
  }
});

var Payee = new Resource({
  classUrl: '/payees',
  children_resources: {
    'payout_methods': 'PayoutMethod'
  },
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
  },
  find: function(id, next) {
    var _this = this;
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
  update: function(data, next) {
    this.put({
      data: data,
      next: next
    }, this._id);
  },
  delete: function(next) {
    this.del({
      next: next
    }, this._id);
  },
  createPayoutMethod: function(data, next) {
    this.custom('post', [this.classUrl, this._id, 'payout_methods'].join('/'), {
      data: data,
      next: function(err, res) {
        if (err) {
          return next(err, null);
        }
        this._json.payout_methods.push(res);
        this.build_children();
        var payoutMethod = _.extend(PayoutMethod, {
          _json: res,
          _id: res.id
        });
        next(null, payoutMethod);
      }.bind(this)
    });
  }
});

var Payout = new Resource({
  classUrl: '/payouts',
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
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
  }
});

var Webhook = new Resource({
  classUrl: '/webhooks',
  create: function(data, next) {
    this.post({
      data: data,
      next: next
    });
  },
  find: function(id, next) {
    this.get({
      next: next
    }, id);
  },
  update: function(data, next) {
    this.put({
      data: data,
      next: next
    }, this._id);
  },
});

var Log = new Resource({
  classUrl: '/logs',
  where: function(data, next) {
    this.get({
      data: data,
      next: next
    });
  }
});

/*
 * Populate Conekta Base Object with resources children
 */
Conekta.Charge = Charge;
Conekta.Order = Order;
Conekta.Event = Event;
Conekta.Customer = Customer;
Conekta.Plan = Plan;
Conekta.Card = Card;
Conekta.Subscription = Subscription;
Conekta.Payee = Payee;
Conekta.Payout = Payout;
Conekta.PayoutMethod = PayoutMethod;
Conekta.Webhook = Webhook;
Conekta.Log = Log;

module.exports = Conekta;
