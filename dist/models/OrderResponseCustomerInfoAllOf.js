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
exports.OrderResponseCustomerInfoAllOfToJSON = exports.OrderResponseCustomerInfoAllOfFromJSONTyped = exports.OrderResponseCustomerInfoAllOfFromJSON = exports.instanceOfOrderResponseCustomerInfoAllOf = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the OrderResponseCustomerInfoAllOf interface.
 */
function instanceOfOrderResponseCustomerInfoAllOf(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfOrderResponseCustomerInfoAllOf = instanceOfOrderResponseCustomerInfoAllOf;
function OrderResponseCustomerInfoAllOfFromJSON(json) {
    return OrderResponseCustomerInfoAllOfFromJSONTyped(json, false);
}
exports.OrderResponseCustomerInfoAllOfFromJSON = OrderResponseCustomerInfoAllOfFromJSON;
function OrderResponseCustomerInfoAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
    };
}
exports.OrderResponseCustomerInfoAllOfFromJSONTyped = OrderResponseCustomerInfoAllOfFromJSONTyped;
function OrderResponseCustomerInfoAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'object': value.object,
    };
}
exports.OrderResponseCustomerInfoAllOfToJSON = OrderResponseCustomerInfoAllOfToJSON;
