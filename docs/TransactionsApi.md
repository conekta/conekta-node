# TransactionsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getTransaction**](#gettransaction) | **GET** /transactions/{id} | Get transaction|
|[**getTransactions**](#gettransactions) | **GET** /transactions | Get List transactions|

# **getTransaction**
> TransactionResponse getTransaction()

Get the details of a transaction

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let id: string; //Identifier of the resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getTransaction(
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

**TransactionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**404** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getTransactions**
> GetTransactionsResponse getTransactions()

Get transaction details in the form of a list

### Example

```typescript
import {
    TransactionsApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new TransactionsApi(configuration);

let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let limit: number; //The numbers of items to return, the maximum value is 250 (optional) (default to 20)
let next: string; //next page (optional) (default to undefined)
let previous: string; //previous page (optional) (default to undefined)
let id: string; //id of the object to be retrieved (optional) (default to undefined)
let chargeId: string; //id of the charge used for filtering (optional) (default to undefined)
let type: string; //type of the object to be retrieved (optional) (default to undefined)
let currency: string; //currency of the object to be retrieved (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactions(
    acceptLanguage,
    xChildCompanyId,
    limit,
    next,
    previous,
    id,
    chargeId,
    type,
    currency
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
| **id** | [**string**] | id of the object to be retrieved | (optional) defaults to undefined|
| **chargeId** | [**string**] | id of the charge used for filtering | (optional) defaults to undefined|
| **type** | [**string**] | type of the object to be retrieved | (optional) defaults to undefined|
| **currency** | [**string**] | currency of the object to be retrieved | (optional) defaults to undefined|


### Return type

**GetTransactionsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.2.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

