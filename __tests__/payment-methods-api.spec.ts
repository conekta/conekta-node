import { PaymentMethodsApi } from "../api/payment-methods-api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { PaymentMethodCard, PaymentMethodCashRequest, UpdatePaymentMethods } from "../model";

describe("PaymentMethodsApi", () => {
  let client: PaymentMethodsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new PaymentMethodsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("create customer payment method", () => {
    it("should create customer payment method", async () => {
      const customer_id = "cus_2tXyF9BwPG14UMkkg";
      const request: PaymentMethodCashRequest = {
        type: "oxxo_recurrent",
      };

      const response = (await client.createCustomerPaymentMethods(customer_id, request)).data;
      
      expect(response).toBeDefined();
      expect(response.type).toBe(request.type);
      expect(response.object).toBeDefined();
      expect(response.created_at).toBeDefined();
    });
  });

  describe("Delete customer payment method", () => {
    it("should delete customer payment method", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";
      const payment_method_id = "src_2tZWxbTPtQgGJGh8R";

      const response = (await client.deleteCustomerPaymentMethods(customer_id, payment_method_id, "en")).data;

      expect(response).toBeDefined();
      expect(response.type).toBeDefined();
      expect(response.object).toBeDefined();
      expect(response.created_at).toBeDefined();
    });
  });

  describe("update customer payment method", () => {
    it("should update customer payment method", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";
      const payment_method_id = "src_2tZWxbTPtQgGJGh8R";
      const request: UpdatePaymentMethods = {
        name: "name of person",
      };

      const response = (await client.updateCustomerPaymentMethods(customer_id, payment_method_id, request)).data;

      expect(response).toBeDefined();
      expect(response.type).toBeDefined();
      expect(response.object).toBeDefined();
      expect(response.created_at).toBeDefined();
    });
  });

  describe("get customer payment method", () => {
    it("should get customer payment method", async () => {
      const payment_method_id = "src_2tbd5Bgy67RL9oycM";

      const response = (await client.getCustomerPaymentMethods(payment_method_id)).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeDefined();
      expect(response.object).toBe("list");
      expect(response.next_page_url).toBeDefined();
      expect(response.previous_page_url).toBeDefined();
    });
  });
});