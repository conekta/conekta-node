# CreateCompanyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the company. | [optional] [default to undefined]
**type_company** | **string** | The type of company, \&#39;owner\&#39; | [optional] [default to undefined]
**comercial_info** | [**CreateCompanyRequestComercialInfo**](CreateCompanyRequestComercialInfo.md) |  | [optional] [default to undefined]
**fiscal_info** | [**CreateCompanyRequestFiscalInfo**](CreateCompanyRequestFiscalInfo.md) |  | [optional] [default to undefined]
**bank_account_info** | [**CreateCompanyRequestBankAccountInfo**](CreateCompanyRequestBankAccountInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateCompanyRequest } from 'conekta';

const instance: CreateCompanyRequest = {
    name,
    type_company,
    comercial_info,
    fiscal_info,
    bank_account_info,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
