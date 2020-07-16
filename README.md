<div align="center">

![README Cover Image](readme_files/banner-library.png)

# Conekta Node

[![Made with Node](readme_files/node_badge.svg)](https://nodejs.org) [![By Conekta](readme_files/conekta_badge.svg)](https://conekta.com)

</div>

Wrapper to connect with https://api.conekta.io.

## Install

```sh
npm install conekta
```

This last release works with API 2, if you are using 1.0 type:


```sh
npm install conekta@1.6.5
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

```

## Documentation

Please see https://developers.conekta.com/api?language=node for up-to-date documentation.

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

## How to contribute to the project

1. Fork the repository
 
2. Clone the repository
```
    git clone git@github.com:yourUserName/conekta-node.git
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

   Make sure that, if you add new features to our library, be sure that corresponding **unit tests** are added.

   If you go to your repository on GitHub, you’ll see a Compare & pull request button. Click on that button.

***

## We are always hiring!

If you are a comfortable working with a range of backend languages (Java, Python, Ruby, PHP, etc) and frameworks, you have solid foundation in data structures, algorithms and software design with strong analytical and debugging skills, check our open positions: https://www.conekta.com/careers
