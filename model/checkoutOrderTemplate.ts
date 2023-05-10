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
import { Product } from './product';

/**
* It maintains the attributes with which the order will be created when receiving a new payment.
*/
export class CheckoutOrderTemplate {
    /**
    * It is the currency in which the order will be created. It must be a valid ISO 4217 currency code.
    */
    'currency': string;
    /**
    * They are the products to buy. Each contains the \"unit price\" and \"quantity\" parameters that are used to calculate the total amount of the order.
    */
    'lineItems': Array<Product>;
    'metadata'?: { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "line_items",
            "type": "Array<Product>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutOrderTemplate.attributeTypeMap;
    }
}
