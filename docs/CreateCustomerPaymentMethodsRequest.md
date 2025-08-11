# CreateCustomerPaymentMethodsRequest

Contains details of the payment methods that the customer has active or has used in Conekta

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**token_id** | **string** | Token id that will be used to create a \&quot;card\&quot; type payment method. See the (subscriptions)[https://developers.conekta.com/v2.2.0/reference/createsubscription] tutorial for more information on how to tokenize cards. | [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCustomerPaymentMethodsRequest } from 'conekta';

const instance: CreateCustomerPaymentMethodsRequest = {
    type,
    token_id,
    expires_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
