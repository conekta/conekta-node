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
 * @interface PaymentMethodCash
 */
export interface PaymentMethodCash {
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    object: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodCash
     */
    authCode?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    cashierId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    reference?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    barcodeUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof PaymentMethodCash
     */
    expiresAt?: number;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    serviceName?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    store?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodCash
     */
    storeName?: string;
}

/**
 * Check if a given object implements the PaymentMethodCash interface.
 */
export function instanceOfPaymentMethodCash(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "object" in value;

    return isInstance;
}

export function PaymentMethodCashFromJSON(json: any): PaymentMethodCash {
    return PaymentMethodCashFromJSONTyped(json, false);
}

export function PaymentMethodCashFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodCash {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'object': json['object'],
        'authCode': !exists(json, 'auth_code') ? undefined : json['auth_code'],
        'cashierId': !exists(json, 'cashier_id') ? undefined : json['cashier_id'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'barcodeUrl': !exists(json, 'barcode_url') ? undefined : json['barcode_url'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : json['expires_at'],
        'serviceName': !exists(json, 'service_name') ? undefined : json['service_name'],
        'store': !exists(json, 'store') ? undefined : json['store'],
        'storeName': !exists(json, 'store_name') ? undefined : json['store_name'],
    };
}

export function PaymentMethodCashToJSON(value?: PaymentMethodCash | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'object': value.object,
        'auth_code': value.authCode,
        'cashier_id': value.cashierId,
        'reference': value.reference,
        'barcode_url': value.barcodeUrl,
        'expires_at': value.expiresAt,
        'service_name': value.serviceName,
        'store': value.store,
        'store_name': value.storeName,
    };
}

