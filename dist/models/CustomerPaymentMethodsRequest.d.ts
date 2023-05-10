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
import { PaymentMethodCardRequest } from './PaymentMethodCardRequest';
import { PaymentMethodCashRequest } from './PaymentMethodCashRequest';
import { PaymentMethodSpeiRequest } from './PaymentMethodSpeiRequest';
/**
 * @type CustomerPaymentMethodsRequest
 *
 * @export
 */
export type CustomerPaymentMethodsRequest = PaymentMethodCardRequest | PaymentMethodCashRequest | PaymentMethodSpeiRequest;
export declare function CustomerPaymentMethodsRequestFromJSON(json: any): CustomerPaymentMethodsRequest;
export declare function CustomerPaymentMethodsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPaymentMethodsRequest;
export declare function CustomerPaymentMethodsRequestToJSON(value?: CustomerPaymentMethodsRequest | null): any;
