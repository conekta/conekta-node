# GetOrdersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Array&lt;OrderResponse&gt;**](OrderResponse.md) |  | [default to undefined]
**has_more** | **boolean** | Indicates if there are more pages to be requested | [default to undefined]
**object** | **string** | Object type, in this case is list | [default to undefined]
**next_page_url** | **string** | URL of the next page. | [optional] [default to undefined]
**previous_page_url** | **string** | Url of the previous page. | [optional] [default to undefined]

## Example

```typescript
import { GetOrdersResponse } from 'conekta';

const instance: GetOrdersResponse = {
    data,
    has_more,
    object,
    next_page_url,
    previous_page_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
