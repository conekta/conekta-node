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
 * an updated webhook
 * @export
 * @interface WebhookUpdateRequest
 */
export interface WebhookUpdateRequest {
    /**
     * Here you must place the URL of your Webhook remember that you must program what you will do with the events received. Also do not forget to handle the HTTPS protocol for greater security.
     * @type {string}
     * @memberof WebhookUpdateRequest
     */
    url: string;
    /**
     * It is a value that allows to decide if the events will be synchronous or asynchronous. We recommend asynchronous = false
     * @type {boolean}
     * @memberof WebhookUpdateRequest
     */
    synchronous?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof WebhookUpdateRequest
     */
    subscribedEvents?: Array<string>;
}
/**
 * Check if a given object implements the WebhookUpdateRequest interface.
 */
export declare function instanceOfWebhookUpdateRequest(value: object): boolean;
export declare function WebhookUpdateRequestFromJSON(json: any): WebhookUpdateRequest;
export declare function WebhookUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookUpdateRequest;
export declare function WebhookUpdateRequestToJSON(value?: WebhookUpdateRequest | null): any;
