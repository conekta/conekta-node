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
exports.PlanResponseToJSON = exports.PlanResponseFromJSONTyped = exports.PlanResponseFromJSON = exports.instanceOfPlanResponse = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PlanResponse interface.
 */
function instanceOfPlanResponse(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPlanResponse = instanceOfPlanResponse;
function PlanResponseFromJSON(json) {
    return PlanResponseFromJSONTyped(json, false);
}
exports.PlanResponseFromJSON = PlanResponseFromJSON;
function PlanResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : json['created_at'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : json['currency'],
        'expiryCount': !(0, runtime_1.exists)(json, 'expiry_count') ? undefined : json['expiry_count'],
        'frequency': !(0, runtime_1.exists)(json, 'frequency') ? undefined : json['frequency'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'interval': !(0, runtime_1.exists)(json, 'interval') ? undefined : json['interval'],
        'livemode': !(0, runtime_1.exists)(json, 'livemode') ? undefined : json['livemode'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'object': !(0, runtime_1.exists)(json, 'object') ? undefined : json['object'],
        'trialPeriodDays': !(0, runtime_1.exists)(json, 'trial_period_days') ? undefined : json['trial_period_days'],
    };
}
exports.PlanResponseFromJSONTyped = PlanResponseFromJSONTyped;
function PlanResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'created_at': value.createdAt,
        'currency': value.currency,
        'expiry_count': value.expiryCount,
        'frequency': value.frequency,
        'id': value.id,
        'interval': value.interval,
        'livemode': value.livemode,
        'name': value.name,
        'object': value.object,
        'trial_period_days': value.trialPeriodDays,
    };
}
exports.PlanResponseToJSON = PlanResponseToJSON;
