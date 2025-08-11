# TransfersResponse

A transfer represents the action of sending an amount to a business bank account including the status, amount and method used to make the transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount in cents of the transfer. | [optional] [default to undefined]
**created_at** | **number** | Date and time of creation of the transfer. | [optional] [default to undefined]
**currency** | **string** | The currency of the transfer. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217) | [optional] [default to undefined]
**id** | **string** | Unique identifier of the transfer. | [optional] [default to undefined]
**livemode** | **boolean** | Indicates whether the transfer was created in live mode or test mode. | [optional] [default to undefined]
**method** | [**TransferMethodResponse**](TransferMethodResponse.md) |  | [optional] [default to undefined]
**object** | **string** | Object name, which is transfer. | [optional] [default to undefined]
**statement_description** | **string** | Description of the transfer. | [optional] [default to undefined]
**statement_reference** | **string** | Reference number of the transfer. | [optional] [default to undefined]
**status** | **string** | Code indicating transfer status. | [optional] [default to undefined]

## Example

```typescript
import { TransfersResponse } from 'conekta';

const instance: TransfersResponse = {
    amount,
    created_at,
    currency,
    id,
    livemode,
    method,
    object,
    statement_description,
    statement_reference,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
