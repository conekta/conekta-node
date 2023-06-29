import { Configuration } from "../configuration";
import { EventsApi } from "../api";
import { baseTest } from "./base-test";

describe('Events API', () => {
  let client: EventsApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new EventsApi(config, baseTest.BasePath);
  });
  describe('General', () => {
    it('should be defined', () => {
      expect(client).toBeDefined();
    });
  });

  describe('Events Get', () => {
    it('Get Events', async () => {
      const response = (await client.getEvents()).data;

      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
      expect(response.has_more).toEqual(true);
      expect(response.previous_page_url).toBeNull();
      expect(response.next_page_url).toBeDefined();
      expect(response.object).toEqual("list");
      expect(response.data.length).toEqual(20);
    });
    it('Get event', async () => {
      const id = "63fe3d2ddf70970001cfb41a";

      const response = (await client.getEvent(id, "en")).data

      expect(response).toBeDefined();
      expect(response.webhook_logs.length).toEqual(1);
      expect(response.object).toEqual("event");
      expect(response.type).toEqual("webhook_ping");
      expect(response.livemode).toEqual(true);
      expect(response.webhook_logs[0].id).toEqual("webhl_2tSipZiQaZ1DLH33n");
      expect(new URL(response.webhook_logs[0].url)).toBeTruthy();
    });

    it("resend event", async () => {
      const event_id = "6463d6e35a4c3e001819e760";
      const webhook_log_id = "webhl_2svd2sh6GbqzyWBNZ";

      const response = (await client.resendEvent(event_id, webhook_log_id)).data;

      expect(response).toBeDefined();
      expect(response.failed_attempts).toEqual(6);
      expect(response.id).toEqual(webhook_log_id);
      expect(response.last_http_response_status).toBe(405);
    });
  });
});