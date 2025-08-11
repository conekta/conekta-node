# OrderNextActionResponseRedirectToUrl

contains the following attributes that will guide to continue the flow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | pay.conekta.com/{id} Indicates the url of the Conekta component to authenticate the flow through 3DS2. | [optional] [default to undefined]
**return_url** | **string** | Indicates the url to which the 3DS2 flow returns at the end, when the integration is redirected. | [optional] [default to undefined]

## Example

```typescript
import { OrderNextActionResponseRedirectToUrl } from 'conekta';

const instance: OrderNextActionResponseRedirectToUrl = {
    url,
    return_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
