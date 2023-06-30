# Conekta API library for Node.js 
![Node.js CI](https://github.com/conekta/conekta-node/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://api.codeclimate.com/v1/badges/6d669b88c0b07a3ff6a3/test_coverage)](https://codeclimate.com/github/conekta/conekta-node/test_coverage)
[![Downloads](https://img.shields.io/npm/dm/conekta.svg)](https://www.npmjs.com/package/conekta)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/conekta.svg)
[![Version](https://img.shields.io/npm/v/conekta.svg)](https://www.npmjs.com/package/conekta)
[![Try on RunKit](https://badge.runkitcdn.com/conekta.svg)](https://runkit.com/npm/conekta)

This is the officially supported Node.js library for using Conekta's APIs.
## Supported API versions
The library supports all APIs under the following services:

| API                                                                                         | Description | Service Name | Supported version |
|---------------------------------------------------------------------------------------------| ----------- |-------|-------------------|
| [Payments API](https://developers.conekta.com/reference)                  | Our classic integration for online payments. Current supported version | Payments API | **v2.1.0**        |

For more information, refer to our [documentation](https://developers.conekta.com/v2.1.0/docs).

## Prerequisites
- [Conekta account](https://panel.conekta.com/)
- [API key](https://developers.conekta.com/v2.1.0/docs/como-obtener-tus-api-keys).  your API credential .
- [Install Node.js](https://nodejs.org/en/download/) version 14 or later.

## Installation
Install the [Node.JS package](https://www.npmjs.com/package/conekta):
```bash
npm install --save conekta
```

Alternatively, you can download the [release on GitHub](https://github.com/conekta/conekta-node/releases).

## Updating

To update the Node.JS package:

``` bash
npm update conekta
```

Check for breaking changes on the [releases page](https://github.com/conekta/conekta-node/releases/).


## Using the library

In order to submit http request to Conekta API you need to initialize the client. The following example makes a order request:
```ts
import { CustomersApi, Configuration, Customer, CustomerResponse } from "conekta";

const apikey = "key_xxxxx";
const config = new Configuration({ accessToken: apikey });
const client = new CustomersApi(config);

const customer: Customer = {
  name: "John Constantine",
  email: "frank@google.com",
  phone: "+5215555555555"
}

client.createCustomer(customer).then(response => {
  const customerResponse = response.data as CustomerResponse;
  console.log(customerResponse.id);
}).catch(error => {
  console.error("here", error);
});
```

## Running the tests
Navigate to conekta-node folder and run the following commands.
```
npm run build
npm run test
```

## Contributing
We encourage you to contribute to this repository, so everyone can benefit from new features, bug fixes, and any other improvements.
Have a look at our [contributing guidelines](https://github.com/conekta/conekta-node/blob/main/CONTRIBUTING.md) to find out how to raise a pull request.

## Support
If you have a feature request, or spotted a bug or a technical problem, [create an issue here](https://github.com/conekta/conekta-node/issues/choose).

For other questions, [contact our Support Team](https://developers.conekta.com/discuss).

## Licence
This repository is available under the [MIT license](https://github.com/conekta/conekta-node/blob/master/LICENSE).

## See also
* [Conekta docs](https://developers.conekta.com/docs)
