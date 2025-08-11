# Customer

a customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antifraud_info** | [**CustomerAntifraudInfo**](CustomerAntifraudInfo.md) |  | [optional] [default to undefined]
**corporate** | **boolean** | It is a value that allows identifying if the email is corporate or not. | [optional] [default to false]
**custom_reference** | **string** | It is an undefined value. | [optional] [default to undefined]
**date_of_birth** | **string** | It is a parameter that allows to identify the date of birth of the client. | [optional] [default to undefined]
**email** | **string** | An email address is a series of customizable characters followed by a universal Internet symbol, the at symbol (@), the name of a host server, and a web domain ending (.mx, .com, .org, . net, etc). | [default to undefined]
**default_payment_source_id** | **string** | It is a parameter that allows to identify in the response, the Conekta ID of a payment method (payment_id) | [optional] [default to undefined]
**default_shipping_contact_id** | **string** | It is a parameter that allows to identify in the response, the Conekta ID of the shipping address (shipping_contact) | [optional] [default to undefined]
**fiscal_entities** | [**Array&lt;CustomerFiscalEntitiesRequest&gt;**](CustomerFiscalEntitiesRequest.md) |  | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**name** | **string** | Client\&#39;s name | [default to undefined]
**national_id** | **string** | It is a parameter that allows to identify the national identification number of the client. | [optional] [default to undefined]
**payment_sources** | [**Array&lt;CustomerPaymentMethodsRequest&gt;**](CustomerPaymentMethodsRequest.md) | Contains details of the payment methods that the customer has active or has used in Conekta | [optional] [default to undefined]
**phone** | **string** | Is the customer\&#39;s phone number | [default to undefined]
**plan_id** | **string** | Contains the ID of a plan, which could together with name, email and phone create a client directly to a subscription | [optional] [default to undefined]
**shipping_contacts** | [**Array&lt;CustomerShippingContacts&gt;**](CustomerShippingContacts.md) | Contains the detail of the shipping addresses that the client has active or has used in Conekta | [optional] [default to undefined]
**subscription** | [**SubscriptionRequest**](SubscriptionRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Customer } from 'conekta';

const instance: Customer = {
    antifraud_info,
    corporate,
    custom_reference,
    date_of_birth,
    email,
    default_payment_source_id,
    default_shipping_contact_id,
    fiscal_entities,
    metadata,
    name,
    national_id,
    payment_sources,
    phone,
    plan_id,
    shipping_contacts,
    subscription,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
