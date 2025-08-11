# WebhookUpdateRequest

an updated webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Here you must place the URL of your Webhook remember that you must program what you will do with the events received. Also do not forget to handle the HTTPS protocol for greater security. | [optional] [default to undefined]
**subscribed_events** | **Array&lt;string&gt;** | events that will be sent to the webhook | [optional] [default to undefined]
**active** | **boolean** | whether the webhook is active or not | [optional] [default to undefined]

## Example

```typescript
import { WebhookUpdateRequest } from 'conekta';

const instance: WebhookUpdateRequest = {
    url,
    subscribed_events,
    active,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
