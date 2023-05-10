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

export class ShippingRequest {
    /**
    * Shipping amount in cents
    */
    'amount': number;
    /**
    * Carrier name for the shipment
    */
    'carrier'?: string;
    /**
    * Tracking number can be used to track the shipment
    */
    'trackingNumber'?: string;
    /**
    * Method of shipment
    */
    'method'?: string;
    /**
    * Hash where the user can send additional information for each \'shipping\'.
    */
    'metadata'?: { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "carrier",
            "baseName": "carrier",
            "type": "string"
        },
        {
            "name": "trackingNumber",
            "baseName": "tracking_number",
            "type": "string"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return ShippingRequest.attributeTypeMap;
    }
}
