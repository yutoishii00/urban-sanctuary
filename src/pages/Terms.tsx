/*
 * Terms Page — 聖域との誓約 / Covenant
 * Design: Novel / contract aesthetic — dark background, serif typography, generous spacing
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
            — Covenant
          </span>
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            聖域との誓約
          </h1>
          <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mt-6 mb-8" />
          <p className="font-sans text-[10px] tracking-[0.2em] text-[#E2E8F0]/20 uppercase">
            Terms of Service
          </p>
        </header>

        {/* Preamble */}
        <div className="terms-body">
          <p>
            Urban Sanctuary（以下「当館」）は、孤独を抱える貴女のための避難所です。
          </p>
          <p>
            この扉をくぐる時、貴女と私たちは「秘密」という名の契約を交わします。
          </p>
          <p className="mb-16">
            以下に記された誓約を守れる方のみ、この鍵をお使いください。
          </p>

          {/* Article 1 */}
          <h2>第1条（関係性の定義）</h2>
          <p>
            当館が提供するのは「時間」と「救済」であり、それ以外の何物でもありません。
          </p>
          <p>
            キャストは貴女の「鏡」です。貴女が心を許せば、彼らもまた心を開きます。
          </p>
          <p>
            ただし、これは対等な人間同士の、一夜限りの夢の共有です。
          </p>
          <p className="mb-16">
            金銭によって魂や尊厳までを買い取ることはできません。
          </p>

          {/* Article 2 */}
          <h2>第2条（禁忌 — Taboo）</h2>
          <p className="mb-8">
            この夢を壊さないために、以下の行為を「禁忌」と定めます。
          </p>

          <div className="taboo-list">
            <div className="taboo-item">
              <h3>1. 魔法を解く行為</h3>
              <p>
                キャストの本名、住所、過去を暴くこと。夢は夢のままであるからこそ美しいのです。
              </p>
            </div>

            <div className="taboo-item">
              <h3>2. 聖域を汚す行為</h3>
              <p>
                キャストに対する暴力、暴言、脅迫。あるいは、嫌がる彼らを無理強いすること。
              </p>
              <p className="text-[#D4AF37]/50 text-[12px] mt-3 leading-[2]">
                ※当館は性的サービスを提供する売春宿ではありません。法に触れる行為、本番行為の強要は固く禁じます。
              </p>
            </div>

            <div className="taboo-item">
              <h3>3. 隠し撮り・晒し</h3>
              <p>
                二人の時間を記録に残すこと、SNS等で共有することは、最も重い裏切りとみなします。
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <h2 className="mt-16">第3条（対価とキャンセル）</h2>
          <p>
            救済には相応の対価が必要です。
          </p>
          <p>
            予約とは、キャストという一人の人間の「命の時間」を確保する約束です。
          </p>
          <p className="mb-8">
            そのため、直前のキャンセルには痛みが伴います。
          </p>

          <div className="cancel-policy">
            <div className="cancel-row">
              <span className="cancel-label">前日の破棄</span>
              <span className="cancel-value">対価の50%</span>
            </div>
            <div className="cancel-row">
              <span className="cancel-label">当日の破棄</span>
              <span className="cancel-value">対価の100%</span>
            </div>
          </div>

          <p className="mt-8 mb-16">
            無断で約束を破られた場合、二度とこの扉が開くことはありません。
          </p>

          {/* Article 4 */}
          <h2>第4条（免責）</h2>
          <p>
            当館は、貴女の「心の隙間」を埋めるお手伝いをしますが、その結果生じた感情の揺れ動きや、日常への影響について責任を負うものではありません。
          </p>
          <p className="mb-16">
            「溺れる」ことさえも楽しむ覚悟を持って、ご来館ください。
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
