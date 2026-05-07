"use client";

import { motion, useScroll } from "framer-motion";

/**
 * Direct binding to scroll progress — avoids spring physics fighting the scroll
 * thread (major source of “laggy” feel on long pages).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  );
}
