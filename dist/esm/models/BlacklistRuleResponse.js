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
/**
 * Check if a given object implements the BlacklistRuleResponse interface.
 */
export function instanceOfBlacklistRuleResponse(value) {
    let isInstance = true;
    return isInstance;
}
export function BlacklistRuleResponseFromJSON(json) {
    return BlacklistRuleResponseFromJSONTyped(json, false);
}
export function BlacklistRuleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'field': !exists(json, 'field') ? undefined : json['field'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}
export function BlacklistRuleResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'field': value.field,
        'value': value.value,
        'description': value.description,
    };
}
