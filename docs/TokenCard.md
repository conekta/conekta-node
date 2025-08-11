# TokenCard


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvc** | **string** | It is a value that allows identifying the security code of the card. | [default to undefined]
**device_fingerprint** | **string** | It is a value that allows identifying the device fingerprint. | [optional] [default to undefined]
**exp_month** | **string** | It is a value that allows identifying the expiration month of the card. | [default to undefined]
**exp_year** | **string** | It is a value that allows identifying the expiration year of the card. | [default to undefined]
**name** | **string** | It is a value that allows identifying the name of the cardholder. | [default to undefined]
**number** | **string** | It is a value that allows identifying the number of the card. | [default to undefined]

## Example

```typescript
import { TokenCard } from 'conekta';

const instance: TokenCard = {
    cvc,
    device_fingerprint,
    exp_month,
    exp_year,
    name,
    number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
