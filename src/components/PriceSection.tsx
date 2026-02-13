/*
 * Price Section — Elegant pricing cards with glassmorphism
 * Two plans: Prelude (対話) and Escapism (逃避行)
 * Literary, cinematic tone — refined borders & generous line-height
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Feather, Compass } from "lucide-react";

const plans = [
  {
    name: "Prelude",
    subtitle: "まとまらない言葉も、沈黙さえも。ただ、隣にいる時間",
    duration: "2hours",
    price: "¥30,000",
    icon: Feather,
    features: [
      "言葉にできない「溜め息」を拾う",
      "社会的肩書きを脱ぎ捨てる場所",
      "心地よい距離感と、少しの体温",
    ],
  },
  {
    name: "Escapism",
    subtitle: "渇いた日常に、潤いという名の色彩を落とす",
    duration: "4hours",
    price: "¥60,000",
    icon: Compass,
    featured: true,
    features: [
      "あなたの「女性」を呼び覚ますエスコート",
      "誰の目も気にしない、二人だけの逃避行",
      "言葉を超えた、深い安らぎと充足",
    ],
  },
];

export default function PriceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="price" className="relative section-spacing" ref={ref}>
      <div className="absolute inset-0 bg-[#0B1021]" />

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
            — Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            Price
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative rounded-sm overflow-hidden group border transition-colors duration-700 ${
                plan.featured
                  ? "bg-white/[0.04] backdrop-blur-xl border-[#D4AF37]/30 hover:border-[#D4AF37]/50"
                  : "bg-white/[0.02] backdrop-blur-xl border-white/[0.06] hover:border-[#D4AF37]/20"
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#D4AF37]/10 text-[#D4AF37] font-sans text-[10px] tracking-[0.2em] uppercase px-4 py-1.5 border-b border-l border-[#D4AF37]/20">
                    Recommended
                  </div>
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Icon */}
                <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-full border border-[#D4AF37]/15">
                  <plan.icon
                    size={20}
                    className="text-[#D4AF37]/70"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Plan name — serif display */}
                <h3 className="font-display text-2xl md:text-3xl tracking-[0.12em] text-[#E2E8F0] mb-2">
                  {plan.name}
                </h3>
                <p className="font-serif text-[13px] tracking-wider leading-relaxed text-[#D4AF37]/50 mb-8">
                  {plan.subtitle} — {plan.duration}
                </p>

                {/* Price */}
                <div className="mb-10">
                  <span className="font-display text-4xl md:text-5xl tracking-[0.05em] text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="font-sans text-[10px] tracking-wider text-[#E2E8F0]/30 ml-2">
                    (税抜)
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#D4AF37]/10 mb-8" />

                {/* Features — smaller font, generous line-height */}
                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-sans text-xs tracking-wider leading-[2] text-[#E2E8F0]/50"
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-[#D4AF37]/30 shrink-0 mt-[9px]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                  plan.featured
                    ? "shadow-[inset_0_0_60px_rgba(212,175,55,0.04)]"
                    : "shadow-[inset_0_0_40px_rgba(212,175,55,0.02)]"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center font-sans text-[11px] tracking-wider text-[#E2E8F0]/25 mt-14 leading-relaxed"
        >
          ※ 交通費・施設入場料等が別途必要な場合がございます。詳しくはお問い合わせください。
        </motion.p>
      </div>
    </section>
  );
}
