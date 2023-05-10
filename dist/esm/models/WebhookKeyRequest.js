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
 * Check if a given object implements the WebhookKeyRequest interface.
 */
export function instanceOfWebhookKeyRequest(value) {
    let isInstance = true;
    return isInstance;
}
export function WebhookKeyRequestFromJSON(json) {
    return WebhookKeyRequestFromJSONTyped(json, false);
}
export function WebhookKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}
export function WebhookKeyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
    };
}
