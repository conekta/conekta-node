const ResourceList = require('../ResourceList')
const ShippingContactInstance = require('./ShippingContactInstance')

const ShippingContact = new ResourceList({
  classUrl: '/customers',
  subClassUrl: 'shipping_contacts',
  _instanceClass: ShippingContactInstance
})

module.exports = ShippingContact
