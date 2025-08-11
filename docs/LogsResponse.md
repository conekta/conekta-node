# LogsResponse

logs model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_more** | **boolean** | True, if there are more pages. | [optional] [readonly] [default to undefined]
**object** | **string** | The object type | [optional] [readonly] [default to undefined]
**next_page_url** | **string** | URL of the next page. | [optional] [default to undefined]
**previous_page_url** | **string** | Url of the previous page. | [optional] [default to undefined]
**data** | [**Array&lt;LogsResponseData&gt;**](LogsResponseData.md) | set to page results. | [optional] [default to undefined]

## Example

```typescript
import { LogsResponse } from 'conekta';

const instance: LogsResponse = {
    has_more,
    object,
    next_page_url,
    previous_page_url,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
