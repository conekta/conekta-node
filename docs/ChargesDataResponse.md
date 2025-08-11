# ChargesDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**channel** | [**ChargeResponseChannel**](ChargeResponseChannel.md) |  | [optional] [default to undefined]
**created_at** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**customer_id** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**device_fingerprint** | **string** |  | [optional] [default to undefined]
**failure_code** | **string** |  | [optional] [default to undefined]
**failure_message** | **string** |  | [optional] [default to undefined]
**id** | **string** | Charge ID | [default to undefined]
**livemode** | **boolean** | Whether the charge was made in live mode or not | [default to undefined]
**object** | **string** |  | [default to undefined]
**order_id** | **string** | Order ID | [default to undefined]
**paid_at** | **number** | Payment date | [optional] [default to undefined]
**payment_method** | [**ChargeResponsePaymentMethod**](ChargeResponsePaymentMethod.md) |  | [optional] [default to undefined]
**reference_id** | **string** | Reference ID of the charge | [optional] [default to undefined]
**refunds** | [**ChargeResponseRefunds**](ChargeResponseRefunds.md) |  | [optional] [default to undefined]
**status** | **string** | Charge status | [default to undefined]

## Example

```typescript
import { ChargesDataResponse } from 'conekta';

const instance: ChargesDataResponse = {
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
