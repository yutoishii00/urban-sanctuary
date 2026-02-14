/*
 * Age Gate — Full-screen disclaimer overlay
 * Displays before main site content; user must click OK to proceed.
 * Design: Matches the moody, cinematic aesthetic of Urban Sanctuary
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 */

import { motion } from "framer-motion";

interface AgeGateProps {
  onAccept: () => void;
}

export default function AgeGate({ onAccept }: AgeGateProps) {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0B1021] flex items-center justify-center">
      {/* Subtle radial glow behind the card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/[0.03] blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-lg w-full mx-6"
      >
        {/* Glass card */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-sm p-10 md:p-14 text-center">
          {/* Logo / Brand */}
          <div className="mb-10">
            <h1 className="font-display text-3xl md:text-4xl tracking-[0.2em] text-gradient-gold">
              Urban Sanctuary
            </h1>
            <div className="w-10 h-px bg-[#D4AF37]/40 mx-auto mt-4" />
          </div>

          {/* Disclaimer text */}
          <div className="space-y-6 mb-12">
            <p className="font-serif text-[13px] md:text-sm tracking-wider leading-[2.2] text-[#E2E8F0]/70">
              完全会員制エスコートサービス
              <br />
              Urban Sanctuary のオフィシャルサイトです。
            </p>

            <p className="font-serif text-[13px] md:text-sm tracking-wider leading-[2.2] text-[#E2E8F0]/70">
              当サイトには、成人向けサービスに関する
              <br />
              情報が含まれています。
            </p>

            <p className="font-serif text-[13px] md:text-sm tracking-wider leading-[2.2] text-[#D4AF37]/80 font-medium">
              18歳未満の方の閲覧は
              <br className="md:hidden" />
              堅くご遠慮願います。
            </p>
          </div>

          {/* OK Button */}
          <motion.button
            onClick={onAccept}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center justify-center px-14 py-3.5 border border-[#D4AF37]/40 hover:border-[#D4AF37]/70 bg-[#D4AF37]/[0.06] hover:bg-[#D4AF37]/[0.12] transition-all duration-500 rounded-sm group cursor-pointer"
          >
            <span className="font-display text-sm tracking-[0.25em] text-[#D4AF37] group-hover:text-[#F5E6A3] transition-colors duration-500">
              ENTER
            </span>
          </motion.button>

          {/* Sub-note */}
          <p className="font-sans text-[10px] tracking-wider text-[#E2E8F0]/20 mt-8 leading-relaxed">
            ボタンを押すことで、18歳以上であることに同意したものとみなします。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
