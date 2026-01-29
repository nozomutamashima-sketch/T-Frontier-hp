import React from 'react';
import { MessageSquare, HeartHandshake, Search, Rocket } from 'lucide-react';

const Workflow = () => {
    const steps = [
        {
            icon: <MessageSquare size={28} />,
            title: "お問い合わせ",
            desc: <span><span className="inline-block">まずはフォームよりお気軽に</span><br /><span className="inline-block">ご相談ください。</span></span>
        },
        {
            icon: <HeartHandshake size={28} />,
            title: "ヒアリング",
            desc: <span><span className="inline-block">現在の課題や目標を丁寧に</span><br /><span className="inline-block">お伺いします。</span></span>
        },
        {
            icon: <Search size={28} />,
            title: "ご提案・お見積り",
            desc: <span><span className="inline-block">課題に応じた施策、</span><br /><span className="inline-block">サービスをご提案させていただきます。</span></span>
        },
        {
            icon: <Rocket size={28} />,
            title: "支援スタート",
            desc: <span><span className="inline-block">施策の実行から効果検証まで</span><br /><span className="inline-block">伴走します。</span></span>
        }
    ];

    return (
        <section className="bg-slate-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="section-title">ご利用の流れ</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start relative px-4">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center text-center relative mb-12 md:mb-0 w-full md:w-auto">
                            <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center text-navy-900 mb-6 z-10 relative">
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm whitespace-nowrap">{step.desc}</p>

                            {/* Connecting Line (Mobile) */}
                            {index !== steps.length - 1 && (
                                <div className="md:hidden absolute bottom-[-48px] left-1/2 w-0.5 h-12 bg-slate-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
