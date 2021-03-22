const _ = require('underscore')
const Resource = require('../Resource')

const CheckoutInstance = new Resource({
  _classUrl: '/checkouts',
  children_resources: {},
  cancel: function (next) {
    return this._custom('put', [this._classUrl, this._id, 'cancel'].join('/'), {
      data: {},
      next: next
    })
  },
  sendEmail: function (data, next) {
    return this._custom('post', [this._classUrl, this._id, 'email'].join('/'), {
      data: {},
      next: next
    })
  },
  sendSms: function (data, next) {
    return this._custom('post', [this._classUrl, this._id, 'sms'].join('/'), {
      data: {},
      next: next
    })
  }
})

module.exports = CheckoutInstance
