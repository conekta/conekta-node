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
exports.GetOrdersResponseToJSON = exports.GetOrdersResponseFromJSONTyped = exports.GetOrdersResponseFromJSON = exports.instanceOfGetOrdersResponse = void 0;
const runtime_1 = require("../runtime");
const OrderResponse_1 = require("./OrderResponse");
/**
 * Check if a given object implements the GetOrdersResponse interface.
 */
function instanceOfGetOrdersResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;
    return isInstance;
}
exports.instanceOfGetOrdersResponse = instanceOfGetOrdersResponse;
function GetOrdersResponseFromJSON(json) {
    return GetOrdersResponseFromJSONTyped(json, false);
}
exports.GetOrdersResponseFromJSON = GetOrdersResponseFromJSON;
function GetOrdersResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': (json['data'].map(OrderResponse_1.OrderResponseFromJSON)),
        'object': json['object'],
        'hasMore': json['has_more'],
        'nextPageUrl': !(0, runtime_1.exists)(json, 'next_page_url') ? undefined : json['next_page_url'],
        'previousPageUrl': !(0, runtime_1.exists)(json, 'previous_page_url') ? undefined : json['previous_page_url'],
    };
}
exports.GetOrdersResponseFromJSONTyped = GetOrdersResponseFromJSONTyped;
function GetOrdersResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': (value.data.map(OrderResponse_1.OrderResponseToJSON)),
        'object': value.object,
        'has_more': value.hasMore,
        'next_page_url': value.nextPageUrl,
        'previous_page_url': value.previousPageUrl,
    };
}
exports.GetOrdersResponseToJSON = GetOrdersResponseToJSON;
