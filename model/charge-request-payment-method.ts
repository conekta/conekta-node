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
 * Payment method used in the charge. Go to the [payment methods](https://developers.conekta.com/reference/m%C3%A9todos-de-pago) section for more details 
 * @export
 * @interface ChargeRequestPaymentMethod
 */
export interface ChargeRequestPaymentMethod {
    /**
     * Method expiration date as unix timestamp
     * @type {number}
     * @memberof ChargeRequestPaymentMethod
     */
    'expires_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeRequestPaymentMethod
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof ChargeRequestPaymentMethod
     */
    'token_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChargeRequestPaymentMethod
     */
    'payment_source_id'?: string;
    /**
     * Optional id sent to indicate the bank contract for recurrent card charges.
     * @type {string}
     * @memberof ChargeRequestPaymentMethod
     */
    'contract_id'?: string;
}
