const ResourceList = require('../ResourceList')
const TaxLineInstance = require('./TaxLineInstance')

const TaxLine = new ResourceList({
  classUrl: '/orders',
  subClassUrl: 'tax_lines',
  _instanceClass: TaxLineInstance
})

module.exports = TaxLine
