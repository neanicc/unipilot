import React, { useState } from 'react';
import { Send, CheckCircle, X, AlertTriangle } from 'lucide-react';

interface ReportProblemFormProps {
    onClose: () => void;
    userEmail?: string;
}

const ReportProblemForm: React.FC<ReportProblemFormProps> = ({
    onClose,
    userEmail = ''
}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                setError('Failed to submit. Please try again.');
            }
        } catch {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="p-4 bg-black/60 backdrop-blur-xl rounded-lg border border-white/20">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-green-400">
                        <CheckCircle size={20} />
                        <span className="font-semibold">Report Submitted!</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                    >
                        <X size={16} />
                    </button>
                </div>
                <p className="text-sm text-white/70">
                    Thanks for your feedback! We'll look into this.
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-4 py-2 bg-white/10 hover:bg-white/15 rounded-md text-white text-sm font-medium transition-colors"
                >
                    Close
                </button>
            </div>
        );
    }

    return (
        <div className="p-4 bg-black/60 backdrop-blur-xl rounded-lg border border-white/20">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white">
                    <AlertTriangle size={18} className="text-yellow-400" />
                    <span className="font-semibold text-sm">Report a Problem</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 rounded-md hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>
            </div>

            <form
                action={import.meta.env.VITE_FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-3"
            >
                {/* Email Field */}
                <div>
                    <label htmlFor="report-email" className="block text-xs font-medium text-white/60 mb-1">
                        Email Address
                    </label>
                    <input
                        id="report-email"
                        type="email"
                        name="email"
                        defaultValue={userEmail}
                        required
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="report-message" className="block text-xs font-medium text-white/60 mb-1">
                        Describe the Problem
                    </label>
                    <textarea
                        id="report-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Please describe what went wrong..."
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    />
                </div>

                {error && (
                    <p className="text-xs text-red-400">{error}</p>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-white text-sm font-medium transition-all"
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={14} />
                            Submit Report
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ReportProblemForm;
