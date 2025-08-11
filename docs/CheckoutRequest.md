# CheckoutRequest

[Checkout](https://developers.conekta.com/v2.2.0/reference/payment-link) details 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** | Are the payment methods available for this link. For subscriptions, only \&#39;card\&#39; is allowed due to the recurring nature of the payments. | [default to undefined]
**plan_ids** | **Array&lt;string&gt;** | List of plan IDs that will be available for subscription. This field is required for subscription payments. | [optional] [default to undefined]
**expires_at** | **number** | Unix timestamp of checkout expiration | [optional] [default to undefined]
**failure_url** | **string** | Redirection url back to the site in case of failed payment, applies only to HostedPayment. | [optional] [default to undefined]
**monthly_installments_enabled** | **boolean** |  | [optional] [default to undefined]
**monthly_installments_options** | **Array&lt;number&gt;** |  | [optional] [default to undefined]
**max_failed_retries** | **number** | Number of retries allowed before the checkout is marked as failed | [optional] [default to undefined]
**name** | **string** | Reason for payment | [optional] [default to undefined]
**on_demand_enabled** | **boolean** |  | [optional] [default to undefined]
**redirection_time** | **number** | number of seconds to wait before redirecting to the success_url | [optional] [default to undefined]
**success_url** | **string** | Redirection url back to the site in case of successful payment, applies only to HostedPayment | [optional] [default to undefined]
**type** | **string** | This field represents the type of checkout | [optional] [default to undefined]

## Example

```typescript
import { CheckoutRequest } from 'conekta';

const instance: CheckoutRequest = {
    allowed_payment_methods,
    plan_ids,
    expires_at,
    failure_url,
    monthly_installments_enabled,
    monthly_installments_options,
    max_failed_retries,
    name,
    on_demand_enabled,
    redirection_time,
    success_url,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
