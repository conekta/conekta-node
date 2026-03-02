# CheckoutOrderTemplate

It maintains the attributes with which the order will be created when receiving a new payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | It is the currency in which the order will be created. It must be a valid ISO 4217 currency code. | [default to undefined]
**customer_info** | [**CheckoutOrderTemplateCustomerInfo**](CheckoutOrderTemplateCustomerInfo.md) |  | [optional] [default to undefined]
**line_items** | [**Array&lt;Product&gt;**](Product.md) | They are the products to buy. Each contains the \&quot;unit price\&quot; and \&quot;quantity\&quot; parameters that are used to calculate the total amount of the order. | [default to undefined]
**metadata** | **{ [key: string]: any; }** | It is a set of key-value pairs that you can attach to the order. It can be used to store additional information about the order in a structured format. | [optional] [default to undefined]
**tax_lines** | [**Array&lt;OrderTaxRequest&gt;**](OrderTaxRequest.md) | List of [taxes](https://developers.conekta.com/v2.2.0/reference/orderscreatetaxes) that are applied to the order. | [optional] [default to undefined]
**discount_lines** | [**Array&lt;OrderDiscountLinesRequest&gt;**](OrderDiscountLinesRequest.md) | List of [discounts](https://developers.conekta.com/v2.2.0/reference/orderscreatediscountline) that are applied to the order. | [optional] [default to undefined]

## Example

```typescript
import { CheckoutOrderTemplate } from 'conekta';

const instance: CheckoutOrderTemplate = {
    currency,
    customer_info,
    line_items,
    metadata,
    tax_lines,
    discount_lines,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
