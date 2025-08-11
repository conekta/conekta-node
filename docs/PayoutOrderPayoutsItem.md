# PayoutOrderPayoutsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of the payout. | [default to undefined]
**currency** | **string** | The currency in which the payout is made. | [default to undefined]
**expires_at** | **number** | The expiration date of the payout. | [optional] [default to undefined]
**id** | **string** | The id of the payout. | [default to undefined]
**livemode** | **boolean** | The live mode of the payout. | [default to undefined]
**object** | **string** | The object of the payout. | [default to undefined]
**payout_order_id** | **string** | The id of the payout order. | [optional] [default to undefined]
**status** | **string** | The status of the payout. | [optional] [default to undefined]

## Example

```typescript
import { PayoutOrderPayoutsItem } from 'conekta';

const instance: PayoutOrderPayoutsItem = {
    amount,
    currency,
    expires_at,
    id,
    livemode,
    object,
    payout_order_id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
