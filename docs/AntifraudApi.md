# AntifraudApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRuleBlacklist**](#createruleblacklist) | **POST** /antifraud/blacklists | Create blacklisted rule|
|[**createRuleWhitelist**](#createrulewhitelist) | **POST** /antifraud/whitelists | Create whitelisted rule|
|[**deleteRuleBlacklist**](#deleteruleblacklist) | **DELETE** /antifraud/blacklists/{id} | Delete blacklisted rule|
|[**deleteRuleWhitelist**](#deleterulewhitelist) | **DELETE** /antifraud/whitelists/{id} | Delete whitelisted rule|
|[**getRuleBlacklist**](#getruleblacklist) | **GET** /antifraud/blacklists | Get list of blacklisted rules|
|[**getRuleWhitelist**](#getrulewhitelist) | **GET** /antifraud/whitelists | Get a list of whitelisted rules|

# **createRuleBlacklist**
> BlacklistRuleResponse createRuleBlacklist(createRiskRulesData)


### Example

```typescript
import {
    AntifraudApi,
    Configuration,
    CreateRiskRulesData
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let createRiskRulesData: CreateRiskRulesData; //requested field for blacklist rule
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.createRuleBlacklist(
    createRiskRulesData,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRiskRulesData** | **CreateRiskRulesData**| requested field for blacklist rule | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**BlacklistRuleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successfully registered rule |  -  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createRuleWhitelist**
> WhitelistlistRuleResponse createRuleWhitelist()


### Example

```typescript
import {
    AntifraudApi,
    Configuration,
    CreateRiskRulesData
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let createRiskRulesData: CreateRiskRulesData; // (optional)

const { status, data } = await apiInstance.createRuleWhitelist(
    acceptLanguage,
    createRiskRulesData
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRiskRulesData** | **CreateRiskRulesData**|  | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**WhitelistlistRuleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successfully registered rule |  -  |
|**401** | authentication error |  -  |
|**403** | forbidden error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRuleBlacklist**
> DeletedBlacklistRuleResponse deleteRuleBlacklist()


### Example

```typescript
import {
    AntifraudApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteRuleBlacklist(
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

**DeletedBlacklistRuleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successfully deleted rule |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteRuleWhitelist**
> DeletedWhitelistRuleResponse deleteRuleWhitelist()


### Example

```typescript
import {
    AntifraudApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteRuleWhitelist(
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

**DeletedWhitelistRuleResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successfully deleted rule |  -  |
|**401** | authentication error |  -  |
|**403** | forbidden error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRuleBlacklist**
> RiskRulesList getRuleBlacklist()

Return all rules

### Example

```typescript
import {
    AntifraudApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.getRuleBlacklist(
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**RiskRulesList**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All the rules |  -  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getRuleWhitelist**
> RiskRulesList getRuleWhitelist()

Return all rules

### Example

```typescript
import {
    AntifraudApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new AntifraudApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.getRuleWhitelist(
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**RiskRulesList**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | All the rules |  -  |
|**401** | authentication error |  -  |
|**403** | forbidden error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

