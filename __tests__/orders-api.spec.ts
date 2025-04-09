import { OrderRequest, OrderResponse, PaymentMethodGeneralRequest, Product, ChargeRequest } from '../model';
import { OrdersApi } from '../api';
import { createOrder } from '../__tests__/utils';

describe('Orders API', () => {
  let client: OrdersApi;

  beforeEach(() => {
    client = new OrdersApi();
  });

  it('should create an order', async () => {
    const response = await createOrder(client);
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    expect(response.data.currency).toEqual('MXN');
    expect(response.data.customer_info?.name).toEqual('John Constantine');
    expect(response.data.line_items?.data).toBeDefined();
    expect(response.data.line_items?.data[0].name).toEqual('Box of Cohiba S1s');
  });

  it('should get an order', async () => {
    const order = await createOrder(client);
    const orderId = order.data.id;
    
    if (!orderId) {
      throw new Error('Order ID is undefined');
    }

    const response = await client.getOrderById(orderId);
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    expect(response.data.id).toEqual(orderId);
    expect(response.data.currency).toEqual('MXN');
    expect(response.data.customer_info?.name).toEqual('John Constantine');
  });

  it('should get a list of orders', async () => {
    const response = await client.getOrders();
    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    expect(response.data.data).toBeDefined();
    expect(Array.isArray(response.data.data)).toBeTruthy();
    expect(response.data.has_more).toBeDefined();
    expect(response.data.object).toEqual('list');
  });
});


