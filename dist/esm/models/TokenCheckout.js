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
/**
 * Check if a given object implements the TokenCheckout interface.
 */
export function instanceOfTokenCheckout(value) {
    let isInstance = true;
    return isInstance;
}
export function TokenCheckoutFromJSON(json) {
    return TokenCheckoutFromJSONTyped(json, false);
}
export function TokenCheckoutFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'returnsControlOn': !exists(json, 'returns_control_on') ? undefined : json['returns_control_on'],
    };
}
export function TokenCheckoutToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'returns_control_on': value.returnsControlOn,
    };
}
