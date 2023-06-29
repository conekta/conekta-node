import { ShippingContactsApi } from "../api";
import { Configuration } from "../configuration";
import { CustomerShippingContacts, CustomerUpdateShippingContacts } from "../model";
import { baseTest } from "./base-test";

describe("shipping contacts", () => {
  let client: ShippingContactsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new ShippingContactsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", async () => {
      expect(client).toBeDefined();
    });
  });

  describe("create shipping contact", () => {
    it("should create shipping contact", async () => {
      const id = "cus_2tXyF9BwPG14UMkkg";
      const request: CustomerShippingContacts = {
        address: {
          street1: "Calle 100",
          city: "mexico",
          country: "MX",
          postal_code: "11000",
        },
        phone: "1234567890",
        receiver: "Juan Perez",
      };

      const response = (await client.createCustomerShippingContacts(id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toBe(id);
      expect(response.address.country).not.toStrictEqual(request.address.country);
      expect(response.id).toBeDefined();
      expect(response.created_at).toEqual(1679009479);
    });
  });

  describe("update shipping contact", () => {
    it("should update shipping contact", async () => {
      const id = "cus_2tZWxbTPtQgGJGh8P";
      const shipping_contact_id = "ship_cont_2tZWzJPBf87C6TcoQ";
      const request: CustomerUpdateShippingContacts = {
        phone: "3143145050",
      }

      const response = (await client.updateCustomerShippingContacts(id, shipping_contact_id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toBe(id);
      expect(response.id).toBe(shipping_contact_id);
      expect(response.phone).toBe(request.phone);
    });
  });

  describe("delete shipping contact", () => {
    it("should delete shipping contact", async () => {
      const id = "cus_2tZWxbTPtQgGJGh8P";
      const shipping_contact_id = "ship_cont_2tZWzJPBf87C6TcoQ";

      const response = (await client.deleteCustomerShippingContacts(id, shipping_contact_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toBe(id);
      expect(response.id).toBe(shipping_contact_id);
    });
  });
});