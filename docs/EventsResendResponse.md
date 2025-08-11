# EventsResendResponse

event model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_attempts** | **number** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**last_attempted_at** | **number** |  | [optional] [default to undefined]
**last_http_response_status** | **number** |  | [optional] [default to undefined]
**response_data** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { EventsResendResponse } from 'conekta';

const instance: EventsResendResponse = {
    failed_attempts,
    id,
    last_attempted_at,
    last_http_response_status,
    response_data,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
