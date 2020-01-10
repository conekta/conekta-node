const ResourceList = require('../ResourceList')
const ChargeInstance = require('./ChargeInstance')

const Charge = new ResourceList({
  _classUrl: '/orders',
  _instanceClass: ChargeInstance
})
Charge._resourceListClass = Charge

module.exports = Charge
