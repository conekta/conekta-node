# OrderResponse

order response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | The total amount to be collected in cents | [optional] [default to undefined]
**amount_refunded** | **number** | The total amount refunded in cents | [optional] [default to undefined]
**channel** | [**OrderChannelResponse**](OrderChannelResponse.md) |  | [optional] [default to undefined]
**charges** | [**OrderChargesResponse**](OrderChargesResponse.md) |  | [optional] [default to undefined]
**checkout** | [**OrderResponseCheckout**](OrderResponseCheckout.md) |  | [optional] [default to undefined]
**created_at** | **number** | The time at which the object was created in seconds since the Unix epoch | [optional] [default to undefined]
**currency** | **string** | The three-letter ISO 4217 currency code. The currency of the order. | [optional] [default to undefined]
**customer_info** | [**OrderResponseCustomerInfo**](OrderResponseCustomerInfo.md) |  | [optional] [default to undefined]
**discount_lines** | [**OrderDiscountLinesResponse**](OrderDiscountLinesResponse.md) |  | [optional] [default to undefined]
**fiscal_entity** | [**OrderFiscalEntityResponse**](OrderFiscalEntityResponse.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**is_refundable** | **boolean** |  | [optional] [default to undefined]
**line_items** | [**OrderResponseProducts**](OrderResponseProducts.md) |  | [optional] [default to undefined]
**livemode** | **boolean** | Whether the object exists in live mode or test mode | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. | [optional] [default to undefined]
**next_action** | [**OrderNextActionResponse**](OrderNextActionResponse.md) |  | [optional] [default to undefined]
**object** | **string** | String representing the object’s type. Objects of the same type share the same value. | [optional] [default to undefined]
**payment_status** | **string** | The payment status of the order. | [optional] [default to undefined]
**processing_mode** | **string** | Indicates the processing mode for the order, either ecommerce, recurrent or validation. | [optional] [default to undefined]
**shipping_contact** | [**OrderResponseShippingContact**](OrderResponseShippingContact.md) |  | [optional] [default to undefined]
**updated_at** | **number** | The time at which the object was last updated in seconds since the Unix epoch | [optional] [default to undefined]

## Example

```typescript
import { OrderResponse } from 'conekta';

const instance: OrderResponse = {
    amount,
    amount_refunded,
    channel,
    charges,
    checkout,
    created_at,
    currency,
    customer_info,
    discount_lines,
    fiscal_entity,
    id,
    is_refundable,
    line_items,
    livemode,
    metadata,
    next_action,
    object,
    payment_status,
    processing_mode,
    shipping_contact,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
