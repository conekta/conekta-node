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

/**
* [Checkout](https://developers.conekta.com/reference/checkout) details 
*/
export class CheckoutRequest {
    /**
    * Are the payment methods available for this link
    */
    'allowedPaymentMethods': Array<string>;
    /**
    * Unix timestamp of checkout expiration
    */
    'expiresAt'?: number;
    /**
    * Redirection url back to the site in case of failed payment, applies only to HostedPayment.
    */
    'failureUrl'?: string;
    'monthlyInstallmentsEnabled'?: boolean;
    'monthlyInstallmentsOptions'?: Array<number>;
    /**
    * Reason for payment
    */
    'name'?: string;
    'onDemandEnabled'?: boolean;
    /**
    * Redirection url back to the site in case of successful payment, applies only to HostedPayment
    */
    'successUrl'?: string;
    /**
    * This field represents the type of checkout
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowed_payment_methods",
            "type": "Array<string>"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "failureUrl",
            "baseName": "failure_url",
            "type": "string"
        },
        {
            "name": "monthlyInstallmentsEnabled",
            "baseName": "monthly_installments_enabled",
            "type": "boolean"
        },
        {
            "name": "monthlyInstallmentsOptions",
            "baseName": "monthly_installments_options",
            "type": "Array<number>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "onDemandEnabled",
            "baseName": "on_demand_enabled",
            "type": "boolean"
        },
        {
            "name": "successUrl",
            "baseName": "success_url",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutRequest.attributeTypeMap;
    }
}
