const Resource = require('../Resource')

const CardInstance = new Resource({
  classUrl: '/customers',
  subClassUrl: 'payment_sources'
})

module.exports = CardInstance
