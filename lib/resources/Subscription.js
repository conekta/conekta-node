const Resource = require('../Resource')

const Subscription = new Resource({
  classUrl: '/customers',
  update: function (data, next) {
    this.custom(
      'put',
      [this.classUrl, this._json.customer_id, 'subscription'].join('/'),
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
  pause: function (next) {
    this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'pause'].join(
        '/'
      ),
      {
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res)
        },
      }
    )
  },
  resume: function (next) {
    this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'resume'].join(
        '/'
      ),
      {
        next: function (err, res) {
          if (err) {
            return next(err, null)
          }
          next(null, res)
        },
      }
    )
  },
  cancel: function (next) {
    this.custom(
      'post',
      [this.classUrl, this._json.customer_id, 'subscription', 'cancel'].join(
        '/'
      ),
      {
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

module.exports = Subscription
