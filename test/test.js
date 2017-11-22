const assert = require('assert')
const nock = require('nock')
const fs = require('fs')

const conekta = require('../lib/conekta.js')
const base64 = require('../lib/base64.js')
const LOCALE = 'en'
const TEST_KEY = 'key_eYvWV7gSDkNYXsmr'
const API_VERSION = '2.0.0'
const PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn'
const TIMEOUT = 25000

const createOrder = (callback) => {
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
      tags: ['food', 'mexican food']
    }]
  }, callback)
}

describe('Conekta wrapper', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  describe('with api down or busy', () => {
    nock('https://api.conekta.io')
    .post('/orders')
    .replyWithError({
      code: 'ENOTFOUND',
      errno: 'ENOTFOUND',
      syscall: 'getaddrinfo',
      hostname: 'api.conekta.io',
      host: 'api.conekta.io',
      port: 443 })

    it('should return error when api is down', (done) => {
      conekta.api_key = TEST_KEY
      createOrder((err, order) => {
        assert(err.http_code === 520, true)
        nock.restore()
        done()
      })
    })
  })

  describe('with api key empty', () => {
    it('should return error code api_key_required', (done) => {
      conekta.api_key = ''
      createOrder((err, order) => {
        assert(err.code === 'api_key_required', true)
        done()
      })
    })
  })

  describe('request with bad arguments', () => {
    it('should return error code with empty argument', (done) => {
      conekta.Order.create({
        currency: 'MXN',
        line_items: [{
          name: 'Box of Cohiba S1s',
          description: 'Imported From Mex.',
          quantity: 1,
          tags: ['food', 'mexican food']
        }]
      }, (err) => {
        assert(err.type === 'parameter_validation_error', true)
        done()
      })
    })
  })

  describe('request with errors', () => {
    it('should return message_to_purchaser on error response', (done) => {
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
            quantity: 1
          }]
        }
      }, (err) => {
        assert(err.details[0].hasOwnProperty('message'), true)
        done()
      })
    })
  })

  describe('request with not found object', () => {
    it('should return error with http_code 404', (done) => {
      conekta.Order.find('123', (err) => {
        assert(err.http_code === 404, true)
        done()
      })
    })
  })

  describe('api version unsupported', () => {
    it('should return error ', (done) => {
      conekta.api_version = '1.0.0'
      conekta.Order.find('123', (err) => {
        assert(err.code === 'api_version_unsupported', true)
        done()
      })
    })
  })
})

describe('Order', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  describe('next page', () => {
    it('should return something', (done) => {
      const mFile = fs.readFileSync(__dirname + '/../lib/orders.json')

      const ord = conekta.Order
      ord._json = JSON.parse(mFile)

      ord.nextPage((err, res) => {
        assert(res.hasOwnProperty('next_page_url'), true)
        done()
      })
    })
  })

  describe('multiple orders', () => {
    it('should return an array of orders', (done) => {
      conekta.Order.where({
        livemode: false,
        currency: 'USD'
      }, (err, orders) => {
        assert(orders.toObject().data instanceof Array, true)
        done()
      })
    })
  })

  describe('create', () => {
    it('should return instance object with id', (done) => {
      createOrder((err, res) => {
        assert((res.toObject().hasOwnProperty('id')), true)
        done()
      })
    })
  })

  describe('update', () => {
    it('should return instance object', (done) => {
      createOrder((err, res) => {
        const order = res.toObject().id
        res.update({
          payment_status: 'created',
          currency: 'USD'
        }, (err, res) => {
          assert(res.toObject().currency, 'USD')
          done()
        })
      })
    })
  })

  describe('capture order', () => {
    it('should return instance object', (done) => {
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
      }, (err, order) => {
        order.capture((err, res) => {
          assert.equal(res.hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('shipping contact', () => {
    describe('create', () => {
      it('should return instance object', (done) => {
        createOrder((err, order) => {
          order.createShippingContact({
            address: {
              street1: '250 Alexis St',
              city: 'Red Deer',
              state: 'Alberta',
              country: 'CA',
              postal_code: 'T4N 0B8'
            }
          }, (err, shippingContact) => {
            assert(shippingContact.object, 'shipping_contact')
            done()
          })
        })
      })
    })
  })

  describe('Line Items', () => {
    const createLineItem = (callback) => {
      createOrder((err, res) => {
        res.createLineItem({
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
        }, callback)
      })
    }

    describe('next page', () => {
      it('should return instance object with id', (done) => {
        createLineItem((err, res) => {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.line_items.nextPage((err, res) => {
              assert(err.details[0].param, 'next_page_url')
              done()
            })
          })
        })
      })
    })

    describe('create', () => {
      it('should return instance object with id', (done) => {
        conekta.local = LOCALE
        createLineItem((err, lineItem) => {
          assert(lineItem.hasOwnProperty('id'), true)
          done()
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        createLineItem((err, res) => {
          conekta.Order.find(res.parent_id, (err, ord) => {
            ord.line_items.get(1).update({
              name: 'Tie Fighter',
              description: 'Imported From the Galactic Empire.',
              unit_price: 36000,
              tags: ['ship']
            }, (err, res) => {
              assert(res.name, 'Tie Fighter')
              done()
            })
          })
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        createLineItem((err, res) => {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.line_items.get(0).delete((err, lineItems) => {
              assert(lineItems.deleted, true)
              done()
            })
          })
        })
      })
    })
  })

  describe('Tax Line', () => {
    const createTaxLine = (callback) => {
      createOrder((err, order) => {
        order.createTaxLine({
          description: 'IVA',
          amount: 600,
          metadata: {
            random_key: 'random_value'
          }
        }, callback)
      })
    }

    describe('next page', () => {
      it('should return instance object with id', (done) => {
        createTaxLine((err, res) => {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.tax_lines.nextPage((err, res) => {
              assert(err.details[0].param, 'next_page_url')
              done()
            })
          })
        })
      })
    })

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createTaxLine((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        createTaxLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.tax_lines.get(0).update({
              amount: 1000
            }, (err, res) => {
              assert(res.amount, 1000)
              done()
            })
          })
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        createTaxLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.tax_lines.get(0).delete((err, taxLine) => {
              assert(taxLine.deleted, true)
              done()
            })
          })
        })
      })
    })
  })

  describe('Shipping Line', () => {
    const createShippingLine = (callback) => {
      createOrder((err, order) => {
        order.createShippingLine({
          amount: 0,
          tracking_number: 'TRACK123',
          carrier: 'USPS',
          method: 'Train',
          metadata: {
            random_key: 'random_value'
          }
        }, callback)
      })
    }

    describe('next page', () => {
      it('should return instance object with id', (done) => {
        createShippingLine((err, res) => {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.shipping_lines.nextPage((err, res) => {
              assert(err.details[0].param, 'next_page_url')
              done()
            })
          })
        })
      })
    })

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createShippingLine((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        createShippingLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.shipping_lines.get(0).update({
              tracking_number: 'TRACK456',
              carrier: 'Mandalorian Express'
            }, (err, res) => {
              assert(res.tracking_number, 'TRACK456')
              done()
            })
          })
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        createShippingLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.shipping_lines.get(0).delete((err, res) => {
              assert.equal(res.deleted, true)
              done()
            })
          })
        })
      })
    })
  })

  describe('Discount Line', () => {
    const createDiscountLine = (callback) => {
      createOrder((err, order) => {
        order.createDiscountLine({
          code: 'Cupón de descuento',
          type: 'loyalty',
          amount: 600
        }, callback)
      })
    }

    describe('next page', () => {
      it('should return instance object with id', (done) => {
        createDiscountLine(function (err, res) {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.discount_lines.nextPage((err, res) => {
              assert(err.details[0].param, 'next_page_url')
              done()
            })
          })
        })
      })
    })

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createDiscountLine((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        createDiscountLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.discount_lines.get(0).update({
              amount: 700
            }, (err, res) => {
              assert(res.amount, 700)
              done()
            })
          })
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        createDiscountLine((err, order) => {
          conekta.Order.find(order.parent_id, (err, ord) => {
            ord.discount_lines.get(0).delete((err, res) => {
              assert(res.deleted, true)
              done()
            })
          })
        })
      })
    })
  })

  describe('Charges', () => {
    const createCharge = (callback) => {
      createOrder((err, order) => {
        order.createCharge({
          payment_method: {
            type: 'oxxo_cash',
            expires_at: 1513036800
          },
          amount: 35000
        }, callback)
      })
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createCharge((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })
    })

    describe('next page', () => {
      it('should return instance object with id', (done) => {
        createCharge((err, res) => {
          conekta.Order.find(res.order_id, (err, order) => {
            order.charges.nextPage((err, res) => {
              assert(err.details[0].param, 'next_page_url')
              done()
            })
          })
        })
      })
    })
  })

  describe('Refunds', () => {
    const createRefund = (callback) => {
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
          type: 'physical'
        }],
        charges: [{
          payment_method: {
            type: 'card',
            token_id: 'tok_test_visa_4242'
          }
        }]
      }, (err, order) => {
        order.createRefund({
          amount: 35000
        }, callback)
      })
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createRefund((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })
})

describe('Event', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  describe('where', () => {
    it('should return array', (done) => {
      conekta.Event.where({}, (err, res) => {
        assert(res.toArray() instanceof Array, true)
        done()
      })
    })
  })
})

describe('Plan', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  let createdPlan = {}
  it('should find plans', (done) => {
    conekta.Plan.where({currency: 'MXN'}, (err, plans) => {
      done()
    })
  })

  it('should create plan', (done) => {
    conekta.Plan.create({
      id: 'new-gold-plan',
      name: 'New Gold Plan',
      amount: 20000,
      currency: 'MXN',
      interval: 'month',
      frequency: 1,
      trial_period_days: 15,
      expiry_count: 12
    }, (err, plan) => {
      assert(plan.toObject().hasOwnProperty('id'), true)
      createdPlan = plan
      done()
    })
  })

  it('should find a plan by id', (done) => {
    conekta.Plan.find('new-gold-plan', (err, plan) => {
      assert(plan.toObject().hasOwnProperty('id'), true)
      done()
    })
  })

  it('should delete plan', (done) => {
    conekta.Plan.find('new-gold-plan', (err, plan) => {
      plan.delete(function (err, deleted) {
        assert(deleted.hasOwnProperty('_id'), true)
        done()
      })
    })
  })
})

describe('Customer', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  let customer = ''

  describe('create without plan', () => {
    it('should return an object instance with id', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }, (err, res) => {
        res = res.toObject()
        customer = res.id
        assert(res.hasOwnProperty('id'), true)
        done()
      })
    })
  })

  describe('create with plan', () => {
    it('should return an object instance with id', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        plan_id: 'gold-plan',
        corporate: true,
        payment_sources: [{
          token_id: 'tok_test_visa_4242',
          type: 'card'
        }]
      }, (err, customer) => {
        res = customer.toObject()
        assert(res.hasOwnProperty('id'), true)
        done()
      })
    })
  })

  describe('update', () => {
    it('should return an object instance with id', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        res.update({
          name: 'Thane Kyrell',
          email: 'thane@jelucan.org'
        }, (err, res) => {
          assert(res.toObject().hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('where', () => {
    it('should return an array', (done) => {
      conekta.Customer.where({}, (err, res) => {
        assert(res.toArray() instanceof Array, true)
        done()
      })
    })

    it('should return an array (just callback)', (done) => {
      conekta.Customer.where((err, res) => {
        assert(res.toArray() instanceof Array, true)
        done()
      })
    })
  })

  describe('find', () => {
    it('should return an object instance with id attribute', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        assert(res.toObject().hasOwnProperty('id'), true)
        done()
      })
    })
  })

  describe('createcard', () => {
    it('should return an object instance with id attribute', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        res.createCard({
          token_id: 'tok_test_visa_4242',
          type: 'card'
        }, (err, res) => {
          assert(res.hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('createsubscription', () => {
    it('should return an object instance with id attribute', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        res.createSubscription({
          plan: 'gold-plan'
        }, (err, res) => {
          assert(res.hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('createPaymentSources', () => {
    it('should return an object instance with id attribute', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        res.createPaymentSource({
          type: 'card',
          token_id: 'tok_test_visa_4242'
        }, (err, res) => {
          assert(res.hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('delete', () => {
    it('should return an object instance with id attribute', (done) => {
      conekta.Customer.find(customer, (err, res) => {
        res.delete((err, res) => {
          assert(res.toObject().hasOwnProperty('id'), true)
          done()
        })
      })
    })
  })

  describe('Shipping Contact', function () {
    var shippingContact = ''

    describe('create', () => {
      it('should return instance object with id', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }]
        }, (err, customer) => {
          customer.createShippingContact({
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
          }, (err, shipping) => {
            shippingContact = shipping
            assert(shipping.hasOwnProperty('id'), true)
            done()
          })
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        conekta.Customer.find(shippingContact.parent_id, (err, cust) => {
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
          }, (err, ship) => {
            assert(ship.hasOwnProperty('id'), true)
            done()
          })
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        conekta.Customer.find(shippingContact.parent_id, (err, cust) => {
          cust.shipping_contacts.get(0).delete((err, res) => {
            assert(res.hasOwnProperty('id'), true)
            done()
          })
        })
      })
    })
  })

  describe('Card', () => {
    describe('update', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }]
        }, (err, customer) => {
          customer.find(customer._id, (err, customerObj) => {
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
            }, (err, res) => {
              assert(res.hasOwnProperty('id'), true)
              done()
            })
          })
        })
      })
    })

    describe('delete', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov',
          plan_id: 'gold-plan',
          corporate: true,
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }]
        }, (err, customer) => {
          customer.payment_sources.get(0).delete((err, res) => {
            assert(res.hasOwnProperty('id'), true)
            done()
          })
        })
      })
    })
  })

  describe('Customer Subscription', () => {
    let customerSubscribed = ''

    describe('update subscription plan', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          phone: '+5215544443333',
          email: 'james.howlett@forces.gov',
          corporate: true,
          plan_id: 'gold-plan',
          payment_sources: [{
            token_id: 'tok_test_visa_4242',
            type: 'card'
          }]
        }, (err, customer) => {
          customerSubscribed = customer
          customerSubscribed.subscription.update({
            plan: 'opal-plan'
          }, (err, res) => {
            assert(res.hasOwnProperty('id'), true)
            done()
          })
        })
      })
    })

    describe('pause', () => {
      it('should return and object instance with id attribute', (done) => {
        conekta.Customer.find(customerSubscribed._id, (err, customer) => {
          customer.subscription.pause((err, res) => {
            assert((res.status === 'paused' || res.status === 'in_trial'), true)
            done()
          })
        })
      })
    })

    describe('resume', () => {
      it('should return and object instance with id attribute', (done) => {
        conekta.Customer.find(customerSubscribed._id, (err, customer) => {
          customerSubscribed.subscription.update({
            plan_id: 'gold-plan'
          }, (err, res) => {
            customer.subscription.resume((err, res) => {
              assert((res.status === 'active' || res.status === 'in_trial'), true)
              done()
            })
          })
        })
      })
    })

    describe('cancel', () => {
      it('should return and object instance with id attribute', (done) => {
        customerSubscribed.subscription.cancel((err, res) => {
          assert(res.status == 'canceled', true)
          done()
        })
      })
    })
  })
})
