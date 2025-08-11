# CustomerPaymentMethodsData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**agreements** | [**Array&lt;PaymentMethodCashResponseAllOfAgreements&gt;**](PaymentMethodCashResponseAllOfAgreements.md) |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**barcode_url** | **string** | URL to the barcode image, reference is the same as barcode | [optional] [default to undefined]
**expires_at** | **string** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]
**last4** | **string** |  | [optional] [default to undefined]
**bin** | **string** |  | [optional] [default to undefined]
**card_type** | **string** |  | [optional] [default to undefined]
**exp_month** | **string** |  | [optional] [default to undefined]
**exp_year** | **string** |  | [optional] [default to undefined]
**brand** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**_default** | **boolean** |  | [optional] [default to undefined]
**visible_on_checkout** | **boolean** |  | [optional] [default to undefined]
**payment_source_status** | **string** |  | [optional] [default to undefined]
**bank** | **string** | Bank name for the SPEI payment method | [optional] [default to undefined]

## Example

```typescript
import { CustomerPaymentMethodsData } from 'conekta';

const instance: CustomerPaymentMethodsData = {
    type,
    id,
    object,
    created_at,
    parent_id,
    agreements,
    reference,
    barcode,
    barcode_url,
    expires_at,
    provider,
    last4,
    bin,
    card_type,
    exp_month,
    exp_year,
    brand,
    name,
    _default,
    visible_on_checkout,
    payment_source_status,
    bank,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
