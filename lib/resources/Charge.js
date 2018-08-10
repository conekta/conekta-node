const Resource = require('../Resource')
const { ERROR_PAGINATION, API_BASE } = require('../constants')

const Charge = new Resource({
  nextPage: function(next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null)
    }

    this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: function(err, res) {
        if (err) {
          return next(err, null)
        }
      },
        next(null, res)
    })
  },
})

module.exports = Charge
