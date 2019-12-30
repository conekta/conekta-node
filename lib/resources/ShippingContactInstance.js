const Resource = require('../Resource')

const ShippingContactInstance = new Resource({
  classUrl: '/customers',
  subClassUrl: 'shipping_contacts'
})

module.exports = ShippingContactInstance
