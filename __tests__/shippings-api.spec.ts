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
      const id = "ord_2tVyWPnCPWbrV37mW";
      const request: ShippingRequest = {
        amount: 500,
        carrier: "FEDEX",
        tracking_number: "TRACK123",
        method: "Ground"
      }

      const response = (await client.ordersCreateShipping(id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(response.carrier).toBe(request.carrier);
      expect(response.tracking_number).toBe(request.tracking_number);
      expect(response.method).toBe(request.method);
    });
  });

  describe("Order Update shipping", () => {
    it("should update shipping", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const shipping_id = "ship_lin_2tVzNuDGSaDwreMg6";
      const request: ShippingRequest = {
        amount: 540,
        carrier: "DHL",
        tracking_number: "TRACK456",
        method: "Express"
      }

      const response = (await client.ordersUpdateShipping(id, shipping_id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(response.carrier).toBe(request.carrier);
      expect(response.tracking_number).toBe(request.tracking_number);
      expect(response.method).toBe(request.method);
    });
  });

  describe("Order Delete shipping", () => {
    it("should delete shipping", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const shipping_id = "ship_lin_2tVzNuDGSaDwreMg6";

      const response = (await client.ordersDeleteShipping(id, shipping_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.amount).toBeDefined();
      expect(response.carrier).toBeDefined();
      expect(response.tracking_number).toBeDefined();
      expect(response.method).toBeDefined();
    });
  });
});