'use client';

/**
 * Hero Section Component
 * Minimal, modern hero matching the reference design
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
            className="bg-[#0A2540] text-white py-24 md:py-40"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="max-w-3xl">
                    {/* Main Headline - Clean, minimal typography */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        Осигуряване на вашите активи с непоколебимо превъзходство
                    </h1>

                    {/* Subtitle - Subtle, professional */}
                    <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
                        Надеждна защита от сертифицирани охранители. Професионални охранителни услуги
                        за бизнеса, събитията и обектите във вашата организация.
                    </p>

                    {/* CTA Buttons - Simple, clean */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToContact}
                            className="bg-white text-[#0A2540] px-8 py-3.5 rounded font-semibold 
                       hover:bg-gray-100 transition-colors duration-200"
                        >
                            Заявка за оферта
                        </button>
                        <button
                            onClick={() => {
                                const element = document.getElementById('uslugi');
                                if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="border-2 border-white text-white px-8 py-3.5 rounded font-semibold 
                       hover:bg-white hover:text-[#0A2540] transition-all duration-200"
                        >
                            Вижте услугите
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
