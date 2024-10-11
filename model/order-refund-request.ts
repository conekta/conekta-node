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



/**
 * 
 * @export
 * @interface OrderRefundRequest
 */
export interface OrderRefundRequest {
    /**
     * Amount to be refunded in cents
     * @type {number}
     * @memberof OrderRefundRequest
     */
    'amount': number;
    /**
     * 
     * @type {number}
     * @memberof OrderRefundRequest
     */
    'expires_at'?: number | null;
    /**
     * Reason for the refund
     * @type {string}
     * @memberof OrderRefundRequest
     */
    'reason': string;
}

