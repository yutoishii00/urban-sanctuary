/*
 * Privacy Policy Page — 秘密の封蝋 / Secrecy
 * Design: Novel / contract aesthetic — dark background, serif typography, generous spacing
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0B1021] text-[#E2E8F0]">
      {/* Back navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0B1021]/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center">
          <Link href="/">
            <span className="flex items-center gap-3 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-500 cursor-pointer group">
              <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-display text-xs tracking-[0.25em] uppercase">Return to Sanctuary</span>
            </span>
          </Link>
        </div>
      </div>

      {/* Content */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mx-auto px-6 pt-28 pb-24"
      >
        {/* Title block */}
        <header className="text-center mb-20">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/50 block mb-5">
            — Secrecy
          </span>
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            秘密の封蝋
          </h1>
          <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mt-6 mb-8" />
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#E2E8F0]/20 uppercase">
            Privacy Policy
          </p>
        </header>

        {/* Preamble */}
        <div className="terms-body">
          <p>
            貴女が誰であるか。社会でどのような仮面を被っているか。
          </p>
          <p>
            ここにおいて、それは何の意味も持ちません。
          </p>
          <p className="mb-16">
            私たちは、貴女の「秘密」を墓場まで持っていくことを誓います。
          </p>

          {/* Section 1 */}
          <h2>1. 収集する情報の意味</h2>
          <p>
            私たちが貴女のお名前や連絡先をお聞きするのは、貴女を確実にこの聖域へ導くためだけです。
          </p>
          <p className="mb-16">
            それ以外の目的で、貴女の現実世界に干渉することはありません。
          </p>

          {/* Section 2 */}
          <h2>2. 第三者への沈黙</h2>
          <p>
            貴女がここに存在したという事実を含め、頂いた情報を第三者に漏らすことは決してありません。
          </p>
          <p className="mb-16">
            ただし、貴女自身やキャストの生命に関わる緊急事態、あるいは法による強制力が働いた場合に限り、この封蝋を解くことがあります。
          </p>

          {/* Section 3 */}
          <h2>3. データの消滅</h2>
          <p>
            貴女が退会を望む時、あるいは当館との縁が切れた時、
          </p>
          <p className="mb-16">
            貴女に関する全ての記録は、夜明けの霧のように跡形もなく消去されます。
          </p>

          {/* Section 4 */}
          <h2>4. 問いかけ</h2>
          <p>
            この誓いに関する疑問や不安があれば、いつでも支配人（運営）までお声がけください。
          </p>
          <p className="mb-16">
            貴女の不安を取り除くことも、私たちの務めです。
          </p>

          {/* Date */}
          <div className="enactment">
            <div className="w-8 h-px bg-[#D4AF37]/20 mx-auto mb-6" />
            <p>制定：2026年2月13日</p>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
