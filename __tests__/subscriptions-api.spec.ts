import { SubscriptionsApi } from "../api";
import { Configuration } from "../configuration";
import { SubscriptionRequest, SubscriptionUpdateRequest } from "../model";
import { baseTest } from "./base-test";

describe("Subscriptions API", () => {
  let client: SubscriptionsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new SubscriptionsApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Cancel Subscription", () => {
    it("should cancel a subscription", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";

      const response = (await client.cancelSubscription(customer_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.status).toBe("canceled");
      expect(response.canceled_at).toEqual(1679431258);
    });
  });
  describe("Create Subscription", () => {
    it("should create a subscription", async () => {
      const customer_id = "cus_2tXx8KUxw6311kEbs";
      const request: SubscriptionRequest = {
        plan_id: "contracargos-plan",
      };

      const response = (await client.createSubscription(customer_id, request)).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.plan_id).toBe(request.plan_id);
      expect(response.status).toBe("past_due");
      expect(response.created_at).toEqual(1679431660);
      expect(response.object).toBe("subscription");
    });
  });
  describe("Get Subscription", () => {
    it("should get a subscription", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";

      const response = (await client.getSubscription(customer_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.status).toBe("active");
      expect(response.created_at).toEqual(1679402134);
      expect(response.object).toBe("subscription");
    });
  });

  describe("Pause Subscription", () => {
    it("should pause a subscription", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";

      const response = (await client.pauseSubscription(customer_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.status).toBe("paused");
      expect(response.paused_at).toEqual(1679429155);
    });
  });

  describe("Resume Subscription", () => {
    it("should resume a subscription", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";

      const response = (await client.resumeSubscription(customer_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.status).toBe("active");
      expect(response.paused_at).toBeFalsy();
    });
  });

  describe("Update Subscription", () => {
    it("should update a subscription", async () => {
      const customer_id = "cus_2tZWxbTPtQgGJGh8P";
      const request: SubscriptionUpdateRequest = {
        trial_end: 1679752328,
      };

      const response = (await client.updateSubscription(customer_id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.customer_id).toBe(customer_id);
      expect(response.plan_id).toBe("testplan79");
      expect(response.status).toBe("active");
      expect(response.created_at).toEqual(1679402134);
      expect(response.object).toBe("subscription");
    });
  });

  describe("Get events", () => {
    it("should get events", async () => { 
      const customer_id = "cus_2rKpeXQpapLonfVke";

      const response = (await client.getAllEventsFromSubscription(customer_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.has_more).toBeFalsy();
      expect(response.data[0].id).toEqual("620ea04f6d41e80466f611a6")
      expect(response.data.length).toEqual(2);
    });
  });
});