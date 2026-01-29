import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
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
                            className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl pointer-events-auto relative flex flex-col"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="text-gold-500 bg-navy-50 p-2 rounded-lg">
                                        <Shield size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-900">プライバシーポリシー</h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <div className="prose prose-sm prose-slate max-w-none">
                                    <p className="lead">
                                        T-Frontier（以下、「当方」といいます。）は、お客様の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                                    </p>

                                    <h4>第1条（個人情報）</h4>
                                    <p>
                                        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先バックその他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                                    </p>

                                    <h4>第2条（個人情報の収集方法）</h4>
                                    <p>
                                        当方は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当方の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                                    </p>

                                    <h4>第3条（個人情報を収集・利用する目的）</h4>
                                    <p>当方が個人情報を収集・利用する目的は、以下のとおりです。</p>
                                    <ul>
                                        <li>当方サービスの提供・運営のため</li>
                                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                                        <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当方が提供する他のサービスの案内のメールを送付するため</li>
                                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                                        <li>上記の利用目的に付随する目的</li>
                                    </ul>

                                    <h4>第4条（利用目的の変更）</h4>
                                    <p>
                                        当方は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                                    </p>

                                    <h4>第5条（個人情報の第三者提供）</h4>
                                    <p>
                                        当方は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                                    </p>

                                    <h4>第6条（個人情報の開示）</h4>
                                    <p>
                                        当方は、本人から個人情報の開示を求められたときは、本人に対しこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                                    </p>

                                    <h4>第7条（生成AIの利用および学習について）</h4>
                                    <p>
                                        当方は、業務効率化およびサービス向上のため、生成AI（人工知能）技術を利用する場合があります。その際、お客様から提供された情報（個人情報を含む）が、当該AIモデルの学習に使用される可能性があります。
                                    </p>

                                    <h4>第8条（お問い合わせ窓口）</h4>
                                    <p>
                                        本ポリシーに関するお問い合わせは、お問い合わせフォームよりお願いいたします。
                                    </p>
                                    <p className="mt-8 text-right text-sm text-slate-500">
                                        2026年2月1日 制定
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end sticky bottom-0 shrink-0">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition-colors font-medium"
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

export default PrivacyModal;
