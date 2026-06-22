# ChargesApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getCharges**](#getcharges) | **GET** /charges | Get A List of Charges|
|[**ordersCreateCharge**](#orderscreatecharge) | **POST** /orders/{id}/charges | Create charge|
|[**ordersCreateCharges**](#orderscreatecharges) | **POST** /orders/{id}/add_charges | Create charges|
|[**updateCharge**](#updatecharge) | **PUT** /charges/{id} | Update a charge|

# **getCharges**
> GetChargesResponse getCharges()


### Example

```typescript
import {
    ChargesApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)

const { status, data } = await apiInstance.getCharges(
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

**GetChargesResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**422** | whitelist validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersCreateCharge**
> ChargeOrderResponse ordersCreateCharge(chargeRequest)

Create charge for an existing orden

### Example

```typescript
import {
    ChargesApi,
    Configuration,
    ChargeRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let chargeRequest: ChargeRequest; //requested field for a charge
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersCreateCharge(
    id,
    chargeRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeRequest** | **ChargeRequest**| requested field for a charge | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ChargeOrderResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**428** | Precondition Required |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersCreateCharges**
> ChargesOrderResponse ordersCreateCharges(chargeRequest)

Create charges for an existing orden

### Example

```typescript
import {
    ChargesApi,
    Configuration,
    ChargeRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let chargeRequest: ChargeRequest; //requested field for a charge
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersCreateCharges(
    id,
    chargeRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeRequest** | **ChargeRequest**| requested field for a charge | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ChargesOrderResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**428** | Precondition Required |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCharge**
> ChargeResponse updateCharge(chargeUpdateRequest)


### Example

```typescript
import {
    ChargesApi,
    Configuration,
    ChargeUpdateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let chargeUpdateRequest: ChargeUpdateRequest; //requested field for update a charge
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.updateCharge(
    id,
    chargeUpdateRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeUpdateRequest** | **ChargeUpdateRequest**| requested field for update a charge | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ChargeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**422** | whitelist validation error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

