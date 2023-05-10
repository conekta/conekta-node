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
import { OrderResponseFiscalEntityAddress } from './orderResponseFiscalEntityAddress';

export class OrderResponseFiscalEntity {
    'address'?: OrderResponseFiscalEntityAddress;
    'taxId'?: string;
    'id'?: string;
    'object'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "OrderResponseFiscalEntityAddress"
        },
        {
            "name": "taxId",
            "baseName": "tax_id",
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
        }    ];

    static getAttributeTypeMap() {
        return OrderResponseFiscalEntity.attributeTypeMap;
    }
}
