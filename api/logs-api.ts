/* tslint:disable */
/* eslint-disable */
/**
 * Conekta API
 * Conekta sdk
 *
 * The version of the OpenAPI document: 2.2.0
 * Contact: engineering@conekta.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { LogResponse } from '../model';
// @ts-ignore
import { LogsResponse } from '../model';
// @ts-ignore
import { ModelError } from '../model';
/**
 * LogsApi - axios parameter creator
 * @export
 */
export const LogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the details of a specific log
         * @summary Get Log
         * @param {string} id Identifier of the resource
         * @param {GetLogByIdAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogById: async (id: string, acceptLanguage?: GetLogByIdAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getLogById', 'id', id)
            const localVarPath = `/logs/{id}`
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
         * Get log details in the form of a list
         * @summary Get List Of Logs
         * @param {GetLogsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogs: async (acceptLanguage?: GetLogsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/logs`;
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

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }

            if (previous !== undefined) {
                localVarQueryParameter['previous'] = previous;
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
 * LogsApi - functional programming interface
 * @export
 */
export const LogsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LogsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the details of a specific log
         * @summary Get Log
         * @param {string} id Identifier of the resource
         * @param {GetLogByIdAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogById(id: string, acceptLanguage?: GetLogByIdAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LogResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogById(id, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['LogsApi.getLogById']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Get log details in the form of a list
         * @summary Get List Of Logs
         * @param {GetLogsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLogs(acceptLanguage?: GetLogsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LogsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogs(acceptLanguage, xChildCompanyId, limit, search, next, previous, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['LogsApi.getLogs']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * LogsApi - factory interface
 * @export
 */
export const LogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LogsApiFp(configuration)
    return {
        /**
         * Get the details of a specific log
         * @summary Get Log
         * @param {string} id Identifier of the resource
         * @param {GetLogByIdAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogById(id: string, acceptLanguage?: GetLogByIdAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<LogResponse> {
            return localVarFp.getLogById(id, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get log details in the form of a list
         * @summary Get List Of Logs
         * @param {GetLogsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLogs(acceptLanguage?: GetLogsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: any): AxiosPromise<LogsResponse> {
            return localVarFp.getLogs(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LogsApi - interface
 * @export
 * @interface LogsApi
 */
export interface LogsApiInterface {
    /**
     * Get the details of a specific log
     * @summary Get Log
     * @param {string} id Identifier of the resource
     * @param {GetLogByIdAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiInterface
     */
    getLogById(id: string, acceptLanguage?: GetLogByIdAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<LogResponse>;

    /**
     * Get log details in the form of a list
     * @summary Get List Of Logs
     * @param {GetLogsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiInterface
     */
    getLogs(acceptLanguage?: GetLogsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): AxiosPromise<LogsResponse>;

}

/**
 * LogsApi - object-oriented interface
 * @export
 * @class LogsApi
 * @extends {BaseAPI}
 */
export class LogsApi extends BaseAPI implements LogsApiInterface {
    /**
     * Get the details of a specific log
     * @summary Get Log
     * @param {string} id Identifier of the resource
     * @param {GetLogByIdAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApi
     */
    public getLogById(id: string, acceptLanguage?: GetLogByIdAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return LogsApiFp(this.configuration).getLogById(id, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get log details in the form of a list
     * @summary Get List Of Logs
     * @param {GetLogsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApi
     */
    public getLogs(acceptLanguage?: GetLogsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig) {
        return LogsApiFp(this.configuration).getLogs(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetLogByIdAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetLogByIdAcceptLanguageEnum = typeof GetLogByIdAcceptLanguageEnum[keyof typeof GetLogByIdAcceptLanguageEnum];
/**
 * @export
 */
export const GetLogsAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetLogsAcceptLanguageEnum = typeof GetLogsAcceptLanguageEnum[keyof typeof GetLogsAcceptLanguageEnum];
