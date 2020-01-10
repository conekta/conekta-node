const ResourceList = require('../ResourceList')
const EventInstance = require('./EventInstance')

const Event = new ResourceList({
  _classUrl: '/events',
  _instanceClass: EventInstance
})
Event._resourceListClass = Event

module.exports = Event
