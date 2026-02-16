/*
 * Footer — Opening Hours (luxury hotel style) + Links + Copyright
 * Hours: Daydream 14:00-19:00, Midnight 19:00-02:00
 * Gold accent, serif typography, generous whitespace
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative border-t border-white/5">
      {/* Gold accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* ─── Opening Hours ─── */}
          <div className="text-center mb-16 md:mb-20">
            <span className="font-display text-xs tracking-[0.35em] uppercase text-[#D4AF37]/50 block mb-3">
              — Opening Hours
            </span>
            <div className="w-8 h-px bg-[#D4AF37]/25 mx-auto mb-12" />

            {/* Hours grid */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
              {/* Daydream */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <h4 className="font-display text-2xl md:text-3xl tracking-[0.15em] text-[#E2E8F0]/80 mb-2">
                  Daydream
                </h4>
                <p className="font-serif text-[11px] tracking-[0.2em] italic text-[#D4AF37]/45 mb-4">
                  The Secret Afternoon
                </p>
                <p className="font-display text-lg md:text-xl tracking-[0.2em] text-[#E2E8F0]/50 mb-4">
                  14:00 — 19:00
                </p>
                <p className="font-serif text-[12px] tracking-wider leading-[2] text-[#E2E8F0]/30 max-w-[220px]">
                  日常の隙間に紛れ込む、<br />秘密の午後を。
                </p>
              </motion.div>

              {/* Vertical divider (desktop) / horizontal (mobile) */}
              <div className="hidden md:block w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/15 to-transparent" />
              <div className="block md:hidden w-16 h-px bg-[#D4AF37]/15" />

              {/* Midnight */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <h4 className="font-display text-2xl md:text-3xl tracking-[0.15em] text-[#E2E8F0]/80 mb-2">
                  Midnight
                </h4>
                <p className="font-serif text-[11px] tracking-[0.2em] italic text-[#D4AF37]/45 mb-4">
                  Until the magic fades
                </p>
                <p className="font-display text-lg md:text-xl tracking-[0.2em] text-[#E2E8F0]/50 mb-4">
                  19:00 — 02:00
                </p>
                <p className="font-serif text-[12px] tracking-wider leading-[2] text-[#E2E8F0]/30 max-w-[220px]">
                  夜の帳が下りてから、<br />世界が眠るその時まで。
                </p>
              </motion.div>
            </div>
          </div>

          {/* ─── Divider ─── */}
          <div className="w-12 h-px bg-[#D4AF37]/15 mb-12" />

          {/* ─── Logo ─── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl tracking-[0.2em] text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors duration-500 mb-8"
          >
            Urban Sanctuary
          </a>

          {/* ─── Links ─── */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
            <Link href="/terms">
              <span className="font-serif text-xs tracking-[0.15em] text-[#E2E8F0]/40 hover:text-[#D4AF37]/70 transition-colors duration-500 cursor-pointer">
                Covenant（誓約）
              </span>
            </Link>
            <Link href="/privacy">
              <span className="font-serif text-xs tracking-[0.15em] text-[#E2E8F0]/40 hover:text-[#D4AF37]/70 transition-colors duration-500 cursor-pointer">
                Secrecy（秘密）
              </span>
            </Link>
          </nav>

          {/* ─── Copyright ─── */}
          <p className="font-sans text-[11px] tracking-[0.15em] text-[#E2E8F0]/25">
            &copy; Urban Sanctuary
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
