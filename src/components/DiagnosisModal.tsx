/*
 * Diagnosis Modal — 相性診断
 * 3 sequential questions → result screen with LINE CTA
 * Design: Black overlay, serif typography, gold accents
 * Animation: Framer Motion slide transitions between steps
 */

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, MessageCircle, Sparkles } from "lucide-react";

interface DiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  subtext: string;
  choices: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "今夜、貴女が求めているのは？",
    subtext: "直感でお選びください",
    choices: [
      { label: "静かに寄り添ってくれる温もり", value: "warmth" },
      { label: "非日常の世界へ連れ出してほしい", value: "escape" },
      { label: "ただ、話を聴いてほしい", value: "listen" },
    ],
  },
  {
    id: 2,
    text: "理想の「距離感」は？",
    subtext: "心地よさは人それぞれです",
    choices: [
      { label: "言葉は少なくていい。沈黙が心地よい人", value: "silence" },
      { label: "知的な会話で、思考を刺激してほしい", value: "intellect" },
      { label: "笑わせてくれる、太陽のような人", value: "sunshine" },
    ],
  },
  {
    id: 3,
    text: "貴女にとって「贅沢」とは？",
    subtext: "最後の質問です",
    choices: [
      { label: "誰にも邪魔されない、自分だけの時間", value: "solitude" },
      { label: "美しいものに囲まれる、五感の悦び", value: "senses" },
      { label: "本音を言える相手がいるという安心感", value: "trust" },
    ],
  },
];

/* Result types mapped from answer combinations */
interface ResultType {
  title: string;
  cast: string;
  description: string;
  plan: string;
}

function getResult(answers: string[]): ResultType {
  const has = (v: string) => answers.includes(v);

  if (has("warmth") && has("silence")) {
    return {
      title: "静寂の共鳴",
      cast: "塩顔タイプ — 繊細で透明感のあるキャスト",
      description:
        "貴女が求めているのは、言葉を超えた「存在」の温もり。多くを語らずとも、隣にいるだけで心が凪ぐ——そんな時間をお届けします。",
      plan: "Prelude（2時間）がおすすめです",
    };
  }
  if (has("escape") || has("senses")) {
    return {
      title: "五感の逃避行",
      cast: "ソース顔タイプ — 華やかで包容力のあるキャスト",
      description:
        "日常という檻から、貴女を解き放つ夜を。美食、夜景、そして心地よいエスコート——五感すべてで「生きている」と感じる時間を。",
      plan: "Escapism（4時間）がおすすめです",
    };
  }
  if (has("listen") || has("trust")) {
    return {
      title: "告解の間",
      cast: "醤油顔タイプ — 知的で落ち着いたキャスト",
      description:
        "誰にも言えなかった言葉を、ここに置いてください。否定も助言もなく、ただ貴女の声に耳を傾ける——それが私たちの「救済」です。",
      plan: "Prelude（2時間）がおすすめです",
    };
  }
  if (has("intellect")) {
    return {
      title: "知性の邂逅",
      cast: "醤油顔タイプ — 知的で落ち着いたキャスト",
      description:
        "表面的な会話では満たされない貴女へ。思考を刺激し、新しい視点をもたらす——そんな知的な夜の対話をお約束します。",
      plan: "Escapism（4時間）がおすすめです",
    };
  }
  /* Default / sunshine */
  return {
    title: "光の処方箋",
    cast: "ソース顔タイプ — 華やかで包容力のあるキャスト",
    description:
      "張り詰めた日々に、ふっと力が抜ける瞬間を。自然な笑顔と温かさで、貴女の心に光を灯すキャストをご紹介します。",
    plan: "Prelude（2時間）がおすすめです",
  };
}

const LINE_URL = "https://line.me/R/";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function DiagnosisModal({
  isOpen,
  onClose,
}: DiagnosisModalProps) {
  const [step, setStep] = useState(0); // 0-2: questions, 3: result
  const [answers, setAnswers] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);

  const handleAnswer = useCallback(
    (value: string) => {
      const newAnswers = [...answers, value];
      setAnswers(newAnswers);
      setDirection(1);
      setStep((s) => s + 1);
    },
    [answers]
  );

  const handleClose = useCallback(() => {
    setStep(0);
    setAnswers([]);
    setDirection(1);
    onClose();
  }, [onClose]);

  const handleRestart = useCallback(() => {
    setDirection(-1);
    setStep(0);
    setAnswers([]);
  }, []);

  if (!isOpen) return null;

  const result = step === 3 ? getResult(answers) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md mx-4 sm:mx-6"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-[#E2E8F0]/30 hover:text-[#D4AF37]/70 transition-colors duration-300 cursor-pointer z-10"
            >
              <X size={20} strokeWidth={1.5} />
            </button>

            {/* Card */}
            <div className="bg-[#0B1021]/95 border border-white/[0.06] backdrop-blur-xl rounded-sm overflow-hidden">
              {/* Progress bar */}
              <div className="h-px bg-white/[0.04] relative">
                <motion.div
                  className="h-full bg-[#D4AF37]/40"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${((step + 1) / 4) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>

              <div className="p-8 sm:p-10 min-h-[420px] flex flex-col">
                <AnimatePresence mode="wait" custom={direction}>
                  {step < 3 ? (
                    /* ===== Question Screen ===== */
                    <motion.div
                      key={`q-${step}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col flex-1"
                    >
                      {/* Step indicator */}
                      <div className="flex items-center gap-3 mb-8">
                        <Sparkles
                          size={14}
                          className="text-[#D4AF37]/50"
                          strokeWidth={1.5}
                        />
                        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]/40">
                          Question {step + 1} / 3
                        </span>
                      </div>

                      {/* Question */}
                      <h3 className="font-serif text-xl sm:text-2xl tracking-wider leading-relaxed text-[#E2E8F0]/90 mb-3">
                        {questions[step].text}
                      </h3>
                      <p className="font-serif text-[12px] tracking-wider text-[#D4AF37]/40 mb-10">
                        {questions[step].subtext}
                      </p>

                      {/* Choices */}
                      <div className="space-y-3 mt-auto">
                        {questions[step].choices.map((choice, i) => (
                          <motion.button
                            key={choice.value}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08 }}
                            onClick={() => handleAnswer(choice.value)}
                            className="w-full text-left px-5 py-4 border border-white/[0.06] hover:border-[#D4AF37]/30 bg-white/[0.02] hover:bg-[#D4AF37]/[0.04] transition-all duration-500 rounded-sm group cursor-pointer"
                          >
                            <span className="font-serif text-[13px] sm:text-sm tracking-wider leading-relaxed text-[#E2E8F0]/60 group-hover:text-[#E2E8F0]/90 transition-colors duration-500">
                              {choice.label}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    /* ===== Result Screen ===== */
                    <motion.div
                      key="result"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col flex-1"
                    >
                      {/* Result header */}
                      <div className="text-center mb-8">
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
                        >
                          <Sparkles
                            size={22}
                            className="text-[#D4AF37]/70"
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        <p className="font-serif text-[12px] tracking-[0.2em] text-[#D4AF37]/50 mb-3">
                          貴女のための処方箋が見つかりました
                        </p>
                        <h3 className="font-serif text-2xl sm:text-3xl tracking-wider text-gradient-gold">
                          {result!.title}
                        </h3>
                      </div>

                      {/* Result details */}
                      <div className="space-y-4 mb-8">
                        <div className="px-4 py-3 border-l border-[#D4AF37]/15">
                          <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#D4AF37]/40 mb-1">
                            推奨キャスト
                          </p>
                          <p className="font-serif text-[13px] tracking-wider leading-relaxed text-[#E2E8F0]/70">
                            {result!.cast}
                          </p>
                        </div>
                        <p className="font-serif text-[13px] tracking-wider leading-[2.2] text-[#E2E8F0]/55 px-1">
                          {result!.description}
                        </p>
                        <p className="font-serif text-[12px] tracking-wider text-[#D4AF37]/50 px-1">
                          {result!.plan}
                        </p>
                      </div>

                      {/* Screenshot prompt */}
                      <div className="bg-white/[0.02] border border-white/[0.05] rounded-sm p-4 mb-6">
                        <div className="flex items-start gap-3">
                          <Camera
                            size={16}
                            className="text-[#D4AF37]/50 shrink-0 mt-0.5"
                            strokeWidth={1.5}
                          />
                          <p className="font-serif text-[12px] tracking-wider leading-[2] text-[#E2E8F0]/60">
                            この画面をスクリーンショットし、LINEでお送りください。
                            <br />
                            コンシェルジュが貴女をお待ちしております。
                          </p>
                        </div>
                      </div>

                      {/* LINE CTA */}
                      <div className="mt-auto space-y-3">
                        <motion.a
                          href={LINE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-[#06C755] hover:bg-[#05b34d] border border-[#06C755]/30 transition-all duration-500 rounded-sm cursor-pointer"
                        >
                          <MessageCircle
                            size={16}
                            className="text-white"
                            strokeWidth={1.5}
                          />
                          <span className="font-serif text-sm tracking-[0.15em] text-white">
                            鍵を開ける（LINE起動）
                          </span>
                        </motion.a>

                        <button
                          onClick={handleRestart}
                          className="w-full text-center font-serif text-[11px] tracking-[0.15em] text-[#E2E8F0]/25 hover:text-[#D4AF37]/50 transition-colors duration-500 py-2 cursor-pointer"
                        >
                          もう一度診断する
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
