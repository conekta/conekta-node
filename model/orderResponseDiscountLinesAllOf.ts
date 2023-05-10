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
import { DiscountLinesDataResponse } from './discountLinesDataResponse';

export class OrderResponseDiscountLinesAllOf {
    'data'?: Array<DiscountLinesDataResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<DiscountLinesDataResponse>"
        }    ];

    static getAttributeTypeMap() {
        return OrderResponseDiscountLinesAllOf.attributeTypeMap;
    }
}
