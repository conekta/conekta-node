# EventResponse

event model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **number** |  | [optional] [default to undefined]
**data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**livemode** | **boolean** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**webhook_logs** | [**Array&lt;WebhookLog&gt;**](WebhookLog.md) |  | [optional] [default to undefined]
**webhook_status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EventResponse } from 'conekta';

const instance: EventResponse = {
    created_at,
    data,
    id,
    livemode,
    object,
    type,
    webhook_logs,
    webhook_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
