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

export class PaymentMethodCard {
    'type'?: string;
    'object': string;
    'accountType'?: string;
    'authCode'?: string;
    'brand'?: string;
    'country'?: string;
    'expMonth'?: string;
    'expYear'?: string;
    'fraudIndicators'?: Array<any>;
    'issuer'?: string;
    'last4'?: string;
    'name'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "accountType",
            "baseName": "account_type",
            "type": "string"
        },
        {
            "name": "authCode",
            "baseName": "auth_code",
            "type": "string"
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "expMonth",
            "baseName": "exp_month",
            "type": "string"
        },
        {
            "name": "expYear",
            "baseName": "exp_year",
            "type": "string"
        },
        {
            "name": "fraudIndicators",
            "baseName": "fraud_indicators",
            "type": "Array<any>"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentMethodCard.attributeTypeMap;
    }
}
