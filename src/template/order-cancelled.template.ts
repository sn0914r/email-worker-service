export const orderCancelledTemplate = (payload: { orderId: string; message: string }) => {
  const { orderId, message } = payload;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #dc2626;">Order Cancelled</h2>
      <p>Hello,</p>
      <p>Your order <strong>#${orderId}</strong> has been cancelled.</p>
      <p>${message}</p>
      <p>If a payment was made, your refund is being processed and will reflect in your account shortly.</p>
      <p>We're sorry it didn't work out this time. We hope to see you again soon.</p>
      <p>
        Best regards,<br />
        <strong>eKart Team</strong>
      </p>
    </div>
  `;
};
