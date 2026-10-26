# PaymentMethodSettingsResponse

Enablement status of each payment method available for the company.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**apple_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**google_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**cash_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**bank_transfer_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**bnpl_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]
**pay_by_bank_payment** | [**PaymentMethodSetting**](PaymentMethodSetting.md) |  | [default to undefined]

## Example

```typescript
import { PaymentMethodSettingsResponse } from 'conekta';

const instance: PaymentMethodSettingsResponse = {
    card_payment,
    apple_payment,
    google_payment,
    cash_payment,
    bank_transfer_payment,
    bnpl_payment,
    pay_by_bank_payment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
