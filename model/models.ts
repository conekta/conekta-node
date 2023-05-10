import localVarRequest from 'request';

export * from './blacklistRuleResponse';
export * from './chargeDataPaymentMethodBankTransferResponse';
export * from './chargeDataPaymentMethodCardResponse';
export * from './chargeDataPaymentMethodCashResponse';
export * from './chargeOrderResponse';
export * from './chargeOrderResponseChannel';
export * from './chargeOrderResponsePaymentMethod';
export * from './chargeRequest';
export * from './chargeRequestPaymentMethod';
export * from './chargeResponse';
export * from './chargeResponseRefunds';
export * from './chargeResponseRefundsAllOf';
export * from './chargeResponseRefundsData';
export * from './chargesDataResponse';
export * from './checkout';
export * from './checkoutOrderTemplate';
export * from './checkoutRequest';
export * from './checkoutResponse';
export * from './checkoutsResponse';
export * from './checkoutsResponseAllOf';
export * from './companyFiscalInfoAddressResponse';
export * from './companyFiscalInfoResponse';
export * from './companyPayoutDestinationResponse';
export * from './companyResponse';
export * from './createCustomerFiscalEntitiesResponse';
export * from './createCustomerFiscalEntitiesResponseAllOf';
export * from './createCustomerPaymentMethodsRequest';
export * from './createCustomerPaymentMethodsResponse';
export * from './createRiskRulesData';
export * from './customer';
export * from './customerAddress';
export * from './customerAntifraudInfo';
export * from './customerAntifraudInfoResponse';
export * from './customerFiscalEntitiesDataResponse';
export * from './customerFiscalEntitiesRequest';
export * from './customerFiscalEntitiesRequestAddress';
export * from './customerFiscalEntitiesResponse';
export * from './customerFiscalEntitiesResponseAllOf';
export * from './customerInfo';
export * from './customerInfoJustCustomerId';
export * from './customerInfoJustCustomerIdResponse';
export * from './customerInfoResponse';
export * from './customerPaymentMethodRequest';
export * from './customerPaymentMethods';
export * from './customerPaymentMethodsData';
export * from './customerPaymentMethodsRequest';
export * from './customerPaymentMethodsResponse';
export * from './customerResponse';
export * from './customerResponseShippingContacts';
export * from './customerResponseShippingContactsAllOf';
export * from './customerShippingContacts';
export * from './customerShippingContactsAddress';
export * from './customerShippingContactsDataResponse';
export * from './customerShippingContactsDataResponseAllOf';
export * from './customerShippingContactsResponse';
export * from './customerShippingContactsResponseAddress';
export * from './customerUpdateFiscalEntitiesRequest';
export * from './customerUpdateShippingContacts';
export * from './customersResponse';
export * from './customersResponseAllOf';
export * from './deletedBlacklistRuleResponse';
export * from './deletedWhitelistRuleResponse';
export * from './details';
export * from './detailsError';
export * from './discountLinesDataResponse';
export * from './discountLinesResponse';
export * from './discountLinesResponseAllOf';
export * from './emailCheckoutRequest';
export * from './errorAllOf';
export * from './eventResponse';
export * from './getCompaniesResponse';
export * from './getCompaniesResponseAllOf';
export * from './getCustomerPaymentMethodDataResponse';
export * from './getEventsResponse';
export * from './getEventsResponseAllOf';
export * from './getOrdersResponse';
export * from './getPaymentMethodResponse';
export * from './getPaymentMethodResponseAllOf';
export * from './getPlansResponse';
export * from './getPlansResponseAllOf';
export * from './getTransactionsResponse';
export * from './getTransactionsResponseAllOf';
export * from './getTransfersResponse';
export * from './getTransfersResponseAllOf';
export * from './getWebhookKeysResponse';
export * from './getWebhookKeysResponseAllOf';
export * from './getWebhooksResponse';
export * from './getWebhooksResponseAllOf';
export * from './logResponse';
export * from './logsResponse';
export * from './logsResponseData';
export * from './modelError';
export * from './orderCaptureRequest';
export * from './orderDiscountLinesRequest';
export * from './orderRefundRequest';
export * from './orderRequest';
export * from './orderRequestCustomerInfo';
export * from './orderResponse';
export * from './orderResponseCharges';
export * from './orderResponseChargesAllOf';
export * from './orderResponseCheckout';
export * from './orderResponseCustomerInfo';
export * from './orderResponseCustomerInfoAllOf';
export * from './orderResponseDiscountLines';
export * from './orderResponseDiscountLinesAllOf';
export * from './orderResponseFiscalEntity';
export * from './orderResponseFiscalEntityAddress';
export * from './orderResponseFiscalEntityAddressAllOf';
export * from './orderResponseProducts';
export * from './orderResponseProductsAllOf';
export * from './orderResponseShippingContact';
export * from './orderResponseShippingContactAllOf';
export * from './orderTaxRequest';
export * from './orderUpdateRequest';
export * from './ordersResponse';
export * from './page';
export * from './pagination';
export * from './paymentMethod';
export * from './paymentMethodBankTransfer';
export * from './paymentMethodCard';
export * from './paymentMethodCardRequest';
export * from './paymentMethodCardRequestAllOf';
export * from './paymentMethodCardResponse';
export * from './paymentMethodCardResponseAllOf';
export * from './paymentMethodCash';
export * from './paymentMethodCashRequest';
export * from './paymentMethodCashRequestAllOf';
export * from './paymentMethodCashResponse';
export * from './paymentMethodCashResponseAllOf';
export * from './paymentMethodResponse';
export * from './paymentMethodSpeiRecurrent';
export * from './paymentMethodSpeiRecurrentAllOf';
export * from './paymentMethodSpeiRequest';
export * from './planRequest';
export * from './planResponse';
export * from './planUpdateRequest';
export * from './product';
export * from './productDataResponse';
export * from './productDataResponseAllOf';
export * from './productOrderResponse';
export * from './productOrderResponseAllOf';
export * from './riskRules';
export * from './riskRulesData';
export * from './riskRulesList';
export * from './shippingOrderResponse';
export * from './shippingRequest';
export * from './smsCheckoutRequest';
export * from './subscriptionEventsResponse';
export * from './subscriptionRequest';
export * from './subscriptionResponse';
export * from './subscriptionUpdateRequest';
export * from './token';
export * from './tokenCard';
export * from './tokenCheckout';
export * from './tokenResponse';
export * from './tokenResponseCheckout';
export * from './transactionResponse';
export * from './transferDestinationResponse';
export * from './transferMethodResponse';
export * from './transferResponse';
export * from './transfersResponse';
export * from './updateCustomer';
export * from './updateCustomerAntifraudInfo';
export * from './updateCustomerFiscalEntitiesResponse';
export * from './updateCustomerFiscalEntitiesResponseAllOf';
export * from './updateCustomerPaymentMethodsResponse';
export * from './updateOrderDiscountLinesRequest';
export * from './updateOrderTaxRequest';
export * from './updateOrderTaxResponse';
export * from './updateOrderTaxResponseAllOf';
export * from './updatePaymentMethods';
export * from './updateProduct';
export * from './webhookKeyCreateResponse';
export * from './webhookKeyDeleteResponse';
export * from './webhookKeyRequest';
export * from './webhookKeyResponse';
export * from './webhookKeyUpdateRequest';
export * from './webhookLog';
export * from './webhookRequest';
export * from './webhookResponse';
export * from './webhookUpdateRequest';
export * from './whitelistlistRuleResponse';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { BlacklistRuleResponse } from './blacklistRuleResponse';
import { ChargeDataPaymentMethodBankTransferResponse } from './chargeDataPaymentMethodBankTransferResponse';
import { ChargeDataPaymentMethodCardResponse } from './chargeDataPaymentMethodCardResponse';
import { ChargeDataPaymentMethodCashResponse } from './chargeDataPaymentMethodCashResponse';
import { ChargeOrderResponse } from './chargeOrderResponse';
import { ChargeOrderResponseChannel } from './chargeOrderResponseChannel';
import { ChargeOrderResponsePaymentMethod } from './chargeOrderResponsePaymentMethod';
import { ChargeRequest } from './chargeRequest';
import { ChargeRequestPaymentMethod } from './chargeRequestPaymentMethod';
import { ChargeResponse } from './chargeResponse';
import { ChargeResponseRefunds } from './chargeResponseRefunds';
import { ChargeResponseRefundsAllOf } from './chargeResponseRefundsAllOf';
import { ChargeResponseRefundsData } from './chargeResponseRefundsData';
import { ChargesDataResponse } from './chargesDataResponse';
import { Checkout } from './checkout';
import { CheckoutOrderTemplate } from './checkoutOrderTemplate';
import { CheckoutRequest } from './checkoutRequest';
import { CheckoutResponse } from './checkoutResponse';
import { CheckoutsResponse } from './checkoutsResponse';
import { CheckoutsResponseAllOf } from './checkoutsResponseAllOf';
import { CompanyFiscalInfoAddressResponse } from './companyFiscalInfoAddressResponse';
import { CompanyFiscalInfoResponse } from './companyFiscalInfoResponse';
import { CompanyPayoutDestinationResponse } from './companyPayoutDestinationResponse';
import { CompanyResponse } from './companyResponse';
import { CreateCustomerFiscalEntitiesResponse } from './createCustomerFiscalEntitiesResponse';
import { CreateCustomerFiscalEntitiesResponseAllOf } from './createCustomerFiscalEntitiesResponseAllOf';
import { CreateCustomerPaymentMethodsRequest } from './createCustomerPaymentMethodsRequest';
import { CreateCustomerPaymentMethodsResponse } from './createCustomerPaymentMethodsResponse';
import { CreateRiskRulesData } from './createRiskRulesData';
import { Customer } from './customer';
import { CustomerAddress } from './customerAddress';
import { CustomerAntifraudInfo } from './customerAntifraudInfo';
import { CustomerAntifraudInfoResponse } from './customerAntifraudInfoResponse';
import { CustomerFiscalEntitiesDataResponse } from './customerFiscalEntitiesDataResponse';
import { CustomerFiscalEntitiesRequest } from './customerFiscalEntitiesRequest';
import { CustomerFiscalEntitiesRequestAddress } from './customerFiscalEntitiesRequestAddress';
import { CustomerFiscalEntitiesResponse } from './customerFiscalEntitiesResponse';
import { CustomerFiscalEntitiesResponseAllOf } from './customerFiscalEntitiesResponseAllOf';
import { CustomerInfo } from './customerInfo';
import { CustomerInfoJustCustomerId } from './customerInfoJustCustomerId';
import { CustomerInfoJustCustomerIdResponse } from './customerInfoJustCustomerIdResponse';
import { CustomerInfoResponse } from './customerInfoResponse';
import { CustomerPaymentMethodRequest } from './customerPaymentMethodRequest';
import { CustomerPaymentMethods } from './customerPaymentMethods';
import { CustomerPaymentMethodsData } from './customerPaymentMethodsData';
import { CustomerPaymentMethodsRequest } from './customerPaymentMethodsRequest';
import { CustomerPaymentMethodsResponse } from './customerPaymentMethodsResponse';
import { CustomerResponse } from './customerResponse';
import { CustomerResponseShippingContacts } from './customerResponseShippingContacts';
import { CustomerResponseShippingContactsAllOf } from './customerResponseShippingContactsAllOf';
import { CustomerShippingContacts } from './customerShippingContacts';
import { CustomerShippingContactsAddress } from './customerShippingContactsAddress';
import { CustomerShippingContactsDataResponse } from './customerShippingContactsDataResponse';
import { CustomerShippingContactsDataResponseAllOf } from './customerShippingContactsDataResponseAllOf';
import { CustomerShippingContactsResponse } from './customerShippingContactsResponse';
import { CustomerShippingContactsResponseAddress } from './customerShippingContactsResponseAddress';
import { CustomerUpdateFiscalEntitiesRequest } from './customerUpdateFiscalEntitiesRequest';
import { CustomerUpdateShippingContacts } from './customerUpdateShippingContacts';
import { CustomersResponse } from './customersResponse';
import { CustomersResponseAllOf } from './customersResponseAllOf';
import { DeletedBlacklistRuleResponse } from './deletedBlacklistRuleResponse';
import { DeletedWhitelistRuleResponse } from './deletedWhitelistRuleResponse';
import { Details } from './details';
import { DetailsError } from './detailsError';
import { DiscountLinesDataResponse } from './discountLinesDataResponse';
import { DiscountLinesResponse } from './discountLinesResponse';
import { DiscountLinesResponseAllOf } from './discountLinesResponseAllOf';
import { EmailCheckoutRequest } from './emailCheckoutRequest';
import { ErrorAllOf } from './errorAllOf';
import { EventResponse } from './eventResponse';
import { GetCompaniesResponse } from './getCompaniesResponse';
import { GetCompaniesResponseAllOf } from './getCompaniesResponseAllOf';
import { GetCustomerPaymentMethodDataResponse } from './getCustomerPaymentMethodDataResponse';
import { GetEventsResponse } from './getEventsResponse';
import { GetEventsResponseAllOf } from './getEventsResponseAllOf';
import { GetOrdersResponse } from './getOrdersResponse';
import { GetPaymentMethodResponse } from './getPaymentMethodResponse';
import { GetPaymentMethodResponseAllOf } from './getPaymentMethodResponseAllOf';
import { GetPlansResponse } from './getPlansResponse';
import { GetPlansResponseAllOf } from './getPlansResponseAllOf';
import { GetTransactionsResponse } from './getTransactionsResponse';
import { GetTransactionsResponseAllOf } from './getTransactionsResponseAllOf';
import { GetTransfersResponse } from './getTransfersResponse';
import { GetTransfersResponseAllOf } from './getTransfersResponseAllOf';
import { GetWebhookKeysResponse } from './getWebhookKeysResponse';
import { GetWebhookKeysResponseAllOf } from './getWebhookKeysResponseAllOf';
import { GetWebhooksResponse } from './getWebhooksResponse';
import { GetWebhooksResponseAllOf } from './getWebhooksResponseAllOf';
import { LogResponse } from './logResponse';
import { LogsResponse } from './logsResponse';
import { LogsResponseData } from './logsResponseData';
import { ModelError } from './modelError';
import { OrderCaptureRequest } from './orderCaptureRequest';
import { OrderDiscountLinesRequest } from './orderDiscountLinesRequest';
import { OrderRefundRequest } from './orderRefundRequest';
import { OrderRequest } from './orderRequest';
import { OrderRequestCustomerInfo } from './orderRequestCustomerInfo';
import { OrderResponse } from './orderResponse';
import { OrderResponseCharges } from './orderResponseCharges';
import { OrderResponseChargesAllOf } from './orderResponseChargesAllOf';
import { OrderResponseCheckout } from './orderResponseCheckout';
import { OrderResponseCustomerInfo } from './orderResponseCustomerInfo';
import { OrderResponseCustomerInfoAllOf } from './orderResponseCustomerInfoAllOf';
import { OrderResponseDiscountLines } from './orderResponseDiscountLines';
import { OrderResponseDiscountLinesAllOf } from './orderResponseDiscountLinesAllOf';
import { OrderResponseFiscalEntity } from './orderResponseFiscalEntity';
import { OrderResponseFiscalEntityAddress } from './orderResponseFiscalEntityAddress';
import { OrderResponseFiscalEntityAddressAllOf } from './orderResponseFiscalEntityAddressAllOf';
import { OrderResponseProducts } from './orderResponseProducts';
import { OrderResponseProductsAllOf } from './orderResponseProductsAllOf';
import { OrderResponseShippingContact } from './orderResponseShippingContact';
import { OrderResponseShippingContactAllOf } from './orderResponseShippingContactAllOf';
import { OrderTaxRequest } from './orderTaxRequest';
import { OrderUpdateRequest } from './orderUpdateRequest';
import { OrdersResponse } from './ordersResponse';
import { Page } from './page';
import { Pagination } from './pagination';
import { PaymentMethod } from './paymentMethod';
import { PaymentMethodBankTransfer } from './paymentMethodBankTransfer';
import { PaymentMethodCard } from './paymentMethodCard';
import { PaymentMethodCardRequest } from './paymentMethodCardRequest';
import { PaymentMethodCardRequestAllOf } from './paymentMethodCardRequestAllOf';
import { PaymentMethodCardResponse } from './paymentMethodCardResponse';
import { PaymentMethodCardResponseAllOf } from './paymentMethodCardResponseAllOf';
import { PaymentMethodCash } from './paymentMethodCash';
import { PaymentMethodCashRequest } from './paymentMethodCashRequest';
import { PaymentMethodCashRequestAllOf } from './paymentMethodCashRequestAllOf';
import { PaymentMethodCashResponse } from './paymentMethodCashResponse';
import { PaymentMethodCashResponseAllOf } from './paymentMethodCashResponseAllOf';
import { PaymentMethodResponse } from './paymentMethodResponse';
import { PaymentMethodSpeiRecurrent } from './paymentMethodSpeiRecurrent';
import { PaymentMethodSpeiRecurrentAllOf } from './paymentMethodSpeiRecurrentAllOf';
import { PaymentMethodSpeiRequest } from './paymentMethodSpeiRequest';
import { PlanRequest } from './planRequest';
import { PlanResponse } from './planResponse';
import { PlanUpdateRequest } from './planUpdateRequest';
import { Product } from './product';
import { ProductDataResponse } from './productDataResponse';
import { ProductDataResponseAllOf } from './productDataResponseAllOf';
import { ProductOrderResponse } from './productOrderResponse';
import { ProductOrderResponseAllOf } from './productOrderResponseAllOf';
import { RiskRules } from './riskRules';
import { RiskRulesData } from './riskRulesData';
import { RiskRulesList } from './riskRulesList';
import { ShippingOrderResponse } from './shippingOrderResponse';
import { ShippingRequest } from './shippingRequest';
import { SmsCheckoutRequest } from './smsCheckoutRequest';
import { SubscriptionEventsResponse } from './subscriptionEventsResponse';
import { SubscriptionRequest } from './subscriptionRequest';
import { SubscriptionResponse } from './subscriptionResponse';
import { SubscriptionUpdateRequest } from './subscriptionUpdateRequest';
import { Token } from './token';
import { TokenCard } from './tokenCard';
import { TokenCheckout } from './tokenCheckout';
import { TokenResponse } from './tokenResponse';
import { TokenResponseCheckout } from './tokenResponseCheckout';
import { TransactionResponse } from './transactionResponse';
import { TransferDestinationResponse } from './transferDestinationResponse';
import { TransferMethodResponse } from './transferMethodResponse';
import { TransferResponse } from './transferResponse';
import { TransfersResponse } from './transfersResponse';
import { UpdateCustomer } from './updateCustomer';
import { UpdateCustomerAntifraudInfo } from './updateCustomerAntifraudInfo';
import { UpdateCustomerFiscalEntitiesResponse } from './updateCustomerFiscalEntitiesResponse';
import { UpdateCustomerFiscalEntitiesResponseAllOf } from './updateCustomerFiscalEntitiesResponseAllOf';
import { UpdateCustomerPaymentMethodsResponse } from './updateCustomerPaymentMethodsResponse';
import { UpdateOrderDiscountLinesRequest } from './updateOrderDiscountLinesRequest';
import { UpdateOrderTaxRequest } from './updateOrderTaxRequest';
import { UpdateOrderTaxResponse } from './updateOrderTaxResponse';
import { UpdateOrderTaxResponseAllOf } from './updateOrderTaxResponseAllOf';
import { UpdatePaymentMethods } from './updatePaymentMethods';
import { UpdateProduct } from './updateProduct';
import { WebhookKeyCreateResponse } from './webhookKeyCreateResponse';
import { WebhookKeyDeleteResponse } from './webhookKeyDeleteResponse';
import { WebhookKeyRequest } from './webhookKeyRequest';
import { WebhookKeyResponse } from './webhookKeyResponse';
import { WebhookKeyUpdateRequest } from './webhookKeyUpdateRequest';
import { WebhookLog } from './webhookLog';
import { WebhookRequest } from './webhookRequest';
import { WebhookResponse } from './webhookResponse';
import { WebhookUpdateRequest } from './webhookUpdateRequest';
import { WhitelistlistRuleResponse } from './whitelistlistRuleResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "CompanyFiscalInfoAddressResponse.ObjectEnum": CompanyFiscalInfoAddressResponse.ObjectEnum,
        "CompanyFiscalInfoResponse.ObjectEnum": CompanyFiscalInfoResponse.ObjectEnum,
        "CompanyPayoutDestinationResponse.ObjectEnum": CompanyPayoutDestinationResponse.ObjectEnum,
        "CompanyPayoutDestinationResponse.TypeEnum": CompanyPayoutDestinationResponse.TypeEnum,
        "CompanyResponse.ObjectEnum": CompanyResponse.ObjectEnum,
        "PlanRequest.IntervalEnum": PlanRequest.IntervalEnum,
}

let typeMap: {[index: string]: any} = {
    "BlacklistRuleResponse": BlacklistRuleResponse,
    "ChargeDataPaymentMethodBankTransferResponse": ChargeDataPaymentMethodBankTransferResponse,
    "ChargeDataPaymentMethodCardResponse": ChargeDataPaymentMethodCardResponse,
    "ChargeDataPaymentMethodCashResponse": ChargeDataPaymentMethodCashResponse,
    "ChargeOrderResponse": ChargeOrderResponse,
    "ChargeOrderResponseChannel": ChargeOrderResponseChannel,
    "ChargeOrderResponsePaymentMethod": ChargeOrderResponsePaymentMethod,
    "ChargeRequest": ChargeRequest,
    "ChargeRequestPaymentMethod": ChargeRequestPaymentMethod,
    "ChargeResponse": ChargeResponse,
    "ChargeResponseRefunds": ChargeResponseRefunds,
    "ChargeResponseRefundsAllOf": ChargeResponseRefundsAllOf,
    "ChargeResponseRefundsData": ChargeResponseRefundsData,
    "ChargesDataResponse": ChargesDataResponse,
    "Checkout": Checkout,
    "CheckoutOrderTemplate": CheckoutOrderTemplate,
    "CheckoutRequest": CheckoutRequest,
    "CheckoutResponse": CheckoutResponse,
    "CheckoutsResponse": CheckoutsResponse,
    "CheckoutsResponseAllOf": CheckoutsResponseAllOf,
    "CompanyFiscalInfoAddressResponse": CompanyFiscalInfoAddressResponse,
    "CompanyFiscalInfoResponse": CompanyFiscalInfoResponse,
    "CompanyPayoutDestinationResponse": CompanyPayoutDestinationResponse,
    "CompanyResponse": CompanyResponse,
    "CreateCustomerFiscalEntitiesResponse": CreateCustomerFiscalEntitiesResponse,
    "CreateCustomerFiscalEntitiesResponseAllOf": CreateCustomerFiscalEntitiesResponseAllOf,
    "CreateCustomerPaymentMethodsRequest": CreateCustomerPaymentMethodsRequest,
    "CreateCustomerPaymentMethodsResponse": CreateCustomerPaymentMethodsResponse,
    "CreateRiskRulesData": CreateRiskRulesData,
    "Customer": Customer,
    "CustomerAddress": CustomerAddress,
    "CustomerAntifraudInfo": CustomerAntifraudInfo,
    "CustomerAntifraudInfoResponse": CustomerAntifraudInfoResponse,
    "CustomerFiscalEntitiesDataResponse": CustomerFiscalEntitiesDataResponse,
    "CustomerFiscalEntitiesRequest": CustomerFiscalEntitiesRequest,
    "CustomerFiscalEntitiesRequestAddress": CustomerFiscalEntitiesRequestAddress,
    "CustomerFiscalEntitiesResponse": CustomerFiscalEntitiesResponse,
    "CustomerFiscalEntitiesResponseAllOf": CustomerFiscalEntitiesResponseAllOf,
    "CustomerInfo": CustomerInfo,
    "CustomerInfoJustCustomerId": CustomerInfoJustCustomerId,
    "CustomerInfoJustCustomerIdResponse": CustomerInfoJustCustomerIdResponse,
    "CustomerInfoResponse": CustomerInfoResponse,
    "CustomerPaymentMethodRequest": CustomerPaymentMethodRequest,
    "CustomerPaymentMethods": CustomerPaymentMethods,
    "CustomerPaymentMethodsData": CustomerPaymentMethodsData,
    "CustomerPaymentMethodsRequest": CustomerPaymentMethodsRequest,
    "CustomerPaymentMethodsResponse": CustomerPaymentMethodsResponse,
    "CustomerResponse": CustomerResponse,
    "CustomerResponseShippingContacts": CustomerResponseShippingContacts,
    "CustomerResponseShippingContactsAllOf": CustomerResponseShippingContactsAllOf,
    "CustomerShippingContacts": CustomerShippingContacts,
    "CustomerShippingContactsAddress": CustomerShippingContactsAddress,
    "CustomerShippingContactsDataResponse": CustomerShippingContactsDataResponse,
    "CustomerShippingContactsDataResponseAllOf": CustomerShippingContactsDataResponseAllOf,
    "CustomerShippingContactsResponse": CustomerShippingContactsResponse,
    "CustomerShippingContactsResponseAddress": CustomerShippingContactsResponseAddress,
    "CustomerUpdateFiscalEntitiesRequest": CustomerUpdateFiscalEntitiesRequest,
    "CustomerUpdateShippingContacts": CustomerUpdateShippingContacts,
    "CustomersResponse": CustomersResponse,
    "CustomersResponseAllOf": CustomersResponseAllOf,
    "DeletedBlacklistRuleResponse": DeletedBlacklistRuleResponse,
    "DeletedWhitelistRuleResponse": DeletedWhitelistRuleResponse,
    "Details": Details,
    "DetailsError": DetailsError,
    "DiscountLinesDataResponse": DiscountLinesDataResponse,
    "DiscountLinesResponse": DiscountLinesResponse,
    "DiscountLinesResponseAllOf": DiscountLinesResponseAllOf,
    "EmailCheckoutRequest": EmailCheckoutRequest,
    "ErrorAllOf": ErrorAllOf,
    "EventResponse": EventResponse,
    "GetCompaniesResponse": GetCompaniesResponse,
    "GetCompaniesResponseAllOf": GetCompaniesResponseAllOf,
    "GetCustomerPaymentMethodDataResponse": GetCustomerPaymentMethodDataResponse,
    "GetEventsResponse": GetEventsResponse,
    "GetEventsResponseAllOf": GetEventsResponseAllOf,
    "GetOrdersResponse": GetOrdersResponse,
    "GetPaymentMethodResponse": GetPaymentMethodResponse,
    "GetPaymentMethodResponseAllOf": GetPaymentMethodResponseAllOf,
    "GetPlansResponse": GetPlansResponse,
    "GetPlansResponseAllOf": GetPlansResponseAllOf,
    "GetTransactionsResponse": GetTransactionsResponse,
    "GetTransactionsResponseAllOf": GetTransactionsResponseAllOf,
    "GetTransfersResponse": GetTransfersResponse,
    "GetTransfersResponseAllOf": GetTransfersResponseAllOf,
    "GetWebhookKeysResponse": GetWebhookKeysResponse,
    "GetWebhookKeysResponseAllOf": GetWebhookKeysResponseAllOf,
    "GetWebhooksResponse": GetWebhooksResponse,
    "GetWebhooksResponseAllOf": GetWebhooksResponseAllOf,
    "LogResponse": LogResponse,
    "LogsResponse": LogsResponse,
    "LogsResponseData": LogsResponseData,
    "ModelError": ModelError,
    "OrderCaptureRequest": OrderCaptureRequest,
    "OrderDiscountLinesRequest": OrderDiscountLinesRequest,
    "OrderRefundRequest": OrderRefundRequest,
    "OrderRequest": OrderRequest,
    "OrderRequestCustomerInfo": OrderRequestCustomerInfo,
    "OrderResponse": OrderResponse,
    "OrderResponseCharges": OrderResponseCharges,
    "OrderResponseChargesAllOf": OrderResponseChargesAllOf,
    "OrderResponseCheckout": OrderResponseCheckout,
    "OrderResponseCustomerInfo": OrderResponseCustomerInfo,
    "OrderResponseCustomerInfoAllOf": OrderResponseCustomerInfoAllOf,
    "OrderResponseDiscountLines": OrderResponseDiscountLines,
    "OrderResponseDiscountLinesAllOf": OrderResponseDiscountLinesAllOf,
    "OrderResponseFiscalEntity": OrderResponseFiscalEntity,
    "OrderResponseFiscalEntityAddress": OrderResponseFiscalEntityAddress,
    "OrderResponseFiscalEntityAddressAllOf": OrderResponseFiscalEntityAddressAllOf,
    "OrderResponseProducts": OrderResponseProducts,
    "OrderResponseProductsAllOf": OrderResponseProductsAllOf,
    "OrderResponseShippingContact": OrderResponseShippingContact,
    "OrderResponseShippingContactAllOf": OrderResponseShippingContactAllOf,
    "OrderTaxRequest": OrderTaxRequest,
    "OrderUpdateRequest": OrderUpdateRequest,
    "OrdersResponse": OrdersResponse,
    "Page": Page,
    "Pagination": Pagination,
    "PaymentMethod": PaymentMethod,
    "PaymentMethodBankTransfer": PaymentMethodBankTransfer,
    "PaymentMethodCard": PaymentMethodCard,
    "PaymentMethodCardRequest": PaymentMethodCardRequest,
    "PaymentMethodCardRequestAllOf": PaymentMethodCardRequestAllOf,
    "PaymentMethodCardResponse": PaymentMethodCardResponse,
    "PaymentMethodCardResponseAllOf": PaymentMethodCardResponseAllOf,
    "PaymentMethodCash": PaymentMethodCash,
    "PaymentMethodCashRequest": PaymentMethodCashRequest,
    "PaymentMethodCashRequestAllOf": PaymentMethodCashRequestAllOf,
    "PaymentMethodCashResponse": PaymentMethodCashResponse,
    "PaymentMethodCashResponseAllOf": PaymentMethodCashResponseAllOf,
    "PaymentMethodResponse": PaymentMethodResponse,
    "PaymentMethodSpeiRecurrent": PaymentMethodSpeiRecurrent,
    "PaymentMethodSpeiRecurrentAllOf": PaymentMethodSpeiRecurrentAllOf,
    "PaymentMethodSpeiRequest": PaymentMethodSpeiRequest,
    "PlanRequest": PlanRequest,
    "PlanResponse": PlanResponse,
    "PlanUpdateRequest": PlanUpdateRequest,
    "Product": Product,
    "ProductDataResponse": ProductDataResponse,
    "ProductDataResponseAllOf": ProductDataResponseAllOf,
    "ProductOrderResponse": ProductOrderResponse,
    "ProductOrderResponseAllOf": ProductOrderResponseAllOf,
    "RiskRules": RiskRules,
    "RiskRulesData": RiskRulesData,
    "RiskRulesList": RiskRulesList,
    "ShippingOrderResponse": ShippingOrderResponse,
    "ShippingRequest": ShippingRequest,
    "SmsCheckoutRequest": SmsCheckoutRequest,
    "SubscriptionEventsResponse": SubscriptionEventsResponse,
    "SubscriptionRequest": SubscriptionRequest,
    "SubscriptionResponse": SubscriptionResponse,
    "SubscriptionUpdateRequest": SubscriptionUpdateRequest,
    "Token": Token,
    "TokenCard": TokenCard,
    "TokenCheckout": TokenCheckout,
    "TokenResponse": TokenResponse,
    "TokenResponseCheckout": TokenResponseCheckout,
    "TransactionResponse": TransactionResponse,
    "TransferDestinationResponse": TransferDestinationResponse,
    "TransferMethodResponse": TransferMethodResponse,
    "TransferResponse": TransferResponse,
    "TransfersResponse": TransfersResponse,
    "UpdateCustomer": UpdateCustomer,
    "UpdateCustomerAntifraudInfo": UpdateCustomerAntifraudInfo,
    "UpdateCustomerFiscalEntitiesResponse": UpdateCustomerFiscalEntitiesResponse,
    "UpdateCustomerFiscalEntitiesResponseAllOf": UpdateCustomerFiscalEntitiesResponseAllOf,
    "UpdateCustomerPaymentMethodsResponse": UpdateCustomerPaymentMethodsResponse,
    "UpdateOrderDiscountLinesRequest": UpdateOrderDiscountLinesRequest,
    "UpdateOrderTaxRequest": UpdateOrderTaxRequest,
    "UpdateOrderTaxResponse": UpdateOrderTaxResponse,
    "UpdateOrderTaxResponseAllOf": UpdateOrderTaxResponseAllOf,
    "UpdatePaymentMethods": UpdatePaymentMethods,
    "UpdateProduct": UpdateProduct,
    "WebhookKeyCreateResponse": WebhookKeyCreateResponse,
    "WebhookKeyDeleteResponse": WebhookKeyDeleteResponse,
    "WebhookKeyRequest": WebhookKeyRequest,
    "WebhookKeyResponse": WebhookKeyResponse,
    "WebhookKeyUpdateRequest": WebhookKeyUpdateRequest,
    "WebhookLog": WebhookLog,
    "WebhookRequest": WebhookRequest,
    "WebhookResponse": WebhookResponse,
    "WebhookUpdateRequest": WebhookUpdateRequest,
    "WhitelistlistRuleResponse": WhitelistlistRuleResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
