const ResourceList = require('../ResourceList')
const DiscountLineInstance = require('./DiscountLineInstance')

const DiscountLine = new ResourceList({
  classUrl: '/orders',
  _instanceClass: DiscountLineInstance
})

module.exports = DiscountLine
