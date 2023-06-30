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
import { CustomerAntifraudInfoResponse } from './customer-antifraud-info-response';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerFiscalEntitiesResponse } from './customer-fiscal-entities-response';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerPaymentMethodsResponse } from './customer-payment-methods-response';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerResponseShippingContacts } from './customer-response-shipping-contacts';
// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionResponse } from './subscription-response';

/**
 * customer response
 * @export
 * @interface CustomerResponse
 */
export interface CustomerResponse {
    /**
     * 
     * @type {CustomerAntifraudInfoResponse}
     * @memberof CustomerResponse
     */
    'antifraud_info'?: CustomerAntifraudInfoResponse | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerResponse
     */
    'corporate'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomerResponse
     */
    'created_at': number;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'custom_reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'default_fiscal_entity_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'default_shipping_contact_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'default_payment_source_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'email'?: string;
    /**
     * 
     * @type {CustomerFiscalEntitiesResponse}
     * @memberof CustomerResponse
     */
    'fiscal_entities'?: CustomerFiscalEntitiesResponse;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'id': string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerResponse
     */
    'livemode': boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'object': string;
    /**
     * 
     * @type {CustomerPaymentMethodsResponse}
     * @memberof CustomerResponse
     */
    'payment_sources'?: CustomerPaymentMethodsResponse;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    'phone'?: string;
    /**
     * 
     * @type {CustomerResponseShippingContacts}
     * @memberof CustomerResponse
     */
    'shipping_contacts'?: CustomerResponseShippingContacts;
    /**
     * 
     * @type {SubscriptionResponse}
     * @memberof CustomerResponse
     */
    'subscription'?: SubscriptionResponse;
}

