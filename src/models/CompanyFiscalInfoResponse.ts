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

import { exists, mapValues } from '../runtime';
import type { CompanyFiscalInfoAddressResponse } from './CompanyFiscalInfoAddressResponse';
import {
    CompanyFiscalInfoAddressResponseFromJSON,
    CompanyFiscalInfoAddressResponseFromJSONTyped,
    CompanyFiscalInfoAddressResponseToJSON,
} from './CompanyFiscalInfoAddressResponse';

/**
 * Company fiscal info model
 * @export
 * @interface CompanyFiscalInfoResponse
 */
export interface CompanyFiscalInfoResponse {
    /**
     * The resource's type
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    object?: CompanyFiscalInfoResponseObjectEnum;
    /**
     * Tax ID of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    taxId?: string;
    /**
     * Legal name of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    legalEntityName?: string;
    /**
     * Business type of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    businessType?: string;
    /**
     * Phone number of the company
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    phone?: string;
    /**
     * Business type if 'persona_fisica'
     * @type {string}
     * @memberof CompanyFiscalInfoResponse
     */
    physicalPersonBusinessType?: string;
    /**
     * 
     * @type {CompanyFiscalInfoAddressResponse}
     * @memberof CompanyFiscalInfoResponse
     */
    address?: CompanyFiscalInfoAddressResponse;
}


/**
 * @export
 */
export const CompanyFiscalInfoResponseObjectEnum = {
    FiscalInfo: 'fiscal_info'
} as const;
export type CompanyFiscalInfoResponseObjectEnum = typeof CompanyFiscalInfoResponseObjectEnum[keyof typeof CompanyFiscalInfoResponseObjectEnum];


/**
 * Check if a given object implements the CompanyFiscalInfoResponse interface.
 */
export function instanceOfCompanyFiscalInfoResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompanyFiscalInfoResponseFromJSON(json: any): CompanyFiscalInfoResponse {
    return CompanyFiscalInfoResponseFromJSONTyped(json, false);
}

export function CompanyFiscalInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyFiscalInfoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'object': !exists(json, 'object') ? undefined : json['object'],
        'taxId': !exists(json, 'tax_id') ? undefined : json['tax_id'],
        'legalEntityName': !exists(json, 'legal_entity_name') ? undefined : json['legal_entity_name'],
        'businessType': !exists(json, 'business_type') ? undefined : json['business_type'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'physicalPersonBusinessType': !exists(json, 'physical_person_business_type') ? undefined : json['physical_person_business_type'],
        'address': !exists(json, 'address') ? undefined : CompanyFiscalInfoAddressResponseFromJSON(json['address']),
    };
}

export function CompanyFiscalInfoResponseToJSON(value?: CompanyFiscalInfoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'object': value.object,
        'tax_id': value.taxId,
        'legal_entity_name': value.legalEntityName,
        'business_type': value.businessType,
        'phone': value.phone,
        'physical_person_business_type': value.physicalPersonBusinessType,
        'address': CompanyFiscalInfoAddressResponseToJSON(value.address),
    };
}

