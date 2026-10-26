# ApplePaySessionRequest

Data required to validate an Apple Pay merchant session

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**validationURL** | **string** | Validation URL provided by Apple in the &#x60;onvalidatemerchant&#x60; event. Only Apple Pay gateway hosts are accepted: &#x60;https://apple-pay-gateway.apple.com&#x60; and &#x60;https://apple-pay-gateway-cert.apple.com&#x60;.  | [default to undefined]
**domain** | **string** | Fully qualified domain where the Apple Pay button is displayed, sent to Apple as the initiative context. It must be a domain previously registered with Conekta. When omitted, the domain configured for the account is used.  | [optional] [default to undefined]
**source** | **string** | Origin of the Apple Pay integration requesting the session. &#x60;external&#x60; uses the integrator credentials, any other value uses the merchant credentials.  | [optional] [default to SourceEnum_internal]
**companyId** | **string** | Apple Pay merchant identifier to validate the session with. When omitted, the merchant identifier configured for the account is used.  | [optional] [default to undefined]

## Example

```typescript
import { ApplePaySessionRequest } from 'conekta';

const instance: ApplePaySessionRequest = {
    validationURL,
    domain,
    source,
    companyId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
