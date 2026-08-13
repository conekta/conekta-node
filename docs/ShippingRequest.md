# ShippingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Shipping amount in cents | [default to undefined]
**carrier** | **string** | Carrier name for the shipment | [optional] [default to undefined]
**tracking_number** | **string** | Tracking number can be used to track the shipment | [optional] [default to undefined]
**method** | **string** | Method of shipment | [optional] [default to undefined]
**metadata** | [**{ [key: string]: OrderTaxRequestMetadataValue; }**](OrderTaxRequestMetadataValue.md) | Hash where the user can send additional information for each \&#39;shipping\&#39;. Values must be scalar (string of at most 249 characters, integer, number or boolean); nested objects and arrays are not supported. | [optional] [default to undefined]

## Example

```typescript
import { ShippingRequest } from 'conekta';

const instance: ShippingRequest = {
    amount,
    carrier,
    tracking_number,
    method,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
