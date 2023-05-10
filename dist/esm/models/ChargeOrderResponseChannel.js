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
 * Check if a given object implements the ChargeOrderResponseChannel interface.
 */
export function instanceOfChargeOrderResponseChannel(value) {
    let isInstance = true;
    return isInstance;
}
export function ChargeOrderResponseChannelFromJSON(json) {
    return ChargeOrderResponseChannelFromJSONTyped(json, false);
}
export function ChargeOrderResponseChannelFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'segment': !exists(json, 'segment') ? undefined : json['segment'],
        'checkoutRequestId': !exists(json, 'checkout_request_id') ? undefined : json['checkout_request_id'],
        'checkoutRequestType': !exists(json, 'checkout_request_type') ? undefined : json['checkout_request_type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}
export function ChargeOrderResponseChannelToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'segment': value.segment,
        'checkout_request_id': value.checkoutRequestId,
        'checkout_request_type': value.checkoutRequestType,
        'id': value.id,
    };
}
