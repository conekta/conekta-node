# OrderResponseCheckout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** | Are the payment methods available for this link | [optional] [default to undefined]
**can_not_expire** | **boolean** |  | [optional] [default to undefined]
**emails_sent** | **number** |  | [optional] [default to undefined]
**exclude_card_networks** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]
**failure_url** | **string** |  | [optional] [default to undefined]
**force_3ds_flow** | **boolean** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**is_redirect_on_failure** | **boolean** |  | [optional] [default to undefined]
**livemode** | **boolean** |  | [optional] [default to undefined]
**max_failed_retries** | **number** | Number of retries allowed before the checkout is marked as failed | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**monthly_installments_enabled** | **boolean** |  | [optional] [default to undefined]
**monthly_installments_options** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**needs_shipping_contact** | **boolean** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**on_demand_enabled** | **boolean** |  | [optional] [default to undefined]
**paid_payments_count** | **number** |  | [optional] [default to undefined]
**recurrent** | **boolean** |  | [optional] [default to undefined]
**redirection_time** | **number** | number of seconds to wait before redirecting to the success_url | [optional] [default to undefined]
**slug** | **string** |  | [optional] [default to undefined]
**sms_sent** | **number** |  | [optional] [default to undefined]
**success_url** | **string** |  | [optional] [default to undefined]
**starts_at** | **number** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderResponseCheckout } from 'conekta';

const instance: OrderResponseCheckout = {
    allowed_payment_methods,
    can_not_expire,
    emails_sent,
    exclude_card_networks,
    expires_at,
    failure_url,
    force_3ds_flow,
    id,
    is_redirect_on_failure,
    livemode,
    max_failed_retries,
    metadata,
    monthly_installments_enabled,
    monthly_installments_options,
    name,
    needs_shipping_contact,
    object,
    on_demand_enabled,
    paid_payments_count,
    recurrent,
    redirection_time,
    slug,
    sms_sent,
    success_url,
    starts_at,
    status,
    type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
