import { CompaniesApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
describe('Companies API', () => {
  let client : CompaniesApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new CompaniesApi(config,baseTest.BasePath);
  });

  describe("general", () => {
    it('should be defined', () => {
      expect(client).toBeInstanceOf(CompaniesApi);
    });
  });

  it('should get company', async () => {  
    const id = "6441bb27659a060465da7335";

    const response = (await client.getCompany(id)).data

    expect(response).toBeDefined();
    expect(response.id).toEqual(id);
    expect(response.name).toEqual("Child Company A");
  });

  it('should get a list of companies', async () => {

    const response = (await client.getCompanies()).data;

    expect(response).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.has_more).toEqual(false);
    expect(response.data[0].id).toEqual("6441bb27659a060465da7335");
  });
});