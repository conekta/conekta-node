# PlanUpdateRequest

a plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount in cents that will be charged on the interval specified. | [optional] [default to undefined]
**currency** | **string** | ISO 4217 for currencies, for the Mexican peso it is MXN/USD | [optional] [default to undefined]
**expiry_count** | **number** | Number of repetitions of the frequency NUMBER OF CHARGES TO BE MADE, considering the interval and frequency, this evolves over time, but is subject to the expiration count. | [optional] [default to undefined]
**name** | **string** | The name of the plan. | [optional] [default to undefined]

## Example

```typescript
import { PlanUpdateRequest } from 'conekta';

const instance: PlanUpdateRequest = {
    amount,
    currency,
    expiry_count,
    name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
