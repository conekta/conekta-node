# PaymentMethodBnplPayment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**cancel_url** | **string** | URL to redirect the customer after a canceled payment | [optional] [default to undefined]
**expires_at** | **number** | Expiration date of the charge | [default to undefined]
**failure_url** | **string** | URL to redirect the customer after a failed payment | [optional] [default to undefined]
**product_type** | **string** | Product type of the charge | [default to undefined]
**redirect_url** | **string** | URL to redirect the customer to complete the payment | [optional] [default to undefined]
**success_url** | **string** | URL to redirect the customer after a successful payment | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodBnplPayment } from 'conekta';

const instance: PaymentMethodBnplPayment = {
    type,
    object,
    cancel_url,
    expires_at,
    failure_url,
    product_type,
    redirect_url,
    success_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
