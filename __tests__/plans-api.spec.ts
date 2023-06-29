import { PlansApi } from "../api";
import { Configuration } from "../configuration";
import { PlanRequest, PlanUpdateRequest } from "../model";
import { baseTest } from "./base-test";

describe('Plans API', () => {
  let client: PlansApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new PlansApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", async () => {
      expect(client).toBeDefined();
    });
  });
  describe("create plan", () => {
    it("should create plan", async () => {
      const request: PlanRequest = {
        amount: 100,
        currency: "MXN",
        interval: "month",
        name: "Gold Plan",
        trial_period_days: 15,
        frequency: 1,
      };

      const response = (await client.createPlan(request, "es")).data;

      expect(response).toBeDefined();
      expect(response.expiry_count).toBeNull();
      expect(response.livemode).toBeTruthy();
      expect(response.name).toBe("Gold Plan");
    });
  });

  describe("delete plan", () => {
    it("should delete plan", async () => {
      const plan_id = "plan_2tZb5q8Z3PYpg6SJd";

      const response = (await client.deletePlan(plan_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toBe(plan_id);
    });
  });
  describe("Get plan", () => {
    it("should get plan", async () => {
      const plan_id = "plan_2tZb5q8Z3PYpg6SJd";

      const response = (await client.getPlan(plan_id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toBe(plan_id);
      expect(response.currency).toBe("MXN");
    });
  });
  describe("Get plans", () => {
    it("should get plans", async () => {
      const response = (await client.getPlans("es", undefined, 20)).data;

      expect(response).toBeDefined();
      expect(response.data.length).toBe(10);
      expect(response.has_more).toBeFalsy();
      expect(response.next_page_url).toBeNull();
      expect(response.previous_page_url).toBeNull();
    });
  });
  describe("Update plan", () => {
    it("should update plan", async () => {
      const plan_id = "plan_2tZb5q8Z3PYpg6SJd";
      const request: PlanUpdateRequest = {
        name: "updated name",
      };

      const response = (await client.updatePlan(plan_id, request, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toBe(plan_id);
      expect(response.name).toBe(request.name);
    });
  });
});