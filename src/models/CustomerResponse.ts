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
import type { CustomerAntifraudInfoResponse } from './CustomerAntifraudInfoResponse';
import {
    CustomerAntifraudInfoResponseFromJSON,
    CustomerAntifraudInfoResponseFromJSONTyped,
    CustomerAntifraudInfoResponseToJSON,
} from './CustomerAntifraudInfoResponse';
import type { CustomerFiscalEntitiesResponse } from './CustomerFiscalEntitiesResponse';
import {
    CustomerFiscalEntitiesResponseFromJSON,
    CustomerFiscalEntitiesResponseFromJSONTyped,
    CustomerFiscalEntitiesResponseToJSON,
} from './CustomerFiscalEntitiesResponse';
import type { CustomerPaymentMethodsResponse } from './CustomerPaymentMethodsResponse';
import {
    CustomerPaymentMethodsResponseFromJSON,
    CustomerPaymentMethodsResponseFromJSONTyped,
    CustomerPaymentMethodsResponseToJSON,
} from './CustomerPaymentMethodsResponse';
import type { CustomerResponseShippingContacts } from './CustomerResponseShippingContacts';
import {
    CustomerResponseShippingContactsFromJSON,
    CustomerResponseShippingContactsFromJSONTyped,
    CustomerResponseShippingContactsToJSON,
} from './CustomerResponseShippingContacts';
import type { SubscriptionResponse } from './SubscriptionResponse';
import {
    SubscriptionResponseFromJSON,
    SubscriptionResponseFromJSONTyped,
    SubscriptionResponseToJSON,
} from './SubscriptionResponse';

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
    antifraudInfo?: CustomerAntifraudInfoResponse | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerResponse
     */
    corporate?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CustomerResponse
     */
    createdAt: number;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    customReference?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    defaultFiscalEntityId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    defaultShippingContactId?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    defaultPaymentSourceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    email?: string;
    /**
     * 
     * @type {CustomerFiscalEntitiesResponse}
     * @memberof CustomerResponse
     */
    fiscalEntities?: CustomerFiscalEntitiesResponse;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    id: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerResponse
     */
    livemode: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    object: string;
    /**
     * 
     * @type {CustomerPaymentMethodsResponse}
     * @memberof CustomerResponse
     */
    paymentSources?: CustomerPaymentMethodsResponse;
    /**
     * 
     * @type {string}
     * @memberof CustomerResponse
     */
    phone?: string;
    /**
     * 
     * @type {CustomerResponseShippingContacts}
     * @memberof CustomerResponse
     */
    shippingContacts?: CustomerResponseShippingContacts;
    /**
     * 
     * @type {SubscriptionResponse}
     * @memberof CustomerResponse
     */
    subscription?: SubscriptionResponse;
}

/**
 * Check if a given object implements the CustomerResponse interface.
 */
export function instanceOfCustomerResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "livemode" in value;
    isInstance = isInstance && "object" in value;

    return isInstance;
}

export function CustomerResponseFromJSON(json: any): CustomerResponse {
    return CustomerResponseFromJSONTyped(json, false);
}

export function CustomerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'antifraudInfo': !exists(json, 'antifraud_info') ? undefined : CustomerAntifraudInfoResponseFromJSON(json['antifraud_info']),
        'corporate': !exists(json, 'corporate') ? undefined : json['corporate'],
        'createdAt': json['created_at'],
        'customReference': !exists(json, 'custom_reference') ? undefined : json['custom_reference'],
        'defaultFiscalEntityId': !exists(json, 'default_fiscal_entity_id') ? undefined : json['default_fiscal_entity_id'],
        'defaultShippingContactId': !exists(json, 'default_shipping_contact_id') ? undefined : json['default_shipping_contact_id'],
        'defaultPaymentSourceId': !exists(json, 'default_payment_source_id') ? undefined : json['default_payment_source_id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'fiscalEntities': !exists(json, 'fiscal_entities') ? undefined : CustomerFiscalEntitiesResponseFromJSON(json['fiscal_entities']),
        'id': json['id'],
        'livemode': json['livemode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'object': json['object'],
        'paymentSources': !exists(json, 'payment_sources') ? undefined : CustomerPaymentMethodsResponseFromJSON(json['payment_sources']),
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'shippingContacts': !exists(json, 'shipping_contacts') ? undefined : CustomerResponseShippingContactsFromJSON(json['shipping_contacts']),
        'subscription': !exists(json, 'subscription') ? undefined : SubscriptionResponseFromJSON(json['subscription']),
    };
}

export function CustomerResponseToJSON(value?: CustomerResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'antifraud_info': CustomerAntifraudInfoResponseToJSON(value.antifraudInfo),
        'corporate': value.corporate,
        'created_at': value.createdAt,
        'custom_reference': value.customReference,
        'default_fiscal_entity_id': value.defaultFiscalEntityId,
        'default_shipping_contact_id': value.defaultShippingContactId,
        'default_payment_source_id': value.defaultPaymentSourceId,
        'email': value.email,
        'fiscal_entities': CustomerFiscalEntitiesResponseToJSON(value.fiscalEntities),
        'id': value.id,
        'livemode': value.livemode,
        'name': value.name,
        'object': value.object,
        'payment_sources': CustomerPaymentMethodsResponseToJSON(value.paymentSources),
        'phone': value.phone,
        'shipping_contacts': CustomerResponseShippingContactsToJSON(value.shippingContacts),
        'subscription': SubscriptionResponseToJSON(value.subscription),
    };
}

