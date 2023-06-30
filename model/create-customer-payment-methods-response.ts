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
import { PaymentMethodCardResponse } from './payment-method-card-response';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodCashResponse } from './payment-method-cash-response';
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodSpeiRecurrent } from './payment-method-spei-recurrent';

/**
 * @type CreateCustomerPaymentMethodsResponse
 * @export
 */
export type CreateCustomerPaymentMethodsResponse = { type: 'card' } & PaymentMethodCardResponse | { type: 'cash' } & PaymentMethodCashResponse | { type: 'oxxo_recurrent' } & PaymentMethodCashResponse | { type: 'spei_recurrent' } & PaymentMethodSpeiRecurrent;


