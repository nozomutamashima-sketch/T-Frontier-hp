import React from 'react';
import { motion } from 'framer-motion';

import { ChevronRight, BarChart3, ShieldCheck, MonitorPlay } from 'lucide-react';

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-slate-50 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-gold-400/5 rounded-full -translate-x-1/4 translate-y-1/4 blur-3xl"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    {/* Tagline */}
                    <div className="flex items-center gap-4 mb-16 opacity-80">
                        <div className="h-[1px] w-12 bg-navy-900"></div>
                        <span className="text-xs md:text-sm font-medium tracking-[0.25em] text-navy-800 uppercase">
                            AI & Data Strategy
                        </span>
                    </div>

                    {/* Main Copy */}
                    <h1 className="font-serif text-navy-900 leading-[1.3] mb-20">
                        {/* Line 1: Fits on one line by reducing size on mobile (3xl -> 2xl/3xl) */}
                        <span className="block text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide -ml-1 whitespace-nowrap">
                            百貨店の<span className="text-gold-500">『戦略』</span>を、
                        </span>

                        {/* Line 2: "あなたの" and "小さなお店にも" on the same line */}
                        <span className="block text-xl sm:text-3xl md:text-5xl lg:text-6xl font-medium mt-4 md:mt-6 text-slate-700">
                            あなたの
                            <span className="relative inline-block mx-1 md:mx-2 pb-1 md:pb-2">
                                小さなお店
                                <span className="absolute bottom-0 left-0 w-full h-[1px] md:h-[2px] bg-gold-400 opacity-60"></span>
                            </span>
                            にも。
                        </span>
                    </h1>

                    {/* Service Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="flex items-center gap-4 selection:bg-gold-100">
                            <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-navy-600">
                                <BarChart3 size={28} strokeWidth={1.5} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-navy-900 text-base tracking-wide">店舗数値分析</p>
                                <p className="text-xs text-slate-500 tracking-wider">利益管理・POS分析</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 selection:bg-gold-100">
                            <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-navy-600">
                                <ShieldCheck size={28} strokeWidth={1.5} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-navy-900 text-base tracking-wide">生成AI活用支援</p>
                                <p className="text-xs text-slate-500 tracking-wider">法令チェック・業務自動化</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 selection:bg-gold-100">
                            <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm text-navy-600">
                                <MonitorPlay size={28} strokeWidth={1.5} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-navy-900 text-base tracking-wide">Web・販促制作</p>
                                <p className="text-xs text-slate-500 tracking-wider">LP制作・プレゼン資料</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-start pl-2 mb-16">
                        <button
                            onClick={scrollToContact}
                            className="group relative px-6 py-3 md:px-8 md:py-4 bg-transparent overflow-hidden rounded-full transition-all duration-300 hover:shadow-xl"
                        >
                            <span className="absolute inset-0 w-full h-full bg-navy-900 transition-transform duration-300 group-hover:scale-105"></span>
                            <span className="relative flex items-center gap-3 text-white font-medium tracking-widest text-sm md:text-base">
                                無料診断・相談はこちら
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Vertical Decoration */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 writing-vertical-rl text-xs tracking-[0.5em] text-slate-300 font-serif">
                Retail Business Partner
            </div>
        </section>
    );
};

export default Hero;
