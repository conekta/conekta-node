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
exports.CustomerResponseShippingContactsToJSON = exports.CustomerResponseShippingContactsFromJSONTyped = exports.CustomerResponseShippingContactsFromJSON = exports.instanceOfCustomerResponseShippingContacts = void 0;
const runtime_1 = require("../runtime");
const CustomerShippingContactsDataResponse_1 = require("./CustomerShippingContactsDataResponse");
/**
 * Check if a given object implements the CustomerResponseShippingContacts interface.
 */
function instanceOfCustomerResponseShippingContacts(value) {
    let isInstance = true;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;
    return isInstance;
}
exports.instanceOfCustomerResponseShippingContacts = instanceOfCustomerResponseShippingContacts;
function CustomerResponseShippingContactsFromJSON(json) {
    return CustomerResponseShippingContactsFromJSONTyped(json, false);
}
exports.CustomerResponseShippingContactsFromJSON = CustomerResponseShippingContactsFromJSON;
function CustomerResponseShippingContactsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': json['object'],
        'hasMore': json['has_more'],
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(CustomerShippingContactsDataResponse_1.CustomerShippingContactsDataResponseFromJSON)),
    };
}
exports.CustomerResponseShippingContactsFromJSONTyped = CustomerResponseShippingContactsFromJSONTyped;
function CustomerResponseShippingContactsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'object': value.object,
        'has_more': value.hasMore,
        'data': value.data === undefined ? undefined : (value.data.map(CustomerShippingContactsDataResponse_1.CustomerShippingContactsDataResponseToJSON)),
    };
}
exports.CustomerResponseShippingContactsToJSON = CustomerResponseShippingContactsToJSON;
