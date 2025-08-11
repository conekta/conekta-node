# ApiKeyResponse

api keys model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates if the api key is active | [optional] [default to undefined]
**created_at** | **number** | Unix timestamp in seconds of when the api key was created | [optional] [default to undefined]
**updated_at** | **number** | Unix timestamp in seconds of when the api key was last updated | [optional] [default to undefined]
**deactivated_at** | **number** | Unix timestamp in seconds of when the api key was deleted | [optional] [default to undefined]
**last_used_at** | **number** | Unix timestamp in seconds with the api key was used | [optional] [default to undefined]
**description** | **string** | A name or brief explanation of what this api key is used for | [optional] [default to undefined]
**id** | **string** | Unique identifier of the api key | [optional] [default to undefined]
**livemode** | **boolean** | Indicates if the api key is in production | [optional] [default to undefined]
**object** | **string** | Object name, value is \&#39;api_key\&#39; | [optional] [default to undefined]
**prefix** | **string** | The first few characters of the authentication_token | [optional] [default to undefined]
**role** | **string** | Indicates if the api key is private or public | [optional] [default to undefined]

## Example

```typescript
import { ApiKeyResponse } from 'conekta';

const instance: ApiKeyResponse = {
    active,
    created_at,
    updated_at,
    deactivated_at,
    last_used_at,
    description,
    id,
    livemode,
    object,
    prefix,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
