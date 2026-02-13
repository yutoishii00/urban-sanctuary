/*
 * Membership Section — Initiation Fee + Annual Membership Tiers
 * Design: Midnight blue + champagne gold glassmorphism, literary tone
 * Tiers: Gold / Platinum / Royal
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Shield,
  Crown,
  Gem,
  Star,
  Clock,
  Phone,
  CalendarCheck,
  UserCheck,
  Ban,
} from "lucide-react";

/* ─── Initiation Fee ─── */
const initiationFee = {
  price: "¥550,000",
  label: "Initiation Fee",
  subtitle: "入会審査・セキュリティ登録料",
  description:
    "当クラブは、お客様の平穏と秘密を何よりも優先します。この金額は、冷やかしや不適合者を完全に排除し、あなたと同じ『品格』を持つ方だけのコミュニティを維持するためのフィルタリングコストです。",
};

/* ─── Annual Membership Tiers ─── */
const tiers = [
  {
    name: "Gold",
    nameJa: "ゴールド",
    concept: "Standard Access",
    price: "¥330,000",
    period: "/ year",
    icon: Shield,
    accent: "from-[#D4AF37]/20 to-[#D4AF37]/5",
    borderColor: "border-[#D4AF37]/15 hover:border-[#D4AF37]/30",
    iconColor: "text-[#D4AF37]/60",
    reason:
      "聖域への入場パスポート。基本的な利用権のみを付与します。",
    features: [
      { icon: UserCheck, text: "会員資格の維持 — 厳格な審査を通過した証" },
      { icon: CalendarCheck, text: "コンシェルジュ予約 — LINE/メールでのスムーズな日程調整" },
    ],
  },
  {
    name: "Platinum",
    nameJa: "プラチナ",
    concept: "Stress-free",
    price: "¥550,000",
    period: "/ year",
    icon: Crown,
    featured: true,
    accent: "from-[#C0C0C0]/20 to-[#E8E8E8]/5",
    borderColor: "border-[#C0C0C0]/20 hover:border-[#C0C0C0]/40",
    iconColor: "text-[#E8E8E8]/70",
    reason:
      "よく利用される方のための、実利的なアップグレード。人気キャストを確実に抑えるための権利です。",
    features: [
      { icon: Star, text: "指名料の完全免除 — 毎回発生する指名料がフリーに" },
      { icon: Clock, text: "7日前の先行予約 — 一般会員より1週間早くスケジュールを確保可能" },
    ],
  },
  {
    name: "Royal",
    nameJa: "ロイヤル",
    concept: "Unlimited Flexibility",
    price: "¥1,100,000",
    period: "/ year",
    icon: Gem,
    accent: "from-[#D4AF37]/30 to-[#F5E6A3]/10",
    borderColor: "border-[#D4AF37]/25 hover:border-[#D4AF37]/50",
    iconColor: "text-[#F5E6A3]/80",
    reason:
      "『NO』と言われない快適さ。ペナルティや制限を撤廃し、あなたのライフスタイルに完全に合わせます。",
    features: [
      { icon: Crown, text: "最優先予約枠 — 満席でもRoyal会員のためにスケジュールを調整・確保" },
      { icon: Ban, text: "キャンセル規定の免除 — 当日の急な予定変更でもキャンセル料一切不要" },
      { icon: Phone, text: "24時間ホットライン — 深夜早朝を問わず、専属デスクが即座に対応" },
    ],
  },
];

/* ─── Tier Card ─── */
function TierCard({
  tier,
  index,
  isInView,
}: {
  tier: (typeof tiers)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Icon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.3 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-sm overflow-hidden group border transition-all duration-700 ${tier.borderColor} ${
        tier.featured
          ? "bg-white/[0.05] backdrop-blur-xl"
          : "bg-white/[0.02] backdrop-blur-xl"
      }`}
    >
      {/* Top gradient accent */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${tier.accent}`}
      />

      {/* Featured badge */}
      {tier.featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-white/[0.06] text-[#E8E8E8] font-sans text-[9px] tracking-[0.25em] uppercase px-4 py-1.5 border-b border-l border-white/[0.08]">
            Most Popular
          </div>
        </div>
      )}

      <div className="p-8 md:p-10">
        {/* Icon */}
        <div
          className={`w-14 h-14 mb-8 flex items-center justify-center rounded-full border transition-all duration-700 ${
            hovered
              ? "border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.08)]"
              : "border-white/[0.08]"
          }`}
        >
          <Icon size={22} className={tier.iconColor} strokeWidth={1.5} />
        </div>

        {/* Tier name */}
        <div className="mb-1">
          <h3 className="font-display text-2xl md:text-3xl tracking-[0.12em] text-[#E2E8F0]">
            {tier.name}
          </h3>
        </div>
        <p className="font-sans text-[11px] tracking-[0.15em] text-[#E2E8F0]/30 mb-1">
          {tier.nameJa}
        </p>
        <p className="font-serif text-[13px] tracking-wider text-[#D4AF37]/40 italic mb-8">
          — {tier.concept}
        </p>

        {/* Price */}
        <div className="mb-8">
          <span className="font-display text-3xl md:text-4xl tracking-[0.05em] text-gradient-gold">
            {tier.price}
          </span>
          <span className="font-sans text-[10px] tracking-wider text-[#E2E8F0]/25 ml-2">
            (税込) {tier.period}
          </span>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#D4AF37]/8 mb-8" />

        {/* Features */}
        <ul className="space-y-5 mb-8">
          {tier.features.map((feature) => {
            const FeatureIcon = feature.icon;
            return (
              <li
                key={feature.text}
                className="flex items-start gap-3"
              >
                <FeatureIcon
                  size={14}
                  className="text-[#D4AF37]/30 shrink-0 mt-[3px]"
                  strokeWidth={1.5}
                />
                <span className="font-sans text-xs tracking-wider leading-[2] text-[#E2E8F0]/50">
                  {feature.text}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.04] mb-6" />

        {/* Reason quote */}
        <p className="font-serif text-[11px] tracking-wider leading-[2.2] text-[#E2E8F0]/30 italic">
          「{tier.reason}」
        </p>
      </div>

      {/* Hover glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
          hovered ? "opacity-100" : "opacity-0"
        } ${
          tier.name === "Royal"
            ? "shadow-[inset_0_0_80px_rgba(212,175,55,0.04)]"
            : "shadow-[inset_0_0_50px_rgba(212,175,55,0.02)]"
        }`}
      />
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function MembershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="membership" className="relative section-spacing" ref={ref}>
      <div className="absolute inset-0 bg-[#0B1021]" />

      {/* Subtle radial glow behind the section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px]" />
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
            — Exclusive Membership
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            Membership
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
        </motion.div>

        {/* ─── Initiation Fee ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <div className="relative rounded-sm overflow-hidden border border-[#D4AF37]/20 bg-white/[0.02] backdrop-blur-xl">
            {/* Top gold line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

            <div className="p-8 md:p-12 text-center">
              <p className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/50 mb-3">
                {initiationFee.label}
              </p>
              <p className="font-sans text-[11px] tracking-[0.15em] text-[#E2E8F0]/30 mb-6">
                {initiationFee.subtitle}
              </p>

              <div className="mb-8">
                <span className="font-display text-5xl md:text-6xl tracking-[0.05em] text-gradient-gold">
                  {initiationFee.price}
                </span>
                <span className="font-sans text-[10px] tracking-wider text-[#E2E8F0]/25 ml-2">
                  (税込)
                </span>
              </div>

              <div className="w-16 h-px bg-[#D4AF37]/15 mx-auto mb-8" />

              <p className="font-serif text-xs md:text-[13px] tracking-wider leading-[2.4] text-[#E2E8F0]/40 max-w-lg mx-auto">
                {initiationFee.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ─── Annual Membership heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-display text-sm tracking-[0.2em] uppercase text-[#E2E8F0]/30">
            Annual Membership
          </p>
          <p className="font-serif text-[12px] tracking-wider text-[#D4AF37]/30 mt-2 italic">
            — 年会費
          </p>
        </motion.div>

        {/* ─── Tier Cards ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <TierCard
              key={tier.name}
              tier={tier}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center font-sans text-[11px] tracking-wider text-[#E2E8F0]/20 mt-14 leading-relaxed"
        >
          ※ 会員資格は審査制となります。詳しくはお問い合わせください。
        </motion.p>
      </div>
    </section>
  );
}
