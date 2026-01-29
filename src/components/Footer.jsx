import React, { useState } from 'react';
import logo from '../assets/logo.png';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <footer className="bg-white py-12 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <img src={logo} alt="T-Frontier" className="h-32 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 transition-all" />

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm text-slate-600 font-medium">
                    <a href="#about" className="hover:text-navy-900 transition-colors">About</a>
                    <a href="#services" className="hover:text-navy-900 transition-colors">Services</a>
                    <a href="#faq" className="hover:text-navy-900 transition-colors">FAQ</a>
                    <a href="#contact" className="hover:text-navy-900 transition-colors">Contact</a>
                    <button
                        onClick={() => setIsPrivacyOpen(true)}
                        className="hover:text-navy-900 transition-colors"
                    >
                        Privacy Policy
                    </button>
                </div>

                <p className="text-slate-400 text-xs text-center">
                    &copy; {new Date().getFullYear()} T-Frontier. All rights reserved.
                </p>
            </div>

            <PrivacyModal
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />
        </footer>
    );
};

export default Footer;
