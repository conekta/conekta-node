import { ShippingsApi } from "../api";
import { Configuration } from "../configuration";
import { ShippingRequest } from "../model";
import { baseTest } from "./base-test";

describe("shpping api", () => {
  let client: ShippingsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new ShippingsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", async () => {
      expect(client).toBeDefined();
    });
  });
  describe("Order Create shipping", () => {
    it("should create shipping", async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const request: ShippingRequest = {
        amount: 500,
      }

      const response = (await client.ordersCreateShipping(ID, request, "es")).data;
      const parent_id = (response as unknown as {parent_id: string}).parent_id;
      const response_object = (response as unknown as {object: string}).object;

      expect(response).toBeDefined();
      expect(parent_id).toBe(ID);
      expect(response.amount).toBe(request.amount);
      expect(response_object).toBe("shipping_line");
    });
  });

  describe("Order Update shipping", () => {
    it("should update shipping", async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const shipping_id = "ship_lin_2tVzNuDGSaDwreMg6";
      const request: ShippingRequest = {
        amount: 540,
      }

      const response = (await client.ordersUpdateShipping(ID, shipping_id, request, "es")).data;
      const parent_id = (response as unknown as {parent_id: string}).parent_id;
      const response_object = (response as unknown as {object: string}).object;
      const id = (response as unknown as {id: string}).id;

      expect(response).toBeDefined();
      expect(parent_id).toBe(ID);
      expect(id).toBe(shipping_id);
      expect(response.amount).toBe(request.amount);
      expect(response_object).toBe("shipping_line");
    });
  });

  describe("Order Delete shipping", () => {
    it("should delete shipping", async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const shipping_id = "ship_lin_2tVzNuDGSaDwreMg6";

      const response = (await client.ordersDeleteShipping(ID, shipping_id, "es")).data;
      const parent_id = (response as unknown as {parent_id: string}).parent_id;
      const response_object = (response as unknown as {object: string}).object;
      const id = (response as unknown as {id: string}).id;

      expect(response).toBeDefined();
      expect(parent_id).toBe(ID);
      expect(id).toBe(shipping_id);
      expect(response_object).toBe("shipping_line");
    });
  });
});