"use client";

import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=51+High+St,+Long+Eaton+NG10+1HZ&z=16&output=embed";

export function SiteFooter() {
  return (
    <footer
      className="relative z-10 border-t border-accent-amber/12 bg-surface/90 px-6 pb-12 pt-16 backdrop-blur-md"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
          <div>
            <h2 id="footer-heading" className="sr-only">
              Fizi Phonez
            </h2>
            <BrandLogo variant="footer" className="mb-5" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Premium phone repairs and refurbished devices — fast, honest, and
              obsessively detailed.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-300">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent-blue"
                  aria-hidden
                />
                <span>
                  51 High Street, Long Eaton
                  <br />
                  Nottingham NG10 1HZ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-cyan" aria-hidden />
                <a
                  href="tel:01158374930"
                  className="transition-colors hover:text-white"
                >
                  0115 837 4930
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-violet" aria-hidden />
                <span>
                  Mon–Sat: 9:00–17:30
                  <br />
                  Sun: Closed
                </span>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 hover:border-white/20 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Find us
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-inner">
              <iframe
                title="Fizi Phonez location on Google Maps"
                src={MAP_EMBED_SRC}
                className="aspect-[16/11] min-h-[220px] w-full border-0 grayscale-[30%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Fizi Phonez. All rights reserved.</p>
          <p className="text-zinc-600">
            Crafted as a premium digital flagship — not an ordinary repair site.
          </p>
        </div>
      </div>
    </footer>
  );
}
