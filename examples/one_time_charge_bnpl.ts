import { OrdersApi } from "../api";
import { Configuration } from "../configuration";
import {
    OrderRequest,
    PaymentMethodBnplRequestProductTypeEnum,
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
    shipping_contact: {
        phone: "+5215555555555",
        receiver: "John Doe",
        address: {
            street1: "Av. Insurgentes Sur 1234",
            street2: "Col. Del Valle",
            postal_code: "03100",
            city: "Ciudad de Mexico",
            state: "CDMX",
            country: "MX",
            residential: true,
        },
    },
    shipping_lines: [
        {
            amount: 5000, // $50.00 MXN in cents
            carrier: "DHL",
            method: "standard",
        },
    ],
    charges: [
        {
            payment_method: {
                type: "bnpl",
                product_type: PaymentMethodBnplRequestProductTypeEnum.aplazoBnpl,
                can_not_expire: false,
                success_url: "https://example.com/success",
                failure_url: "https://example.com/failure",
                cancel_url: "https://example.com/cancel",
            },
        },
    ],
};

async function createOrder() {
    const { data: order } = await client.createOrder(orderRequest);

    console.log("Order ID:", order.id);
    console.log("Charge ID:", order.charges?.data?.[0]?.id);
    console.log("Payment method type:", order.charges?.data?.[0]?.payment_method?.type);
}

createOrder().catch(console.error);
