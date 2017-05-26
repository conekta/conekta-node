var assert = require('assert'),
  conekta = require('../lib/conekta.js'),
  base64 = require('../lib/base64.js'),
  fs = require('fs');

const LOCALE = 'en',
  TEST_KEY = 'key_eYvWV7gSDkNYXsmr',
  API_VERSION = '2.0.0',
  PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn';

var createOrder = function() {
  return conekta.Order.create({
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
  });
}

describe('Conekta wrapper', function() {

  describe('with api key empty', function() {
    it('should return error code api_key_required', function(done) {
      conekta.api_version = API_VERSION;
      createOrder().then(res => {

      }).catch(err => {
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
      }).then(res => {

      }).catch(err => {
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
      }).then(res => {

      }).catch(err => {
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
      conekta.Order.find('123').then(res => {
      }).catch(err => {
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
      conekta.Order.find('123').then(res => {

      }).catch(err => {
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
      ord.nextPage().then(res => {
        assert(res.hasOwnProperty('next_page_url'), true)
        done();
      }).catch(err => {

      });

    });

  });

  describe('create', function() {
    it('should return instance object with id', function(done) {
      this.timeout(10000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.api_version = API_VERSION;
      createOrder().then(res => {
        assert((res.toObject().hasOwnProperty('id')), true);
        done();
      }).catch(err => {

      });
    });
  });

  describe('update', function() {
    it('should return instance object', function(done) {
      this.timeout(6000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      createOrder().then(res => {
        var order = res.toObject().id;
        return res.update({
          payment_status: "created",
          currency: 'USD'})
      }).then(res => {
        assert(res.toObject().currency, 'USD')
        done();
      }).catch(err => {

      });
    });
  });

  describe('capture order', function() {
    it('should return instance object', function(done) {
      this.timeout(20000)
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
        charges: [{
          payment_method: {
            type: 'card',
            token_id: 'tok_test_visa_4242'
          }
        }],
        pre_authorize: true,
        currency: 'MXN'
      }).then(order => {
        return order.capture();
      }).then(res => {
        assert.equal(res.hasOwnProperty('id'), true);
        done();
      }).catch(err => {

      })
    });
  });

  describe('shipping contact', function () {

    describe('create', function () {

      it('should return instance object', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createOrder().then(order => {
          return order.createShippingContact({
            address: {
              street1: "250 Alexis St",
              city: "Red Deer",
              state: "Alberta",
              country: "CA",
              postal_code: "T4N 0B8"
            }
          });
        }).then(shippingContact => {
          assert(shippingContact.object, 'shipping_contact');
          done();
        }).catch(err => {
          console.log(err);
        });
      });

    });
  });

  describe('Line Items', function() {

    var createLineItem = function() {
      return createOrder().then(res => {
        return res.createLineItem({
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
        });
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createLineItem().then(res => {
          return conekta.Order.find(res.parent_id)
        }).then(order => {
          return order.line_items.nextPage();
        }).then(res => {

        }).catch(err => {
          assert(err.details[0].param, 'next_page_url');
          done();
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createLineItem().then(lineItem => {
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
        createLineItem().then(res => {
          return conekta.Order.find(res.parent_id);
        }).then(ord => {
          return ord.line_items.get(1).update({
            name: 'Tie Fighter',
            description: "Imported From the Galactic Empire.",
            unit_price: 36000,
            tags: ['ship']
          });
        }).then(res => {
          assert(res.name, 'Tie Fighter');
          done();
        });
      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createLineItem().then(res => {
          return conekta.Order.find(res.parent_id);
        }).then(order => {
          return order.line_items.get(0).delete();
        }).then(lineItems => {
          assert(lineItems.deleted, true);
          done();
        });
      });
    });
  });

  describe('Tax Line', function() {

    var createTaxLine = function() {
      return createOrder().then(order => {
        return order.createTaxLine({
          description: 'IVA',
          amount: 600,
          metadata: {
            random_key: 'random_value'
          }
        });
      });
    };

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createTaxLine().then(res => {
          return conekta.Order.find(res.parent_id);
        }).then(order => {
          return order.tax_lines.nextPage();
        }).then(res => {

        }).catch(err => {
          assert(err.details[0].param, 'next_page_url');
          done();
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createTaxLine().then(order => {
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
        createTaxLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.tax_lines.get(0).update({amount: 1000});
        }).then(res => {
          assert(res.amount, 1000);
          done();
        });
      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createTaxLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.tax_lines.get(0).delete();
        }).then(taxLine => {
          assert(taxLine.deleted, true);
          done();
        })
      });
    });
  });

  describe('Shipping Line', function() {

    var createShippingLine = function() {
      return createOrder().then(order => {
        return order.createShippingLine({
          amount: 0,
          tracking_number: 'TRACK123',
          carrier: 'USPS',
          method: 'Train',
          metadata: {
            random_key: 'random_value'
          }
        });
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createShippingLine().then(res => {
          return conekta.Order.find(res.parent_id);
        }).then(order => {
          return order.shipping_lines.nextPage();
        }).then(res => {

        }).catch(err => {
          assert(err.details[0].param, 'next_page_url');
          done();
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createShippingLine().then(order => {
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
        createShippingLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.shipping_lines.get(0).update({
            tracking_number: 'TRACK456',
            carrier: 'Mandalorian Express'
          });
        }).then(res => {
          assert(res.tracking_number, 'TRACK456');
          done();
        });

      });
    });

    describe('delete', function () {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createShippingLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.shipping_lines.get(0).delete();
        }).then(res => {
          assert.equal(res.deleted, true);
          done();
        });

      });

    });

  });

  describe('Discount Line', function() {

    var createDiscountLine = function() {
      return createOrder().then(order => {
        return order.createDiscountLine({
          code: 'Cupón de descuento',
          type: 'loyalty',
          amount: 600
        });
      });
    }

    describe('next page', function () {
      it('should return instance object with id', function (done) {
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        this.timeout(6000);

        createDiscountLine().then(res => {
          return conekta.Order.find(res.parent_id);
        }).then(order => {
          return order.discount_lines.nextPage();
        }).then(res => {

        }).catch(err => {
          assert(err.details[0].param, 'next_page_url');
          done();
        });
      });
    });

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        conekta.api_version = API_VERSION;
        createDiscountLine().then(order => {
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
        createDiscountLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.discount_lines.get(0).update({ amount: 700 });
        }).then(res => {
          assert(res.amount, 700);
          done();
        });

      });
    });

    describe('delete', function () {
      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createDiscountLine().then(order => {
          return conekta.Order.find(order.parent_id);
        }).then(ord => {
          return ord.discount_lines.get(0).delete();
        }).then(res => {
          assert(res.deleted, true);
          done();
        });
      });
    });

  });

  describe('Charges', function() {

    var createCharge = function() {
      return createOrder().then(order => {
        return order.createCharge({
          payment_method: {
            type: 'oxxo_cash',
            expires_at: 1513036800
          },
          amount: 35000
        });
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createCharge().then(order => {
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
        this.timeout(8000);

        createCharge().then(res => {
          return conekta.Order.find(res.order_id);
        }).then(order => {
          return order.charges.nextPage();
        }).then(res => {

        }).catch(err => {
          assert(err.details[0].param, 'next_page_url');
          done();
        });
      });
    });

  });

  describe('Refunds', function() {

    var createRefund = function() {
      return conekta.Order.create({
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
          type: 'physical'
        }],
        charges: [{
          payment_method: {
            type: 'card',
            token_id: 'tok_test_visa_4242'
          }
        }]
      }).then(order => {
        return order.createRefund({
          amount: 35000
        });
      });

    };


    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(15000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        createRefund().then(order => {
          assert(order.hasOwnProperty('id'), true);
          done();
        })

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
      conekta.Event.where({}).then(res => {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });
  });
});

describe('Plan', function () {
  var createdPlan = {};
  it('should find plans', function (done) {
    this.timeout(60000);
    conekta.api_key = TEST_KEY;
    conekta.api_version = API_VERSION;
    conekta.locale = LOCALE;
    conekta.Plan.where({currency: 'MXN'}).then(res => {
      done();
    });
  });

  it('should create plan', function (done) {
    this.timeout(6000);
    conekta.api_key = TEST_KEY;
    conekta.api_version = API_VERSION;
    conekta.locale = LOCALE;
    conekta.Plan.create({
      id: "new-gold-plan",
      name: "New Gold Plan",
      amount: 20000,
      currency: "MXN",
      interval: "month",
      frequency: 1,
      trial_period_days: 15,
      expiry_count: 12
    }).then(plan => {
      assert(plan.toObject().hasOwnProperty('id'),true);
      createdPlan = plan;
      done();
    });
  });

  it('should find a plan by id', function (done) {
    this.timeout(6000);
    conekta.api_key = TEST_KEY;
    conekta.api_version = API_VERSION;
    conekta.locale = LOCALE;
    conekta.Plan.find('new-gold-plan').then(plan => {
      assert(plan.toObject().hasOwnProperty('id'), true);
      done();
    });
  });

  it('should delete plan', function (done) {
    this.timeout(6000);
    conekta.api_key = TEST_KEY;
    conekta.api_version = API_VERSION;
    conekta.locale = LOCALE;
    conekta.Plan.find('new-gold-plan').then(plan => {
      return plan.delete();
    }).then(deleted => {
      assert(deleted.hasOwnProperty('_id'), true);
      done();
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
      }).then(res => {
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
        }]
      }).then(customer => {
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
      conekta.Customer.find(customer).then(res => {
        return res.update({
          name: 'Thane Kyrell',
          email: 'thane@jelucan.org'
        });
      }).then(res => {
        assert(res.toObject().hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('where', function() {
    it('should return an array', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.where({}).then(res => {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });

    it('should return an array (just callback)', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.where().then(res => {
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
      conekta.Customer.find(customer).then(res => {
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
      conekta.Customer.find(customer).then(res => {
        return res.createCard({
          token_id: 'tok_test_visa_4242',
          type: 'card'
        });
      }).then(res => {
        assert(res.hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('createsubscription', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer).then(res => {
        return res.createSubscription({
          plan: 'gold-plan'
        });
      }).then(res => {
        assert(res.hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('createPaymentSources', function () {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer).then(res => {
        return res.createPaymentSource({
          type: "card",
          token_id: "tok_test_visa_4242"
        });
      }).then(res => {
        assert(res.hasOwnProperty('id'), true);
        done();
      });
    });
  });

  describe('delete', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.api_version = API_VERSION;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer).then(res => {
        return res.delete();
      }).then(res => {
        assert(res.toObject().hasOwnProperty('id'), true);
        done();
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
          }]
        }).then(customer => {
          return customer.createShippingContact({
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
          });
        }).then(shipping => {
          shippingContact = shipping;
          assert(shipping.hasOwnProperty('id'), true);
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

        conekta.Customer.find(shippingContact.parent_id).then(cust => {
          return cust.shipping_contacts.get(0).update({
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
          });
        }).then(ship => {
          assert(ship.hasOwnProperty('id'), true);
          done();
        });
      });
    });

    describe('delete', function() {

      it('should return instance object with id', function(done) {

        this.timeout(10000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.local = LOCALE;
        conekta.Customer.find(shippingContact.parent_id).then(cust => {
          return cust.shipping_contacts.get(0).delete();
        }).then(res => {
          assert(res.hasOwnProperty('id'), true);
          done();
        })
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
          }]
        }).then(customer => {
          return customer.find(customer._id);
        }).then(customerObj => {
          return customerObj.payment_sources.get(0).update({
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
          });
        }).then(res => {
          assert(res.hasOwnProperty('id'), true);
          done();
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
          }]
        }).then(customer => {
          return customer.payment_sources.get(0).delete();
        }).then(res => {
          assert(res.hasOwnProperty('id'), true);
          done();
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
          phone: "+5215544443333",
          email: 'james.howlett@forces.gov',
          corporate: true,
          plan_id: 'gold-plan',
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }]
        }).then(customer => {
          customerSubscribed = customer;
          return customerSubscribed.subscription.update({
            plan: 'opal-plan'
          });
        }).then(res => {
          assert(res.hasOwnProperty('id'), true);
          done();
        });
      });
    });

    describe('pause', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        conekta.Customer.find(customerSubscribed._id).then(customer => {
          return customer.subscription.pause();
        }).then(res => {
          assert((res.status == 'paused' || res.status == 'in_trial'), true);
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
        conekta.Customer.find(customerSubscribed._id).then(customer => {
          return customerSubscribed.subscription.update({
            plan_id: 'gold-plan'
          }).then(res => {
            return customer.subscription.resume();
          });
        }).then(res => {
          assert((res.status == 'active' || res.status == 'in_trial'), true);
          done();
        })
      });
    });

    describe('cancel', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.api_version = API_VERSION;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.cancel().then(res => {
          assert(res.status == 'canceled', true);
          done();
        });
      });
    });
  });
});
