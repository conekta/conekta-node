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

import { RequestFile } from './models';
import { CustomerFiscalEntitiesRequestAddress } from './customerFiscalEntitiesRequestAddress';

export class CustomerFiscalEntitiesDataResponse {
    'address': CustomerFiscalEntitiesRequestAddress;
    'taxId'?: string;
    'email'?: string;
    'phone'?: string;
    'metadata'?: { [key: string]: object; };
    'companyName'?: string;
    'id': string;
    'object': string;
    'createdAt': number;
    'parentId'?: string;
    '_default'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "CustomerFiscalEntitiesRequestAddress"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "companyName",
            "baseName": "company_name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomerFiscalEntitiesDataResponse.attributeTypeMap;
    }
}

