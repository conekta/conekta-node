# OrderFiscalEntityResponse

Fiscal entity of the order, Currently it is a purely informative field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrderFiscalEntityAddressResponse**](OrderFiscalEntityAddressResponse.md) |  | [default to undefined]
**email** | **string** | Email of the fiscal entity | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the fiscal entity | [optional] [default to undefined]
**name** | **string** | Name of the fiscal entity | [optional] [default to undefined]
**tax_id** | **string** | Tax ID of the fiscal entity | [optional] [default to undefined]
**id** | **string** | ID of the fiscal entity | [default to undefined]
**created_at** | **number** | The time at which the object was created in seconds since the Unix epoch | [default to undefined]
**object** | **string** |  | [default to undefined]
**phone** | **string** | Phone of the fiscal entity | [optional] [default to undefined]

## Example

```typescript
import { OrderFiscalEntityResponse } from 'conekta';

const instance: OrderFiscalEntityResponse = {
    address,
    email,
    metadata,
    name,
    tax_id,
    id,
    created_at,
    object,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
