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
import type { TransfersResponse } from './TransfersResponse';
/**
 *
 * @export
 * @interface GetTransfersResponse
 */
export interface GetTransfersResponse {
    /**
     * Object type, in this case is list
     * @type {string}
     * @memberof GetTransfersResponse
     */
    object: string;
    /**
     * Indicates if there are more pages to be requested
     * @type {boolean}
     * @memberof GetTransfersResponse
     */
    hasMore: boolean;
    /**
     * URL of the next page.
     * @type {string}
     * @memberof GetTransfersResponse
     */
    nextPageUrl?: string | null;
    /**
     * Url of the previous page.
     * @type {string}
     * @memberof GetTransfersResponse
     */
    previousPageUrl?: string | null;
    /**
     * Transfers
     * @type {Array<TransfersResponse>}
     * @memberof GetTransfersResponse
     */
    data?: Array<TransfersResponse>;
}
/**
 * Check if a given object implements the GetTransfersResponse interface.
 */
export declare function instanceOfGetTransfersResponse(value: object): boolean;
export declare function GetTransfersResponseFromJSON(json: any): GetTransfersResponse;
export declare function GetTransfersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTransfersResponse;
export declare function GetTransfersResponseToJSON(value?: GetTransfersResponse | null): any;
