/*
 * FAQ Section — Luxury accordion with glassmorphism
 * Design: Midnight blue (#0B1021), Champagne Gold (#D4AF37), Frost White (#E2E8F0)
 * Fonts: Cormorant Garamond (display), Shippori Mincho B1 (serif), Noto Sans JP (body)
 * Matches: ConceptSection / PriceSection / MembershipSection aesthetic
 */

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: 'safety',
    title: '安全性・信頼性',
    items: [
      {
        question: '本当に性的サービスはないのですか？',
        answer: 'はい、当サービスは性的サービスを一切提供しておりません。Urban Sanctuaryは、対話・傾聴・エスコートを通じた心のリラクゼーションサービスです。法令を遵守し、健全な運営を行っております。',
      },
      {
        question: '身バレ・個人情報の漏洩が心配です。',
        answer: '完全会員制・審査制を採用しており、お客様の個人情報は厳重に管理しております。キャストにも守秘義務契約を課しており、サービス外での接触や情報漏洩は一切ございません。安心してご利用ください。',
      },
      {
        question: 'キャストの身元は確認されていますか？',
        answer: 'はい。すべてのキャストは身分証明書による本人確認、面接、研修を経て採用しております。また、反社会的勢力との関わりがないことを確認しております。',
      },
      {
        question: '料金以外に追加費用はかかりますか？',
        answer: 'プラン料金は税込・指名料込の明朗会計です。ただし、デート時の飲食代・交通費・施設利用料などの実費は別途お客様のご負担となります。事前に不明点があればお気軽にお問い合わせください。',
      },
    ],
  },
  {
    id: 'booking',
    title: '利用方法・予約',
    items: [
      {
        question: '初めて利用する場合、どのような流れになりますか？',
        answer: [
          '1. LINE公式アカウントよりお問い合わせ',
          '2. 簡単な審査（本人確認・ご希望のヒアリング）',
          '3. 入会金のお支払い（¥220,000税込）',
          '4. プラン・キャストの選択',
          '5. 日時・場所の調整後、ご予約確定',
          '6. 当日お会いして、心ゆくまでお過ごしください',
        ],
      },
      {
        question: '当日予約は可能ですか？',
        answer: '福岡エリアは当日予約も可能です。ただし、東京エリアは事前予約制となっており、当日予約はお受けできません。余裕を持ったご予約をお願いいたします。',
      },
      {
        question: 'キャンセルはできますか？キャンセル料は？',
        answer: [
          'ご予約日の3日前までは無料でキャンセル可能です。それ以降は以下のキャンセル料が発生します。',
          '・2日前：料金の30%',
          '・前日：料金の50%',
          '・当日：料金の100%',
          'やむを得ない事情がある場合は、お早めにご連絡ください。',
          '但し、ROYAL年会の方はキャンセル料はかかりません。',
        ],
      },
      {
        question: '指名はできますか？',
        answer: 'はい、可能です。プラン料金には指名料が含まれておりますので、追加費用なしでご希望のキャストをお選びいただけます。別途、上級キャストの場合はかかる場合があります。',
      },
    ],
  },
  {
    id: 'membership',
    title: '会員制度・料金',
    items: [
      {
        question: '入会金が高額な理由は？',
        answer: 'Urban Sanctuaryは、冷やかしや不適合者を完全に排除し、貴女と同じ社会的地位と品格を持つ方々だけのコミュニティを維持するための審査制を採用しております。入会金は、一切の不安がない環境を担保するためのお約束です。',
      },
      {
        question: '年会費プランの違いは何ですか？',
        answer: [
          '・Gold（¥330,000）: 基本的なサービスをご利用いただけます',
          '・Platinum（¥550,000）: 優先予約権・限定キャストへのアクセス',
          '・Royal（¥1,100,000）: 最優先予約・全キャストへのアクセス',
          '詳細はお問い合わせ時にご案内いたします。',
        ],
      },
      {
        question: '年会費の支払い方法は？',
        answer: '銀行振込またはクレジットカード決済に対応しております。',
      },
      {
        question: '退会したい場合はどうすればいいですか？',
        answer: 'LINE公式アカウントまたはコンシェルジュにご連絡ください。退会手続き完了後、お客様の個人情報は全て削除されます。なお、入会金・年会費の返金はございません。',
      },
    ],
  },
  {
    id: 'cast',
    title: 'キャスト・サービス',
    items: [
      {
        question: 'どのようなキャストが在籍していますか？',
        answer: '20代後半〜40代の、知性と品格を兼ね備えた男性キャストが在籍しております。容姿だけでなく、会話力・傾聴力・エスコート力を重視した採用を行っております。',
      },
      {
        question: 'キャストとの連絡先交換はできますか？',
        answer: 'サービス外でのキャストとの直接連絡は、お客様・キャスト双方の安全のため固く禁止しております。すべてのやり取りは当クラブを通じて行っていただきます。',
      },
      {
        question: 'どのような場所で会えますか？',
        answer: 'ホテルラウンジ、レストラン、バー、美術館、ドライブなど、お客様のご希望に応じて柔軟に対応いたします。ご自宅への訪問も可能です（要事前相談）。',
      },
      {
        question: '2時間・4時間では何ができますか？',
        answer: [
          '・Prelude（2時間）: カフェやバーでの会話、軽い食事、散策など',
          '・Escapism（4時間）: ディナー、ドライブ、美術館巡り、ホテルラウンジでの長時間会話など',
          'お客様のご希望に合わせてプランをご提案いたします。',
        ],
      },
    ],
  },
  {
    id: 'eligibility',
    title: '対象者・審査',
    items: [
      {
        question: 'どのような人が審査に通りますか？',
        answer: '25歳以上の女性で、本人確認が可能な方であればどなたでもお申し込みいただけます。審査では、サービスの趣旨をご理解いただけるか、安全にご利用いただけるかを確認させていただきます。',
      },
      {
        question: '既婚者でも利用できますか？',
        answer: 'はい、ご利用いただけます。完全会員制・守秘義務厳守のため、プライバシーは完全に保護されます。',
      },
      {
        question: '年齢制限はありますか？',
        answer: '25歳以上の女性であればご利用いただけます。上限はございません。',
      },
      {
        question: '男性は利用できますか？',
        answer: '申し訳ございません。現在は女性のお客様のみを対象としたサービスとなっております。',
      },
    ],
  },
  {
    id: 'area',
    title: 'エリア・営業時間',
    items: [
      {
        question: '対応エリアはどこですか？',
        answer: '東京・福岡を中心で対応しております。順次エリアは拡大予定です。また遠方の場合は交通費を別途ご負担いただく場合がございます。詳細はお問い合わせください。',
      },
      {
        question: '営業時間外の利用はできますか？',
        answer: '原則として、Daydream（14:00-19:00）・Midnight（19:00-02:00）の時間帯でのご利用となります。特別なご事情がある場合はご相談ください。',
      },
    ],
  },
  {
    id: 'other',
    title: 'その他',
    items: [
      {
        question: '友人と一緒に利用できますか？',
        answer: '申し訳ございません。当サービスは1対1の完全プライベートサービスです。複数名でのご利用はお受けしておりません。',
      },
      {
        question: '写真撮影はできますか？',
        answer: 'キャストの顔が映る写真撮影は、プライバシー保護のため固くお断りしております。風景や食事の写真は可能です。',
      },
      {
        question: 'トラブルが起きた場合はどうすればいいですか？',
        answer: '万が一トラブルが発生した場合は、速やかにコンシェルジュまでご連絡ください。迅速に対応いたします。お客様の安全を最優先に考えております。',
      },
    ],
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-[#D4AF37]/[0.07] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-6 md:py-7 px-6 md:px-10 flex items-start justify-between text-left group transition-all duration-500 hover:bg-white/[0.015]"
      >
        <div className="flex items-start gap-4 md:gap-6 pr-4">
          <span className="font-display text-[11px] tracking-[0.2em] text-[#D4AF37]/30 mt-1 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-serif text-[15px] md:text-base tracking-wider leading-[1.9] text-[#E2E8F0]/80 group-hover:text-[#E2E8F0] transition-colors duration-500">
            {item.question}
          </span>
        </div>
        <div
          className={`w-8 h-8 rounded-full border border-[#D4AF37]/15 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:border-[#D4AF37]/30 ${
            isOpen ? 'bg-[#D4AF37]/10 border-[#D4AF37]/25' : ''
          }`}
        >
          <ChevronDown
            size={14}
            className={`text-[#D4AF37]/60 transition-transform duration-500 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-7 md:pb-8 pl-[52px] md:pl-[76px]">
              <div className="w-8 h-px bg-[#D4AF37]/20 mb-5" />
              {Array.isArray(item.answer) ? (
                <div className="space-y-3">
                  {item.answer.map((line, idx) => (
                    <p
                      key={idx}
                      className="font-sans text-[13px] tracking-wider leading-[2] text-[#E2E8F0]/50"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="font-sans text-[13px] tracking-wider leading-[2] text-[#E2E8F0]/50">
                  {item.answer}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative section-spacing" ref={ref}>
      {/* Background — matches site gradient */}
      <div className="absolute inset-0 bg-[#0B1021]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.01] to-transparent" />

      <div className="container relative z-10 max-w-4xl">
        {/* Section heading — matches PriceSection / ConceptSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-display text-xs tracking-[0.3em] uppercase text-[#D4AF37]/60 block mb-4">
            — Questions & Answers
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-[0.1em] text-gradient-gold">
            FAQ
          </h2>
          <div className="w-12 h-px bg-[#D4AF37]/40 mx-auto mt-8" />
          <p className="font-serif text-[13px] tracking-wider text-[#E2E8F0]/35 mt-6 leading-relaxed">
            お客様からよくいただくご質問をまとめました
          </p>
        </motion.div>

        {/* Category Navigation — elegant pill tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16 justify-center"
        >
          {faqData.map((category, idx) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(idx);
                setOpenItems(new Set());
              }}
              className={`relative px-4 md:px-5 py-2 md:py-2.5 text-[11px] md:text-xs tracking-[0.15em] transition-all duration-500 rounded-sm border ${
                activeCategory === idx
                  ? 'border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/[0.06]'
                  : 'border-white/[0.06] text-[#E2E8F0]/30 hover:text-[#E2E8F0]/50 hover:border-white/[0.1]'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion — glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-sm overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.06]"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(212,175,55,0.06)] pointer-events-none" />

          {faqData[activeCategory].items.map((item, idx) => (
            <FAQAccordionItem
              key={`${faqData[activeCategory].id}-${idx}`}
              item={item}
              isOpen={openItems.has(idx)}
              onToggle={() => toggleItem(idx)}
              index={idx}
            />
          ))}
        </motion.div>

        {/* Bottom CTA — subtle, elegant */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-14 md:mt-16"
        >
          <p className="font-sans text-[11px] tracking-[0.15em] text-[#E2E8F0]/25 mb-6">
            その他のご不明点はお気軽にお問い合わせください
          </p>
          <a
            href="https://lin.ee/EADYl8MA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-opacity duration-500 hover:opacity-80"
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="36"
              className="h-9"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
