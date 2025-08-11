# ShippingsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ordersCreateShipping**](#orderscreateshipping) | **POST** /orders/{id}/shipping_lines | Create Shipping|
|[**ordersDeleteShipping**](#ordersdeleteshipping) | **DELETE** /orders/{id}/shipping_lines/{shipping_id} | Delete Shipping|
|[**ordersUpdateShipping**](#ordersupdateshipping) | **PUT** /orders/{id}/shipping_lines/{shipping_id} | Update Shipping|

# **ordersCreateShipping**
> ShippingOrderResponse ordersCreateShipping(shippingRequest)

Create new shipping for an existing orden

### Example

```typescript
import {
    ShippingsApi,
    Configuration,
    ShippingRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let shippingRequest: ShippingRequest; //requested field for a shipping
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersCreateShipping(
    id,
    shippingRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shippingRequest** | **ShippingRequest**| requested field for a shipping | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ShippingOrderResponse**

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

# **ordersDeleteShipping**
> ShippingOrderResponse ordersDeleteShipping()

Delete shipping

### Example

```typescript
import {
    ShippingsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let shippingId: string; //identifier (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersDeleteShipping(
    id,
    shippingId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **shippingId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ShippingOrderResponse**

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
|**422** | parameter validation error |  -  |
|**428** | Precondition Required |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersUpdateShipping**
> ShippingOrderResponse ordersUpdateShipping(shippingRequest)

Update existing shipping for an existing orden

### Example

```typescript
import {
    ShippingsApi,
    Configuration,
    ShippingRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let shippingId: string; //identifier (default to undefined)
let shippingRequest: ShippingRequest; //requested field for a shipping
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersUpdateShipping(
    id,
    shippingId,
    shippingRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **shippingRequest** | **ShippingRequest**| requested field for a shipping | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **shippingId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ShippingOrderResponse**

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
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

