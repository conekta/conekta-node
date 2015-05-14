![alt tag](https://raw.github.com/conekta/conekta-node/master/readme_files/cover.png)

Conekta Node v 1.0.0
======================

Wrapper to connect with https://api.conekta.io.

## Install

```sh
npm install conekta
```

##Usage

```node
var conekta = require('conekta');

conekta.api_key = '9YxqfRnx4sMQDnRsqdYn';
conekta.locale = 'es';

conekta.Charge.create({
    description: 'Stogies',
    amount: 50000,
    currency: 'MXN',
    reference_id: '9839-wolf_pack',
    card: 'tok_test_visa_4242',
    details: {
        email: 'logan@x-men.org'
    }
}, function(res) {
    console.log(res);
}, function(err) {
    console.log(err.message_to_purchaser);
});
```

## Endpoints

```node
//Charge
conekta.Charge.create(hash, success, error);
conekta.Charge.where(hash, success, error);
conekta.Charge.find(charge_id, success, error);
conekta.Charge.refund(charge_id, hash, success, error);
conekta.Charge.capture(charge_id, success, error);

conekta.Plan.create(hash, success, error);
conekta.Plan.update(plan_id, hash, success, error);
conekta.Plan.where(hash, success, error);
conekta.Plan.find(plan_id, success, error);
conekta.Plan.delete(plan_id, success, error);

conekta.Event.where(hash, success, error);

conekta.Customer.create(hash, success, error);
conekta.Customer.update(customer_id, hash, success, error);
conekta.Customer.where(hash, success, error);
conekta.Customer.find(customer_id, hash, success, error);
conekta.Customer.createCard(customer_id, hash, success, error);
conekta.Customer.createSubscription(customer_id, hash, success, error);
conekta.Customer.delete(customer_id, success, error);

conekta.Card.update(customer_id, card_id, data, success, error);
conekta.Card.delete(customer_id, card_id, success, error);

conekta.Subscription.update(customer_id, hash, success, error);
conekta.Subscription.pause(customer_id, success, error);
conekta.Subscription.resume(customer_id, success, error);
conekta.Subscription.cancel(customer_id, success, error);

conekta.Payee.create(hash, success, error);
conekta.Payee.update(payee_id, hash, success, error);
conekta.Payee.where(hash, success, error);
conekta.Payee.find(payee_id, success, error);
conekta.Payee.createPayoutMethod(payee_id, hash, success, error);
conekta.Payee.delete(payee_id, success, error);

conekta.PayoutMethod.update(payee_id, payout_method, hash, success, error);
conekta.PayoutMethod.delete(payee_id, payout_method, success, error);

conekta.Payout.create(hash, success, error);
conekta.Payout.where(hash, success, error);
conekta.Payout.find(payout_id, success, error);
```

## Tests

You can test the conekta library with mocha on the conekta library root:

```sh
$ mocha
```

License
-------
Developed by [Conekta](https://www.conekta.io). Available with [MIT License](LICENSE).
