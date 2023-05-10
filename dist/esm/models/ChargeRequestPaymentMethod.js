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
 * Check if a given object implements the ChargeRequestPaymentMethod interface.
 */
export function instanceOfChargeRequestPaymentMethod(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ChargeRequestPaymentMethodFromJSON(json) {
    return ChargeRequestPaymentMethodFromJSONTyped(json, false);
}
export function ChargeRequestPaymentMethodFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'expiresAt': !exists(json, 'expires_at') ? undefined : json['expires_at'],
        'type': json['type'],
        'tokenId': !exists(json, 'token_id') ? undefined : json['token_id'],
        'paymentSourceId': !exists(json, 'payment_source_id') ? undefined : json['payment_source_id'],
    };
}
export function ChargeRequestPaymentMethodToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'expires_at': value.expiresAt,
        'type': value.type,
        'token_id': value.tokenId,
        'payment_source_id': value.paymentSourceId,
    };
}
