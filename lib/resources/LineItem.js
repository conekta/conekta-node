const ResourceList = require('../ResourceList')
const LineItemInstance = require('./LineItemInstance')

const LineItem = new ResourceList({
  _classUrl: '/orders',
  _subClassUrl: 'line_items',
  _instanceClass: LineItemInstance
})
LineItem._resourceListClass = LineItem

module.exports = LineItem
