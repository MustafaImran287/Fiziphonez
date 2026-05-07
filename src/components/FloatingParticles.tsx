"use client";

import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * CSS keyframe animations (compositor-friendly) instead of 28 parallel Motion targets.
 */
export function FloatingParticles() {
  const reducedMotion = usePrefersReducedMotion();

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${(i * 41) % 100}%`,
        top: `${(i * 29) % 100}%`,
        duration: `${16 + (i % 6)}s`,
        delay: `${(i % 5) * 0.7}s`,
        size: 1 + (i % 2),
      })),
    [],
  );

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-dot absolute rounded-full bg-accent-blue/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
