"use client";

import { motion } from "framer-motion";

type PhoneMockupProps = {
  className?: string;
  delay?: number;
  label?: string;
  accent?: "blue" | "violet";
};

export function PhoneMockup({
  className = "",
  delay = 0,
  label = "Repair UI",
  accent = "blue",
}: PhoneMockupProps) {
  const ring =
    accent === "blue"
      ? "from-accent-blue/50 to-accent-cyan/30"
      : "from-accent-violet/50 to-accent-blue/25";

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 36, rotateX: 12 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <div
        className={`relative mx-auto aspect-[9/19] w-[min(260px,72vw)] rounded-[2.4rem] bg-gradient-to-b ${ring} p-[3px] shadow-glow-lg`}
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-zinc-950 ring-1 ring-white/10">
          <div className="flex items-center justify-between px-5 pb-2 pt-4">
            <span className="text-[10px] font-medium tracking-wide text-zinc-500">
              9:41
            </span>
            <div className="h-5 w-16 rounded-full bg-black/80" />
            <span className="text-[10px] text-zinc-600">5G</span>
          </div>
          <div className="flex-1 bg-gradient-to-b from-zinc-900 via-surface to-zinc-950 px-4 pb-6 pt-2">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-sm text-white">{label}</span>
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                Live
              </span>
            </div>
            <div className="space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-1/2 rounded-full bg-white/8" />
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                  <div className="mb-2 h-8 w-8 rounded-lg bg-accent-blue/25" />
                  <div className="h-2 w-16 rounded bg-white/15" />
                </div>
                <div className="rounded-xl bg-white/[0.06] p-3 ring-1 ring-white/10">
                  <div className="mb-2 h-8 w-8 rounded-lg bg-accent-violet/25" />
                  <div className="h-2 w-14 rounded bg-white/15" />
                </div>
              </div>
              <div className="phone-mock-pulse mt-4 h-10 rounded-xl bg-gradient-to-r from-accent-blue/40 to-accent-violet/35" />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-[85%] -translate-x-1/2 rounded-[100%] bg-accent-blue/12 blur-2xl transform-gpu" />
    </motion.div>
  );
}
