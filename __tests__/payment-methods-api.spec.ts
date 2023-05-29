import { PaymentMethodsApi } from "../api/payment-methods-api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { PaymentMethodCashRequest} from "../model";
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
      const request: PaymentMethodCashRequest  = {
        type : "oxxo_recurrent",
      };

      const response = (await client.createCustomerPaymentMethods(customer_id, request)).data;
      expect(response).toBeDefined();
    });
  });
});