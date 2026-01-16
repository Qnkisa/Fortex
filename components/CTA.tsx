'use client';

/**
 * CTA Section Component
 * Modern, conversion-focused call-to-action with glassmorphism
 */
export default function CTA() {
    const scrollToContact = () => {
        const element = document.getElementById('kontakt');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#0A2540] via-[#0d2f52] to-[#1a4870] text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 md:p-16 text-center
                              shadow-2xl hover:bg-white/15 transition-all duration-500">

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-8">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>

                    {/* CTA Headline - Bold, impactful */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Надградете вашата охранителна инфраструктура
                    </h2>

                    {/* CTA Description - Clear value proposition */}
                    <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                        Свържете се с нас за безплатна консултация и персонализирана оферта,
                        адаптирана към вашите специфични нужди
                    </p>

                    {/* CTA Button with animation */}
                    <button
                        onClick={scrollToContact}
                        className="group inline-flex items-center justify-center gap-3 
                                 bg-white text-[#0A2540] px-10 py-4 rounded-lg font-semibold text-lg
                                 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 
                                 shadow-xl hover:shadow-2xl"
                    >
                        Свържете се с нас
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    {/* Trust badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Отговор в рамките на 24 часа</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

