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
import type { TokenCard } from './TokenCard';
import {
    TokenCardFromJSON,
    TokenCardFromJSONTyped,
    TokenCardToJSON,
} from './TokenCard';
import type { TokenCheckout } from './TokenCheckout';
import {
    TokenCheckoutFromJSON,
    TokenCheckoutFromJSONTyped,
    TokenCheckoutToJSON,
} from './TokenCheckout';

/**
 * a token
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {TokenCard}
     * @memberof Token
     */
    card?: TokenCard | null;
    /**
     * 
     * @type {TokenCheckout}
     * @memberof Token
     * @deprecated
     */
    checkout?: TokenCheckout | null;
}

/**
 * Check if a given object implements the Token interface.
 */
export function instanceOfToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'card': !exists(json, 'card') ? undefined : TokenCardFromJSON(json['card']),
        'checkout': !exists(json, 'checkout') ? undefined : TokenCheckoutFromJSON(json['checkout']),
    };
}

export function TokenToJSON(value?: Token | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card': TokenCardToJSON(value.card),
        'checkout': TokenCheckoutToJSON(value.checkout),
    };
}

