const ResourceList = require('../ResourceList')
const ShippingLineInstance = require('./ShippingLineInstance')

const ShippingLine = new ResourceList({
  classUrl: '/orders',
  _instanceClass: ShippingLineInstance
})

module.exports = ShippingLine
