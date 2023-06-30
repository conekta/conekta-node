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
 * Company payout destination model
 * @export
 * @interface CompanyPayoutDestinationResponse
 */
export interface CompanyPayoutDestinationResponse {
    /**
     * The resource\'s type
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'object'?: CompanyPayoutDestinationResponseObjectEnum;
    /**
     * currency of the receiving account
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'currency'?: string;
    /**
     * Name of the account holder
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'account_holder_name'?: string;
    /**
     * Name of the bank
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'bank'?: string;
    /**
     * Type of the payout destination
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'type'?: CompanyPayoutDestinationResponseTypeEnum;
    /**
     * Account number of the receiving account
     * @type {string}
     * @memberof CompanyPayoutDestinationResponse
     */
    'account_number'?: string;
}

export const CompanyPayoutDestinationResponseObjectEnum = {
    payoutDestination: 'payout_destination'
} as const;

export type CompanyPayoutDestinationResponseObjectEnum = typeof CompanyPayoutDestinationResponseObjectEnum[keyof typeof CompanyPayoutDestinationResponseObjectEnum];
export const CompanyPayoutDestinationResponseTypeEnum = {
    bankAccount: 'bank_account'
} as const;

export type CompanyPayoutDestinationResponseTypeEnum = typeof CompanyPayoutDestinationResponseTypeEnum[keyof typeof CompanyPayoutDestinationResponseTypeEnum];


