# CustomerPortalResponse

Customer portal model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** | Unique slug identifier for the portal | [optional] [default to undefined]
**subscription_id** | **string** | Associated subscription ID | [optional] [default to undefined]
**customer_id** | **string** | Associated customer ID | [optional] [default to undefined]
**livemode** | **boolean** | Whether this is a live or test mode portal | [optional] [default to undefined]
**subscription** | [**SubscriptionDetails**](SubscriptionDetails.md) |  | [optional] [default to undefined]
**customer** | [**CustomerDetails**](CustomerDetails.md) |  | [optional] [default to undefined]
**id** | **string** | Customer portal ID | [optional] [default to undefined]
**company_id** | **string** | Associated company ID | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**created_at** | **number** | Unix timestamp of creation | [optional] [default to undefined]
**updated_at** | **number** | Unix timestamp of last update | [optional] [default to undefined]
**portal_url** | **string** | URL to access the customer portal | [optional] [default to undefined]

## Example

```typescript
import { CustomerPortalResponse } from 'conekta';

const instance: CustomerPortalResponse = {
    slug,
    subscription_id,
    customer_id,
    livemode,
    subscription,
    customer,
    id,
    company_id,
    object,
    created_at,
    updated_at,
    portal_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
