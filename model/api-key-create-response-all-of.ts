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
 * 
 * @export
 * @interface ApiKeyCreateResponseAllOf
 */
export interface ApiKeyCreateResponseAllOf {
    /**
     * It is occupied as a user when authenticated with basic authentication, with a blank password. This value will only appear once, in the request to create a new key
     * @type {string}
     * @memberof ApiKeyCreateResponseAllOf
     */
    'authentication_token'?: string;
}

