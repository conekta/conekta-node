import { OrdersApi } from "../api";
import { Configuration } from "../configuration";
import {
  OrderRequest,
  OrderCheckoutRequestAllowedPaymentMethodsEnum,
  OrderCheckoutRequestTypeEnum,
} from "../model";

const config = new Configuration({ accessToken: "key_xxx" });
const client = new OrdersApi(config);

const orderRequest: OrderRequest = {
  currency: "MXN",
  customer_info: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+5215555555555",
  },
  line_items: [
    {
      name: "Product 1",
      quantity: 1,
      unit_price: 50000, // $500.00 MXN in cents
    },
  ],
  checkout: {
    type: OrderCheckoutRequestTypeEnum.integration,
    allowed_payment_methods: [
      OrderCheckoutRequestAllowedPaymentMethodsEnum.card,
      OrderCheckoutRequestAllowedPaymentMethodsEnum.cash,
      OrderCheckoutRequestAllowedPaymentMethodsEnum.bankTransfer,
      OrderCheckoutRequestAllowedPaymentMethodsEnum.bnpl,
      OrderCheckoutRequestAllowedPaymentMethodsEnum.payByBank
    ],
  },
};

async function createOrder() {
  const { data: order } = await client.createOrder(orderRequest);

  console.log("Order ID:", order.id);
  console.log("Checkout ID:", order.checkout?.id);
  console.log("Checkout type:", order.checkout?.type);
}

createOrder().catch(console.error);
