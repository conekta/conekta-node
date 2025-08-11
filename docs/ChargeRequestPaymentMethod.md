# ChargeRequestPaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**cancel_url** | **string** | URL to redirect the customer after a canceled payment | [default to undefined]
**can_not_expire** | **boolean** | Indicates if the payment method can not expire | [default to undefined]
**failure_url** | **string** | URL to redirect the customer after a failed payment | [default to undefined]
**product_type** | **string** | Product type of the payment method, use for the payment method to know the product type | [default to undefined]
**success_url** | **string** | URL to redirect the customer after a successful payment | [default to undefined]
**cvc** | **string** | Optional, It is a value that allows identifying the security code of the card. Only for PCI merchants | [default to undefined]
**exp_month** | **string** | Card expiration month | [default to undefined]
**exp_year** | **string** | Card expiration year | [default to undefined]
**name** | **string** | Cardholder name | [default to undefined]
**number** | **string** | Card number | [default to undefined]
**customer_ip_address** | **string** | Optional field used to capture the customer\&#39;s IP address for fraud prevention and security monitoring purposes | [optional] [default to undefined]
**expires_at** | **number** | Method expiration date as unix timestamp | [optional] [default to undefined]
**monthly_installments** | **number** | How many months without interest to apply, it can be 3, 6, 9, 12 or 18 | [optional] [default to undefined]
**token_id** | **string** |  | [optional] [default to undefined]
**payment_source_id** | **string** |  | [optional] [default to undefined]
**contract_id** | **string** | Optional id sent to indicate the bank contract for recurrent card charges. | [optional] [default to undefined]

## Example

```typescript
import { ChargeRequestPaymentMethod } from 'conekta';

const instance: ChargeRequestPaymentMethod = {
    type,
    cancel_url,
    can_not_expire,
    failure_url,
    product_type,
    success_url,
    cvc,
    exp_month,
    exp_year,
    name,
    number,
    customer_ip_address,
    expires_at,
    monthly_installments,
    token_id,
    payment_source_id,
    contract_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
