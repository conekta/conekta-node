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
 * create new taxes for an existing order
 * @export
 * @interface OrderTaxRequest
 */
export interface OrderTaxRequest {
    /**
     * The amount to be collected for tax in cents
     * @type {number}
     * @memberof OrderTaxRequest
     */
    amount: number;
    /**
     * description or tax's name
     * @type {string}
     * @memberof OrderTaxRequest
     */
    description: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderTaxRequest
     */
    metadata?: { [key: string]: any; };
}

/**
 * Check if a given object implements the OrderTaxRequest interface.
 */
export function instanceOfOrderTaxRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function OrderTaxRequestFromJSON(json: any): OrderTaxRequest {
    return OrderTaxRequestFromJSONTyped(json, false);
}

export function OrderTaxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTaxRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function OrderTaxRequestToJSON(value?: OrderTaxRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'description': value.description,
        'metadata': value.metadata,
    };
}

