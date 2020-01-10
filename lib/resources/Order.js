const ResourceList = require('../ResourceList')
const OrderInstance = require('./OrderInstance')

const Order = new ResourceList({
  _classUrl: '/orders',
  _instanceClass: OrderInstance
})
Order._resourceListClass = Order

module.exports = Order;
