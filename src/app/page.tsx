import { PaymentLock } from "@/components/PaymentLock";
import { isPaymentLocked } from "@/lib/payment-lock";

export default async function Home() {
  if (isPaymentLocked) {
    return <PaymentLock />;
  }

  const { HomePage } = await import("@/components/HomePage");
  return <HomePage />;
}
