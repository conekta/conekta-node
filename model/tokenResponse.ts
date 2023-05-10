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
import { TokenResponseCheckout } from './tokenResponseCheckout';

/**
* token response
*/
export class TokenResponse {
    'checkout'?: TokenResponseCheckout | null;
    /**
    * Unique identifier for the token generated by Conekta.
    */
    'id': string;
    /**
    * Indicates whether the token is in live mode or test mode.
    */
    'livemode': boolean;
    /**
    * Indicates the type of object, in this case token
    */
    'object': string;
    /**
    * Indicates if the token has been used
    */
    'used': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkout",
            "baseName": "checkout",
            "type": "TokenResponseCheckout"
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
            "name": "used",
            "baseName": "used",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TokenResponse.attributeTypeMap;
    }
}

