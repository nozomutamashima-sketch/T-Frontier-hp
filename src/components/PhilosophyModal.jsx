import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, TrendingUp, Handshake, Quote } from 'lucide-react';

const PhilosophyModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto relative flex flex-col"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10 shrink-0">
                                <div>
                                    <span className="text-gold-500 font-bold tracking-widest uppercase text-xs block mb-1">Our Philosophy</span>
                                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 font-serif">T-Frontierの原点と約束</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-10 overflow-y-auto">

                                {/* Intro Section */}
                                <div className="mb-12">
                                    <h4 className="text-xl md:text-2xl font-bold text-navy-900 font-serif mb-6 leading-relaxed">
                                        「悔しさ」が、<br className="md:hidden" />すべての始まりでした。
                                    </h4>
                                    <div className="text-slate-700 leading-loose space-y-6 text-left">
                                        <p>
                                            良い商品が、必ずしも売れるわけではない。<br />
                                            その「悔しさ」が、すべての始まりでした。<br /><br />
                                            私は現在も、百貨店のバイヤーとして数え切れないほどの商品や店舗と<br />
                                            向き合っています。その中で、何度も歯痒い思いをしてきました。
                                        </p>
                                        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-gold-400 italic text-navy-800 font-medium my-6">
                                            「味は間違いなく一流なのに、なぜかお客様に届かない」<br />
                                            「こだわり抜いた商品なのに、ドンブリ勘定で利益が残らない」
                                        </div>
                                        <p>
                                            職人としての腕が良い人ほど、経営やデジタルの壁に阻まれ、損をしている。<br />
                                            この「もったいない」現状を打破するために必要なのは、<br />
                                            精神論ではありません。<br /><br />
                                            確かな<strong className="text-navy-900 border-b border-gold-300 mx-1">「データ」</strong>と、それを使いこなす<strong className="text-navy-900 border-b border-gold-300 mx-1">「戦略」</strong>です。
                                        </p>
                                    </div>
                                </div>

                                {/* 3 T's Section */}
                                <div className="mb-14 bg-navy-900 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                                    <div className="relative z-10 text-center mb-10">
                                        <h4 className="text-2xl font-bold font-serif mb-4 flex items-center justify-center gap-3">
                                            <span className="h-[1px] w-8 bg-gold-400"></span>
                                            3つの「T」
                                            <span className="h-[1px] w-8 bg-gold-400"></span>
                                        </h4>
                                        <p className="text-slate-300 text-sm leading-relaxed">
                                            屋号「T-Frontier」に込めた想い。<br />
                                            私たちは、単なるデータ分析屋ではありません。<br className="hidden md:block" />
                                            3つの「T」を軸に、あなたのビジネスを新しい領域（Frontier）へと導きます。
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* T-1 */}
                                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Handshake className="text-gold-400" size={24} />
                                                <h5 className="text-lg font-bold text-gold-100 font-serif">01. Trust <span className="text-sm font-sans font-normal text-slate-400 ml-2">（信頼）</span></h5>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                データは嘘をつきません。<br />
                                                客観的な事実に基づく「信頼」ある経営をサポートします。
                                            </p>
                                        </div>

                                        {/* T-2 */}
                                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Lightbulb className="text-gold-400" size={24} />
                                                <h5 className="text-lg font-bold text-gold-100 font-serif">02. Technology <span className="text-sm font-sans font-normal text-slate-400 ml-2">（技術）</span></h5>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                AIやデータサイエンスという最新の「技術」を、<br />
                                                誰でも使える武器として提供します。
                                            </p>
                                        </div>

                                        {/* T-3 */}
                                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <TrendingUp className="text-gold-400" size={24} />
                                                <h5 className="text-lg font-bold text-gold-100 font-serif">03. Trend <span className="text-sm font-sans font-normal text-slate-400 ml-2">（潮流・時流）</span></h5>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed mb-3">
                                                ここが、単なるデータ分析屋との決定的な違いです。
                                            </p>
                                            <p className="text-slate-300 text-sm leading-relaxed">
                                                現役バイヤーとして、常に変化する市場の「最前線」に身を置いています。<br />
                                                データだけでは見えない「時代の空気（トレンド）」を捉え、<br />半歩先の提案を行います。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Frontier Definition */}
                                <div className="mb-14 text-center">
                                    <Quote size={40} className="text-gold-200 mx-auto mb-6 transform scale-x-[-1]" />
                                    <p className="text-lg md:text-xl font-serif text-navy-900 font-bold mb-6">
                                        「Frontier」とは、<br />
                                        あなたの店の「可能性」のこと。
                                    </p>
                                    <div className="text-slate-600 leading-loose space-y-4 text-left md:text-center text-sm md:text-base">
                                        <p>
                                            フロンティアとは、単なる「未開拓の地」ではありません。<br />
                                            今の延長線上にはない、一段上のステージ。
                                        </p>
                                        <p>
                                            「忙しいだけの毎日」から抜け出し、<br />
                                            「利益とゆとりを持って商売を楽しむ」未来。<br />
                                            その新しい景色（フロンティア）を、一緒に見に行きたいと願っています。
                                        </p>
                                    </div>
                                </div>

                                {/* Logo Section */}
                                <div className="border-t border-slate-100 pt-10">
                                    <div className="flex flex-col md:flex-row gap-8 items-start">
                                        <div className="w-full md:w-1/3 aspect-square bg-navy-900 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-navy-800 to-navy-700 opacity-50"></div>
                                            <img
                                                src="/rogo.png"
                                                alt="T-Frontier Logo"
                                                className="relative z-10 w-full h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500 -mt-2"
                                            />
                                        </div>

                                        <div className="w-full md:w-2/3">
                                            <h4 className="text-lg font-bold text-navy-900 font-serif mb-4 flex items-center gap-2">
                                                <span className="w-1 h-6 bg-gold-500 rounded-full"></span>
                                                夜明けの光を、あなたのビジネスに。
                                            </h4>
                                            <p className="text-slate-600 text-sm leading-loose text-left">
                                                コーポレートカラーの「ディープネイビー」は、夜明け前の静寂と、プロフェッショナルとしての<br />
                                                深い知見を表しています。<br />
                                                そして、そこに差し込む「ゴールド」の光。<br /><br />
                                                これは、データという「光」が、暗闇（経営の迷い）を照らし、新しい朝（成功）が訪れる瞬間を表現しています。<br />
                                                迷いの中にいる経営者の足元を照らし、確信を持って<br />
                                                進めるように。<br />
                                                このロゴには、そんな「道標（ガイド）」でありたいという<br />
                                                決意が込められています。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-center sticky bottom-0 shrink-0">
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full transition-all shadow-lg hover:shadow-xl font-medium tracking-wide"
                                >
                                    閉じる
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PhilosophyModal;
