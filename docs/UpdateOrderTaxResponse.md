# UpdateOrderTaxResponse

create new taxes for an existing order response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount to be collected for tax in cents | [default to undefined]
**description** | **string** | description or tax\&#39;s name | [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderTaxResponse } from 'conekta';

const instance: UpdateOrderTaxResponse = {
    amount,
    description,
    metadata,
    id,
    object,
    parent_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
