# CreateCustomerFiscalEntitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CustomerAddress**](CustomerAddress.md) |  | [default to undefined]
**tax_id** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: object; }** |  | [optional] [default to undefined]
**company_name** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCustomerFiscalEntitiesResponse } from 'conekta';

const instance: CreateCustomerFiscalEntitiesResponse = {
    address,
    tax_id,
    email,
    phone,
    metadata,
    company_name,
    id,
    object,
    created_at,
    parent_id,
    _default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
