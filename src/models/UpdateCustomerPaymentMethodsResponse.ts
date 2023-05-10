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
    PaymentMethodCardResponse,
    instanceOfPaymentMethodCardResponse,
    PaymentMethodCardResponseFromJSON,
    PaymentMethodCardResponseFromJSONTyped,
    PaymentMethodCardResponseToJSON,
} from './PaymentMethodCardResponse';
import {
    PaymentMethodCashResponse,
    instanceOfPaymentMethodCashResponse,
    PaymentMethodCashResponseFromJSON,
    PaymentMethodCashResponseFromJSONTyped,
    PaymentMethodCashResponseToJSON,
} from './PaymentMethodCashResponse';
import {
    PaymentMethodSpeiRecurrent,
    instanceOfPaymentMethodSpeiRecurrent,
    PaymentMethodSpeiRecurrentFromJSON,
    PaymentMethodSpeiRecurrentFromJSONTyped,
    PaymentMethodSpeiRecurrentToJSON,
} from './PaymentMethodSpeiRecurrent';

/**
 * @type UpdateCustomerPaymentMethodsResponse
 * 
 * @export
 */
export type UpdateCustomerPaymentMethodsResponse = { type: 'card' } & PaymentMethodCardResponse | { type: 'cash' } & PaymentMethodCashResponse | { type: 'oxxo_recurrent' } & PaymentMethodCashResponse | { type: 'spei_recurrent' } & PaymentMethodSpeiRecurrent;

export function UpdateCustomerPaymentMethodsResponseFromJSON(json: any): UpdateCustomerPaymentMethodsResponse {
    return UpdateCustomerPaymentMethodsResponseFromJSONTyped(json, false);
}

export function UpdateCustomerPaymentMethodsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomerPaymentMethodsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'card':
            return {...PaymentMethodCardResponseFromJSONTyped(json, true), type: 'card'};
        case 'cash':
            return {...PaymentMethodCashResponseFromJSONTyped(json, true), type: 'cash'};
        case 'oxxo_recurrent':
            return {...PaymentMethodCashResponseFromJSONTyped(json, true), type: 'oxxo_recurrent'};
        case 'spei_recurrent':
            return {...PaymentMethodSpeiRecurrentFromJSONTyped(json, true), type: 'spei_recurrent'};
        default:
            throw new Error(`No variant of UpdateCustomerPaymentMethodsResponse exists with 'type=${json['type']}'`);
    }
}

export function UpdateCustomerPaymentMethodsResponseToJSON(value?: UpdateCustomerPaymentMethodsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'card':
            return PaymentMethodCardResponseToJSON(value);
        case 'cash':
            return PaymentMethodCashResponseToJSON(value);
        case 'oxxo_recurrent':
            return PaymentMethodCashResponseToJSON(value);
        case 'spei_recurrent':
            return PaymentMethodSpeiRecurrentToJSON(value);
        default:
            throw new Error(`No variant of UpdateCustomerPaymentMethodsResponse exists with 'type=${value['type']}'`);
    }

}

