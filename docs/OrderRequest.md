# OrderRequest

a order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charges** | [**Array&lt;ChargeRequest&gt;**](ChargeRequest.md) | List of [charges](https://developers.conekta.com/v2.2.0/reference/orderscreatecharge) that are applied to the order | [optional] [default to undefined]
**checkout** | [**CheckoutRequest**](CheckoutRequest.md) |  | [optional] [default to undefined]
**currency** | **string** | Currency with which the payment will be made. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217) | [default to undefined]
**customer_info** | [**OrderRequestCustomerInfo**](OrderRequestCustomerInfo.md) |  | [default to undefined]
**discount_lines** | [**Array&lt;OrderDiscountLinesRequest&gt;**](OrderDiscountLinesRequest.md) | List of [discounts](https://developers.conekta.com/v2.2.0/reference/orderscreatediscountline) that are applied to the order. You must have at least one discount. | [optional] [default to undefined]
**fiscal_entity** | [**OrderFiscalEntityRequest**](OrderFiscalEntityRequest.md) |  | [optional] [default to undefined]
**line_items** | [**Array&lt;Product&gt;**](Product.md) | List of [products](https://developers.conekta.com/v2.2.0/reference/orderscreateproduct) that are sold in the order. You must have at least one product. | [default to undefined]
**metadata** | **{ [key: string]: any; }** | Metadata associated with the order | [optional] [default to undefined]
**needs_shipping_contact** | **boolean** | Allows you to fill out the shipping information at checkout | [optional] [default to undefined]
**pre_authorize** | **boolean** | Indicates whether the order charges must be preauthorized | [optional] [default to false]
**processing_mode** | **string** | Indicates the processing mode for the order, either ecommerce, recurrent or validation. | [optional] [default to undefined]
**return_url** | **string** | Indicates the redirection callback upon completion of the 3DS2 flow. Do not use this parameter if your order has a checkout parameter | [optional] [default to undefined]
**shipping_contact** | [**CustomerShippingContacts**](CustomerShippingContacts.md) |  | [optional] [default to undefined]
**shipping_lines** | [**Array&lt;ShippingRequest&gt;**](ShippingRequest.md) | List of [shipping costs](https://developers.conekta.com/v2.2.0/reference/orderscreateshipping). If the online store offers digital products. | [optional] [default to undefined]
**tax_lines** | [**Array&lt;OrderTaxRequest&gt;**](OrderTaxRequest.md) | List of [taxes](https://developers.conekta.com/v2.2.0/reference/orderscreatetaxes) that are applied to the order. | [optional] [default to undefined]
**three_ds_mode** | **string** | Indicates the 3DS2 mode for the order, either smart or strict. | [optional] [default to undefined]

## Example

```typescript
import { OrderRequest } from 'conekta';

const instance: OrderRequest = {
    charges,
    checkout,
    currency,
    customer_info,
    discount_lines,
    fiscal_entity,
    line_items,
    metadata,
    needs_shipping_contact,
    pre_authorize,
    processing_mode,
    return_url,
    shipping_contact,
    shipping_lines,
    tax_lines,
    three_ds_mode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
