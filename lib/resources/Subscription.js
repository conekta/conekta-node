const Resource = require('../Resource')

const Subscription = new Resource({
  _classUrl: '/customers',
  _subClassUrl: 'subcription',
  update: function (data, next) {
    return this._custom(
      'put',
      [this._classUrl, this._json.customer_id, 'subscription'].join('/'),
      {
        data: data,
        next: next
      }
    )
  },
  pause: function (next) {
    return this._custom(
      'post',
      [this._classUrl, this._json.customer_id, 'subscription', 'pause'].join(
        '/'
      ),
      {
        next: next
      }
    )
  },
  resume: function (next) {
    return this._custom(
      'post',
      [this._classUrl, this._json.customer_id, 'subscription', 'resume'].join(
        '/'
      ),
      {
        next: next
      }
    )
  },
  cancel: function (next) {
    return this._custom(
      'post',
      [this._classUrl, this._json.customer_id, 'subscription', 'cancel'].join(
        '/'
      ),
      {
        next: next
      }
    )
  }
})
Subscription._resourceListClass = Subscription

module.exports = Subscription
