import React, { useState } from 'react';
import { AreaChart, BrainCircuit, PenTool, ArrowRight } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            icon: <AreaChart size={32} />,
            title: <span><span className="inline-block">「迷い」をなくす、</span><br /><span className="inline-block">店舗データ分析</span></span>,
            description: <span><span className="inline-block">単発（スポット）依頼OK。</span><br /><span className="inline-block">POSデータやExcelから</span><br /><span className="inline-block">「利益の漏れ」を見つけ出し、</span><br /><span className="inline-block">即効性のある改善案を提示します。</span></span>,
            catchphrase: <span>"「なんとなく」の不安を、<br className="md:hidden" />数字で「確信」に変える。\nまずは1回、お店の健康診断を<br className="md:hidden" />してみませんか？"</span>,
            fullDescription: <span>・「データ分析」と聞くと大掛かりに聞こえますが、やることはシンプルです。
                今の売上データを預かり、利益を増やすための<br className="md:hidden" />「正解」をレポートする。
                まずは1回、健康診断のような感覚で<br className="md:hidden" />ご依頼ください。</span>,
            skills: [
                { title: "売上ダッシュボード構築", desc: "ExcelやBIツールを使い、スマホで経営状況が見える化できる「コックピット」を作成して納品します。" },
                { title: "メニュー・商品診断（ABC分析）", desc: "「稼いでいる商品」と「足を引っ張る商品」を明確に選別。スクラップ（撤去）すべき商品をリスト化します。" },
                { title: "AI需要予測・施策検証", desc: "「来週どれくらい売れるか」を予測して仕入れを最適化したり、値上げ後の客数変化を検証します。" }
            ],
            spotPrice: {
                amount: "10,000円〜",
                context: "スポット対応可能"
            },
            caseStudy: {
                title: <span>"「数字」と「想い」の<br className="md:hidden" />バランスで、売上10%アップ"</span>,
                client: <span>"全国銘品アンテナショップ /<br className="md:hidden" />月商2,000万円規模"</span>,
                problem: <span>"商品数が多く、棚スペースが限界。新商品を入れたいが、どれを削ればいいか分からず、売場が停滞していた。"</span>,
                solution: <span>"AI分析で「撤去候補」を選出。ただし機械的に切るのではなく、バイヤー視点で「VIP客がついている隠れた名品」を保護しつつ、入れ替えを断行。"</span>,
                result: <span>"死に筋商品を排除し、話題の新商品を投入。売場の新陳代謝が進み、前年比で売上が10%アップした。"</span>
            }
        },
        {
            id: 2,
            icon: <BrainCircuit size={32} />,
            title: <span><span className="inline-block">「手間」と「不安」を消す、</span><br /><span className="inline-block">AI導入・法務支援</span></span>,
            description: <span><span className="inline-block">単発（スポット）依頼OK。</span><br /><span className="inline-block">スマホで撮るだけの</span><br /><span className="inline-block">「食品表示チェック」や、</span><br /><span className="inline-block">事務作業の自動化ツールを作成します。</span></span>,
            catchphrase: <span>"「AIって難しそう」<br className="md:hidden" />と思っていませんか？\nあなたの仕事を<br className="md:hidden" />代わりに片付ける、<br className="md:hidden" />頼れる「相棒」を作ります。"</span>,
            fullDescription: <span>`・「AI活用」に、専門知識は一切不要です。
                食品表示チェックやメール作成など、あなたの<br className="md:hidden" />「面倒」を代行するツールを、オーダーメイドで<br className="md:hidden" />作成・納品します。
                ※お客様の利用環境によっては、<br className="md:hidden" />生成AIの月額利用料が別途必要となる場合があります。</span>,
            skills: [
                { title: "食品表示チェックBOT作成", desc: "ラベルの写真を撮って送るだけで、修正点やリスクを即座に教えてくれる「守りの要」を作ります。" },
                { title: "クレーム対応・事務の自動化", desc: "頭を抱える「悪い口コミ」への返信案や、取引先メールをGeminiが代筆。精神的なストレスをゼロにします。" },
                { title: "はじめてのAI活用レクチャー", desc: "「企画書のネタ出し」や「メール返信」など、あなたの業務ですぐに役立つAIの使い方を、実演形式で伝授します。" }
            ],
            spotPrice: {
                amount: "5,000円〜",
                context: "導入相談から対応可能"
            },
            caseStudy: {
                title: "法令検索の時間を大幅短縮。作業時間を70%削減",
                client: "食品製造・販売業",
                problem: "新商品を出すたびに大量の法律ガイドラインを検索。「これで合っているか？」という不安と調査時間で、商品開発の手が止まっていた。",
                solution: "NotebookLMに法律文献を学習させ、Geminiと連動した「食品表示BOT」を構築。写真を撮るだけでAIが法的な添削を行う仕組みを作った。",
                result: "ネット検索や問い合わせの時間が消滅し、作業時間を70%削減。「いつでもAIに聞ける」安心感が、開発スピードを加速させた。"
            }
        },
        {
            id: 3,
            icon: <PenTool size={32} />,
            title: <span><span className="inline-block">「価値」が伝わる、</span><br /><span className="inline-block">Web・販促制作</span></span>,
            description: <span><span className="inline-block">単発（スポット）依頼OK。</span><br /><span className="inline-block">LP制作から営業資料まで。</span><br /><span className="inline-block">「顧客が選びたくなる」</span><br /><span className="inline-block">見せ方に変換します。</span></span>,
            catchphrase: "「説明」は読まれません。\n一瞬で「価値」が伝わる、顧客視点のデザインを。",
            fullDescription: <span>`「良い商品」なのに売れない原因は、<br className="md:hidden" />伝え方にあります。
                徹底的な「顧客視点」で、あなたの商品の魅力を<br className="md:hidden" />言語化・可視化し、成果に直結するクリエイティブ<br className="md:hidden" />を制作します。</span>,
            skills: [
                { title: "LP・HP制作", desc: "最新技術やAIを駆使し、デザイン性の高いWebページを作成。ビジネスの信頼感を高める「公式ページ」を作ります。" },
                { title: "プレゼン資料作成", desc: "PowerPointやCanvaを使用し、相手の心を動かすプレゼン資料を作成。「他社との違い」を一目で伝えます。" },
                { title: "販促ツール・SNS画像作成", desc: "Canvaや最新AI技術を活用し、目を引くチラシやWeb画像を作成。素人感のないプロ品質のデザインを提供します。" }
            ],
            spotPrice: {
                amount: "50,000円〜",
                context: "LP制作・スポット対応"
            },
            caseStudy: {
                title: <span>"HP開設で信頼獲得、<br className="md:hidden" />受注数アップ"</span>,
                client: "個人サロン経営 / 顔タイプ診断",
                problem: "集客はSNSのみ。情報が流れてしまい「信頼性」の担保が難しく、高単価メニューの受注に壁があった。",
                solution: "SNSでは伝えきれない「想い」や「実績」をストックする公式HPを作成。個人の手作り感を払拭し、ブランドとしての信頼感を可視化した。",
                result: "「しっかりしたHPがある安心感」が決め手となり、新規受注が増加。SNSで集めてHPで決める「勝ちパターン」が確立された。"
            }
        }
    ];

    return (
        <section id="services" className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Services</span>
                    <h2 className="section-title">3つの<br />支援ソリューション</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        分析からクリエイティブまで、<br />一気通貫でサポートします。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setSelectedService(service)}
                            className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer relative text-center"
                        >
                            {service.special && (
                                <span className="absolute -top-3 right-4 bg-navy-900 text-gold-400 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {service.special}
                                </span>
                            )}

                            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center text-navy-900 mb-6 mx-auto group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-600 mb-8 text-sm leading-relaxed line-clamp-4 tracking-wide text-pretty">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-center text-gold-600 font-bold text-sm group-hover:translate-x-1 transition-transform">
                                活用事例を見る
                                <ArrowRight size={16} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                content={selectedService}
            />
        </section>
    );
};

export default Services;
