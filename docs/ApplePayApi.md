# ApplePayApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApplePaySession**](#createapplepaysession) | **POST** /apple_pay/session | Create Apple Pay Session|

# **createApplePaySession**
> ApplePaySessionResponse createApplePaySession(applePaySessionRequest)

Validate an Apple Pay merchant session using Conekta\'s Apple Pay certificates. Call this endpoint from your backend with the `validationURL` received in the `onvalidatemerchant` event and return the response to the browser to complete the merchant validation.  This endpoint does not require authentication, it is meant to be called during the Apple Pay checkout flow. 

### Example

```typescript
import {
    ApplePayApi,
    Configuration,
    ApplePaySessionRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApplePayApi(configuration);

let applePaySessionRequest: ApplePaySessionRequest; //requested fields for creating an Apple Pay session
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.createApplePaySession(
    applePaySessionRequest,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applePaySessionRequest** | **ApplePaySessionRequest**| requested fields for creating an Apple Pay session | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**ApplePaySessionResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | The validated Apple Pay merchant session. |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

