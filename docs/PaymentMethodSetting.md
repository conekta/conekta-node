# PaymentMethodSetting

Enablement flags for a single payment method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **boolean** | Indicates if the payment method is enabled by Conekta for the company. | [default to undefined]
**merchant** | **boolean** | Indicates if the payment method is enabled by the merchant in its own settings. | [default to undefined]
**effective** | **boolean** | Final state of the payment method. It is only true when both &#x60;admin&#x60; and &#x60;merchant&#x60; are enabled. | [default to undefined]

## Example

```typescript
import { PaymentMethodSetting } from 'conekta';

const instance: PaymentMethodSetting = {
    admin,
    merchant,
    effective,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
