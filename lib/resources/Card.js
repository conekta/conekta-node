const ResourceList = require('../ResourceList')
const CardInstance = require('./CardInstance')

const Card = new ResourceList({
  _classUrl: '/customers',
  _subClassUrl: 'payment_sources',
  _instanceClass: CardInstance
})
Card._resourceListClass = Card

module.exports = Card
