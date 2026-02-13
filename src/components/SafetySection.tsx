/*
 * Safety Promise Section — Trust-building with shield/lock icons
 * Three keyword cards with glassmorphism
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye } from "lucide-react";

const safetyItems = [
  {
    icon: Lock,
    title: "秘密厳守",
    description: "お客様の個人情報やご利用内容は、厳重に管理いたします。",
  },
  {
    icon: Eye,
    title: "明朗会計",
    description: "追加料金は一切ございません。事前にご案内した料金のみです。",
  },
  {
    icon: Shield,
    title: "健全運営",
    description: "法令を遵守し、安心してご利用いただける環境を整えています。",
  },
];

export default function SafetySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-spacing" ref={ref}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1021] via-[#0D1525] to-[#0B1021]" />

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
            — Safety Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl tracking-[0.1em] text-gradient-gold mb-8">
            安全への約束
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mb-10" />
          <p className="font-sans text-sm md:text-base leading-relaxed tracking-wider text-[#E2E8F0]/70 max-w-2xl mx-auto">
            当店は性的サービスを一切行わない、対話とデートを通じたリラクゼーションサービスです。
          </p>
        </motion.div>

        {/* Three keyword cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {safetyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel rounded-sm p-8 md:p-10 text-center group hover:border-[#D4AF37]/20 transition-all duration-700"
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-700">
                <item.icon
                  size={24}
                  className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors duration-500"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-lg tracking-[0.15em] text-[#D4AF37] mb-4">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed tracking-wider text-[#E2E8F0]/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
