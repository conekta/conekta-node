# WebhookRequest

a webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **string** | Here you must place the URL of your Webhook remember that you must program what you will do with the events received. Also do not forget to handle the HTTPS protocol for greater security. | [default to undefined]
**subscribed_events** | **Array&lt;string&gt;** | events that will be sent to the webhook | [optional] [default to undefined]

## Example

```typescript
import { WebhookRequest } from 'conekta';

const instance: WebhookRequest = {
    url,
    subscribed_events,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
