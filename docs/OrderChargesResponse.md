# OrderChargesResponse

The charges associated with the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **boolean** | Indicates if there are more pages to be requested | [default to undefined]
**object** | **string** | Object type, in this case is list | [default to undefined]
**data** | [**Array&lt;ChargesDataResponse&gt;**](ChargesDataResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderChargesResponse } from 'conekta';

const instance: OrderChargesResponse = {
    has_more,
    object,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
