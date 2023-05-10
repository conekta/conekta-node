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
import { ModelError } from '../model/modelError';
import { OrderTaxRequest } from '../model/orderTaxRequest';
import { UpdateOrderTaxRequest } from '../model/updateOrderTaxRequest';
import { UpdateOrderTaxResponse } from '../model/updateOrderTaxResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.conekta.io';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TaxesApiApiKeys {
}

export class TaxesApi {
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

    public setApiKey(key: TaxesApiApiKeys, value: string) {
        (this.authentications as any)[TaxesApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Create new taxes for an existing orden
     * @summary Create Tax
     * @param id Identifier of the resource
     * @param orderTaxRequest requested field for a taxes
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async ordersCreateTaxes (id: string, orderTaxRequest: OrderTaxRequest, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }> {
        const localVarPath = this.basePath + '/orders/{id}/tax_lines'
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
            throw new Error('Required parameter id was null or undefined when calling ordersCreateTaxes.');
        }

        // verify required parameter 'orderTaxRequest' is not null or undefined
        if (orderTaxRequest === null || orderTaxRequest === undefined) {
            throw new Error('Required parameter orderTaxRequest was null or undefined when calling ordersCreateTaxes.');
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
            body: ObjectSerializer.serialize(orderTaxRequest, "OrderTaxRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UpdateOrderTaxResponse");
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
     * Delete taxes for an existing orden
     * @summary Delete Tax
     * @param id Identifier of the resource
     * @param taxId identifier
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async ordersDeleteTaxes (id: string, taxId: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }> {
        const localVarPath = this.basePath + '/orders/{id}/tax_lines/{tax_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'tax_id' + '}', encodeURIComponent(String(taxId)));
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
            throw new Error('Required parameter id was null or undefined when calling ordersDeleteTaxes.');
        }

        // verify required parameter 'taxId' is not null or undefined
        if (taxId === null || taxId === undefined) {
            throw new Error('Required parameter taxId was null or undefined when calling ordersDeleteTaxes.');
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
            return new Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UpdateOrderTaxResponse");
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
     * Update taxes for an existing orden
     * @summary Update Tax
     * @param id Identifier of the resource
     * @param taxId identifier
     * @param updateOrderTaxRequest requested field for taxes
     * @param acceptLanguage Use for knowing which language to use
     * @param xChildCompanyId In the case of a holding company, the company id of the child company to which will process the request.
     */
    public async ordersUpdateTaxes (id: string, taxId: string, updateOrderTaxRequest: UpdateOrderTaxRequest, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }> {
        const localVarPath = this.basePath + '/orders/{id}/tax_lines/{tax_id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'tax_id' + '}', encodeURIComponent(String(taxId)));
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
            throw new Error('Required parameter id was null or undefined when calling ordersUpdateTaxes.');
        }

        // verify required parameter 'taxId' is not null or undefined
        if (taxId === null || taxId === undefined) {
            throw new Error('Required parameter taxId was null or undefined when calling ordersUpdateTaxes.');
        }

        // verify required parameter 'updateOrderTaxRequest' is not null or undefined
        if (updateOrderTaxRequest === null || updateOrderTaxRequest === undefined) {
            throw new Error('Required parameter updateOrderTaxRequest was null or undefined when calling ordersUpdateTaxes.');
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
            body: ObjectSerializer.serialize(updateOrderTaxRequest, "UpdateOrderTaxRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: UpdateOrderTaxResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "UpdateOrderTaxResponse");
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
