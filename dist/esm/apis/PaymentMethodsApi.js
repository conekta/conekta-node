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
import { CreateCustomerPaymentMethodsRequestToJSON, CreateCustomerPaymentMethodsResponseFromJSON, GetPaymentMethodResponseFromJSON, UpdateCustomerPaymentMethodsResponseFromJSON, UpdatePaymentMethodsToJSON, } from '../models';
/**
 *
 */
export class PaymentMethodsApi extends runtime.BaseAPI {
    /**
     * Create a payment method for a customer.
     * Create Payment Method
     */
    createCustomerPaymentMethodsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling createCustomerPaymentMethods.');
            }
            if (requestParameters.createCustomerPaymentMethodsRequest === null || requestParameters.createCustomerPaymentMethodsRequest === undefined) {
                throw new runtime.RequiredError('createCustomerPaymentMethodsRequest', 'Required parameter requestParameters.createCustomerPaymentMethodsRequest was null or undefined when calling createCustomerPaymentMethods.');
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
                path: `/customers/{id}/payment_sources`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: CreateCustomerPaymentMethodsRequestToJSON(requestParameters.createCustomerPaymentMethodsRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => CreateCustomerPaymentMethodsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Create a payment method for a customer.
     * Create Payment Method
     */
    createCustomerPaymentMethods(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createCustomerPaymentMethodsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Delete an existing payment method
     * Delete Payment Method
     */
    deleteCustomerPaymentMethodsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling deleteCustomerPaymentMethods.');
            }
            if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling deleteCustomerPaymentMethods.');
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
                path: `/customers/{id}/payment_sources/{payment_method_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"payment_method_id"}}`, encodeURIComponent(String(requestParameters.paymentMethodId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCustomerPaymentMethodsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Delete an existing payment method
     * Delete Payment Method
     */
    deleteCustomerPaymentMethods(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteCustomerPaymentMethodsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get a list of Payment Methods
     * Get Payment Methods
     */
    getCustomerPaymentMethodsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling getCustomerPaymentMethods.');
            }
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.next !== undefined) {
                queryParameters['next'] = requestParameters.next;
            }
            if (requestParameters.previous !== undefined) {
                queryParameters['previous'] = requestParameters.previous;
            }
            if (requestParameters.search !== undefined) {
                queryParameters['search'] = requestParameters.search;
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
                path: `/customers/{id}/payment_sources`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => GetPaymentMethodResponseFromJSON(jsonValue));
        });
    }
    /**
     * Get a list of Payment Methods
     * Get Payment Methods
     */
    getCustomerPaymentMethods(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCustomerPaymentMethodsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Gets a payment Method that corresponds to a customer ID.
     * Update Payment Method
     */
    updateCustomerPaymentMethodsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.id === null || requestParameters.id === undefined) {
                throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling updateCustomerPaymentMethods.');
            }
            if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
                throw new runtime.RequiredError('paymentMethodId', 'Required parameter requestParameters.paymentMethodId was null or undefined when calling updateCustomerPaymentMethods.');
            }
            if (requestParameters.updatePaymentMethods === null || requestParameters.updatePaymentMethods === undefined) {
                throw new runtime.RequiredError('updatePaymentMethods', 'Required parameter requestParameters.updatePaymentMethods was null or undefined when calling updateCustomerPaymentMethods.');
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
                path: `/customers/{id}/payment_sources/{payment_method_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"payment_method_id"}}`, encodeURIComponent(String(requestParameters.paymentMethodId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: UpdatePaymentMethodsToJSON(requestParameters.updatePaymentMethods),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCustomerPaymentMethodsResponseFromJSON(jsonValue));
        });
    }
    /**
     * Gets a payment Method that corresponds to a customer ID.
     * Update Payment Method
     */
    updateCustomerPaymentMethods(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.updateCustomerPaymentMethodsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
/**
 * @export
 */
export const CreateCustomerPaymentMethodsOperationAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
/**
 * @export
 */
export const DeleteCustomerPaymentMethodsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
/**
 * @export
 */
export const GetCustomerPaymentMethodsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
/**
 * @export
 */
export const UpdateCustomerPaymentMethodsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
};
