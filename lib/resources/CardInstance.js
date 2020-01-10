const Resource = require('../Resource')

const CardInstance = new Resource({
  _classUrl: '/customers',
  _subClassUrl: 'payment_sources'
})

module.exports = CardInstance
