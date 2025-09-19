# PaymentMethodPbbRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the payment method | [default to undefined]
**expires_at** | **number** | Expiration date of the payment method, in Unix timestamp format | [optional] [default to undefined]
**product_type** | **string** | Product type of the payment method, use for the payment method to know the product type | [default to undefined]

## Example

```typescript
import { PaymentMethodPbbRequest } from 'conekta';

const instance: PaymentMethodPbbRequest = {
    type,
    expires_at,
    product_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
