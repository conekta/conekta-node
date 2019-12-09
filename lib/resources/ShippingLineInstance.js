const Resource = require('../Resource')

const ShippingLineInstance = new Resource({
  classUrl: '/orders',
  subClassUrl: 'shipping_lines'
})

module.exports = ShippingLineInstance
