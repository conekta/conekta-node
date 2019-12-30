const ResourceList = require('../ResourceList')
const OrderInstance = require('./OrderInstance')

const Order = new ResourceList({
  classUrl: '/orders',
  _instanceClass: OrderInstance
});

module.exports = Order;
