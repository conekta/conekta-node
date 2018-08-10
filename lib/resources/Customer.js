const Resource = require('../Resource')

const Customer = new Resource({
  classUrl: '/customers',
  children_resources: {
    payment_sources: 'Card',
    subscription: 'Subscription',
    shipping_contacts: 'ShippingContact',
  },
  where: function (data, next) {
    this.get({
      data: data,
      next: next,
    })
  },
  find: function (id, next) {
    this.get(
      {
        next: next,
      },
      id
    )
  },
  create: function (data, next) {
    this.post({
      data: data,
      next: next,
    })
  },
  update: function (data, next) {
    this.put(
      {
        data: data,
        next: next,
      },
      this._id
    )
  },
  delete: function (next) {
    this.del(
      {
        data: {},
        next: next,
      },
      this._id
    )
  },
  createCard: function (data, next) {
    this.custom(
      'post',
      [this.classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res)
        },
      }
    )
  },
  createSubscription: function (data, next) {
    this.custom('post', [this.classUrl, this._id, 'subscription'].join('/'), {
      data: data,
      next: function (err, res) {
        if (err) {
          return next(err, null)
        }
        next(null, res)
      },
    })
  },
  createShippingContact: function (data, next) {
    this.custom(
      'post',
      [this.classUrl, this._id, 'shipping_contacts'].join('/'),
      {
        data: data,
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res)
        },
      }
    )
  },
  createPaymentSource: function (data, next) {
    this.custom(
      'post',
      [this.classUrl, this._id, 'payment_sources'].join('/'),
      {
        data: data,
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res)
        },
      }
    )
  },
})

module.exports = Customer
