# SubscriptionsCustomerPortalApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerPortal**](#createcustomerportal) | **POST** /subscriptions/{subscription_id}/customer_portal | Create customer portal|
|[**getCustomerPortal**](#getcustomerportal) | **GET** /subscriptions/{subscription_id}/customer_portal | Get customer portal|

# **createCustomerPortal**
> CustomerPortalResponse createCustomerPortal()

Creates a customer portal for a subscription. If a portal already exists, returns the existing one.

### Example

```typescript
import {
    SubscriptionsCustomerPortalApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new SubscriptionsCustomerPortalApi(configuration);

let subscriptionId: string; //Identifier of the subscription resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.createCustomerPortal(
    subscriptionId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | [**string**] | Identifier of the subscription resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CustomerPortalResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Customer portal created successfully |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**404** | not found entity |  -  |
|**401** | authentication error |  -  |
|**422** | parameter validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerPortal**
> CustomerPortalResponse getCustomerPortal()

Retrieves the customer portal for a subscription

### Example

```typescript
import {
    SubscriptionsCustomerPortalApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new SubscriptionsCustomerPortalApi(configuration);

let subscriptionId: string; //Identifier of the subscription resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerPortal(
    subscriptionId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionId** | [**string**] | Identifier of the subscription resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CustomerPortalResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer portal retrieved successfully |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**404** | not found entity |  -  |
|**401** | authentication error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

