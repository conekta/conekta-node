# OrderDiscountLinesRequest

List of discounts that apply to the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount to be deducted from the total sum of all payments, in cents. | [default to undefined]
**code** | **string** | Discount code. | [default to undefined]
**type** | **string** | It can be \&#39;loyalty\&#39;, \&#39;campaign\&#39;, \&#39;coupon\&#39; o \&#39;sign\&#39; | [default to undefined]

## Example

```typescript
import { OrderDiscountLinesRequest } from 'conekta';

const instance: OrderDiscountLinesRequest = {
    amount,
    code,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
