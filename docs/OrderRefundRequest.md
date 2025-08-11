# OrderRefundRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount to be refunded in cents | [default to undefined]
**expires_at** | **number** |  | [optional] [default to undefined]
**reason** | **string** | Reason for the refund | [default to undefined]

## Example

```typescript
import { OrderRefundRequest } from 'conekta';

const instance: OrderRefundRequest = {
    amount,
    expires_at,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
