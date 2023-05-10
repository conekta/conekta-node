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

import {
    PaymentMethodCardRequest,
    instanceOfPaymentMethodCardRequest,
    PaymentMethodCardRequestFromJSON,
    PaymentMethodCardRequestFromJSONTyped,
    PaymentMethodCardRequestToJSON,
} from './PaymentMethodCardRequest';
import {
    PaymentMethodCashRequest,
    instanceOfPaymentMethodCashRequest,
    PaymentMethodCashRequestFromJSON,
    PaymentMethodCashRequestFromJSONTyped,
    PaymentMethodCashRequestToJSON,
} from './PaymentMethodCashRequest';
import {
    PaymentMethodSpeiRequest,
    instanceOfPaymentMethodSpeiRequest,
    PaymentMethodSpeiRequestFromJSON,
    PaymentMethodSpeiRequestFromJSONTyped,
    PaymentMethodSpeiRequestToJSON,
} from './PaymentMethodSpeiRequest';

/**
 * @type CustomerPaymentMethodsRequest
 * 
 * @export
 */
export type CustomerPaymentMethodsRequest = PaymentMethodCardRequest | PaymentMethodCashRequest | PaymentMethodSpeiRequest;

export function CustomerPaymentMethodsRequestFromJSON(json: any): CustomerPaymentMethodsRequest {
    return CustomerPaymentMethodsRequestFromJSONTyped(json, false);
}

export function CustomerPaymentMethodsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPaymentMethodsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...PaymentMethodCardRequestFromJSONTyped(json, true), ...PaymentMethodCashRequestFromJSONTyped(json, true), ...PaymentMethodSpeiRequestFromJSONTyped(json, true) };
}

export function CustomerPaymentMethodsRequestToJSON(value?: CustomerPaymentMethodsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfPaymentMethodCardRequest(value)) {
        return PaymentMethodCardRequestToJSON(value as PaymentMethodCardRequest);
    }
    if (instanceOfPaymentMethodCashRequest(value)) {
        return PaymentMethodCashRequestToJSON(value as PaymentMethodCashRequest);
    }
    if (instanceOfPaymentMethodSpeiRequest(value)) {
        return PaymentMethodSpeiRequestToJSON(value as PaymentMethodSpeiRequest);
    }

    return {};
}

