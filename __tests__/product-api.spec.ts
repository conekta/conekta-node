import { ProductsApi } from "../api";
import { Configuration } from "../configuration";
import { Product, UpdateProduct } from "../model";
import { baseTest } from "./base-test";

describe("Product API", () => {
  let client: ProductsApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new ProductsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", async () => {
      expect(client).toBeDefined();
    });
  });
  describe("create product", () => {
    it("should create product", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const request: Product = {
        name: "Pago Mensualidad test",
        description: "Mes de marz.",
        quantity: 1,
        unit_price: 1000,
        tags: ["Pago 2", "Pago mensualidad 2"],
      };

      const response = (await client.ordersCreateProduct(id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.name).toBe(request.name);
      expect(response.parent_id).toBe(id);
      expect(response.object).toBe("line_item");
    });
  });
  describe("update product", () => {
    it("should update product", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const product_id = "line_item_2tVz8UkyWhSxLfUd7";
      const request: UpdateProduct = {
        description: "Pago Mensualidad",
      };

      const response = (await client.ordersUpdateProduct(id, product_id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toBe(id);
      expect(response.id).toBe(product_id);
      expect(response.object).toBe("line_item");
    });
  });

  describe("delete product", () => {
    it("should delete product", async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const product_id = "line_item_2tVz8UkyWhSxLfUd7";

      const response = (await client.ordersDeleteProduct(id, product_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toBe(id);
      expect(response.id).toBe(product_id);
      expect(response.object).toBe("line_item");
    });
  });
});