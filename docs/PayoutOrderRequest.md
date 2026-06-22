# PayoutOrderRequest

a payout order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_payout_methods** | **Array&lt;string&gt;** | The payout methods that are allowed for the payout order. | [default to undefined]
**amount** | **number** | The amount of the payout order. | [default to undefined]
**currency** | **string** | The currency in which the payout order is made. | [default to 'MXN']
**customer_info** | [**PayoutOrderRequestCustomerInfo**](PayoutOrderRequestCustomerInfo.md) |  | [default to undefined]
**expires_at** | **number** | The expiration time of the payout order in Unix timestamp. | [default to undefined]
**metadata** | **{ [key: string]: any; }** | The metadata of the payout order. | [optional] [default to undefined]
**payout** | [**Payout**](Payout.md) |  | [default to undefined]
**reason** | **string** | The reason for the payout order. | [default to undefined]

## Example

```typescript
import { PayoutOrderRequest } from 'conekta';

const instance: PayoutOrderRequest = {
    allowed_payout_methods,
    amount,
    currency,
    customer_info,
    expires_at,
    metadata,
    payout,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
