import { AlertTriangle } from "lucide-react";

export function PaymentLock() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-40"
        aria-hidden
      />

      <div className="glass-panel relative mx-auto w-full max-w-lg rounded-2xl p-8 text-center shadow-glow">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10">
          <AlertTriangle className="h-7 w-7 text-amber-400" aria-hidden />
        </div>

        <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
          Website access restricted
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-zinc-400">
          This website is temporarily unavailable due to outstanding payment.
          Please contact the administrator to clear your dues and restore access.
        </p>
      </div>
    </main>
  );
}
