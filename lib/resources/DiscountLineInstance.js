const Resource = require('../Resource')

const DiscountLineInstance = new Resource({
  _classUrl: '/orders',
  _subClassUrl: 'discount_lines'
})

module.exports = DiscountLineInstance
