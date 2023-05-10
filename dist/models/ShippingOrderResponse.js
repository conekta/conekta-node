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
exports.ShippingOrderResponseToJSON = exports.ShippingOrderResponseFromJSONTyped = exports.ShippingOrderResponseFromJSON = exports.instanceOfShippingOrderResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ShippingOrderResponse interface.
 */
function instanceOfShippingOrderResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    return isInstance;
}
exports.instanceOfShippingOrderResponse = instanceOfShippingOrderResponse;
function ShippingOrderResponseFromJSON(json) {
    return ShippingOrderResponseFromJSONTyped(json, false);
}
exports.ShippingOrderResponseFromJSON = ShippingOrderResponseFromJSON;
function ShippingOrderResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'carrier': !(0, runtime_1.exists)(json, 'carrier') ? undefined : json['carrier'],
        'trackingNumber': !(0, runtime_1.exists)(json, 'tracking_number') ? undefined : json['tracking_number'],
        'method': !(0, runtime_1.exists)(json, 'method') ? undefined : json['method'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : json['metadata'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
        'parentId': !(0, runtime_1.exists)(json, 'parent_id') ? undefined : json['parent_id'],
    };
}
exports.ShippingOrderResponseFromJSONTyped = ShippingOrderResponseFromJSONTyped;
function ShippingOrderResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'carrier': value.carrier,
        'tracking_number': value.trackingNumber,
        'method': value.method,
        'metadata': value.metadata,
        'id': value.id,
        'object': value.object,
        'parent_id': value.parentId,
    };
}
exports.ShippingOrderResponseToJSON = ShippingOrderResponseToJSON;
