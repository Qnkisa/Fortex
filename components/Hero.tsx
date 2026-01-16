'use client';

/**
 * Hero Section Component
 * Modern, premium hero with gradient backgrounds and animations
 */
export default function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('kontakt');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="nachalo"
            className="relative bg-gradient-to-br from-[#0A2540] via-[#0d2f52] to-[#1a4870] text-white py-32 md:py-48 overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
                <div className="max-w-3xl">
                    {/* Badge - Modern accent */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 group hover:bg-white/15 transition-all duration-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-white/90">Сертифицирана охранителна фирма от 2005</span>
                    </div>

                    {/* Main Headline - Bold, modern typography */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                        Осигуряване на вашите активи с{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            непоколебимо превъзходство
                        </span>
                    </h1>

                    {/* Subtitle - Enhanced readability */}
                    <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl font-light">
                        Надеждна защита от сертифицирани охранители. Професионални охранителни услуги
                        за бизнеса, събитията и обектите във вашата организация.
                    </p>

                    {/* CTA Buttons - Premium styling with animations */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToContact}
                            className="group relative bg-white text-[#0A2540] px-10 py-4 rounded-lg font-semibold text-base
                                     hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                                     flex items-center justify-center gap-2"
                        >
                            Заявка за оферта
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                const element = document.getElementById('uslugi');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group px-10 py-4 rounded-lg font-semibold text-base
                                     bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white
                                     hover:bg-white hover:text-[#0A2540] hover:border-white
                                     transition-all duration-300 transform hover:scale-105
                                     flex items-center justify-center gap-2"
                        >
                            Вижте услугите
                            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-16 flex flex-wrap gap-8 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>24/7 Охрана</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Лицензирани специалисти</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Бърза реакция</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
