# ChargeRequest

The charges to be made

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount to be charged in cents | [optional] [default to undefined]
**payment_method** | [**ChargeRequestPaymentMethod**](ChargeRequestPaymentMethod.md) |  | [default to undefined]
**reference_id** | **string** | Custom reference to add to the charge | [optional] [default to undefined]

## Example

```typescript
import { ChargeRequest } from 'conekta';

const instance: ChargeRequest = {
    amount,
    payment_method,
    reference_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
