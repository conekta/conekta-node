const Resource = require('../Resource')

const Event = new Resource({
  classUrl: '/events',
  children_resources: {},
  where: function(data, next) {
    this.get({
      data: data,
      next: next,
    })
  },
})

module.exports = Event
