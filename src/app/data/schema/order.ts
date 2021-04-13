import { LineItem } from "./line-item";
import { Shipment } from "./shipment";

interface Order {
    id?: string;
    number?: number;
    skusCount?: number;
    lineItems?: LineItem[];
    shipments?: Shipment[];
    formattedSubtotalAmount?: string;
    formattedDiscountAmount?: string;
    formattedShippingAmount?: string;
    formattedTotalTaxAmount?: string;
    formattedGiftCardAmount?: string;
    formattedTotalAmountWithTaxes?: string;
    giftCardCode?: string;
    couponCode?: string;
    customerEmail?: string;
    billingAddressId?: string;
    shippingAddressId?: string;
    billingAddressCloneId?: string;
    shippingAddressCloneId?: string;
}

enum GetOrderParams {
    cart = 'forCart',
    availablePaymentMethods = 'withAvailablePaymentMethods',
    paymentSource = 'withpaymentSource',
    paymentMethod = 'withpaymentMethod',
    shipments = 'withShipments',
    none = 'none'
}

enum UpdateOrderParams {
    customerEmail = "customerEmail",
    billingAddress = "billingAddress",
    billingAddressClone = "billingAddressClone",
    shippingAddressSameAsBilling = "shippingAddressSameAsBilling",
    shippingAddressClone = "shippingAddressClone",
    billingAddressSameAsShipping = "billingAddressSameAsShipping",
    shippingAddress = "shippingAddress",
    paymentMethod = "paymentMethod",
    giftCardOrCouponCode = "giftCardOrCouponCode",
    giftCardCode = "giftCardCode",
    couponCode = "couponCode",
    place = "place"
}

export { Order, GetOrderParams, UpdateOrderParams };