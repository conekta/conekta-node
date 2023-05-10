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

export class ProductOrderResponse {
    'antifraudInfo'?: { [key: string]: any; };
    /**
    * The brand of the item.
    */
    'brand'?: string;
    /**
    * Short description of the item
    */
    'description'?: string;
    /**
    * It is a key/value hash that can hold custom fields. Maximum 100 elements and allows special characters.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The name of the item. It will be displayed in the order.
    */
    'name': string;
    /**
    * The quantity of the item in the order.
    */
    'quantity': number;
    /**
    * The stock keeping unit for the item. It is used to identify the item in the order.
    */
    'sku'?: string;
    /**
    * List of tags for the item. It is used to identify the item in the order.
    */
    'tags'?: Array<string>;
    /**
    * The price of the item in cents.
    */
    'unitPrice': number;
    'id'?: string;
    'object'?: string;
    'parentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "antifraudInfo",
            "baseName": "antifraud_info",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "unitPrice",
            "baseName": "unit_price",
            "type": "number"
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
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProductOrderResponse.attributeTypeMap;
    }
}

