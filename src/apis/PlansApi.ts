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
  GetPlansResponse,
  ModelError,
  PlanRequest,
  PlanResponse,
  PlanUpdateRequest,
} from '../models';
import {
    GetPlansResponseFromJSON,
    GetPlansResponseToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    PlanRequestFromJSON,
    PlanRequestToJSON,
    PlanResponseFromJSON,
    PlanResponseToJSON,
    PlanUpdateRequestFromJSON,
    PlanUpdateRequestToJSON,
} from '../models';

export interface CreatePlanRequest {
    planRequest: PlanRequest;
    acceptLanguage?: CreatePlanAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface DeletePlanRequest {
    id: string;
    acceptLanguage?: DeletePlanAcceptLanguageEnum;
}

export interface GetPlanRequest {
    id: string;
    acceptLanguage?: GetPlanAcceptLanguageEnum;
    xChildCompanyId?: string;
}

export interface GetPlansRequest {
    acceptLanguage?: GetPlansAcceptLanguageEnum;
    xChildCompanyId?: string;
    limit?: number;
    search?: string;
    next?: string;
    previous?: string;
}

export interface UpdatePlanRequest {
    id: string;
    planUpdateRequest: PlanUpdateRequest;
    acceptLanguage?: UpdatePlanAcceptLanguageEnum;
    xChildCompanyId?: string;
}

/**
 * 
 */
export class PlansApi extends runtime.BaseAPI {

    /**
     * Create a new plan for an existing order
     * Create Plan
     */
    async createPlanRaw(requestParameters: CreatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlanResponse>> {
        if (requestParameters.planRequest === null || requestParameters.planRequest === undefined) {
            throw new runtime.RequiredError('planRequest','Required parameter requestParameters.planRequest was null or undefined when calling createPlan.');
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
            path: `/plans`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlanRequestToJSON(requestParameters.planRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanResponseFromJSON(jsonValue));
    }

    /**
     * Create a new plan for an existing order
     * Create Plan
     */
    async createPlan(requestParameters: CreatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlanResponse> {
        const response = await this.createPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Plan
     */
    async deletePlanRaw(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlanResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deletePlan.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/plans/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanResponseFromJSON(jsonValue));
    }

    /**
     * Delete Plan
     */
    async deletePlan(requestParameters: DeletePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlanResponse> {
        const response = await this.deletePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Plan
     */
    async getPlanRaw(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlanResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getPlan.');
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
            path: `/plans/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanResponseFromJSON(jsonValue));
    }

    /**
     * Get Plan
     */
    async getPlan(requestParameters: GetPlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlanResponse> {
        const response = await this.getPlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get A List of Plans
     */
    async getPlansRaw(requestParameters: GetPlansRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlansResponse>> {
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
            path: `/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlansResponseFromJSON(jsonValue));
    }

    /**
     * Get A List of Plans
     */
    async getPlans(requestParameters: GetPlansRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlansResponse> {
        const response = await this.getPlansRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Plan
     */
    async updatePlanRaw(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlanResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updatePlan.');
        }

        if (requestParameters.planUpdateRequest === null || requestParameters.planUpdateRequest === undefined) {
            throw new runtime.RequiredError('planUpdateRequest','Required parameter requestParameters.planUpdateRequest was null or undefined when calling updatePlan.');
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
            path: `/plans/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: PlanUpdateRequestToJSON(requestParameters.planUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanResponseFromJSON(jsonValue));
    }

    /**
     * Update Plan
     */
    async updatePlan(requestParameters: UpdatePlanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlanResponse> {
        const response = await this.updatePlanRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CreatePlanAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type CreatePlanAcceptLanguageEnum = typeof CreatePlanAcceptLanguageEnum[keyof typeof CreatePlanAcceptLanguageEnum];
/**
 * @export
 */
export const DeletePlanAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type DeletePlanAcceptLanguageEnum = typeof DeletePlanAcceptLanguageEnum[keyof typeof DeletePlanAcceptLanguageEnum];
/**
 * @export
 */
export const GetPlanAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type GetPlanAcceptLanguageEnum = typeof GetPlanAcceptLanguageEnum[keyof typeof GetPlanAcceptLanguageEnum];
/**
 * @export
 */
export const GetPlansAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type GetPlansAcceptLanguageEnum = typeof GetPlansAcceptLanguageEnum[keyof typeof GetPlansAcceptLanguageEnum];
/**
 * @export
 */
export const UpdatePlanAcceptLanguageEnum = {
    Es: 'es',
    En: 'en'
} as const;
export type UpdatePlanAcceptLanguageEnum = typeof UpdatePlanAcceptLanguageEnum[keyof typeof UpdatePlanAcceptLanguageEnum];
