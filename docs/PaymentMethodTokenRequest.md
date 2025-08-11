# PaymentMethodTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Type of payment method | [default to undefined]
**token_id** | **string** | Token id that will be used to create a \&quot;card\&quot; type payment method. See the (subscriptions)[https://developers.conekta.com/v2.2.0/reference/createsubscription] tutorial for more information on how to tokenize cards. | [default to undefined]

## Example

```typescript
import { PaymentMethodTokenRequest } from 'conekta';

const instance: PaymentMethodTokenRequest = {
    type,
    token_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
