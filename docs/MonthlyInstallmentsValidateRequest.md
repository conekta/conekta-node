# MonthlyInstallmentsValidateRequest

BIN and amount to evaluate for interest-free monthly installments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bin** | **string** | First 6 or 8 digits of the card number (Bank Identification Number). An 8 digit BIN that yields no match is retried with its first 6 digits. | [default to undefined]
**amount** | **number** | Amount to charge in the smallest currency unit (cents for MXN). Used to compute the monthly fee of each available plan. | [default to undefined]

## Example

```typescript
import { MonthlyInstallmentsValidateRequest } from 'conekta';

const instance: MonthlyInstallmentsValidateRequest = {
    bin,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
