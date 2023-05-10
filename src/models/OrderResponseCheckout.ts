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
/**
 * 
 * @export
 * @interface OrderResponseCheckout
 */
export interface OrderResponseCheckout {
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderResponseCheckout
     */
    allowedPaymentMethods?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    canNotExpire?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    emailsSent?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof OrderResponseCheckout
     */
    excludeCardNetworks?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    expiresAt?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    failureUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    force3dsFlow?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    isRedirectOnFailure?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    livemode?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderResponseCheckout
     */
    metadata?: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    monthlyInstallmentsEnabled?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof OrderResponseCheckout
     */
    monthlyInstallmentsOptions?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    needsShippingContact?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    object?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    onDemandEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    paidPaymentsCount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    recurrent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    smsSent?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    successUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    startsAt?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    url?: string;
}

/**
 * Check if a given object implements the OrderResponseCheckout interface.
 */
export function instanceOfOrderResponseCheckout(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderResponseCheckoutFromJSON(json: any): OrderResponseCheckout {
    return OrderResponseCheckoutFromJSONTyped(json, false);
}

export function OrderResponseCheckoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderResponseCheckout {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowedPaymentMethods': !exists(json, 'allowed_payment_methods') ? undefined : json['allowed_payment_methods'],
        'canNotExpire': !exists(json, 'can_not_expire') ? undefined : json['can_not_expire'],
        'emailsSent': !exists(json, 'emails_sent') ? undefined : json['emails_sent'],
        'excludeCardNetworks': !exists(json, 'exclude_card_networks') ? undefined : json['exclude_card_networks'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : json['expires_at'],
        'failureUrl': !exists(json, 'failure_url') ? undefined : json['failure_url'],
        'force3dsFlow': !exists(json, 'force_3ds_flow') ? undefined : json['force_3ds_flow'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isRedirectOnFailure': !exists(json, 'is_redirect_on_failure') ? undefined : json['is_redirect_on_failure'],
        'livemode': !exists(json, 'livemode') ? undefined : json['livemode'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'monthlyInstallmentsEnabled': !exists(json, 'monthly_installments_enabled') ? undefined : json['monthly_installments_enabled'],
        'monthlyInstallmentsOptions': !exists(json, 'monthly_installments_options') ? undefined : json['monthly_installments_options'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'needsShippingContact': !exists(json, 'needs_shipping_contact') ? undefined : json['needs_shipping_contact'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'onDemandEnabled': !exists(json, 'on_demand_enabled') ? undefined : json['on_demand_enabled'],
        'paidPaymentsCount': !exists(json, 'paid_payments_count') ? undefined : json['paid_payments_count'],
        'recurrent': !exists(json, 'recurrent') ? undefined : json['recurrent'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'smsSent': !exists(json, 'sms_sent') ? undefined : json['sms_sent'],
        'successUrl': !exists(json, 'success_url') ? undefined : json['success_url'],
        'startsAt': !exists(json, 'starts_at') ? undefined : json['starts_at'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function OrderResponseCheckoutToJSON(value?: OrderResponseCheckout | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowed_payment_methods': value.allowedPaymentMethods,
        'can_not_expire': value.canNotExpire,
        'emails_sent': value.emailsSent,
        'exclude_card_networks': value.excludeCardNetworks,
        'expires_at': value.expiresAt,
        'failure_url': value.failureUrl,
        'force_3ds_flow': value.force3dsFlow,
        'id': value.id,
        'is_redirect_on_failure': value.isRedirectOnFailure,
        'livemode': value.livemode,
        'metadata': value.metadata,
        'monthly_installments_enabled': value.monthlyInstallmentsEnabled,
        'monthly_installments_options': value.monthlyInstallmentsOptions,
        'name': value.name,
        'needs_shipping_contact': value.needsShippingContact,
        'object': value.object,
        'on_demand_enabled': value.onDemandEnabled,
        'paid_payments_count': value.paidPaymentsCount,
        'recurrent': value.recurrent,
        'slug': value.slug,
        'sms_sent': value.smsSent,
        'success_url': value.successUrl,
        'starts_at': value.startsAt,
        'status': value.status,
        'type': value.type,
        'url': value.url,
    };
}

