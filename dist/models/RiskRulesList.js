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
exports.RiskRulesListToJSON = exports.RiskRulesListFromJSONTyped = exports.RiskRulesListFromJSON = exports.instanceOfRiskRulesList = void 0;
const runtime_1 = require("../runtime");
const RiskRulesData_1 = require("./RiskRulesData");
/**
 * Check if a given object implements the RiskRulesList interface.
 */
function instanceOfRiskRulesList(value) {
    let isInstance = true;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;
    return isInstance;
}
exports.instanceOfRiskRulesList = instanceOfRiskRulesList;
function RiskRulesListFromJSON(json) {
    return RiskRulesListFromJSONTyped(json, false);
}
exports.RiskRulesListFromJSON = RiskRulesListFromJSON;
function RiskRulesListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': json['object'],
        'hasMore': json['has_more'],
        'nextPageUrl': !(0, runtime_1.exists)(json, 'next_page_url') ? undefined : json['next_page_url'],
        'previousPageUrl': !(0, runtime_1.exists)(json, 'previous_page_url') ? undefined : json['previous_page_url'],
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(RiskRulesData_1.RiskRulesDataFromJSON)),
    };
}
exports.RiskRulesListFromJSONTyped = RiskRulesListFromJSONTyped;
function RiskRulesListToJSON(value) {
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
        'data': value.data === undefined ? undefined : (value.data.map(RiskRulesData_1.RiskRulesDataToJSON)),
    };
}
exports.RiskRulesListToJSON = RiskRulesListToJSON;
