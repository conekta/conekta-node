# CustomerResponse

customer response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antifraud_info** | [**CustomerAntifraudInfoResponse**](CustomerAntifraudInfoResponse.md) |  | [optional] [default to undefined]
**corporate** | **boolean** | true if the customer is a company | [optional] [default to undefined]
**created_at** | **number** | Creation date of the object | [default to undefined]
**custom_reference** | **string** | Custom reference | [optional] [default to undefined]
**date_of_birth** | **string** | It is a parameter that allows to identify the date of birth of the client. | [optional] [default to undefined]
**default_fiscal_entity_id** | **string** |  | [optional] [default to undefined]
**default_shipping_contact_id** | **string** |  | [optional] [default to undefined]
**default_payment_source_id** | **string** |  | [optional] [default to undefined]
**email** | **string** |  | [optional] [default to undefined]
**fiscal_entities** | [**CustomerFiscalEntitiesResponse**](CustomerFiscalEntitiesResponse.md) |  | [optional] [default to undefined]
**id** | **string** | Customer\&#39;s ID | [default to undefined]
**livemode** | **boolean** | true if the object exists in live mode or the value false if the object exists in test mode | [default to undefined]
**name** | **string** | Customer\&#39;s name | [default to undefined]
**national_id** | **string** | It is a parameter that allows to identify the national identification number of the client. | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**object** | **string** |  | [default to undefined]
**payment_sources** | [**CustomerPaymentMethodsResponse**](CustomerPaymentMethodsResponse.md) |  | [optional] [default to undefined]
**phone** | **string** | Customer\&#39;s phone number | [optional] [default to undefined]
**shipping_contacts** | [**CustomerResponseShippingContacts**](CustomerResponseShippingContacts.md) |  | [optional] [default to undefined]
**subscription** | [**SubscriptionResponse**](SubscriptionResponse.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerResponse } from 'conekta';

const instance: CustomerResponse = {
    antifraud_info,
    corporate,
    created_at,
    custom_reference,
    date_of_birth,
    default_fiscal_entity_id,
    default_shipping_contact_id,
    default_payment_source_id,
    email,
    fiscal_entities,
    id,
    livemode,
    name,
    national_id,
    metadata,
    object,
    payment_sources,
    phone,
    shipping_contacts,
    subscription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
