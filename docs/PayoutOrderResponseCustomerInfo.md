# PayoutOrderResponseCustomerInfo

The customer information of the payout order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_custom_reference** | **string** | Custom reference | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**phone** | **string** |  | [optional] [default to undefined]
**corporate** | **boolean** |  | [optional] [default to false]
**object** | **string** |  | [optional] [default to undefined]
**id** | **string** | The id of the customer. | [default to undefined]

## Example

```typescript
import { PayoutOrderResponseCustomerInfo } from 'conekta';

const instance: PayoutOrderResponseCustomerInfo = {
    customer_custom_reference,
    name,
    email,
    phone,
    corporate,
    object,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
