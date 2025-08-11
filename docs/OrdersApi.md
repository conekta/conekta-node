# OrdersApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelOrder**](#cancelorder) | **POST** /orders/{id}/cancel | Cancel Order|
|[**createOrder**](#createorder) | **POST** /orders | Create order|
|[**getOrderById**](#getorderbyid) | **GET** /orders/{id} | Get Order|
|[**getOrders**](#getorders) | **GET** /orders | Get a list of Orders|
|[**orderCancelRefund**](#ordercancelrefund) | **DELETE** /orders/{id}/refunds/{refund_id} | Cancel Refund|
|[**orderRefund**](#orderrefund) | **POST** /orders/{id}/refunds | Refund Order|
|[**ordersCreateCapture**](#orderscreatecapture) | **POST** /orders/{id}/capture | Capture Order|
|[**updateOrder**](#updateorder) | **PUT** /orders/{id} | Update Order|

# **cancelOrder**
> OrderResponse cancelOrder()

Cancel an order that has been previously created.

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.cancelOrder(
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

**OrderResponse**

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
|**402** | payment required error |  -  |
|**404** | not found entity |  -  |
|**428** | Precondition Required |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createOrder**
> OrderResponse createOrder(orderRequest)

Create a new order.

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let orderRequest: OrderRequest; //requested field for order
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.createOrder(
    orderRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRequest** | **OrderRequest**| requested field for order | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**OrderResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**422** | parameter validation error |  -  |
|**401** | authentication error |  -  |
|**402** | payment required error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getOrderById**
> OrderResponse getOrderById()

Info for a specific order

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getOrderById(
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

**OrderResponse**

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

# **getOrders**
> GetOrdersResponse getOrders()

Get order details in the form of a list

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)
let paymentStatus: string; //Filters by order status (optional) (default to undefined)
let lastPaymentInfoStatus: string; //Filters by last payment info status (optional) (default to undefined)
let createdAt: number; //created equal to (optional) (default to undefined)
let createdAtGte: number; //created at greater than or equal to (optional) (default to undefined)
let createdAtLte: number; //created at less than or equal to (optional) (default to undefined)
let updatedAtGte: number; //updated at greater than or equal to (optional) (default to undefined)
let updatedAtLte: number; //updated at less than or equal to (optional) (default to undefined)

const { status, data } = await apiInstance.getOrders(
    acceptLanguage,
    xChildCompanyId,
    limit,
    search,
    next,
    previous,
    paymentStatus,
    lastPaymentInfoStatus,
    createdAt,
    createdAtGte,
    createdAtLte,
    updatedAtGte,
    updatedAtLte
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
| **paymentStatus** | [**string**] | Filters by order status | (optional) defaults to undefined|
| **lastPaymentInfoStatus** | [**string**] | Filters by last payment info status | (optional) defaults to undefined|
| **createdAt** | [**number**] | created equal to | (optional) defaults to undefined|
| **createdAtGte** | [**number**] | created at greater than or equal to | (optional) defaults to undefined|
| **createdAtLte** | [**number**] | created at less than or equal to | (optional) defaults to undefined|
| **updatedAtGte** | [**number**] | updated at greater than or equal to | (optional) defaults to undefined|
| **updatedAtLte** | [**number**] | updated at less than or equal to | (optional) defaults to undefined|


### Return type

**GetOrdersResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  -  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderCancelRefund**
> OrderResponse orderCancelRefund()

A refunded order describes the items, amount, and reason an order is being refunded.

### Example

```typescript
import {
    OrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let refundId: string; //refund identifier (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.orderCancelRefund(
    id,
    refundId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **refundId** | [**string**] | refund identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**OrderResponse**

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
|**402** | payment required error |  -  |
|**404** | not found entity |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **orderRefund**
> OrderResponse orderRefund(orderRefundRequest)

A refunded order describes the items, amount, and reason an order is being refunded.

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderRefundRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let orderRefundRequest: OrderRefundRequest; //requested field for a refund
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.orderRefund(
    id,
    orderRefundRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderRefundRequest** | **OrderRefundRequest**| requested field for a refund | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**OrderResponse**

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
|**402** | payment required error |  -  |
|**404** | not found entity |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ordersCreateCapture**
> OrderResponse ordersCreateCapture()

Processes an order that has been previously authorized.

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderCaptureRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let orderCaptureRequest: OrderCaptureRequest; //requested fields for capture order (optional)

const { status, data } = await apiInstance.ordersCreateCapture(
    id,
    acceptLanguage,
    xChildCompanyId,
    orderCaptureRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderCaptureRequest** | **OrderCaptureRequest**| requested fields for capture order | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**OrderResponse**

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

# **updateOrder**
> OrderResponse updateOrder(orderUpdateRequest)

Update an existing Order.

### Example

```typescript
import {
    OrdersApi,
    Configuration,
    OrderUpdateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new OrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let orderUpdateRequest: OrderUpdateRequest; //requested field for an order
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.updateOrder(
    id,
    orderUpdateRequest,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderUpdateRequest** | **OrderUpdateRequest**| requested field for an order | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**OrderResponse**

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

