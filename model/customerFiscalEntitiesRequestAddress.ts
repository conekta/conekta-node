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

export class CustomerFiscalEntitiesRequestAddress {
    'street1': string;
    'street2'?: string;
    'postalCode': string;
    'city': string;
    'state'?: string;
    /**
    * this field follows the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    */
    'country'?: string;
    'residential'?: boolean;
    'externalNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "street1",
            "baseName": "street1",
            "type": "string"
        },
        {
            "name": "street2",
            "baseName": "street2",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "residential",
            "baseName": "residential",
            "type": "boolean"
        },
        {
            "name": "externalNumber",
            "baseName": "external_number",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CustomerFiscalEntitiesRequestAddress.attributeTypeMap;
    }
}

