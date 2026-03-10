# ChargebackResponse

Chargeback object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**note** | **string** |  | [optional] [default to undefined]
**followup_status** | **string** |  | [optional] [default to undefined]
**response_from_client** | **string** |  | [optional] [default to undefined]
**files** | [**Array&lt;ChargebackFileResponse&gt;**](ChargebackFileResponse.md) |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**charge_id** | **string** |  | [optional] [default to undefined]
**created_at** | **number** |  | [optional] [default to undefined]
**evidence_due_by** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargebackResponse } from 'conekta';

const instance: ChargebackResponse = {
    id,
    status,
    reason,
    note,
    followup_status,
    response_from_client,
    files,
    object,
    charge_id,
    created_at,
    evidence_due_by,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
