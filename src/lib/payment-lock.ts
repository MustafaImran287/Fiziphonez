/** Locked by default. Set NEXT_PUBLIC_PAYMENT_LOCKED=false to restore the site. */
export const isPaymentLocked =
  process.env.NEXT_PUBLIC_PAYMENT_LOCKED !== "false";
