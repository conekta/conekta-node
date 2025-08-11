# CustomerShippingContacts

[Shipping](https://developers.conekta.com/v2.2.0/reference/createcustomershippingcontacts) details, required in case of sending a shipping. If we do not receive a shipping_contact on the order, the default shipping_contact of the customer will be used.

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

## Example

```typescript
import { CustomerShippingContacts } from 'conekta';

const instance: CustomerShippingContacts = {
    phone,
    receiver,
    between_streets,
    address,
    parent_id,
    _default,
    deleted,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
