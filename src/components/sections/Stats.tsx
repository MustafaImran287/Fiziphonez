"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionDivider } from "@/components/SectionDivider";

function CounterCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(`${Math.round(latest)}${suffix ?? ""}`);
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: delay * 0.4 }}
      className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-blue/15 blur-2xl" />
      <p className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {display}
      </p>
      <p className="mt-3 text-sm font-medium text-zinc-400">{label}</p>
    </motion.div>
  );
}

function HighlightCard({
  title,
  subtitle,
  delay,
}: {
  title: string;
  subtitle: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay }}
      className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-accent-violet/15 blur-2xl" />
      <p className="font-display text-3xl font-semibold text-white md:text-4xl">
        {title}
      </p>
      <p className="mt-3 text-sm font-medium text-zinc-400">{subtitle}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <>
      <SectionDivider />
      <section
        className="relative z-10 px-6 py-6 md:py-10"
        aria-labelledby="stats-heading"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2
            id="stats-heading"
            className="font-display text-3xl font-semibold text-white md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built on{" "}
            <span className="text-gradient">real results</span>, not hype.
          </motion.h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Independent, local, and obsessive about quality — the stats your
            neighbours already know from Google reviews.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <CounterCard value={200} suffix="+" label="Happy customers" delay={0} />
            <CounterCard value={1000} suffix="+" label="Repairs completed" delay={0.08} />
            <HighlightCard
              title="Same day"
              subtitle="Turnaround on most repairs"
              delay={0.12}
            />
            <HighlightCard title="5★" subtitle="Rated service & support" delay={0.16} />
          </div>
        </div>
      </section>
    </>
  );
}
