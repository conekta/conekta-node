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
import { exists } from '../runtime';
import { CheckoutResponseFromJSON, CheckoutResponseToJSON, } from './CheckoutResponse';
/**
 * Check if a given object implements the CheckoutsResponseAllOf interface.
 */
export function instanceOfCheckoutsResponseAllOf(value) {
    let isInstance = true;
    return isInstance;
}
export function CheckoutsResponseAllOfFromJSON(json) {
    return CheckoutsResponseAllOfFromJSONTyped(json, false);
}
export function CheckoutsResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !exists(json, 'data') ? undefined : (json['data'].map(CheckoutResponseFromJSON)),
    };
}
export function CheckoutsResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(CheckoutResponseToJSON)),
    };
}
