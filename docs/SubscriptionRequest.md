# SubscriptionRequest

It is a parameter that allows to identify in the response, the detailed content of the plans to which the client has subscribed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan_id** | **string** |  | [default to undefined]
**card_id** | **string** |  | [optional] [default to undefined]
**trial_end** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionRequest } from 'conekta';

const instance: SubscriptionRequest = {
    plan_id,
    card_id,
    trial_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
