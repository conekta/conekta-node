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
 * Check if a given object implements the PaymentMethodSpeiRequest interface.
 */
export function instanceOfPaymentMethodSpeiRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function PaymentMethodSpeiRequestFromJSON(json) {
    return PaymentMethodSpeiRequestFromJSONTyped(json, false);
}
export function PaymentMethodSpeiRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : json['expires_at'],
    };
}
export function PaymentMethodSpeiRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'expires_at': value.expiresAt,
    };
}
