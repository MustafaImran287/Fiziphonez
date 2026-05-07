"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionDivider } from "@/components/SectionDivider";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const reviews = [
  {
    name: "James R.",
    text: "Fixed my iPhone in under an hour. Incredible service.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Transparent pricing and pristine screen replacement — couldn’t ask for more.",
    rating: 5,
  },
  {
    name: "Tom W.",
    text: "Finally a repair shop that treats your phone like their own.",
    rating: 5,
  },
  {
    name: "Elena M.",
    text: "Same-day battery swap — feels brand new. Highly recommend.",
    rating: 5,
  },
  {
    name: "Callum S.",
    text: "Professional, fast, and genuinely helpful. Long Eaton is lucky.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-amber-400/90 text-amber-400/90"
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReviewCard({
  r,
  variant = "marquee",
}: {
  r: (typeof reviews)[number];
  variant?: "marquee" | "grid";
}) {
  const width =
    variant === "grid"
      ? "w-full max-w-lg shrink-0"
      : "w-[min(100vw-3rem,380px)] shrink-0";
  return (
    <article
      role="listitem"
      className={`${width} rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 text-left shadow-[0_16px_48px_-36px_rgba(56,189,248,0.28)] backdrop-blur-md transform-gpu`}
    >
      <Stars count={r.rating} />
      <p className="mt-5 text-base leading-relaxed text-zinc-200">
        &ldquo;{r.text}&rdquo;
      </p>
      <p className="mt-6 text-sm font-semibold text-white">{r.name}</p>
      <p className="text-xs text-zinc-500">Google customer</p>
    </article>
  );
}

export function Testimonials() {
  const reducedMotion = usePrefersReducedMotion();
  const loop = [...reviews, ...reviews];

  return (
    <>
      <SectionDivider />
      <section
        className="relative z-10 overflow-hidden px-6 py-16 md:py-24"
        aria-labelledby="reviews-heading"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-cyan"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Reviews
          </motion.p>
          <motion.h2
            id="reviews-heading"
            className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Loved locally.{" "}
            <span className="text-gradient">Proven on Google.</span>
          </motion.h2>
        </div>

        <div className="relative mt-14">
          {reducedMotion ? (
            <div
              className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
              aria-label="Customer testimonials"
            >
              {reviews.map((r) => (
                <ReviewCard key={r.name} r={r} variant="grid" />
              ))}
            </div>
          ) : (
            <>
              <div
                className="mx-auto grid max-w-7xl gap-6 md:hidden"
                role="list"
                aria-label="Customer testimonials"
              >
                {reviews.map((r) => (
                  <ReviewCard key={r.name} r={r} variant="grid" />
                ))}
              </div>
              <div className="hidden overflow-hidden md:block">
                <div
                  className="testimonial-marquee-track transform-gpu will-change-transform"
                  role="list"
                  aria-label="Customer testimonials"
                >
                  {loop.map((r, i) => (
                    <ReviewCard key={`${r.name}-${i}`} r={r} variant="marquee" />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
