![alt tag](https://raw.github.com/conekta/conekta-node/master/readme_files/cover.png)

Conekta Node v 2.0.0
======================

Wrapper to connect with https://api.conekta.io.

## Install

```sh
npm install conekta
```

## Usage

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
}, function(err, res) {
    if (err) {
        console.log(err.message_to_purchaser);
        return;
    }
    console.log(res.toObject());
});
```

## Endpoints

```node
//Charge
conekta.Charge.create(hash, callback);
conekta.Charge.where(hash, callback);
conekta.Charge.find(charge_id, callback);

conekta.Plan.create(hash, callback);
conekta.Plan.where(hash, callback);
conekta.Plan.find(plan_id, callback);

conekta.Event.where(hash, callback);

conekta.Customer.create(hash, callback);
conekta.Customer.where(hash, callback);
conekta.Customer.find(customer_id, hash, callback);

conekta.Payee.create(hash, callback);
conekta.Payee.where(hash, callback);
conekta.Payee.find(payee_id, callback);

conekta.Payout.create(hash, callback);
conekta.Payout.where(hash, callback);
conekta.Payout.find(payout_id, callback);
```

## Documentation

Please see [https://www.conekta.io/docs/api](https://www.conekta.io/es/docs/api/?backend-language=backend_javascript&frontend-language=web&javascript-interpreter-language=javascript) for up-to-date documentation.

## Contribute

### Clone repo

```sh
$ git clone https://github.com/conekta/conekta-node
$ cd conekta-node
```

### Install dependencies

```sh
$ npm install
```

### Run interactive mode

```sh
$ bin/console
Welcome to Conekta node console!
Help: exit() to quit

> conekta.api_key = '9YxqfRnx4sMQDnRsqdYn';
'9YxqfRnx4sMQDnRsqdYn'
> conekta.locale = 'es';
'es'
> 
```

### Run tests

![Codeship Status](https://www.codeship.io/projects/51103310-1e4d-0131-0d84-5e49904adcd5/status)

```sh
$ npm test
```

### Send pull requests

We love pull requests, send them from your fork to branch **dev** into **conekta/conekta-node**

License
-------
Developed by [Conekta](https://www.conekta.io). Available with [MIT License](LICENSE).

We are hiring
-------------

If you are a comfortable working with a range of backend languages (Java, Python, Ruby, PHP, etc) and frameworks, you have solid foundation in data structures, algorithms and software design with strong analytical and debugging skills. 
Send your CV, github to quieroser@conekta.io
