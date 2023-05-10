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
 * Check if a given object implements the ChargeDataPaymentMethodCashResponse interface.
 */
export function instanceOfChargeDataPaymentMethodCashResponse(value) {
    let isInstance = true;
    return isInstance;
}
export function ChargeDataPaymentMethodCashResponseFromJSON(json) {
    return ChargeDataPaymentMethodCashResponseFromJSONTyped(json, false);
}
export function ChargeDataPaymentMethodCashResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
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
export function ChargeDataPaymentMethodCashResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
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
