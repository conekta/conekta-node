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
 * @interface DeletedWhitelistRuleResponse
 */
export interface DeletedWhitelistRuleResponse {
    /**
     * Whitelist rule id
     * @type {string}
     * @memberof DeletedWhitelistRuleResponse
     */
    'id'?: string;
    /**
     * field used for whitelists rule deleted
     * @type {string}
     * @memberof DeletedWhitelistRuleResponse
     */
    'field'?: string;
    /**
     * value used for whitelists rule deleted
     * @type {string}
     * @memberof DeletedWhitelistRuleResponse
     */
    'value'?: string;
    /**
     * use an description for whitelisted rule
     * @type {string}
     * @memberof DeletedWhitelistRuleResponse
     */
    'description'?: string;
}
