import { WebhookKeysApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { WebhookKeyRequest, WebhookKeyUpdateRequest, WebhookRequest } from "../model";
describe("WebhookKeysApi", () => {
  let client: WebhookKeysApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new WebhookKeysApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Create Webhook Key", () => {
    it("should create a webhook key", async () => {

      const request: WebhookKeyRequest = {
        active: true
      }
      const response = (await client.createWebhookKey("en", request)).data;

      expect(response).toBeDefined();
      expect(response.livemode).toBeTruthy();
      expect(response.id).toEqual("645a59da22e7da0001cad283");
      expect(response.object).toEqual("webhook_key");
    });
  });

  describe("Delete Webhook Key", () => {
    it("should delete a webhook key", async () => {
      const id = "645a59da22e7da0001cad283";

      const response = (await client.deleteWebhookKey(id)).data;

      expect(response).toBeDefined();
      expect(response.livemode).toBeTruthy();
      expect(response.id).toEqual(id);
      expect(response.active).toBeFalsy();
      expect(response.deleted).toBeTruthy();
    });
  });

  describe("Get Webhook  Key", () => {
    it("should get an active webhook key", async () => {

      const id = "645a5eb022e7da0001cad2a4";

      const response = (await client.getWebhookKey(id)).data;

      expect(response).toBeDefined();
      expect(response.livemode).toBeTruthy();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("webhook_key");
    });
    it("should get an inactive webhook key", async () => {

      const id = "635594352a1979000185a36a";

      const response = (await client.getWebhookKey(id)).data;

      expect(response).toBeDefined();
      expect(response.livemode).toBeTruthy();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("webhook_key");
    });
  });

  describe("Get Webhook Keys", () => {
    it("should get webhook keys", async () => {

      const response = (await client.getWebhookKeys("es", undefined, 2)).data;

      expect(response).toBeDefined();
      expect(response.data.length).toEqual(2);
      expect(response.has_more).toBeFalsy();
      expect(response.next_page_url).toBeNull();
      expect(response.previous_page_url).toBeNull();
    });
  });

  describe("Update Webhook Key", () => {
    it("should update a webhook key", async () => {

      const id = "645a613622e7da0001cad882";
      const request: WebhookKeyUpdateRequest = {
        active: false
      }
      const response = (await client.updateWebhookKey(id, "es", request)).data;

      expect(response).toBeDefined();
      expect(response.livemode).toBeTruthy();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("webhook_key");
      expect(response.active).toBeFalsy();
    });
  });
});