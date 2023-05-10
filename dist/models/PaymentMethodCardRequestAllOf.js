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
exports.PaymentMethodCardRequestAllOfToJSON = exports.PaymentMethodCardRequestAllOfFromJSONTyped = exports.PaymentMethodCardRequestAllOfFromJSON = exports.instanceOfPaymentMethodCardRequestAllOf = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PaymentMethodCardRequestAllOf interface.
 */
function instanceOfPaymentMethodCardRequestAllOf(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPaymentMethodCardRequestAllOf = instanceOfPaymentMethodCardRequestAllOf;
function PaymentMethodCardRequestAllOfFromJSON(json) {
    return PaymentMethodCardRequestAllOfFromJSONTyped(json, false);
}
exports.PaymentMethodCardRequestAllOfFromJSON = PaymentMethodCardRequestAllOfFromJSON;
function PaymentMethodCardRequestAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'tokenId': !(0, runtime_1.exists)(json, 'token_id') ? undefined : json['token_id'],
    };
}
exports.PaymentMethodCardRequestAllOfFromJSONTyped = PaymentMethodCardRequestAllOfFromJSONTyped;
function PaymentMethodCardRequestAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'token_id': value.tokenId,
    };
}
exports.PaymentMethodCardRequestAllOfToJSON = PaymentMethodCardRequestAllOfToJSON;
