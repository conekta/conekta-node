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
import { PayoutOrderPayoutsItem } from './payout-order-payouts-item';
// May contain unused imports in some cases
// @ts-ignore
import { PayoutOrderResponseCustomerInfo } from './payout-order-response-customer-info';

/**
 * payout order model response
 * @export
 * @interface PayoutOrderResponse
 */
export interface PayoutOrderResponse {
    /**
     * The payout methods that are allowed for the payout order.
     * @type {Array<string>}
     * @memberof PayoutOrderResponse
     */
    'allowed_payout_methods': Array<string>;
    /**
     * The amount of the payout order.
     * @type {number}
     * @memberof PayoutOrderResponse
     */
    'amount': number;
    /**
     * The creation date of the payout order.
     * @type {number}
     * @memberof PayoutOrderResponse
     */
    'created_at': number;
    /**
     * The currency in which the payout order is made.
     * @type {string}
     * @memberof PayoutOrderResponse
     */
    'currency': string;
    /**
     * 
     * @type {PayoutOrderResponseCustomerInfo}
     * @memberof PayoutOrderResponse
     */
    'customer_info': PayoutOrderResponseCustomerInfo;
    /**
     * The expiration date of the payout order.
     * @type {number}
     * @memberof PayoutOrderResponse
     */
    'expires_at'?: number;
    /**
     * The id of the payout order.
     * @type {string}
     * @memberof PayoutOrderResponse
     */
    'id': string;
    /**
     * The live mode of the payout order.
     * @type {boolean}
     * @memberof PayoutOrderResponse
     */
    'livemode': boolean;
    /**
     * The object of the payout order.
     * @type {string}
     * @memberof PayoutOrderResponse
     */
    'object': string;
    /**
     * The metadata of the payout order.
     * @type {{ [key: string]: any; }}
     * @memberof PayoutOrderResponse
     */
    'metadata'?: { [key: string]: any; };
    /**
     * The payout information of the payout order.
     * @type {Array<PayoutOrderPayoutsItem>}
     * @memberof PayoutOrderResponse
     */
    'payouts': Array<PayoutOrderPayoutsItem>;
    /**
     * The reason for the payout order.
     * @type {string}
     * @memberof PayoutOrderResponse
     */
    'reason': string;
    /**
     * The status of the payout order.
     * @type {string}
     * @memberof PayoutOrderResponse
     */
    'status'?: string;
    /**
     * The update date of the payout order.
     * @type {number}
     * @memberof PayoutOrderResponse
     */
    'updated_at': number;
}

