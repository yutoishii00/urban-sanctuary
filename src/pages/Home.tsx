/*
 * Urban Sanctuary — Landing Page
 * Design: Glass Night — Neo-Brutalism × Glassmorphism
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 * Fonts: Shippori Mincho B1 (headings), Cormorant Garamond (display), Noto Sans JP (body)
 * SEO: Semantic HTML with hidden content targeting 顕在層 + 潜在層 keywords
 */

import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import SafetySection from "@/components/SafetySection";
import CastSection from "@/components/CastSection";
import FlowSection from "@/components/FlowSection";
import PriceSection from "@/components/PriceSection";
import MembershipSection from "@/components/MembershipSection";
import Footer from "@/components/Footer";

export default function Home() {
  /* Update document title for SPA navigation */
  useEffect(() => {
    document.title =
      "Urban Sanctuary｜完全会員制・高級男性エスコートサービス【東京・福岡・全国対応】";
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1021] text-[#E2E8F0] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <SafetySection />
        <CastSection />
        <FlowSection />
        <PriceSection />
        <MembershipSection />

        {/* SEO: Visually hidden semantic content for search engines */}
        <section className="sr-only" aria-label="サービス概要">
          <h2>Urban Sanctuary — 完全会員制・高級男性エスコートサービス（東京・福岡・全国対応）</h2>
          <p>
            Urban Sanctuaryは、東京・福岡を中心に全国対応の完全会員制・審査制の高級男性エスコートサービスです。
            出張ホストやレンタル彼氏とは一線を画す、心の救済に特化した大人の女性向けデートクラブとして、
            富裕層のお客様に上質な時間をお届けしています。
          </p>
          <h3>こんなお悩みをお持ちの方へ</h3>
          <ul>
            <li>既婚者で寂しい思いを抱えている方</li>
            <li>独身女性で休日が虚しいと感じている方</li>
            <li>誰かに甘えたい、否定しない話し相手が欲しい方</li>
            <li>心の隙間を埋めたいと感じている方</li>
            <li>誕生日を一人で過ごす寂しさを感じている女性</li>
            <li>週末に誰かとご飯を食べたい方</li>
            <li>港区で一人で入れるバーを探している方</li>
          </ul>
          <h3>サービスの特徴</h3>
          <ul>
            <li>完全会員制・審査あり — 品格のあるコミュニティを維持</li>
            <li>富裕層向け — 上質な空間と時間をお約束</li>
            <li>バレない・顔出しなし — プライバシーを最優先に保護</li>
            <li>否定のない傾聴 — 言葉にできない溜め息さえも拾います</li>
            <li>性的サービスは一切提供しません</li>
            <li>東京・福岡を中心に全国対応</li>
            <li>東京エリアは事前予約制（当日予約不可）</li>
          </ul>
          <h3>プラン</h3>
          <p>Prelude（2時間）¥30,000 — 心地よい距離感と、少しの体温。</p>
          <p>Escapism（4時間）¥60,000 — 渇いた日常に、潤いという名の色彩を落とす逃避行。</p>
          <h3>会員制度</h3>
          <p>入会金 ¥550,000（税込）。年会費：Gold ¥330,000 / Platinum ¥550,000 / Royal ¥1,100,000。</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
