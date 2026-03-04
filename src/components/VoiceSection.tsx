/*
 * Voice Section — Member testimonials with glassmorphism
 * Design: Midnight blue + champagne gold, literary tone
 * Content: 会員様の本音 — intimate, anonymous testimonials
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const voices = [
  {
    question: "同じように迷っている女性へメッセージをお願いします。",
    answer:
      "ときめきや甘える時間は、いくつになっても大切だと思いました。\n少し勇気を出すことで、自分の中の女性らしい感覚を思い出せるかもしれません。\n本当に素敵な時間でした。",
    tag: "いくつになっても可愛い女性であるために大切な時間",
  },
  {
    question: "同じように迷っている女性へメッセージをお願いします。",
    answer:
      "普段しっかりしていると言われがちな女性ほど、「誰かに大切に扱われる時間」を持つことはとても大事だと思います。\n少し勇気はいるけれど、新しい自分の感覚に出会える体験でした。",
    tag: "プリンセス体験",
  },
];

export default function VoiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voice" className="relative section-spacing" ref={ref}>
      <div className="absolute inset-0 bg-[#0B1021]" />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.015] rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
            — Member's Voice
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            Confessions
          </h2>
          <p className="font-serif text-[13px] tracking-wider text-[#E2E8F0]/30 mt-4 italic">
            — 会員様の本音
          </p>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
        </motion.div>

        {/* Voice cards */}
        <div className="max-w-2xl mx-auto space-y-10">
          {voices.map((voice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-sm overflow-hidden border border-[#D4AF37]/15 bg-white/[0.02] backdrop-blur-xl group hover:border-[#D4AF37]/30 transition-colors duration-700"
            >
              {/* Top gold line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

              <div className="p-8 md:p-12">
                {/* Question */}
                <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]/40 mb-6">
                  — {voice.question}
                </p>

                {/* Answer */}
                <blockquote className="relative">
                  {/* Opening quote mark */}
                  <span className="absolute -top-4 -left-2 font-display text-6xl text-[#D4AF37]/10 leading-none select-none">
                    "
                  </span>
                  <div className="pl-4">
                    {voice.answer.split("\n").map((line, j) => (
                      <p
                        key={j}
                        className="font-serif text-sm md:text-[15px] tracking-wider leading-[2.4] text-[#E2E8F0]/70"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </blockquote>

                {/* Divider */}
                <div className="w-full h-px bg-[#D4AF37]/8 my-8" />

                {/* Tag — one-liner summary */}
                <p className="font-serif text-[12px] tracking-[0.15em] text-[#D4AF37]/50 italic text-right">
                  「{voice.tag}」
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_60px_rgba(212,175,55,0.03)]" />
            </motion.div>
          ))}
        </div>

        {/* Privacy note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center font-sans text-[10px] tracking-wider text-[#E2E8F0]/20 mt-14 leading-relaxed"
        >
          ※ 掲載にあたり、会員様のご了承をいただいております。個人を特定できる情報は一切含まれておりません。
        </motion.p>
      </div>
    </section>
  );
}
