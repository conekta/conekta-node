import { LogsApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";

describe("Logs api", () => {

  let client: LogsApi;
  beforeAll(async () => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new LogsApi(config, baseTest.BasePath);
  });

  describe("General", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Logs Get", () => {
    it("Get Logs", async () => {

      const response = (await client.getLogs("en", undefined, 20)).data

      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
      expect(response.data.length).toEqual(20);
      expect(response.data[0].request_headers).not.toBeNull();
    });
    it("Get Log", async () => {

      const id = "6419dd15b985080001fc280e";

      const response = (await client.getLogById(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.request_headers).not.toBeNull();
      expect(response.request_body).not.toBeNull();
    });
  });
});