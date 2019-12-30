const ResourceList = require('../ResourceList')
const CustomerInstance = require('./CustomerInstance')

const Customer = new ResourceList({
  classUrl: '/customers',
  _instanceClass: CustomerInstance
})

module.exports = Customer
