const Resource = require('../Resource')
const { ERROR_PAGINATION, API_BASE } = require('../constants')

const LineItem = new Resource({
  classUrl: '/orders',
  get: function(position) {
    this.build_children()
    this._id = this._json.data[position].id
    this._json = this._json.data[position]
    return this
  },
  nextPage: (next) => {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null)
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: (err, res) => {
        if (err) {
          return next(err, null)
        }
        return next(null, res)
      },
    })
  },
  update: (data, next) => {
    this.custom(
      'put',
      [this.classUrl, this._json.parent_id, 'line_items', this._id].join('/'),
      {
        data: data,
        next: (err, res) => {
          if (err) {
            return next(err, null)
          }
          return next(null, res)
        },
      }
    )
  },
  delete: (next) => {
    this.custom(
      'del',
      [this.classUrl, this._json.parent_id, 'line_items', this._id].join('/'),
      {
        data: {},
        next: (err, res) => {
          if (err) {
            return next(err, null)
          }
          return next(null, res)
        },
      }
    )
  },
})

module.exports = LineItem
