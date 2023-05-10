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

import { exists, mapValues } from '../runtime';
import type { CustomerAntifraudInfo } from './CustomerAntifraudInfo';
import {
    CustomerAntifraudInfoFromJSON,
    CustomerAntifraudInfoFromJSONTyped,
    CustomerAntifraudInfoToJSON,
} from './CustomerAntifraudInfo';
import type { CustomerFiscalEntitiesRequest } from './CustomerFiscalEntitiesRequest';
import {
    CustomerFiscalEntitiesRequestFromJSON,
    CustomerFiscalEntitiesRequestFromJSONTyped,
    CustomerFiscalEntitiesRequestToJSON,
} from './CustomerFiscalEntitiesRequest';
import type { CustomerPaymentMethodsRequest } from './CustomerPaymentMethodsRequest';
import {
    CustomerPaymentMethodsRequestFromJSON,
    CustomerPaymentMethodsRequestFromJSONTyped,
    CustomerPaymentMethodsRequestToJSON,
} from './CustomerPaymentMethodsRequest';
import type { CustomerShippingContacts } from './CustomerShippingContacts';
import {
    CustomerShippingContactsFromJSON,
    CustomerShippingContactsFromJSONTyped,
    CustomerShippingContactsToJSON,
} from './CustomerShippingContacts';
import type { SubscriptionRequest } from './SubscriptionRequest';
import {
    SubscriptionRequestFromJSON,
    SubscriptionRequestFromJSONTyped,
    SubscriptionRequestToJSON,
} from './SubscriptionRequest';

/**
 * a customer
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * 
     * @type {CustomerAntifraudInfo}
     * @memberof Customer
     */
    antifraudInfo?: CustomerAntifraudInfo | null;
    /**
     * It is a value that allows identifying if the email is corporate or not.
     * @type {boolean}
     * @memberof Customer
     */
    corporate?: boolean;
    /**
     * It is an undefined value.
     * @type {string}
     * @memberof Customer
     */
    customReference?: string;
    /**
     * An email address is a series of customizable characters followed by a universal Internet symbol, the at symbol (@), the name of a host server, and a web domain ending (.mx, .com, .org, . net, etc).
     * @type {string}
     * @memberof Customer
     */
    email: string;
    /**
     * It is a parameter that allows to identify in the response, the Conekta ID of a payment method (payment_id)
     * @type {string}
     * @memberof Customer
     */
    defaultPaymentSourceId?: string;
    /**
     * It is a parameter that allows to identify in the response, the Conekta ID of the shipping address (shipping_contact)
     * @type {string}
     * @memberof Customer
     */
    defaultShippingContactId?: string;
    /**
     * 
     * @type {Array<CustomerFiscalEntitiesRequest>}
     * @memberof Customer
     */
    fiscalEntities?: Array<CustomerFiscalEntitiesRequest>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Customer
     */
    metadata?: { [key: string]: any; };
    /**
     * Client's name
     * @type {string}
     * @memberof Customer
     */
    name: string;
    /**
     * Contains details of the payment methods that the customer has active or has used in Conekta
     * @type {Array<CustomerPaymentMethodsRequest>}
     * @memberof Customer
     */
    paymentSources?: Array<CustomerPaymentMethodsRequest>;
    /**
     * Is the customer's phone number
     * @type {string}
     * @memberof Customer
     */
    phone: string;
    /**
     * Contains the ID of a plan, which could together with name, email and phone create a client directly to a subscription
     * @type {string}
     * @memberof Customer
     */
    planId?: string;
    /**
     * Contains the detail of the shipping addresses that the client has active or has used in Conekta
     * @type {Array<CustomerShippingContacts>}
     * @memberof Customer
     */
    shippingContacts?: Array<CustomerShippingContacts>;
    /**
     * 
     * @type {SubscriptionRequest}
     * @memberof Customer
     */
    subscription?: SubscriptionRequest;
}

/**
 * Check if a given object implements the Customer interface.
 */
export function instanceOfCustomer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'antifraudInfo': !exists(json, 'antifraud_info') ? undefined : CustomerAntifraudInfoFromJSON(json['antifraud_info']),
        'corporate': !exists(json, 'corporate') ? undefined : json['corporate'],
        'customReference': !exists(json, 'custom_reference') ? undefined : json['custom_reference'],
        'email': json['email'],
        'defaultPaymentSourceId': !exists(json, 'default_payment_source_id') ? undefined : json['default_payment_source_id'],
        'defaultShippingContactId': !exists(json, 'default_shipping_contact_id') ? undefined : json['default_shipping_contact_id'],
        'fiscalEntities': !exists(json, 'fiscal_entities') ? undefined : ((json['fiscal_entities'] as Array<any>).map(CustomerFiscalEntitiesRequestFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'name': json['name'],
        'paymentSources': !exists(json, 'payment_sources') ? undefined : ((json['payment_sources'] as Array<any>).map(CustomerPaymentMethodsRequestFromJSON)),
        'phone': json['phone'],
        'planId': !exists(json, 'plan_id') ? undefined : json['plan_id'],
        'shippingContacts': !exists(json, 'shipping_contacts') ? undefined : ((json['shipping_contacts'] as Array<any>).map(CustomerShippingContactsFromJSON)),
        'subscription': !exists(json, 'subscription') ? undefined : SubscriptionRequestFromJSON(json['subscription']),
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'antifraud_info': CustomerAntifraudInfoToJSON(value.antifraudInfo),
        'corporate': value.corporate,
        'custom_reference': value.customReference,
        'email': value.email,
        'default_payment_source_id': value.defaultPaymentSourceId,
        'default_shipping_contact_id': value.defaultShippingContactId,
        'fiscal_entities': value.fiscalEntities === undefined ? undefined : ((value.fiscalEntities as Array<any>).map(CustomerFiscalEntitiesRequestToJSON)),
        'metadata': value.metadata,
        'name': value.name,
        'payment_sources': value.paymentSources === undefined ? undefined : ((value.paymentSources as Array<any>).map(CustomerPaymentMethodsRequestToJSON)),
        'phone': value.phone,
        'plan_id': value.planId,
        'shipping_contacts': value.shippingContacts === undefined ? undefined : ((value.shippingContacts as Array<any>).map(CustomerShippingContactsToJSON)),
        'subscription': SubscriptionRequestToJSON(value.subscription),
    };
}

