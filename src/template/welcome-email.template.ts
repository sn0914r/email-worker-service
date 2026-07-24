export const welcomeEmailTemplate = (payload: { name: string }) => {
  const { name } = payload;
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #16a34a;">Welcome to eKart!</h2>
      <p>Hello ${name},</p>
      <p>Thank you for registering an account with us. We're thrilled to have you on board!</p>
      <p>Start exploring our latest products and deals today.</p>
      <p>Happy Shopping!</p>
      <p>
        Best regards,<br />
        <strong>eKart Team</strong>
      </p>
    </div>
  `;
};
