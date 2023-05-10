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
 * @interface UpdatePaymentMethods
 */
export interface UpdatePaymentMethods {
    /**
     * 
     * @type {string}
     * @memberof UpdatePaymentMethods
     */
    name?: string;
}

/**
 * Check if a given object implements the UpdatePaymentMethods interface.
 */
export function instanceOfUpdatePaymentMethods(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdatePaymentMethodsFromJSON(json: any): UpdatePaymentMethods {
    return UpdatePaymentMethodsFromJSONTyped(json, false);
}

export function UpdatePaymentMethodsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePaymentMethods {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function UpdatePaymentMethodsToJSON(value?: UpdatePaymentMethods | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

