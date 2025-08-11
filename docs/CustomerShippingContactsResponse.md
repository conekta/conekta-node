# CustomerShippingContactsResponse

Contains the detail of the shipping addresses that the client has active or has used in Conekta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone** | **string** |  | [optional] [default to undefined]
**receiver** | **string** |  | [optional] [default to undefined]
**between_streets** | **string** |  | [optional] [default to undefined]
**address** | [**CustomerShippingContactsResponseAddress**](CustomerShippingContactsResponseAddress.md) |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**created_at** | **number** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the shipping contact | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerShippingContactsResponse } from 'conekta';

const instance: CustomerShippingContactsResponse = {
    phone,
    receiver,
    between_streets,
    address,
    parent_id,
    _default,
    id,
    created_at,
    metadata,
    object,
    deleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
