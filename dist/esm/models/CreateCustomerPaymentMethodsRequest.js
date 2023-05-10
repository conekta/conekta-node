/* tslint:disable */
/* eslint-disable */
/**
 * Conekta API
 * Conekta sdk
 *
 * The version of the OpenAPI document: 2.1.0
 * Contact: engineering@conekta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { instanceOfPaymentMethodCardRequest, PaymentMethodCardRequestFromJSONTyped, PaymentMethodCardRequestToJSON, } from './PaymentMethodCardRequest';
import { instanceOfPaymentMethodCashRequest, PaymentMethodCashRequestFromJSONTyped, PaymentMethodCashRequestToJSON, } from './PaymentMethodCashRequest';
import { instanceOfPaymentMethodSpeiRequest, PaymentMethodSpeiRequestFromJSONTyped, PaymentMethodSpeiRequestToJSON, } from './PaymentMethodSpeiRequest';
export function CreateCustomerPaymentMethodsRequestFromJSON(json) {
    return CreateCustomerPaymentMethodsRequestFromJSONTyped(json, false);
}
export function CreateCustomerPaymentMethodsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign(Object.assign({}, PaymentMethodCardRequestFromJSONTyped(json, true)), PaymentMethodCashRequestFromJSONTyped(json, true)), PaymentMethodSpeiRequestFromJSONTyped(json, true));
}
export function CreateCustomerPaymentMethodsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    if (instanceOfPaymentMethodCardRequest(value)) {
        return PaymentMethodCardRequestToJSON(value);
    }
    if (instanceOfPaymentMethodCashRequest(value)) {
        return PaymentMethodCashRequestToJSON(value);
    }
    if (instanceOfPaymentMethodSpeiRequest(value)) {
        return PaymentMethodSpeiRequestToJSON(value);
    }
    return {};
}
