const ResourceList = require('../ResourceList')
const ShippingLineInstance = require('./ShippingLineInstance')

const ShippingLine = new ResourceList({
  _classUrl: '/orders',
  _instanceClass: ShippingLineInstance
})
ShippingLine._resourceListClass = ShippingLine

module.exports = ShippingLine
