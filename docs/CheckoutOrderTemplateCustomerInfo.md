# CheckoutOrderTemplateCustomerInfo

It is the information of the customer who will be created when receiving a new payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**phone** | **string** |  | [default to undefined]
**corporate** | **boolean** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**customer_id** | **string** |  | [default to undefined]

## Example

```typescript
import { CheckoutOrderTemplateCustomerInfo } from 'conekta';

const instance: CheckoutOrderTemplateCustomerInfo = {
    name,
    email,
    phone,
    corporate,
    object,
    customer_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
