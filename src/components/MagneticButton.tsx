"use client";

import { motion, useMotionValue } from "framer-motion";
import {
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useCallback,
  useRef,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  type = "button",
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left - rect.width / 2;
      const my = e.clientY - rect.top - rect.height / 2;
      x.set(mx * 0.14);
      y.set(my * 0.14);
    },
    [x, y],
  );

  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const inner = (
    <motion.span
      className="relative inline-flex items-center justify-center gap-2"
      style={{ x, y }}
    >
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      className="inline-flex"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
    >
      {href ? (
        <motion.a
          href={href}
          className={className}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={ariaLabel}
        >
          {inner}
        </motion.a>
      ) : (
        <motion.button
          type={type}
          onClick={onClick}
          className={className}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={ariaLabel}
        >
          {inner}
        </motion.button>
      )}
    </div>
  );
}
