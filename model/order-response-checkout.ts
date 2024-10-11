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



/**
 * 
 * @export
 * @interface OrderResponseCheckout
 */
export interface OrderResponseCheckout {
    /**
     * 
     * @type {Array<string>}
     * @memberof OrderResponseCheckout
     */
    'allowed_payment_methods'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'can_not_expire'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'emails_sent'?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof OrderResponseCheckout
     */
    'exclude_card_networks'?: Array<object>;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'expires_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'failure_url'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'force_3ds_flow'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'id'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'is_redirect_on_failure'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'livemode'?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof OrderResponseCheckout
     */
    'metadata'?: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'monthly_installments_enabled'?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof OrderResponseCheckout
     */
    'monthly_installments_options'?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'needs_shipping_contact'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'object'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'on_demand_enabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'paid_payments_count'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof OrderResponseCheckout
     */
    'recurrent'?: boolean;
    /**
     * number of seconds to wait before redirecting to the success_url
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'redirection_time'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'slug'?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'sms_sent'?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'success_url'?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderResponseCheckout
     */
    'starts_at'?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderResponseCheckout
     */
    'url'?: string;
}

