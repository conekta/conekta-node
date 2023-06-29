import { ApiKeysApi } from "../api";
import { Configuration } from "../configuration";
import { ApiKeyRequest, ApiKeyUpdateRequest } from "../model";
import { baseTest } from './base-test';

describe('api keys', () => {
  let client: ApiKeysApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new ApiKeysApi(config, baseTest.BasePath);
  });
  describe("general", () => {
    it('should be defined', () => {
      expect(client).toBeDefined();
    });
  });

  describe("create api key", () => {
    it('should return a api key', async () => {
      const request: ApiKeyRequest = {
        description: "online store",
        role: "private"
      };
      const response = (await client.createApiKey(request, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual("64625cc9f3e02c00163f5e4d");
      expect(response.description).toEqual(request.description);
      expect(response.role).toEqual(request.role);
    });
  });

  describe("get api key", () => {
    it('should return a api key', async () => {
      const id = "64625cc9f3e02c00163f5e4d";

      const response = (await client.getApiKey(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.description).toEqual("online store");
      expect(response.role).toEqual("private");
    });
  });
  describe("update api key", () => {
    it('should return a api key', async () => {
      const id = "64625cc9f3e02c00163f5e4d";
      const request: ApiKeyUpdateRequest = {
        active: false,
        description: "online store",
      };
      const response = (await client.updateApiKey(id, "es", request)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.description).toEqual(request.description);
    });
  });

  describe("delete api key", () => {
    it('should return a api key', async () => {
      const id = "64625cc9f3e02c00163f5e4d";

      const response = (await client.deleteApiKey(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.description).toEqual("online store");
      expect(response.role).toEqual("private");
    });
  });
  describe("get api keys", () => {
    it('should return a list api key', async () => {
      const response = (await client.getApiKeys("es", undefined, 20)).data;

      expect(response).toBeDefined();
      expect(response.data.length).toEqual(1);
    });
  });
  describe("get api key", () => {
    it('should return a api key', async () => {
      const id = "64625cc9f3e02c00163f5e4d";

      const response = (await client.getApiKey(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.description).toEqual("online store");
      expect(response.role).toEqual("private");
    });
  });
});