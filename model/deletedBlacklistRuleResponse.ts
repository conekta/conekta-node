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

export class DeletedBlacklistRuleResponse {
    /**
    * Blacklist rule id
    */
    'id'?: string;
    /**
    * field used for blacklists rule deleted
    */
    'field'?: string;
    /**
    * value used for blacklists rule deleted
    */
    'value'?: string;
    /**
    * use an description for blacklisted rule
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DeletedBlacklistRuleResponse.attributeTypeMap;
    }
}

