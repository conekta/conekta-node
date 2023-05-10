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
import type { CustomerFiscalEntitiesRequestAddress } from './CustomerFiscalEntitiesRequestAddress';
/**
 *
 * @export
 * @interface CustomerUpdateFiscalEntitiesRequest
 */
export interface CustomerUpdateFiscalEntitiesRequest {
    /**
     *
     * @type {CustomerFiscalEntitiesRequestAddress}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    address?: CustomerFiscalEntitiesRequestAddress;
    /**
     *
     * @type {string}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    taxId?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    phone?: string;
    /**
     *
     * @type {{ [key: string]: object; }}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    metadata?: {
        [key: string]: object;
    };
    /**
     *
     * @type {string}
     * @memberof CustomerUpdateFiscalEntitiesRequest
     */
    companyName?: string;
}
/**
 * Check if a given object implements the CustomerUpdateFiscalEntitiesRequest interface.
 */
export declare function instanceOfCustomerUpdateFiscalEntitiesRequest(value: object): boolean;
export declare function CustomerUpdateFiscalEntitiesRequestFromJSON(json: any): CustomerUpdateFiscalEntitiesRequest;
export declare function CustomerUpdateFiscalEntitiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerUpdateFiscalEntitiesRequest;
export declare function CustomerUpdateFiscalEntitiesRequestToJSON(value?: CustomerUpdateFiscalEntitiesRequest | null): any;
