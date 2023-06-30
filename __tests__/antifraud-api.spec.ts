import { AntifraudApi } from "../api";
import { Configuration } from "../configuration";
import { CreateRiskRulesData } from "../model";
import { baseTest } from './base-test';

describe('Antifraud API', () => {
  let client: AntifraudApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new AntifraudApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it('should be defined', () => {
      expect(client).toBeInstanceOf(AntifraudApi);
    });
  });
  describe('whitelist', () => {
    it('create a whistelist, should return a whitelist', async () => {
      const request: CreateRiskRulesData = {
        description: "test description",
        field: "email",
        value: "fcarrero@gmail.com"
      }
      const response = (await client.createRuleWhitelist("es", request)).data;

      expect(response).toBeDefined();
      expect(response.value).toEqual(request.value);
      expect(response.id).toEqual("618c3f30db8b8da9be376b17");
      expect(response.field).toEqual(request.field);
      expect(response.description).toEqual(request.description);
    });

    it('delete a whistelist, should return a whitelist', async () => {
      const id = "618c3f2fdb8b8da9be376afe";

      const response = (await client.deleteRuleWhitelist(id)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.field).toEqual("email");
      expect(response.value).toEqual("ramirez_2402@hotmail.com");
    });

    it('get a list of whistelist, should return a whitelist', async () => {

      const response = (await client.getRuleWhitelist()).data;

      expect(response).toBeDefined();
      expect(response.data.length).toEqual(25);
      expect(response.has_more).toBe(true);
    });
  });

  describe('blacklist', () => {
    it('create a blacklist, should return a blacklist', async () => {
      const request: CreateRiskRulesData = {
        description: "test description",
        field: "email",
        value: "fcarrero_black@gmail.com"
      };
      const response = (await client.createRuleBlacklist(request)).data;

      expect(response).toBeDefined();
      expect(response.value).toEqual(request.value);
      expect(response.field).toEqual(request.field);
    });

    it('delete a blacklist, should return a blacklist', async () => {
      const id = "618c3f30db8b8da9be376b1e";

      const response = (await client.deleteRuleBlacklist(id)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.field).toEqual("email");
      expect(response.value).toEqual("aita_lv@hotmail.com");
    });

    it('get a list of blacklist, should return a blacklist', async () => {

      const response = (await client.getRuleBlacklist()).data;

      expect(response).toBeDefined();
      expect(response.data.length).toEqual(25);
      expect(response.has_more).toBe(true);
      expect(response.data[0].field).toEqual("email");
    });
  });
});
