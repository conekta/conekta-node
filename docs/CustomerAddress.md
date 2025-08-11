# CustomerAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**street1** | **string** |  | [default to undefined]
**street2** | **string** |  | [optional] [default to undefined]
**postal_code** | **string** |  | [default to undefined]
**city** | **string** |  | [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**country** | **string** | this field follows the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) | [optional] [default to undefined]
**residential** | **boolean** |  | [optional] [default to false]
**external_number** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerAddress } from 'conekta';

const instance: CustomerAddress = {
    street1,
    street2,
    postal_code,
    city,
    state,
    country,
    residential,
    external_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
