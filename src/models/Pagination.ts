/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * pagination metadata
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * Object type, in this case is list
     * @type {string}
     * @memberof Pagination
     */
    object: string;
    /**
     * Indicates if there are more pages to be requested
     * @type {boolean}
     * @memberof Pagination
     */
    hasMore: boolean;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "object" in value;
    isInstance = isInstance && "hasMore" in value;

    return isInstance;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'object': json['object'],
        'hasMore': json['has_more'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'object': value.object,
        'has_more': value.hasMore,
    };
}

