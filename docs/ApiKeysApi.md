# ApiKeysApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createApiKey**](#createapikey) | **POST** /api_keys | Create Api Key|
|[**deleteApiKey**](#deleteapikey) | **DELETE** /api_keys/{id} | Delete Api Key|
|[**getApiKey**](#getapikey) | **GET** /api_keys/{id} | Get Api Key|
|[**getApiKeys**](#getapikeys) | **GET** /api_keys | Get list of Api Keys|
|[**updateApiKey**](#updateapikey) | **PUT** /api_keys/{id} | Update Api Key|

# **createApiKey**
> ApiKeyCreateResponse createApiKey(apiKeyRequest)

Create a api key

### Example

```typescript
import {
    ApiKeysApi,
    Configuration,
    ApiKeyRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApiKeysApi(configuration);

let apiKeyRequest: ApiKeyRequest; //requested field for a api keys
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.createApiKey(
    apiKeyRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyRequest** | **ApiKeyRequest**| requested field for a api keys | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ApiKeyCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Content-Type - The format of the response body <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteApiKey**
> DeleteApiKeysResponse deleteApiKey()

Deletes a api key that corresponds to a api key ID

### Example

```typescript
import {
    ApiKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApiKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.deleteApiKey(
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

**DeleteApiKeysResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Content-Type - The format of the response body <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApiKey**
> ApiKeyResponse getApiKey()

Gets a api key that corresponds to a api key ID

### Example

```typescript
import {
    ApiKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApiKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getApiKey(
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

**ApiKeyResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Content-Type - The format of the response body <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getApiKeys**
> GetApiKeysResponse getApiKeys()

Consume the list of api keys you have

### Example

```typescript
import {
    ApiKeysApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApiKeysApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)
let search: string; //General search, e.g. by id, description, prefix (optional) (default to undefined)

const { status, data } = await apiInstance.getApiKeys(
    acceptLanguage,
    xChildCompanyId,
    limit,
    next,
    previous,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|
| **limit** | [**number**] | The numbers of items to return, the maximum value is 250 | (optional) defaults to 20|
| **next** | [**string**] | next page | (optional) defaults to undefined|
| **previous** | [**string**] | previous page | (optional) defaults to undefined|
| **search** | [**string**] | General search, e.g. by id, description, prefix | (optional) defaults to undefined|


### Return type

**GetApiKeysResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Content-Type - The format of the response body <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateApiKey**
> ApiKeyResponse updateApiKey()

Update an existing api key

### Example

```typescript
import {
    ApiKeysApi,
    Configuration,
    ApiKeyUpdateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ApiKeysApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let apiKeyUpdateRequest: ApiKeyUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateApiKey(
    id,
    acceptLanguage,
    apiKeyUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiKeyUpdateRequest** | **ApiKeyUpdateRequest**|  | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**ApiKeyResponse**

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

