const _ = require('underscore')
const Resource = require('../Resource')
const LineItem = require('./LineItem')
const TaxLine = require('./TaxLine')
const ShippingLine = require('./ShippingLine')
const DiscountLine = require('./DiscountLine')
const Charge = require('./Charge')

const OrderInstance = new Resource({
  classUrl: '/orders',
  children_resources: {
    line_items: LineItem,
    tax_lines: TaxLine,
    shipping_lines: ShippingLine,
    discount_lines: DiscountLine,
    charges: Charge
  },
  capture: function (next) {
    return this.custom('put', [this.classUrl, this._id, 'capture'].join('/'), {
      data: {},
      next: next
    })
  },
  void: function (next) {
    return this.custom('post', [this.classUrl, this._id, 'void'].join('/'), {
      next: next
    })
  },
  createShippingContact: function (data, next) {
    data = {
      shipping_contact: data
    }
    return this.put(
      {
        data: data,
        next: next
      },
      this._id
    )
  },
  createLineItem: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'line_items'].join('/'), {
      data: data,
      next: next
    })
  },
  createTaxLine: function (data, next) {
    if (!this.hasOwnProperty('tax_lines') || this['tax_lines'] === null) {
      let resource = this.children_resources['tax_lines']
      let childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance.build_children()
      this.tax_lines = childInstance
    }

    return this.tax_lines.custom('post', [this.classUrl, this._id, 'tax_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createShippingLine: function (data, next) {
    if (!this.hasOwnProperty('shipping_lines') || this['shipping_lines'] === null) {
      let resource = this.children_resources['shipping_lines']
      let childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance.build_children()
      this.shipping_lines = childInstance
    }

    return this.shipping_lines.custom('post', [this.classUrl, this._id, 'shipping_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createDiscountLine: function (data, next) {
    if (!this.hasOwnProperty('discount_lines') || this['discount_lines'] === null) {
      let resource = this.children_resources['discount_lines']
      let childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance.build_children()
      this.discount_lines = childInstance
    }

    return this.discount_lines.custom('post', [this.classUrl, this._id, 'discount_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createCharge: function (data, next) {
    if (!this.hasOwnProperty('charges') || this['charges'] === null) {
      let resource = this.children_resources['charges']
      let childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance.build_children()
      this.charges = childInstance
    }

    return this.charges.custom('post', [this.classUrl, this._id, 'charges'].join('/'), {
      data: data,
      next: next
    })
  },
  createRefund: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'refunds'].join('/'), {
      data: data,
      next: next
    })
  }
})

module.exports = OrderInstance
