# PaymentMethodPbbPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**deep_link** | **string** | Deep link for the payment, use for mobile apps/flows | [default to undefined]
**expires_at** | **number** | Expiration date of the charge | [default to undefined]
**product_type** | **string** | Product type of the charge | [default to undefined]
**redirect_url** | **string** | URL to redirect the customer to complete the payment | [default to undefined]
**reference** | **string** | Reference for the payment | [default to undefined]

## Example

```typescript
import { PaymentMethodPbbPayment } from 'conekta';

const instance: PaymentMethodPbbPayment = {
    type,
    object,
    deep_link,
    expires_at,
    product_type,
    redirect_url,
    reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
