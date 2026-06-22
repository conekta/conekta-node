# OrderResponseShippingContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **number** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**receiver** | **string** |  | [optional] [default to undefined]
**between_streets** | **string** |  | [optional] [default to undefined]
**address** | [**CustomerShippingContactsAddress**](CustomerShippingContactsAddress.md) |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the shipping contact | [optional] [default to undefined]
**deleted** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderResponseShippingContact } from 'conekta';

const instance: OrderResponseShippingContact = {
    created_at,
    id,
    object,
    phone,
    receiver,
    between_streets,
    address,
    parent_id,
    _default,
    metadata,
    deleted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
