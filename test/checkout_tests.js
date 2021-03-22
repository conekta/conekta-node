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

const checkoutBody = function(){
  return {
    "name": "Payment Link Name",
    "type": "PaymentLink",
    "recurrent": false,
    "expired_at": Math.floor(Date.now()/1000 + 259200 + Math.random() * 3600),
    "allowed_payment_methods": ["cash", "card", "bank_transfer"],
    "needs_shipping_contact": true,
    "monthly_installments_enabled": false,
    "monthly_installments_options": [3, 6, 9, 12],
    "order_template": {
      "line_items": [{
        "name": "Red Wine",
        "unit_price": 1000,
        "quantity": 10
      }],
      "currency": "MXN",
      "customer_info": {
        "name": "Juan Perez",
        "email": "test@conekta.com",
        "phone": "5566982090"
      }
    }
  }
}

const checkoutBodyNoCustomer = function(){
  let checkout = checkoutBody()
  delete checkout.order_template.customer_info

  return checkout
}

const checkoutBodyInvalidExpiryDate = function(){
  let checkout = checkoutBody()
  checkout.expired_at = Math.floor(Date.now()/1000 + 3600)

  return checkout
}

const createCheckout = (callback) => {
  conekta.Checkout.create(checkoutBody(), callback)
}

describe('Checkout', function () {
  this.timeout(TIMEOUT)

  beforeEach(() => {
    conekta.api_key = TEST_KEY
    conekta.locale = LOCALE
    conekta.api_version = API_VERSION
  })

  describe('multiple checkouts', () => {
    it('should return an array of checkouts', (done) => {
      conekta.Checkout.where({'id': 'example@example.com'}, (err, checkouts) => {
        assert(checkouts.toObject().data instanceof Array, true)
        done()
      })
    })
  })

  describe('create', () => {
    // nock.restore()
    it('should return instance object with id', (done) => {
      conekta.Checkout.create(checkoutBody(), (err, res) => {
        let checkout = res.toObject()
        assert((checkout.hasOwnProperty('id')), true)
        assert.equal(checkout.name, 'Payment Link Name')
        assert.equal(checkout.livemode, false)
        assert.equal(checkout.emails_sent, 0)
        assert.equal(checkout.sms_sent, 0)
        assert.equal(checkout.type, 'PaymentLink')
        assert.equal(checkout.status, 'Issued')
        assert.equal(checkout.recurrent, false)
        assert.notEqual(checkout.expires_at, null)
        assert.notEqual(checkout.allowed_payment_methods, ['cash', 'card', 'bank_transfer'])
        assert.equal(checkout.needs_shipping_contact, true)
        assert.notEqual(checkout.monthly_installments_options, [3, 6, 9, 12])
        assert.equal(checkout.monthly_installments_enabled, false)
        assert.equal(checkout.force_3ds_flow, false)
        assert.equal(checkout.object, 'checkout')
        assert.notEqual(checkout.expires_at, null)
        assert.notEqual(checkout.slug, null)
        assert.notEqual(checkout.url, null)
        done()
      })
    })

    it('should create a checkout without a customer', (done) => {
      createCheckout((err, res) => {
        conekta.Checkout.create(checkoutBodyNoCustomer(), (err, res) => {
          let checkout = res.toObject()
          assert((checkout.hasOwnProperty('id')), true)
          assert.equal(checkout.name, 'Payment Link Name')
          assert.equal(checkout.livemode, false)
          assert.equal(checkout.emails_sent, 0)
          assert.equal(checkout.sms_sent, 0)
          assert.equal(checkout.type, 'PaymentLink')
          assert.equal(checkout.status, 'Issued')
          assert.equal(checkout.recurrent, false)
          assert.notEqual(checkout.expires_at, null)
          assert.notEqual(checkout.allowed_payment_methods, ['cash', 'card', 'bank_transfer'])
          assert.equal(checkout.needs_shipping_contact, true)
          assert.notEqual(checkout.monthly_installments_options, [3, 6, 9, 12])
          assert.equal(checkout.monthly_installments_enabled, false)
          assert.equal(checkout.force_3ds_flow, false)
          assert.equal(checkout.object, 'checkout')
          assert.notEqual(checkout.expires_at, null)
          assert.notEqual(checkout.slug, null)
          assert.notEqual(checkout.url, null)
          done()
        })
      })
    })

    it('should return checkout instance object with id and invalid expired_at', (done) => {
      conekta.Checkout.create(checkoutBodyInvalidExpiryDate(), (err, res) => {
        assert.equal(res, null)
        assert.notEqual(err, null)
        done()
      })
    })

    it('should return instance object with id using promises', (done) => {
      conekta.Checkout.create(
        checkoutBody()
      ).then(function (result) {
        let checkout = result.toObject()
        assert((checkout.hasOwnProperty('id')), true)
        done()
      }, function (error) {
        assert.equal(error, null)
        done()
      })
    })
  })

  describe('cancel', () => {
    it('should return instance object', (done) => {
      conekta.Checkout.create(checkoutBody(), (err, checkout) => {
        checkout.cancel((err, res) => {
          assert.equal(res.id, checkout.toObject().id)
          assert.equal(res.status, 'Cancelled')
          done()
        })
      })
    })

    it('should return instance object using promises', (done) => {
      conekta.Checkout.create(
        checkoutBody()
      ).then(function (checkout) {
        checkout.cancel().then(function (result) {
          assert.equal(result.id, checkout.toObject().id)
          assert.equal(result.status, 'Cancelled')
          done()
        }, function (error) {
          assert.equal(error, null)
          done()
        })
      }, function (error) {
        assert.equal(error, null)
        done()
      })
    })
  })

  describe('sendEmail', () => {
    it('should return instance object', (done) => {
      conekta.Checkout.create(checkoutBody(), (err, checkout) => {
        checkout.sendEmail({email: "mail@mail.com"}, (err, res) => {
          assert.equal(res.id, checkout.toObject().id)
          assert.equal(res.emails_sent, 1)
          done()
        })
      })
    })

    it('should return instance object using promises', (done) => {
      let newCheckoutBody = Object.assign(checkoutBody())
      conekta.Checkout.create(
         newCheckoutBody
      ).then(function (checkout) {
        checkout.sendEmail({email: "mail@mail.com"}).then(function (result) {
          assert.equal(result.id, checkout.toObject().id)
          assert.equal(result.emails_sent, 1)
          done()
        }, function (error) {
          assert.equal(error, null)
          done()
        })
      }, function (error) {
        assert.equal(error, null)
        done()
      })
    })
  })

  describe('sendSms', () => {
    it('should return instance object', (done) => {
      conekta.Checkout.create(checkoutBody(), (err, checkout) => {
        checkout.sendSms({phone: "5555555555"}, (err, res) => {
          assert.equal(res.id, checkout.toObject().id)
          assert.equal(res.sms_sent, 1)
          done()
        })
      })
    })

    it('should return instance object using promises', (done) => {
      conekta.Checkout.create(
        checkoutBody()
      ).then(function (checkout) {
        checkout.sendSms({phone: "5555555555"}).then(function (result) {
          assert.equal(result.id, checkout.toObject().id)
          assert.equal(result.sms_sent, 1)
          done()
        }, function (error) {
          assert.equal(error, null)
          done()
        })
      }, function (error) {
        assert.equal(error, null)
        done()
      })
    })
  })
})

