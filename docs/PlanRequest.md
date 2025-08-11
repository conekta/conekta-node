# PlanRequest

a plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount in cents that will be charged on the interval specified. | [default to undefined]
**currency** | **string** | ISO 4217 for currencies, for the Mexican peso it is MXN/USD | [optional] [default to undefined]
**expiry_count** | **number** | Number of repetitions of the frequency NUMBER OF CHARGES TO BE MADE, considering the interval and frequency, this evolves over time, but is subject to the expiration count. | [optional] [default to undefined]
**frequency** | **number** | Frequency of the charge, which together with the interval, can be every 3 weeks, every 4 months, every 2 years, every 5 fortnights | [default to undefined]
**id** | **string** | internal reference id | [optional] [default to undefined]
**interval** | **string** | The interval of time between each charge. | [default to undefined]
**name** | **string** | The name of the plan. | [default to undefined]
**trial_period_days** | **number** | The number of days the customer will have a free trial. | [optional] [default to undefined]
**max_retries** | **number** | (optional) Specifies the maximum number of retry attempts for a subscription payment before it is canceled. | [optional] [default to undefined]
**retry_delay_hours** | **number** | (optional)  Defines the number of hours between subscription payment retry attempts. | [optional] [default to undefined]

## Example

```typescript
import { PlanRequest } from 'conekta';

const instance: PlanRequest = {
    amount,
    currency,
    expiry_count,
    frequency,
    id,
    interval,
    name,
    trial_period_days,
    max_retries,
    retry_delay_hours,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
