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
exports.WebhookKeyCreateResponseToJSON = exports.WebhookKeyCreateResponseFromJSONTyped = exports.WebhookKeyCreateResponseFromJSON = exports.instanceOfWebhookKeyCreateResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the WebhookKeyCreateResponse interface.
 */
function instanceOfWebhookKeyCreateResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfWebhookKeyCreateResponse = instanceOfWebhookKeyCreateResponse;
function WebhookKeyCreateResponseFromJSON(json) {
    return WebhookKeyCreateResponseFromJSONTyped(json, false);
}
exports.WebhookKeyCreateResponseFromJSON = WebhookKeyCreateResponseFromJSON;
function WebhookKeyCreateResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'active': !(0, runtime_1.exists)(json, 'active') ? undefined : json['active'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'livemode': !(0, runtime_1.exists)(json, 'livemode') ? undefined : json['livemode'],
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
        'publicKey': !(0, runtime_1.exists)(json, 'public_key') ? undefined : json['public_key'],
    };
}
exports.WebhookKeyCreateResponseFromJSONTyped = WebhookKeyCreateResponseFromJSONTyped;
function WebhookKeyCreateResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'active': value.active,
        'created_at': value.createdAt,
        'id': value.id,
        'livemode': value.livemode,
        'object': value.object,
        'public_key': value.publicKey,
    };
}
exports.WebhookKeyCreateResponseToJSON = WebhookKeyCreateResponseToJSON;
