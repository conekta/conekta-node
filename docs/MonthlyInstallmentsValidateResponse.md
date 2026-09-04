# MonthlyInstallmentsValidateResponse

monthly installments validate response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_installments** | [**Array&lt;MonthlyInstallmentsValidateResponseAvailableInstallments&gt;**](MonthlyInstallmentsValidateResponseAvailableInstallments.md) | Interest-free monthly installment plans available for this card and amount. Empty when the card does not qualify for monthly installments, for example a debit card or a credit card not issued in Mexico. An empty array is not an error. | [default to undefined]
**bin_info** | [**MonthlyInstallmentsValidateResponseBinInfo**](MonthlyInstallmentsValidateResponseBinInfo.md) |  | [default to undefined]

## Example

```typescript
import { MonthlyInstallmentsValidateResponse } from 'conekta';

const instance: MonthlyInstallmentsValidateResponse = {
    available_installments,
    bin_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
