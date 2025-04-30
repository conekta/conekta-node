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
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const request: OrderTaxRequest = {
        amount: 100,
        description: "test",
        metadata: { key: "value" },
      };

      const response = (await client.ordersCreateTaxes(ID, request)).data;
      const parent_id = (response as unknown as {parent_id: string}).parent_id;
      const id = (response as unknown as {id: string}).id;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(parent_id).toBe(ID);
      expect(id).toBeDefined();
    });
  });

  describe("Order update tax", () => {
    it("should update a tax for an order", async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const tax_id = "tax_lin_2tVzVp6AAptCRHhgt";
      const request: UpdateOrderTaxRequest = {
        amount: 99,
      };

      const response = (await client.ordersUpdateTaxes(ID, tax_id, request)).data;
      const parent_id = (response as unknown as {parent_id: string}).parent_id;
      const id = (response as unknown as {id: string}).id;

      expect(response).toBeDefined();
      expect(response.amount).toBe(request.amount);
      expect(parent_id).toBe(ID);
      expect(id).toBe(tax_id);
    });
  });

  describe("Delete Order Tax", () => {
    it("should delete a tax for an order", async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const tax_id = "tax_lin_2tVzVp6AAptCRHhgt";

      const response = (await client.ordersDeleteTaxes(ID, tax_id)).data;
      const id = (response as unknown as {id: string}).id;

      expect(response).toBeDefined();
      expect(id).toBe(tax_id);
    });
  });
});