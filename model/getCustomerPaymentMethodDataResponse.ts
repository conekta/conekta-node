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
import { PaymentMethodCardResponse } from './paymentMethodCardResponse';
import { PaymentMethodCashResponse } from './paymentMethodCashResponse';
import { PaymentMethodSpeiRecurrent } from './paymentMethodSpeiRecurrent';

export class GetCustomerPaymentMethodDataResponse {
    'type': string;
    'id': string;
    'object': string;
    'createdAt': number;
    'parentId'?: string;
    'reference'?: string;
    'barcode'?: string;
    'barcodeUrl'?: string;
    'expiresAt'?: string;
    'provider'?: string;
    'last4'?: string;
    'bin'?: string;
    'cardType'?: string;
    'expMonth'?: string;
    'expYear'?: string;
    'brand'?: string;
    'name'?: string;
    '_default'?: boolean;
    'visibleOnCheckout'?: boolean;
    'paymentSourceStatus'?: string;

    static discriminator: string | undefined = "type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "number"
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "barcode",
            "baseName": "barcode",
            "type": "string"
        },
        {
            "name": "barcodeUrl",
            "baseName": "barcode_url",
            "type": "string"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string"
        },
        {
            "name": "last4",
            "baseName": "last4",
            "type": "string"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "cardType",
            "baseName": "card_type",
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
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean"
        },
        {
            "name": "visibleOnCheckout",
            "baseName": "visible_on_checkout",
            "type": "boolean"
        },
        {
            "name": "paymentSourceStatus",
            "baseName": "payment_source_status",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetCustomerPaymentMethodDataResponse.attributeTypeMap;
    }
}

