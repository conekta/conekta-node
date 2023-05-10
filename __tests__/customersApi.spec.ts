import { CustomersApi, CustomersResponse,CustomerResponse } from "../api";
import { BaseTest } from './BaseTest';

describe('CustomersApi', () => {
  let api: CustomersApi;

  beforeAll(() => {
    api = new CustomersApi(BaseTest.BasePath);
    api.accessToken = "key_zRznLxwnWXiTRttqCCAt3Uw"
  });

  describe('getCustomers', () => {
    it('Get customerCard by id', async () => {

      const  id = "cus_2tXx8KUxw6311kEbs";
      const customer = (await api.getCustomerById(id)).body;

      expect(customer).toBeInstanceOf(CustomerResponse);
      expect(customer.id).toBe(id);
      expect(customer.paymentSources?.data).toHaveLength(1);

    });
    it('should return a list of customers', async () => {

      const limit = 21;
      var customers = (await api.getCustomers("es", undefined, limit)).body;

      expect(customers).toBeInstanceOf(CustomersResponse);
      expect(customers.nextPageUrl).toBeDefined();
      expect(customers.previousPageUrl).toBeNull();
      expect(customers.hasMore).toBeTruthy();
      expect(customers.object).toBe("list");
      expect(customers.data?.length).toBe(limit);
    });
  });
});
