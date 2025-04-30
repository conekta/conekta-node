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
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_lines: OrderDiscountLinesRequest = {
        amount: 500,
        code: "track",
        type: "loyalty"
      };

      const response = (await client.ordersCreateDiscountLine(ID, order_discount_lines)).data;
      const parent_id = (response as unknown as { parent_id: string }).parent_id;
      const id = (response as unknown as { id: string }).id;

      expect(response).toBeDefined();
      expect(parent_id).toEqual(ID);
      expect(response.amount).toEqual(order_discount_lines.amount);
      expect(id).toBeTruthy();
    });
  });

  describe('Orders Delete Discount Lines', () => {

    it('Delete Discount Lines', async () => {

      const ID = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_line_id = "dis_lin_2tVyahK8Nts7rKRMZ";

      const response = (await client.ordersDeleteDiscountLines(ID, order_discount_line_id)).data
      const parent_id = (response as unknown as { parent_id: string }).parent_id;
      const id = (response as unknown as { id: string }).id;

      expect(response).toBeDefined();
      expect(parent_id).toEqual(ID);
      expect(id).toEqual(order_discount_line_id);
    });
  });

  describe('Orders Get Discount Line', () => {
    it('Get Discount Lines', async () => {
      const ID = "ord_2tkwrBmcvGnA9zdU9";
      const discount_lines_id = "dis_lin_2tkwrBmcvGnA9zdU6";

      const response = (await client.ordersGetDiscountLine(ID, discount_lines_id)).data;
      const parent_id = (response as unknown as { parent_id: string }).parent_id;
      const id = (response as unknown as { id: string }).id;
      
      expect(response).toBeDefined();
      expect(parent_id).toEqual(ID);
      expect(id).toBeTruthy();
    });
  });

  describe('Orders List Discount Lines', () => {

    it('List Discount Lines', async () => {
      const order_id = "ord_2tVyWPnCPWbrV37mW";

      const response = (await client.ordersGetDiscountLines(order_id)).data;
      const data = (response as unknown as { data: any[]}).data

      expect(response).toBeDefined();
      expect(data).toBeDefined();
      expect(data.length).toEqual(2);
      expect(response.has_more).toEqual(false);
      expect(data[0].parent_id).toEqual(order_id);
      expect(data[0].amount).toEqual(100);
      expect(data[0].code).toEqual("trac");
    });
  });

  describe('Orders Update Discount Lines', () => {
    it('Update Discount Lines', async () => {
      const ID = "ord_2tVyWPnCPWbrV37mW";
      const order_discount_line_id = "dis_lin_2tVyahK8Nts7rKRMZ";
      const order_discount_lines: UpdateOrderDiscountLinesRequest = {
        amount: 100,
      };

      const response = (await client.ordersUpdateDiscountLines(ID, order_discount_line_id, order_discount_lines, "es")).data;
      const parent_id = (response as unknown as { parent_id: string }).parent_id;
      const id = (response as unknown as { id: string }).id;

      expect(response).toBeDefined();
      expect(parent_id).toEqual(ID);
      expect(id).toEqual(order_discount_line_id);
      expect(response.amount).toEqual(order_discount_lines.amount);
    });
  });
});
