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
    this.get(
      {
        next: next
      },
      id
    )
  },
  where: function (data, next) {
    this.get({
      data: data,
      next: next
    })
  },
  create: function (data, next) {
    this.post({
      data: data,
      next: next
    })
  },
  update: function (data, next) {
    this.put(
      {
        data: data,
        next: next
      },
      this._id
    )
  },
  capture: function (next) {
    this.custom('put', [this.classUrl, this._id, 'capture'].join('/'), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  void: function (next) {
    this.custom('post', [this.classUrl, this._id, 'void'].join('/'), {
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createShippingContact: function (data, next) {
    data = {
      shipping_contact: data
    }
    this.put(
      {
        data: data,
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res._json.shipping_contact)
        }
      },
      this._id
    )
  },
  createLineItem: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'line_items'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createTaxLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'tax_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createShippingLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'shipping_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createDiscountLine: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'discount_lines'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createCharge: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'charges'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  createRefund: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'refunds'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  },
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null)
    }
    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      }
    })
  }
})

module.exports = Order
