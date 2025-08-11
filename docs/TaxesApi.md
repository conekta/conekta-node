# TaxesApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ordersCreateTaxes**](#orderscreatetaxes) | **POST** /orders/{id}/tax_lines | Create Tax|
|[**ordersDeleteTaxes**](#ordersdeletetaxes) | **DELETE** /orders/{id}/tax_lines/{tax_id} | Delete Tax|
|[**ordersUpdateTaxes**](#ordersupdatetaxes) | **PUT** /orders/{id}/tax_lines/{tax_id} | Update Tax|

# **ordersCreateTaxes**
> UpdateOrderTaxResponse ordersCreateTaxes(orderTaxRequest)

Create new taxes for an existing orden

### Example

```typescript
import {
    TaxesApi,
    Configuration,
    OrderTaxRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new TaxesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let orderTaxRequest: OrderTaxRequest; //requested field for a taxes
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersCreateTaxes(
    id,
    orderTaxRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderTaxRequest** | **OrderTaxRequest**| requested field for a taxes | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**UpdateOrderTaxResponse**

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
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersDeleteTaxes**
> UpdateOrderTaxResponse ordersDeleteTaxes()

Delete taxes for an existing orden

### Example

```typescript
import {
    TaxesApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new TaxesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let taxId: string; //identifier (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersDeleteTaxes(
    id,
    taxId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **taxId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**UpdateOrderTaxResponse**

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
|**422** | parameter validation error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersUpdateTaxes**
> UpdateOrderTaxResponse ordersUpdateTaxes(updateOrderTaxRequest)

Update taxes for an existing orden

### Example

```typescript
import {
    TaxesApi,
    Configuration,
    UpdateOrderTaxRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new TaxesApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let taxId: string; //identifier (default to undefined)
let updateOrderTaxRequest: UpdateOrderTaxRequest; //requested field for taxes
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersUpdateTaxes(
    id,
    taxId,
    updateOrderTaxRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateOrderTaxRequest** | **UpdateOrderTaxRequest**| requested field for taxes | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **taxId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**UpdateOrderTaxResponse**

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
|**422** | parameter validation error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

