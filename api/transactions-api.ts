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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GetTransactionsResponse } from '../model';
// @ts-ignore
import { ModelError } from '../model';
// @ts-ignore
import { TransactionResponse } from '../model';
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export const TransactionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the details of a transaction
         * @summary Get transaction
         * @param {string} id Identifier of the resource
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction: async (id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTransaction', 'id', id)
            const localVarPath = `/transactions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (xChildCompanyId != null) {
                localVarHeaderParameter['X-Child-Company-Id'] = String(xChildCompanyId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get transaction details in the form of a list
         * @summary Get List transactions
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {string} [id] id of the object to be retrieved
         * @param {string} [chargeId] id of the charge used for filtering
         * @param {string} [type] type of the object to be retrieved
         * @param {string} [currency] currency of the object to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions: async (acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, next?: string, previous?: string, id?: string, chargeId?: string, type?: string, currency?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/transactions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }

            if (previous !== undefined) {
                localVarQueryParameter['previous'] = previous;
            }

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (chargeId !== undefined) {
                localVarQueryParameter['charge_id'] = chargeId;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (currency !== undefined) {
                localVarQueryParameter['currency'] = currency;
            }

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }

            if (xChildCompanyId != null) {
                localVarHeaderParameter['X-Child-Company-Id'] = String(xChildCompanyId);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TransactionsApi - functional programming interface
 * @export
 */
export const TransactionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TransactionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the details of a transaction
         * @summary Get transaction
         * @param {string} id Identifier of the resource
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransaction(id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransaction(id, acceptLanguage, xChildCompanyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get transaction details in the form of a list
         * @summary Get List transactions
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {string} [id] id of the object to be retrieved
         * @param {string} [chargeId] id of the charge used for filtering
         * @param {string} [type] type of the object to be retrieved
         * @param {string} [currency] currency of the object to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactions(acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, next?: string, previous?: string, id?: string, chargeId?: string, type?: string, currency?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactions(acceptLanguage, xChildCompanyId, limit, next, previous, id, chargeId, type, currency, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TransactionsApi - factory interface
 * @export
 */
export const TransactionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TransactionsApiFp(configuration)
    return {
        /**
         * Get the details of a transaction
         * @summary Get transaction
         * @param {string} id Identifier of the resource
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransaction(id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options?: any): AxiosPromise<TransactionResponse> {
            return localVarFp.getTransaction(id, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get transaction details in the form of a list
         * @summary Get List transactions
         * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {string} [id] id of the object to be retrieved
         * @param {string} [chargeId] id of the charge used for filtering
         * @param {string} [type] type of the object to be retrieved
         * @param {string} [currency] currency of the object to be retrieved
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactions(acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, next?: string, previous?: string, id?: string, chargeId?: string, type?: string, currency?: string, options?: any): AxiosPromise<GetTransactionsResponse> {
            return localVarFp.getTransactions(acceptLanguage, xChildCompanyId, limit, next, previous, id, chargeId, type, currency, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TransactionsApi - interface
 * @export
 * @interface TransactionsApi
 */
export interface TransactionsApiInterface {
    /**
     * Get the details of a transaction
     * @summary Get transaction
     * @param {string} id Identifier of the resource
     * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransaction(id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options?: AxiosRequestConfig): AxiosPromise<TransactionResponse>;

    /**
     * Get transaction details in the form of a list
     * @summary Get List transactions
     * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {string} [id] id of the object to be retrieved
     * @param {string} [chargeId] id of the charge used for filtering
     * @param {string} [type] type of the object to be retrieved
     * @param {string} [currency] currency of the object to be retrieved
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getTransactions(acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, next?: string, previous?: string, id?: string, chargeId?: string, type?: string, currency?: string, options?: AxiosRequestConfig): AxiosPromise<GetTransactionsResponse>;

}

/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export class TransactionsApi extends BaseAPI implements TransactionsApiInterface {
    /**
     * Get the details of a transaction
     * @summary Get transaction
     * @param {string} id Identifier of the resource
     * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public getTransaction(id: string, acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).getTransaction(id, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get transaction details in the form of a list
     * @summary Get List transactions
     * @param {'es' | 'en'} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {string} [id] id of the object to be retrieved
     * @param {string} [chargeId] id of the charge used for filtering
     * @param {string} [type] type of the object to be retrieved
     * @param {string} [currency] currency of the object to be retrieved
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    public getTransactions(acceptLanguage?: 'es' | 'en', xChildCompanyId?: string, limit?: number, next?: string, previous?: string, id?: string, chargeId?: string, type?: string, currency?: string, options?: AxiosRequestConfig) {
        return TransactionsApiFp(this.configuration).getTransactions(acceptLanguage, xChildCompanyId, limit, next, previous, id, chargeId, type, currency, options).then((request) => request(this.axios, this.basePath));
    }
}
