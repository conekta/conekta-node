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
import { CustomerShippingContactsDataResponseFromJSON, CustomerShippingContactsDataResponseToJSON, } from './CustomerShippingContactsDataResponse';
/**
 * Check if a given object implements the CustomerResponseShippingContactsAllOf interface.
 */
export function instanceOfCustomerResponseShippingContactsAllOf(value) {
    let isInstance = true;
    return isInstance;
}
export function CustomerResponseShippingContactsAllOfFromJSON(json) {
    return CustomerResponseShippingContactsAllOfFromJSONTyped(json, false);
}
export function CustomerResponseShippingContactsAllOfFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'data': !exists(json, 'data') ? undefined : (json['data'].map(CustomerShippingContactsDataResponseFromJSON)),
    };
}
export function CustomerResponseShippingContactsAllOfToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'data': value.data === undefined ? undefined : (value.data.map(CustomerShippingContactsDataResponseToJSON)),
    };
}
