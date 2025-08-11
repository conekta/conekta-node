# ProductOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**antifraud_info** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**brand** | **string** | The brand of the item. | [optional] [default to undefined]
**description** | **string** | Short description of the item | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | It is a key/value hash that can hold custom fields. Maximum 100 elements and allows special characters. | [optional] [default to undefined]
**name** | **string** | The name of the item. It will be displayed in the order. | [default to undefined]
**quantity** | **number** | The quantity of the item in the order. | [default to undefined]
**sku** | **string** | The stock keeping unit for the item. It is used to identify the item in the order. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** | List of tags for the item. It is used to identify the item in the order. | [optional] [default to undefined]
**unit_price** | **number** | The price of the item in cents. | [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**object** | **string** |  | [optional] [default to undefined]
**parent_id** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ProductOrderResponse } from 'conekta';

const instance: ProductOrderResponse = {
    antifraud_info,
    brand,
    description,
    metadata,
    name,
    quantity,
    sku,
    tags,
    unit_price,
    id,
    object,
    parent_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
