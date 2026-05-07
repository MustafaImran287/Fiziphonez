"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/MagneticButton";
import { PhoneMockup } from "@/components/PhoneMockup";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  }),
};

const menuLinks = [
  { href: "#services", label: "Services" },
  { href: "#cta-quote", label: "Book repair" },
  { href: "#reviews-heading", label: "Reviews" },
];

const telHref = "tel:01158374930";
const telDisplay = "0115 837 4930";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col justify-start overflow-x-hidden pb-16 pt-14 md:pb-24 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient opacity-90" />
      <motion.div
        className="pointer-events-none absolute -left-32 top-20 h-[380px] w-[380px] rounded-full bg-accent-blue/22 blur-[72px] transform-gpu"
        style={{ y: parallaxY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-10 h-[420px] w-[420px] rounded-full bg-accent-violet/18 blur-[80px] transform-gpu"
        style={{ y: parallaxY }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-hero-glow opacity-35 blur-[96px] hero-slow-rotate" />
      </div>

      <motion.div
        style={{ opacity: parallaxOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="relative z-20 mb-8 md:mb-10"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-4 md:gap-x-6">
            <div className="flex min-w-0 shrink-0 items-center">
              <BrandLogo variant="heroBar" priority />
            </div>

            <nav
              className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-1 md:flex lg:gap-2"
              aria-label="Primary navigation"
            >
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white lg:px-4"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={telHref}
                className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-accent-amber/35 hover:bg-white/[0.05] lg:ml-2 lg:px-4"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent-amber lg:hidden" aria-hidden />
                <span className="hidden lg:inline">{telDisplay}</span>
                <span className="lg:hidden">Call</span>
              </a>
            </nav>

            <button
              type="button"
              className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/12 text-zinc-100 transition-colors hover:border-accent-amber/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-surface md:hidden"
              aria-expanded={menuOpen}
              aria-controls="hero-site-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {menuOpen ? (
            <>
              <motion.button
                key="hero-menu-backdrop"
                type="button"
                aria-label="Close menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[105] bg-black/55 backdrop-blur-[2px]"
                onClick={closeMenu}
              />
              <motion.nav
                key="hero-menu-drawer"
                id="hero-site-menu"
                role="navigation"
                aria-label="Site menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-y-0 right-0 z-[110] flex w-[min(100%,20rem)] flex-col border-l border-accent-amber/15 bg-surface/95 py-6 pl-6 pr-5 shadow-[-24px_0_80px_-20px_rgba(0,0,0,0.65)] backdrop-blur-xl"
              >
                <div className="mb-8 flex justify-end pr-1">
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                    aria-label="Close menu"
                    onClick={closeMenu}
                  >
                    <X className="h-5 w-5" aria-hidden />
                  </button>
                </div>
                <ul className="flex flex-col gap-1">
                  {menuLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block rounded-xl border border-transparent px-3 py-3 text-base font-medium text-zinc-200 transition-colors hover:border-accent-amber/15 hover:bg-white/[0.06] hover:text-white"
                        onClick={closeMenu}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={telHref}
                  className="mt-auto mr-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet py-3 text-sm font-semibold text-surface shadow-[0_0_24px_-8px_rgba(251,191,36,0.35)]"
                  onClick={closeMenu}
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {telDisplay}
                </a>
              </motion.nav>
            </>
          ) : null}
        </AnimatePresence>

        <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-zinc-200 shadow-[0_0_24px_-12px_rgba(251,191,36,0.25)] ring-1 ring-accent-amber/20 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-amber" aria-hidden />
            Long Eaton&apos;s premium repair studio
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]"
          >
            Your Phone.{" "}
            <span className="text-gradient">Repaired Like New.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
          >
            Fast, trusted phone repairs and refurbished devices on High Street,
            Long Eaton — same-day turnaround when you need it most.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#cta-quote"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet px-8 py-4 text-sm font-semibold text-surface shadow-[0_0_40px_-10px_rgba(56,189,248,0.55),0_0_28px_-12px_rgba(251,191,36,0.2)] transition-shadow hover:shadow-glow-lg"
              ariaLabel="Book a repair — scroll to quote section"
            >
              Book Repair
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton
              href="tel:01158374930"
              className="rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08]"
              ariaLabel="Call Fizi Phonez"
            >
              <Phone className="h-4 w-4 text-accent-cyan" aria-hidden />
              Call Now
            </MagneticButton>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 flex flex-wrap gap-3"
          >
            {[
              { icon: Star, label: "200+ Reviews" },
              { icon: ShieldCheck, label: "Same-Day Repairs" },
              { icon: Sparkles, label: "Certified Technicians" },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-xs font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-accent-amber/[0.12] backdrop-blur-sm md:text-sm"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-accent-blue"
                  aria-hidden
                />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute -left-6 top-10 hidden h-36 w-36 rounded-full bg-accent-cyan/18 blur-3xl hero-orb-pulse lg:block transform-gpu"
            aria-hidden
          />
          <PhoneMockup
            className="z-10 lg:mr-6"
            delay={0.25}
            label="Diagnostics"
            accent="blue"
          />
          <motion.div
            className="absolute -right-4 bottom-8 z-20 hidden scale-[0.82] md:block lg:-right-2 lg:bottom-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup delay={0} label="Restored" accent="violet" />
          </motion.div>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
