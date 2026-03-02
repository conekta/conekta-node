# PaymentMethodCashRecurrentResponse

Alias of cash response used when type=cash_recurrent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**object** | **string** |  | [default to undefined]
**created_at** | **number** |  | [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]
**agreements** | [**Array&lt;CashAgreementsResponse&gt;**](CashAgreementsResponse.md) |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**barcode** | **string** |  | [optional] [default to undefined]
**barcode_url** | **string** | URL to the barcode image, reference is the same as barcode | [optional] [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]
**provider** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodCashRecurrentResponse } from 'conekta';

const instance: PaymentMethodCashRecurrentResponse = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
