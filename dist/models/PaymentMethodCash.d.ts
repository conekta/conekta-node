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
 * @interface PaymentMethodCash
 */
export interface PaymentMethodCash {
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    object: string;
    /**
     *
     * @type {number}
     * @memberof PaymentMethodCash
     */
    authCode?: number | null;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    cashierId?: string | null;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    reference?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    barcodeUrl?: string;
    /**
     *
     * @type {number}
     * @memberof PaymentMethodCash
     */
    expiresAt?: number;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    serviceName?: string;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    store?: string | null;
    /**
     *
     * @type {string}
     * @memberof PaymentMethodCash
     */
    storeName?: string;
}
/**
 * Check if a given object implements the PaymentMethodCash interface.
 */
export declare function instanceOfPaymentMethodCash(value: object): boolean;
export declare function PaymentMethodCashFromJSON(json: any): PaymentMethodCash;
export declare function PaymentMethodCashFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodCash;
export declare function PaymentMethodCashToJSON(value?: PaymentMethodCash | null): any;
