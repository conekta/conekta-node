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
import type { DetailsError } from './DetailsError';
/**
 * err model
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {Array<DetailsError>}
     * @memberof ModelError
     */
    details?: Array<DetailsError>;
    /**
     * log id
     * @type {string}
     * @memberof ModelError
     */
    logId?: string | null;
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    object?: string;
}
/**
 * Check if a given object implements the ModelError interface.
 */
export declare function instanceOfModelError(value: object): boolean;
export declare function ModelErrorFromJSON(json: any): ModelError;
export declare function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
export declare function ModelErrorToJSON(value?: ModelError | null): any;
