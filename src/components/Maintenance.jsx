import React from 'react';
import { Construction } from 'lucide-react';

const Maintenance = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
                <div className="flex justify-center">
                    <div className="p-4 bg-blue-50 rounded-full">
                        <Construction className="w-12 h-12 text-blue-900" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-gray-900 font-feature">
                        サイトメンテナンス中
                    </h1>
                    <p className="text-gray-600 leading-relaxed">
                        現在、ウェブサイトの改修作業を行っております。
                        大変ご不便をおかけいたしますが、今しばらくお待ちください。
                    </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        T-Frontier
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
