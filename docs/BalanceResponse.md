# BalanceResponse

balance model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s available | [optional] [default to undefined]
**cashout_retention_amount** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s cashout retention amount | [optional] [default to undefined]
**conekta_retention** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s conekta retention | [optional] [default to undefined]
**gateway** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s gateway | [optional] [default to undefined]
**pending** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s pending | [optional] [default to undefined]
**retained** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s retained | [optional] [default to undefined]
**retention_amount** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s retention amount | [optional] [default to undefined]
**target_collateral_amount** | **object** | The balance\&#39;s target collateral amount | [optional] [default to undefined]
**target_retention_amount** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s target retention amount | [optional] [default to undefined]
**temporarily_retained** | [**Array&lt;BalanceCommonField&gt;**](BalanceCommonField.md) | The balance\&#39;s temporarily retained | [optional] [default to undefined]

## Example

```typescript
import { BalanceResponse } from 'conekta';

const instance: BalanceResponse = {
    available,
    cashout_retention_amount,
    conekta_retention,
    gateway,
    pending,
    retained,
    retention_amount,
    target_collateral_amount,
    target_retention_amount,
    temporarily_retained,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
