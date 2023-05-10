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
 * Check if a given object implements the OrderTaxRequest interface.
 */
export function instanceOfOrderTaxRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "description" in value;
    return isInstance;
}
export function OrderTaxRequestFromJSON(json) {
    return OrderTaxRequestFromJSONTyped(json, false);
}
export function OrderTaxRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'description': json['description'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}
export function OrderTaxRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'description': value.description,
        'metadata': value.metadata,
    };
}
