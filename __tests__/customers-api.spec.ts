import { CustomersApi } from "../api";
import { Configuration } from "../configuration";
import { PaymentMethodCardResponse } from "../model";
import { BaseTest } from './BaseTest';
describe('CustomersApi', () => {
  let api: CustomersApi;

  beforeAll(() => {
    const config = new Configuration({accessToken: "key_zRznLxwnWXiTRttqCCAt3Uw"});
    api = new CustomersApi(config, BaseTest.BasePath)
  });
  describe('getCustomers', () => {
    it('should return a customer card', async () => {

      const id = "cus_2tXx8KUxw6311kEbs";

      const customer = (await api.getCustomerById(id)).data

      expect(customer).toBeDefined();
      expect(customer.id).toBe(id);
      expect(customer.payment_sources?.data).toHaveLength(1);
      expect(customer.payment_sources?.data[0].type).toBe("card");

      const credit = customer.payment_sources?.data[0] as PaymentMethodCardResponse
      expect(credit.card_type).toBe("credit");
      expect(customer.subscription).not.toBeNull();
      expect(customer.subscription?.customer_id).toBe(id);
    });
  });
});
