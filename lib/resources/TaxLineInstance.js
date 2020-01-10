const Resource = require('../Resource')

const TaxLineInstance = new Resource({
  _classUrl: '/orders',
  _subClassUrl: 'tax_lines'
})

module.exports = TaxLineInstance
