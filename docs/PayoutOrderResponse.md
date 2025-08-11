# PayoutOrderResponse

payout order model response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payout_methods** | **Array&lt;string&gt;** | The payout methods that are allowed for the payout order. | [default to undefined]
**amount** | **number** | The amount of the payout order. | [default to undefined]
**created_at** | **number** | The creation date of the payout order. | [default to undefined]
**currency** | **string** | The currency in which the payout order is made. | [default to 'MXN']
**customer_info** | [**PayoutOrderResponseCustomerInfo**](PayoutOrderResponseCustomerInfo.md) |  | [default to undefined]
**expires_at** | **number** | The expiration date of the payout order. | [optional] [default to undefined]
**id** | **string** | The id of the payout order. | [default to undefined]
**livemode** | **boolean** | The live mode of the payout order. | [default to undefined]
**object** | **string** | The object of the payout order. | [default to undefined]
**metadata** | **{ [key: string]: any; }** | The metadata of the payout order. | [optional] [default to undefined]
**payouts** | [**Array&lt;PayoutOrderPayoutsItem&gt;**](PayoutOrderPayoutsItem.md) | The payout information of the payout order. | [default to undefined]
**reason** | **string** | The reason for the payout order. | [default to undefined]
**status** | **string** | The status of the payout order. | [optional] [default to undefined]
**updated_at** | **number** | The update date of the payout order. | [default to undefined]

## Example

```typescript
import { PayoutOrderResponse } from 'conekta';

const instance: PayoutOrderResponse = {
    allowed_payout_methods,
    amount,
    created_at,
    currency,
    customer_info,
    expires_at,
    id,
    livemode,
    object,
    metadata,
    payouts,
    reason,
    status,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
