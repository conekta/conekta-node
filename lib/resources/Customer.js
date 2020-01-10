const ResourceList = require('../ResourceList')
const CustomerInstance = require('./CustomerInstance')

const Customer = new ResourceList({
  _classUrl: '/customers',
  _instanceClass: CustomerInstance
})
Customer._resourceListClass = Customer

module.exports = Customer
