import { orderCancelledTemplate } from "./order-cancelled.template.js";
import { orderConfirmationTemplate } from "./order-confirmation-template.js";
import { orderShippingStatusUpdateTemplate } from "./order-shipping-status-update.template.js";
import { welcomeEmailTemplate } from "./welcome-email.template.js";

export const getTemplate = {
  "order-confirmation": orderConfirmationTemplate,
  "order-shipping-status-update": orderShippingStatusUpdateTemplate,
  "welcome-email": welcomeEmailTemplate,
  "order-cancelled": orderCancelledTemplate,
} as const;
