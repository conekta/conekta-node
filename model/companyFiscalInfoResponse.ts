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
import { CompanyFiscalInfoAddressResponse } from './companyFiscalInfoAddressResponse';

/**
* Company fiscal info model
*/
export class CompanyFiscalInfoResponse {
    /**
    * The resource\'s type
    */
    'object'?: CompanyFiscalInfoResponse.ObjectEnum;
    /**
    * Tax ID of the company
    */
    'taxId'?: string;
    /**
    * Legal name of the company
    */
    'legalEntityName'?: string;
    /**
    * Business type of the company
    */
    'businessType'?: string;
    /**
    * Phone number of the company
    */
    'phone'?: string;
    /**
    * Business type if \'persona_fisica\'
    */
    'physicalPersonBusinessType'?: string;
    'address'?: CompanyFiscalInfoAddressResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "CompanyFiscalInfoResponse.ObjectEnum"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
            "type": "string"
        },
        {
            "name": "legalEntityName",
            "baseName": "legal_entity_name",
            "type": "string"
        },
        {
            "name": "businessType",
            "baseName": "business_type",
            "type": "string"
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string"
        },
        {
            "name": "physicalPersonBusinessType",
            "baseName": "physical_person_business_type",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "CompanyFiscalInfoAddressResponse"
        }    ];

    static getAttributeTypeMap() {
        return CompanyFiscalInfoResponse.attributeTypeMap;
    }
}

export namespace CompanyFiscalInfoResponse {
    export enum ObjectEnum {
        FiscalInfo = <any> 'fiscal_info'
    }
}