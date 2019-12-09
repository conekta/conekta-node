const ResourceList = require('../ResourceList')
const LineItemInstance = require('./LineItemInstance')

const LineItem = new ResourceList({
  classUrl: '/orders',
  subClassUrl: 'line_items',
  _instanceClass: LineItemInstance
})

module.exports = LineItem
