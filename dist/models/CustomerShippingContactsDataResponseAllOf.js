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
exports.CustomerShippingContactsDataResponseAllOfToJSON = exports.CustomerShippingContactsDataResponseAllOfFromJSONTyped = exports.CustomerShippingContactsDataResponseAllOfFromJSON = exports.instanceOfCustomerShippingContactsDataResponseAllOf = void 0;
/**
 * Check if a given object implements the CustomerShippingContactsDataResponseAllOf interface.
 */
function instanceOfCustomerShippingContactsDataResponseAllOf(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "createdAt" in value;
    return isInstance;
}
exports.instanceOfCustomerShippingContactsDataResponseAllOf = instanceOfCustomerShippingContactsDataResponseAllOf;
function CustomerShippingContactsDataResponseAllOfFromJSON(json) {
    return CustomerShippingContactsDataResponseAllOfFromJSONTyped(json, false);
}
exports.CustomerShippingContactsDataResponseAllOfFromJSON = CustomerShippingContactsDataResponseAllOfFromJSON;
function CustomerShippingContactsDataResponseAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['id'],
        'object': json['object'],
        'createdAt': json['created_at'],
    };
}
exports.CustomerShippingContactsDataResponseAllOfFromJSONTyped = CustomerShippingContactsDataResponseAllOfFromJSONTyped;
function CustomerShippingContactsDataResponseAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'object': value.object,
        'created_at': value.createdAt,
    };
}
exports.CustomerShippingContactsDataResponseAllOfToJSON = CustomerShippingContactsDataResponseAllOfToJSON;
