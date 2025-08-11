# ChargeResponsePaymentMethod


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**agreement** | **string** | Agreement ID | [optional] [default to undefined]
**auth_code** | **string** |  | [optional] [default to undefined]
**cashier_id** | **string** |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**barcode_url** | **string** |  | [optional] [default to undefined]
**expires_at** | **number** | Expiration date of the charge | [default to undefined]
**product_type** | **string** | Product type of the charge | [default to undefined]
**service_name** | **string** |  | [optional] [default to undefined]
**store** | **string** |  | [optional] [default to undefined]
**store_name** | **string** |  | [optional] [default to undefined]
**customer_ip_address** | **string** |  | [optional] [default to undefined]
**account_type** | **string** | Account type of the card | [optional] [default to undefined]
**brand** | **string** | Brand of the card | [optional] [default to undefined]
**contract_id** | **string** | Id sent for recurrent charges. | [optional] [default to undefined]
**country** | **string** | Country of the card | [optional] [default to undefined]
**exp_month** | **string** | Expiration month of the card | [optional] [default to undefined]
**exp_year** | **string** | Expiration year of the card | [optional] [default to undefined]
**fraud_indicators** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**issuer** | **string** | Issuer of the card | [optional] [default to undefined]
**last4** | **string** | Last 4 digits of the card | [optional] [default to undefined]
**name** | **string** | Name of the cardholder | [optional] [default to undefined]
**bank** | **string** |  | [optional] [default to undefined]
**clabe** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**executed_at** | **string** |  | [optional] [default to undefined]
**issuing_account_bank** | **string** |  | [optional] [default to undefined]
**issuing_account_number** | **string** |  | [optional] [default to undefined]
**issuing_account_holder_name** | **string** |  | [optional] [default to undefined]
**issuing_account_tax_id** | **string** |  | [optional] [default to undefined]
**payment_attempts** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**receiving_account_holder_name** | **string** |  | [optional] [default to undefined]
**receiving_account_number** | **string** |  | [optional] [default to undefined]
**receiving_account_bank** | **string** |  | [optional] [default to undefined]
**receiving_account_tax_id** | **string** |  | [optional] [default to undefined]
**reference_number** | **string** |  | [optional] [default to undefined]
**tracking_code** | **string** |  | [optional] [default to undefined]
**cancel_url** | **string** | URL to redirect the customer after a canceled payment | [optional] [default to undefined]
**failure_url** | **string** | URL to redirect the customer after a failed payment | [optional] [default to undefined]
**redirect_url** | **string** | URL to redirect the customer to complete the payment | [optional] [default to undefined]
**success_url** | **string** | URL to redirect the customer after a successful payment | [optional] [default to undefined]

## Example

```typescript
import { ChargeResponsePaymentMethod } from 'conekta';

const instance: ChargeResponsePaymentMethod = {
    type,
    object,
    agreement,
    auth_code,
    cashier_id,
    reference,
    barcode_url,
    expires_at,
    product_type,
    service_name,
    store,
    store_name,
    customer_ip_address,
    account_type,
    brand,
    contract_id,
    country,
    exp_month,
    exp_year,
    fraud_indicators,
    issuer,
    last4,
    name,
    bank,
    clabe,
    description,
    executed_at,
    issuing_account_bank,
    issuing_account_number,
    issuing_account_holder_name,
    issuing_account_tax_id,
    payment_attempts,
    receiving_account_holder_name,
    receiving_account_number,
    receiving_account_bank,
    receiving_account_tax_id,
    reference_number,
    tracking_code,
    cancel_url,
    failure_url,
    redirect_url,
    success_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
