import { WebhooksApi } from "../api";
import { Configuration } from "../configuration";
import { WebhookRequest } from "../model";
import { baseTest } from './base-test';

describe("Webhooks API", () => {
  let client: WebhooksApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });

    client = new WebhooksApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Create Webhook", () => {
    it("should create a webhook", async () => {
      const request: WebhookRequest = {
        url: "https://example.com/webhook",
        synchronous: false
      };

      const response = (await client.createWebhook(request, "en")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual("641b1d5662d7e00001eaa46b");
      expect(response.object).toEqual("webhook");
    });
  });

  describe("Delete Webhook", () => {
    it("should delete a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.deleteWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.deleted).toBeTruthy();
    });
  });

  describe("Get webhook", () => {
    it("should get a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.getWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("webhook");
    });
  });

  describe("List webhooks", () => {
    it("should list webhooks", async () => {
      const response = (await client.getWebhooks("es")).data;

      expect(response).toBeDefined();
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].object).toEqual("webhook");
    });
  });

  describe("Update webhook", () => {
    it("should update a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";
      const request: WebhookRequest = {
        url: "https://example.com/webhook",
        synchronous: false
      };

      const response = (await client.updateWebhook(id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("webhook");
    });
  });

  describe("Test webhook", () => {
    it("should Test a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.testWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
    });
  });
});