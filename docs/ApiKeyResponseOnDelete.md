# ApiKeyResponseOnDelete

api keys model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **boolean** | Indicates if the api key is active | [optional] [default to undefined]
**created_at** | **number** | Unix timestamp in seconds of when the api key was created | [optional] [default to undefined]
**description** | **string** | A name or brief explanation of what this api key is used for | [optional] [default to undefined]
**livemode** | **boolean** | Indicates if the api key is in production | [optional] [default to undefined]
**prefix** | **string** | The first few characters of the authentication_token | [optional] [default to undefined]
**id** | **string** | Unique identifier of the api key | [optional] [default to undefined]
**object** | **string** | Object name, value is \&#39;api_key\&#39; | [optional] [default to undefined]
**last_used_at** | **number** | Unix timestamp in seconds with the api key was used | [optional] [default to undefined]
**role** | **string** | Indicates if the api key is private or public | [optional] [default to undefined]

## Example

```typescript
import { ApiKeyResponseOnDelete } from 'conekta';

const instance: ApiKeyResponseOnDelete = {
    active,
    created_at,
    description,
    livemode,
    prefix,
    id,
    object,
    last_used_at,
    role,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
