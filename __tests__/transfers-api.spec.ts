import { TransfersApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
describe("TransfersApi", () => {
  let client: TransfersApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new TransfersApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Get Transfer", () => {
    it("should get a transfer", async () => {
      const id = "64462930651b2600017b6d43";

      const response = (await client.getTransfer(id)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("transfer");
    });
  });

  describe("Get Transfers", () => {
    it("should get transfers", async () => {
      const response = (await client.getTransfers("es", undefined, 5)).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeTruthy();
      expect(response.next_page_url).toBeDefined();
      expect(response.previous_page_url).toBeNull();
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].object).toEqual("transfer");
      expect(response.data.length).toEqual(5);
    });
    it("should get transfers with next", async () => {

      const response = (await client.getTransfers("es", undefined, 6, undefined, "6419562fdb5c8a0001e1cd61")).data;

      expect(response).toBeDefined();

    });
  });
});