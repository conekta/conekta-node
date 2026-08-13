# PaymentMethodCardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**cvc** | **string** | Card security code | [default to undefined]
**exp_month** | **string** | Card expiration month | [default to undefined]
**exp_year** | **string** | Card expiration year | [default to undefined]
**name** | **string** | Cardholder name. Must include first and last name separated by a space; single-word names are rejected. Letters (including accented Latin characters), spaces, and the characters , . \&#39; - are accepted; digits and other symbols are rejected. | [default to undefined]
**number** | **string** | Card number | [default to undefined]
**contract_id** | **string** | Optional merchant-supplied identifier (exactly 10 characters) that links a card transaction to a recurring/subscription contract at the acquiring bank. Forwarded to the bank gateway and stored on the resulting charge. Accepted on creation only; ignored on update. Do not place sensitive bank data here — the value is returned in charge responses. | [optional] [default to undefined]
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
    contract_id,
    customer_ip_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
