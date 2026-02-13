/*
 * Concept Section — Elegant text with background image
 * Asymmetric layout with glass panel
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CONCEPT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/yInDrc44dXExNS4EEzYhyr/sandbox/fZl9mdNhBuooQ0blkriSwd-img-2_1770628267000_na1fn_Y29uY2VwdC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUveUluRHJjNDRkWEV4TlM0RUV6WWh5ci9zYW5kYm94L2ZabDltZE5oQnVvb1EwYmxrcmlTd2QtaW1nLTJfMTc3MDYyODI2NzAwMF9uYTFmbl9ZMjl1WTJWd2RDMWlady5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=mdyTsPC1vY9keq3wPKqbUUw7Y8MuVBO5Eip4Uzrs5agyht284YIXN0smGVgmkCMLMxuvgKhL39SpfBuylg0yaPX4-oKvnUmK~SG4QyYNeJAhR-yCMWVIcMpnadLN~uzvj7UZxBPl~0ZnTulFvQFtb0Ff3pwijLw56Z8BHHHWeeKr9QVtJq7JNmnYzGKPaOSi4VvnO9WdavU7Tw~gbtKSbx~pMiMjQCBF44rDqVIWHTjB8-BRtEXQejMU-LexwldDfcHkZj5W5-cOuX0tiyRRJe4XHDSqHz2hl0XJatHyo2eP4RJ7b-sCggzff6vfSL0dtBjroi7~JhF43ztwWYMQtA__";

export default function ConceptSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="concept" className="relative section-spacing overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src={CONCEPT_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1021]/95 via-[#0B1021]/80 to-[#0B1021]/95" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left — Section label */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
                — About Us
              </span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[0.1em] text-gradient-gold leading-tight">
                Concept
              </h2>
              <div className="w-12 h-px bg-[#D4AF37]/40 mt-8" />
            </motion.div>
          </div>

          {/* Right — Body text in glass panel */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-sm p-8 md:p-12 lg:p-16"
            >
              <p className="font-serif text-lg md:text-xl leading-[2.2] tracking-wider text-[#E2E8F0]/90">
                ここは、日常を脱ぎ捨てるための場所です。
              </p>
              <p className="font-serif text-lg md:text-xl leading-[2.2] tracking-wider text-[#E2E8F0]/90 mt-6">
                否定しません。急かしません。
              </p>
              <p className="font-serif text-lg md:text-xl leading-[2.2] tracking-wider text-[#E2E8F0]/90 mt-6">
                ただ、あなたの隣で、あなたの心に耳を傾けます。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
