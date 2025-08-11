# RiskRulesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | rule id | [optional] [default to undefined]
**field** | **string** | field to be used for the rule | [optional] [default to undefined]
**created_at** | **string** | rule creation date | [optional] [default to undefined]
**value** | **string** | value to be used for the rule | [optional] [default to undefined]
**is_global** | **boolean** | if the rule is global | [optional] [default to undefined]
**is_test** | **boolean** | if the rule is test | [optional] [default to undefined]
**description** | **string** | description of the rule | [optional] [default to undefined]

## Example

```typescript
import { RiskRulesData } from 'conekta';

const instance: RiskRulesData = {
    id,
    field,
    created_at,
    value,
    is_global,
    is_test,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
