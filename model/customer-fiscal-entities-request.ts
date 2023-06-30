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
import { CustomerFiscalEntitiesRequestAddress } from './customer-fiscal-entities-request-address';

/**
 * 
 * @export
 * @interface CustomerFiscalEntitiesRequest
 */
export interface CustomerFiscalEntitiesRequest {
    /**
     * 
     * @type {CustomerFiscalEntitiesRequestAddress}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'address': CustomerFiscalEntitiesRequestAddress;
    /**
     * 
     * @type {string}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'tax_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'metadata'?: { [key: string]: object; };
    /**
     * 
     * @type {string}
     * @memberof CustomerFiscalEntitiesRequest
     */
    'company_name'?: string;
}

