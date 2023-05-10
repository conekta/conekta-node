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
 * @interface ChargeOrderResponseChannel
 */
export interface ChargeOrderResponseChannel {
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponseChannel
     */
    segment?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponseChannel
     */
    checkoutRequestId?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponseChannel
     */
    checkoutRequestType?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponseChannel
     */
    id?: string;
}

/**
 * Check if a given object implements the ChargeOrderResponseChannel interface.
 */
export function instanceOfChargeOrderResponseChannel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChargeOrderResponseChannelFromJSON(json: any): ChargeOrderResponseChannel {
    return ChargeOrderResponseChannelFromJSONTyped(json, false);
}

export function ChargeOrderResponseChannelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeOrderResponseChannel {
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

export function ChargeOrderResponseChannelToJSON(value?: ChargeOrderResponseChannel | null): any {
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

