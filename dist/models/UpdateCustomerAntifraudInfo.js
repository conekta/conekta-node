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
exports.UpdateCustomerAntifraudInfoToJSON = exports.UpdateCustomerAntifraudInfoFromJSONTyped = exports.UpdateCustomerAntifraudInfoFromJSON = exports.instanceOfUpdateCustomerAntifraudInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UpdateCustomerAntifraudInfo interface.
 */
function instanceOfUpdateCustomerAntifraudInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUpdateCustomerAntifraudInfo = instanceOfUpdateCustomerAntifraudInfo;
function UpdateCustomerAntifraudInfoFromJSON(json) {
    return UpdateCustomerAntifraudInfoFromJSONTyped(json, false);
}
exports.UpdateCustomerAntifraudInfoFromJSON = UpdateCustomerAntifraudInfoFromJSON;
function UpdateCustomerAntifraudInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountCreatedAt': !(0, runtime_1.exists)(json, 'account_created_at') ? undefined : json['account_created_at'],
        'firstPaidAt': !(0, runtime_1.exists)(json, 'first_paid_at') ? undefined : json['first_paid_at'],
    };
}
exports.UpdateCustomerAntifraudInfoFromJSONTyped = UpdateCustomerAntifraudInfoFromJSONTyped;
function UpdateCustomerAntifraudInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'account_created_at': value.accountCreatedAt,
        'first_paid_at': value.firstPaidAt,
    };
}
exports.UpdateCustomerAntifraudInfoToJSON = UpdateCustomerAntifraudInfoToJSON;
