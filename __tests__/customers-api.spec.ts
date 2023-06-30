import { CustomersApi } from "../api";
import { Configuration } from "../configuration";
import { Customer, CustomerFiscalEntitiesRequest, CustomerPaymentMethodsRequest, PaymentMethodSpeiRecurrent, CustomerShippingContacts, PaymentMethodCardResponse, PaymentMethodCashResponse, SubscriptionRequest, UpdateCustomer, CustomerUpdateFiscalEntitiesRequest } from "../model";
import { baseTest } from './base-test';

describe('CustomersApi', () => {
  let api: CustomersApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    api = new CustomersApi(config, baseTest.BasePath);
  });
  describe("general", () => {
    it('should be defined', () => {
      expect(api).toBeInstanceOf(CustomersApi);
    });
  });
  describe('Create customer', () => {
    it('should return a customer', async () => {
      var customer = get_full_customer();

      const customer_response = (await api.createCustomer(customer)).data

      expect(customer_response.id).toBeTruthy();
      expect(customer_response.custom_reference).toBe(customer.custom_reference);
      expect(customer_response.fiscal_entities.data).toHaveLength(1);
      expect(customer_response.fiscal_entities.has_more).toBeFalsy();
      expect(customer_response.livemode).toBeTruthy()
    });
  });
  describe('Create customer Fiscal entities', () => {
    it('should return a customer', async () => {
      const id = "cus_2tXyF9BwPG14UMkkg";
      var customer_fiscal_entity: CustomerFiscalEntitiesRequest = {
        address: {
          street1: "Calle 123, int 404",
          city: "Cuauhtémoc",
          country: "mx",
          postal_code: "06140",
          external_number: "404",
        }
      };

      const response = (await api.createCustomerFiscalEntities(id, customer_fiscal_entity)).data;

      expect(response).toBeDefined();
      expect(response.address.country).toEqual(customer_fiscal_entity.address.country);
      expect(response.parent_id).toEqual(id);
      expect(response.id).toBeTruthy();
    });
  });
  describe('Delete a customer', () => {
    it('should return a customer', async () => {
      const id = "cus_2tXyF9BwPG14UMkkg";

      const response = (await api.deleteCustomerById(id)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
    });
  });
  describe('getCustomer by id', () => {
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

    it('should return a customer cash', async () => {
      const id = "cus_2rGtVzg5V2KZrKXBh";

      const response = (await api.getCustomerById(id)).data

      expect(response).toBeDefined();
      expect(response.id).toBe(id);
      expect(response.payment_sources?.data).toHaveLength(1);
      expect(response.payment_sources?.data[0].type).toBe("oxxo_recurrent");
      const cash = response.payment_sources?.data[0] as PaymentMethodCashResponse
      expect(cash.provider).toBe("Oxxo");
      expect(cash.object).toBe("payment_source");
    });

    it('should return a customer spei', async () => {
      const id = "cus_2tYELwYTKSB5hDXsr";

      const response = (await api.getCustomerById(id)).data

      expect(response).toBeDefined();
      expect(response.id).toBe(id);
      expect(response.payment_sources?.data).toHaveLength(1);
      expect(response.payment_sources?.data[0].type).toBe("spei_recurrent");
      const transfer = response.payment_sources?.data[0] as PaymentMethodSpeiRecurrent

      expect(transfer.reference).toBe("646180111805035870");
      expect(transfer.object).toBe("payment_source");
      expect(transfer.expires_at).toBe("none");
    });
  });
  describe('Get customers', () => {
    it('should return a list of customers', async () => {

      const limit = 21;
      const response = (await api.getCustomers("es", undefined, limit)).data

      expect(response).toBeDefined();
      expect(response.next_page_url).not.toBeNull();
      expect(response.previous_page_url).toBeNull();
      expect(response.has_more).toBeTruthy();
      expect(response.object).toBe("list");
      expect(response.data).toHaveLength(limit);
    });
    it('should return a list of customers with next ', async () => {
      const limit = 22;
      const next = "cus_2sthLBEZRLp2s6GWc";

      var response = (await api.getCustomers("es", undefined, limit, undefined, next)).data

      expect(response).toBeDefined();
      expect(response.next_page_url).not.toBeNull();
      expect(response.previous_page_url).not.toBeNull();
      expect(response.has_more).toBeTruthy();
      expect(response.object).toBe("list");
      expect(response.data).toHaveLength(limit);
    });
    it('should return a list of customers with previous ', async () => {
      const limit = 23;
      const previous = "cus_2ss5YAeTKuEr5M4fD";

      var response = (await api.getCustomers("es", undefined, limit, undefined, previous)).data

      expect(response).toBeDefined();
      expect(response.next_page_url).not.toBeNull();
      expect(response.previous_page_url).toBeNull();
      expect(response.has_more).toBeTruthy();
      expect(response.object).toBe("list");
    });
  });

  describe('Update customer', () => {
    it('should return a customer', async () => {
      const id = "cus_2tYENskzTjjgkGQLt";
      var update_customer: UpdateCustomer = {
        email: "dotnet@test.com"
      };

      const response = (await api.updateCustomer(id, update_customer)).data

      expect(response).toBeDefined();
      expect(response.email).toEqual(update_customer.email);
      expect(response.id).toBe(id);
    });
  });

  describe('update customer fiscal entities', () => {
    it('should return a customer fiscal entities', async () => {
      const id = "cus_2tYENskzTjjgkGQLt";
      const fiscal_entities_id = "fis_ent_2tYENskzTjjgkGQLr";
      var update_customer_fiscal_entity: CustomerUpdateFiscalEntitiesRequest = {
        tax_id: "tax_28764234"
      };

      const response = (await api.updateCustomerFiscalEntities(id, fiscal_entities_id, update_customer_fiscal_entity)).data

      expect(response).toBeDefined();
      expect(response.tax_id).toEqual(update_customer_fiscal_entity.tax_id);
      expect(response.parent_id).toEqual(id);
      expect(response.id).toEqual(fiscal_entities_id);
      expect(response.default).toBeTruthy();
      expect(response.object).toBe("fiscal_entity");
    });
  });

});


function get_full_customer (): Customer {

  var fiscal_entities: Array<CustomerFiscalEntitiesRequest> = [{
    address: {
      street1: "Calle 123, int 404",
      street2: "Col. Condesa",
      postal_code: "06140",
      city: "Cuauhtémoc",
      state: "Ciudad de México",
      country: "MX",
      residential: true,
      external_number: "404",
    }
  }];
  var payment_sources: Array<CustomerPaymentMethodsRequest> = [{
    type: "card",
    token_id: "tok_2tXyExrU6U7yiaTto",
  }];
  var shipping_contacts: Array<CustomerShippingContacts> = [{
    address: {
      street1: "Calle 123, int 404",
      country: "mexico",
      postal_code: "11011",
    },
    phone: "+54874122144",
  }];

  const subscription: SubscriptionRequest = {
    plan_id: "plan_2tXx672QLQ68CkmMn",
    card_id: "card_2tXx8KUxw6311kEbs",
    trial_end: 1679321468,
  };

  var customer: Customer = {
    name: "Fulanito Pérez",
    phone: "5555555555",
    email: "test@conekta.com",
    corporate: true,
    plan_id: "plan_2tXx672QLQ68CkmMn",
    default_shipping_contact_id: "",
    default_payment_source_id: "",
    custom_reference: "dotnet_12345678",
    fiscal_entities: fiscal_entities,
    payment_sources: payment_sources,
    shipping_contacts: shipping_contacts,
    subscription: subscription
  };
  return customer;
}
