import { WebhooksApi } from "../api";
import { Configuration } from "../configuration";
import { WebhookRequest, WebhookResponse } from "../model";
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
        subscribed_events: ["charge.created", "order.paid"]
      };

      const response = (await client.createWebhook(request, "en")).data;

      expect(response).toBeDefined();
      expect(response.url).toEqual("https://example.com/webhook");
      expect(response.status).toBeDefined();
    });
  });

  describe("Delete Webhook", () => {
    it("should delete a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.deleteWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.url).toBeDefined();
      expect(response.status).toBeDefined();
    });
  });

  describe("Get webhook", () => {
    it("should get a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.getWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.url).toBeDefined();
      expect(response.status).toBeDefined();
    });
  });

  describe("List webhooks", () => {
    it("should list webhooks", async () => {
      const response = (await client.getWebhooks("es")).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeDefined();
      expect(response.object).toBe("list");
    });
  });

  describe("Update webhook", () => {
    it("should update a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";
      const request: WebhookRequest = {
        url: "https://example.com/webhook",
        subscribed_events: ["charge.created", "order.paid"]
      };

      const response = (await client.updateWebhook(id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.url).toBeDefined();
      expect(response.status).toBeDefined();
    });
  });

  describe("Test webhook", () => {
    it("should Test a webhook", async () => {
      const id = "641b1d5662d7e00001eaa46b";

      const response = (await client.testWebhook(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.url).toBeDefined();
      expect(response.status).toBeDefined();
    });
  });
});