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


// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodBankTransfer } from './payment-method-bank-transfer';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodBnplPayment } from './payment-method-bnpl-payment';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodCard } from './payment-method-card';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodCash } from './payment-method-cash';

/**
 * @type ChargeResponsePaymentMethod
 * @export
 */
export type ChargeResponsePaymentMethod = { object: 'bank_transfer_payment' } & PaymentMethodBankTransfer | { object: 'bnpl_payment' } & PaymentMethodBnplPayment | { object: 'card_payment' } & PaymentMethodCard | { object: 'cash_payment' } & PaymentMethodCash;


