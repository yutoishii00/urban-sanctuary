import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Design Philosophy: Art Deco Luxury
 * - Accordion UI with smooth transitions
 * - Midnight blue background with gold accents
 * - Category-based organization
 * - Serif fonts for elegance
 */

interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: 'サービスの安全性・信頼性',
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
          '• 2日前：料金の30%',
          '• 前日：料金の50%',
          '• 当日：料金の100%',
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
    title: '会員制度・料金',
    items: [
      {
        question: '入会金が高額な理由は？',
        answer: 'Urban Sanctuaryは、冷やかしや不適合者を完全に排除し、貴女と同じ社会的地位と品格を持つ方々だけのコミュニティを維持するための審査制を採用しております。入会金は、一切の不安がない環境を担保するためのお約束です。',
      },
      {
        question: '年会費プランの違いは何ですか？',
        answer: [
          '• Gold（¥330,000）: 基本的なサービスをご利用いただけます',
          '• Platinum（¥550,000）: 優先予約権・限定キャストへのアクセス',
          '• Royal（¥1,100,000）: 最優先予約・全キャストへのアクセス',
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
    title: 'キャスト・サービス内容',
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
          '• Prelude（2時間）: カフェやバーでの会話、軽い食事、散策など',
          '• Escapism（4時間）: ディナー、ドライブ、美術館巡り、ホテルラウンジでの長時間会話など',
          'お客様のご希望に合わせてプランをご提案いたします。',
        ],
      },
    ],
  },
  {
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

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-amber-900/30">
      <button
        onClick={onToggle}
        className="w-full py-5 px-6 flex items-start justify-between text-left hover:bg-amber-950/20 transition-colors group"
      >
        <span className="font-serif text-amber-100 text-base pr-4 group-hover:text-amber-400 transition-colors">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-5 text-slate-300 text-sm leading-relaxed">
          {Array.isArray(item.answer) ? (
            <div className="space-y-2">
              {item.answer.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ) : (
            <p>{item.answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

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
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-sm tracking-[0.3em] mb-4 font-light">— FAQ —</p>
          <h2 className="font-serif text-4xl md:text-5xl text-amber-100 mb-6">よくあるご質問</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            お客様からよくいただくご質問をまとめました。
            <br />
            その他のご不明点は、お気軽にLINEよりお問い合わせください。
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {faqData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setOpenItems(new Set()); // Close all when switching category
              }}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === idx
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-amber-400'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg border border-amber-900/20 overflow-hidden shadow-2xl">
          {faqData[activeCategory].items.map((item, idx) => (
            <FAQAccordionItem
              key={idx}
              item={item}
              isOpen={openItems.has(idx)}
              onToggle={() => toggleItem(idx)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4">他にご質問がございますか？</p>
          <a
            href="https://lin.ee/EADYl8MA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="36"
              className="h-9"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
