import { BalancesApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";

describe('Balances API', () => {
  let client: BalancesApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });

    client = new BalancesApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it('should be defined', () => {
      expect(client).toBeInstanceOf(BalancesApi);
    });
  });

  describe('balances Get Balance', () => {
    it('should return balance', async () => {

      const response = (await client.getBalance("es")).data;

      expect(response).toBeDefined();
      expect(response.available[0].amount).toEqual(413343);
      expect(response.cashout_retention_amount[0].amount).toEqual(0);
      expect(response.cashout_retention_amount[0].currency).toEqual("MXN");
    });
  });

});