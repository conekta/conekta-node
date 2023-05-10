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
import { CustomerFiscalEntitiesRequestAddressFromJSON, CustomerFiscalEntitiesRequestAddressToJSON, } from './CustomerFiscalEntitiesRequestAddress';
/**
 * Check if a given object implements the CustomerFiscalEntitiesRequest interface.
 */
export function instanceOfCustomerFiscalEntitiesRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
export function CustomerFiscalEntitiesRequestFromJSON(json) {
    return CustomerFiscalEntitiesRequestFromJSONTyped(json, false);
}
export function CustomerFiscalEntitiesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': CustomerFiscalEntitiesRequestAddressFromJSON(json['address']),
        'taxId': !exists(json, 'tax_id') ? undefined : json['tax_id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'companyName': !exists(json, 'company_name') ? undefined : json['company_name'],
    };
}
export function CustomerFiscalEntitiesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': CustomerFiscalEntitiesRequestAddressToJSON(value.address),
        'tax_id': value.taxId,
        'email': value.email,
        'phone': value.phone,
        'metadata': value.metadata,
        'company_name': value.companyName,
    };
}
