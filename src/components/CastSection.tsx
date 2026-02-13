/*
 * Cast Section — Card grid with hover zoom/color effects
 * Monochrome to color on hover, subtle zoom
 * 3 distinct types: 塩顔 (Shio), 醤油顔 (Shoyu), ソース顔 (Sauce)
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// 塩顔 — Cool, thin features, pale skin, mysterious aura
const CAST_SHIO = "https://private-us-east-1.manuscdn.com/sessionFile/yInDrc44dXExNS4EEzYhyr/sandbox/WzCMV9JAI3BlL3cjOsjFEO-img-1_1770871125000_na1fn_Y2FzdC1zaGlv.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUluRHJjNDRkWEV4TlM0RUV6WWh5ci9zYW5kYm94L1d6Q01WOUpBSTNCbEwzY2pPc2pGRU8taW1nLTFfMTc3MDg3MTEyNTAwMF9uYTFmbl9ZMkZ6ZEMxemFHbHYuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HUcX2TWT0D-gCbj0W87ge6fA28l41Uz8mhvJuDBUSqjRysGCbWZ5PF4nqwhGeXyrdEQbZLi-ci84bCUiQG~UosAIcmTJw~cmAP2YcWMhPU5YmvOZTbPHjslHXGK5B~UewZDb5ZK1zWDefxjD~SuG4rRUADPEGJTYgzVEJUyu9CxAYHS4q7dlT5qRSAOxhdO6DCviwmSVoJY0hWn2Polw-COcOBIAEBPucjsJpaNJB~hrj1FsnA3ISbV~XcgxExiQSZBKRIFkN0SYb1CG3lqDP-KHmv5qNa89tL5Sixe0eePPQBw6uPjQhdsqWxuoDFcQR3mfsJgoi-NDYqFI9UODeQ__";

// 醤油顔 — Classic Japanese, warm, approachable
const CAST_SHOYU = "https://private-us-east-1.manuscdn.com/sessionFile/yInDrc44dXExNS4EEzYhyr/sandbox/WzCMV9JAI3BlL3cjOsjFEO-img-2_1770871125000_na1fn_Y2FzdC1zaG95dQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUluRHJjNDRkWEV4TlM0RUV6WWh5ci9zYW5kYm94L1d6Q01WOUpBSTNCbEwzY2pPc2pGRU8taW1nLTJfMTc3MDg3MTEyNTAwMF9uYTFmbl9ZMkZ6ZEMxemFHOTVkUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9HWo5Dt3BDDfRE~7Ji0ca-AU3-ttgwcEiGv8j6dkG5VDcOfx0I5r2fla5TvlaDoFr9jGCqhLHYYR-EJHsvQDDs~g4ywTDkekhKTpqtwnfPnbQ5dN8wSPZ8nILX4Wwzsfjney2Pd9fTDTDna4J7k-HN3l8D6k-eTqYGJAET4qjov9DaShXKGlefP1E-hRoMXpqK8q5Q5Bga3tP-DGb-VpVQ7xyvfnuWTgQWVvro2ohXXXAKrvTdqSjJm5YnWHDSpC6ducI1wnRyW~uWfGAI8F9CSSgwsw25E4aiNTp4xx1W2SlPhCOsA5CD5BJtqsF-~CIM91TJGzHfRCbM6RtIXhA__";

// ソース顔 — Bold features, deep-set eyes, charismatic
const CAST_SAUCE = "https://private-us-east-1.manuscdn.com/sessionFile/yInDrc44dXExNS4EEzYhyr/sandbox/WzCMV9JAI3BlL3cjOsjFEO-img-3_1770871121000_na1fn_Y2FzdC1zYXVjZQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUluRHJjNDRkWEV4TlM0RUV6WWh5ci9zYW5kYm94L1d6Q01WOUpBSTNCbEwzY2pPc2pGRU8taW1nLTNfMTc3MDg3MTEyMTAwMF9uYTFmbl9ZMkZ6ZEMxellYVmpaUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Hpz0ltAuXG3nK3bbg6c-JiqiG7Wy5pdNhGvE0mx8xBjcYaq1f52-XDhlS-ZKdie2jtCCcTss4~YAXL4lZaeuKRgYrUWeHHuwWQF2eQjQlUgHz0rtZy91y41cA5AEP-ih1r8n7fUGJ2bXUKDUkEdNov~H-SVoMKeWuBO6xTYfTGqY-8Lr-Ieb710NZmymd8Wiv1KXyJd35WjL-EaWDVC~iHJOn1zOl15RgXJApcNy9rbzAS1POMHoYAL0Yk9fc6vQejq74~m2LgSlCIz32DhpDyqJwuKnIZ1R6pWcqg2ZFa2SXTp~3Ca1NpOTBm~YfW6GG1mMHwE5HvLdAHiSw4tKcg__";

const castMembers = [
  {
    name: "Ren",
    age: 25,
    voice: "頑張りすぎているあなたを、甘やかしたいです。",
    image: CAST_SHIO,
    specialty: "傾聴・カフェデート",
    type: "塩顔",
  },
  {
    name: "Kai",
    age: 27,
    voice: "言葉にならない想いも、ちゃんと受け止めます。",
    image: CAST_SHOYU,
    specialty: "散歩・美術館デート",
    type: "醤油顔",
  },
  {
    name: "Sora",
    age: 24,
    voice: "あなたの笑顔を、一番近くで見ていたいです。",
    image: CAST_SAUCE,
    specialty: "映画・水族館デート",
    type: "ソース顔",
  },
];

function CastCard({
  member,
  index,
  isInView,
}: {
  member: (typeof castMembers)[0];
  index: number;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative"
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-6">
        <img
          src={member.image}
          alt={member.name}
          className={`w-full h-full object-cover object-top transition-all duration-700 ${
            hovered
              ? "scale-105 grayscale-0"
              : "scale-100 grayscale-[40%]"
          }`}
          loading="lazy"
        />
        {/* Dark overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#0B1021]/80 via-[#0B1021]/20 to-transparent transition-opacity duration-700 ${
            hovered ? "opacity-60" : "opacity-80"
          }`}
        />
        {/* Gold border on hover */}
        <div
          className={`absolute inset-0 border transition-all duration-700 rounded-sm ${
            hovered
              ? "border-[#D4AF37]/30 shadow-[inset_0_0_30px_rgba(212,175,55,0.05)]"
              : "border-white/5"
          }`}
        />

        {/* Type badge */}
        <div className="absolute top-4 right-4">
          <span className={`font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-500 ${
            hovered
              ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
              : "bg-white/5 text-[#E2E8F0]/50 border border-white/10"
          }`}>
            {member.type}
          </span>
        </div>

        {/* Voice overlay on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-serif text-sm leading-relaxed tracking-wider text-[#E2E8F0]/90 italic">
            「{member.voice}」
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl tracking-[0.15em] text-[#E2E8F0]">
            {member.name}
          </h3>
          <span className="font-display text-sm tracking-wider text-[#D4AF37]/60">
            Age {member.age}
          </span>
        </div>
        <p className="font-sans text-xs tracking-wider text-[#E2E8F0]/40">
          {member.specialty}
        </p>
      </div>
    </motion.div>
  );
}

export default function CastSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cast" className="relative section-spacing" ref={ref}>
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
            — Our Cast
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            Cast
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
        </motion.div>

        {/* Cast grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {castMembers.map((member, i) => (
            <CastCard
              key={member.name}
              member={member}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
