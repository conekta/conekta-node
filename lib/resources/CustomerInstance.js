const _ = require('underscore')
const Resource = require('../Resource')
const Card = require('./Card')
const Subscription = require('./Subscription')
const ShippingContact = require('./ShippingContact')

const CustomerInstance = new Resource({
  _classUrl: '/customers',
  children_resources: {
    payment_sources: Card,
    subscription: Subscription,
    shipping_contacts: ShippingContact
  },
  createCard: function (data, next) {
    return this.createPaymentSource(data, next)
  },
  createSubscription: function (data, next) {
    return this._custom('post', [this._classUrl, this._id, 'subscription'].join('/'), {
      data: data,
      next: next
    })
  },
  createShippingContact: function (data, next) {
    return this._custom(
      'post',
      [this._classUrl, this._id, 'shipping_contacts'].join('/'),
      {
        data: data,
        next: next
      }
    )
  },
  createPaymentSource: function (data, next) {
    if (this.payment_sources === undefined || this.payment_sources === null) {
      const resource = this.children_resources.payment_sources
      const childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance._buildChildren()
      this.payment_sources = childInstance
    }

    return this.payment_sources._custom(
      'post',
      [this._classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: next
      }
    )
  }
})

module.exports = CustomerInstance
