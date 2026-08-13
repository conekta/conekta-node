# ShippingContactAddress

Address of the person who will receive the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street1** | **string** | Street and number of the delivery address. | [optional] [default to undefined]
**street2** | **string** | Apartment, suite or interior reference for the delivery address. | [optional] [default to undefined]
**postal_code** | **string** | Postal code of the delivery address. For Mexican addresses (country MX) it must be a 5-digit postal code. | [optional] [default to undefined]
**city** | **string** | City of the delivery address. Must contain at least two consecutive ASCII letters. | [optional] [default to undefined]
**state** | **string** | State of the delivery address. | [optional] [default to undefined]
**country** | **string** | Country of the delivery address. This field follows the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). | [optional] [default to undefined]
**residential** | **boolean** | Indicates whether the delivery address is residential. | [optional] [default to true]

## Example

```typescript
import { ShippingContactAddress } from 'conekta';

const instance: ShippingContactAddress = {
    street1,
    street2,
    postal_code,
    city,
    state,
    country,
    residential,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
