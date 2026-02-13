/*
 * Urban Sanctuary — Landing Page
 * Design: Glass Night — Neo-Brutalism × Glassmorphism
 * Colors: Midnight Blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 * Fonts: Shippori Mincho B1 (headings), Cormorant Garamond (display), Noto Sans JP (body)
 */

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
      </main>
      <Footer />
    </div>
  );
}
