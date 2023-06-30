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
 * use for cash responses
 * @export
 * @interface ChargeDataPaymentMethodCashResponse
 */
export interface ChargeDataPaymentMethodCashResponse {
    /**
     * 
     * @type {number}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'auth_code'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'cashier_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'reference'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'barcode_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'expires_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'service_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'store'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChargeDataPaymentMethodCashResponse
     */
    'store_name'?: string;
}

