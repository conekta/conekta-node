import { OrdersApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { OrderRequest, OrderRequestCustomerInfo, CustomerInfoJustCustomerId, Product, ChargeRequest, PaymentMethodCash, CheckoutRequest } from "../model";


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
  });
});

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

