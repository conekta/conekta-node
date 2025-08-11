# PaymentMethodGeneralRequest

Payment method used in the charge. Go to the [payment methods](https://developers.conekta.com/reference/m%C3%A9todos-de-pago) section for more details 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_at** | **number** | Method expiration date as unix timestamp | [optional] [default to undefined]
**monthly_installments** | **number** | How many months without interest to apply, it can be 3, 6, 9, 12 or 18 | [optional] [default to undefined]
**type** | **string** | Type of payment method | [default to undefined]
**token_id** | **string** |  | [optional] [default to undefined]
**payment_source_id** | **string** |  | [optional] [default to undefined]
**cvc** | **string** | Optional, It is a value that allows identifying the security code of the card. Only for PCI merchants | [optional] [default to undefined]
**contract_id** | **string** | Optional id sent to indicate the bank contract for recurrent card charges. | [optional] [default to undefined]
**customer_ip_address** | **string** | Optional field used to capture the customer\&#39;s IP address for fraud prevention and security monitoring purposes | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodGeneralRequest } from 'conekta';

const instance: PaymentMethodGeneralRequest = {
    expires_at,
    monthly_installments,
    type,
    token_id,
    payment_source_id,
    cvc,
    contract_id,
    customer_ip_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
