# PaymentMethodBnplRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of the payment method | [default to undefined]
**cancel_url** | **string** | URL to redirect the customer after a canceled payment | [default to undefined]
**can_not_expire** | **boolean** | Indicates if the payment method can not expire | [default to undefined]
**failure_url** | **string** | URL to redirect the customer after a failed payment | [default to undefined]
**product_type** | **string** | Product type of the payment method, use for the payment method to know the product type | [default to undefined]
**success_url** | **string** | URL to redirect the customer after a successful payment | [default to undefined]

## Example

```typescript
import { PaymentMethodBnplRequest } from 'conekta';

const instance: PaymentMethodBnplRequest = {
    type,
    cancel_url,
    can_not_expire,
    failure_url,
    product_type,
    success_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
