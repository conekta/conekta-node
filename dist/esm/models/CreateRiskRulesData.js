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
/**
 * Check if a given object implements the CreateRiskRulesData interface.
 */
export function instanceOfCreateRiskRulesData(value) {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "field" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function CreateRiskRulesDataFromJSON(json) {
    return CreateRiskRulesDataFromJSONTyped(json, false);
}
export function CreateRiskRulesDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': json['description'],
        'field': json['field'],
        'value': json['value'],
    };
}
export function CreateRiskRulesDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'field': value.field,
        'value': value.value,
    };
}
