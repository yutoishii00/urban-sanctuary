/*
 * Terms Page — 利用規約
 * Design: Dark background, serif typography, generous spacing
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  useEffect(() => {
    document.title = "利用規約｜Urban Sanctuary — 完全会員制・高級エスコートサービス";
  }, []);

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
            — Terms of Service
          </span>
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            利用規約
          </h1>
          <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mt-6" />
        </header>

        {/* Body */}
        <div className="terms-body">
          <p className="mb-16">
            この利用規約（以下「本規約」）は、Urban Sanctuary（以下「当サービス」）が提供するすべてのサービスの利用条件を定めるものです。ご利用の皆様（以下「利用者」）には、本規約に同意いただいた上で、当サービスをご利用いただきます。
          </p>

          <h2>第1条（適用）</h2>
          <p>
            本規約は、利用者と当サービスとの間のサービス利用に関わる一切の関係に適用されるものとします。
          </p>
          <p className="mb-16">
            当サービスが別途定める個別規定や追加規定は、本規約の一部を構成するものとします。本規約と個別規定が矛盾する場合は、個別規定が優先されるものとします。
          </p>

          <h2>第2条（利用資格）</h2>
          <p>
            当サービスは、18歳以上の方のみご利用いただけます。
          </p>
          <p className="mb-16">
            利用者は、当サービスの利用にあたり、本規約に同意し、かつ当サービスが定める審査基準を満たす必要があります。
          </p>

          <h2>第3条（禁止事項）</h2>
          <p className="mb-4">
            利用者は、当サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <div className="taboo-list">
            <div className="taboo-item">
              <p>法令または公序良俗に違反する行為</p>
            </div>
            <div className="taboo-item">
              <p>犯罪行為に関連する行為</p>
            </div>
            <div className="taboo-item">
              <p>当サービスのスタッフ、他の利用者、または第三者に対する嫌がらせ、誹謗中傷、脅迫、暴力行為</p>
            </div>
            <div className="taboo-item">
              <p>当サービスの運営を妨害するおそれのある行為</p>
            </div>
            <div className="taboo-item">
              <p>他の利用者またはスタッフの個人情報を不正に収集、開示、または利用する行為</p>
            </div>
            <div className="taboo-item">
              <p>当サービスの施設内またはサービス提供中の無断撮影・録音・録画</p>
            </div>
            <div className="taboo-item">
              <p>その他、当サービスが不適切と判断する行為</p>
            </div>
          </div>

          <h2 className="mt-16">第4条（サービスの提供・変更・停止）</h2>
          <p>
            当サービスは、利用者に事前に通知することなく、サービスの内容を変更し、または提供を中止することができるものとします。
          </p>
          <p className="mb-16">
            当サービスは、サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
          </p>

          <h2>第5条（料金および支払い）</h2>
          <p>
            利用者は、当サービスが定める料金を、指定された方法により支払うものとします。
          </p>
          <p>
            予約のキャンセルについては、当サービスが別途定めるキャンセルポリシーに従うものとします。
          </p>
          <p className="mb-16">
            一度お支払いいただいた料金は、当サービスに帰責事由がある場合を除き、返金いたしません。
          </p>

          <h2>第6条（会員資格の停止・取消）</h2>
          <p>
            当サービスは、利用者が本規約のいずれかの条項に違反した場合、または当サービスが利用者として不適当と判断した場合、事前の通知なく会員資格の停止または取消を行うことができるものとします。
          </p>
          <p className="mb-16">
            会員資格の停止・取消に伴い、既にお支払いいただいた入会金および年会費の返金は行いません。
          </p>

          <h2>第7条（免責事項）</h2>
          <p>
            当サービスは、サービスの利用により利用者に生じた一切の損害について、当サービスの故意または重大な過失による場合を除き、責任を負わないものとします。
          </p>
          <p className="mb-16">
            当サービスは、利用者間または利用者とスタッフ間のトラブルについて、一切の責任を負わないものとします。
          </p>

          <h2>第8条（規約の変更）</h2>
          <p className="mb-16">
            当サービスは、必要と判断した場合には、利用者に通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当サービスのウェブサイトに掲載した時点から効力を生じるものとします。
          </p>

          <h2>第9条（準拠法・管轄裁判所）</h2>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。
          </p>
          <p className="mb-16">
            当サービスに関して紛争が生じた場合には、当サービスの本店所在地を管轄する裁判所を専属的合意管轄とします。
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
