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
import type { CustomerShippingContactsResponseAddress } from './CustomerShippingContactsResponseAddress';
/**
 * Contains the detail of the shipping addresses that the client has active or has used in Conekta
 * @export
 * @interface CustomerShippingContactsResponse
 */
export interface CustomerShippingContactsResponse {
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    phone?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    receiver?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    betweenStreets?: string | null;
    /**
     *
     * @type {CustomerShippingContactsResponseAddress}
     * @memberof CustomerShippingContactsResponse
     */
    address?: CustomerShippingContactsResponseAddress;
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    parentId?: string;
    /**
     *
     * @type {boolean}
     * @memberof CustomerShippingContactsResponse
     */
    _default?: boolean;
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    id?: string;
    /**
     *
     * @type {number}
     * @memberof CustomerShippingContactsResponse
     */
    createdAt?: number;
    /**
     *
     * @type {string}
     * @memberof CustomerShippingContactsResponse
     */
    object?: string;
    /**
     *
     * @type {boolean}
     * @memberof CustomerShippingContactsResponse
     */
    deleted?: boolean;
}
/**
 * Check if a given object implements the CustomerShippingContactsResponse interface.
 */
export declare function instanceOfCustomerShippingContactsResponse(value: object): boolean;
export declare function CustomerShippingContactsResponseFromJSON(json: any): CustomerShippingContactsResponse;
export declare function CustomerShippingContactsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerShippingContactsResponse;
export declare function CustomerShippingContactsResponseToJSON(value?: CustomerShippingContactsResponse | null): any;
