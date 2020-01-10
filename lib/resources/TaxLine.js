const ResourceList = require('../ResourceList')
const TaxLineInstance = require('./TaxLineInstance')

const TaxLine = new ResourceList({
  _classUrl: '/orders',
  _subClassUrl: 'tax_lines',
  _instanceClass: TaxLineInstance
})
TaxLine._resourceListClass = TaxLine

module.exports = TaxLine
