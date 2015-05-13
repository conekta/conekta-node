//Basics
var _ = require('underscore'),
    base64 = require('./lib/base64.js'),
    pkg = require('./package');

//Global
var API_VERSION = '1.0.0',
    API_BASE = 'https://api.conekta.io',
    HEADERS = {
        'Accept': ['application/vnd.conekta-v', API_VERSION ,'+json'].join(''),
        'Content-Type': 'application/json'
    };

var Requestor = function(params) {
    this.apiUrl = API_BASE;
    this.headers = {
        bindings_version: ['Conekta::', pkg.version].join(''),
        lang: 'node',
        lang_version: process.version,
        publisher: 'conekta',
        uname: ''
    };
    this.request = function(opts) {
        HEADERS['Conekta-Client-User-Agent'] = this.headers;
        HEADERS['User-Agent'] = 'Conekta/v1 NodeBindings/' + ['Conekta::', pkg.version].join('');
        HEADERS['Accept-Language'] = Conekta.locale;
        HEADERS['Content-Type'] = 'application/json';
        HEADERS['Authorization'] = ['Basic ', base64.encode(Conekta.api_key), ':'].join('');

        var request = require('request'),
            fs = require('fs');

        var options = {
            url: opts.url,
            headers: HEADERS
        };

        if (opts.method == 'get') options['qs'] = opts.data;
        if (opts.method == 'post') {
            options['form'] = JSON.stringify(opts.data);
        } else {
            options['form'] = opts.data;
        }

        request[opts.method](options, function(err, req, res) {
            if (req.statusCode != 200 && req.statusCode != 201) {
                opts.error(JSON.parse(res));
            } else {
                opts.success(JSON.parse(res));
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
                data: JSON.stringify(opts.data),
                //data: opts.data,
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
                data: opts.data,
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
                data: opts.data,
                success: opts.success,
                error: opts.error
            });
        },
        custom: function() {}
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
        this.custom = function(opts, id) {
            var uri = [this.classUrl, id, 'refund'].join('/');

            var requestor = new Requestor();
            requestor.request({
                method: 'post',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data,
                success: opts.success,
                error: opts.error
            });
        }
        this.custom({
            data: data,
            success: success,
            error: error
        }, id);
    },
    capture: function(id, success, error) {
        this.custom = function(opts, id) {
            var uri = [this.classUrl, id, 'capture'].join('/');

            var requestor = new Requestor();
            requestor.request({
                method: 'post',
                url: [Conekta.apiBase, uri].join(''),
                data: opts.data,
                success: opts.success,
                error: opts.error
            });
        }
        this.custom({
            data: {},
            success: success,
            error: error
        }, id);
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

module.exports = Conekta = {
    api_key: '',
    apiBase: API_BASE,
    apiVersion: API_VERSION,
    locale: 'en',
    Charge: Charge,
    Event: Event,
    Customer: Customer,
    Plan: Plan
};
