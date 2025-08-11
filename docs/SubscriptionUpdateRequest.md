# SubscriptionUpdateRequest

You can modify the subscription to change the plan used by your customers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** |  | [optional] [default to undefined]
**card_id** | **string** |  | [optional] [default to undefined]
**trial_end** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionUpdateRequest } from 'conekta';

const instance: SubscriptionUpdateRequest = {
    plan_id,
    card_id,
    trial_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
