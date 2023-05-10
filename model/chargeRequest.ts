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
import { ChargeRequestPaymentMethod } from './chargeRequestPaymentMethod';

/**
* The charges to be made
*/
export class ChargeRequest {
    'amount'?: number;
    /**
    * How many months without interest to apply, it can be 3, 6, 9, 12 or 18
    */
    'monthlyInstallments'?: number;
    'paymentMethod': ChargeRequestPaymentMethod;
    /**
    * Custom reference to add to the charge
    */
    'referenceId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "monthlyInstallments",
            "baseName": "monthly_installments",
            "type": "number"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "ChargeRequestPaymentMethod"
        },
        {
            "name": "referenceId",
            "baseName": "reference_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargeRequest.attributeTypeMap;
    }
}
