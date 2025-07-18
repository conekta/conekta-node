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


// May contain unused imports in some cases
// @ts-ignore
import { CustomerFiscalEntitiesRequest } from './customer-fiscal-entities-request';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerPaymentMethodsRequest } from './customer-payment-methods-request';
// May contain unused imports in some cases
// @ts-ignore
import { CustomerShippingContacts } from './customer-shipping-contacts';
// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionRequest } from './subscription-request';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateCustomerAntifraudInfo } from './update-customer-antifraud-info';

/**
 * update customer
 * @export
 * @interface UpdateCustomer
 */
export interface UpdateCustomer {
    /**
     * 
     * @type {UpdateCustomerAntifraudInfo}
     * @memberof UpdateCustomer
     */
    'antifraud_info'?: UpdateCustomerAntifraudInfo | null;
    /**
     * It is a parameter that allows to identify the date of birth of the client.
     * @type {string}
     * @memberof UpdateCustomer
     */
    'date_of_birth'?: string;
    /**
     * It is a parameter that allows to identify in the response, the Conekta ID of a payment method (payment_id)
     * @type {string}
     * @memberof UpdateCustomer
     */
    'default_payment_source_id'?: string;
    /**
     * An email address is a series of customizable characters followed by a universal Internet symbol, the at symbol (@), the name of a host server, and a web domain ending (.mx, .com, .org, . net, etc).
     * @type {string}
     * @memberof UpdateCustomer
     */
    'email'?: string;
    /**
     * Client\'s name
     * @type {string}
     * @memberof UpdateCustomer
     */
    'name'?: string;
    /**
     * Is the customer\'s phone number
     * @type {string}
     * @memberof UpdateCustomer
     */
    'phone'?: string;
    /**
     * Contains the ID of a plan, which could together with name, email and phone create a client directly to a subscription
     * @type {string}
     * @memberof UpdateCustomer
     */
    'plan_id'?: string;
    /**
     * It is a parameter that allows to identify in the response, the Conekta ID of the shipping address (shipping_contact)
     * @type {string}
     * @memberof UpdateCustomer
     */
    'default_shipping_contact_id'?: string;
    /**
     * It is a value that allows identifying if the email is corporate or not.
     * @type {boolean}
     * @memberof UpdateCustomer
     */
    'corporate'?: boolean;
    /**
     * It is an undefined value.
     * @type {string}
     * @memberof UpdateCustomer
     */
    'custom_reference'?: string;
    /**
     * 
     * @type {Array<CustomerFiscalEntitiesRequest>}
     * @memberof UpdateCustomer
     */
    'fiscal_entities'?: Array<CustomerFiscalEntitiesRequest>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof UpdateCustomer
     */
    'metadata'?: { [key: string]: any; };
    /**
     * It is a parameter that allows to identify the national identification number of the client.
     * @type {string}
     * @memberof UpdateCustomer
     */
    'national_id'?: string;
    /**
     * Contains details of the payment methods that the customer has active or has used in Conekta
     * @type {Array<CustomerPaymentMethodsRequest>}
     * @memberof UpdateCustomer
     */
    'payment_sources'?: Array<CustomerPaymentMethodsRequest>;
    /**
     * Contains the detail of the shipping addresses that the client has active or has used in Conekta
     * @type {Array<CustomerShippingContacts>}
     * @memberof UpdateCustomer
     */
    'shipping_contacts'?: Array<CustomerShippingContacts>;
    /**
     * 
     * @type {SubscriptionRequest}
     * @memberof UpdateCustomer
     */
    'subscription'?: SubscriptionRequest;
}

