# OrderTaxRequest

create new taxes for an existing order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount to be collected for tax in cents | [default to undefined]
**description** | **string** | description or tax\&#39;s name | [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderTaxRequest } from 'conekta';

const instance: OrderTaxRequest = {
    amount,
    description,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
