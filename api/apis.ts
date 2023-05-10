export * from './antifraudApi';
import { AntifraudApi } from './antifraudApi';
export * from './chargesApi';
import { ChargesApi } from './chargesApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './customersApi';
import { CustomersApi } from './customersApi';
export * from './discountsApi';
import { DiscountsApi } from './discountsApi';
export * from './eventsApi';
import { EventsApi } from './eventsApi';
export * from './logsApi';
import { LogsApi } from './logsApi';
export * from './ordersApi';
import { OrdersApi } from './ordersApi';
export * from './paymentLinkApi';
import { PaymentLinkApi } from './paymentLinkApi';
export * from './paymentMethodsApi';
import { PaymentMethodsApi } from './paymentMethodsApi';
export * from './plansApi';
import { PlansApi } from './plansApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './shippingContactsApi';
import { ShippingContactsApi } from './shippingContactsApi';
export * from './shippingsApi';
import { ShippingsApi } from './shippingsApi';
export * from './subscriptionsApi';
import { SubscriptionsApi } from './subscriptionsApi';
export * from './taxesApi';
import { TaxesApi } from './taxesApi';
export * from './tokensApi';
import { TokensApi } from './tokensApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './webhookKeysApi';
import { WebhookKeysApi } from './webhookKeysApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AntifraudApi, ChargesApi, CompaniesApi, CustomersApi, DiscountsApi, EventsApi, LogsApi, OrdersApi, PaymentLinkApi, PaymentMethodsApi, PlansApi, ProductsApi, ShippingContactsApi, ShippingsApi, SubscriptionsApi, TaxesApi, TokensApi, TransactionsApi, TransfersApi, WebhookKeysApi, WebhooksApi];
