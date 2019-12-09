const Resource = require('../Resource')

const LineItemInstance = new Resource({
  classUrl: '/orders',
  subClassUrl: 'line_items'
})

module.exports = LineItemInstance
