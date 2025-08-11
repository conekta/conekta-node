# OrderNextActionResponse

contains the following attributes that will guide to continue the flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_to_url** | [**OrderNextActionResponseRedirectToUrl**](OrderNextActionResponseRedirectToUrl.md) |  | [optional] [default to undefined]
**type** | **string** | Indicates the type of action to be taken | [optional] [default to undefined]

## Example

```typescript
import { OrderNextActionResponse } from 'conekta';

const instance: OrderNextActionResponse = {
    redirect_to_url,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
