const ResourceList = require('../ResourceList')
const ChargeInstance = require('./ChargeInstance')

const Charge = new ResourceList({
  classUrl: '/orders',
  _instanceClass: ChargeInstance
})

module.exports = Charge
