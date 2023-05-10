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

/**
* webhook keys model
*/
export class WebhookKeyCreateResponse {
    /**
    * Indicates if the webhook key is active
    */
    'active'?: boolean;
    /**
    * Unix timestamp in seconds with the creation date of the webhook key
    */
    'createdAt'?: number;
    /**
    * Unique identifier of the webhook key
    */
    'id'?: string;
    /**
    * Indicates if the webhook key is in live mode
    */
    'livemode'?: boolean;
    /**
    * Object name, value is webhook_key
    */
    'object'?: string;
    /**
    * Public key to be used in the webhook
    */
    'publicKey'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "publicKey",
            "baseName": "public_key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebhookKeyCreateResponse.attributeTypeMap;
    }
}

