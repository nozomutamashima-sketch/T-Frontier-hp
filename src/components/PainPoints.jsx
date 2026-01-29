import React from 'react';

import { LayoutDashboard, Brain, ShieldCheck, Globe } from 'lucide-react';

const PainPoints = () => {
    const points = [
        {
            icon: <LayoutDashboard size={32} />,
            title: "データ分析",
            text: "直感だけの経営はもう限界。「売上ダッシュボード」で数字を可視化し、確実な判断がしたい。"
        },
        {
            icon: <Brain size={32} />,
            title: "AI導入サポート",
            text: "知識ゼロでも業務を効率化したい。「AI活用」の第一歩を、隣で伴走してサポートしてほしい。"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "法律AI活用",
            text: <span>食品表示のミスは命取り。<br />「AIチェック」で法務リスクを回避し、安心を手に入れたい。</span>
        },
        {
            icon: <Globe size={32} />,
            title: "Web発信・集客",
            text: "良いものなのに伝わらない。「Webブランディング」を強化し、新規顧客を呼び込みたい。"
        }
    ];

    return (
        <section className="bg-slate-50 py-16 md:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                {/* Section Header */}
                <div className="mb-24 text-center mx-auto max-w-4xl">
                    <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4 block">Concerns</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-[1.6] font-serif mb-10">
                        その経営判断、<br />
                        一人で抱え込んでいませんか？
                    </h2>
                    <p className="text-slate-500 text-lg">
                        専門家のサポートで、迷いを確信に変える。
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-gold-200"
                        >
                            {/* Icon */}
                            <div className="mb-8 w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors duration-500">
                                {React.cloneElement(point.icon, { size: 28, strokeWidth: 1.5 })}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-navy-900 mb-6 font-serif">
                                {point.title}
                            </h3>

                            {/* Text */}
                            <p className="text-slate-600 leading-loose text-sm text-justify tracking-relaxed">
                                {point.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
