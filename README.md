![README Cover Image](readme_cover.png)

<div align="center">

Conekta Node v 3.6.1

[![Made with Node](https://img.shields.io/badge/made%20with-node-red.svg?style=for-the-badge&colorA=44883e&colorB=215732&logo=node.js&logoColor=white)](https://nodejs.org)
[![By Conekta](https://img.shields.io/badge/by-conekta-red.svg?style=for-the-badge&colorA=ee6130&colorB=00a4ac)](https://conekta.com)
</div>

This is a [Node.js](https://nodejs.org) library that allows interaction with [Conekta's API](https://api.conekta.io).

## Requeriments

Add them!

## Installation

This is the latest release which works with API v2:

```bash
npm install conekta
```

If you are using API v1.0 install:

```bash
npm install conekta@3.5.1
>>>>>>> fix: Update badge colours to match Node, upcase Node, add icon.
```

Install dependencies

```bash
$ npm install
```

## Usage

Run interactive mode

```bash
$ bin/console
Welcome to Conekta node console!
Help: exit() to quit

> conekta.api_key = '9YxqfRnx4sMQDnRsqdYn';
'9YxqfRnx4sMQDnRsqdYn'
> conekta.locale = 'es';
'es'
> 
```

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
    "unit_price": 35000,
    "quantity": 1
  }],
  "charges": [{
    "payment_method": {
      "type": "card",
      "token_id": "tok_test_visa_4242"
    }
  }]
}).then(function (result) {
  console.log(result.toObject())
}, function (error) {
  console.log(error)
})
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

Please visit the [official API reference](https://developers.conekta.com/api?language=node) for an up-to-date documentation.

## Run tests

```bash
$ npm test
```

## Contributing

1. Fork the repository
 
2. Clone the repository
```
    git clone git@github.com:yourUserName/conekta-php.git
```
3. Create a branch
```
    git checkout develop
    git pull origin develop
    # You should choose the name of your branch
    git checkout -b <feature/my_branch>
```    
4. Make necessary changes and commit those changes
```
    git add .
    git commit -m "my changes"
```
5. Push changes to GitHub
```
    git push origin <feature/my_branch>
```
6. Submit your changes for review, create a pull request

   To create a pull request, you need to have made your code changes on a separate branch. This branch should be named like this: **feature/my_feature** or **fix/my_fix**.

   Make sure that, if you add new features to our library, be sure to add the corresponding **unit tests**.

   If you go to your repository on GitHub, you’ll see a Compare & pull request button. Click on that button.

***

## We are always hiring!

If you are a comfortable working with a range of backend languages (Java, Python, Ruby, PHP, etc) and frameworks, you have solid foundation in data structures, algorithms and software design with strong analytical and debugging skills, check our open positions: https://www.conekta.com/careers

## License

Developed in Mexico by [Conekta](https://www.conekta.com). Available with [MIT License](LICENSE).
