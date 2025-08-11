# PayoutOrdersApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cancelPayoutOrderById**](#cancelpayoutorderbyid) | **PUT** /payout_orders/{id}/cancel | Cancel Payout Order|
|[**createPayoutOrder**](#createpayoutorder) | **POST** /payout_orders | Create payout order|
|[**getPayoutOrderById**](#getpayoutorderbyid) | **GET** /payout_orders/{id} | Get Payout Order|
|[**getPayoutOrders**](#getpayoutorders) | **GET** /payout_orders | Get a list of Payout Orders|

# **cancelPayoutOrderById**
> PayoutOrderResponse cancelPayoutOrderById()

Cancel a payout Order resource that corresponds to a payout order ID.

### Example

```typescript
import {
    PayoutOrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PayoutOrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.cancelPayoutOrderById(
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

**PayoutOrderResponse**

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
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPayoutOrder**
> PayoutOrderResponse createPayoutOrder(payoutOrder)

Create a new payout order.

### Example

```typescript
import {
    PayoutOrdersApi,
    Configuration,
    PayoutOrder
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PayoutOrdersApi(configuration);

let payoutOrder: PayoutOrder; //requested field for payout order
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.createPayoutOrder(
    payoutOrder,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **payoutOrder** | **PayoutOrder**| requested field for payout order | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**PayoutOrderResponse**

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
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayoutOrderById**
> PayoutOrderResponse getPayoutOrderById()

Gets a payout Order resource that corresponds to a payout order ID.

### Example

```typescript
import {
    PayoutOrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PayoutOrdersApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.getPayoutOrderById(
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

**PayoutOrderResponse**

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
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPayoutOrders**
> PayoutOrdersResponse getPayoutOrders()

Get Payout order details in the form of a list

### Example

```typescript
import {
    PayoutOrdersApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PayoutOrdersApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)

const { status, data } = await apiInstance.getPayoutOrders(
    acceptLanguage,
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
| **limit** | [**number**] | The numbers of items to return, the maximum value is 250 | (optional) defaults to 20|
| **search** | [**string**] | General order search, e.g. by mail, reference etc. | (optional) defaults to undefined|
| **next** | [**string**] | next page | (optional) defaults to undefined|
| **previous** | [**string**] | previous page | (optional) defaults to undefined|


### Return type

**PayoutOrdersResponse**

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

