const ResourceList = require('../ResourceList')
const DiscountLineInstance = require('./DiscountLineInstance')

const DiscountLine = new ResourceList({
  _classUrl: '/orders',
  _instanceClass: DiscountLineInstance
})
DiscountLine._resourceListClass = DiscountLine

module.exports = DiscountLine
