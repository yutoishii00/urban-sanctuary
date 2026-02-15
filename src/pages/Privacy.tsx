/*
 * Privacy Policy Page — プライバシーポリシー
 * Design: Dark background, serif typography, generous spacing
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 */

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    document.title = "プライバシーポリシー｜Urban Sanctuary — 完全会員制・高級エスコートサービス";
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
            — Privacy Policy
          </span>
          <h1 className="font-display text-4xl md:text-5xl tracking-[0.15em] text-gradient-gold mb-4">
            プライバシーポリシー
          </h1>
          <div className="w-12 h-px bg-[#D4AF37]/30 mx-auto mt-6" />
        </header>

        {/* Body */}
        <div className="terms-body">
          <p className="mb-16">
            Urban Sanctuary（以下「当サービス」）は、利用者の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定め、個人情報の適切な取扱いと保護に努めます。
          </p>

          <h2>1. 収集する情報</h2>
          <p className="mb-4">
            当サービスは、サービスの提供にあたり、以下の情報を収集することがあります。
          </p>
          <div className="taboo-list">
            <div className="taboo-item">
              <p>氏名、生年月日、性別、連絡先（電話番号、メールアドレス等）</p>
            </div>
            <div className="taboo-item">
              <p>サービスの利用履歴、予約情報</p>
            </div>
            <div className="taboo-item">
              <p>お支払いに関する情報</p>
            </div>
            <div className="taboo-item">
              <p>当サービスのウェブサイトへのアクセス情報（IPアドレス、ブラウザ情報、Cookie等）</p>
            </div>
            <div className="taboo-item">
              <p>お問い合わせ内容、アンケートへの回答</p>
            </div>
          </div>

          <h2 className="mt-16">2. 利用目的</h2>
          <p className="mb-4">
            収集した個人情報は、以下の目的で利用いたします。
          </p>
          <div className="taboo-list">
            <div className="taboo-item">
              <p>サービスの提供、運営、維持および改善</p>
            </div>
            <div className="taboo-item">
              <p>利用者からのお問い合わせへの対応</p>
            </div>
            <div className="taboo-item">
              <p>予約の確認、変更、キャンセルに関する連絡</p>
            </div>
            <div className="taboo-item">
              <p>利用規約に違反する行為への対応</p>
            </div>
            <div className="taboo-item">
              <p>サービスに関する重要なお知らせの送付</p>
            </div>
          </div>

          <h2 className="mt-16">3. 第三者への提供</h2>
          <p>
            当サービスは、以下の場合を除き、利用者の個人情報を第三者に提供することはありません。
          </p>
          <div className="taboo-list">
            <div className="taboo-item">
              <p>利用者の同意がある場合</p>
            </div>
            <div className="taboo-item">
              <p>法令に基づく場合</p>
            </div>
            <div className="taboo-item">
              <p>人の生命、身体または財産の保護のために必要がある場合であって、利用者の同意を得ることが困難である場合</p>
            </div>
            <div className="taboo-item">
              <p>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</p>
            </div>
          </div>

          <h2 className="mt-16">4. 個人情報の管理</h2>
          <p>
            当サービスは、利用者の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、セキュリティシステムの維持、管理体制の整備等、必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行います。
          </p>

          <h2 className="mt-16">5. 個人情報の開示・訂正・削除</h2>
          <p>
            利用者から個人情報の開示を求められた場合、当サービスは遅滞なくこれを開示します。
          </p>
          <p>
            個人情報の内容に誤りがあり、利用者から訂正・追加・削除の請求があった場合は、速やかに対応いたします。
          </p>
          <p className="mb-16">
            利用者が退会を希望される場合、当サービスが保有する当該利用者の個人情報は、当サービスが定める保存期間の経過後に適切な方法で消去いたします。
          </p>

          <h2>6. Cookieの使用</h2>
          <p className="mb-16">
            当サービスのウェブサイトでは、利用者の利便性向上およびアクセス解析のためにCookieを使用することがあります。利用者はブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、当サービスの一部機能がご利用いただけない場合があります。
          </p>

          <h2>7. 本ポリシーの変更</h2>
          <p className="mb-16">
            当サービスは、必要に応じて本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当サービスのウェブサイトに掲載した時点から効力を生じるものとします。
          </p>

          <h2>8. お問い合わせ</h2>
          <p className="mb-16">
            本ポリシーに関するお問い合わせは、当サービスの運営事務局までご連絡ください。
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
