# PaymentMethodCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**cvc** | **string** | Card security code | [default to undefined]
**exp_month** | **string** | Card expiration month | [default to undefined]
**exp_year** | **string** | Card expiration year | [default to undefined]
**name** | **string** | Cardholder name | [default to undefined]
**number** | **string** | Card number | [default to undefined]
**customer_ip_address** | **string** | Optional field used to capture the customer\&#39;s IP address for fraud prevention and security monitoring purposes | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodCardRequest } from 'conekta';

const instance: PaymentMethodCardRequest = {
    type,
    cvc,
    exp_month,
    exp_year,
    name,
    number,
    customer_ip_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
