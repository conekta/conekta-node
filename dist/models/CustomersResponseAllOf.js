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
exports.CustomersResponseAllOfToJSON = exports.CustomersResponseAllOfFromJSONTyped = exports.CustomersResponseAllOfFromJSON = exports.instanceOfCustomersResponseAllOf = void 0;
const runtime_1 = require("../runtime");
const CustomerResponse_1 = require("./CustomerResponse");
/**
 * Check if a given object implements the CustomersResponseAllOf interface.
 */
function instanceOfCustomersResponseAllOf(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomersResponseAllOf = instanceOfCustomersResponseAllOf;
function CustomersResponseAllOfFromJSON(json) {
    return CustomersResponseAllOfFromJSONTyped(json, false);
}
exports.CustomersResponseAllOfFromJSON = CustomersResponseAllOfFromJSON;
function CustomersResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(CustomerResponse_1.CustomerResponseFromJSON)),
    };
}
exports.CustomersResponseAllOfFromJSONTyped = CustomersResponseAllOfFromJSONTyped;
function CustomersResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(CustomerResponse_1.CustomerResponseToJSON)),
    };
}
exports.CustomersResponseAllOfToJSON = CustomersResponseAllOfToJSON;
