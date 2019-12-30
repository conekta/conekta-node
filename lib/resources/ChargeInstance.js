const Resource = require('../Resource')

const ChargeInstance = new Resource({
  classUrl: '/orders',
  subClassUrl: 'charges'
})

module.exports = ChargeInstance
