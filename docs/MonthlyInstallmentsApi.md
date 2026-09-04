# MonthlyInstallmentsApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**validateMonthlyInstallments**](#validatemonthlyinstallments) | **POST** /monthly_installments/validate | Validate Monthly Installments|

# **validateMonthlyInstallments**
> MonthlyInstallmentsValidateResponse validateMonthlyInstallments(monthlyInstallmentsValidateRequest)

Returns the interest-free monthly installment plans available for a card BIN and an amount, so a checkout can offer only the plans a later charge will accept. Requires monthly installments to be enabled on the company. 

### Example

```typescript
import {
    MonthlyInstallmentsApi,
    Configuration,
    MonthlyInstallmentsValidateRequest
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new MonthlyInstallmentsApi(configuration);

let monthlyInstallmentsValidateRequest: MonthlyInstallmentsValidateRequest; //requested field for monthly installments validate
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')

const { status, data } = await apiInstance.validateMonthlyInstallments(
    monthlyInstallmentsValidateRequest,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **monthlyInstallmentsValidateRequest** | **MonthlyInstallmentsValidateRequest**| requested field for monthly installments validate | |
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|


### Return type

**MonthlyInstallmentsValidateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful operation |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**401** | authentication error |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

