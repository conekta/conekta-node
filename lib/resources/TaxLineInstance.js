const Resource = require('../Resource')

const TaxLineInstance = new Resource({
  classUrl: '/orders',
  subClassUrl: 'tax_lines'
})

module.exports = TaxLineInstance
