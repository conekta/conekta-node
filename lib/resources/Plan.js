const ResourceList = require('../ResourceList')
const PlanInstance = require('./PlanInstance')

const Plan = new ResourceList({
  _classUrl: '/plans',
  _instanceClass: PlanInstance
})
Plan._resourceListClass = Plan

module.exports = Plan
