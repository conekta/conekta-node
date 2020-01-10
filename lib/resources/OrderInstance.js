const _ = require('underscore')
const Resource = require('../Resource')
const LineItem = require('./LineItem')
const TaxLine = require('./TaxLine')
const ShippingLine = require('./ShippingLine')
const DiscountLine = require('./DiscountLine')
const Charge = require('./Charge')

const OrderInstance = new Resource({
  _classUrl: '/orders',
  children_resources: {
    line_items: LineItem,
    tax_lines: TaxLine,
    shipping_lines: ShippingLine,
    discount_lines: DiscountLine,
    charges: Charge
  },
  capture: function (next) {
    return this._custom('put', [this._classUrl, this._id, 'capture'].join('/'), {
      data: {},
      next: next
    })
  },
  void: function (next) {
    return this._custom('post', [this._classUrl, this._id, 'void'].join('/'), {
      next: next
    })
  },
  createShippingContact: function (data, next) {
    data = {
      shipping_contact: data
    }
    return this._put(
      {
        data: data,
        next: next
      },
      this._id
    )
  },
  createLineItem: function (data, next) {
    return this._custom('post', [this._classUrl, this._id, 'line_items'].join('/'), {
      data: data,
      next: next
    })
  },
  createTaxLine: function (data, next) {
    if (this.tax_lines === undefined || this.tax_lines === null) {
      const resource = this.children_resources.tax_lines
      const childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance._buildChildren()
      this.tax_lines = childInstance
    }

    return this.tax_lines._custom('post', [this._classUrl, this._id, 'tax_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createShippingLine: function (data, next) {
    if (this.shipping_lines === undefined || this.shipping_lines === null) {
      const resource = this.children_resources.shipping_lines
      const childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance._buildChildren()
      this.shipping_lines = childInstance
    }

    return this.shipping_lines._custom('post', [this._classUrl, this._id, 'shipping_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createDiscountLine: function (data, next) {
    if (this.discount_liness === undefined || this.discount_lines === null) {
      const resource = this.children_resources.discount_lines
      const childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance._buildChildren()
      this.discount_lines = childInstance
    }

    return this.discount_lines._custom('post', [this._classUrl, this._id, 'discount_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createCharge: function (data, next) {
    if (this.charges === undefined || this.charges === null) {
      const resource = this.children_resources.charges
      const childInstance = _.extend({
        _json: { object: 'list', has_more: false, total: 0, data: [] },
        parent: this
      }, resource)
      childInstance._buildChildren()
      this.charges = childInstance
    }

    return this.charges._custom('post', [this._classUrl, this._id, 'charges'].join('/'), {
      data: data,
      next: next
    })
  },
  createRefund: function (data, next) {
    return this._custom('post', [this._classUrl, this._id, 'refunds'].join('/'), {
      data: data,
      next: next
    })
  }
})

module.exports = OrderInstance
