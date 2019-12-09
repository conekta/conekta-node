const ResourceList = require('../ResourceList')
const CardInstance = require('./CardInstance')

const Card = new ResourceList({
  classUrl: '/customers',
  subClassUrl: 'payment_sources',
  _instanceClass: CardInstance
})

module.exports = Card
