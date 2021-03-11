const ResourceList = require('../ResourceList')
const CheckoutInstance = require('./CheckoutInstance')

const Checkout = new ResourceList({
  _classUrl: '/checkouts',
  _instanceClass: CheckoutInstance
})
Checkout._resourceListClass = Checkout

module.exports = Checkout;
