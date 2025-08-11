# TransferMethodResponse

Method used to make the transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_holder** | **string** | Name of the account holder. | [optional] [default to undefined]
**account_number** | **string** | Account number of the bank account. | [optional] [default to undefined]
**bank** | **string** | Name of the bank. | [optional] [default to undefined]
**created_at** | **number** | Date and time of creation of the transfer. | [optional] [default to undefined]
**id** | **string** | Unique identifier of the transfer. | [optional] [default to undefined]
**object** | **string** | Object name, which is bank_transfer_payout_method. | [optional] [default to undefined]
**payee_id** | **string** | Unique identifier of the payee. | [optional] [default to undefined]
**type** | **string** | Type of the payee. | [optional] [default to undefined]

## Example

```typescript
import { TransferMethodResponse } from 'conekta';

const instance: TransferMethodResponse = {
    account_holder,
    account_number,
    bank,
    created_at,
    id,
    object,
    payee_id,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
