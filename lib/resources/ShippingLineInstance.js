const Resource = require('../Resource')

const ShippingLineInstance = new Resource({
  _classUrl: '/orders',
  _subClassUrl: 'shipping_lines'
})

module.exports = ShippingLineInstance
