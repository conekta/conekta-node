# ChargeRequestPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**expires_at** | **number** | Method expiration date as unix timestamp | [optional] [default to undefined]
**product_type** | **string** | Product type of the payment method, use for the payment method to know the product type | [default to undefined]
**cancel_url** | **string** | Optional URL to redirect the customer after a canceled payment | [optional] [default to undefined]
**failure_url** | **string** | URL to redirect the customer after a failed payment | [default to undefined]
**success_url** | **string** | URL to redirect the customer after a successful payment | [default to undefined]
**cvc** | **string** | Optional, It is a value that allows identifying the security code of the card. Only for PCI merchants | [default to undefined]
**exp_month** | **string** | Card expiration month | [default to undefined]
**exp_year** | **string** | Card expiration year | [default to undefined]
**name** | **string** | Cardholder name. Must include first and last name separated by a space; single-word names are rejected. Letters (including accented Latin characters), spaces, and the characters , . \&#39; - are accepted; digits and other symbols are rejected. | [default to undefined]
**number** | **string** | Card number | [default to undefined]
**contract_id** | **string** | Optional id sent to indicate the bank contract for recurrent card charges. | [optional] [default to undefined]
**customer_ip_address** | **string** | Optional field used to capture the customer\&#39;s IP address for fraud prevention and security monitoring purposes | [optional] [default to undefined]
**monthly_installments** | **number** | How many months without interest to apply, it can be 3, 6, 9, 12 or 18 | [optional] [default to undefined]
**token_id** | **string** |  | [optional] [default to undefined]
**payment_source_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargeRequestPaymentMethod } from 'conekta';

const instance: ChargeRequestPaymentMethod = {
    type,
    expires_at,
    product_type,
    cancel_url,
    failure_url,
    success_url,
    cvc,
    exp_month,
    exp_year,
    name,
    number,
    contract_id,
    customer_ip_address,
    monthly_installments,
    token_id,
    payment_source_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
