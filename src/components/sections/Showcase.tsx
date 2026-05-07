"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Layers, Wrench } from "lucide-react";
import { useRef } from "react";
import { SectionDivider } from "@/components/SectionDivider";

export function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const y2 = useTransform(scrollYProgress, [0, 1], [32, -64]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <>
      <SectionDivider />
      <section
        ref={ref}
        className="relative z-10 overflow-hidden px-6 py-16 md:py-28"
        aria-labelledby="showcase-heading"
      >
        <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-50" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-violet"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Visual lab
              </motion.p>
              <motion.h2
                id="showcase-heading"
                className="mt-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Precision repairs.
                <span className="text-gradient"> Cinematic finish.</span>
              </motion.h2>
              <motion.p
                className="mt-6 max-w-lg text-lg text-zinc-400"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                A repair should feel invisible — crisp panels, flush seams,
                responsive glass, and batteries that breathe easy again.
              </motion.p>

              <motion.ul
                className="mt-10 space-y-4"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {[
                  {
                    icon: Layers,
                    label: "Before / after QA checks on every device",
                  },
                  {
                    icon: Wrench,
                    label: "Micro-workmanship tuned for daily durability",
                  },
                  {
                    icon: Cpu,
                    label: "Diagnostics that surface issues before they spread",
                  },
                ].map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 backdrop-blur-sm transform-gpu"
                  >
                    <item.icon
                      className="h-5 w-5 text-accent-blue"
                      aria-hidden
                    />
                    <span className="text-sm text-zinc-300">{item.label}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="relative mx-auto flex min-h-[420px] w-full max-w-lg items-center justify-center lg:mx-0">
              <motion.div
                style={{ y: y1, rotate }}
                className="absolute left-4 top-6 z-10 w-[56%] transform-gpu rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-3 shadow-glow-lg"
              >
                <div className="rounded-[1.6rem] bg-zinc-950 p-4 ring-1 ring-white/10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400/90">
                    Before
                  </p>
                  <div className="mt-4 aspect-[9/14] rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black ring-1 ring-white/10">
                    <div className="m-4 h-px bg-white/10" />
                    <div className="mx-4 mt-6 h-40 rounded-lg bg-white/[0.04] ring-1 ring-red-500/20" />
                    <p className="mx-4 mt-4 text-xs text-zinc-500">
                      Impact damage · touch drift · glass lift
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                className="absolute right-2 bottom-4 z-20 w-[58%] transform-gpu rounded-[2rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-3 shadow-glow"
              >
                <div className="rounded-[1.6rem] bg-zinc-950 p-4 ring-1 ring-white/10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400/90">
                    After
                  </p>
                  <div className="mt-4 aspect-[9/14] rounded-xl bg-gradient-to-br from-slate-900 via-zinc-950 to-black ring-1 ring-emerald-500/25">
                    <div className="m-4 flex items-center justify-between text-[10px] text-zinc-500">
                      <span>Colour calibrated</span>
                      <span className="text-emerald-400">PASS</span>
                    </div>
                    <div className="showcase-panel-pulse mx-4 h-40 rounded-lg bg-gradient-to-br from-accent-blue/15 via-white/[0.04] to-accent-violet/10 ring-1 ring-white/10 transform-gpu" />
                    <p className="mx-4 mt-4 text-xs text-zinc-400">
                      Factory-fit finish · smooth scroll · accurate touch
                    </p>
                  </div>
                </div>
              </motion.div>

              <div
                className="showcase-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/18 blur-[72px] transform-gpu"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
