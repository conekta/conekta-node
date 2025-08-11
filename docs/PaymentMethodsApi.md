# PaymentMethodsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerPaymentMethods**](#createcustomerpaymentmethods) | **POST** /customers/{id}/payment_sources | Create Payment Method|
|[**deleteCustomerPaymentMethods**](#deletecustomerpaymentmethods) | **DELETE** /customers/{id}/payment_sources/{payment_method_id} | Delete Payment Method|
|[**getCustomerPaymentMethods**](#getcustomerpaymentmethods) | **GET** /customers/{id}/payment_sources | Get Payment Methods|
|[**updateCustomerPaymentMethods**](#updatecustomerpaymentmethods) | **PUT** /customers/{id}/payment_sources/{payment_method_id} | Update Payment Method|

# **createCustomerPaymentMethods**
> CreateCustomerPaymentMethodsResponse createCustomerPaymentMethods(createCustomerPaymentMethodsRequest)

Create a payment method for a customer.

### Example

```typescript
import {
    PaymentMethodsApi,
    Configuration,
    CreateCustomerPaymentMethodsRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PaymentMethodsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let createCustomerPaymentMethodsRequest: CreateCustomerPaymentMethodsRequest; //requested field for customer payment methods
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.createCustomerPaymentMethods(
    id,
    createCustomerPaymentMethodsRequest,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCustomerPaymentMethodsRequest** | **CreateCustomerPaymentMethodsRequest**| requested field for customer payment methods | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CreateCustomerPaymentMethodsResponse**

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
|**404** | not found entity |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCustomerPaymentMethods**
> UpdateCustomerPaymentMethodsResponse deleteCustomerPaymentMethods()

Delete an existing payment method

### Example

```typescript
import {
    PaymentMethodsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PaymentMethodsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let paymentMethodId: string; //Identifier of the payment method (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCustomerPaymentMethods(
    id,
    paymentMethodId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **paymentMethodId** | [**string**] | Identifier of the payment method | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**UpdateCustomerPaymentMethodsResponse**

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
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCustomerPaymentMethods**
> GetPaymentMethodResponse getCustomerPaymentMethods()

Get a list of Payment Methods

### Example

```typescript
import {
    PaymentMethodsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PaymentMethodsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)
let search: string; //General order search, e.g. by mail, reference etc. (optional) (default to undefined)

const { status, data } = await apiInstance.getCustomerPaymentMethods(
    id,
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
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|
| **limit** | [**number**] | The numbers of items to return, the maximum value is 250 | (optional) defaults to 20|
| **next** | [**string**] | next page | (optional) defaults to undefined|
| **previous** | [**string**] | previous page | (optional) defaults to undefined|
| **search** | [**string**] | General order search, e.g. by mail, reference etc. | (optional) defaults to undefined|


### Return type

**GetPaymentMethodResponse**

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

# **updateCustomerPaymentMethods**
> UpdateCustomerPaymentMethodsResponse updateCustomerPaymentMethods(updatePaymentMethods)

Gets a payment Method that corresponds to a customer ID.

### Example

```typescript
import {
    PaymentMethodsApi,
    Configuration,
    UpdatePaymentMethods
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new PaymentMethodsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let paymentMethodId: string; //Identifier of the payment method (default to undefined)
let updatePaymentMethods: UpdatePaymentMethods; //requested field for customer payment methods
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.updateCustomerPaymentMethods(
    id,
    paymentMethodId,
    updatePaymentMethods,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updatePaymentMethods** | **UpdatePaymentMethods**| requested field for customer payment methods | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **paymentMethodId** | [**string**] | Identifier of the payment method | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**UpdateCustomerPaymentMethodsResponse**

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
|**404** | not found entity |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

