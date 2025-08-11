# ShippingContactsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomerShippingContacts**](#createcustomershippingcontacts) | **POST** /customers/{id}/shipping_contacts | Create a shipping contacts|
|[**deleteCustomerShippingContacts**](#deletecustomershippingcontacts) | **DELETE** /customers/{id}/shipping_contacts/{shipping_contacts_id} | Delete shipping contacts|
|[**updateCustomerShippingContacts**](#updatecustomershippingcontacts) | **PUT** /customers/{id}/shipping_contacts/{shipping_contacts_id} | Update shipping contacts|

# **createCustomerShippingContacts**
> CustomerShippingContactsResponse createCustomerShippingContacts(customerShippingContacts)

Create a shipping contacts for a customer.

### Example

```typescript
import {
    ShippingContactsApi,
    Configuration,
    CustomerShippingContacts
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingContactsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let customerShippingContacts: CustomerShippingContacts; //requested field for customer shippings contacts
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.createCustomerShippingContacts(
    id,
    customerShippingContacts,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerShippingContacts** | **CustomerShippingContacts**| requested field for customer shippings contacts | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CustomerShippingContactsResponse**

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

# **deleteCustomerShippingContacts**
> CustomerShippingContactsResponse deleteCustomerShippingContacts()

Delete shipping contact that corresponds to a customer ID.

### Example

```typescript
import {
    ShippingContactsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingContactsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let shippingContactsId: string; //identifier (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteCustomerShippingContacts(
    id,
    shippingContactsId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **shippingContactsId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CustomerShippingContactsResponse**

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

# **updateCustomerShippingContacts**
> CustomerShippingContactsResponse updateCustomerShippingContacts(customerUpdateShippingContacts)

Update shipping contact that corresponds to a customer ID.

### Example

```typescript
import {
    ShippingContactsApi,
    Configuration,
    CustomerUpdateShippingContacts
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ShippingContactsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let shippingContactsId: string; //identifier (default to undefined)
let customerUpdateShippingContacts: CustomerUpdateShippingContacts; //requested field for customer update shippings contacts
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.updateCustomerShippingContacts(
    id,
    shippingContactsId,
    customerUpdateShippingContacts,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerUpdateShippingContacts** | **CustomerUpdateShippingContacts**| requested field for customer update shippings contacts | |
| **id** | [**string**] | Identifier of the resource | defaults to undefined|
| **shippingContactsId** | [**string**] | identifier | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**CustomerShippingContactsResponse**

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

