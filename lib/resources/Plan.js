const Resource = require('../Resource')

const Plan = new Resource({
  classUrl: '/plans',
  children_resources: {},
  where: function (data, next) {
    this.get({
      data: data,
      next: next,
    })
  },
  find: function (id, next) {
    this.get(
      {
        data: {},
        next: next,
      },
      id
    )
  },
  create: function (data, next) {
    this.post({
      data: data,
      next: next,
    })
  },
  update: function (data, next) {
    this.put(
      {
        data: data,
        next: next,
      },
      this._id
    )
  },
  delete: function (next) {
    this.del(
      {
        data: {},
        next: next,
      },
      this._id
    )
  },
})

module.exports = Plan
