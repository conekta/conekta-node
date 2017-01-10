var assert = require('assert'),
  conekta = require('../lib/conekta.js'),
  base64 = require('../lib/base64.js');

const LOCALE = 'en',
  TEST_KEY = 'key_eYvWV7gSDkNYXsmr',
  PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn';

var createOrder = function(callback) {
  conekta.Order.create({
    "currency": "MXN",
    "customer_info": {
      "name": "Jul Ceballos",
      "phone": "+5215555555555",
      "email": "jul@conekta.io"
    },
    "line_items": [{
      "name": "Box of Cohiba S1s",
      "description": "Imported From Mex.",
      "unit_price": 35000,
      "quantity": 1,
      "tags": ["food", "mexican food"],
      "type": "physical"
    }]
  }, callback);
}

describe('Conekta wrapper', function() {


  describe('with api key empty', function() {
    it('should return error code api_key_required', function(done) {
      conekta.api_version = '1.1.0'
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
      conekta.Order.create({
        currency: 'MXN',
        "line_items": [{
          "name": "Box of Cohiba S1s",
          "description": "Imported From Mex.",
          "quantity": 1,
          "tags": ["food", "mexican food"],
          "type": "physical"
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
      conekta.Order.create({
        description: 'Stogies',
        currency: 'MXN',
        reference_id: '9839-wolf_pack',
        card: 'tok_test_visa_4242',
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
        assert(err.details[0].hasOwnProperty('message_to_purchaser'), true);
        done();
      });
    });
  });

  describe('request with not found object', function() {
    it('should return error with http_code 404', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.Order.find('123', function(err) {
        assert(err.http_code == 404, true);
        done();
      });
    });
  });

});

describe('Order', function() {

  describe('create', function() {
    it('should return instance object', function(done) {
      this.timeout(10000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      createOrder(function(err, res) {
        assert((res.toObject()) instanceof Object, true);
        done();
      });
    });
  });

  describe('update', function() {
    it('should return instance object', function(done) {
      this.timeout(6000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      createOrder(function(err, res) {
        var order = res.toObject().id;
        res.update({
          tax_lines: [{
            description: "IVA",
            amount: 1000,
            contextual_data: {
              random_key: "random_value"
            }
          }],
          currency: "USD"
        }, function(err, res) {
          assert((res.toObject()) instanceof Object, true);
          done();
        });
      });
    });
  });

  describe('capture order', function() {
    it('should return instance object', function(done) {
      this.timeout(6000);
      conekta.api_key = TEST_KEY;
      conekta.locale = 'en';
      createOrder(function(err, res) {
        res.capture(function(err, res) {
          assert((res.toObject()) instanceof Object, true);
          done();
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
          shippable: true,
          tags: ['food', 'mexican food'],
          brand: 'Nike',
          type: 'physical',
          contextual_data: {
            random_key: 'random value'
          }
        }, callback);
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createLineItem(function(err, line_item) {
          assert(line_item.toObject().hasOwnProperty('id'), true);
          done();
        })
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {
        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createLineItem(function(err, res) {
          res.line_items[0].update({
            "description": "Imported From US.",
            "unit_price": 36000,
            "contextual_data": {
              "random_key": "random_value"
            }
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });


        });
      });

    });

  });

  describe('Tax Line', function() {

    var createTaxLine = function(callback) {
      createOrder(function(err, order) {
        order.createTaxLines({
          "description": "IVA",
          "amount": 600,
          "contextual_data": {
            "random_key": "random_value"
          }
        }, callback);
      });
    };

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createTaxLine(function(err, order) {
          assert(order.toObject().hasOwnProperty('id'), true);
          done();
        });

      });
    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createTaxLine(function(err, order) {
          order.tax_lines[0].update({
            "description": "IVA",
            "amount": 1000,
            "contextual_data": {
              "random_key": "random_value"
            }
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });
        });

      });
    });

  });

  describe('Shipping Line', function() {

    var createShippingLine = function(callback) {
      createOrder(function(err, order) {
        order.createShippingLines({
          "description": "Free Shipping",
          "amount": 0,
          "tracking_number": "TRACK123",
          "carrier": "USPS",
          "method": "Train",
          "contextual_data": {
            "random_key": "random_value"
          }
        }, callback);
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createShippingLine(function(err, order) {
          assert(order.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createShippingLine(function(err, order) {
          order.shipping_lines[0].update({
            "description": "Free Shipping",
            "amount": 0,
            "tracking_number": "TRACK456",
            "carrier": "USPS",
            "method": "Train",
            "contextual_data": {
              "random_key": "random_value"
            }
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });
        });

      });
    });

  });

  describe('Discount Line', function() {

    var createDiscountLine = function(callback) {
      createOrder(function(err, order) {
        order.createDiscountLines({
          "description": "Cupón de descuento",
          "kind": "loyalty",
          "amount": 600
        }, callback);
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createDiscountLine(function(err, order) {
          assert(order.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createDiscountLine(function(err, order) {
          order.discount_lines[0].update({
            "amount": 700
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });
        });

      });
    });

  });

  describe('Charges', function() {

    var createCharge = function(callback) {
      createOrder(function(err, order) {
        order.createCharges({
          "source": {
            "type": "oxxo_cash"
          },
          "amount": 35000
        }, callback);
      });
    }

    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createCharge(function(err, order) {
          assert(order.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

  });

  describe('Returns', function() {

    var createReturn = function(callback) {
      conekta.Order.create({
        "currency": "MXN",
        "customer_info": {
          "name": "Jul Ceballos",
          "phone": "+5215555555555",
          "email": "jul@conekta.io"
        },
        "line_items": [{
          "name": "Box of Cohiba S1s",
          "description": "Imported From Mex.",
          "unit_price": 35000,
          "quantity": 1,
          "tags": ["food", "mexican food"],
          "type": "physical"
        }],
        "charges": [{
          "source": {
            "type": "card",
            "token_id": "tok_test_visa_4242"
          }
        }]
      }, function(err, order) {
        order.createReturns({
          "amount": 35000
        }, callback);
      });

    };


    describe('create', function() {

      it('should return instance object with id', function(done) {

        this.timeout(15000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        createReturn(function(err, order) {
          assert(order.toObject().hasOwnProperty('id'), true);
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
      conekta.locale = LOCALE;
      conekta.Event.where({}, function(err, res) {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });

    it('should return array (just callback)', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
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
      conekta.locale = LOCALE;
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        plan_id: 'gold-plan',
        corporate: true,
        sources: [{
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
            zip: '64700'
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
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.update({
          name: 'Thane Kyrell',
          email: 'mauricio@conekta.io'
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
      conekta.locale = LOCALE;
      conekta.Customer.where({}, function(err, res) {
        assert(res.toArray() instanceof Array, true);
        done();
      });
    });

    it('should return an array (just callback)', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
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
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.createCard({
          "type": "card",
          "name": "Emiliano Cabrera",
          "number": "4242424242424242",
          "exp_month": "12",
          "exp_year": "20",
          "cvc": "123",
          "address": {
            "street1": "Tamesis",
            "street2": "114",
            "city": "Monterrey",
            "state": "Nuevo Leon",
            "country": "MX",
            "zip": "64700"
          }
        }, function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('createsubscription', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
      conekta.locale = LOCALE;
      conekta.Customer.find(customer, function(err, res) {
        res.createSubscription({
          plan: 'gold-plan'
        }, function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });
      });
    });
  });

  describe('delete', function() {
    it('should return an object instance with id attribute', function(done) {
      this.timeout(60000);
      conekta.api_key = TEST_KEY;
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
        conekta.local = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customer.createShippingContacts({
            "email": "thomas.logan@xmen.org",
            "phone": "+5215555555555",
            "receiver": "Marvin Fuller",
            "between_streets": {
              "street1": "Ackerman Crescent",
              "street2": 'Fake st',
              "street3": 'New st'
            },
            "address": {
              "street1": "250 Alexis St",
              "street2": '',
              "street3": '',
              "city": "Red Deer",
              "state": "Alberta",
              "country": "CA",
              "zip": "T4N 0B8",
              "residential": true
            }
          }, function(err, shipping) {
            shippingContact = shipping;
            shipping = shipping.toObject();
            assert(shipping.shipping_contacts[0].hasOwnProperty('id'), true);
            done();
          });

        });
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        shippingContact.shipping_contacts[0].update({
          "email": "thomas.logan@xmen.org",
          "phone": "+5215555555522",
          "receiver": "Marvin Fuller",
          "between_streets": {
            "street1": "Ackerman Crescent",
            "street2": 'something st',
            "street3": 'null st'
          },
          "address": {
            "street1": "250 Alexis St",
            "street2": '',
            "street3": '',
            "city": "Red Deer",
            "state": "Alberta",
            "country": "CA",
            "zip": "T4N 0B8",
            "residential": true
          }
        }, function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('delete', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        shippingContact.shipping_contacts[0].delete(function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
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
        conekta.local = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customer.createfiscalEntities({
            "tax_id": "AMGH851205MN1",
            "company_name": "Nike SA de CV",
            "email": "contacto@nike.mx",
            "phone": "+5215555555522",
            "address": {
              "street1": "250 Alexis St",
              "street2": 'fake st',
              "street3": 'null st',
              "internal_number": 19,
              "external_number": 91,
              "city": "Red Deer",
              "state": "Alberta",
              "country": "CA",
              "zip": "T4N 0B8"
            }
          }, function(err, fiscal) {
            fiscalEntity = fiscal;
            fiscal = fiscal.toObject();
            assert(fiscal.fiscal_entities[0].hasOwnProperty('id'), true);
            done();
          });

        });
      });

    });

    describe('update', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        fiscalEntity.fiscal_entities[0].update({
          "tax_id": "AMGH851205MN1",
          "company_name": "Nike SA de CV",
          "email": "contacto@nike.mx",
          "phone": "5215555555566",
          "address": {
            "street1": "250 Alexis St",
            "street2": 'null st',
            "street3": 'new st',
            "internal_number": 19,
            "external_number": 91,
            "city": "Red Deer",
            "state": "Alberta",
            "country": "CA",
            "zip": "T4N 0B8"
          }
        }, function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

    describe('delete', function() {

      it('should return instance object with id', function(done) {

        this.timeout(6000);
        conekta.api_key = TEST_KEY;
        conekta.local = LOCALE;
        fiscalEntity.fiscal_entities[0].delete(function(err, res) {
          assert(res.toObject().hasOwnProperty('id'), true);
          done();
        });

      });

    });

  });

  describe('Card', function() {

    describe('update', function() {
      it('should return an object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customer.find(customer._id, function(err, customerObj) {
            customerObj.sources[0].update({
              "name": "Emiliano Cabrera",
              "exp_month": "12",
              "exp_year": "20",
              "address": {
                "street1": "Tamesis",
                "street2": "114",
                "city": "Monterrey",
                "state": "Nuevo Leon",
                "country": "MX",
                "zip": "64700"
              }
            }, function(err, res) {
              assert(res.toObject().hasOwnProperty('id'), true);
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
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customer.find(customer._id, function(err, customerObj) {
            customerObj.sources[0].delete(function(err, res) {
              assert(res.toObject().hasOwnProperty('id'), true);
              done();
            });
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
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customerSubscribed = customer;
          customerSubscribed.subscription.update({
            plan: 'opal-plan'
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });
        });
      });
    });

    describe('update subscription card', function() {
      it('should return an object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.locale = LOCALE;
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          sources: [{
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
              zip: '64700'
            }
          }]
        }, function(err, customer) {
          customer.subscription.update({
            plan_id: 'opal-plan',
            card_id: customer.toObject().sources[0].id
          }, function(err, res) {
            assert(res.toObject().hasOwnProperty('id'), true);
            done();
          });
        });
      });
    });

    describe('pause', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.pause(function(err, res) {
          assert((res.toObject().status == 'paused' || res.toObject().status == 'in_trial'), true);
          done();
        });
      });
    });

    describe('resume', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.resume(function(err, res) {
          assert((res.toObject().status == 'active' || res.toObject().status == 'in_trial'), true);
          done();
        });
      });
    });

    describe('cancel', function() {
      it('should return and object instance with id attribute', function(done) {
        this.timeout(60000);
        conekta.api_key = TEST_KEY;
        conekta.locale = LOCALE;
        customerSubscribed.subscription.cancel(function(err, res) {
          assert(res.toObject().status == 'canceled', true);
          done();
        });
      });
    });

  });
});