var assert = require('assert'),
  conekta = require('../lib/conekta.js'),
  base64 = require('../lib/base64.js'),
  fs = require('fs');

const LOCALE = 'en',
  TEST_KEY = 'key_eYvWV7gSDkNYXsmr',
  API_VERSION = '2.0.0',
  PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn';

var createOrder = function(callback) {
  conekta.Order.create({
    currency: 'MXN',
    customer_info: {
      name: 'Jul Ceballos',
      phone: '+5215555555555',
      email: 'jul@conekta.io'
    },
    line_items: [{
      name: 'Box of Cohiba S1s',
      description: 'Imported From Mex.',
      unit_price: 35000,
      quantity: 1,
      tags: ['food', 'mexican food'],
    }]
  }, callback);
}

describe('Conekta wrapper', function() {

  describe('with api key empty', function() {
    it('should return error code api_key_required', function(done) {
      conekta.api_version = API_VERSION;
      createOrder(function(err, order) {
        assert(err.code == 'api_key_required', true);
        done();
      });


    });
  });

  describe('request with bad arguments', function() {
    it('should return error code with empty argument', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      conekta.Order.create({
        currency: 'MXN',
        line_items: [{
          name: 'Box of Cohiba S1s',
          description: 'Imported From Mex.',
          quantity: 1,
          tags: ['food', 'mexican food']
        }]
      }, function(err) {
        assert(err.type == 'parameter_validation_error', true);
        done();
      });
    });
  });

  describe('request with errors', function() {
    it('should return message_to_purchaser on error response', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      conekta.Order.create({
        currency: 'MXN',
        details: {
          name: 'Wolverine',
          email: 'mauricio@conekta.io',
          phone: '403-342-0642',
          line_items: [{
            name: 'Box of Cohiba S1s',
            description: 'Imported From Mex.',
            unit_price: 20000,
            quantity: 1,
          }]
        }
      }, function(err) {
        assert(err.details[0].hasOwnProperty('message'), true);
        done();
      });
    });
  });

  describe('request with not found object', function() {
    it('should return error with http_code 404', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      conekta.Order.find('123', function(err) {
        assert(err.http_code == 404, true);
        done();
      });
    });
  });

  describe('api version unsupported', function() {
    it('should return error ', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = '1.0.0';
      conekta.locale = LOCALE;
      conekta.Order.find('123', function(err) {
        assert(err.code == 'api_version_unsupported', true);
        done();
      });
    });
  });

});

describe('Order', function() {

  describe('next page', function() {

    it('should return something', function(done) {
      this.timeout(10000);

      var mFile = fs.readFileSync(__dirname + '/../lib/orders.json');

      var ord = conekta.Order;
      ord._json = JSON.parse(mFile);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      ord.nextPage(function(err, res) {
        assert(res.hasOwnProperty('next_page_url'), true)
        done();
      });

    });

  });


  describe('create', function() {
    it('should return instance object with id', function(done) {
      this.timeout(10000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      createOrder(function(err, res) {
        assert((res.toObject().hasOwnProperty('id')), true);
        done();
      });
    });
  });

  describe('update', function() {
    it('should return instance object', function(done) {
      this.timeout(6000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      createOrder(function(err, res) {
        var order = res.toObject().id;
        res.update({
          currency: 'USD'
        }, function(err, res) {
          assert(res.toObject().currency, 'USD')
          done();
        });
      });
    });
  });

  describe('capture order', function() {
    it('should return instance object', function(done) {
      this.timeout(6000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;

      conekta.Order.create({
        customer_info: {
          name: 'Jul Ceballos',
          phone: '+5215555555555',
          email: 'jul@conekta.io'
        },
        line_items: [{
          name: 'Box of Cohiba S1s',
          description: 'Imported From Mex.',
          unit_price: 35000,
          quantity: 1,
          tags: ['food', 'mexican food']
        }],
        preauthorize: true,
        currency: 'MXN'
      }, function(err, order) {
        order.capture(function(err, res) {
          assert.equal(res.preauthorize, false);
          done();
        });
      });
    });
  });

  describe('shipping contact', function () {

    describe('create', function () {

      it('should return instance object', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createOrder(function (err, order) {
          order.createShippingContact({
            address: {
              street1: "250 Alexis St",
              city: "Red Deer",
              state: "Alberta",
              country: "CA",
              postal_code: "T4N 0B8"
            }
          }, function (err, shippingContact) {
            assert(shippingContact.object, 'shipping_contact');
            done();
          });
        });
      });

    });


  });

  describe('fiscal entities', function () {
    describe('create', function() {
      it('should return instance object', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createOrder(function (err, order) {
          order.createFiscalEntity({
            tax_id: "AMGH851205MN1",
            name: "Test SA de CV",
            address: {
              street1: "250 Alexis St",
              city: "Red Deer",
              state: "Alberta",
              country: "CA",
              postal_code: "T4N 0B8"
            }
          }, function (err, fiscalEntity) {
            assert(fiscalEntity.object, 'fiscal_entity');
            done();
          });
        });
      });
    });
  });

  describe('Line Items', function() {

    var createLineItem = function(callback) {
      createOrder(function(err, res) {
        res.createLineItems({
          name: 'Box of Cohiba S2s',
          description: 'Imported From Mex.',
          unit_price: 36000,
          quantity: 1,
          sku: 'cohb_s2',
          tags: ['food', 'mexican food'],
          brand: 'Nike',
          metadata: {
            random_key: 'random value'
          }
        }, callback);
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createLineItem(function (err, res) {
          conekta.Order.find(res.parent_id, function (err, order) {
            order.line_items.nextPage(function (err, res) {
              assert(err.details[0].param, 'next_page_url');
              done();
            });
          });
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createLineItem(function(err, lineItem) {
          assert(lineItem.hasOwnProperty('id'), true);
          done();
        });
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createLineItem(function(err, res) {
          conekta.Order.find(res.parent_id, function(err, ord) {
            ord.line_items.get(1).update({
              name: 'Tie Fighter',
              description: "Imported From the Galactic Empire.",
              unit_price: 36000,
              tags: ['ship']
            }, function(err, res) {
              assert(res.name, 'Tie Fighter');
              done();
            });
          });
        });
      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createLineItem(function(err, res) {
          conekta.Order.find(res.parent_id, function (err, order) {
            order.line_items.get(0).delete(function (err, lineItems) {
              assert(lineItems.deleted, true);
              done();
            });
          });
        });
      });

    });


  });

  describe('Tax Line', function() {

    var createTaxLine = function(callback) {
      createOrder(function(err, order) {
        order.createTaxLines({
          description: 'IVA',
          amount: 600,
          metadata: {
            random_key: 'random_value'
          }
        }, callback);
      });
    };

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createTaxLine(function (err, res) {
          conekta.Order.find(res.parent_id, function (err, order) {
            order.tax_lines.nextPage(function (err, res) {
              assert(err.details[0].param, 'next_page_url');
              done();
            });
          });
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createTaxLine(function(err, order) {
          assert(order.hasOwnProperty('id'), true);
          done();
        });

      });
    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createTaxLine(function(err, order) {
          conekta.Order.find(order.parent_id, function(err, ord) {
            ord.tax_lines.get(0).update({
              amount: 1000
            }, function(err, res) {
              assert(res.amount, 1000);
              done();
            });
          });
        });

      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createTaxLine(function(err, order) {
          conekta.Order.find(order.parent_id, function(err, ord) {
            ord.tax_lines.get(0).delete(function (err, taxLine) {
              assert(taxLine.deleted, true);
              done();
            });
          });
        });
      });

    });

  });

  describe('Shipping Line', function() {

    var createShippingLine = function(callback) {
      createOrder(function(err, order) {
        order.createShippingLines({
          amount: 0,
          tracking_number: 'TRACK123',
          carrier: 'USPS',
          method: 'Train',
          metadata: {
            random_key: 'random_value'
          }
        }, callback);
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createShippingLine(function (err, res) {
          conekta.Order.find(res.parent_id, function (err, order) {
            order.shipping_lines.nextPage(function (err, res) {
              assert(err.details[0].param, 'next_page_url');
              done();
            });
          });
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createShippingLine(function(err, order) {
          assert(order.hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createShippingLine(function(err, order) {
          conekta.Order.find(order.parent_id, function(err, ord) {
            ord.shipping_lines.get(0).update({
              tracking_number: 'TRACK456',
              carrier: 'Mandalorian Express'
            }, function(err, res) {
              assert(res.tracking_number, 'TRACK456');
              done();
            });
          });
        });

      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createShippingLine(function(err, order) {
          conekta.Order.find(order.parent_id, function (err, ord) {
            ord.shipping_lines.get(0).delete(function (err, res) {
              assert.equal(res.deleted, true);
              done();
            });
          });
        });

      });

    });

  });

  describe('Discount Line', function() {

    var createDiscountLine = function(callback) {
      createOrder(function(err, order) {
        order.createDiscountLines({
          code: 'Cupón de descuento',
          type: 'loyalty',
          amount: 600
        }, callback);
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createDiscountLine(function (err, res) {
          conekta.Order.find(res.parent_id, function (err, order) {
            order.discount_lines.nextPage(function (err, res) {
              assert(err.details[0].param, 'next_page_url');
              done();
            });
          });
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        conekta.api_version = API_VERSION;
        createDiscountLine(function(err, order) {
          assert(order.hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createDiscountLine(function(err, order) {
          conekta.Order.find(order.parent_id, function(err, ord) {
            ord.discount_lines.get(0).update({
              amount: 700
            }, function(err, res) {
              assert(res.amount, 700);
              done();
            });
          });
        });

      });
    });

    describe('delete', function () {
      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createDiscountLine(function(err, order) {
          conekta.Order.find(order.parent_id, function(err, ord) {
            ord.discount_lines.get(0).delete(function(err, res) {
              assert(res.deleted, true);
              done();
            });
          });
        });
      });
    });

  });

  describe('Charges', function() {

    var createCharge = function(callback) {
      createOrder(function(err, order) {
        order.createCharges({
          'payment_source': {
            'type': 'oxxo_cash',
            'expires_at': 1513036800
          },
          'amount': 35000
        }, callback);
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createCharge(function(err, order) {
          assert(order.hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createCharge(function (err, res) {
          conekta.Order.find(res.order_id, function (err, order) {
            order.charges.nextPage(function (err, res) {
              assert(err.details[0].param, 'next_page_url');
              done();
            });
          });
        });
      });
    });

  });

  describe('Returns', function() {

    var createReturn = function(callback) {
      conekta.Order.create({
        'currency': 'MXN',
        'customer_info': {
          'name': 'Jul Ceballos',
          'phone': '+5215555555555',
          'email': 'jul@conekta.io'
        },
        'line_items': [{
          'name': 'Box of Cohiba S1s',
          'description': 'Imported From Mex.',
          'unit_price': 35000,
          'quantity': 1,
          'tags': ['food', 'mexican food'],
          'type': 'physical'
        }],
        'charges': [{
          'payment_source': {
            'type': 'card',
            'token_id': 'tok_test_visa_4242'
          }
        }]
      }, function(err, order) {
        order.createReturns({
          'amount': 35000
        }, callback);
      });

    };


    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(15000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createReturn(function(err, order) {
          assert(order.hasOwnProperty('id'), true);
          done();
        });

      });

    });

  });

});


describe('Event', function() {
  describe('where', function() {
    it('should return array', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Event.where({}, function(err, res) {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });
  });
});

describe('Customer', function() {

  var customer = '';

  describe('create without plan', function() {
    it('should return an object instance with id', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }, function(err, res) {
        res = res.toObject();
        customer = res.id;
        assert(res.hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('create with plan', function() {
    it('should return an object instance with id', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        plan_id: 'gold-plan',
        corporate: true,
        payment_sources: [{
          token_id: 'tok_test_visa_4242',
          type: 'card'
        }, {
          type: 'card',
          name: 'Emiliano Cabrera',
          number: '4242424242424242',
          exp_month: '12',
          exp_year: '20',
          cvc: '123',
          address: {
            street1: 'Tamesis',
            street2: '114',
            city: 'Monterrey',
            state: 'Nuevo Leon',
            country: 'MX',
            postal_code: '64700'
          }
        }]
      }, function(err, customer) {
        res = customer.toObject();
        assert(res.hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('update', function() {
    it('should return an object instance with id', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.update({
          name: 'Thane Kyrell',
          email: 'thane@jelucan.org'
        }, function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('where', function() {
    it('should return an array', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.where({}, function(err, res) {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });

    it('should return an array (just callback)', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.where(function(err, res) {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });
  });

  describe('find', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        assert(res.toObject().hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('createcard', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.createCard({
          type: 'card',
          name: 'Emiliano Cabrera',
          number: '4242424242424242',
          exp_month: '12',
          exp_year: '20',
          cvc: '123',
          address: {
            street1: 'Tamesis',
            street2: '114',
            city: 'Monterrey',
            state: 'Nuevo Leon',
            country: 'MX',
            postal_code: '64700'
          }
        }, function(err, res) {
          assert(res.hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('createsubscription', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.createSubscription({
          plan: 'gold-plan'
        }, function(err, res) {
          assert(res.hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('delete', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.delete(function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('Shipping Contact', function() {

    var shippingContact = '';

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }, {
            type: 'card',
            name: 'Emiliano Cabrera',
            number: '4242424242424242',
            exp_month: '12',
            exp_year: '20',
            cvc: '123',
            address: {
              street1: 'Tamesis',
              street2: '114',
              city: 'Monterrey',
              state: 'Nuevo Leon',
              country: 'MX',
              postal_code: '64700'
            }
          }]
        }, function(err, customer) {
          customer.createShippingContacts({
            phone: '+5215555555555',
            receiver: 'Marvin Fuller',
            between_streets: 'Ackerman Crescent',
            address: {
              street1: '250 Alexis St',
              street2: '',
              city: 'Red Deer',
              state: 'Alberta',
              country: 'CA',
              postal_code: 'T4N 0B8',
              residential: true
            }
          }, function(err, shipping) {
            shippingContact = shipping;
            assert(shipping.hasOwnProperty('id'), true);
            done();
          });

        });
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;

        conekta.Customer.find(shippingContact.parent_id, function(err, cust) {
          cust.shipping_contacts.get(0).update({
            phone: '+5215555555999',
            receiver: 'Marvin Fuller',
            between_streets: 'Ackerman Null',
            address: {
              street1: '250 Alexis St',
              street2: '',
              city: 'Red Deer',
              state: 'Alberta',
              country: 'CA',
              postal_code: 'T4N 0B8',
              residential: true
            }
          }, function(err, ship) {
            assert(ship.hasOwnProperty('id'), true);
            done();
          });

        });

      });
    });

    describe('delete', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.find(shippingContact.parent_id, function(err, cust) {
          cust.shipping_contacts.get(0).delete(function(err, res) {
            assert(res.hasOwnProperty('id'), true);
            done();
          });
        });

      });

    });

  });


  describe('Fiscal Entities', function() {
    var fiscalEntity = '';

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }, {
            type: 'card',
            name: 'Emiliano Cabrera',
            number: '4242424242424242',
            exp_month: '12',
            exp_year: '20',
            cvc: '123',
            address: {
              street1: 'Tamesis',
              street2: '114',
              city: 'Monterrey',
              state: 'Nuevo Leon',
              country: 'MX',
              postal_code: '64700'
            }
          }]
        }, function(err, customer) {
          customer.createfiscalEntities({
            tax_id: 'AMGH851205MN1',
            name: 'Nike SA de CV',
            email: 'contacto@nike.mx',
            phone: '+5215555555522',
            address: {
              street1: '250 Alexis St',
              street2: 'fake st',
              street3: 'null st',
              internal_number: '19',
              external_number: '91',
              city: 'Red Deer',
              state: 'Alberta',
              country: 'CA',
              postal_code: 'T4N 0B8'
            }
          }, function(err, fiscal) {
            fiscalEntity = fiscal;
            assert(fiscal.hasOwnProperty('id'), true);
            done();
          });

        });
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.find(fiscalEntity.parent_id, function(err, cust) {
          cust.fiscal_entities.get(0).update({
            tax_id: 'AMGH851205MN1',
            name: 'Umbrella Corp.',
            email: 'contacto@nike.mx',
            phone: '5215555555566',
            address: {
              street1: '250 Alexis St',
              street2: 'null st',
              internal_number: '19',
              external_number: '91',
              city: 'Red Deer',
              state: 'Alberta',
              country: 'CA',
              postal_code: 'T4N 0B8'
            }
          }, function(err, res) {
            assert(res.hasOwnProperty('id'), true);
            done();
          });
        });

      });

    });

    describe('delete', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.find(fiscalEntity.parent_id, function(err, cust) {
          cust.fiscal_entities.get(0).delete(function(err, res) {
            assert(res.hasOwnProperty('id'), true);
            done();
          });
        });

      });

    });

  });

  describe('Card', function() {

    describe('update', function() {
      it('should return an object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }, {
            type: 'card',
            name: 'Emiliano Cabrera',
            number: '4242424242424242',
            exp_month: '12',
            exp_year: '20',
            cvc: '123',
            address: {
              street1: 'Tamesis',
              street2: '114',
              city: 'Monterrey',
              state: 'Nuevo Leon',
              country: 'MX',
              postal_code: '64700'
            }
          }]
        }, function(err, customer) {
          customer.find(customer._id, function(err, customerObj) {
            customerObj.payment_sources.get(0).update({
              name: 'Emiliano Cabrera',
              exp_month: '12',
              exp_year: '20',
              address: {
                street1: 'Tamesis',
                street2: '114',
                city: 'Monterrey',
                state: 'Nuevo Leon',
                country: 'MX',
                postal_code: '64700'
              }
            }, function(err, res) {
              assert(res.hasOwnProperty('id'), true);
              done();
            });
          });
        });
      });
    });

    describe('delete', function() {
      it('should return an object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }, {
            type: 'card',
            name: 'Emiliano Cabrera',
            number: '4242424242424242',
            exp_month: '12',
            exp_year: '20',
            cvc: '123',
            address: {
              street1: 'Tamesis',
              street2: '114',
              city: 'Monterrey',
              state: 'Nuevo Leon',
              country: 'MX',
              postal_code: '64700'
            }
          }]
        }, function(err, customer) {
          customer.payment_sources.get(0).delete(function(err, res) {
            assert(res.hasOwnProperty('id'), true);
            done();

          });

        });
      });
    });

  });

  describe('Customer Subscription', function() {

    var customerSubscribed = '';

    describe('update subscription plan', function() {
      it('should return an object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }, {
            type: 'card',
            name: 'Emiliano Cabrera',
            number: '4242424242424242',
            exp_month: '12',
            exp_year: '20',
            cvc: '123',
            address: {
              street1: 'Tamesis',
              street2: '114',
              city: 'Monterrey',
              state: 'Nuevo Leon',
              country: 'MX',
              postal_code: '64700'
            }
          }]
        }, function(err, customer) {
          customerSubscribed = customer;
          customerSubscribed.subscription.update({
            plan: 'opal-plan'
          }, function(err, res) {
            assert(res.hasOwnProperty('id'), true);
            done();
          });
        });
      });
    });

    describe('pause', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.pause(function(err, res) {
          assert((res.status == 'paused' || res.toObject().status == 'in_trial'), true);
          done();
        });
      });
    });

    describe('resume', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.resume(function(err, res) {
          assert((res.status == 'active' || res.toObject().status == 'in_trial'), true);
          done();
        });
      });
    });

    describe('cancel', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.cancel(function(err, res) {
          assert(res.status == 'canceled', true);
          done();
        });
      });
    });

  });
});