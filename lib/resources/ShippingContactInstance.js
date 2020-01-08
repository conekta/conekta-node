const Resource = require('../Resource')

const ShippingContactInstance = new Resource({
  _classUrl: '/customers',
  _subClassUrl: 'shipping_contacts'
})

module.exports = ShippingContactInstance
