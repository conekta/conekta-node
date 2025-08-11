# PaymentMethodCash


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**agreement** | **string** | Agreement ID | [optional] [default to undefined]
**auth_code** | **number** |  | [optional] [default to undefined]
**cashier_id** | **string** |  | [optional] [default to undefined]
**reference** | **string** |  | [optional] [default to undefined]
**barcode_url** | **string** |  | [optional] [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]
**product_type** | **string** | Product type, e.g. bbva_cash_in, cash_in, pespay_cash_in, etc. | [optional] [default to undefined]
**service_name** | **string** |  | [optional] [default to undefined]
**store** | **string** |  | [optional] [default to undefined]
**store_name** | **string** |  | [optional] [default to undefined]
**customer_ip_address** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PaymentMethodCash } from 'conekta';

const instance: PaymentMethodCash = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
