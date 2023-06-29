import { TaxesApi } from "../api";
import { Configuration } from "../configuration";
import { OrderTaxRequest, UpdateOrderTaxRequest } from "../model";
import { baseTest } from "./base-test";

describe("Taxes API", () => {

  let client: TaxesApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new TaxesApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Order create tax", () => {
    it("should create a tax for an order", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const request: OrderTaxRequest = {
        amount: 100,
        description: "test",
        metadata: { key: "value" },
      };

      const response = (await client.ordersCreateTaxes(id, request)).data;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(response.parent_id).toBe(id);
      expect(response.id).toBeDefined();
    });
  });

  describe("Order update tax", () => {
    it("should update a tax for an order", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const tax_id = "tax_lin_2tVzVp6AAptCRHhgt";
      const request: UpdateOrderTaxRequest = {
        amount: 99,
      };

      const response = (await client.ordersUpdateTaxes(id, tax_id, request)).data;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(response.parent_id).toBe(id);
      expect(response.id).toBe(tax_id);
    });
  });

  describe("Delete Order Tax", () => {
    it("should delete a tax for an order", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const tax_id = "tax_lin_2tVzVp6AAptCRHhgt";

      const response = (await client.ordersDeleteTaxes(id, tax_id)).data;

      expect(response).toBeDefined();
      expect(response.id).toBe(tax_id);
    });
  });
});