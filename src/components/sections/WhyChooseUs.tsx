"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Gem,
  MapPin,
  Shield,
  Wallet,
} from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const reasons = [
  {
    title: "Fast turnaround",
    body: "Most repairs completed same day — minimal downtime, maximum reliability.",
    icon: Clock3,
  },
  {
    title: "Affordable pricing",
    body: "Premium workmanship without the premium ego — clear quotes, zero fluff.",
    icon: Wallet,
  },
  {
    title: "Trusted local experts",
    body: "Independent Long Eaton team with deep device knowledge and honest advice.",
    icon: MapPin,
  },
  {
    title: "Warranty-backed repairs",
    body: "Confidence in every fix — stand-behind service you can feel.",
    icon: Shield,
  },
  {
    title: "Genuine quality parts",
    body: "Carefully sourced components that behave like the originals should.",
    icon: Gem,
  },
];

export function WhyChooseUs() {
  return (
    <>
      <SectionDivider />
      <section
        className="relative z-10 overflow-hidden px-6 py-16 md:py-24"
        aria-labelledby="why-heading"
      >
        <div className="pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[120px]" />
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-violet"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Fizi Phonez
            </motion.p>
            <motion.h2
              id="why-heading"
              className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Craft, clarity, and{" "}
              <span className="text-gradient">care you can feel</span>.
            </motion.h2>
            <motion.p
              className="mt-6 max-w-xl text-lg text-zinc-400"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We obsess over the invisible details — torque, alignment, thermal
              hygiene — so your phone doesn&apos;t just work, it feels right.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="relative mt-10 hidden max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md lg:block"
            >
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-9 w-9 text-accent-cyan" aria-hidden />
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    Local trust, global standards
                  </p>
                  <p className="text-sm text-zinc-500">
                    200+ five-star moments and counting.
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {["Diagnostics", "Repair", "QA"].map((step, idx) => (
                  <div key={step} className="flex items-center gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-xs font-semibold text-zinc-300">
                      {idx + 1}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                    <span className="text-sm text-zinc-400">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative space-y-5">
            <div className="pointer-events-none absolute left-4 top-6 bottom-6 hidden w-px bg-gradient-to-b from-accent-blue/50 via-white/15 to-accent-violet/40 md:block" />
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.65, delay: i * 0.07 }}
                className="relative ml-0 rounded-3xl border border-white/[0.07] bg-surface-elevated/70 p-6 backdrop-blur-md md:ml-10"
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/[0.05] ring-1 ring-white/10">
                    <r.icon className="h-5 w-5 text-accent-blue" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {r.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
