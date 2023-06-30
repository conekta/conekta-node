import { TokensApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { Token } from "../model";

describe("TokensApi", () => {

  let client: TokensApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new TokensApi(config, baseTest.BasePath);
  });

  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Create Token", () => {
    it("should create a token", async () => {
      const request: Token = {
        card: {
          number: "5475040095304607",
          exp_month: "12",
          exp_year: "2022",
          cvc: "123",
          name: "John Doe",
        },
      };

      const response = (await client.createToken(request)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual("tok_2toPJUcZ27AH5LsZk");
      expect(response.used).toEqual(false);
      expect(response.livemode).toEqual(true);
      expect(response.checkout).toBeFalsy();
    });
  });

  describe("Create empty Token", () => {
    it("should create an empty token", async () => {
      const request: Token = {
        checkout: {
          returns_control_on: "Token"
        }
      };

      const response = (await client.createToken(request)).data;

      expect(response).toBeDefined();
      expect(response.checkout.status).toBe("Issued");
      expect(response.checkout).toBeTruthy();
    });
  });
});