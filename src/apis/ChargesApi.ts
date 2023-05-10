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


import * as runtime from '../runtime';
import type {
  ChargeOrderResponse,
  ChargeRequest,
  ModelError,
} from '../models';
import {
    ChargeOrderResponseFromJSON,
    ChargeOrderResponseToJSON,
    ChargeRequestFromJSON,
    ChargeRequestToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models';

export interface OrdersCreateChargeRequest {
    id: string;
    chargeRequest: ChargeRequest;
    acceptLanguage?: OrdersCreateChargeAcceptLanguageEnum;
    xChildCompanyId?: string;
}

/**
 * 
 */
export class ChargesApi extends runtime.BaseAPI {

    /**
     * Create charge for an existing orden
     * Create charge
     */
    async ordersCreateChargeRaw(requestParameters: OrdersCreateChargeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChargeOrderResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ordersCreateCharge.');
        }

        if (requestParameters.chargeRequest === null || requestParameters.chargeRequest === undefined) {
            throw new runtime.RequiredError('chargeRequest','Required parameter requestParameters.chargeRequest was null or undefined when calling ordersCreateCharge.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (requestParameters.xChildCompanyId !== undefined && requestParameters.xChildCompanyId !== null) {
            headerParameters['X-Child-Company-Id'] = String(requestParameters.xChildCompanyId);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/orders/{id}/charges`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChargeRequestToJSON(requestParameters.chargeRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChargeOrderResponseFromJSON(jsonValue));
    }

    /**
     * Create charge for an existing orden
     * Create charge
     */
    async ordersCreateCharge(requestParameters: OrdersCreateChargeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChargeOrderResponse> {
        const response = await this.ordersCreateChargeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const OrdersCreateChargeAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type OrdersCreateChargeAcceptLanguageEnum = typeof OrdersCreateChargeAcceptLanguageEnum[keyof typeof OrdersCreateChargeAcceptLanguageEnum];
