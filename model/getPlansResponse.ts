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
import { PlanResponse } from './planResponse';

export class GetPlansResponse {
    /**
    * Object type, in this case is list
    */
    'object': string;
    /**
    * Indicates if there are more pages to be requested
    */
    'hasMore': boolean;
    /**
    * URL of the next page.
    */
    'nextPageUrl'?: string | null;
    /**
    * Url of the previous page.
    */
    'previousPageUrl'?: string | null;
    'data'?: Array<PlanResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "boolean"
        },
        {
            "name": "nextPageUrl",
            "baseName": "next_page_url",
            "type": "string"
        },
        {
            "name": "previousPageUrl",
            "baseName": "previous_page_url",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PlanResponse>"
        }    ];

    static getAttributeTypeMap() {
        return GetPlansResponse.attributeTypeMap;
    }
}

