# OrderRequest

a order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charges** | [**Array&lt;ChargeRequest&gt;**](ChargeRequest.md) | List of [charges](https://developers.conekta.com/v2.3.0/reference/orderscreatecharge) that are applied to the order | [optional] [default to undefined]
**checkout** | [**OrderCheckoutRequest**](OrderCheckoutRequest.md) |  | [optional] [default to undefined]
**currency** | **string** | Currency with which the payment will be made. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217) | [default to undefined]
**customer_info** | [**OrderRequestCustomerInfo**](OrderRequestCustomerInfo.md) |  | [default to undefined]
**discount_lines** | [**Array&lt;OrderDiscountLinesRequest&gt;**](OrderDiscountLinesRequest.md) | List of [discounts](https://developers.conekta.com/v2.3.0/reference/orderscreatediscountline) that are applied to the order. | [optional] [default to undefined]
**fiscal_entity** | [**OrderFiscalEntityRequest**](OrderFiscalEntityRequest.md) |  | [optional] [default to undefined]
**line_items** | [**Array&lt;Product&gt;**](Product.md) | List of [products](https://developers.conekta.com/v2.3.0/reference/orderscreateproduct) that are sold in the order. You must have at least one product. | [default to undefined]
**metadata** | [**{ [key: string]: OrderTaxRequestMetadataValue; }**](OrderTaxRequestMetadataValue.md) | Metadata associated with the order. Values must be scalar (string of at most 249 characters, integer, number or boolean); nested objects and arrays are not supported. | [optional] [default to undefined]
**needs_shipping_contact** | **boolean** | Allows you to fill out the shipping information at checkout | [optional] [default to undefined]
**pre_authorize** | **boolean** | Indicates whether the order charges must be preauthorized | [optional] [default to undefined]
**processing_mode** | **string** | Indicates the processing mode for the order, either ecommerce, recurrent or validation. | [optional] [default to undefined]
**return_url** | **string** | Indicates the redirection callback upon completion of the 3DS2 flow. Do not use this parameter if your order has a checkout parameter | [optional] [default to undefined]
**shipping_contact** | [**CustomerShippingContactsRequest**](CustomerShippingContactsRequest.md) |  | [optional] [default to undefined]
**shipping_lines** | [**Array&lt;ShippingRequest&gt;**](ShippingRequest.md) | List of [shipping costs](https://developers.conekta.com/v2.3.0/reference/orderscreateshipping). If the online store offers digital products. | [optional] [default to undefined]
**tax_lines** | [**Array&lt;OrderTaxRequest&gt;**](OrderTaxRequest.md) | List of [taxes](https://developers.conekta.com/v2.3.0/reference/orderscreatetaxes) that are applied to the order. | [optional] [default to undefined]
**three_ds_mode** | **string** | Indicates the 3DS2 mode: \&#39;strict\&#39;, \&#39;not_strict\&#39; or \&#39;smart\&#39;. The value is validated against the allowed set on creation; sending an explicit null is rejected. Omit the field to create the order without requesting 3DS through the API (company-level 3DS applies only to orders paid through Checkout or when antifraud forces 3DS). | [optional] [default to undefined]

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
