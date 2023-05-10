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
 * List of discounts that apply to the order.
 * @export
 * @interface UpdateOrderDiscountLinesRequest
 */
export interface UpdateOrderDiscountLinesRequest {
    /**
     *
     * @type {number}
     * @memberof UpdateOrderDiscountLinesRequest
     */
    amount?: number;
    /**
     * Discount code.
     * @type {string}
     * @memberof UpdateOrderDiscountLinesRequest
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof UpdateOrderDiscountLinesRequest
     */
    type?: string;
}
/**
 * Check if a given object implements the UpdateOrderDiscountLinesRequest interface.
 */
export declare function instanceOfUpdateOrderDiscountLinesRequest(value: object): boolean;
export declare function UpdateOrderDiscountLinesRequestFromJSON(json: any): UpdateOrderDiscountLinesRequest;
export declare function UpdateOrderDiscountLinesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrderDiscountLinesRequest;
export declare function UpdateOrderDiscountLinesRequestToJSON(value?: UpdateOrderDiscountLinesRequest | null): any;
