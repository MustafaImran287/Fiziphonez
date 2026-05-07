"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className="relative py-10 md:py-14" aria-hidden>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
          initial={{ scaleX: 0.3, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="mx-auto -mt-px h-px w-2/3 bg-gradient-to-r from-accent-cyan/0 via-accent-blue/50 to-accent-violet/0 blur-sm"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.1 }}
        />
      </div>
    </div>
  );
}
