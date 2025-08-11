# PaymentMethodCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**account_type** | **string** | Account type of the card | [optional] [default to undefined]
**auth_code** | **string** |  | [optional] [default to undefined]
**brand** | **string** | Brand of the card | [optional] [default to undefined]
**contract_id** | **string** | Id sent for recurrent charges. | [optional] [default to undefined]
**country** | **string** | Country of the card | [optional] [default to undefined]
**exp_month** | **string** | Expiration month of the card | [optional] [default to undefined]
**exp_year** | **string** | Expiration year of the card | [optional] [default to undefined]
**fraud_indicators** | **Array&lt;any&gt;** |  | [optional] [default to undefined]
**issuer** | **string** | Issuer of the card | [optional] [default to undefined]
**last4** | **string** | Last 4 digits of the card | [optional] [default to undefined]
**name** | **string** | Name of the cardholder | [optional] [default to undefined]
**customer_ip_address** | **string** | Optional field used to capture the customer\&#39;s IP address for fraud prevention and security monitoring purposes | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodCard } from 'conekta';

const instance: PaymentMethodCard = {
    type,
    object,
    account_type,
    auth_code,
    brand,
    contract_id,
    country,
    exp_month,
    exp_year,
    fraud_indicators,
    issuer,
    last4,
    name,
    customer_ip_address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
