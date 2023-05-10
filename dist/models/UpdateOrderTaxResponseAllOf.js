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
exports.UpdateOrderTaxResponseAllOfToJSON = exports.UpdateOrderTaxResponseAllOfFromJSONTyped = exports.UpdateOrderTaxResponseAllOfFromJSON = exports.instanceOfUpdateOrderTaxResponseAllOf = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UpdateOrderTaxResponseAllOf interface.
 */
function instanceOfUpdateOrderTaxResponseAllOf(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUpdateOrderTaxResponseAllOf = instanceOfUpdateOrderTaxResponseAllOf;
function UpdateOrderTaxResponseAllOfFromJSON(json) {
    return UpdateOrderTaxResponseAllOfFromJSONTyped(json, false);
}
exports.UpdateOrderTaxResponseAllOfFromJSON = UpdateOrderTaxResponseAllOfFromJSON;
function UpdateOrderTaxResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
        'parentId': !(0, runtime_1.exists)(json, 'parent_id') ? undefined : json['parent_id'],
    };
}
exports.UpdateOrderTaxResponseAllOfFromJSONTyped = UpdateOrderTaxResponseAllOfFromJSONTyped;
function UpdateOrderTaxResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'object': value.object,
        'parent_id': value.parentId,
    };
}
exports.UpdateOrderTaxResponseAllOfToJSON = UpdateOrderTaxResponseAllOfToJSON;
