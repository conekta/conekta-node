const Resource = require('../Resource')

const ChargeInstance = new Resource({
  _classUrl: '/orders',
  _subClassUrl: 'charges'
})

module.exports = ChargeInstance
