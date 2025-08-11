# WebhookResponse

webhooks model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | id of the webhook | [optional] [default to undefined]
**description** | **string** | A name or brief explanation of what this webhook is used for | [optional] [default to undefined]
**livemode** | **boolean** | Indicates if the webhook is in production | [optional] [default to undefined]
**active** | **boolean** | Indicates if the webhook is actived or not | [optional] [default to undefined]
**object** | **string** | Object name, value is \&#39;webhook\&#39; | [optional] [default to undefined]
**status** | **string** | Indicates if the webhook is ready to receive events or failing | [optional] [default to undefined]
**subscribed_events** | **Array&lt;string&gt;** | lists the events that will be sent to the webhook | [optional] [default to undefined]
**url** | **string** | url or endpoint of the webhook | [optional] [default to undefined]

## Example

```typescript
import { WebhookResponse } from 'conekta';

const instance: WebhookResponse = {
    id,
    description,
    livemode,
    active,
    object,
    status,
    subscribed_events,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
