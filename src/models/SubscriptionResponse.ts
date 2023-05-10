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
 * subscription model
 * @export
 * @interface SubscriptionResponse
 */
export interface SubscriptionResponse {
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    billingCycleStart?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    billingCycleEnd?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    canceledAt?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    cardId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    chargeId?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    createdAt?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    customerCustomReference?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    lastBillingCycleOrderId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    pausedAt?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    planId?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResponse
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    subscriptionStart?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    trialStart?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionResponse
     */
    trialEnd?: number | null;
}

/**
 * Check if a given object implements the SubscriptionResponse interface.
 */
export function instanceOfSubscriptionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SubscriptionResponseFromJSON(json: any): SubscriptionResponse {
    return SubscriptionResponseFromJSONTyped(json, false);
}

export function SubscriptionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billingCycleStart': !exists(json, 'billing_cycle_start') ? undefined : json['billing_cycle_start'],
        'billingCycleEnd': !exists(json, 'billing_cycle_end') ? undefined : json['billing_cycle_end'],
        'canceledAt': !exists(json, 'canceled_at') ? undefined : json['canceled_at'],
        'cardId': !exists(json, 'card_id') ? undefined : json['card_id'],
        'chargeId': !exists(json, 'charge_id') ? undefined : json['charge_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'customerCustomReference': !exists(json, 'customer_custom_reference') ? undefined : json['customer_custom_reference'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'lastBillingCycleOrderId': !exists(json, 'last_billing_cycle_order_id') ? undefined : json['last_billing_cycle_order_id'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'pausedAt': !exists(json, 'paused_at') ? undefined : json['paused_at'],
        'planId': !exists(json, 'plan_id') ? undefined : json['plan_id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'subscriptionStart': !exists(json, 'subscription_start') ? undefined : json['subscription_start'],
        'trialStart': !exists(json, 'trial_start') ? undefined : json['trial_start'],
        'trialEnd': !exists(json, 'trial_end') ? undefined : json['trial_end'],
    };
}

export function SubscriptionResponseToJSON(value?: SubscriptionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billing_cycle_start': value.billingCycleStart,
        'billing_cycle_end': value.billingCycleEnd,
        'canceled_at': value.canceledAt,
        'card_id': value.cardId,
        'charge_id': value.chargeId,
        'created_at': value.createdAt,
        'customer_custom_reference': value.customerCustomReference,
        'customer_id': value.customerId,
        'id': value.id,
        'last_billing_cycle_order_id': value.lastBillingCycleOrderId,
        'object': value.object,
        'paused_at': value.pausedAt,
        'plan_id': value.planId,
        'status': value.status,
        'subscription_start': value.subscriptionStart,
        'trial_start': value.trialStart,
        'trial_end': value.trialEnd,
    };
}

