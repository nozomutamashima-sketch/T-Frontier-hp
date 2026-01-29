import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-navy-900 py-16 md:py-24 relative overflow-hidden text-center">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-navy-800/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-50%] left-[-10%] w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4 block">Contact</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">お問い合わせ</h2>

                <div className="bg-white/5 backdrop-blur-sm p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl">
                    <Mail size={48} className="text-gold-400 mx-auto mb-8" />

                    <h3 className="text-2xl font-bold text-white mb-6">
                        まずはあなたの「現場の悩み」を聞かせてください
                    </h3>

                    <p className="text-lg text-slate-300 mb-12 leading-relaxed">
                        食品表示の専門的な相談から、日々の漠然とした売上管理の悩みまで。<br className="hidden md:block" />
                        些細なことでも構いません。お気軽にご連絡ください。
                    </p>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSe43qtnNODLmRqLFw3EasoUN0ddTBdvaeqw7h5_S7JCiX90Bw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold inline-flex items-center text-lg px-12 py-5 shadow-xl shadow-gold-500/20 hover:scale-105 transition-transform"
                    >
                        お問い合わせフォームを開く
                        <ExternalLink size={20} />
                    </a>
                    <p className="mt-4 text-slate-400 text-sm">※Googleフォームへ移動します</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
