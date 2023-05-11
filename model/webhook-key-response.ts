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



/**
 * webhook keys model
 * @export
 * @interface WebhookKeyResponse
 */
export interface WebhookKeyResponse {
    /**
     * Indicates if the webhook key is active
     * @type {boolean}
     * @memberof WebhookKeyResponse
     */
    'active'?: boolean;
    /**
     * Unix timestamp in seconds with the creation date of the webhook key
     * @type {number}
     * @memberof WebhookKeyResponse
     */
    'created_at'?: number;
    /**
     * Unix timestamp in seconds with the deactivation date of the webhook key
     * @type {number}
     * @memberof WebhookKeyResponse
     */
    'deactivated_at'?: number | null;
    /**
     * Unique identifier of the webhook key
     * @type {string}
     * @memberof WebhookKeyResponse
     */
    'id'?: string;
    /**
     * Indicates if the webhook key is in live mode
     * @type {boolean}
     * @memberof WebhookKeyResponse
     */
    'livemode'?: boolean;
    /**
     * Object name, value is webhook_key
     * @type {string}
     * @memberof WebhookKeyResponse
     */
    'object'?: string;
}

