# CustomerUpdateFiscalEntitiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CustomerAddress**](CustomerAddress.md) |  | [optional] [default to undefined]
**tax_id** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**company_name** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerUpdateFiscalEntitiesRequest } from 'conekta';

const instance: CustomerUpdateFiscalEntitiesRequest = {
    address,
    tax_id,
    email,
    phone,
    metadata,
    company_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
