const ResourceList = require('../ResourceList')
const PlanInstance = require('./PlanInstance')

const Plan = new ResourceList({
  classUrl: '/plans',
  _instanceClass: PlanInstance
})

module.exports = Plan
