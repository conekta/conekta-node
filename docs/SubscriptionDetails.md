# SubscriptionDetails

Subscription details for customer portal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card** | [**SubscriptionDetailsCard**](SubscriptionDetailsCard.md) |  | [optional] [default to undefined]
**plan** | [**SubscriptionDetailsPlan**](SubscriptionDetailsPlan.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**plan_id** | **string** |  | [optional] [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**next_billing_cycle** | **number** |  | [optional] [default to undefined]
**created_at** | **number** |  | [optional] [default to undefined]
**updated_at** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionDetails } from 'conekta';

const instance: SubscriptionDetails = {
    card,
    plan,
    id,
    object,
    status,
    plan_id,
    customer_id,
    next_billing_cycle,
    created_at,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
