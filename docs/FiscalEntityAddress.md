# FiscalEntityAddress

Address of the fiscal entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street1** | **string** | Street name and number | [default to undefined]
**street2** | **string** | Street name and number | [optional] [default to undefined]
**postal_code** | **string** | Postal code | [default to undefined]
**city** | **string** | City | [default to undefined]
**state** | **string** | State | [optional] [default to undefined]
**country** | **string** | this field follows the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) | [default to undefined]
**external_number** | **string** | External number | [default to undefined]

## Example

```typescript
import { FiscalEntityAddress } from 'conekta';

const instance: FiscalEntityAddress = {
    street1,
    street2,
    postal_code,
    city,
    state,
    country,
    external_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
