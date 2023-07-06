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


// May contain unused imports in some cases
// @ts-ignore
import { BalanceCommonField } from './balance-common-field';

/**
 * balance model
 * @export
 * @interface BalanceResponse
 */
export interface BalanceResponse {
    /**
     * The balance\'s available
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'available'?: Array<BalanceCommonField>;
    /**
     * The balance\'s cashout retention amount
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'cashout_retention_amount'?: Array<BalanceCommonField>;
    /**
     * The balance\'s conekta retention
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'conekta_retention'?: Array<BalanceCommonField>;
    /**
     * The balance\'s gateway
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'gateway'?: Array<BalanceCommonField>;
    /**
     * The balance\'s pending
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'pending'?: Array<BalanceCommonField>;
    /**
     * The balance\'s retained
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'retained'?: Array<BalanceCommonField>;
    /**
     * The balance\'s retention amount
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'retention_amount'?: Array<BalanceCommonField>;
    /**
     * The balance\'s target collateral amount
     * @type {object}
     * @memberof BalanceResponse
     */
    'target_collateral_amount'?: object;
    /**
     * The balance\'s target retention amount
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'target_retention_amount'?: Array<BalanceCommonField>;
    /**
     * The balance\'s temporarily retained
     * @type {Array<BalanceCommonField>}
     * @memberof BalanceResponse
     */
    'temporarily_retained'?: Array<BalanceCommonField>;
}
