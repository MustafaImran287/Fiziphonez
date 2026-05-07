"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Rocket, Store } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const steps = [
  {
    title: "Bring Your Device",
    body: "Walk in on High Street — we assess fast and explain clearly.",
    icon: Store,
  },
  {
    title: "We Repair It Fast",
    body: "Expert technicians, refined process, relentless quality checks.",
    icon: Rocket,
  },
  {
    title: "You Leave Happy",
    body: "Collect a device that feels tight, quick, and genuinely renewed.",
    icon: HeartHandshake,
  },
];

export function Process() {
  return (
    <>
      <SectionDivider />
      <section
        className="relative z-10 px-6 py-16 md:py-24"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-blue">
              Process
            </p>
            <h2
              id="process-heading"
              className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl"
            >
              Three calm steps.{" "}
              <span className="text-gradient">Zero drama.</span>
            </h2>
          </motion.div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
            <motion.div
              className="pointer-events-none absolute left-[16%] right-[16%] top-[52px] hidden h-px md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
            >
              <div className="h-full w-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet opacity-60" />
            </motion.div>

            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative rounded-3xl border border-white/[0.07] bg-white/[0.03] p-8 text-center backdrop-blur-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/30 to-accent-violet/25 ring-1 ring-white/15">
                  <step.icon className="h-7 w-7 text-white" aria-hidden />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Step {i + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
