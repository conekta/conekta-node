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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CreateCustomerFiscalEntitiesResponse } from '../model/createCustomerFiscalEntitiesResponse';
import { Customer } from '../model/customer';
import { CustomerFiscalEntitiesRequest } from '../model/customerFiscalEntitiesRequest';
import { CustomerResponse } from '../model/customerResponse';
import { CustomerUpdateFiscalEntitiesRequest } from '../model/customerUpdateFiscalEntitiesRequest';
import { CustomersResponse } from '../model/customersResponse';
import { ModelError } from '../model/modelError';
import { UpdateCustomer } from '../model/updateCustomer';
import { UpdateCustomerFiscalEntitiesResponse } from '../model/updateCustomerFiscalEntitiesResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.conekta.io';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum CustomersApiApiKeys {
}

export class CustomersApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearerAuth': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: CustomersApiApiKeys, value: string) {
        (this.authentications as any)[CustomersApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * The purpose of business is to create and keep a customer, you will learn what elements you need to create a customer. Remember the credit and debit card tokenization process: [https://developers.conekta.com/page/web-checkout-tokenizer](https://developers.conekta.com/page/web-checkout-tokenizer) 
     * @summary Create customer
     * @param customer requested field for customer
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async createCustomer (customer: Customer, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }> {
        const localVarPath = this.basePath + '/customers';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'customer' is not null or undefined
        if (customer === null || customer === undefined) {
            throw new Error('Required parameter customer was null or undefined when calling createCustomer.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(customer, "Customer")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CustomerResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create Fiscal entity resource that corresponds to a customer ID.
     * @summary Create Fiscal Entity
     * @param id Identifier of the resource
     * @param customerFiscalEntitiesRequest requested field for customer fiscal entities
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async createCustomerFiscalEntities (id: string, customerFiscalEntitiesRequest: CustomerFiscalEntitiesRequest, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateCustomerFiscalEntitiesResponse;  }> {
        const localVarPath = this.basePath + '/customers/{id}/fiscal_entities'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling createCustomerFiscalEntities.');
        }

        // verify required parameter 'customerFiscalEntitiesRequest' is not null or undefined
        if (customerFiscalEntitiesRequest === null || customerFiscalEntitiesRequest === undefined) {
            throw new Error('Required parameter customerFiscalEntitiesRequest was null or undefined when calling createCustomerFiscalEntities.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(customerFiscalEntitiesRequest, "CustomerFiscalEntitiesRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateCustomerFiscalEntitiesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateCustomerFiscalEntitiesResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Deleted a customer resource that corresponds to a customer ID.
     * @summary Delete Customer
     * @param id Identifier of the resource
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async deleteCustomerById (id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }> {
        const localVarPath = this.basePath + '/customers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteCustomerById.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CustomerResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Gets a customer resource that corresponds to a customer ID.
     * @summary Get Customer
     * @param id Identifier of the resource
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async getCustomerById (id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }> {
        const localVarPath = this.basePath + '/customers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getCustomerById.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CustomerResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * The purpose of business is to create and maintain a client, you will learn what elements you need to obtain a list of clients, which can be paged.
     * @summary Get a list of customers
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     * @param limit The numbers of items to return, the maximum value is 250
     * @param search General order search, e.g. by mail, reference etc.
     * @param next next page
     * @param previous previous page
     */
    public async getCustomers (acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustomersResponse;  }> {
        const localVarPath = this.basePath + '/customers';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (search !== undefined) {
            localVarQueryParameters['search'] = ObjectSerializer.serialize(search, "string");
        }

        if (next !== undefined) {
            localVarQueryParameters['next'] = ObjectSerializer.serialize(next, "string");
        }

        if (previous !== undefined) {
            localVarQueryParameters['previous'] = ObjectSerializer.serialize(previous, "string");
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CustomersResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CustomersResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * You can update customer-related data
     * @summary Update customer
     * @param id Identifier of the resource
     * @param updateCustomer requested field for customer
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async updateCustomer (id: string, updateCustomer: UpdateCustomer, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }> {
        const localVarPath = this.basePath + '/customers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCustomer.');
        }

        // verify required parameter 'updateCustomer' is not null or undefined
        if (updateCustomer === null || updateCustomer === undefined) {
            throw new Error('Required parameter updateCustomer was null or undefined when calling updateCustomer.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateCustomer, "UpdateCustomer")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CustomerResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CustomerResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Update Fiscal Entity resource that corresponds to a customer ID.
     * @summary Update  Fiscal Entity
     * @param id Identifier of the resource
     * @param fiscalEntitiesId identifier
     * @param customerUpdateFiscalEntitiesRequest requested field for customer update fiscal entities
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async updateCustomerFiscalEntities (id: string, fiscalEntitiesId: string, customerUpdateFiscalEntitiesRequest: CustomerUpdateFiscalEntitiesRequest, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpdateCustomerFiscalEntitiesResponse;  }> {
        const localVarPath = this.basePath + '/customers/{id}/fiscal_entities/{fiscal_entities_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'fiscal_entities_id' + '}', encodeURIComponent(String(fiscalEntitiesId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.conekta-v2.1.0+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateCustomerFiscalEntities.');
        }

        // verify required parameter 'fiscalEntitiesId' is not null or undefined
        if (fiscalEntitiesId === null || fiscalEntitiesId === undefined) {
            throw new Error('Required parameter fiscalEntitiesId was null or undefined when calling updateCustomerFiscalEntities.');
        }

        // verify required parameter 'customerUpdateFiscalEntitiesRequest' is not null or undefined
        if (customerUpdateFiscalEntitiesRequest === null || customerUpdateFiscalEntitiesRequest === undefined) {
            throw new Error('Required parameter customerUpdateFiscalEntitiesRequest was null or undefined when calling updateCustomerFiscalEntities.');
        }

        localVarHeaderParams['Accept-Language'] = ObjectSerializer.serialize(acceptLanguage, "'es' | 'en'");
        localVarHeaderParams['X-Child-Company-Id'] = ObjectSerializer.serialize(xChildCompanyId, "string");
        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(customerUpdateFiscalEntitiesRequest, "CustomerUpdateFiscalEntitiesRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: UpdateCustomerFiscalEntitiesResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UpdateCustomerFiscalEntitiesResponse");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
