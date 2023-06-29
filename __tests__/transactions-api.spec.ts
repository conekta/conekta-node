import { TransactionsApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
describe("TransactionsApi", () => {
  let client: TransactionsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new TransactionsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Get Transaction", () => {
    it("should get a transaction", async () => {
      const id = "6456b6dfac0fd40001a64eb8";

      const response = (await client.getTransaction(id)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("transaction");
    });
  });

  describe("Get Transactions", () => {
    it("should get transactions", async () => {
      const response = (await client.getTransactions("es", undefined, 2)).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeTruthy();
      expect(response.next_page_url).toBeDefined();
      expect(response.previous_page_url).toBeNull();
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].object).toEqual("transaction");
      expect(response.data.length).toEqual(2);
    });
  });
});