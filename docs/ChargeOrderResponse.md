# ChargeOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [optional] [default to undefined]
**channel** | [**ChargeResponseChannel**](ChargeResponseChannel.md) |  | [optional] [default to undefined]
**created_at** | **number** |  | [optional] [default to undefined]
**currency** | **string** |  | [optional] [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**device_fingerprint** | **string** |  | [optional] [default to undefined]
**failure_code** | **string** |  | [optional] [default to undefined]
**failure_message** | **string** |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**livemode** | **boolean** |  | [optional] [default to undefined]
**monthly_installments** | **number** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**order_id** | **string** |  | [optional] [default to undefined]
**paid_at** | **number** |  | [optional] [default to undefined]
**payment_method** | [**ChargeOrderResponsePaymentMethod**](ChargeOrderResponsePaymentMethod.md) |  | [optional] [default to undefined]
**reference_id** | **string** | Reference ID of the charge | [optional] [default to undefined]
**refunds** | **Array&lt;object&gt;** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ChargeOrderResponse } from 'conekta';

const instance: ChargeOrderResponse = {
    amount,
    channel,
    created_at,
    currency,
    customer_id,
    description,
    device_fingerprint,
    failure_code,
    failure_message,
    id,
    livemode,
    monthly_installments,
    object,
    order_id,
    paid_at,
    payment_method,
    reference_id,
    refunds,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
