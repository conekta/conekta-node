const ResourceList = require('../ResourceList')
const ShippingContactInstance = require('./ShippingContactInstance')

const ShippingContact = new ResourceList({
  _classUrl: '/customers',
  _subClassUrl: 'shipping_contacts',
  _instanceClass: ShippingContactInstance
})
ShippingContact._resourceListClass = ShippingContact

module.exports = ShippingContact
