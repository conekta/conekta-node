import { OrderRequest, OrderResponse } from '../model';
import { OrdersApi } from '../api';
import { AxiosResponse } from 'axios';

export async function createOrder(api: OrdersApi): Promise<AxiosResponse<OrderResponse>> {
  const orderRequest: OrderRequest = {
    currency: 'MXN',
    customer_info: {
      name: 'John Constantine',
      email: 'john.constantine@email.com',
      phone: '+5215555555555'
    },
    line_items: [{
      name: 'Box of Cohiba S1s',
      unit_price: 35000,
      quantity: 1
    }],
    charges: [{
      payment_method: {
        type: 'card',
        token_id: 'tok_test_visa_4242'
      }
    }]
  };

  return api.createOrder(orderRequest);
} 