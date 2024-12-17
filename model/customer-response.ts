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
     * true if the customer is a company
     * @type {boolean}
     * @memberof CustomerResponse
     */
    'corporate'?: boolean;
    /**
     * Creation date of the object
     * @type {number}
     * @memberof CustomerResponse
     */
    'created_at': number;
    /**
     * Custom reference
     * @type {string}
     * @memberof CustomerResponse
     */
    'custom_reference'?: string;
    /**
     * It is a parameter that allows to identify the date of birth of the client.
     * @type {string}
     * @memberof CustomerResponse
     */
    'date_of_birth'?: string;
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
     * Customer\'s ID
     * @type {string}
     * @memberof CustomerResponse
     */
    'id': string;
    /**
     * true if the object exists in live mode or the value false if the object exists in test mode
     * @type {boolean}
     * @memberof CustomerResponse
     */
    'livemode': boolean;
    /**
     * Customer\'s name
     * @type {string}
     * @memberof CustomerResponse
     */
    'name': string;
    /**
     * It is a parameter that allows to identify the national identification number of the client.
     * @type {string}
     * @memberof CustomerResponse
     */
    'national_id'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CustomerResponse
     */
    'metadata'?: { [key: string]: any; };
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
     * Customer\'s phone number
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

