# ProductsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**ordersCreateProduct**](#orderscreateproduct) | **POST** /orders/{id}/line_items | Create Product|
|[**ordersDeleteProduct**](#ordersdeleteproduct) | **DELETE** /orders/{id}/line_items/{line_item_id} | Delete Product|
|[**ordersUpdateProduct**](#ordersupdateproduct) | **PUT** /orders/{id}/line_items/{line_item_id} | Update Product|

# **ordersCreateProduct**
> ProductOrderResponse ordersCreateProduct(product)

Create a new product for an existing order.

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    Product
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let product: Product; //requested field for a product
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersCreateProduct(
    id,
    product,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **product** | **Product**| requested field for a product | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ProductOrderResponse**

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

# **ordersDeleteProduct**
> ProductOrderResponse ordersDeleteProduct()

Delete product for an existing orden

### Example

```typescript
import {
    ProductsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let lineItemId: string; //identifier (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersDeleteProduct(
    id,
    lineItemId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **lineItemId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ProductOrderResponse**

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

# **ordersUpdateProduct**
> ProductOrderResponse ordersUpdateProduct(updateProduct)

Update an existing product for an existing orden

### Example

```typescript
import {
    ProductsApi,
    Configuration,
    UpdateProduct
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ProductsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let lineItemId: string; //identifier (default to undefined)
let updateProduct: UpdateProduct; //requested field for products
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.ordersUpdateProduct(
    id,
    lineItemId,
    updateProduct,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProduct** | **UpdateProduct**| requested field for products | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **lineItemId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ProductOrderResponse**

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

