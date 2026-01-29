import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "データ分析の知識がなくても大丈夫ですか？",
            a: "はい、全く問題ありません。専門用語を使わず、直感的にわかるレポートとアクションプランをご提示しますのでご安心ください。"
        },
        {
            q: "売上分析には、どのようなデータが必要ですか？",
            a: "商品ごとの売上データなどがあれば理想的ですが、なくても大丈夫です。お手持ちの資料に合わせて柔軟に対応しますので、まずはお気軽にご相談ください。"
        },
        {
            q: "食品以外の業種でも対応できますか？",
            a: "はい、小売・サービス業全般に対応可能です。ただし、食品表示法のチェックなど一部の専門サービスは食品関連事業者様限定となります。"
        },
        {
            q: "個人事業主ですが、相談は可能ですか？",
            a: "もちろんです。むしろ個人事業主様こそ、データ活用による伸び代が大きいと考えています。小規模事業者様向けのプランもご用意しております。"
        },
        {
            q: "スポット（単発）での依頼はできますか？",
            a: "はい、可能です。LP制作のみ、単発の分析レポート作成のみといったご依頼も承っております。"
        },
        {
            q: "継続的な依頼も可能ですか？",
            a: "はい、もちろん大歓迎です！事業の成長に合わせて長期的にサポートさせていただくことも可能ですので、ぜひご相談ください。"
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="bg-white py-16 md:py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">よくある質問</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-navy-900 pr-8">{faq.q}</span>
                                {activeIndex === index ? (
                                    <Minus className="text-gold-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="text-gold-500 flex-shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-loose border-t border-slate-100 tracking-wide text-pretty">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
