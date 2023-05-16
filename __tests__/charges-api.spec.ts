import { ChargesApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { ChargeRequest, PaymentMethodBankTransfer, PaymentMethodCard, PaymentMethodCash } from "../model";

describe('Charges API', () => {

  let client: ChargesApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new ChargesApi(config, baseTest.BasePath);
  });
  describe("general", () => {
    it('should be defined', () => {
      expect(client).toBeInstanceOf(ChargesApi);
    });
  });
  describe('orders Create Charge', () => {
    it('card', async () => {
      const id = "ord_2tVKxbhNzfUnGjnXG";
      const request: ChargeRequest = {
        amount: 40000,
        payment_method: {
          type: "card",
          token_id: "tok_2tVKyGpobEKAR3xVH"
        }
      };

      var response = (await client.ordersCreateCharge(id, request)).data;

      expect(response).toBeDefined();
      expect(response.amount).toEqual(request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pre_authorized");
      expect((response.payment_method as PaymentMethodCard).object).toEqual("card_payment");
      expect((response.payment_method as PaymentMethodCard).type).toEqual("credit");
    });

    it('cash', async () => {
      const id = "ord_2tVL8dT1Hm3y3YiaN";
      const charge_request: ChargeRequest = {
        amount: 40000,
        payment_method: { type: "cash" }
      };

      const response = (await client.ordersCreateCharge(id, charge_request)).data;

      expect(response).toBeDefined();
      expect(response.amount).toEqual(charge_request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pending_payment");
      expect((response.payment_method as PaymentMethodCash).object).toEqual("cash_payment");
      expect((response.payment_method as PaymentMethodCash).type).toEqual("oxxo");
      expect((response.payment_method as PaymentMethodCash).barcode_url).not.toBeNull();
      expect((response.payment_method as PaymentMethodCash).cashier_id).toBeNull();
      expect((response.payment_method as PaymentMethodCash).auth_code).toBeNull();
      expect((response.payment_method as PaymentMethodCash).store).toBeNull();
    });

    it('spei', async () => {

      const id = "ord_2tVLUFrQBB4HKz1zj";
      const charge_request: ChargeRequest = {
        amount: 40000,
        payment_method: { type: "spei" }
      };

      var response = (await client.ordersCreateCharge(id, charge_request)).data;

      expect(response).toBeDefined();
      expect(response.amount).toEqual(charge_request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pending_payment");
      expect((response.payment_method as PaymentMethodBankTransfer).object).toEqual("bank_transfer_payment");
      expect((response.payment_method as PaymentMethodBankTransfer).type).toEqual("spei");
      expect(response.id).toEqual("6408c87bde4b8e00010744e3");
      expect(response.order_id).toEqual(id);
      expect((response.payment_method as PaymentMethodBankTransfer).clabe).toEqual("646180111805035472");
      expect((response.payment_method as PaymentMethodBankTransfer).bank).toEqual("STP");
    });
  });

  describe('Get charges', () => {
    it('should return a list of charges', async () => {
      const response = (await client.getCharges("es", undefined, 20)).data;

      expect(response).toBeDefined();
      expect(response.object).toEqual("list");
      expect(response.data).toBeDefined();
      expect(response.data.length).toEqual(20);
      expect(response.has_more).toBeTruthy();
      expect(response.data[0].channel.id).toEqual("channel_2tqJMS7on7HBVqWKo");
      expect((response.data[0].payment_method as PaymentMethodCash).reference).toEqual("93003547316416");
      expect(response.data[0].refunds).toBeNull();
      expect(response.data[0].reference_id).toBeNull();
    });
  });
});
