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
import type { CustomerResponse } from './CustomerResponse';
/**
 *
 * @export
 * @interface CustomersResponseAllOf
 */
export interface CustomersResponseAllOf {
    /**
     *
     * @type {Array<CustomerResponse>}
     * @memberof CustomersResponseAllOf
     */
    data?: Array<CustomerResponse>;
}
/**
 * Check if a given object implements the CustomersResponseAllOf interface.
 */
export declare function instanceOfCustomersResponseAllOf(value: object): boolean;
export declare function CustomersResponseAllOfFromJSON(json: any): CustomersResponseAllOf;
export declare function CustomersResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomersResponseAllOf;
export declare function CustomersResponseAllOfToJSON(value?: CustomersResponseAllOf | null): any;
