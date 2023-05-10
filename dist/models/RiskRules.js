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
exports.RiskRulesToJSON = exports.RiskRulesFromJSONTyped = exports.RiskRulesFromJSON = exports.instanceOfRiskRules = void 0;
const runtime_1 = require("../runtime");
const RiskRulesData_1 = require("./RiskRulesData");
/**
 * Check if a given object implements the RiskRules interface.
 */
function instanceOfRiskRules(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRiskRules = instanceOfRiskRules;
function RiskRulesFromJSON(json) {
    return RiskRulesFromJSONTyped(json, false);
}
exports.RiskRulesFromJSON = RiskRulesFromJSON;
function RiskRulesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !(0, runtime_1.exists)(json, 'data') ? undefined : (json['data'].map(RiskRulesData_1.RiskRulesDataFromJSON)),
    };
}
exports.RiskRulesFromJSONTyped = RiskRulesFromJSONTyped;
function RiskRulesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(RiskRulesData_1.RiskRulesDataToJSON)),
    };
}
exports.RiskRulesToJSON = RiskRulesToJSON;
