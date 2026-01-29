import React, { useState } from 'react';
import { User, Award, HeartHandshake, ArrowRight } from 'lucide-react';
import PhilosophyModal from './PhilosophyModal';

import logo from '../assets/logo.png';

import profileImg from '../assets/profile.jpg';

const About = () => {
    const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
    return (
        <section id="about" className="bg-slate-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-12">

                    {/* Placeholder for Profile Image */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <div className="w-64 h-64 rounded-full flex items-center justify-center mb-6 relative overflow-hidden group border-4 border-white shadow-2xl">
                            <img src={profileImg} alt="玉島 望" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-2 font-serif">玉島 望</h3>
                        <p className="text-gold-600 font-medium text-sm tracking-widest uppercase">Tamashima Nozomu</p>
                    </div>

                    <div className="w-full md:w-2/3">
                        {/* Philosophy Trigger */}
                        <div className="text-center md:text-left mb-16">
                            <button
                                onClick={() => setIsPhilosophyOpen(true)}
                                className="group inline-flex items-center gap-6 pl-4 pr-12 py-4 bg-white rounded-full border-2 border-gold-400 text-navy-900 hover:bg-navy-900 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                            >
                                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-white shrink-0">
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        className="h-[120%] w-auto max-w-none object-center"
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className="font-serif text-2xl font-bold tracking-wide leading-tight group-hover:text-gold-100">T-Frontierの想い</span>
                                    <span className="text-sm font-sans tracking-wider text-gold-600 group-hover:text-gold-400">Our Philosophy</span>
                                </div>
                                <ArrowRight className="w-6 h-6 ml-2 text-gold-500 group-hover:text-gold-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <span className="text-navy-600 font-bold tracking-wider text-sm block mb-2 uppercase">Profile</span>
                        <h2 className="text-3xl font-bold text-navy-900 mb-6 font-serif">
                            フードビジネス・データストラテジスト<br />
                            <span className="text-lg md:text-xl font-sans font-normal text-slate-600 mt-2 block">（現百貨店バイヤー）</span>
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="text-slate-600 leading-loose text-lg text-justify tracking-wide">
                                百貨店での営業企画・バイヤー経験を通じて培った<br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-gold-100 to-transparent px-1 rounded-sm"><strong className="text-navy-900 mx-1">「計数管理能力」</strong></span>と、
                                現場で磨かれた<span className="bg-gradient-to-r from-gold-100 to-transparent px-1 rounded-sm"><strong className="text-navy-900 mx-1">「肌感覚」</strong></span>。
                            </p>

                            <p className="text-slate-600 leading-loose text-lg text-justify tracking-wide">
                                この<strong className="text-gold-600 mx-1">2つの視点</strong>を持つ私だからこそできる、<br className="hidden lg:block" />
                                <strong className="text-navy-900 border-b-2 border-gold-300 mx-1">地に足のついたDX支援</strong>があります。
                            </p>

                            <p className="text-slate-600 leading-loose text-lg text-justify tracking-wide">
                                難しい専門用語は使いません。<br className="hidden lg:block" />
                                あなたの事業の<strong className="text-navy-900 text-xl mx-1 font-serif">「右腕」</strong>として、共に利益最大化を目指します。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <Award className="text-gold-500" size={24} />
                                <span className="font-bold text-navy-800 text-sm">百貨店仕込みの分析力</span>
                            </div>
                            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                <HeartHandshake className="text-gold-500" size={24} />
                                <span className="font-bold text-navy-800 text-sm">専門用語なしの伴走支援</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PhilosophyModal
                isOpen={isPhilosophyOpen}
                onClose={() => setIsPhilosophyOpen(false)}
            />
        </section>
    );
};

export default About;
