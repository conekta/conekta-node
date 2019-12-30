const Resource = require('../Resource')

const Subscription = new Resource({
  classUrl: '/customers',
  subClassUrl: 'subcription',
  update: function (data, next) {
    return this.custom(
      'put',
      [this.classUrl, this._json.customer_id, 'subscription'].join('/'),
      {
        data: data,
        next: next
      }
    )
  },
  pause: function (next) {
    return this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'pause'].join(
        '/'
      ),
      {
        next: next
      }
    )
  },
  resume: function (next) {
    return this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'resume'].join(
        '/'
      ),
      {
        next: next
      }
    )
  },
  cancel: function (next) {
    return this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'cancel'].join(
        '/'
      ),
      {
        next: next
      }
    )
  }
})

module.exports = Subscription
