![README Cover Image](readme_cover.png)

Conekta Node v 3.1.1
======================
Exactly the same package as [conekta-node](https://www.npmjs.com/package/conekta) but this one uses promises instead of callbacks
Wrapper to connect with https://api.conekta.io.

## Install

```sh
npm i conekta-promise -S
```


## Usage

```node
var conekta = require('conekta');

conekta.api_key = '9YxqfRnx4sMQDnRsqdYn';
conekta.locale = 'es';

conekta.Order.create({
    "currency": "MXN",
    "customer_info": {
        "name": "Jul Ceballos",
        "phone": "+5215555555555",
        "email": "jul@conekta.io"
    },
    "line_items": [{
        "name": "Box of Cohiba S1s",
        "description": "Imported From Mex.",
        "unit_price": 35000,
        "quantity": 1,
        "tags": ["food", "mexican food"],
        "type": "physical"
    }]
}).then(function(res){   
  console.log(res.toObject());
}).catch(function(err){
  console.log(err.type);
});
```

## Endpoints

```node

Conekta.Order.create
Conekta.Order.update
Conekta.Order.find
Conekta.Order.where
Conekta.Order.createCharge
Conekta.Order.createLineItem
Conekta.Lineitem.update
Conekta.Order.createTaxLine
Conekta.TaxLine.update
Conekta.Order.createShippingLine
Conekta.ShippingLine.update
Conekta.Order.createDiscountLine
Conekta.DiscountLine.update
Conekta.Customer.create
Conekta.Customer.update
Conekta.Customer.find
Conekta.Customer.where
Conekta.Customer.destroy
Conekta.Customer.createSource
Conekta.Source.update
Conekta.Customer.createShippingContact
Conekta.ShippingContact.update
Conekta.Customer.createFiscalEntity
Conekta.FiscalEntity.update

```

## Documentation

Please see https://www.conekta.io/docs/api-v1_1 for up-to-date documentation.

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

## License

Developed in Mexico by [Conekta](https://www.conekta.com). Available with [MIT License](LICENSE).

***

## We are always hiring!

If you are a comfortable working with a range of backend languages (Java, Python, Ruby, PHP, etc) and frameworks, you have solid foundation in data structures, algorithms and software design with strong analytical and debugging skills. Send us your CV and GitHub to quieroser@conekta.com
