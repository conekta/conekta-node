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

export class TokenResponseCheckout {
    'allowedPaymentMethods'?: Array<string>;
    /**
    * Indicates if the checkout can not expire.
    */
    'canNotExpire'?: boolean;
    'emailsSent'?: number;
    'excludeCardNetworks'?: Array<string>;
    /**
    * Date and time when the checkout expires.
    */
    'expiresAt'?: number;
    /**
    * URL to redirect the customer to if the payment process fails.
    */
    'failureUrl'?: string;
    /**
    * Indicates if the checkout forces the 3DS flow.
    */
    'force3dsFlow'?: boolean;
    'id'?: string;
    'livemode'?: boolean;
    'metadata'?: { [key: string]: any; };
    /**
    * Indicates if the checkout allows monthly installments.
    */
    'monthlyInstallmentsEnabled'?: boolean;
    /**
    * List of monthly installments options.
    */
    'monthlyInstallmentsOptions'?: Array<number>;
    'name'?: string;
    'needsShippingContact'?: boolean;
    /**
    * Indicates the type of object, in this case checkout.
    */
    'object'?: string;
    /**
    * Indicates if the checkout allows on demand payments.
    */
    'onDemandEnabled'?: boolean;
    /**
    * Number of payments that have been paid.
    */
    'paidPaymentsCount'?: number;
    /**
    * Indicates if the checkout is recurrent.
    */
    'recurrent'?: boolean;
    'smsSent'?: number;
    /**
    * Date and time when the checkout starts.
    */
    'startsAt'?: number;
    /**
    * Status of the checkout.
    */
    'status'?: string;
    /**
    * URL to redirect the customer to after the payment process is completed.
    */
    'successUrl'?: string;
    /**
    * Type of checkout.
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
            "name": "canNotExpire",
            "baseName": "can_not_expire",
            "type": "boolean"
        },
        {
            "name": "emailsSent",
            "baseName": "emails_sent",
            "type": "number"
        },
        {
            "name": "excludeCardNetworks",
            "baseName": "exclude_card_networks",
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
            "name": "force3dsFlow",
            "baseName": "force_3ds_flow",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }"
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
            "name": "needsShippingContact",
            "baseName": "needs_shipping_contact",
            "type": "boolean"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "onDemandEnabled",
            "baseName": "on_demand_enabled",
            "type": "boolean"
        },
        {
            "name": "paidPaymentsCount",
            "baseName": "paid_payments_count",
            "type": "number"
        },
        {
            "name": "recurrent",
            "baseName": "recurrent",
            "type": "boolean"
        },
        {
            "name": "smsSent",
            "baseName": "sms_sent",
            "type": "number"
        },
        {
            "name": "startsAt",
            "baseName": "starts_at",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
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
        return TokenResponseCheckout.attributeTypeMap;
    }
}
