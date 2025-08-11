# CustomerShippingContactsDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** | Phone contact | [optional] [default to undefined]
**receiver** | **string** | Name of the person who will receive the order | [optional] [default to undefined]
**between_streets** | **string** | The street names between which the order will be delivered. | [optional] [default to undefined]
**address** | [**CustomerShippingContactsAddress**](CustomerShippingContactsAddress.md) |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the shipping contact | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]

## Example

```typescript
import { CustomerShippingContactsDataResponse } from 'conekta';

const instance: CustomerShippingContactsDataResponse = {
    phone,
    receiver,
    between_streets,
    address,
    parent_id,
    _default,
    deleted,
    metadata,
    id,
    object,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
