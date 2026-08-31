# ChargebackEvidenceFileResponse

A file uploaded as evidence for a chargeback

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**created_at** | **string** |  | [optional] [default to undefined]
**evidence_type** | **string** | The evidence type used for a chargeback file upload | [optional] [default to undefined]
**url** | **string** | Presigned download URL for the file. Only present when fetching a single file. | [optional] [default to undefined]

## Example

```typescript
import { ChargebackEvidenceFileResponse } from 'conekta';

const instance: ChargebackEvidenceFileResponse = {
    id,
    name,
    created_at,
    evidence_type,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
