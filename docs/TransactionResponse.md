# TransactionResponse

The Transaction object represents the actions or steps of an order. Statuses can be: unprocessed, pending, available, owen, paid_out, voided, capture, capture_reversal, liquidation, liquidation_reversal, payout, payout_reversal, refund, refund_reversal, chargeback, chargeback_reversal, rounding_adjustment, won_chargeback, transferred, and transferred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The amount of the transaction. | [default to undefined]
**charge** | **string** | Randomly assigned unique order identifier associated with the charge. | [default to undefined]
**created_at** | **number** | Date and time of creation of the transaction in Unix format. | [default to undefined]
**currency** | **string** | The currency of the transaction. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217) | [default to undefined]
**fee** | **number** | The amount to be deducted for taxes and commissions. | [default to undefined]
**id** | **string** | Unique identifier of the transaction. | [default to undefined]
**livemode** | **boolean** | Indicates whether the transaction was created in live mode or test mode. | [default to undefined]
**net** | **number** | The net amount after deducting commissions and taxes. | [default to undefined]
**object** | **string** | Object name, which is transaction. | [default to undefined]
**status** | **string** | Code indicating transaction status. | [default to undefined]
**type** | **string** | Transaction Type | [default to undefined]

## Example

```typescript
import { TransactionResponse } from 'conekta';

const instance: TransactionResponse = {
    amount,
    charge,
    created_at,
    currency,
    fee,
    id,
    livemode,
    net,
    object,
    status,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
