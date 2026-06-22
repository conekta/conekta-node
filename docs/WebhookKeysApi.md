# WebhookKeysApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhookKey**](#createwebhookkey) | **POST** /webhook_keys | Create Webhook Key|
|[**deleteWebhookKey**](#deletewebhookkey) | **DELETE** /webhook_keys/{id} | Delete Webhook key|
|[**getWebhookKey**](#getwebhookkey) | **GET** /webhook_keys/{id} | Get Webhook Key|
|[**getWebhookKeys**](#getwebhookkeys) | **GET** /webhook_keys | Get List of Webhook Keys|
|[**updateWebhookKey**](#updatewebhookkey) | **PUT** /webhook_keys/{id} | Update Webhook Key|

# **createWebhookKey**
> WebhookKeyCreateResponse createWebhookKey()

Create a webhook key

### Example

```typescript
import {
    WebhookKeysApi,
    Configuration,
    WebhookKeyRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhookKeysApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let webhookKeyRequest: WebhookKeyRequest; // (optional)

const { status, data } = await apiInstance.createWebhookKey(
    acceptLanguage,
    webhookKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookKeyRequest** | **WebhookKeyRequest**|  | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**WebhookKeyCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWebhookKey**
> WebhookKeyDeleteResponse deleteWebhookKey()


### Example

```typescript
import {
    WebhookKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhookKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.deleteWebhookKey(
    id,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**WebhookKeyDeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookKey**
> WebhookKeyResponse getWebhookKey()


### Example

```typescript
import {
    WebhookKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhookKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhookKey(
    id,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**WebhookKeyResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getWebhookKeys**
> GetWebhookKeysResponse getWebhookKeys()

Consume the list of webhook keys you have

### Example

```typescript
import {
    WebhookKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhookKeysApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhookKeys(
    acceptLanguage,
    xChildCompanyId,
    limit,
    search,
    next,
    previous
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|
| **limit** | [**number**] | The numbers of items to return, the maximum value is 250 | (optional) defaults to 20|
| **search** | [**string**] | General order search, e.g. by mail, reference etc. | (optional) defaults to undefined|
| **next** | [**string**] | next page | (optional) defaults to undefined|
| **previous** | [**string**] | previous page | (optional) defaults to undefined|


### Return type

**GetWebhookKeysResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhookKey**
> WebhookKeyResponse updateWebhookKey()

updates an existing webhook key

### Example

```typescript
import {
    WebhookKeysApi,
    Configuration,
    WebhookKeyUpdateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhookKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let webhookKeyUpdateRequest: WebhookKeyUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateWebhookKey(
    id,
    acceptLanguage,
    webhookKeyUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookKeyUpdateRequest** | **WebhookKeyUpdateRequest**|  | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**WebhookKeyResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**404** | not found entity |  -  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

