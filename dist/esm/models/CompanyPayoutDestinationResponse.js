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
 * @export
 */
export const CompanyPayoutDestinationResponseObjectEnum = {
    PayoutDestination: 'payout_destination'
};
/**
 * @export
 */
export const CompanyPayoutDestinationResponseTypeEnum = {
    BankAccount: 'bank_account'
};
/**
 * Check if a given object implements the CompanyPayoutDestinationResponse interface.
 */
export function instanceOfCompanyPayoutDestinationResponse(value) {
    let isInstance = true;
    return isInstance;
}
export function CompanyPayoutDestinationResponseFromJSON(json) {
    return CompanyPayoutDestinationResponseFromJSONTyped(json, false);
}
export function CompanyPayoutDestinationResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'object': !exists(json, 'object') ? undefined : json['object'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'accountHolderName': !exists(json, 'account_holder_name') ? undefined : json['account_holder_name'],
        'bank': !exists(json, 'bank') ? undefined : json['bank'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'accountNumber': !exists(json, 'account_number') ? undefined : json['account_number'],
    };
}
export function CompanyPayoutDestinationResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'object': value.object,
        'currency': value.currency,
        'account_holder_name': value.accountHolderName,
        'bank': value.bank,
        'type': value.type,
        'account_number': value.accountNumber,
    };
}
