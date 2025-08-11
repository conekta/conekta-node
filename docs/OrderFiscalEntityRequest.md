# OrderFiscalEntityRequest

Fiscal entity of the order, Currently it is a purely informative field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**FiscalEntityAddress**](FiscalEntityAddress.md) |  | [default to undefined]
**email** | **string** | Email of the fiscal entity | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the fiscal entity | [optional] [default to undefined]
**name** | **string** | Name of the fiscal entity | [optional] [default to undefined]
**phone** | **string** | Phone of the fiscal entity | [optional] [default to undefined]
**tax_id** | **string** | Tax ID of the fiscal entity | [optional] [default to undefined]

## Example

```typescript
import { OrderFiscalEntityRequest } from 'conekta';

const instance: OrderFiscalEntityRequest = {
    address,
    email,
    metadata,
    name,
    phone,
    tax_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
