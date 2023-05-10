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
import * as runtime from '../runtime';
import { GetTransfersResponseFromJSON, TransferResponseFromJSON, } from '../models';
/**
 *
 */
export class TransfersApi extends runtime.BaseAPI {
    /**
     * Get the details of a Transfer
     * Get Transfer
     */
    getTransferRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getTransfer.');
            }
            const queryParameters = {};
            const headerParameters = {};
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
                path: `/transfers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => TransferResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get the details of a Transfer
     * Get Transfer
     */
    getTransfer(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransferRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get transfers details in the form of a list
     * Get a list of transfers
     */
    getTransfersRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.search !== undefined) {
                queryParameters['search'] = requestParameters.search;
            }
            if (requestParameters.next !== undefined) {
                queryParameters['next'] = requestParameters.next;
            }
            if (requestParameters.previous !== undefined) {
                queryParameters['previous'] = requestParameters.previous;
            }
            const headerParameters = {};
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
                path: `/transfers`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GetTransfersResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get transfers details in the form of a list
     * Get a list of transfers
     */
    getTransfers(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTransfersRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
/**
 * @export
 */
export const GetTransferAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
/**
 * @export
 */
export const GetTransfersAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
