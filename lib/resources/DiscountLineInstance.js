const Resource = require('../Resource')

const DiscountLineInstance = new Resource({
  classUrl: '/orders',
  subClassUrl: 'discount_lines'
})

module.exports = DiscountLineInstance
