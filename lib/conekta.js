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
var API_VERSION = '1.0.0',
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

        if (!Conekta.api_key || Conekta.api_key == '') {
            opts.error({
                message: locales[Conekta.locale || 'en'].api_key_required,
                code: 'api_key_required'
            });
            return;
        }

        if (parseInt(Conekta.api_version.split('.')[0]) < 1) {
            console.log(locales[Conekta.locale || 'en'].api_version_suggestion)
        }

        HEADERS['Conekta-Client-User-Agent'] = this.headers;
        HEADERS['User-Agent'] = 'Conekta/v1 NodeBindings/' + ['Conekta::', pkg.version].join('');
        HEADERS['Accept-Language'] = Conekta.locale;
        HEADERS['Content-Type'] = 'application/json';
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
        } else if (opts.method == 'post') {
            options['json'] = true;
            options['body'] = opts.data;
        } else {
            options['form'] = opts.data;
        }

        request[opts.method](options, function(err, req, res) {
            if (req.statusCode != 200 && req.statusCode != 201) {
                if (typeof res == 'object') {
                    res.http_code = req.statusCode;
                    opts.error(res);
                } else {
                    res = JSON.parse(res);
                    res.http_code = req.statusCode;
                    opts.error(res);
                }
            } else {
                if (typeof res == 'object') {
                    opts.success(res);
                } else {
                    opts.success(JSON.parse(res));
                }
            }
        });
    }
};

var Resource = function(instance) {
    return _.extend({
        _id: null,
        classUrl: '',
        members: {},
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
        createMembers: function() {
            var _this = this;
            for (var key in _this.members) {
                var member = _this.members[key];
                for (attr in _this._json) {
                    if (attr == key) {
                        if (_this._json[attr] instanceof Array) {
                            var array = [],
                                attribute = _this._json[attr];
                            for (var i = 0; i < attribute.length; i++) {
                                array.push(_.extend(Conekta[member], {
                                    _json: attribute[i],
                                    _id: attribute[i].id
                                }));
                            }
                            _this[attr] = array;
                        } else {
                            if (_this._json[attr]) {
                                _this[attr] = _.extend(Conekta[member], {
                                    _json: _this._json[attr],
                                    _id: _this._json[attr].id
                                });
                            }
                        }
                    }
                }
            }
        },
        /*
         * Method to build GET calls
         */
        get: function(opts, id) {
            var _this = this;
            var uri = _this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'get',
                url: [Conekta.api_base, uri].join(''),
                data: opts.data || {},
                success: function(response) {
                    _this._json = response;
                    if (id) {
                        _this._id = response.id;
                    } else {
                        _.each(response, function(item) {
                            var index = _.extend(_this, {
                                _json: item,
                                _id: item._id
                            });
                            _this._items.push(index);
                        });
                    }
                    _this.createMembers();
                    opts.success(_this);
                },
                error: opts.error
            });
        },
        /*
         * Method to build POST calls
         */
        post: function(opts, id) {
            var _this = this;
            var uri = _this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'post',
                url: [Conekta.api_base, uri].join(''),
                data: opts.data || {},
                success: function(response) {
                    _this._json = response;
                    _this._id = response.id;
                    _this.createMembers();
                    opts.success(_this);
                },
                error: opts.error
            });
        },
        /*
         * Method to build PUT calls
         */
        put: function(opts, id) {
            var _this = this;
            var uri = _this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'put',
                url: [Conekta.api_base, uri].join(''),
                data: opts.data || {},
                success: function(response) {
                    _this._json = response;
                    _this._id = response.id;
                    _this.createMembers();
                    opts.success(_this);
                },
                error: opts.error
            });
        },
        /*
         * Method to build DEL calls
         */
        del: function(opts, id) {
            var _this = this;
            var uri = _this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'del',
                url: [Conekta.api_base, uri].join(''),
                data: opts.data || {},
                success: function(response) {
                    _this._json = response;
                    _this.createMembers();
                    opts.success(_this);
                },
                error: opts.error
            });
        },
        /*
         * Method to build complex api calls
         */
        custom: function(method, customURI, opts) {
            var requestor = new Requestor();
            requestor.request({
                method: method,
                url: [Conekta.api_base, customURI].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        }
    }, instance);
}

var Charge = new Resource({
    classUrl: '/charges',
    members: {},
    find: function(id, success, error) {
        this.get({
            success: success,
            error: error
        }, id);
    },
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    },
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    refund: function(data, success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._id, 'refund'].join('/'), {
            data: data,
            success: function(res) {
                _this._json = res;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    capture: function(success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._id, 'capture'].join('/'), {
            data: {},
            success: function(res) {
                _this._json = res;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    }
});

var Plan = new Resource({
    classUrl: '/plans',
    members: {},
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    },
    find: function(id, success, error) {
        this.get({
            data: {},
            success: success,
            error: error
        }, id);
    },
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    update: function(data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, this._id);
    },
    delete: function(success, error) {
        this.del({
            data: {},
            success: success,
            error: error
        }, this._id);
    }
});

var Event = new Resource({
    classUrl: '/events',
    members: {},
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    }
});

var Customer = new Resource({
    classUrl: '/customers',
    members: {
        'cards': 'Card',
        'subscription': 'Subscription'
    },
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    },
    find: function(id, success, error) {
        this.get({
            success: success,
            error: error
        }, id);
    },
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    update: function(data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, this._id);
    },
    delete: function(success, error) {
        this.del({
            data: {},
            success: success,
            error: error
        }, this._id);
    },
    createCard: function(data, success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._id, 'cards'].join('/'), {
            data: data,
            success: function(res) {
                _this._json.cards.push(res);
                _this.createMembers();
                var card = _.extend(Card, {
                    _json: res,
                    _id: res.id
                });
                success(card);
            },
            error: error
        });
    },
    createSubscription: function(data, success, error) {
        var _this = this;
        _this.custom('post', [this.classUrl, _this._id, 'subscription'].join('/'), {
            data: data,
            success: function(res) {
                _this._json.subscription = res;
                _this.createMembers();
                var subscription = _.extend(Subscription, {
                    _json: res,
                    _id: res.id
                });
                success(subscription);
            },
            error: error
        });
    }
});

var Card = new Resource({
    classUrl: '/customers',
    update: function(data, success, error) {
        var _this = this;
        this.custom('put', [_this.classUrl, _this._json.customer_id, 'cards', _this._id].join('/'), {
            data: data,
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    delete: function(success, error) {
        var _this = this;
        this.custom('del', [_this.classUrl, _this._json.customer_id, 'cards', _this._id].join('/'), {
            data: {},
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    }
});

var Subscription = new Resource({
    classUrl: '/customers',
    update: function(data, success, error) {
        var _this = this;
        _this.custom('put', [_this.classUrl, _this._json.customer_id, 'subscription'].join('/'), {
            data: data,
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    pause: function(success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._json.customer_id, 'subscription', 'pause'].join('/'), {
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    resume: function(success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._json.customer_id, 'subscription', 'resume'].join('/'), {
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    cancel: function(success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._json.customer_id, 'subscription', 'cancel'].join('/'), {
            success: function(res) {
                _this._json = res;
                _this._id = res.id;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    }
});

var PayoutMethod = new Resource({
    classUrl: '/payees',
    update: function(data, success, error) {
        var _this = this;
        this.custom('put', [_this.classUrl, _this._json.payee_id, 'payout_methods', _this._id].join('/'), {
            data: data,
            success: function(res) {
                _this._id = res.id;
                _this._json = res;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    },
    delete: function(success, error) {
        var _this = this;
        _this.custom('del', [_this.classUrl, _this._json.payee_id, 'payout_methods', _this._id].join('/'), {
            success: function(res) {
                _this._id = res.id;
                _this._json = res;
                _this.createMembers();
                success(_this);
            },
            error: error
        });
    }
});

var Payee = new Resource({
    classUrl: '/payees',
    members: {
        'payout_methods': 'PayoutMethod'
    },
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    find: function(id, success, error) {
        var _this = this;
        this.get({
            success: success,
            error: error
        }, id);
    },
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    },
    update: function(data, success, error) {
        var _this = this;
        this.put({
            data: data,
            success: success,
            error: error
        }, _this._id);
    },
    delete: function(success, error) {
        var _this = this;
        this.del({
            success: success,
            error: error
        }, _this._id);
    },
    createPayoutMethod: function(data, success, error) {
        var _this = this;
        _this.custom('post', [_this.classUrl, _this._id, 'payout_methods'].join('/'), {
            data: data,
            success: function(res) {
                _this._json.payout_methods.push(res);
                _this.createMembers();
                var payoutMethod = _.extend(PayoutMethod, {
                    _json: res,
                    _id: res.id
                });
                success(payoutMethod);
            },
            error: error
        });
    }
});

var Payout = new Resource({
    classUrl: '/payouts',
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    find: function(id, success, error) {
        this.get({
            success: success,
            error: error
        }, id);
    },
    where: function(data, success, error) {
        this.get({
            data: data,
            success: success,
            error: error
        });
    }
});

var Webhook = new Resource({
    classUrl: '/webhooks',
    create: function(data, success, error) {
        this.post({
            data: data,
            success: success,
            error: error
        });
    },
    find: function(id, success, error) {
        this.get({
            success: success,
            error: error
        }, id);
    },
    update: function(data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, this._id);
    },
});

/*
 * Populate Conekta Base Object with resources children
 */
Conekta.Charge = Charge;
Conekta.Event = Event;
Conekta.Customer = Customer;
Conekta.Plan = Plan;
Conekta.Card = Card;
Conekta.Subscription = Subscription;
Conekta.Payee = Payee;
Conekta.Payout = Payout;
Conekta.PayoutMethod = PayoutMethod;
Conekta.Webhook = Webhook;

module.exports = Conekta;
