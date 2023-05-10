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
exports.WebhookLogToJSON = exports.WebhookLogFromJSONTyped = exports.WebhookLogFromJSON = exports.instanceOfWebhookLog = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WebhookLog interface.
 */
function instanceOfWebhookLog(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWebhookLog = instanceOfWebhookLog;
function WebhookLogFromJSON(json) {
    return WebhookLogFromJSONTyped(json, false);
}
exports.WebhookLogFromJSON = WebhookLogFromJSON;
function WebhookLogFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'failedAttempts': !(0, runtime_1.exists)(json, 'failed_attempts') ? undefined : json['failed_attempts'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'lastAttemptedAt': !(0, runtime_1.exists)(json, 'last_attempted_at') ? undefined : json['last_attempted_at'],
        'lastHttpResponseStatus': !(0, runtime_1.exists)(json, 'last_http_response_status') ? undefined : json['last_http_response_status'],
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
        'responseData': !(0, runtime_1.exists)(json, 'response_data') ? undefined : json['response_data'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
    };
}
exports.WebhookLogFromJSONTyped = WebhookLogFromJSONTyped;
function WebhookLogToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'failed_attempts': value.failedAttempts,
        'id': value.id,
        'last_attempted_at': value.lastAttemptedAt,
        'last_http_response_status': value.lastHttpResponseStatus,
        'object': value.object,
        'response_data': value.responseData,
        'url': value.url,
    };
}
exports.WebhookLogToJSON = WebhookLogToJSON;
