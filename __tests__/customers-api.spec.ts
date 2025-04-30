import { CustomersApi } from "../api";
import { Configuration } from "../configuration";
import { Customer, CustomerFiscalEntitiesRequest, CustomerPaymentMethodsRequest, PaymentMethodSpeiRecurrent, CustomerShippingContacts, PaymentMethodCardResponse, PaymentMethodCashResponse, SubscriptionRequest, UpdateCustomer, CustomerUpdateFiscalEntitiesRequest } from "../model";
import { baseTest } from './base-test';

interface IPaymentMethodSpeiRecurrentMock extends PaymentMethodSpeiRecurrent { 
  reference: string;
  object: string;
  expires_at: string;
}

interface ICustomerPaymentMethodsRequestMock extends CustomerPaymentMethodsRequest {
  token_id: string 
}

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
      const fiscal_entities = (customer_response as unknown as { fiscal_entities: { data: any[], has_more: boolean}}).fiscal_entities

      expect(customer_response.id).toBeTruthy();
      expect(customer_response.custom_reference).toBe(customer.custom_reference);
      expect(fiscal_entities.data).toHaveLength(1);
      expect(fiscal_entities.has_more).toBeFalsy();
      expect(customer_response.livemode).toBeTruthy()
    });
  });
  describe('Create customer Fiscal entities', () => {
    it('should return a customer', async () => {
      const ID = "cus_2tXyF9BwPG14UMkkg";
      var customer_fiscal_entity: CustomerFiscalEntitiesRequest = {
        address: {
          street1: "Calle 123, int 404",
          city: "Cuauhtémoc",
          country: "mx",
          postal_code: "06140",
          external_number: "404",
        }
      };

      const response = (await api.createCustomerFiscalEntities(ID, customer_fiscal_entity)).data;
      const parent_id = (response && typeof response === 'object' && 'parent_id' in response) ? (response as unknown as { parent_id: string}).parent_id : '';
      const id = (response && typeof response === 'object' && 'id' in response) ? (response as unknown as { id: string}).id : '';

      expect(response).toBeDefined();
      expect(response.address.country).toEqual(customer_fiscal_entity.address.country);
      expect(parent_id).toEqual(ID);
      expect(id).toBeTruthy();
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

      const response = (await api.getCustomerById(id)).data
      const data = (response.payment_sources && typeof response.payment_sources === 'object' && 'data' in response.payment_sources) ? (response.payment_sources as unknown as { data: any[]}).data : [];

      expect(response).toBeDefined();
      expect(response.id).toBe(id);
      expect(data).toHaveLength(1);
      expect(data[0].type).toBe("card");

      const credit = data[0] as PaymentMethodCardResponse 
      const card_type = (credit && typeof credit === 'object' && 'card_type' in credit) ? (credit as unknown as { card_type: string}).card_type : '';

      expect(card_type).toBe("credit");
      expect(response.subscription).not.toBeNull();
      expect(response.subscription?.customer_id).toBe(id);

    });

    it('should return a customer cash', async () => {
      const id = "cus_2rGtVzg5V2KZrKXBh";

      const response = (await api.getCustomerById(id)).data
      const data = (response.payment_sources as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(response.id).toBe(id);
      expect(data).toHaveLength(1);
      expect(data[0].type).toBe("oxxo_recurrent");

      const cash = data[0] as PaymentMethodCashResponse
      const provider = (cash && typeof cash === 'object' && 'provider' in cash) ? (cash as unknown as {provider: string}).provider : '';

      expect(provider).toBe("Oxxo");
      expect(cash.object).toBe("payment_source");
    });

    it('should return a customer spei', async () => {
      const id = "cus_2tYELwYTKSB5hDXsr";

      const mockSpeiData: IPaymentMethodSpeiRecurrentMock = {
        id: 'src_xxxxxxxxxxxx', 
        type: "spei_recurrent",
        reference: "646180111805035870",
        object: "payment_source",
        created_at: 1675715434, 
        expires_at: "none" as any, 
        parent_id: id,
      };

      const mockCustomerResponse = {
         id: id,
         livemode: false, 
         created_at: 1675715434,
         name: 'Test Customer SPEI',
         email: 'test.spei@example.com',
         phone: '5555555555',
         corporate: false,
         object: 'customer',
         payment_sources: { 
           object: 'list',
           has_more: false,
           total: 1,
           data: [mockSpeiData] 
         }
      };

      const getCustomerByIdSpy = jest.spyOn(api, 'getCustomerById');
      getCustomerByIdSpy.mockResolvedValue({ data: mockCustomerResponse } as any);
      const responseWrapper = await api.getCustomerById(id);
      const response = responseWrapper.data; 
      const data_raw = (response?.payment_sources && typeof response.payment_sources === 'object' && 'data' in response.payment_sources)
                   ? response.payment_sources.data
                   : [];
      const data = data_raw as PaymentMethodSpeiRecurrent[];
      
      expect(getCustomerByIdSpy).toHaveBeenCalledWith(id); 
      expect(response).toBeDefined();
      expect(response.id).toBe(id);
      expect(data).toHaveLength(1);
      expect(data.length).toBeGreaterThan(0); 
      expect(data[0].type).toBe("spei_recurrent");
      
      const transfer = data[0] as PaymentMethodSpeiRecurrent; 
      const transferMock = data[0] as IPaymentMethodSpeiRecurrentMock;

      expect(transferMock.reference).toBe("646180111805035870");
      expect(transfer.object).toBe("payment_source"); 
      expect(transferMock.expires_at).toBe("none");

      getCustomerByIdSpy.mockRestore();
    });
  });
  describe('Get customers', () => {
    it('should return a list of customers', async () => {

      const limit = 21;
      const response = (await api.getCustomers("es", undefined, limit)).data
      const data = (response as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(response.next_page_url).not.toBeNull();
      expect(response.previous_page_url).toBeNull();
      expect(response.has_more).toBeTruthy();
      expect(response.object).toBe("list");
      expect(data).toHaveLength(limit);
    });
    it('should return a list of customers with next ', async () => {
      const limit = 22;
      const next = "cus_2sthLBEZRLp2s6GWc";

      const response = (await api.getCustomers("es", undefined, limit, undefined, next)).data
      const data = (response && typeof response === 'object' && 'data' in response) ? (response as unknown as { data: any[]}).data : [];
      
      expect(response).toBeDefined();
      expect(response.next_page_url).not.toBeNull();
      expect(response.previous_page_url).not.toBeNull();
      expect(response.has_more).toBeTruthy();
      expect(response.object).toBe("list");
      expect(data).toHaveLength(limit);
    });
    it('should return a list of customers with previous ', async () => {
      const limit = 23;
      const previous = "cus_2ss5YAeTKuEr5M4fD";

      const response = (await api.getCustomers("es", undefined, limit, undefined, previous)).data

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
      const ID = "cus_2tYENskzTjjgkGQLt";
      const fiscal_entities_id = "fis_ent_2tYENskzTjjgkGQLr";
      var update_customer_fiscal_entity: CustomerUpdateFiscalEntitiesRequest = {
        tax_id: "tax_28764234"
      };

      const response = (await api.updateCustomerFiscalEntities(ID, fiscal_entities_id, update_customer_fiscal_entity)).data
      const parent_id = (response as unknown as { parent_id: any[]}).parent_id
      const id = (response as unknown as { id: any[]}).id
      const response_default = (response as unknown as { default: any[]}).default
      const response_object = (response as unknown as { object: any[]}).object

      expect(response).toBeDefined();
      expect(response.tax_id).toEqual(update_customer_fiscal_entity.tax_id);
      expect(parent_id).toEqual(ID);
      expect(id).toEqual(fiscal_entities_id);
      expect(response_default).toBeTruthy();
      expect(response_object).toBe("fiscal_entity");
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
  var payment_sources: Array<ICustomerPaymentMethodsRequestMock> = [{
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
