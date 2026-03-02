# OrderCheckoutRequest

[Checkout](https://developers.conekta.com/v2.2.0/reference/payment-link) details 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** | Are the payment methods available for this link. For subscriptions, only \&#39;card\&#39; is allowed due to the recurring nature of the payments. | [default to undefined]
**exclude_card_networks** | **Array&lt;string&gt;** | List of card networks to exclude from the checkout. This field is only applicable for card payments. | [optional] [default to undefined]
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
**type** | **string** | Required. This field represents the type of checkout, which determines the user experience during the payment process. \&#39;HostedPayment\&#39; will redirect the customer to a Conekta-hosted page to complete the payment, while \&#39;Integration\&#39; allows the payment process to be handled entirely on your site using Conekta\&#39;s APIs and SDKs. | [optional] [default to undefined]

## Example

```typescript
import { OrderCheckoutRequest } from 'conekta';

const instance: OrderCheckoutRequest = {
    allowed_payment_methods,
    exclude_card_networks,
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
