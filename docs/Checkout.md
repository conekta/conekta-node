# Checkout

It is a sub-resource of the Order model that can be stipulated in order to configure its corresponding checkout

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payment_methods** | **Array&lt;string&gt;** | Those are the payment methods that will be available for the link | [default to undefined]
**exclude_card_networks** | **Array&lt;string&gt;** | List of card networks to exclude from the checkout. This field is only applicable for card payments. | [optional] [default to undefined]
**expires_at** | **number** | It is the time when the link will expire.  It is expressed in seconds since the Unix epoch. The valid range is from 10 minutes to 365 days from the creation date.  | [default to undefined]
**monthly_installments_enabled** | **boolean** | This flag allows you to specify if months without interest will be active. | [optional] [default to undefined]
**monthly_installments_options** | **Array&lt;number&gt;** | This field allows you to specify the number of months without interest. | [optional] [default to undefined]
**three_ds_mode** | **string** | Indicates the 3DS2 mode for the order, either smart or strict. This property is only applicable when 3DS is enabled. When 3DS is disabled, this field should be null. | [optional] [default to undefined]
**name** | **string** | Reason for charge | [default to undefined]
**needs_shipping_contact** | **boolean** | This flag allows you to fill in the shipping information at checkout. | [optional] [default to undefined]
**on_demand_enabled** | **boolean** | This flag allows you to specify if the link will be on demand. | [optional] [default to undefined]
**plan_ids** | **Array&lt;string&gt;** | It is a list of plan IDs that will be associated with the order. | [optional] [default to undefined]
**order_template** | [**CheckoutOrderTemplate**](CheckoutOrderTemplate.md) |  | [default to undefined]
**payments_limit_count** | **number** | It is the number of payments that can be made through the link. | [optional] [default to undefined]
**success_url** | **string** | The URL to redirect to after a successful payment. | [optional] [default to undefined]
**recurrent** | **boolean** | false: single use. true: multiple payments | [default to undefined]
**type** | **string** | It is the type of link that will be created. It must be a valid type. | [default to undefined]

## Example

```typescript
import { Checkout } from 'conekta';

const instance: Checkout = {
    allowed_payment_methods,
    exclude_card_networks,
    expires_at,
    monthly_installments_enabled,
    monthly_installments_options,
    three_ds_mode,
    name,
    needs_shipping_contact,
    on_demand_enabled,
    plan_ids,
    order_template,
    payments_limit_count,
    success_url,
    recurrent,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
