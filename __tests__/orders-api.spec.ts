import { OrdersApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { OrderRequest, CustomerInfoJustCustomerId, Product, ChargeRequest, PaymentMethodCash, CheckoutRequest, PaymentMethodBankTransfer, PaymentMethodCard, OrderRefundRequest, OrderCaptureRequest, OrderUpdateRequest } from "../model";

interface IPaymentMethodCashMock extends PaymentMethodCash { 
  service_name: string;
  reference: string;
  expires_at: string;
}

interface IPaymentMethodBankMock extends PaymentMethodBankTransfer { 
  clabe: string; 
}

describe("Orders api", () => {
  let client: OrdersApi;

  beforeAll(async () => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new OrdersApi(config, baseTest.BasePath);
  });

  describe("General", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Create Order", () => {
    it("should failed with invalid request", async () => {
      const order_requet: OrderRequest = get_order_request_fail();

      try {
        (await client.createOrder(order_requet));
        fail("should fail");
      } catch (e) {
        expect(e.response.status).toBe(402);
        expect(e.response.data.type).toEqual("processing_error");
      }

    });

    it("cash", async () => {

      const order_requet = get_order_cash_request();

      const response = (await client.createOrder(order_requet, "es")).data;
      const data = (response.charges as unknown as { data: any[]}).data
      const expires_at = (order_requet.charges[0].payment_method as unknown as { expires_at: string}).expires_at

      expect(response).toBeDefined();
      expect(response.payment_status).toBe("pending_payment");
      expect(response.currency).toBe("MXN");
      expect(response.customer_info.customer_id).toBe("cus_2tKcHxhTz7xU5SymF");
      expect(data[0].payment_method as PaymentMethodCash).toBeDefined();
      expect((data[0].payment_method as IPaymentMethodCashMock).service_name).toEqual("OxxoPay");
      expect((data[0].payment_method as IPaymentMethodCashMock).reference).toEqual("93000262280678");
      expect((data[0].payment_method as PaymentMethodCash).type).toEqual("oxxo");
      expect((data[0].payment_method as IPaymentMethodCashMock).expires_at).toEqual(expires_at);
    });

    it("msi", async () => {

      const order_request: OrderRequest = get_order_msi_request();

      const response = (await client.createOrder(order_request)).data;

      expect(response).toBeDefined();
      expect(response.checkout).toBeDefined();
      expect(response.checkout.id).toBeDefined();
      expect(response.id).toEqual("ord_msi_2tUgccjdQJ7SdBrXb");
      expect(response.checkout.type).toEqual("Integration");
      expect(response.checkout.monthly_installments_enabled).toEqual(true);
      expect(response.checkout.monthly_installments_options).toEqual([3, 6, 12]);
    });

    it("card", async () => {
      const order_request: OrderRequest = get_order_card_request();

      const response = (await client.createOrder(order_request)).data;

      expect(response).toBeDefined();
      expect(response.checkout).toBeDefined();
      expect(response.checkout.id).toBeDefined();
      expect(response.id).toEqual("ord_saved_card_2tUgccjdQJ7SdBrXb");
      expect(response.checkout.type).toEqual("Integration");
      expect(response.checkout.monthly_installments_enabled).toEqual(false);
      expect(response.checkout.monthly_installments_options).toEqual([]);
      expect(response.checkout.on_demand_enabled).toBeTruthy();
    });

    it('checkout', async () => {

      const order_request: OrderRequest = get_order_checkout_request();

      const response = (await client.createOrder(order_request)).data;

      expect(response).toBeDefined();
      expect(response.customer_info.customer_id).toEqual("cus_2o8jK3TDtejmz1sYc");
      expect(response.channel.checkout_request_type).toEqual("Integration");
      expect(response.checkout.type).toEqual("Integration");
      expect(response.checkout.expires_at).toEqual(order_request.checkout.expires_at);
      expect(response.amount).toEqual(order_request.line_items[0].unit_price);
      expect(Object.keys(response.metadata).length).toBeGreaterThan(0);
      expect(response.checkout).toBeDefined();
      expect(response.checkout.id).toBeDefined();
      expect(response.checkout.monthly_installments_enabled).toBeFalsy();
    });

    it('3ds', async () => {
        
        const order_request: OrderRequest = get_order_checkout_request();
        order_request.three_ds_mode = 'smart';
        order_request.customer_info  = {
          customer_id: "cus_2v4G1Zx9wRpN5vyy2"
        }
        order_request.return_url = 'https://www.google.com';
  
        const response = (await client.createOrder(order_request)).data;
  
        expect(response).toBeDefined();
        expect(response.customer_info.customer_id).toEqual("cus_2v4G1Zx9wRpN5vyy2");
        expect(response.next_action).toBeTruthy();
        expect(response.next_action.type).toEqual("redirect_to_url");
        expect(response.next_action.redirect_to_url.return_url).toBeDefined();
    });

  });

  describe("Get Order", () => {
    it("should return a bank payment method transfer", async () => {

      const id = "ord_2tUyGSk9TNWUcyvjn";

      const response = (await client.getOrderById(id, "es")).data;
      const data = (response.charges as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].payment_method).toBeDefined();
      expect(response.id).toEqual(id);
      expect(data[0].payment_method.object).toEqual("bank_transfer_payment");
      expect((data[0].payment_method as IPaymentMethodBankMock).clabe).toEqual("646180111805035430");
      expect((data[0].payment_method as PaymentMethodBankTransfer).type).toEqual("spei");
    });
    it("not should return an order", async () => {

      const id = "ord_2tUhuyzqLi6UJE9D12";

      try {
        (await client.getOrderById(id, "en"));
        fail("should fail");
      } catch (e) {
        expect(e.response.status).toBe(404);
        expect(e.response.data.type).toEqual("resource_not_found_error");
      }
    });
  });

  describe("Get Orders", () => {
    it("should return a list of orders", async () => {
      const limit = 20;

      const response = (await client.getOrders("en", null, limit)).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeTruthy();
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.next_page_url).toStrictEqual("https://api-core.stg.conekta.io/orders?next=ord_2tNDyQbJacvUZiyfp");
      expect(response.previous_page_url).toBeFalsy();
      expect(response.data.length).toEqual(limit);
      expect(response.object).toEqual("list"); 
    });
    it("should return a list of orders with next", async () => {

      const limit = 19;

      const response = (await client.getOrders("en", null, limit, null, "ord_2tNDyQbJacvUZiyfp")).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeTruthy();
      expect(response.next_page_url).toEqual("https://api-core.stg.conekta.io/orders?limit=19&next=ord_2tKZmA749BLsMRgBg");
      expect(response.previous_page_url).toEqual("https://api-core.stg.conekta.io/orders?limit=19&previous=ord_2tNDwzeMnVSU9kKHR");
      expect(response.object).toEqual("list");
      expect(response.data.length).toEqual(limit);
      expect(response.data[0].customer_info.customer_id).toEqual("cus_2tKcHxhTz7xU5SymF");
      expect(response.data[0].shipping_contact.address.country).toEqual("mx");
    });
    it("should return a list of orders with previous", async () => {
      const limit = 21;

      const response = (await client.getOrders("en", null, limit, null, null, "ord_2tHuXwkFTkjAbMGjU")).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeTruthy();
      expect(response.next_page_url).toEqual("https://api-core.stg.conekta.io/orders?limit=21&next=ord_2tKZmA749BLsMRgBg");
      expect(response.previous_page_url).toEqual("https://api-core.stg.conekta.io/orders?limit=21&previous=ord_2tNDzhA4Akmzj11AS");
      expect(response.object).toEqual("list");
      expect(response.data.length).toEqual(limit);
      expect(response.data[0].customer_info.customer_id).toEqual("cus_2tKcHxhTz7xU5SymF");
      expect(response.data[0].shipping_contact.address.country).toEqual("mx");
    });

    it("should return a list of orders with search", async () => {
      const limit = 22;

      const response = (await client.getOrders("en", null, limit, "ord_2tNDzhA4Akmzj11AS")).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeFalsy();
      expect(response.next_page_url).toBeFalsy();
      expect(response.previous_page_url).toBeFalsy();
      expect(response.object).toEqual("list");
      expect(response.data.length).toEqual(1);
      expect(response.data[0].customer_info.customer_id).toEqual("cus_2tKcHxhTz7xU5SymF");
      expect(response.data[0].id).toEqual("ord_2tNDzhA4Akmzj11AS");
      expect(response.data[0].shipping_contact.address.postal_code).toEqual("06100");
    });
  });

  describe("refund order", () => {
    it("should refund an order", async () => {

      const id = "ord_2tV52JvSom2w3E8bX";
      const order_refund_request: OrderRefundRequest = {
        amount: 15000,
        reason: "requested_by_client"
      }
      const response = (await client.orderRefund(id, order_refund_request)).data;
      const data = (response.charges as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(response.payment_status).toEqual("partially_refunded");
      expect(data[0].status).toEqual("partially_refunded");
      expect(response.amount_refunded).toEqual(order_refund_request.amount);
      expect(response.is_refundable).toBeTruthy();
      expect(data[0].order_id).toEqual(id);
      expect(data[0].refunds.data.length).toEqual(1);
      expect(-data[0].refunds.data[0].amount).toEqual(order_refund_request.amount);
      expect(data[0].refunds.data[0].object).toEqual("refund");
    });
  });
  describe("Order capture", () => {
    it("should capture an order", async () => {

      const response = (await client.ordersCreateCapture("ord_2tVKoTd79XK1GqJme", "en")).data;

      expect(response).toBeDefined();
      expect(response.payment_status).toEqual("paid");
      expect(response.amount).toEqual(40000);
    });
    it("should capture an order with body", async () => {
      const body: OrderCaptureRequest = {
        amount: 40000,
      }

      const response = (await client.ordersCreateCapture("ord_2tVKoTd79XK1GqJmm", "en", null, body)).data;

      expect(response).toBeDefined();
      expect(response.payment_status).toEqual("paid");
      expect(response.amount).toEqual(40000);
    });
  });

  describe("Order update", () => {
    it("should update an order", async () => {
      const id = "ord_2tVPCGRXnMXKdvcsj";
      const products : Array<Product> = [
        {
          name:  "Pago Mensualidad enero",
          quantity: 2,
          unit_price: 41000,
          description: "Pago Mensualidad enero",
          tags: ["Pago", "Pago mensualidad"]
        }
      ];
      const request : OrderUpdateRequest = {
        line_items: products,
      }

      const response = (await client.updateOrder(id, request)).data;
      const data = (response.line_items as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(data.length).toEqual(1);
      expect(data[0].unit_price).toEqual(request.line_items[0].unit_price);
      expect(response.id).toEqual(id);
      expect(data[0].tags).toEqual(request.line_items[0].tags);
      expect(response.created_at).not.toEqual(response.updated_at);
    });
  });

  describe("Order cancel", () => {
    it("should cancel an order", async () => {
      const id = "ord_2tqaGQYZyvBsMKEgs";

      const response = (await client.cancelOrder(id)).data;
      const data = (response.charges as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.payment_status).toEqual("canceled");
      expect(data[0].status).toEqual("canceled");
    });
  });
});



function get_order_checkout_request () {
  const products: Array<Product> = [
    {
      name: "Box of Cohiba S1s",
      quantity: 1,
      unit_price: 35000
    }
  ];
  const checkout: CheckoutRequest = {
    expires_at: Math.round((new Date().getTime() + 259200000) / 1000) - 2208988800,
    allowed_payment_methods: ["cash", "card", "bank_transfer"],
  };
  const order_request: OrderRequest = {
    currency: "MXN",
    line_items: products,
    checkout: checkout,
    metadata: { test: "true" },
    customer_info: {
      customer_id: "cus_2o8jK3TDtejmz1sYc"
    }
  };
  return order_request;
}

function get_order_card_request () {
  const products: Array<Product> = [
    {
      name: "toshiba",
      quantity: 1,
      unit_price: 1555
    }
  ];
  const checkout: CheckoutRequest = {
    expires_at: Math.round((new Date().getTime() + 259200000) / 1000) - 2208988800,
    allowed_payment_methods: ["cash", "card", "bank_transfer"],
    on_demand_enabled: true
  };
  const customer_info: CustomerInfoJustCustomerId = {
    customer_id: "cus_save_card_2o8jK3TDtejmz1sYd"
  };
  const order_request: OrderRequest = {
    currency: "MXN",
    customer_info: customer_info,
    line_items: products,
    checkout: checkout,
    metadata: { test: "true" }
  };
  return order_request;
}

function get_order_msi_request () {
  const customer_info: CustomerInfoJustCustomerId = {
    customer_id: "cus_msi_2o8jK3TDtejmz1sYd"
  };
  const products: Array<Product> = [
    {
      name: "toshiba",
      quantity: 1,
      unit_price: 1555
    }
  ];
  const checkout: CheckoutRequest = {
    expires_at: Math.round((new Date().getTime() + 259200000) / 1000) - 2208988800,
    allowed_payment_methods: ["cash", "card", "bank_transfer"],
    monthly_installments_enabled: true,
    monthly_installments_options: [3, 6, 12],
  };
  const order_request: OrderRequest = {
    currency: "MXN",
    customer_info: customer_info,
    line_items: products,
    checkout: checkout,
    metadata: { test: "true" }
  };
  return order_request;
}

function get_order_request_fail () {
  const products: Array<Product> = [
    {
      name: "toshiba",
      description: "Mes de Febrero.",
      quantity: 1,
      unit_price: 1555,
      metadata: {
        pago: "mensualidad",
      }
    }
  ];
  const customer_info: CustomerInfoJustCustomerId = {
    customer_id: "cus_2tKcHxhTz7xU5SymF2"
  };
  const thirty_days_from_now_date_time = new Date();
  thirty_days_from_now_date_time.setDate(thirty_days_from_now_date_time.getDate() + 30);
  const expires_at = Math.floor(thirty_days_from_now_date_time.getTime() / 1000);

  const charges: Array<ChargeRequest> = [
    {
      amount: 2000,
      payment_method: {
        expires_at: expires_at,
        type: "default"
      }
    }
  ];
  const order_requet: OrderRequest = {
    currency: "MXN",
    customer_info: customer_info,
    line_items: products,
    charges: charges
  };
  return order_requet;
}

function get_order_cash_request () {
  const products: Array<Product> = [
    {
      name: "toshiba",
      quantity: 1,
      unit_price: 1555
    }
  ];

  const thirty_days_from_now_date_time = new Date();
  thirty_days_from_now_date_time.setDate(thirty_days_from_now_date_time.getDate() + 30);
  const expires_at = Math.floor(thirty_days_from_now_date_time.getTime() / 1000);

  const charges: Array<ChargeRequest> = [
    {
      amount: 1555,
      payment_method: {
        expires_at: expires_at,
        type: "cash"
      }
    }
  ];

  const customer_info: CustomerInfoJustCustomerId = {
    customer_id: "cus_2tKcHxhTz7xU5SymF"
  };
  const order_requet: OrderRequest = {
    currency: "MXN",
    customer_info: customer_info,
    line_items: products,
    charges: charges,
    pre_authorize: false,
    shipping_contact: {
      address: {
        street1: "Calle 123, int 2",
        city: "Queretaro",
        state: "Queretaro",
        country: "mx",
        postal_code: "76000",
        residential: true
      },
      metadata: {}
    },
    fiscal_entity: {
      address: {
        street1: "Calle 123, int 2",
        city: "Queretaro",
        state: "Queretaro",
        country: "mx",
        postal_code: "76000",
        external_number: "123",
      },
      metadata: {}
    }
    }
  return order_requet;
}

