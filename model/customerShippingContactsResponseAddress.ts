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

export class CustomerShippingContactsResponseAddress {
    'object'?: string;
    'street1'?: string;
    'street2'?: string;
    'postalCode'?: string;
    'city'?: string;
    'state'?: string;
    'country'?: string;
    'residential'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
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
        }    ];

    static getAttributeTypeMap() {
        return CustomerShippingContactsResponseAddress.attributeTypeMap;
    }
}

