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


// May contain unused imports in some cases
// @ts-ignore
import { CustomerShippingContactsAddress } from './customer-shipping-contacts-address';

/**
 * [Shipping](https://developers.conekta.com/v2.1.0/reference/createcustomershippingcontacts) details, required in case of sending a shipping. If we do not receive a shipping_contact on the order, the default shipping_contact of the customer will be used.
 * @export
 * @interface CustomerShippingContacts
 */
export interface CustomerShippingContacts {
    /**
     * Phone contact
     * @type {string}
     * @memberof CustomerShippingContacts
     */
    'phone'?: string;
    /**
     * Name of the person who will receive the order
     * @type {string}
     * @memberof CustomerShippingContacts
     */
    'receiver'?: string;
    /**
     * The street names between which the order will be delivered.
     * @type {string}
     * @memberof CustomerShippingContacts
     */
    'between_streets'?: string;
    /**
     * 
     * @type {CustomerShippingContactsAddress}
     * @memberof CustomerShippingContacts
     */
    'address': CustomerShippingContactsAddress;
    /**
     * 
     * @type {string}
     * @memberof CustomerShippingContacts
     */
    'parent_id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerShippingContacts
     */
    'default'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerShippingContacts
     */
    'deleted'?: boolean | null;
}
