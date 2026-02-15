/*
 * Hero Section — Full-screen with city night background
 * Title: "Urban Sanctuary" in Cormorant Garamond
 * Catchcopy centered, CTA button with gold glow
 */

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/yInDrc44dXExNS4EEzYhyr/sandbox/fZl9mdNhBuooQ0blkriSwd-img-1_1770628253000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUluRHJjNDRkWEV4TlM0RUV6WWh5ci9zYW5kYm94L2ZabDltZE5oQnVvb1EwYmxrcmlTd2QtaW1nLTFfMTc3MDYyODI1MzAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mUyzG77At1tLj2YrqQeUTO7cdgzAu8L4NSBzicb48STbgOMhwhOprXC~FJPIOBRxgmVdLuq1FgyMpmFNn3VhSZM7E3VCeMCVkgZwInBs25UHgpgYf9GhIrlqzSSq7fYaRroq1LF8L8ywEHBuNIMDVHmEZtICNd~-UDEQI36zqeYw6ll0fiUDsEKmrBog5Je8KneQIM7sAqDnQSM~BHjYjhTWaB1AdcmPpeEq6JkxsNFJ65rDfYmUczMt9V27ADy3RUdgZyoWEwKpcwN4fwFwxxqXDXqVMsYAOBtFyA3f~c7edINqBjLrDqIKWQ02~F4j0p8Z4ws20cp33IEUygiV8w__";

export default function HeroSection() {
  const scrollToCast = () => {
    const el = document.querySelector("#cast");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1021]/70 via-[#0B1021]/50 to-[#0B1021]/90" />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0B1021_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-[#D4AF37]/60 mx-auto mb-8"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.15em] text-gradient-gold mb-8 leading-tight"
        >
          Urban Sanctuary
        </motion.h1>

        {/* Catchcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-base sm:text-lg md:text-xl leading-loose tracking-wider text-[#E2E8F0]/90 mb-12 max-w-2xl mx-auto"
        >
          誰にも言えない言葉を、今夜はここに置いて。
          <br />
          心をほどく、あなただけの時間。
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={scrollToCast}
          className="inline-flex items-center gap-3 px-10 py-4 border border-[#D4AF37]/40 text-[#D4AF37] font-serif text-sm tracking-[0.2em] uppercase hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/70 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-700 rounded-sm cursor-pointer"
        >
          キャストを見る
        </motion.button>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-[#D4AF37]/60 mx-auto mt-12"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#D4AF37]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
