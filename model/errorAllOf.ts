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

export class ErrorAllOf {
    /**
    * log id
    */
    'logId'?: string | null;
    'type'?: string;
    'object'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "logId",
            "baseName": "log_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorAllOf.attributeTypeMap;
    }
}
