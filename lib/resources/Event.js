const ResourceList = require('../ResourceList')
const EventInstance = require('./EventInstance')

const Event = new ResourceList({
  classUrl: '/events',
  _instanceClass: EventInstance
})

module.exports = Event
