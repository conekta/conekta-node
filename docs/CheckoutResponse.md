# CheckoutResponse

checkout response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** | Are the payment methods available for this link | [optional] [default to undefined]
**plan_ids** | **Array&lt;string&gt;** | List of plan IDs that are available for subscription | [optional] [default to undefined]
**can_not_expire** | **boolean** |  | [optional] [default to undefined]
**emails_sent** | **number** |  | [optional] [default to undefined]
**exclude_card_networks** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]
**failure_url** | **string** |  | [optional] [default to undefined]
**force_3ds_flow** | **boolean** |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**livemode** | **boolean** |  | [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**monthly_installments_enabled** | **boolean** |  | [optional] [default to undefined]
**monthly_installments_options** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**name** | **string** | Reason for charge | [default to undefined]
**needs_shipping_contact** | **boolean** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**paid_payments_count** | **number** |  | [optional] [default to undefined]
**payments_limit_count** | **number** |  | [optional] [default to undefined]
**recurrent** | **boolean** |  | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**sms_sent** | **number** |  | [optional] [default to undefined]
**starts_at** | **number** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**success_url** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CheckoutResponse } from 'conekta';

const instance: CheckoutResponse = {
    allowed_payment_methods,
    plan_ids,
    can_not_expire,
    emails_sent,
    exclude_card_networks,
    expires_at,
    failure_url,
    force_3ds_flow,
    id,
    livemode,
    metadata,
    monthly_installments_enabled,
    monthly_installments_options,
    name,
    needs_shipping_contact,
    object,
    paid_payments_count,
    payments_limit_count,
    recurrent,
    slug,
    sms_sent,
    starts_at,
    status,
    success_url,
    type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
