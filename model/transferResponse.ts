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
import { TransferDestinationResponse } from './transferDestinationResponse';

/**
* A transfer represents the action of sending an amount to a business bank account including the status, amount and method used to make the transfer.
*/
export class TransferResponse {
    /**
    * Amount in cents of the transfer.
    */
    'amount'?: number;
    /**
    * Date and time of creation of the transfer in Unix format.
    */
    'createdAt'?: number;
    /**
    * The currency of the transfer. It uses the 3-letter code of the [International Standard ISO 4217.](https://es.wikipedia.org/wiki/ISO_4217)
    */
    'currency'?: string;
    /**
    * Unique identifier of the transfer.
    */
    'id'?: string;
    /**
    * Indicates whether the transfer was created in live mode or test mode.
    */
    'livemode'?: boolean;
    'destination'?: TransferDestinationResponse;
    /**
    * Object name, which is transfer.
    */
    'object'?: string;
    /**
    * Description of the transfer.
    */
    'statementDescription'?: string;
    /**
    * Reference number of the transfer.
    */
    'statementReference'?: string;
    /**
    * Code indicating transfer status.
    */
    'status'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
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
            "name": "destination",
            "baseName": "destination",
            "type": "TransferDestinationResponse"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "statementDescription",
            "baseName": "statement_description",
            "type": "string"
        },
        {
            "name": "statementReference",
            "baseName": "statement_reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferResponse.attributeTypeMap;
    }
}
