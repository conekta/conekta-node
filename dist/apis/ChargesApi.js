"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCreateChargeAcceptLanguageEnum = exports.ChargesApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class ChargesApi extends runtime.BaseAPI {
    /**
     * Create charge for an existing orden
     * Create charge
     */
    ordersCreateChargeRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling ordersCreateCharge.');
            }
            if (requestParameters.chargeRequest === null || requestParameters.chargeRequest === undefined) {
                throw new runtime.RequiredError('chargeRequest', 'Required parameter requestParameters.chargeRequest was null or undefined when calling ordersCreateCharge.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
                headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
            }
            if (requestParameters.xChildCompanyId !== undefined && requestParameters.xChildCompanyId !== null) {
                headerParameters['X-Child-Company-Id'] = String(requestParameters.xChildCompanyId);
            }
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("bearerAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/orders/{id}/charges`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ChargeRequestToJSON)(requestParameters.chargeRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ChargeOrderResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Create charge for an existing orden
     * Create charge
     */
    ordersCreateCharge(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.ordersCreateChargeRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ChargesApi = ChargesApi;
/**
 * @export
 */
exports.OrdersCreateChargeAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
