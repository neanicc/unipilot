import React, { useState } from 'react';
import { UniversityProfile } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
}

interface Props {
    faq: FaqItem[];
    university: UniversityProfile;
}

const FaqTab: React.FC<Props> = ({ faq, university }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const filteredFaq = faq.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            {/* Header Section */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
                    <HelpCircle className="text-white/80" />
                    Frequently Asked Questions
                </h2>
                <p className="text-sm mt-1 text-white/60">
                    Quick answers to common questions about {university.shortName}.
                </p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={18} />
                    <input
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-md border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    />
                </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-3">
                {filteredFaq.length === 0 ? (
                    <div className="text-center py-10 text-white/40">
                        <HelpCircle size={40} className="mx-auto mb-3 opacity-30" />
                        <p>No FAQs found matching your search.</p>
                    </div>
                ) : (
                    filteredFaq.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-md border border-white/20 overflow-hidden transition-all bg-white/10 backdrop-blur-md ${isOpen ? 'shadow-lg' : ''}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/10"
                                >
                                    <span className="font-semibold pr-4 text-white">
                                        {item.question}
                                    </span>
                                    <span className="flex-shrink-0 text-white/60">
                                        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="pt-3 border-t border-white/10">
                                            <p className="text-sm leading-relaxed text-white/80">
                                                {item.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>

            {/* Stats */}
            {filteredFaq.length > 0 && (
                <div className="mt-6 text-center text-xs text-white/40">
                    {searchQuery ? (
                        <span>Showing {filteredFaq.length} of {faq.length} FAQs</span>
                    ) : (
                        <span>{faq.length} FAQs available</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default FaqTab;
