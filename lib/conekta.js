const Order = require('./resources/Order')
const LineItem = require('./resources/LineItem')
const TaxLine = require('./resources/TaxLine')
const ShippingLine = require('./resources/ShippingLine')
const DiscountLine = require('./resources/DiscountLine')
const Event = require('./resources/Event')
const Customer = require('./resources/Customer')
const ShippingContact = require('./resources/ShippingContact')
const Card = require('./resources/Card')
const Subscription = require('./resources/Subscription')
const Charge = require('./resources/Charge')
const Checkout = require('./resources/Checkout')
const Plan = require('./resources/Plan')

const { Conekta } = require('./constants')

Conekta.Order = Order
Conekta.LineItem = LineItem
Conekta.TaxLine = TaxLine
Conekta.ShippingLine = ShippingLine
Conekta.DiscountLine = DiscountLine
Conekta.Event = Event
Conekta.Customer = Customer
Conekta.ShippingContact = ShippingContact
Conekta.Card = Card
Conekta.Subscription = Subscription
Conekta.Charge = Charge
Conekta.Checkout = Checkout
Conekta.Plan = Plan

module.exports = Conekta
