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
import { ChargeOrderResponsePaymentMethod } from './charge-order-response-payment-method';
// May contain unused imports in some cases
// @ts-ignore
import { ChargeResponseRefunds } from './charge-response-refunds';

/**
 * 
 * @export
 * @interface ChargeResponse
 */
export interface ChargeResponse {
    /**
     * 
     * @type {number}
     * @memberof ChargeResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {number}
     * @memberof ChargeResponse
     */
    'created_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'customer_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'device_fingerprint'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'failure_code'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'failure_message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeResponse
     */
    'fee'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChargeResponse
     */
    'livemode'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'order_id'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeResponse
     */
    'paid_at'?: number | null;
    /**
     * 
     * @type {ChargeOrderResponsePaymentMethod}
     * @memberof ChargeResponse
     */
    'payment_method'?: ChargeOrderResponsePaymentMethod;
    /**
     * 
     * @type {ChargeResponseRefunds}
     * @memberof ChargeResponse
     */
    'refunds'?: ChargeResponseRefunds | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeResponse
     */
    'status'?: string;
}

