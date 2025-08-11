# WebhooksApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWebhook**](#createwebhook) | **POST** /webhooks | Create Webhook|
|[**deleteWebhook**](#deletewebhook) | **DELETE** /webhooks/{id} | Delete Webhook|
|[**getWebhook**](#getwebhook) | **GET** /webhooks/{id} | Get Webhook|
|[**getWebhooks**](#getwebhooks) | **GET** /webhooks | Get List of Webhooks|
|[**testWebhook**](#testwebhook) | **POST** /webhooks/{id}/test | Test Webhook|
|[**updateWebhook**](#updatewebhook) | **PUT** /webhooks/{id} | Update Webhook|

# **createWebhook**
> WebhookResponse createWebhook(webhookRequest)

What we do at Conekta translates into events. For example, an event of interest to us occurs at the time a payment is successfully processed. At that moment we will be interested in doing several things: Send an email to the buyer, generate an invoice, start the process of shipping the product, etc.

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let webhookRequest: WebhookRequest; //requested field for webhook
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.createWebhook(
    webhookRequest,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRequest** | **WebhookRequest**| requested field for webhook | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**WebhookResponse**

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

# **deleteWebhook**
> WebhookResponse deleteWebhook()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.deleteWebhook(
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

**WebhookResponse**

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

# **getWebhook**
> WebhookResponse getWebhook()


### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhook(
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

**WebhookResponse**

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

# **getWebhooks**
> GetWebhooksResponse getWebhooks()

Consume the list of webhooks you have, each environment supports 10 webhooks (For production and testing)

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)
let url: string; //url for webhook filter (optional) (default to undefined)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)

const { status, data } = await apiInstance.getWebhooks(
    acceptLanguage,
    xChildCompanyId,
    limit,
    search,
    url,
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
| **url** | [**string**] | url for webhook filter | (optional) defaults to undefined|
| **next** | [**string**] | next page | (optional) defaults to undefined|
| **previous** | [**string**] | previous page | (optional) defaults to undefined|


### Return type

**GetWebhooksResponse**

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

# **testWebhook**
> WebhookResponse testWebhook()

Send a webhook.ping event

### Example

```typescript
import {
    WebhooksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.testWebhook(
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

**WebhookResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWebhook**
> WebhookResponse updateWebhook(webhookUpdateRequest)

updates an existing webhook

### Example

```typescript
import {
    WebhooksApi,
    Configuration,
    WebhookUpdateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new WebhooksApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let webhookUpdateRequest: WebhookUpdateRequest; //requested fields in order to update a webhook
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.updateWebhook(
    id,
    webhookUpdateRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookUpdateRequest** | **WebhookUpdateRequest**| requested fields in order to update a webhook | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**WebhookResponse**

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

