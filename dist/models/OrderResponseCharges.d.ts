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
import type { ChargesDataResponse } from './ChargesDataResponse';
/**
 * The charges associated with the order
 * @export
 * @interface OrderResponseCharges
 */
export interface OrderResponseCharges {
    /**
     * Object type, in this case is list
     * @type {string}
     * @memberof OrderResponseCharges
     */
    object: string;
    /**
     * Indicates if there are more pages to be requested
     * @type {boolean}
     * @memberof OrderResponseCharges
     */
    hasMore: boolean;
    /**
     *
     * @type {Array<ChargesDataResponse>}
     * @memberof OrderResponseCharges
     */
    data?: Array<ChargesDataResponse>;
}
/**
 * Check if a given object implements the OrderResponseCharges interface.
 */
export declare function instanceOfOrderResponseCharges(value: object): boolean;
export declare function OrderResponseChargesFromJSON(json: any): OrderResponseCharges;
export declare function OrderResponseChargesFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderResponseCharges;
export declare function OrderResponseChargesToJSON(value?: OrderResponseCharges | null): any;
