# WebhookKeyResponse

webhook keys model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier of the webhook key | [optional] [default to undefined]
**active** | **boolean** | Indicates if the webhook key is active | [optional] [default to undefined]
**created_at** | **number** | Unix timestamp in seconds with the creation date of the webhook key | [optional] [default to undefined]
**deactivated_at** | **number** | Unix timestamp in seconds with the deactivation date of the webhook key | [optional] [default to undefined]
**public_key** | **string** | Public key to be used in the webhook | [optional] [default to undefined]
**livemode** | **boolean** | Indicates if the webhook key is in live mode | [optional] [default to undefined]
**object** | **string** | Object name, value is webhook_key | [optional] [default to undefined]

## Example

```typescript
import { WebhookKeyResponse } from 'conekta';

const instance: WebhookKeyResponse = {
    id,
    active,
    created_at,
    deactivated_at,
    public_key,
    livemode,
    object,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
