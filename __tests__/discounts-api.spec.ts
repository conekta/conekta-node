import { DiscountsApi } from "../api";
import { Configuration } from "../configuration";
import { OrderDiscountLinesRequest, UpdateOrderDiscountLinesRequest } from "../model";
import { baseTest } from './base-test';

describe('Discounts API', () => {

  let client: DiscountsApi;
  beforeAll(() => {
    const config = new Configuration({ accessToken: "key_xxxxxxxx" });
    client = new DiscountsApi(config, baseTest.BasePath);
  });

  describe('General', () => {
    it('should be defined', () => {
      expect(client).toBeDefined();
    });
  });

  describe('Orders Create Discount Lines', () => {
    it('Create Discount Lines', async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_lines: OrderDiscountLinesRequest = {
        amount: 500,
        code: "track",
        type: "loyalty"
      };

      const response = (await client.ordersCreateDiscountLine(id, order_discount_lines)).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toEqual(id);
      expect(response.amount).toEqual(order_discount_lines.amount);
      expect(response.id).toBeTruthy();
    });
  });

  describe('Orders Delete Discount Lines', () => {

    it('Delete Discount Lines', async () => {

      const id = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_line_id = "dis_lin_2tVyahK8Nts7rKRMZ";

      const response = (await client.ordersDeleteDiscountLines(id, order_discount_line_id)).data

      expect(response).toBeDefined();
      expect(response.parent_id).toEqual(id);
      expect(response.id).toEqual(order_discount_line_id);
    });
  });

  describe('Orders Get Discount Line', () => {
    it('Get Discount Lines', async () => {
      const id = "ord_2tkwrBmcvGnA9zdU9";
      const discount_lines_id = "dis_lin_2tkwrBmcvGnA9zdU6";

      const response = (await client.ordersGetDiscountLine(id, discount_lines_id)).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toEqual(id);
      expect(response.id).toBeTruthy();
    });
  });

  describe('Orders List Discount Lines', () => {

    it('List Discount Lines', async () => {
      const order_id = "ord_2tVyWPnCPWbrV37mW";

      const response = (await client.ordersGetDiscountLines(order_id)).data;

      expect(response).toBeDefined();
      expect(response.data).toBeDefined();
      expect(response.data.length).toEqual(2);
      expect(response.has_more).toEqual(false);
      expect(response.data[0].parent_id).toEqual(order_id);
      expect(response.data[0].amount).toEqual(100);
      expect(response.data[0].code).toEqual("trac");
    });
  });

  describe('Orders Update Discount Lines', () => {
    it('Update Discount Lines', async () => {
      const id = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_line_id = "dis_lin_2tVyahK8Nts7rKRMZ";
      const order_discount_lines: UpdateOrderDiscountLinesRequest = {
        amount: 100,
      };

      const response = (await client.ordersUpdateDiscountLines(id, order_discount_line_id, order_discount_lines, "es")).data;

      expect(response).toBeDefined();
      expect(response.parent_id).toEqual(id);
      expect(response.id).toEqual(order_discount_line_id);
      expect(response.amount).toEqual(order_discount_lines.amount);
    });
  });
});
