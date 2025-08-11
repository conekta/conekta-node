# SubscriptionResponse

subscription model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle_start** | **number** |  | [optional] [default to undefined]
**billing_cycle_end** | **number** |  | [optional] [default to undefined]
**canceled_at** | **number** |  | [optional] [default to undefined]
**canceled_reason** | **string** | Reason for cancellation. This field appears when the subscription status is \&#39;canceled\&#39;. | [optional] [default to undefined]
**card_id** | **string** |  | [optional] [default to undefined]
**charge_id** | **string** |  | [optional] [default to undefined]
**created_at** | **number** |  | [optional] [default to undefined]
**customer_custom_reference** | **string** |  | [optional] [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**last_billing_cycle_order_id** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**paused_at** | **number** |  | [optional] [default to undefined]
**plan_id** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**subscription_start** | **number** |  | [optional] [default to undefined]
**trial_start** | **number** |  | [optional] [default to undefined]
**trial_end** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionResponse } from 'conekta';

const instance: SubscriptionResponse = {
    billing_cycle_start,
    billing_cycle_end,
    canceled_at,
    canceled_reason,
    card_id,
    charge_id,
    created_at,
    customer_custom_reference,
    customer_id,
    id,
    last_billing_cycle_order_id,
    object,
    paused_at,
    plan_id,
    status,
    subscription_start,
    trial_start,
    trial_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
