"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <motion.div
            className="absolute inset-0 rounded-2xl border border-white/10 bg-white/[0.04]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          />
          <motion.div
            className="absolute inset-2 rounded-xl bg-gradient-to-br from-accent-blue/50 to-accent-violet/40"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          className="font-display text-sm tracking-[0.35em] text-zinc-400"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          FIZI PHONEZ
        </motion.p>
      </div>
    </div>
  );
}
