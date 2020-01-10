const Resource = require('../Resource')

const LineItemInstance = new Resource({
  _classUrl: '/orders',
  _subClassUrl: 'line_items'
})

module.exports = LineItemInstance
