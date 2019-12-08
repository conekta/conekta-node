const Resource = require('../Resource')
const { ERROR_PAGINATION, API_BASE } = require('../constants')

const Customer = new Resource({
  classUrl: '/customers',
  children_resources: {
    payment_sources: 'Card',
    subscription: 'Subscription',
    shipping_contacts: 'ShippingContact'
  },
  where: function (data, next) {
    return this.get({
      data: data,
      next: next
    })
  },
  find: function (id, next) {
    return this.get(
      {
        next: next
      },
      id
    )
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
  delete: function (next) {
    return this.del(
      {
        data: {},
        next: next
      },
      this._id
    )
  },
  createCard: function (data, next) {
    return this.custom(
      'post',
      [this.classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: next
      }
    )
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
    return this.custom(
      'post',
      [this.classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: next
      }
    )
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
})

module.exports = Customer
