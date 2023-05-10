"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeRequestPaymentMethodToJSON = exports.ChargeRequestPaymentMethodFromJSONTyped = exports.ChargeRequestPaymentMethodFromJSON = exports.instanceOfChargeRequestPaymentMethod = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ChargeRequestPaymentMethod interface.
 */
function instanceOfChargeRequestPaymentMethod(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfChargeRequestPaymentMethod = instanceOfChargeRequestPaymentMethod;
function ChargeRequestPaymentMethodFromJSON(json) {
    return ChargeRequestPaymentMethodFromJSONTyped(json, false);
}
exports.ChargeRequestPaymentMethodFromJSON = ChargeRequestPaymentMethodFromJSON;
function ChargeRequestPaymentMethodFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'expiresAt': !(0, runtime_1.exists)(json, 'expires_at') ? undefined : json['expires_at'],
        'type': json['type'],
        'tokenId': !(0, runtime_1.exists)(json, 'token_id') ? undefined : json['token_id'],
        'paymentSourceId': !(0, runtime_1.exists)(json, 'payment_source_id') ? undefined : json['payment_source_id'],
    };
}
exports.ChargeRequestPaymentMethodFromJSONTyped = ChargeRequestPaymentMethodFromJSONTyped;
function ChargeRequestPaymentMethodToJSON(value) {
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
exports.ChargeRequestPaymentMethodToJSON = ChargeRequestPaymentMethodToJSON;
