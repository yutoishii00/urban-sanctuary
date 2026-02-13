/*
 * Flow Section — 4-step process with connecting lines
 * Vertical on mobile, horizontal on desktop
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UserCheck, MessageCircle, MapPin, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Selection",
    subtitle: "キャストを選ぶ",
    description: "プロフィールを見て、あなたに合うキャストをお選びください。",
    icon: UserCheck,
  },
  {
    number: "02",
    title: "Reservation",
    subtitle: "LINEまたはフォームで予約",
    description: "ご希望の日時・プランをお伝えください。",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Meeting",
    subtitle: "カフェや公共の場で待ち合わせ",
    description: "安心できる公共の場所でお会いします。",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Payment",
    subtitle: "前払い・または現地決済",
    description: "明朗会計。追加料金は一切ございません。",
    icon: CreditCard,
  },
];

export default function FlowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="flow" className="relative section-spacing" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1021] via-[#0D1525] to-[#0B1021]" />

      <div className="container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
            — How It Works
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            Flow
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center relative"
              >
                {/* Icon circle */}
                <div className="w-[4.5rem] h-[4.5rem] mx-auto mb-6 flex items-center justify-center rounded-full glass-panel border border-[#D4AF37]/15 relative z-10 bg-[#0B1021]">
                  <step.icon
                    size={22}
                    className="text-[#D4AF37]/70"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Step number */}
                <span className="font-display text-xs tracking-[0.3em] text-[#D4AF37]/40 block mb-2">
                  {step.number}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl tracking-[0.1em] text-[#E2E8F0] mb-2">
                  {step.title}
                </h3>

                {/* Subtitle */}
                <p className="font-serif text-sm tracking-wider text-[#D4AF37]/60 mb-3">
                  {step.subtitle}
                </p>

                {/* Description */}
                <p className="font-sans text-xs leading-relaxed tracking-wider text-[#E2E8F0]/50 max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
