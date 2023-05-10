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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface WebhookKeyUpdateRequest
 */
export interface WebhookKeyUpdateRequest {
    /**
     * Indicates if the webhook key is active
     * @type {boolean}
     * @memberof WebhookKeyUpdateRequest
     */
    active?: boolean;
}

/**
 * Check if a given object implements the WebhookKeyUpdateRequest interface.
 */
export function instanceOfWebhookKeyUpdateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookKeyUpdateRequestFromJSON(json: any): WebhookKeyUpdateRequest {
    return WebhookKeyUpdateRequestFromJSONTyped(json, false);
}

export function WebhookKeyUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookKeyUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
    };
}

export function WebhookKeyUpdateRequestToJSON(value?: WebhookKeyUpdateRequest | null): any {
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

