const Resource = require('../Resource')
const { ERROR_PAGINATION, API_BASE } = require('../constants')

const Charge = new Resource({
  nextPage: function (next) {
    if (!this._json.next_page_url) {
      return next(ERROR_PAGINATION, null)
    }

    return this.custom('get', this._json.next_page_url.replace(API_BASE, ''), {
      data: {},
      next: next
    })
  }
})

module.exports = Charge
