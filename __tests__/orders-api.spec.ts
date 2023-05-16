import { OrdersApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { OrderRequest, OrderRequestCustomerInfo, CustomerInfoJustCustomerId, Product, ChargeRequest, PaymentMethodCash, CheckoutRequest, PaymentMethodBankTransfer } from "../model";


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

      expect(response).toBeDefined();
      expect(response.payment_status).toBe("pending_payment");
      expect(response.currency).toBe("MXN");
      expect(response.customer_info.customer_id).toBe("cus_2tKcHxhTz7xU5SymF");
      expect(response.charges.data[0].payment_method as PaymentMethodCash).toBeDefined();
      expect((response.charges.data[0].payment_method as PaymentMethodCash).service_name).toEqual("OxxoPay");
      expect((response.charges.data[0].payment_method as PaymentMethodCash).reference).toEqual("93000262280678");
      expect((response.charges.data[0].payment_method as PaymentMethodCash).type).toEqual("oxxo");
      expect((response.charges.data[0].payment_method as PaymentMethodCash).expires_at).toEqual(order_requet.charges[0].payment_method.expires_at);
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

  });

  describe("Get Order", () => {
    it("should return a bank payment method transfer", async () => {

      const id = "ord_2tUyGSk9TNWUcyvjn";

      var response = (await client.getOrderById(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.charges.data.length).toBeGreaterThan(0);
      expect(response.charges.data[0].payment_method).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.charges.data[0].payment_method.object).toEqual("bank_transfer_payment");
      expect((response.charges.data[0].payment_method as PaymentMethodBankTransfer).clabe).toEqual("646180111805035430");
      expect((response.charges.data[0].payment_method as PaymentMethodBankTransfer).type).toEqual("spei");
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
  };
  return order_requet;
}

