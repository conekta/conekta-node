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
import type { CheckoutOrderTemplate } from './CheckoutOrderTemplate';
import {
    CheckoutOrderTemplateFromJSON,
    CheckoutOrderTemplateFromJSONTyped,
    CheckoutOrderTemplateToJSON,
} from './CheckoutOrderTemplate';

/**
 * It is a sub-resource of the Order model that can be stipulated in order to configure its corresponding checkout
 * @export
 * @interface Checkout
 */
export interface Checkout {
    /**
     * Those are the payment methods that will be available for the link
     * @type {Array<string>}
     * @memberof Checkout
     */
    allowedPaymentMethods: Array<string>;
    /**
     * It is the time when the link will expire. It is expressed in seconds since the Unix epoch.
     * The valid range is from 2 to 365 days (the valid range will be taken from the next day of the creation date at 00:01 hrs)
     * @type {number}
     * @memberof Checkout
     */
    expiresAt: number;
    /**
     * This flag allows you to specify if months without interest will be active.
     * @type {boolean}
     * @memberof Checkout
     */
    monthlyInstallmentsEnabled?: boolean;
    /**
     * This field allows you to specify the number of months without interest.
     * @type {Array<number>}
     * @memberof Checkout
     */
    monthlyInstallmentsOptions?: Array<number>;
    /**
     * Reason for charge
     * @type {string}
     * @memberof Checkout
     */
    name: string;
    /**
     * This flag allows you to fill in the shipping information at checkout.
     * @type {boolean}
     * @memberof Checkout
     */
    needsShippingContact?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Checkout
     */
    onDemandEnabled?: boolean | null;
    /**
     * 
     * @type {CheckoutOrderTemplate}
     * @memberof Checkout
     */
    orderTemplate: CheckoutOrderTemplate;
    /**
     * 
     * @type {number}
     * @memberof Checkout
     */
    paymentsLimitCount?: number;
    /**
     * false: single use. true: multiple payments
     * @type {boolean}
     * @memberof Checkout
     */
    recurrent: boolean;
    /**
     * 
     * @type {string}
     * @memberof Checkout
     */
    type: string;
}

/**
 * Check if a given object implements the Checkout interface.
 */
export function instanceOfCheckout(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "allowedPaymentMethods" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "orderTemplate" in value;
    isInstance = isInstance && "recurrent" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function CheckoutFromJSON(json: any): Checkout {
    return CheckoutFromJSONTyped(json, false);
}

export function CheckoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): Checkout {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedPaymentMethods': json['allowed_payment_methods'],
        'expiresAt': json['expires_at'],
        'monthlyInstallmentsEnabled': !exists(json, 'monthly_installments_enabled') ? undefined : json['monthly_installments_enabled'],
        'monthlyInstallmentsOptions': !exists(json, 'monthly_installments_options') ? undefined : json['monthly_installments_options'],
        'name': json['name'],
        'needsShippingContact': !exists(json, 'needs_shipping_contact') ? undefined : json['needs_shipping_contact'],
        'onDemandEnabled': !exists(json, 'on_demand_enabled') ? undefined : json['on_demand_enabled'],
        'orderTemplate': CheckoutOrderTemplateFromJSON(json['order_template']),
        'paymentsLimitCount': !exists(json, 'payments_limit_count') ? undefined : json['payments_limit_count'],
        'recurrent': json['recurrent'],
        'type': json['type'],
    };
}

export function CheckoutToJSON(value?: Checkout | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowed_payment_methods': value.allowedPaymentMethods,
        'expires_at': value.expiresAt,
        'monthly_installments_enabled': value.monthlyInstallmentsEnabled,
        'monthly_installments_options': value.monthlyInstallmentsOptions,
        'name': value.name,
        'needs_shipping_contact': value.needsShippingContact,
        'on_demand_enabled': value.onDemandEnabled,
        'order_template': CheckoutOrderTemplateToJSON(value.orderTemplate),
        'payments_limit_count': value.paymentsLimitCount,
        'recurrent': value.recurrent,
        'type': value.type,
    };
}

