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
  CreateCustomerFiscalEntitiesResponse,
  Customer,
  CustomerFiscalEntitiesRequest,
  CustomerResponse,
  CustomerUpdateFiscalEntitiesRequest,
  CustomersResponse,
  ModelError,
  UpdateCustomer,
  UpdateCustomerFiscalEntitiesResponse,
} from '../models';
import {
    CreateCustomerFiscalEntitiesResponseFromJSON,
    CreateCustomerFiscalEntitiesResponseToJSON,
    CustomerFromJSON,
    CustomerToJSON,
    CustomerFiscalEntitiesRequestFromJSON,
    CustomerFiscalEntitiesRequestToJSON,
    CustomerResponseFromJSON,
    CustomerResponseToJSON,
    CustomerUpdateFiscalEntitiesRequestFromJSON,
    CustomerUpdateFiscalEntitiesRequestToJSON,
    CustomersResponseFromJSON,
    CustomersResponseToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    UpdateCustomerFromJSON,
    UpdateCustomerToJSON,
    UpdateCustomerFiscalEntitiesResponseFromJSON,
    UpdateCustomerFiscalEntitiesResponseToJSON,
} from '../models';

export interface CreateCustomerRequest {
    customer: Customer;
    acceptLanguage?: CreateCustomerAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface CreateCustomerFiscalEntitiesRequest {
    id: string;
    customerFiscalEntitiesRequest: CustomerFiscalEntitiesRequest;
    acceptLanguage?: CreateCustomerFiscalEntitiesAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface DeleteCustomerByIdRequest {
    id: string;
    acceptLanguage?: DeleteCustomerByIdAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface GetCustomerByIdRequest {
    id: string;
    acceptLanguage?: GetCustomerByIdAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface GetCustomersRequest {
    acceptLanguage?: GetCustomersAcceptLanguageEnum;
    xChildCompanyId?: string;
    limit?: number;
    search?: string;
    next?: string;
    previous?: string;
}

export interface UpdateCustomerRequest {
    id: string;
    updateCustomer: UpdateCustomer;
    acceptLanguage?: UpdateCustomerAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface UpdateCustomerFiscalEntitiesRequest {
    id: string;
    fiscalEntitiesId: string;
    customerUpdateFiscalEntitiesRequest: CustomerUpdateFiscalEntitiesRequest;
    acceptLanguage?: UpdateCustomerFiscalEntitiesAcceptLanguageEnum;
    xChildCompanyId?: string;
}

/**
 * 
 */
export class CustomersApi extends runtime.BaseAPI {

    /**
     * The purpose of business is to create and keep a customer, you will learn what elements you need to create a customer. Remember the credit and debit card tokenization process: [https://developers.conekta.com/page/web-checkout-tokenizer](https://developers.conekta.com/page/web-checkout-tokenizer) 
     * Create customer
     */
    async createCustomerRaw(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerResponse>> {
        if (requestParameters.customer === null || requestParameters.customer === undefined) {
            throw new runtime.RequiredError('customer','Required parameter requestParameters.customer was null or undefined when calling createCustomer.');
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
            path: `/customers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerToJSON(requestParameters.customer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerResponseFromJSON(jsonValue));
    }

    /**
     * The purpose of business is to create and keep a customer, you will learn what elements you need to create a customer. Remember the credit and debit card tokenization process: [https://developers.conekta.com/page/web-checkout-tokenizer](https://developers.conekta.com/page/web-checkout-tokenizer) 
     * Create customer
     */
    async createCustomer(requestParameters: CreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerResponse> {
        const response = await this.createCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Fiscal entity resource that corresponds to a customer ID.
     * Create Fiscal Entity
     */
    async createCustomerFiscalEntitiesRaw(requestParameters: CreateCustomerFiscalEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateCustomerFiscalEntitiesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createCustomerFiscalEntities.');
        }

        if (requestParameters.customerFiscalEntitiesRequest === null || requestParameters.customerFiscalEntitiesRequest === undefined) {
            throw new runtime.RequiredError('customerFiscalEntitiesRequest','Required parameter requestParameters.customerFiscalEntitiesRequest was null or undefined when calling createCustomerFiscalEntities.');
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
            path: `/customers/{id}/fiscal_entities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerFiscalEntitiesRequestToJSON(requestParameters.customerFiscalEntitiesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateCustomerFiscalEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Create Fiscal entity resource that corresponds to a customer ID.
     * Create Fiscal Entity
     */
    async createCustomerFiscalEntities(requestParameters: CreateCustomerFiscalEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateCustomerFiscalEntitiesResponse> {
        const response = await this.createCustomerFiscalEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deleted a customer resource that corresponds to a customer ID.
     * Delete Customer
     */
    async deleteCustomerByIdRaw(requestParameters: DeleteCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCustomerById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerResponseFromJSON(jsonValue));
    }

    /**
     * Deleted a customer resource that corresponds to a customer ID.
     * Delete Customer
     */
    async deleteCustomerById(requestParameters: DeleteCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerResponse> {
        const response = await this.deleteCustomerByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a customer resource that corresponds to a customer ID.
     * Get Customer
     */
    async getCustomerByIdRaw(requestParameters: GetCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCustomerById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

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
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerResponseFromJSON(jsonValue));
    }

    /**
     * Gets a customer resource that corresponds to a customer ID.
     * Get Customer
     */
    async getCustomerById(requestParameters: GetCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerResponse> {
        const response = await this.getCustomerByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The purpose of business is to create and maintain a client, you will learn what elements you need to obtain a list of clients, which can be paged.
     * Get a list of customers
     */
    async getCustomersRaw(requestParameters: GetCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomersResponse>> {
        const queryParameters: any = {};

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

        const headerParameters: runtime.HTTPHeaders = {};

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
            path: `/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomersResponseFromJSON(jsonValue));
    }

    /**
     * The purpose of business is to create and maintain a client, you will learn what elements you need to obtain a list of clients, which can be paged.
     * Get a list of customers
     */
    async getCustomers(requestParameters: GetCustomersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomersResponse> {
        const response = await this.getCustomersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * You can update customer-related data
     * Update customer
     */
    async updateCustomerRaw(requestParameters: UpdateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomer.');
        }

        if (requestParameters.updateCustomer === null || requestParameters.updateCustomer === undefined) {
            throw new runtime.RequiredError('updateCustomer','Required parameter requestParameters.updateCustomer was null or undefined when calling updateCustomer.');
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
            path: `/customers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCustomerToJSON(requestParameters.updateCustomer),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerResponseFromJSON(jsonValue));
    }

    /**
     * You can update customer-related data
     * Update customer
     */
    async updateCustomer(requestParameters: UpdateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerResponse> {
        const response = await this.updateCustomerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Fiscal Entity resource that corresponds to a customer ID.
     * Update  Fiscal Entity
     */
    async updateCustomerFiscalEntitiesRaw(requestParameters: UpdateCustomerFiscalEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateCustomerFiscalEntitiesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomerFiscalEntities.');
        }

        if (requestParameters.fiscalEntitiesId === null || requestParameters.fiscalEntitiesId === undefined) {
            throw new runtime.RequiredError('fiscalEntitiesId','Required parameter requestParameters.fiscalEntitiesId was null or undefined when calling updateCustomerFiscalEntities.');
        }

        if (requestParameters.customerUpdateFiscalEntitiesRequest === null || requestParameters.customerUpdateFiscalEntitiesRequest === undefined) {
            throw new runtime.RequiredError('customerUpdateFiscalEntitiesRequest','Required parameter requestParameters.customerUpdateFiscalEntitiesRequest was null or undefined when calling updateCustomerFiscalEntities.');
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
            path: `/customers/{id}/fiscal_entities/{fiscal_entities_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"fiscal_entities_id"}}`, encodeURIComponent(String(requestParameters.fiscalEntitiesId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerUpdateFiscalEntitiesRequestToJSON(requestParameters.customerUpdateFiscalEntitiesRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateCustomerFiscalEntitiesResponseFromJSON(jsonValue));
    }

    /**
     * Update Fiscal Entity resource that corresponds to a customer ID.
     * Update  Fiscal Entity
     */
    async updateCustomerFiscalEntities(requestParameters: UpdateCustomerFiscalEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateCustomerFiscalEntitiesResponse> {
        const response = await this.updateCustomerFiscalEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateCustomerAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type CreateCustomerAcceptLanguageEnum = typeof CreateCustomerAcceptLanguageEnum[keyof typeof CreateCustomerAcceptLanguageEnum];
/**
 * @export
 */
export const CreateCustomerFiscalEntitiesAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type CreateCustomerFiscalEntitiesAcceptLanguageEnum = typeof CreateCustomerFiscalEntitiesAcceptLanguageEnum[keyof typeof CreateCustomerFiscalEntitiesAcceptLanguageEnum];
/**
 * @export
 */
export const DeleteCustomerByIdAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type DeleteCustomerByIdAcceptLanguageEnum = typeof DeleteCustomerByIdAcceptLanguageEnum[keyof typeof DeleteCustomerByIdAcceptLanguageEnum];
/**
 * @export
 */
export const GetCustomerByIdAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type GetCustomerByIdAcceptLanguageEnum = typeof GetCustomerByIdAcceptLanguageEnum[keyof typeof GetCustomerByIdAcceptLanguageEnum];
/**
 * @export
 */
export const GetCustomersAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type GetCustomersAcceptLanguageEnum = typeof GetCustomersAcceptLanguageEnum[keyof typeof GetCustomersAcceptLanguageEnum];
/**
 * @export
 */
export const UpdateCustomerAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type UpdateCustomerAcceptLanguageEnum = typeof UpdateCustomerAcceptLanguageEnum[keyof typeof UpdateCustomerAcceptLanguageEnum];
/**
 * @export
 */
export const UpdateCustomerFiscalEntitiesAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type UpdateCustomerFiscalEntitiesAcceptLanguageEnum = typeof UpdateCustomerFiscalEntitiesAcceptLanguageEnum[keyof typeof UpdateCustomerFiscalEntitiesAcceptLanguageEnum];
