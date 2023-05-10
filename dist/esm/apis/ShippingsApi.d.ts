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
import type { ShippingOrderResponse, ShippingRequest } from '../models';
export interface OrdersCreateShippingRequest {
    id: string;
    shippingRequest: ShippingRequest;
    acceptLanguage?: OrdersCreateShippingAcceptLanguageEnum;
    xChildCompanyId?: string;
}
export interface OrdersDeleteShippingRequest {
    id: string;
    shippingId: string;
    acceptLanguage?: OrdersDeleteShippingAcceptLanguageEnum;
    xChildCompanyId?: string;
}
export interface OrdersUpdateShippingRequest {
    id: string;
    shippingId: string;
    shippingRequest: ShippingRequest;
    acceptLanguage?: OrdersUpdateShippingAcceptLanguageEnum;
    xChildCompanyId?: string;
}
/**
 *
 */
export declare class ShippingsApi extends runtime.BaseAPI {
    /**
     * Create new shipping for an existing orden
     * Create Shipping
     */
    ordersCreateShippingRaw(requestParameters: OrdersCreateShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShippingOrderResponse>>;
    /**
     * Create new shipping for an existing orden
     * Create Shipping
     */
    ordersCreateShipping(requestParameters: OrdersCreateShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShippingOrderResponse>;
    /**
     * Delete shipping
     * Delete Shipping
     */
    ordersDeleteShippingRaw(requestParameters: OrdersDeleteShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShippingOrderResponse>>;
    /**
     * Delete shipping
     * Delete Shipping
     */
    ordersDeleteShipping(requestParameters: OrdersDeleteShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShippingOrderResponse>;
    /**
     * Update existing shipping for an existing orden
     * Update Shipping
     */
    ordersUpdateShippingRaw(requestParameters: OrdersUpdateShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ShippingOrderResponse>>;
    /**
     * Update existing shipping for an existing orden
     * Update Shipping
     */
    ordersUpdateShipping(requestParameters: OrdersUpdateShippingRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ShippingOrderResponse>;
}
/**
 * @export
 */
export declare const OrdersCreateShippingAcceptLanguageEnum: {
    readonly Es: "es";
    readonly En: "en";
};
export type OrdersCreateShippingAcceptLanguageEnum = typeof OrdersCreateShippingAcceptLanguageEnum[keyof typeof OrdersCreateShippingAcceptLanguageEnum];
/**
 * @export
 */
export declare const OrdersDeleteShippingAcceptLanguageEnum: {
    readonly Es: "es";
    readonly En: "en";
};
export type OrdersDeleteShippingAcceptLanguageEnum = typeof OrdersDeleteShippingAcceptLanguageEnum[keyof typeof OrdersDeleteShippingAcceptLanguageEnum];
/**
 * @export
 */
export declare const OrdersUpdateShippingAcceptLanguageEnum: {
    readonly Es: "es";
    readonly En: "en";
};
export type OrdersUpdateShippingAcceptLanguageEnum = typeof OrdersUpdateShippingAcceptLanguageEnum[keyof typeof OrdersUpdateShippingAcceptLanguageEnum];
