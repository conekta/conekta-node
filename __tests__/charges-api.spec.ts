import { ChargesApi } from "../api";
import { baseTest } from "./base-test";
import { Configuration } from "../configuration";
import { ChargeRequest, ChargeUpdateRequest, PaymentMethodCash } from "../model";

interface IPaymentMethodMock extends PaymentMethodCash { 
  barcode_url: string,
  cashier_id: null,
  auth_code: null,
  store: null,
  clabe: string,
  bank: string,
  reference: string,
}

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

      const response = (await client.ordersCreateCharge(id, request)).data;
      const payment_method = response.payment_method as IPaymentMethodMock

      expect(response).toBeDefined();
      expect(response.amount).toEqual(request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pre_authorized");
      expect(payment_method.object).toEqual("card_payment");
      expect(payment_method.type).toEqual("credit");
    });

    it('cash', async () => {
      const id = "ord_2tVL8dT1Hm3y3YiaN";
      const charge_request: ChargeRequest = {
        amount: 40000,
        payment_method: { type: "cash" }
      };

      const response = (await client.ordersCreateCharge(id, charge_request)).data;
      const payment_method = response.payment_method as IPaymentMethodMock

      expect(response).toBeDefined();
      expect(response.amount).toEqual(charge_request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pending_payment");
      expect(payment_method.object).toEqual("cash_payment");
      expect(payment_method.type).toEqual("oxxo");
      expect(payment_method.barcode_url).not.toBeNull();
      expect(payment_method.cashier_id).toBeNull();
      expect(payment_method.auth_code).toBeNull();
      expect(payment_method.store).toBeNull();
    });

    it('spei', async () => {

      const id = "ord_2tVLUFrQBB4HKz1zj";
      const charge_request: ChargeRequest = {
        amount: 40000,
        payment_method: { type: "spei" }
      };

      const response = (await client.ordersCreateCharge(id, charge_request)).data;
      const payment_method = response.payment_method as IPaymentMethodMock

      expect(response).toBeDefined();
      expect(response.amount).toEqual(charge_request.amount);
      expect(response.object).toEqual("charge");
      expect(response.status).toEqual("pending_payment");
      expect(payment_method.object).toEqual("bank_transfer_payment");
      expect(payment_method.type).toEqual("spei");
      expect(response.id).toEqual("6408c87bde4b8e00010744e3");
      expect(response.order_id).toEqual(id);
      expect(payment_method.clabe).toEqual("646180111805035472");
      expect(payment_method.bank).toEqual("STP");
    });
  });

  describe('Get charges', () => {
    it('should return a list of charges', async () => {
      const response = (await client.getCharges("es", undefined, 20)).data;
      const data = (response as unknown as { data: any[]}).data 

      expect(response).toBeDefined();
      expect(response.object).toEqual("list");
      expect(data).toBeDefined();
      expect(data.length).toEqual(20);
      expect(response.has_more).toBeTruthy();
      expect(data[0].channel.id).toEqual("channel_2tqJMS7on7HBVqWKo");
      expect((data[0].payment_method as IPaymentMethodMock).reference).toEqual("93003547316416");
      expect(data[0].refunds).toBeNull();
      expect(data[0].reference_id).toBeNull();
    });
  });
  describe('Update charge', () => {
    it('should update a charge', async () => {
      const updateRequest : ChargeUpdateRequest = {
          reference_id: "123456789"
      }
      const response = (await client.updateCharge("6524722f28c7ba0016a5b17d",updateRequest)).data;

      expect(response).toBeDefined();
      expect(response.object).toEqual("charge");
      expect(response.reference_id).toEqual(updateRequest.reference_id);
    });
  });
});
