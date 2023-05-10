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
exports.CustomerPaymentMethodsResponseToJSON = exports.CustomerPaymentMethodsResponseFromJSONTyped = exports.CustomerPaymentMethodsResponseFromJSON = exports.instanceOfCustomerPaymentMethodsResponse = void 0;
const runtime_1 = require("../runtime");
const CustomerPaymentMethodsData_1 = require("./CustomerPaymentMethodsData");
/**
 * Check if a given object implements the CustomerPaymentMethodsResponse interface.
 */
function instanceOfCustomerPaymentMethodsResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;
    return isInstance;
}
exports.instanceOfCustomerPaymentMethodsResponse = instanceOfCustomerPaymentMethodsResponse;
function CustomerPaymentMethodsResponseFromJSON(json) {
    return CustomerPaymentMethodsResponseFromJSONTyped(json, false);
}
exports.CustomerPaymentMethodsResponseFromJSON = CustomerPaymentMethodsResponseFromJSON;
function CustomerPaymentMethodsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': json['object'],
        'hasMore': json['has_more'],
        'nextPageUrl': !(0, runtime_1.exists)(json, 'next_page_url') ? undefined : json['next_page_url'],
        'previousPageUrl': !(0, runtime_1.exists)(json, 'previous_page_url') ? undefined : json['previous_page_url'],
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(CustomerPaymentMethodsData_1.CustomerPaymentMethodsDataFromJSON)),
    };
}
exports.CustomerPaymentMethodsResponseFromJSONTyped = CustomerPaymentMethodsResponseFromJSONTyped;
function CustomerPaymentMethodsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'object': value.object,
        'has_more': value.hasMore,
        'next_page_url': value.nextPageUrl,
        'previous_page_url': value.previousPageUrl,
        'data': value.data === undefined ? undefined : (value.data.map(CustomerPaymentMethodsData_1.CustomerPaymentMethodsDataToJSON)),
    };
}
exports.CustomerPaymentMethodsResponseToJSON = CustomerPaymentMethodsResponseToJSON;
