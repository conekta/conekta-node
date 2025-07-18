/* tslint:disable */
/* eslint-disable */
/**
 * Conekta API
 * Conekta sdk
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: engineering@conekta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * log model
 * @export
 * @interface LogResponse
 */
export interface LogResponse {
    /**
     * 
     * @type {number}
     * @memberof LogResponse
     */
    'created_at': number;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'ip_address'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LogResponse
     */
    'livemode': boolean;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'loggable_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'loggable_type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'method'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'oauth_token_id'?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LogResponse
     */
    'query_string'?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'related'?: string;
    /**
     * 
     * @type {object}
     * @memberof LogResponse
     */
    'request_body'?: object;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogResponse
     */
    'request_headers'?: { [key: string]: string; };
    /**
     * 
     * @type {object}
     * @memberof LogResponse
     */
    'response_body'?: object;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogResponse
     */
    'response_headers'?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof LogResponse
     */
    'searchable_tags'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'user_account_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof LogResponse
     */
    'version'?: string;
}

