import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const ServiceModal = ({ isOpen, onClose, content }) => {
    if (!content) return null;

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
                            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl pointer-events-auto relative"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10">
                                <div className="flex items-center gap-3">
                                    <div className="text-gold-500 bg-navy-50 p-2 rounded-lg">
                                        {content.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900">{content.title}</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8">
                                {/* Catchphrase */}
                                {content.catchphrase && (
                                    <div className="bg-navy-900 text-white p-6 rounded-xl mb-8 text-center shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
                                        <p className="text-lg font-serif italic leading-relaxed text-gold-50 whitespace-pre-wrap relative z-10">
                                            {content.catchphrase}
                                        </p>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h4 className="text-sm font-bold text-navy-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[1px] bg-navy-200"></span>
                                        Service Overview
                                    </h4>
                                    <p className="text-slate-600 leading-[2.5] text-sm md:text-base tracking-wide text-pretty mb-8 whitespace-pre-wrap">
                                        {content.fullDescription || content.description}
                                    </p>

                                    {content.price && (
                                        <div className="mb-8 p-4 bg-gold-50/50 rounded-lg border border-gold-200 inline-block">
                                            <span className="text-xs font-bold text-gold-600 uppercase tracking-wider block mb-1">料金目安</span>
                                            <p className="text-xl font-bold text-navy-900 font-serif">
                                                {content.price}
                                                <span className="text-sm font-normal text-slate-500 ml-2">（税別）</span>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Skills (New) */}
                                {content.skills && (
                                    <div className="mb-12">
                                        <h4 className="text-lg font-bold text-navy-900 font-serif mb-6 border-l-4 border-gold-500 pl-4">主な提供メニュー</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {content.skills.map((skill, i) => (
                                                <div key={i} className="bg-white border border-slate-200 p-4 rounded-lg hover:border-gold-300 transition-colors shadow-sm">
                                                    <h5 className="font-bold text-navy-800 mb-2 text-sm">{skill.title}</h5>
                                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{skill.desc}</p>
                                                </div>
                                            ))}
                                            {/* Price Card in the gap */}
                                            {content.spotPrice && (
                                                <div className="bg-navy-900 p-4 rounded-lg shadow-sm flex flex-col justify-center items-center text-center border border-navy-800 group hover:border-gold-500 transition-colors">
                                                    <span className="text-gold-400 text-xs font-bold mb-2 tracking-wider">{content.spotPrice.context}</span>
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-white text-2xl font-bold font-serif">{content.spotPrice.amount}</span>
                                                        <span className="text-slate-400 text-xs">（税別）</span>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100 relative overflow-hidden">
                                    {/* Decorative BG */}
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col items-start gap-2 mb-6">
                                            <span className="bg-gold-500 text-white text-xs font-bold px-2 py-1 rounded inline-block">CASE STUDY</span>
                                            <h4 className="font-bold text-navy-900">活用事例</h4>
                                        </div>

                                        {content.caseStudy ? (
                                            /* New Detailed Format */
                                            <div>
                                                <h5 className="text-xl font-bold text-navy-900 mb-2 font-serif">{content.caseStudy.title}</h5>
                                                <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                                    {content.caseStudy.client}
                                                </p>

                                                <div className="space-y-5">
                                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                                        <span className="shrink-0 w-12 font-bold text-navy-400 text-sm text-center">課題</span>
                                                        <p className="text-slate-700 text-sm leading-relaxed">{content.caseStudy.problem}</p>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                                        <span className="shrink-0 w-12 font-bold text-gold-600 text-sm text-center">施策</span>
                                                        <p className="text-slate-700 text-sm leading-relaxed">{content.caseStudy.solution}</p>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-lg border-l-4 border-gold-400 shadow-sm mt-2">
                                                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                                            <span className="shrink-0 w-12 font-bold text-navy-900 text-sm text-center">結果</span>
                                                            <p className="text-navy-900 text-sm leading-relaxed font-medium">{content.caseStudy.result}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Fallback for Legacy Format */
                                            <div>
                                                <h5 className="text-xl font-bold text-navy-900 mb-4 font-serif">
                                                    {content.caseTitle}
                                                </h5>
                                                <ul className="space-y-3">
                                                    {content.casePoints?.map((point, index) => (
                                                        <li key={index} className="flex items-start gap-3 text-slate-700">
                                                            <CheckCircle2 size={20} className="text-gold-500 mt-1 flex-shrink-0" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-center sticky bottom-0">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSe43qtnNODLmRqLFw3EasoUN0ddTBdvaeqw7h5_S7JCiX90Bw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full md:w-auto text-center justify-center"
                                >
                                    このサービスについて相談する
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
