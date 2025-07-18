/* tslint:disable */
/* eslint-disable */
/**
 * Conekta API
 * Conekta sdk
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: engineering@conekta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Address of the person who will receive the order
 * @export
 * @interface CustomerShippingContactsAddress
 */
export interface CustomerShippingContactsAddress {
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'street1'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'street2'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'postal_code'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'state'?: string;
    /**
     * this field follows the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     * @type {string}
     * @memberof CustomerShippingContactsAddress
     */
    'country'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerShippingContactsAddress
     */
    'residential'?: boolean | null;
}

