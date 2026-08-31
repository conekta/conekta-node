# ChargebacksApi

All URIs are relative to *https://api.conekta.io*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getChargebackEvidenceTypes**](#getchargebackevidencetypes) | **GET** /charges/{charge_id}/chargebacks/{chargeback_id}/evidence-types | Get Chargeback Evidence Types|
|[**getChargebackFile**](#getchargebackfile) | **GET** /charges/{charge_id}/chargebacks/{chargeback_id}/files/{file_id} | Get Chargeback File|
|[**getChargebackFiles**](#getchargebackfiles) | **GET** /charges/{charge_id}/chargebacks/{chargeback_id}/files | Get Chargeback Files|
|[**uploadChargebackFilesBatch**](#uploadchargebackfilesbatch) | **POST** /charges/{charge_id}/chargebacks/{chargeback_id}/files/batch | Upload Chargeback Evidence Files (Batch)|

# **getChargebackEvidenceTypes**
> Array<ChargebackEvidenceTypeResponse> getChargebackEvidenceTypes()

Retrieve the catalog of evidence types accepted for a chargeback, including which are mandatory and their allowed file formats.

### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargeId: string; //Identifier of the charge resource (default to undefined)
let chargebackId: string; //Identifier of the chargeback resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getChargebackEvidenceTypes(
    chargeId,
    chargebackId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**string**] | Identifier of the charge resource | defaults to undefined|
| **chargebackId** | [**string**] | Identifier of the chargeback resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**Array<ChargebackEvidenceTypeResponse>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The list of evidence types accepted for the chargeback. |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**400** | bad request |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChargebackFile**
> ChargebackEvidenceFileResponse getChargebackFile()

Retrieve the metadata and a presigned download URL for a single chargeback evidence file.

### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargeId: string; //Identifier of the charge resource (default to undefined)
let chargebackId: string; //Identifier of the chargeback resource (default to undefined)
let fileId: string; //Identifier of the chargeback evidence file (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getChargebackFile(
    chargeId,
    chargebackId,
    fileId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**string**] | Identifier of the charge resource | defaults to undefined|
| **chargebackId** | [**string**] | Identifier of the chargeback resource | defaults to undefined|
| **fileId** | [**string**] | Identifier of the chargeback evidence file | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**ChargebackEvidenceFileResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | The requested evidence file. |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**400** | bad request |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getChargebackFiles**
> Array<ChargebackEvidenceFileResponse> getChargebackFiles()

Retrieve the list of evidence files uploaded for a chargeback.

### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargeId: string; //Identifier of the charge resource (default to undefined)
let chargebackId: string; //Identifier of the chargeback resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getChargebackFiles(
    chargeId,
    chargebackId,
    acceptLanguage,
    xChildCompanyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**string**] | Identifier of the charge resource | defaults to undefined|
| **chargebackId** | [**string**] | Identifier of the chargeback resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|


### Return type

**Array<ChargebackEvidenceFileResponse>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of evidence files for the chargeback. |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**400** | bad request |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadChargebackFilesBatch**
> ChargebackFilesBatchResponse uploadChargebackFilesBatch()

Uploads multiple evidence files for a chargeback in a single request. Each part of the multipart body must be keyed by an evidence type (see the evidence-types endpoint for the valid values for this chargeback), with exactly one file per evidence type. Limits: at most 10 files per request, at most 2MB per file, and only application/pdf, image/jpeg or image/png content is accepted. The chargeback must be in the `action_required` status, and none of the submitted evidence types may already exist on the chargeback. On success the chargeback transitions to `pending_review`.

### Example

```typescript
import {
    ChargebacksApi,
    Configuration
} from 'conekta';

const configuration = new Configuration();
const apiInstance = new ChargebacksApi(configuration);

let chargeId: string; //Identifier of the charge resource (default to undefined)
let chargebackId: string; //Identifier of the chargeback resource (default to undefined)
let acceptLanguage: 'es' | 'en'; //Use for knowing which language to use (optional) (default to 'es')
let xChildCompanyId: string; //In the case of a holding company, the company id of the child company to which will process the request. (optional) (default to undefined)
let chargeInformation: File; // (optional) (default to undefined)
let contract: File; // (optional) (default to undefined)
let otherEvidence: File; // (optional) (default to undefined)
let receiptOfShipment: File; // (optional) (default to undefined)
let identification: File; // (optional) (default to undefined)
let orderDetails: File; // (optional) (default to undefined)
let termsAndConditions: File; // (optional) (default to undefined)
let cardholderInformation: File; // (optional) (default to undefined)
let proofInvalidateClaim: File; // (optional) (default to undefined)
let internalValidations: File; // (optional) (default to undefined)
let proofOfCancellation: File; // (optional) (default to undefined)
let recurringContract: File; // (optional) (default to undefined)
let proofOfReturn: File; // (optional) (default to undefined)
let exhibit8: File; // (optional) (default to undefined)
let duplicateAnalysis: File; // (optional) (default to undefined)
let fullEvidence: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadChargebackFilesBatch(
    chargeId,
    chargebackId,
    acceptLanguage,
    xChildCompanyId,
    chargeInformation,
    contract,
    otherEvidence,
    receiptOfShipment,
    identification,
    orderDetails,
    termsAndConditions,
    cardholderInformation,
    proofInvalidateClaim,
    internalValidations,
    proofOfCancellation,
    recurringContract,
    proofOfReturn,
    exhibit8,
    duplicateAnalysis,
    fullEvidence
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeId** | [**string**] | Identifier of the charge resource | defaults to undefined|
| **chargebackId** | [**string**] | Identifier of the chargeback resource | defaults to undefined|
| **acceptLanguage** | [**&#39;es&#39; | &#39;en&#39;**]**Array<&#39;es&#39; &#124; &#39;en&#39;>** | Use for knowing which language to use | (optional) defaults to 'es'|
| **xChildCompanyId** | [**string**] | In the case of a holding company, the company id of the child company to which will process the request. | (optional) defaults to undefined|
| **chargeInformation** | [**File**] |  | (optional) defaults to undefined|
| **contract** | [**File**] |  | (optional) defaults to undefined|
| **otherEvidence** | [**File**] |  | (optional) defaults to undefined|
| **receiptOfShipment** | [**File**] |  | (optional) defaults to undefined|
| **identification** | [**File**] |  | (optional) defaults to undefined|
| **orderDetails** | [**File**] |  | (optional) defaults to undefined|
| **termsAndConditions** | [**File**] |  | (optional) defaults to undefined|
| **cardholderInformation** | [**File**] |  | (optional) defaults to undefined|
| **proofInvalidateClaim** | [**File**] |  | (optional) defaults to undefined|
| **internalValidations** | [**File**] |  | (optional) defaults to undefined|
| **proofOfCancellation** | [**File**] |  | (optional) defaults to undefined|
| **recurringContract** | [**File**] |  | (optional) defaults to undefined|
| **proofOfReturn** | [**File**] |  | (optional) defaults to undefined|
| **exhibit8** | [**File**] |  | (optional) defaults to undefined|
| **duplicateAnalysis** | [**File**] |  | (optional) defaults to undefined|
| **fullEvidence** | [**File**] |  | (optional) defaults to undefined|


### Return type

**ChargebackFilesBatchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/vnd.conekta-v2.3.0+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Files uploaded successfully. |  * Date - The date and time that the response was sent <br>  * Content-Type - The format of the response body <br>  * Content-Length - The length of the response body in bytes <br>  * Connection - The type of connection used to transfer the response <br>  * Conekta-Media-Type -  <br>  |
|**400** | bad request |  -  |
|**401** | authentication error |  -  |
|**404** | not found entity |  -  |
|**422** | parameter validation error |  -  |
|**500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

