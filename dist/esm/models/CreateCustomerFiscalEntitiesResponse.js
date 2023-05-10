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
 * Check if a given object implements the CreateCustomerFiscalEntitiesResponse interface.
 */
export function instanceOfCreateCustomerFiscalEntitiesResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "createdAt" in value;
    return isInstance;
}
export function CreateCustomerFiscalEntitiesResponseFromJSON(json) {
    return CreateCustomerFiscalEntitiesResponseFromJSONTyped(json, false);
}
export function CreateCustomerFiscalEntitiesResponseFromJSONTyped(json, ignoreDiscriminator) {
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
        'id': json['id'],
        'object': json['object'],
        'createdAt': json['created_at'],
        'parentId': !exists(json, 'parent_id') ? undefined : json['parent_id'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
    };
}
export function CreateCustomerFiscalEntitiesResponseToJSON(value) {
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
        'id': value.id,
        'object': value.object,
        'created_at': value.createdAt,
        'parent_id': value.parentId,
        'default': value._default,
    };
}
