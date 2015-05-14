//Basics
var _ = require('underscore'),
    os = require('os'),
    base64 = require('./lib/base64.js'),
    pkg = require('./package'),
    locales = require('./locales.json');

//Global
var API_VERSION = '1.0.0',
    API_BASE = 'https://api.conekta.io',
    HEADERS = {
        'Accept': ['application/vnd.conekta-v', API_VERSION ,'+json'].join(''),
        'Content-Type': 'application/json'
    };

var Conekta = {
    api_key: '',
    apiBase: API_BASE,
    apiVersion: API_VERSION,
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
    this.request = function(opts) {

        if (!Conekta.api_key || Conekta.api_key == '') {
            opts.error({
                message: locales[Conekta.locale || 'en'].api_key_required,
                code: 'api_key_required'
            });
            return;
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
                ca: fs.readFileSync('cert/ca_bundle.crt'),
                rejectUnauthorized: false
            }
        };

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
        classUrl: '',
        get: function(opts, id) {
            var uri = this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'get',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        },
        post: function(opts, id) {
            var uri = this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'post',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        },
        put: function(opts, id) {
            var uri = this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'put',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        },
        del: function(opts, id) {
            var uri = this.classUrl;
            if (id) {
                uri += '/' + id;
            }

            var requestor = new Requestor();
            requestor.request({
                method: 'del',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        },
        custom: function(method, customURI, opts) {
            var requestor = new Requestor();
            requestor.request({
                method: method,
                url: [Conekta.apiBase, customURI].join(''),
                data: opts.data || {},
                success: opts.success,
                error: opts.error
            });
        }
    }, instance);
}

var Charge = new Resource({
    classUrl: '/charges',
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
    refund: function(id, data, success, error) {
        this.custom('post', [this.classUrl, id, 'refund'].join('/'), {
            data: data,
            success: success,
            error: error
        });
    },
    capture: function(id, success, error) {
        this.custom('post', [this.classUrl, id, 'capture'].join('/'), {
            data: {},
            success: success,
            error: error
        });
    }
});

var Plan = new Resource({
    classUrl: '/plans',
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
    update: function(id, data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, id);
    },
    delete: function(id, success, error) {
        this.del({
            data: {},
            success: success,
            error: error
        }, id);
    }
});

var Event = new Resource({
    classUrl: '/events',
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
    update: function(id, data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, id);
    },
    delete: function(id, success, error) {
        this.del({
            data: {},
            success: success,
            error: error
        }, id);
    },
    createCard: function(id, data, success, error) {
        this.custom('post', [this.classUrl, id, 'cards'].join('/'), {
            data: data,
            success: success,
            error: error
        });
    },
    createSubscription: function(id, data, success, error) {
        this.custom('post', [this.classUrl, id, 'subscription'].join('/'), {
            data: data,
            success: success,
            error: error
        });
    }
});

var Card = new Resource({
    classUrl: '/customers',
    update: function(customer, card, data, success, error) {
        this.custom('put', [this.classUrl, customer, 'cards', card].join('/'), {
            data: data,
            success: success,
            error: error
        });
    },
    delete: function(customer, card, success, error) {
        this.custom('del', [this.classUrl, customer, 'cards', card].join('/'), {
            data: {},
            success: success,
            error: error
        });
    }
});

var Subscription = new Resource({
    classUrl: '/customers',
    update: function(customer, data, success, error) {
        this.custom('put', [this.classUrl, customer, 'subscription'].join('/'), {
            data: data,
            success: success,
            error: error
        });
    },
    pause: function(customer, success, error) {
        this.custom('post', [this.classUrl, customer, 'subscription', 'pause'].join('/'), {
            success: success,
            error: error
        });
    },
    resume: function(customer, success, error) {
        this.custom('post', [this.classUrl, customer, 'subscription', 'resume'].join('/'), {
            success: success,
            error: error
        });
    },
    cancel: function(customer, success, error) {
        this.custom('post', [this.classUrl, customer, 'subscription', 'cancel'].join('/'), {
            success: success,
            error: error
        });
    }
});

var PayoutMethod = new Resource({
    classUrl: '/payees',
    update: function(payee, payoutMethod, data, success, error) {
        this.custom('put', [this.classUrl, payee, 'payout_methods', payoutMethod].join('/'), {
            data: data,
            success: success,
            error: error
        });
    },
    delete: function(payee, payoutMethod, success, error) {
        this.custom('del', [this.classUrl, payee, 'payout_methods', payoutMethod].join('/'), {
            success: success,
            error: error
        });
    }
});

var Payee = new Resource({
    classUrl: '/payees',
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
    },
    update: function(id, data, success, error) {
        this.put({
            data: data,
            success: success,
            error: error
        }, id);
    },
    delete: function(id, success, error) {
        this.del({
            success: success,
            error: error
        }, id);
    },
    createPayoutMethod: function(id, data, success, error) {
        this.custom('post', [this.classUrl, id, 'payout_methods'].join('/'), {
            data: data,
            success: success,
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

Conekta.Charge = Charge;
Conekta.Event = Event;
Conekta.Customer = Customer;
Conekta.Plan = Plan;
Conekta.Card = Card;
Conekta.Subscription = Subscription;
Conekta.Payee = Payee;
Conekta.Payout = Payout;
Conekta.PayoutMethod = PayoutMethod;

module.exports = Conekta;
