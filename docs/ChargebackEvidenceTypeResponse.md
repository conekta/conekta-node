# ChargebackEvidenceTypeResponse

An evidence type accepted for a chargeback, and the constraints for uploading it

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The evidence type used for a chargeback file upload | [optional] [default to undefined]
**permit_formats** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**required** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargebackEvidenceTypeResponse } from 'conekta';

const instance: ChargebackEvidenceTypeResponse = {
    type,
    permit_formats,
    required,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
