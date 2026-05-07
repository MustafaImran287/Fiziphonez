"use client";

import { motion } from "framer-motion";
import {
  BatteryCharging,
  Cable,
  Droplets,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";

const services = [
  {
    title: "Screen Repairs",
    description:
      "Precision glass & OLED swaps with calibrated colour and touch response.",
    icon: Smartphone,
  },
  {
    title: "Battery Replacement",
    description:
      "Bring back all-day endurance — tested cells and clean installs.",
    icon: BatteryCharging,
  },
  {
    title: "Water Damage",
    description:
      "Rapid diagnostics and recovery pathways before corrosion wins.",
    icon: Droplets,
  },
  {
    title: "Charging Port Repair",
    description:
      "Stable charging and data transfer — no more wiggle-and-pray cables.",
    icon: Cable,
  },
  {
    title: "Refurbished Phones",
    description:
      "Certified-quality devices that feel new, priced sensibly.",
    icon: Sparkles,
  },
  {
    title: "Accessories",
    description:
      "Cases, cables, protection — curated essentials in one visit.",
    icon: ShoppingBag,
  },
];

export function Services() {
  return (
    <>
      <SectionDivider />
      <section
        id="services"
        className="relative z-10 px-6 py-16 md:py-24"
        aria-labelledby="services-heading"
      >
        <div className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-cyan">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl lg:text-5xl"
            >
              Everything your{" "}
              <span className="text-gradient">device needs</span>, under one
              roof.
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              From cracked screens to tired batteries — meticulous workmanship,
              modern diagnostics, and parts you can trust.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.65, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-surface-elevated/80 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-accent-blue/20 blur-3xl" />
                  <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-accent-violet/15 blur-3xl" />
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue/25 to-accent-violet/20 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105">
                  <s.icon className="h-6 w-6 text-accent-cyan" aria-hidden />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-zinc-400">
                  {s.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
