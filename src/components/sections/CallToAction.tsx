"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionDivider } from "@/components/SectionDivider";

export function CallToAction() {
  return (
    <>
      <SectionDivider />
      <section
        id="cta-quote"
        className="relative z-10 px-6 pb-20 pt-10 md:pb-28 md:pt-14"
        aria-labelledby="cta-heading"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-surface-elevated via-surface to-zinc-950 px-8 py-16 text-center shadow-[0_0_120px_-40px_rgba(167,139,250,0.45)] md:px-16 md:py-20">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent-blue/25 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-violet/20 blur-[110px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-cyan">
              Ready when you are
            </p>
            <h2
              id="cta-heading"
              className="mt-6 font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              Don&apos;t Replace It.{" "}
              <span className="text-gradient">Repair It.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
              Walk in on High Street for same-day help, or call for a straight
              answer and a fair quote — no jargon, no pressure.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href="tel:01158374930"
                className="rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-10 py-4 text-sm font-semibold text-surface shadow-glow"
                ariaLabel="Call Fizi Phonez now"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call Now
              </MagneticButton>
              <MagneticButton
                href="tel:01158374930"
                className="rounded-full border border-white/15 bg-white/[0.05] px-10 py-4 text-sm font-semibold text-white backdrop-blur-md hover:border-white/25"
                ariaLabel="Request a free quote by phone"
              >
                Get a Free Quote
                <ArrowUpRight className="h-4 w-4 text-accent-cyan" aria-hidden />
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
