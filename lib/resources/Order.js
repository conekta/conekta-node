const Resource = require('../Resource')

const { ERROR_PAGINATION, API_BASE } = require('../constants')

const Order = new Resource({
  classUrl: '/orders',
  children_resources: {
    line_items: 'LineItem',
    tax_lines: 'TaxLine',
    shipping_lines: 'ShippingLine',
    discount_lines: 'DiscountLine',
    charges: 'Charge'
  },
  find: function (id, next) {
    return this.get(
      {
        next: next
      },
      id
    )
  },
  where: function (data, next) {
    return this.get({
      data: data,
      next: next
    })
  },
  create: function (data, next) {
    return this.post({
      data: data,
      next: next
    })
  },
  update: function (data, next) {
    return this.put(
      {
        data: data,
        next: next
      },
      this._id
    )
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
    return this.custom('post', [this.classUrl, this._id, 'tax_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createShippingLine: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'shipping_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createDiscountLine: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'discount_lines'].join('/'), {
      data: data,
      next: next
    })
  },
  createCharge: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'charges'].join('/'), {
      data: data,
      next: next
    })
  },
  createRefund: function (data, next) {
    return this.custom('post', [this.classUrl, this._id, 'refunds'].join('/'), {
      data: data,
      next: next
    })
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null);
    }
    return this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: next
    })
  }
});

module.exports = Order;
