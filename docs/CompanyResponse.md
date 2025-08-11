# CompanyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The unique identifier for the company. | [default to undefined]
**name** | **string** | The name of the company. | [default to undefined]
**active** | **boolean** | Indicates if the company is active. | [default to undefined]
**account_status** | **string** | The current status of the company\&#39;s account. | [default to undefined]
**parent_company_id** | **string** | The identifier of the parent company, if any. | [optional] [default to undefined]
**onboarding_status** | **string** | The current status of the company\&#39;s onboarding process. | [default to undefined]
**documents** | [**Array&lt;CompanyResponseDocumentsInner&gt;**](CompanyResponseDocumentsInner.md) | A list of documents related to the company. | [default to undefined]
**created_at** | **number** | Timestamp of when the company was created. | [default to undefined]
**object** | **string** | The type of object, typically \&quot;company\&quot;. | [default to undefined]

## Example

```typescript
import { CompanyResponse } from 'conekta';

const instance: CompanyResponse = {
    id,
    name,
    active,
    account_status,
    parent_company_id,
    onboarding_status,
    documents,
    created_at,
    object,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
