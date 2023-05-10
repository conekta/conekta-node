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
 * It is a parameter that allows to identify in the response, the detailed content of the plans to which the client has subscribed
 * @export
 * @interface SubscriptionRequest
 */
export interface SubscriptionRequest {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRequest
     */
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionRequest
     */
    cardId?: string;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionRequest
     */
    trialEnd?: number;
}

/**
 * Check if a given object implements the SubscriptionRequest interface.
 */
export function instanceOfSubscriptionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "planId" in value;

    return isInstance;
}

export function SubscriptionRequestFromJSON(json: any): SubscriptionRequest {
    return SubscriptionRequestFromJSONTyped(json, false);
}

export function SubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'planId': json['plan_id'],
        'cardId': !exists(json, 'card_id') ? undefined : json['card_id'],
        'trialEnd': !exists(json, 'trial_end') ? undefined : json['trial_end'],
    };
}

export function SubscriptionRequestToJSON(value?: SubscriptionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'plan_id': value.planId,
        'card_id': value.cardId,
        'trial_end': value.trialEnd,
    };
}

