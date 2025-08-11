# TokenResponseCheckout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**can_not_expire** | **boolean** | Indicates if the checkout can not expire. | [optional] [default to undefined]
**emails_sent** | **number** |  | [optional] [default to undefined]
**exclude_card_networks** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**expires_at** | **number** | Date and time when the checkout expires. | [optional] [default to undefined]
**failure_url** | **string** | URL to redirect the customer to if the payment process fails. | [optional] [default to undefined]
**force_3ds_flow** | **boolean** | Indicates if the checkout forces the 3DS flow. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**livemode** | **boolean** |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**monthly_installments_enabled** | **boolean** | Indicates if the checkout allows monthly installments. | [optional] [default to undefined]
**monthly_installments_options** | **Array&lt;number&gt;** | List of monthly installments options. | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**needs_shipping_contact** | **boolean** |  | [optional] [default to undefined]
**object** | **string** | Indicates the type of object, in this case checkout. | [optional] [default to undefined]
**on_demand_enabled** | **boolean** | Indicates if the checkout allows on demand payments. | [optional] [default to undefined]
**paid_payments_count** | **number** | Number of payments that have been paid. | [optional] [default to undefined]
**recurrent** | **boolean** | Indicates if the checkout is recurrent. | [optional] [default to undefined]
**sms_sent** | **number** |  | [optional] [default to undefined]
**starts_at** | **number** | Date and time when the checkout starts. | [optional] [default to undefined]
**status** | **string** | Status of the checkout. | [optional] [default to undefined]
**success_url** | **string** | URL to redirect the customer to after the payment process is completed. | [optional] [default to undefined]
**type** | **string** | Type of checkout. | [optional] [default to undefined]

## Example

```typescript
import { TokenResponseCheckout } from 'conekta';

const instance: TokenResponseCheckout = {
    allowed_payment_methods,
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
    on_demand_enabled,
    paid_payments_count,
    recurrent,
    sms_sent,
    starts_at,
    status,
    success_url,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
