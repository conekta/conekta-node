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
import { ChargeResponseChannel } from './charge-response-channel';

/**
 * 
 * @export
 * @interface ChargeOrderResponse
 */
export interface ChargeOrderResponse {
    /**
     * 
     * @type {number}
     * @memberof ChargeOrderResponse
     */
    'amount'?: number;
    /**
     * 
     * @type {ChargeResponseChannel}
     * @memberof ChargeOrderResponse
     */
    'channel'?: ChargeResponseChannel;
    /**
     * 
     * @type {number}
     * @memberof ChargeOrderResponse
     */
    'created_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'currency'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'customer_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'device_fingerprint'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'failure_code'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'failure_message'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeOrderResponse
     */
    'fee'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ChargeOrderResponse
     */
    'livemode'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ChargeOrderResponse
     */
    'monthly_installments'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'order_id'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeOrderResponse
     */
    'paid_at'?: number | null;
    /**
     * 
     * @type {ChargeOrderResponsePaymentMethod}
     * @memberof ChargeOrderResponse
     */
    'payment_method'?: ChargeOrderResponsePaymentMethod;
    /**
     * Reference ID of the charge
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'reference_id'?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof ChargeOrderResponse
     */
    'refunds'?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ChargeOrderResponse
     */
    'status'?: string;
}
