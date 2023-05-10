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
import { ChargeResponseRefundsDataFromJSON, ChargeResponseRefundsDataToJSON, } from './ChargeResponseRefundsData';
/**
 * Check if a given object implements the ChargeResponseRefundsAllOf interface.
 */
export function instanceOfChargeResponseRefundsAllOf(value) {
    let isInstance = true;
    return isInstance;
}
export function ChargeResponseRefundsAllOfFromJSON(json) {
    return ChargeResponseRefundsAllOfFromJSONTyped(json, false);
}
export function ChargeResponseRefundsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !exists(json, 'data') ? undefined : (json['data'].map(ChargeResponseRefundsDataFromJSON)),
    };
}
export function ChargeResponseRefundsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(ChargeResponseRefundsDataToJSON)),
    };
}
