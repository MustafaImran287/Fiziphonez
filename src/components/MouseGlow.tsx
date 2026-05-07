"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * rAF-batched DOM transforms + lighter blur (vs spring-driven Motion every frame).
 */
export function MouseGlow() {
  const reducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const pending = useRef<{ x: number; y: number } | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const flush = () => {
      rafId.current = null;
      const el = ref.current;
      const p = pending.current;
      if (!el || p == null) return;
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      pending.current = { x: e.clientX, y: e.clientY };
      if (rafId.current == null) {
        rafId.current = window.requestAnimationFrame(flush);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
      aria-hidden
    >
      <div
        ref={ref}
        className="absolute left-0 top-0 h-[min(420px,70vw)] w-[min(420px,70vw)] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.11)_0%,transparent_70%)] blur-xl"
        style={{
          transform: "translate3d(-9999px, -9999px, 0)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
