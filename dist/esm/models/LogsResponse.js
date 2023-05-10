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
import { exists } from '../runtime';
import { LogsResponseDataFromJSON, LogsResponseDataToJSON, } from './LogsResponseData';
/**
 * Check if a given object implements the LogsResponse interface.
 */
export function instanceOfLogsResponse(value) {
    let isInstance = true;
    return isInstance;
}
export function LogsResponseFromJSON(json) {
    return LogsResponseFromJSONTyped(json, false);
}
export function LogsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasMore': !exists(json, 'has_more') ? undefined : json['has_more'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'nextPageUrl': !exists(json, 'next_page_url') ? undefined : json['next_page_url'],
        'previousPageUrl': !exists(json, 'previous_page_url') ? undefined : json['previous_page_url'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : json['data'].map(LogsResponseDataFromJSON)),
    };
}
export function LogsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'next_page_url': value.nextPageUrl,
        'previous_page_url': value.previousPageUrl,
        'data': value.data === undefined ? undefined : (value.data === null ? null : value.data.map(LogsResponseDataToJSON)),
    };
}
