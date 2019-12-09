const _ = require('underscore')
const Resource = require('../Resource')
const Card = require('./Card')
const Subscription = require('./Subscription')
const ShippingContact = require('./ShippingContact')

const CustomerInstance = new Resource({
  classUrl: '/customers',
  children_resources: {
    payment_sources: Card,
    subscription: Subscription,
    shipping_contacts: ShippingContact
  },
  createCard: function (data, next) {
    return this.createPaymentSource(data, next)
  },
  createSubscription: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'subscription'].join('/'), {
      data: data,
      next: next
    })
  },
  createShippingContact: function (data, next) {
    return this.custom(
      'post',
      [this.classUrl, this._id, 'shipping_contacts'].join('/'),
      {
        data: data,
        next: next
      }
    )
  },
  createPaymentSource: function (data, next) {
    if (!this.hasOwnProperty('payment_sources') || this['payment_sources'] === null) {
      let resource = this.children_resources['payment_sources']
      let childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance.build_children()
      this.payment_sources = childInstance
    }

    return this.payment_sources.custom(
      'post',
      [this.classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: next
      }
    )
  }
})

module.exports = CustomerInstance
