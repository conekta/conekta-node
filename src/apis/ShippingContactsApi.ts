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
  CustomerShippingContacts,
  CustomerShippingContactsResponse,
  CustomerUpdateShippingContacts,
  ModelError,
} from '../models';
import {
    CustomerShippingContactsFromJSON,
    CustomerShippingContactsToJSON,
    CustomerShippingContactsResponseFromJSON,
    CustomerShippingContactsResponseToJSON,
    CustomerUpdateShippingContactsFromJSON,
    CustomerUpdateShippingContactsToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
} from '../models';

export interface CreateCustomerShippingContactsRequest {
    id: string;
    customerShippingContacts: CustomerShippingContacts;
    acceptLanguage?: CreateCustomerShippingContactsAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface DeleteCustomerShippingContactsRequest {
    id: string;
    shippingContactsId: string;
    acceptLanguage?: DeleteCustomerShippingContactsAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface UpdateCustomerShippingContactsRequest {
    id: string;
    shippingContactsId: string;
    customerUpdateShippingContacts: CustomerUpdateShippingContacts;
    acceptLanguage?: UpdateCustomerShippingContactsAcceptLanguageEnum;
    xChildCompanyId?: string;
}

/**
 * 
 */
export class ShippingContactsApi extends runtime.BaseAPI {

    /**
     * Create a shipping contacts for a customer.
     * Create a shipping contacts
     */
    async createCustomerShippingContactsRaw(requestParameters: CreateCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerShippingContactsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createCustomerShippingContacts.');
        }

        if (requestParameters.customerShippingContacts === null || requestParameters.customerShippingContacts === undefined) {
            throw new runtime.RequiredError('customerShippingContacts','Required parameter requestParameters.customerShippingContacts was null or undefined when calling createCustomerShippingContacts.');
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
            path: `/customers/{id}/shipping_contacts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerShippingContactsToJSON(requestParameters.customerShippingContacts),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerShippingContactsResponseFromJSON(jsonValue));
    }

    /**
     * Create a shipping contacts for a customer.
     * Create a shipping contacts
     */
    async createCustomerShippingContacts(requestParameters: CreateCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerShippingContactsResponse> {
        const response = await this.createCustomerShippingContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete shipping contact that corresponds to a customer ID.
     * Delete shipping contacts
     */
    async deleteCustomerShippingContactsRaw(requestParameters: DeleteCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerShippingContactsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteCustomerShippingContacts.');
        }

        if (requestParameters.shippingContactsId === null || requestParameters.shippingContactsId === undefined) {
            throw new runtime.RequiredError('shippingContactsId','Required parameter requestParameters.shippingContactsId was null or undefined when calling deleteCustomerShippingContacts.');
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
            path: `/customers/{id}/shipping_contacts/{shipping_contacts_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"shipping_contacts_id"}}`, encodeURIComponent(String(requestParameters.shippingContactsId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerShippingContactsResponseFromJSON(jsonValue));
    }

    /**
     * Delete shipping contact that corresponds to a customer ID.
     * Delete shipping contacts
     */
    async deleteCustomerShippingContacts(requestParameters: DeleteCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerShippingContactsResponse> {
        const response = await this.deleteCustomerShippingContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update shipping contact that corresponds to a customer ID.
     * Update shipping contacts
     */
    async updateCustomerShippingContactsRaw(requestParameters: UpdateCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerShippingContactsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateCustomerShippingContacts.');
        }

        if (requestParameters.shippingContactsId === null || requestParameters.shippingContactsId === undefined) {
            throw new runtime.RequiredError('shippingContactsId','Required parameter requestParameters.shippingContactsId was null or undefined when calling updateCustomerShippingContacts.');
        }

        if (requestParameters.customerUpdateShippingContacts === null || requestParameters.customerUpdateShippingContacts === undefined) {
            throw new runtime.RequiredError('customerUpdateShippingContacts','Required parameter requestParameters.customerUpdateShippingContacts was null or undefined when calling updateCustomerShippingContacts.');
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
            path: `/customers/{id}/shipping_contacts/{shipping_contacts_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"shipping_contacts_id"}}`, encodeURIComponent(String(requestParameters.shippingContactsId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerUpdateShippingContactsToJSON(requestParameters.customerUpdateShippingContacts),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerShippingContactsResponseFromJSON(jsonValue));
    }

    /**
     * Update shipping contact that corresponds to a customer ID.
     * Update shipping contacts
     */
    async updateCustomerShippingContacts(requestParameters: UpdateCustomerShippingContactsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerShippingContactsResponse> {
        const response = await this.updateCustomerShippingContactsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreateCustomerShippingContactsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type CreateCustomerShippingContactsAcceptLanguageEnum = typeof CreateCustomerShippingContactsAcceptLanguageEnum[keyof typeof CreateCustomerShippingContactsAcceptLanguageEnum];
/**
 * @export
 */
export const DeleteCustomerShippingContactsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type DeleteCustomerShippingContactsAcceptLanguageEnum = typeof DeleteCustomerShippingContactsAcceptLanguageEnum[keyof typeof DeleteCustomerShippingContactsAcceptLanguageEnum];
/**
 * @export
 */
export const UpdateCustomerShippingContactsAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type UpdateCustomerShippingContactsAcceptLanguageEnum = typeof UpdateCustomerShippingContactsAcceptLanguageEnum[keyof typeof UpdateCustomerShippingContactsAcceptLanguageEnum];
