import { PaymentLinkApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { Checkout, EmailCheckoutRequest, SmsCheckoutRequest } from "../model";
describe('Payment Link API', () => {
  let client: PaymentLinkApi;

  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new PaymentLinkApi(config, baseTest.BasePath);
  });
  describe("general", () => {
    it("should be defined", () => {
      expect(client).toBeDefined();
    });
  });

  describe("Cancel checkout", () => {
    it("should cancel checkout", async () => {

      const id = "c7734ada-e1e9-4b22-90f6-b80a1b2006d4";

      const response = (await client.cancelCheckout(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.status).toEqual("Cancelled");
      expect(response.id).toEqual(id);
      expect(response.object).toEqual("checkout");
      expect(response.payments_limit_count).toEqual(5)
      expect(response.can_not_expire).toBeFalsy();
      expect(response.recurrent).toBeTruthy();
    });
  });

  describe("Create checkout", () => {
    it("should create checkout", async () => {

      const checkout_request: Checkout = get_checkout_request()

      const response = (await client.createCheckout(checkout_request, "es")).data;

      expect(response).toBeDefined();
      expect(response.expires_at).toEqual(checkout_request.expires_at);
      expect(response.id).toEqual("e4bcbed2-194c-4540-a922-b6d7531925a3");
      expect(response.type).toEqual(checkout_request.type);
      expect(response.allowed_payment_methods).toEqual(checkout_request.allowed_payment_methods);
      expect(response.name).toEqual(checkout_request.name);
    });

    it("should create checkout with customer info", async () => {
      const checkout_request: Checkout = get_recurrent_checkout_request();

      const response = (await client.createCheckout(checkout_request)).data;

      expect(response).toBeDefined();
      expect(response.expires_at).toEqual(checkout_request.expires_at);
      expect(response.id).toEqual("4b57dde6-1080-4529-8a7c-7299812a3b1a");
      expect(response.type).toEqual(checkout_request.type);
      expect(response.allowed_payment_methods).toEqual(checkout_request.allowed_payment_methods);
      expect(response.name).toEqual(checkout_request.name);
    });
  });

  describe("notify checkout", () => {
    it("should email notify checkout", async () => {
      const id = "102bdf5c-3ee6-48ec-a9ff-40ec6f5f054b";
      const email_request: EmailCheckoutRequest = {
        email: "example@conekta.com",
      }
      const response = (await client.emailCheckout(id, email_request)).data;

      expect(response).toBeDefined();
      expect(response.emails_sent).toBe(1);
      expect(response.sms_sent).toBe(0);
      expect(response.id).toEqual(id);
      expect(response.status).toEqual("Issued");
      expect(response.recurrent).toBeTruthy();
      expect(response.metadata["key"]).toBe("value");
    });
    it("should sms notify checkout", async () => {
      const id = "ce1076bb-5ee6-4d08-a0e2-ec0bfbc49883";
      const sms_request: SmsCheckoutRequest = {
        phonenumber: "5555555555",
      }
      const response = (await client.smsCheckout(id, sms_request)).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.sms_sent).toBeTruthy();
      expect(response.emails_sent).toBeFalsy();
    });
  });

  describe("Get checkout", () => {
    it("should get checkout", async () => {
      const id = "bac0ed14-6888-4d1d-927a-c80d3f55c009";

      const response = (await client.getCheckout(id, "es")).data;

      expect(response).toBeDefined();
      expect(response.id).toEqual(id);
      expect(response.status).toEqual("Expired");
      expect(response.type).toEqual("HostedPayment");
      expect(response.url).toBeTruthy();
      expect(response.success_url).toBeTruthy();
      expect(response.failure_url).toBeTruthy();
    });

    it("should get a list of checkouts", async () => {
      const response = (await client.getCheckouts("en")).data;

      expect(response).toBeDefined();
      expect(response.object).toEqual("list");
      expect(response.next_page_url).toEqual("https://api-core.stg.conekta.io/checkouts?next=bac0ed14-6888-4d1d-927a-c80d3f55c009");
      expect(response.data.length).toEqual(20);
    });
  });
});

function get_recurrent_checkout_request (): Checkout {
  return {
    allowed_payment_methods: ["cash", "card", "bank_transfer"],
    type: "PaymentLink",
    name: "Payment Link Name netcore sdk",
    recurrent: true,
    needs_shipping_contact: false,
    expires_at: new Date().setUTCDate(new Date().getUTCDate() + 200),
    order_template: {
      currency: "MXN",
      customer_info: {
        name: "John Doe",
        email: "steven@gmail.com",
        phone: "5555555555"
      },
      line_items: [
        {
          name: "toshiba",
          quantity: 1,
          unit_price: 500,
        }
      ]
    }
  };
}

function get_checkout_request (): Checkout {
  return {
    allowed_payment_methods: ["cash", "card", "bank_transfer"],
    type: "PaymentLink",
    name: "Payment Link Name netcore sdk",
    recurrent: false,
    needs_shipping_contact: false,
    expires_at: new Date().setUTCDate(new Date().getUTCDate() + 200),
    order_template: {
      currency: "MXN",
      customer_info: null,
      line_items: [
        {
          name: "toshiba",
          quantity: 1,
          unit_price: 500,
        }
      ],
    }
  };
}
