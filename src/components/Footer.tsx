/*
 * Footer — Minimal with links and copyright
 * Gold accent line at top
 * Links: Covenant (利用規約), Secrecy (プライバシーポリシー), キャスト募集
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

      <div className="container py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl tracking-[0.2em] text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors duration-500"
          >
            Urban Sanctuary
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
            <a
              href="#"
              className="font-serif text-xs tracking-[0.15em] text-[#E2E8F0]/40 hover:text-[#D4AF37]/70 transition-colors duration-500"
            >
              キャスト募集
            </a>
          </nav>

          {/* Divider */}
          <div className="w-8 h-px bg-[#D4AF37]/20" />

          {/* Copyright */}
          <p className="font-sans text-[11px] tracking-[0.15em] text-[#E2E8F0]/25">
            &copy; Urban Sanctuary
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
