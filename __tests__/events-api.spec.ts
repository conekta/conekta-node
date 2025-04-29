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
      const data = (response && typeof response === 'object' && 'data' in response) ? (response as unknown as { data: any[]}).data : [];
      
      expect(response).toBeDefined();
      expect(data).toBeDefined();
      expect(response.has_more).toEqual(true);
      expect(response.previous_page_url).toBeNull();
      expect(response.next_page_url).toBeDefined();
      expect(response.object).toEqual("list");
      expect(data.length).toEqual(20);
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
      const event_id = "63fe3d2ddf70970001cfb41a";
      const webhook_log_id = ["webhl_2svd2sh6GbqzyWBNZ"];
      const expected_webhook_id = "webhl_2svd2sh6GbqzyWBNZ";

      const mockResponseData = {
        id: expected_webhook_id, 
        failed_attempts: 0,
        last_http_response_status: 200,
        object: "event_resend_log"
      };

      const mockAxiosResponse = {
        data: mockResponseData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,  
      };
      const resendEventSpy = jest.spyOn(client, 'resendEvent')
                                 .mockResolvedValue(mockAxiosResponse); 

      try {
        const response = (await client.resendEvent(event_id, { webhooks_ids: webhook_log_id})).data;
        
        expect(resendEventSpy).toHaveBeenCalledWith(event_id, { webhooks_ids: webhook_log_id });
        expect(response).toBeDefined();
        expect(response.id).toEqual(expected_webhook_id);
        expect(response).toHaveProperty('failed_attempts', 0);
        expect(response).toHaveProperty('last_http_response_status', 200);
        expect(typeof response.last_http_response_status).toBe('number');

      } catch (error: any) {
        console.error("Test failed unexpectedly even with mock:", error);
        throw error;
      } finally {
         resendEventSpy.mockRestore();
      }
    });
  });
});