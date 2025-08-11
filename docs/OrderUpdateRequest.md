# OrderUpdateRequest

a order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charges** | [**Array&lt;ChargeRequest&gt;**](ChargeRequest.md) |  | [optional] [default to undefined]
**checkout** | [**CheckoutRequest**](CheckoutRequest.md) |  | [optional] [default to undefined]
**currency** | **string** | Currency with which the payment will be made. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217) | [optional] [default to undefined]
**customer_info** | [**OrderUpdateRequestCustomerInfo**](OrderUpdateRequestCustomerInfo.md) |  | [optional] [default to undefined]
**discount_lines** | [**Array&lt;OrderDiscountLinesRequest&gt;**](OrderDiscountLinesRequest.md) | List of [discounts](https://developers.conekta.com/v2.2.0/reference/orderscreatediscountline) that are applied to the order. You must have at least one discount. | [optional] [default to undefined]
**fiscal_entity** | [**OrderUpdateFiscalEntityRequest**](OrderUpdateFiscalEntityRequest.md) |  | [optional] [default to undefined]
**line_items** | [**Array&lt;Product&gt;**](Product.md) | List of [products](https://developers.conekta.com/v2.2.0/reference/orderscreateproduct) that are sold in the order. You must have at least one product. | [optional] [default to undefined]
**metadata** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**pre_authorize** | **boolean** | Indicates whether the order charges must be preauthorized | [optional] [default to false]
**shipping_contact** | [**CustomerShippingContacts**](CustomerShippingContacts.md) |  | [optional] [default to undefined]
**shipping_lines** | [**Array&lt;ShippingRequest&gt;**](ShippingRequest.md) | List of [shipping costs](https://developers.conekta.com/v2.2.0/reference/orderscreateshipping). If the online store offers digital products. | [optional] [default to undefined]
**tax_lines** | [**Array&lt;OrderTaxRequest&gt;**](OrderTaxRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderUpdateRequest } from 'conekta';

const instance: OrderUpdateRequest = {
    charges,
    checkout,
    currency,
    customer_info,
    discount_lines,
    fiscal_entity,
    line_items,
    metadata,
    pre_authorize,
    shipping_contact,
    shipping_lines,
    tax_lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
