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
 * @interface PaymentMethodResponse
 */
export interface PaymentMethodResponse {
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    object: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodResponse
     */
    createdAt: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    parentId?: string;
}

/**
 * Check if a given object implements the PaymentMethodResponse interface.
 */
export function instanceOfPaymentMethodResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function PaymentMethodResponseFromJSON(json: any): PaymentMethodResponse {
    return PaymentMethodResponseFromJSONTyped(json, false);
}

export function PaymentMethodResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'object': json['object'],
        'createdAt': json['created_at'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
    };
}

export function PaymentMethodResponseToJSON(value?: PaymentMethodResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'object': value.object,
        'created_at': value.createdAt,
        'parent_id': value.parentId,
    };
}

