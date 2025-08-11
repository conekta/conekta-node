# GetCompaniesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **boolean** | Indicates if there are more pages to be requested | [default to undefined]
**object** | **string** | Object type, in this case is list | [default to undefined]
**next_page_url** | **string** | URL of the next page. | [optional] [default to undefined]
**previous_page_url** | **string** | Url of the previous page. | [optional] [default to undefined]
**data** | [**Array&lt;CompanyResponse&gt;**](CompanyResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetCompaniesResponse } from 'conekta';

const instance: GetCompaniesResponse = {
    has_more,
    object,
    next_page_url,
    previous_page_url,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
