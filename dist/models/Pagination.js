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
exports.PaginationToJSON = exports.PaginationFromJSONTyped = exports.PaginationFromJSON = exports.instanceOfPagination = void 0;
/**
 * Check if a given object implements the Pagination interface.
 */
function instanceOfPagination(value) {
    let isInstance = true;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;
    return isInstance;
}
exports.instanceOfPagination = instanceOfPagination;
function PaginationFromJSON(json) {
    return PaginationFromJSONTyped(json, false);
}
exports.PaginationFromJSON = PaginationFromJSON;
function PaginationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': json['object'],
        'hasMore': json['has_more'],
    };
}
exports.PaginationFromJSONTyped = PaginationFromJSONTyped;
function PaginationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'object': value.object,
        'has_more': value.hasMore,
    };
}
exports.PaginationToJSON = PaginationToJSON;
