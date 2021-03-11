const assert = require('assert')
const nock = require('nock')
const fs = require('fs')
const _ = require('underscore')

const conekta = require('../lib/conekta.js')
const base64 = require('../lib/base64.js')
const LOCALE = 'en'
const TEST_KEY = 'key_eYvWV7gSDkNYXsmr'
const API_VERSION = '2.0.0'
const PRODUCTION_KEY = '9YxqfRnx4sMQDnRsqdYn'
const TIMEOUT = 30000

const orderBody = {
  currency: 'MXN',
  customer_info: {
    name: 'Fulanito Perez',
    phone: '5555555555',
    email: 'fulanito@example.com'
  },
  line_items: [{
    name: 'Box of Cohiba S1s',
    description: 'Imported From Mex.',
    unit_price: 35000,
    quantity: 1,
    tags: ['food', 'mexican food']
  }]
}

const createOrder = (callback) => {
  conekta.Order.create(orderBody, callback)
}

const createOrderPromise = () => {
  return conekta.Order.create(
    orderBody
  )
}

describe('Conekta wrapper', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  describe('with api down or busy', () => {
    before(function () {
      nock('https://api.conekta.io')
        .post('/orders')
        .replyWithError({
          code: 'ENOTFOUND',
          errno: 'ENOTFOUND',
          syscall: 'getaddrinfo',
          hostname: 'api.conekta.io',
          host: 'api.conekta.io',
          port: 443 })
    })

    it('should return error when api is down', (done) => {
      conekta.api_key = TEST_KEY
      createOrder((err, order) => {
        assert(err.http_code === 520, true)
        done()
      })
    })

    after(function () {
      nock.restore()
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

  describe('next and previous page', () => {
    it('should return something', (done) => {
      const mFile = fs.readFileSync(__dirname + '/../lib/orders.json')

      const ord = conekta.Order
      ord._json = JSON.parse(mFile)

      ord.nextPage((err, res) => {
        assert(res._json.hasOwnProperty('next_page_url'), true)
        assert(res._json.hasOwnProperty('previous_page_url'), true)

        res.nextPage((err, res) => {
          assert(res._json.hasOwnProperty('next_page_url'), true)
          assert(res._json.hasOwnProperty('previous_page_url'), true)

          res.previousPage((err, res) => {
            assert(res._json.hasOwnProperty('next_page_url'), true)
            done()
          })
        })
      })
    })
  })

  describe('multiple orders', () => {
    it('should return an array of orders', (done) => {
      conekta.Order.where({'id': 'example@example.com'}, (err, orders) => {
        assert(orders.toObject().data instanceof Array, true)
        done()
      })
    })
  })

  describe('multiple orders', () => {
    it('should return an array of orders when using dot notation', (done) => {
      conekta.Order.where({
        'customer_info.email': 'fulanito@example.com'
      }, (err, orders) => {
        assert(orders.toObject().data instanceof Array, true)
        assert(orders.toObject().data.length > 0, true)
        done()
      })
    })

    it('should return an array of orders when searching for a customer id with embedded fields', (done) => {
      conekta.Order.where({
        'customer_info': { 'email': 'fulanito@example.com' }
      }, (err, orders) => {
        assert(orders.toObject().data instanceof Array, true)
        assert(orders.toObject().data.length > 0, true)
        done()
      })
    })
  })

  describe('create', () => {
    before((done)=>{
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }).then((customer)=>{
        global.customer_id = customer.toObject().id
        done()
      }, (err)=>{
        done()
      })
    })

    // nock.restore()
    it('should return instance object with id', (done) => {
      createOrder((err, res) => {
        assert((res.toObject().hasOwnProperty('id')), true)
        done()
      })
    })

    it('should return instance object with checkout', (done) => {
      let orderWithCheckoutBody = Object.assign(orderBody, {
        customer_info: {
          customer_id: customer_id
        },
        checkout: {
          expired_at: Math.floor(Date.now()/1000 + 259200 + Math.random() * 3600),
          allowed_payment_methods: ["cash", "card", "bank_transfer"]
        }
      })

      conekta.Order.create(orderWithCheckoutBody, (err, res) => {
        assert.equal(err, null)
        let order = res.toObject()
        assert((order.hasOwnProperty('id')), true)
        assert.equal(order.checkout.type, "Integration")
        assert.equal(order.checkout.monthly_installments_enabled, false)
        assert.equal(order.checkout.on_demand_enabled, false)
        done()
      })
    })

    it('should return instance object with checkout and monthly installments', (done) => {
      let orderWithCheckoutBody = Object.assign(orderBody, {
        customer_info: {
          customer_id: customer_id
        },
        checkout: {
          "expired_at": Math.floor(Date.now()/1000 + 259200 + Math.random() * 3600),
          "allowed_payment_methods": ["cash", "card", "bank_transfer"],
          "monthly_installments_enabled": true,
          "monthly_installments_options": [3, 6, 12]
	}
      })

      conekta.Order.create(orderWithCheckoutBody, (err, res) => {
        assert.equal(err, null)
        let order = res.toObject()
        assert((order.hasOwnProperty('id')), true)
        assert.equal(order.checkout.type, "Integration")
        assert.equal(order.checkout.monthly_installments_enabled, true)
        assert.equal(order.checkout.on_demand_enabled, false)
        done()
      })
    })

    it('should return instance object with checkout and saves card', (done) => {
      let orderWithCheckoutBody = Object.assign(orderBody, {
        customer_info: {
          customer_id: customer_id
        },
        checkout: {
          "expired_at": Math.floor(Date.now()/1000 + 259200 + Math.random() * 3600),
          "allowed_payment_methods": ["cash", "card", "bank_transfer"],
          "on_demand_enabled": true
	}
      })

      conekta.Order.create(orderWithCheckoutBody, (err, res) => {
        assert.equal(err, null)
        let order = res.toObject()
        assert((order.hasOwnProperty('id')), true)
        assert.equal(order.checkout.type, "Integration")
        assert.equal(order.checkout.monthly_installments_enabled, false)
        assert.equal(order.checkout.on_demand_enabled, true)
        done()
      })
    })

    it('should return instance object with id using promises', (done) => {
      conekta.Order.create(
        orderBody
      ).then(function (result) {
        assert((result.toObject().hasOwnProperty('id')), true)
        done()
      }, function (error) {
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

    it('should return instance object with id using promises', (done) => {
      conekta.Order.create(
        orderBody
      ).then(function (result) {
        result.update({
          currency: 'USD'
        }).then(function (result) {
          assert(result.toObject().currency, 'USD')
          done()
        }, function (error) {
        })
      }, function (error) {
      })
    })
  })

  describe('capture order', () => {
    const preAuthOrd = {
      customer_info: {
        name: 'Fulanito Perez',
        phone: '+5215555555555',
        email: 'fulanito@example.com'
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
    }

    it('should return instance object', (done) => {
      conekta.Order.create(preAuthOrd, (err, order) => {
        order.capture((err, res) => {
          assert(order.toObject().id, res.id)
          assert(res.payment_status, 'paid')
          done()
        })
      })
    })

    it('should return instance object using promises', (done) => {
      conekta.Order.create(
        preAuthOrd
      ).then(function (order) {
        order.capture().then(function (result) {
          assert(result.id, order.id)
          assert(result.payment_status, 'paid')
          done()
        }, function (error) {})
      }, function (error) {
      })
    })
  })

  describe('shipping contact', () => {
    const address = {
      street1: '250 Alexis St',
      city: 'Red Deer',
      state: 'Alberta',
      country: 'CA',
      postal_code: 'T4N 0B8'
    }

    describe('create', () => {
      it('should return instance object', (done) => {
        createOrder((err, order) => {
          order.createShippingContact({
            address
          }, (err, shippingContact) => {
            assert(shippingContact.toObject(), 'shipping_contact')
            assert(order.toObject().shipping_contact.address.state, 'Alberta')
            done()
          })
        })
      })

      it('should return instance object using promises', (done) => {
        conekta.Order.create(
          orderBody
        ).then(function (order) {
          order.createShippingContact(
            address
          ).then(function (shippingContact) {
            assert(order.toObject().shipping_contact.object, 'shipping_contact')
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Line Items', () => {
    const lineItemBody = {
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
    }

    const createLineItem = (callback) => {
      createOrder((err, res) => {
        res.createLineItem(lineItemBody, callback)
      })
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createLineItem((err, lineItem) => {
          assert(lineItem.hasOwnProperty('id'), true)
          done()
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createLineItem(lineItemBody).then(function (lineItem) {
            assert(lineItem.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.line_items.nextPage(function (result) {
            assert(result.details[0].param, 'next_page_url')
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('update', () => {
      const lineItemData = {
        name: 'Tie Fighter',
        description: 'Imported From the Galactic Empire.',
        unit_price: 50000,
        quantity: 1,
        tags: ['ship']
      }

      it('should return instance object with id', (done) => {
        createLineItem((err, res) => {
          conekta.Order.find(res.parent_id, (err, ord) => {
            ord.line_items.get(1).update(lineItemData, (err, res) => {
              assert(res.name, 'Tie Fighter')
              done()
            })
          })
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.line_items.get(0).update(lineItemData).then(function (lineItem) {
            assert(lineItem.name, 'Tie Fighter')
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('delete', () => {
      it('should return instance object with id', (done) => {
        createLineItem((err, res) => {
          conekta.Order.find(res.parent_id, (err, order) => {
            order.createLineItem(lineItemBody).then((err, response) => {
              order.line_items.get(0).delete((err, lineItems) => {
                assert(lineItems.deleted, true)
                done()
              })
            })
          })
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createLineItem(lineItemBody).then(function (LineItem) {
            order.line_items.get(0).delete().then(function (deletedLineItem) {
              assert(deletedLineItem.deleted, true)
              done()
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Tax Line', () => {
    const TaxLineBody = {
      description: 'IVA',
      amount: 600,
      metadata: {
        random_key: 'random_value'
      }
    }

    const createTaxLine = (callback) => {
      createOrder((err, order) => {
        order.createTaxLine(TaxLineBody, callback)
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createTaxLine(TaxLineBody).then(function (taxLine) {
            order.tax_lines.nextPage(function (result) {
              assert(result.details[0].param, 'next_page_url')
              done()
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createTaxLine((err, taxLine) => {
          assert(taxLine.hasOwnProperty('id'), true)
          done()
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createTaxLine(TaxLineBody).then(function (taxLine) {
            assert(taxLine.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createTaxLine(TaxLineBody).then(function (taxLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.tax_lines.get(0).update({
                amount: 1000
              }).then(function (updatedTaxLine) {
                assert(updatedTaxLine.amount, 1000)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createTaxLine(TaxLineBody).then(function (taxLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.tax_lines.get(0).delete().then(function (deletedTaxLine) {
                assert(deletedTaxLine.deleted, true)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Shipping Line', () => {
    const shippingLineBody = {
      amount: 0,
      tracking_number: 'TRACK123',
      carrier: 'USPS',
      method: 'Train',
      metadata: {
        random_key: 'random_value'
      }
    }

    const createShippingLine = (callback) => {
      createOrder((err, order) => {
        order.createShippingLine(shippingLineBody, callback)
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createShippingLine(shippingLineBody).then(function (shippingLine) {
            order.shipping_lines.nextPage(function (result) {
              assert(result.details[0].param, 'next_page_url')
              done()
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createShippingLine(shippingLineBody).then(function (shippingLine) {
            assert(shippingLine.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createShippingLine(shippingLineBody).then(function (shippingLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.shipping_lines.get(0).update({
                amount: 1000
              }).then(function (updatedShippingLine) {
                assert(updatedShippingLine.amount, 1000)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createShippingLine(shippingLineBody).then(function (shippingLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.shipping_lines.get(0).delete().then(function (deletedShippingLine) {
                assert(deletedShippingLine.deleted, true)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Discount Line', () => {
    const discountLineBody = {
      code: 'Cupón de descuento',
      type: 'loyalty',
      amount: 600
    }

    const createDiscountLine = (callback) => {
      createOrder((err, order) => {
        order.createDiscountLine(discountLineBody, callback)
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createDiscountLine(discountLineBody).then(function (discountLine) {
            order.discount_lines.nextPage(function (result) {
              assert(result.details[0].param, 'next_page_url')
              done()
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createDiscountLine(discountLineBody).then(function (discountLine) {
            assert(discountLine.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createDiscountLine(discountLineBody).then(function (discountLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.discount_lines.get(0).update({
                amount: 1000
              }).then(function (updatedDiscountLine) {
                assert(updatedDiscountLine.amount, 1000)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createDiscountLine(discountLineBody).then(function (discountLine) {
            conekta.Order.find(order._id).then(function (updatedOrd) {
              updatedOrd.discount_lines.get(0).delete().then(function (deletedDiscountLine) {
                assert(deletedDiscountLine.deleted, true)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Charges', () => {
    const chargeBody = {
      payment_method: {
        type: 'oxxo_cash',
        expires_at: Math.floor(Date.now() / 1000) + 3600
      },
      amount: 35000
    }

    const createCharge = (callback) => {
      createOrder((err, order) => {
        order.createCharge(chargeBody, callback)
      })
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createCharge((err, charge) => {
          assert(charge.hasOwnProperty('id'), true)
          done()
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createCharge(chargeBody).then(function (charge) {
            assert(charge.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        createOrderPromise().then(function (order) {
          order.createCharge(chargeBody).then(function (charge) {
            order.charges.nextPage(function (result) {
              assert(result.details[0].param, 'next_page_url')
              done()
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Refunds', () => {
    const orderChargeBody = {
      currency: 'MXN',
      customer_info: {
        name: 'Fulanito Perez',
        phone: '+5215555555555',
        email: 'fulanito@example.com'
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
    }

    const createRefund = (callback) => {
      conekta.Order.create(orderChargeBody, (err, order) => {
        order.createRefund({
          amount: 35000
        }, callback)
      })
    }

    const createOrderChargePromise = () => {
      return conekta.Order.create(
        orderChargeBody
      )
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        createRefund((err, order) => {
          assert(order.hasOwnProperty('id'), true)
          done()
        })
      })

      it('should return instance object with id using promises', (done) => {
        createOrderChargePromise().then(function (order) {
          order.createRefund({ amount: 35000 }).then(function (refundedOrd) {
            assert(refundedOrd.hasOwnProperty('id'), true)
            assert(refundedOrd.payment_status, 'refunded')
            done()
          }, function (error) {
          })
        }, function (error) {
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

    it('should return array using promises', (done) => {
      conekta.Event.where().then(function (list) {
        assert(list.toArray() instanceof Array, true)
        done()
      }, function (error) {
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

  describe('find', () => {
    it('should find plans', (done) => {
      conekta.Plan.where({ currency: 'MXN' }, (err, plans) => {
        assert(plans._json.object, 'list')
        done()
      })
    })

    it('should find plans using promises', (done) => {
      conekta.Plan.where({ currency: 'MXN' }).then(function (list) {
        assert(list._json.object, 'list')
        done()
      }, function (error) {
      })
    })
  })

  describe('create', () => {
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

    it('should create plan using promises', (done) => {
      conekta.Plan.create({
        id: 'new-blue-plan',
        name: 'New Silver Plan',
        amount: 20000,
        currency: 'MXN',
        interval: 'month',
        frequency: 1,
        trial_period_days: 15,
        expiry_count: 12
      }).then(function (plan) {
        assert(plan.toObject().hasOwnProperty('id'), true)
        done()
      }, function (error) {
      })
    })
  })

  describe('find by id', () => {
    it('should find a plan by id', (done) => {
      conekta.Plan.find('new-gold-plan', (err, plan) => {
        assert(plan.toObject().hasOwnProperty('id'), true)
        done()
      })
    })

    it('should find a plan by id using promises', (done) => {
      conekta.Plan.find('new-blue-plan').then(function (plan) {
        assert(plan.toObject().hasOwnProperty('id'), true)
        done()
      }, function (error) {
      })
    })
  })

  describe('delete', () => {
    it('should delete plan', (done) => {
      conekta.Plan.find('new-gold-plan', (err, plan) => {
        plan.delete(function (err, deleted) {
          assert(deleted.hasOwnProperty('_id'), true)
          done()
        })
      })
    })

    it('should delete plan using promises', (done) => {
      conekta.Plan.find('new-blue-plan').then(function (plan) {
        plan.delete().then(function (deletedPlan) {
          assert(deletedPlan._json.deleted, true)
          done()
        }, function (error) {
        })
      }, function (error) {
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

    it('should return an object instance with id using promises', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }).then(function (customer) {
        assert(customer.toObject().hasOwnProperty('id'), true)
        done()
      }, function (error) {
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

    it('should return an object instance with id using promises', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        plan_id: 'gold-plan',
        corporate: true,
        payment_sources: [{
          token_id: 'tok_test_visa_4242',
          type: 'card'
        }]
      }).then(function (customer) {
        assert(customer.toObject().hasOwnProperty('id'), true)
        done()
      }, function (error) {
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

    it('should return an object instance with id using promises', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }).then(function (customer) {
        customer.update({
          name: 'Thane Kyrell',
          email: 'thane@jelucan.org'
        }).then(function (updatedCus) {
          assert(updatedCus.toObject().name, 'Thane Kyrell')
          done()
        }, function (error) {
        })
      }, function (error) {
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

    it('should return an array using promises', (done) => {
      conekta.Customer.where().then(function (list) {
        assert(list.toArray() instanceof Array, true)
        done()
      }, function (error) {
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

    it('should return an object instance with id attribute using promsies', (done) => {
      conekta.Customer.find(customer).then(function (customer) {
        assert(customer.toObject().hasOwnProperty('id'), true)
        done()
      }, function (error) {
      })
    })

    it('should no return a the same customer when find another', (done) => {
      let customerA = ''
      let customerB = ''
      
      let createPromises = []

      const createCustomer = (customer) => new Promise((resolve, reject) => {
        conekta.Customer.create(customer, (err, res) => {
          if (err) {
            console.log(err)
            reject(err)
            return
          }

          let result = res.toObject()
          resolve(result)
        })
      })

      const findCustomer = (customer) => new Promise((resolve, reject) => {
        conekta.Customer.find(customer, (err, res) => {
          if (err) {
            console.log(err)
            reject(err)
            return
          }

          let result = res.toObject()

          resolve(result)
        })
      })

      let promiseCustomerA = createCustomer({
        name: 'userA',
        email: 'user_a@company.com'
      })
      
      createPromises.push(promiseCustomerA)

      promiseCustomerA.then((customer) => {
        customerA = customer.id
      })

      let promiseCustomerB = createCustomer({
        name: 'userB',
        email: 'user_b@company.com'
      })
      
      createPromises.push(promiseCustomerB)

      promiseCustomerB.then((customer) => customerB = customer.id)

      Promise.all(createPromises)
        .then(() => {
          let responseCustomerA = ''
          let responseCustomerB = ''

          let findPromises = []

          console.log('A:', customerA)
          console.log('B:', customerB)

          let promiseFindCustomerA = findCustomer(customerA)

          findPromises.push(promiseFindCustomerA)

          promiseFindCustomerA.then((customer) => {
            responseCustomerA = customer.id
          })

          let promiseFindCustomerB = findCustomer(customerB)

          findPromises.push(promiseFindCustomerB)

          promiseFindCustomerB.then((customer) => {
            responseCustomerB = customer.id
          })

          Promise.all(findPromises)
            .then(() => {
              console.log('Promise A:', responseCustomerA)
              console.log('Promise B:', responseCustomerB)
              
              assert(responseCustomerA === customerA, true)
              assert(responseCustomerB === customerB, true)
              
              done()
            }, (err) => {
              console.log(err)
              done()
            })
        }, (err) => {
          console.log(err)
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

    it('should return an object instance with id attribute using promises', (done) => {
      conekta.Customer.find(customer).then(function (customer) {
        customer.createCard({
          token_id: 'tok_test_visa_4242',
          type: 'card'
        }).then(function (card) {
          assert(card.hasOwnProperty('id'), true)
          done()
        }, function (error) {
        })
      }, function (error) {
      })
    })
  })

  describe('createsubscription', () => {
    it('should return an object instance with id attribute', (done) => {
      temp_customer = ''
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        payment_sources: [{
          token_id: "tok_test_visa_4242",
          type: "card"
        }]
      }, (err, res) => {
        temp_customer = res
        assert(res.toObject().hasOwnProperty('id'), true)

        temp_customer.createSubscription({
          plan: 'gold-plan'
        }, (err, res) => {
          assert(res.hasOwnProperty('id'), true)

          conekta.Customer.find(temp_customer.toObject().id, (err, res) => {
            assert(res.hasOwnProperty('subscription'), true)
            done()
          })
        })
      })
    })

    it('should return an object instance with id attribute using promises', (done) => {
      temp_customer = ''
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov',
        payment_sources: [{
          token_id: "tok_test_visa_4242",
          type: "card"
        }]
      }, (err, res) => {
        temp_customer = res
        assert(res.toObject().hasOwnProperty('id'), true)

        temp_customer.createSubscription({
          plan: 'gold-plan'
        }).then(function (subscription) {
          assert(subscription.hasOwnProperty('id'), true)

          conekta.Customer.find(temp_customer.toObject().id, (err, res) => {
            assert(res.hasOwnProperty('subscription'), true)
            done()
          })
        }, function (error) {
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

    it('should return an object instance with id attribute using promises', (done) => {
      conekta.Customer.find(customer).then(function (customer) {
        customer.createPaymentSource({
          type: 'card',
          token_id: 'tok_test_visa_4242'
        }).then(function (paymentSource) {
          assert(paymentSource.hasOwnProperty('id'), true)
          done()
        }, function (error) {
        })
      }, function (error) {
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

    it('should return an object instance with id attribute using promises', (done) => {
      conekta.Customer.create({
        name: 'James Howlett',
        email: 'james.howlett@forces.gov'
      }).then(function (customer) {
        customer.delete().then(function (deletedCus) {
          assert(deletedCus.toObject().hasOwnProperty('id'), true)
          assert(deletedCus.toObject().deleted, true)
          done()
        }, function (error) {
        })
      }, function (error) {
      })
    })
  })

  describe('Shipping Contact', function () {
    var shippingContact = ''
    const shipContactBody = {
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
    }

    describe('create', () => {
      it('should return instance object with id', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov'
        }, (err, customer) => {
          customer.createShippingContact(shipContactBody, (err, shipping) => {
            shippingContact = shipping
            assert(shipping.hasOwnProperty('id'), true)
            done()
          })
        })
      })

      it('should return instance object with id using promises', (done) => {
        conekta.Customer.create({
          name: 'James Howlett',
          email: 'james.howlett@forces.gov'
        }).then(function (customer) {
          customer.createShippingContact(shipContactBody).then(function (shipContact) {
            assert(shipContact.hasOwnProperty('id'), true)
            shippingContactPromise = shipContact
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('update', () => {
      it('should return instance object with id', (done) => {
        conekta.Customer.find(shippingContact.parent_id, (err, cust) => {
          cust.shipping_contacts.get(0).update({
            phone: '+5219999999999'
          }, (err, ship) => {
            assert(ship.hasOwnProperty('id'), true)
            done()
          })
        })
      })

      it('should return instance object with id using promise', (done) => {
        conekta.Customer.find(shippingContactPromise.parent_id).then(function (customer) {
          customer.shipping_contacts.get(0).update({
            phone: '+5219999999999'
          }).then(function (updatedCus) {
            assert(updatedCus.hasOwnProperty('id'), true)
            assert(updatedCus.phone, '+5219999999999')
            done()
          }, function (error) {
          })
        }, function (error) {
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

      it('should return instance object with id using promises', (done) => {
        conekta.Customer.find(shippingContactPromise.parent_id).then(function (customer) {
          customer.shipping_contacts.get(0).delete().then(function (deletedShipContact) {
            assert(deletedShipContact.deleted, true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Card', () => {
    const customerBody = {
      name: 'James Howlett',
      phone: '+5215544443333',
      email: 'james.howlett@forces.gov',
      corporate: true,
      plan_id: 'gold-plan',
      payment_sources: [{
        token_id: 'tok_test_visa_4242',
        type: 'card'
      }]
    }

    describe('update', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create(customerBody, (err, customer) => {
          var year = (new Date().getFullYear() + 2)

          conekta.Customer.find(customer._id, (err, customerObj) => {
            customerObj.payment_sources.get(0).update({
              name: 'Emiliano Cabrera',
              exp_month: '12',
              exp_year: year.toString(),
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

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.payment_sources.get(0).update({
            name: 'Emiliano Cabrera'
          }).then(function (updatedPaymentScr) {
            assert(updatedPaymentScr.hasOwnProperty('id'), true)
            assert(updatedPaymentScr.name, 'Emiliano Cabrera')
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('delete', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create(customerBody, (err, customer) => {
          customer.payment_sources.get(0).delete((err, res) => {
            assert(res.hasOwnProperty('id'), true)
            done()
          })
        })
      })

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.payment_sources.get(0).delete().then(function (deletedPaymentScr) {
            assert(deletedPaymentScr.deleted, true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })

  describe('Customer Subscription', () => {
    let customerSubscribed = ''

    const customerBody = {
      name: 'James Howlett',
      phone: '+5215544443333',
      email: 'james.howlett@forces.gov',
      corporate: true,
      plan_id: 'opal-plan',
      payment_sources: [{
        token_id: 'tok_test_visa_4242',
        type: 'card'
      }]
    }

    describe('update subscription plan', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create(customerBody, (err, customer) => {
          customer.subscription.update({
            plan: 'silver-plan'
          }, (err, res) => {
            assert(res.hasOwnProperty('id'), true)
            done()
          })
        })
      })

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.subscription.update({
            plan: 'silver-plan'
          }).then(function (subscription) {
            assert(subscription.hasOwnProperty('id'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('pause', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.create(customerBody, (err, customer) => {
          customerSubscribed = customer
          customer.subscription.pause((err, res) => {
            assert((res.status === 'paused' || res.status === 'in_trial'), true)
            done()
          })
        })
      })

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.subscription.pause().then(function (subscription) {
            assert((subscription.status === 'paused'), true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('resume', () => {
      it('should return an object instance with id attribute', (done) => {
        conekta.Customer.find(customerSubscribed._id, (err, customer) => {
          customer.subscription.update({
            plan_id: 'gold-plan'
          }, (err, res) => {
            customer.subscription.resume((err, res) => {
              assert((res.status === 'active' || res.status === 'in_trial'), true)
              done()
            })
          })
        })
      })

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.subscription.pause().then(function (pausedSub) {
            conekta.Customer.find(customer._id).then(function (updatedCus) {
              updatedCus.subscription.resume().then(function (activeSub) {
                assert((activeSub.status === 'active' || activeSub.status === 'in_trial'), true)
                done()
              }, function (error) {
              })
            }, function (error) {
            })
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })

    describe('cancel', () => {
      it('should return an object instance with id attribute', (done) => {
        customerSubscribed.subscription.cancel((err, res) => {
          assert(res.status === 'canceled', true)
          done()
        })
      })

      it('should return an object instance with id attribute using promises', (done) => {
        conekta.Customer.create(customerBody).then(function (customer) {
          customer.subscription.cancel().then(function (subscription) {
            assert(subscription.status === 'canceled', true)
            done()
          }, function (error) {
          })
        }, function (error) {
        })
      })
    })
  })
})

