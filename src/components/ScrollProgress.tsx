"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  );
}

/** Desktop-only: avoids scroll-linked Motion updates on phones. */
export function ScrollProgress() {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setShowBar(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!showBar) return null;
  return <ScrollProgressBar />;
}
