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
import { EventResponse } from '../model';
// @ts-ignore
import { EventsResendResponse } from '../model';
// @ts-ignore
import { GetEventsResponse } from '../model';
// @ts-ignore
import { ModelError } from '../model';
// @ts-ignore
import { ResendRequest } from '../model';
/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single event
         * @summary Get Event
         * @param {string} id Identifier of the resource
         * @param {GetEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvent: async (id: string, acceptLanguage?: GetEventAcceptLanguageEnum, xChildCompanyId?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getEvent', 'id', id)
            const localVarPath = `/events/{id}`
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
         * 
         * @summary Get list of Events
         * @param {GetEventsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvents: async (acceptLanguage?: GetEventsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/events`;
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
        /**
         * Resend event to selected webhooks
         * @summary Resend Event
         * @param {string} eventId event identifier
         * @param {ResendRequest} resendRequest requested fields for resend an event
         * @param {ResendEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendEvent: async (eventId: string, resendRequest: ResendRequest, acceptLanguage?: ResendEventAcceptLanguageEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'eventId' is not null or undefined
            assertParamExists('resendEvent', 'eventId', eventId)
            // verify required parameter 'resendRequest' is not null or undefined
            assertParamExists('resendEvent', 'resendRequest', resendRequest)
            const localVarPath = `/events/{event_id}/resend`
                .replace(`{${"event_id"}}`, encodeURIComponent(String(eventId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (acceptLanguage != null) {
                localVarHeaderParameter['Accept-Language'] = String(acceptLanguage);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(resendRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single event
         * @summary Get Event
         * @param {string} id Identifier of the resource
         * @param {GetEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEvent(id: string, acceptLanguage?: GetEventAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEvent(id, acceptLanguage, xChildCompanyId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EventsApi.getEvent']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @summary Get list of Events
         * @param {GetEventsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEvents(acceptLanguage?: GetEventsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEventsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEvents(acceptLanguage, xChildCompanyId, limit, search, next, previous, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EventsApi.getEvents']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Resend event to selected webhooks
         * @summary Resend Event
         * @param {string} eventId event identifier
         * @param {ResendRequest} resendRequest requested fields for resend an event
         * @param {ResendEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendEvent(eventId: string, resendRequest: ResendRequest, acceptLanguage?: ResendEventAcceptLanguageEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EventsResendResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendEvent(eventId, resendRequest, acceptLanguage, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EventsApi.resendEvent']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * Returns a single event
         * @summary Get Event
         * @param {string} id Identifier of the resource
         * @param {GetEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvent(id: string, acceptLanguage?: GetEventAcceptLanguageEnum, xChildCompanyId?: string, options?: any): AxiosPromise<EventResponse> {
            return localVarFp.getEvent(id, acceptLanguage, xChildCompanyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get list of Events
         * @param {GetEventsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
         * @param {number} [limit] The numbers of items to return, the maximum value is 250
         * @param {string} [search] General order search, e.g. by mail, reference etc.
         * @param {string} [next] next page
         * @param {string} [previous] previous page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEvents(acceptLanguage?: GetEventsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: any): AxiosPromise<GetEventsResponse> {
            return localVarFp.getEvents(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(axios, basePath));
        },
        /**
         * Resend event to selected webhooks
         * @summary Resend Event
         * @param {string} eventId event identifier
         * @param {ResendRequest} resendRequest requested fields for resend an event
         * @param {ResendEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendEvent(eventId: string, resendRequest: ResendRequest, acceptLanguage?: ResendEventAcceptLanguageEnum, options?: any): AxiosPromise<EventsResendResponse> {
            return localVarFp.resendEvent(eventId, resendRequest, acceptLanguage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventsApi - interface
 * @export
 * @interface EventsApi
 */
export interface EventsApiInterface {
    /**
     * Returns a single event
     * @summary Get Event
     * @param {string} id Identifier of the resource
     * @param {GetEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    getEvent(id: string, acceptLanguage?: GetEventAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig): AxiosPromise<EventResponse>;

    /**
     * 
     * @summary Get list of Events
     * @param {GetEventsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    getEvents(acceptLanguage?: GetEventsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig): AxiosPromise<GetEventsResponse>;

    /**
     * Resend event to selected webhooks
     * @summary Resend Event
     * @param {string} eventId event identifier
     * @param {ResendRequest} resendRequest requested fields for resend an event
     * @param {ResendEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApiInterface
     */
    resendEvent(eventId: string, resendRequest: ResendRequest, acceptLanguage?: ResendEventAcceptLanguageEnum, options?: RawAxiosRequestConfig): AxiosPromise<EventsResendResponse>;

}

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI implements EventsApiInterface {
    /**
     * Returns a single event
     * @summary Get Event
     * @param {string} id Identifier of the resource
     * @param {GetEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public getEvent(id: string, acceptLanguage?: GetEventAcceptLanguageEnum, xChildCompanyId?: string, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).getEvent(id, acceptLanguage, xChildCompanyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get list of Events
     * @param {GetEventsAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {string} [xChildCompanyId] In the case of a holding company, the company id of the child company to which will process the request.
     * @param {number} [limit] The numbers of items to return, the maximum value is 250
     * @param {string} [search] General order search, e.g. by mail, reference etc.
     * @param {string} [next] next page
     * @param {string} [previous] previous page
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public getEvents(acceptLanguage?: GetEventsAcceptLanguageEnum, xChildCompanyId?: string, limit?: number, search?: string, next?: string, previous?: string, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).getEvents(acceptLanguage, xChildCompanyId, limit, search, next, previous, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Resend event to selected webhooks
     * @summary Resend Event
     * @param {string} eventId event identifier
     * @param {ResendRequest} resendRequest requested fields for resend an event
     * @param {ResendEventAcceptLanguageEnum} [acceptLanguage] Use for knowing which language to use
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public resendEvent(eventId: string, resendRequest: ResendRequest, acceptLanguage?: ResendEventAcceptLanguageEnum, options?: RawAxiosRequestConfig) {
        return EventsApiFp(this.configuration).resendEvent(eventId, resendRequest, acceptLanguage, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetEventAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetEventAcceptLanguageEnum = typeof GetEventAcceptLanguageEnum[keyof typeof GetEventAcceptLanguageEnum];
/**
 * @export
 */
export const GetEventsAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type GetEventsAcceptLanguageEnum = typeof GetEventsAcceptLanguageEnum[keyof typeof GetEventsAcceptLanguageEnum];
/**
 * @export
 */
export const ResendEventAcceptLanguageEnum = {
    es: 'es',
    en: 'en'
} as const;
export type ResendEventAcceptLanguageEnum = typeof ResendEventAcceptLanguageEnum[keyof typeof ResendEventAcceptLanguageEnum];
