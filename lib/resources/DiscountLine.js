const Resource = require('../Resource')
const { ERROR_PAGINATION, API_BASE } = require('../constants')

const DiscountLine = new Resource({
  classUrl: '/orders',
  get: function (position) {
    this.build_children()
    this._id = this._json.data[position].id
    this._json = this._json.data[position]
    return this
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
      },
    })
  },
  update: function (data, next) {
    this.custom(
      'put',
      [this.classUrl, this._json.parent_id, 'discount_lines', this._id].join(
        '/'
      ),
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
  delete: function (next) {
    this.custom(
      'del',
      [this.classUrl, this._json.parent_id, 'discount_lines', this._id].join(
        '/'
      ),
      {
        data: {},
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

module.exports = DiscountLine
