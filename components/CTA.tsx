'use client';

/**
 * CTA Section Component
 * Clean, minimal call-to-action
 */
export default function CTA() {
    const scrollToContact = () => {
        const element = document.getElementById('kontakt');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 md:py-32 bg-[#0A2540] text-white">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
                {/* CTA Headline - Clean, powerful */}
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Надградете вашата охранителна инфраструктура
                </h2>

                {/* CTA Description - Subtle, informative */}
                <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                    Свържете се с нас за безплатна консултация и персонализирана оферта
                </p>

                {/* CTA Button - Simple, clean */}
                <button
                    onClick={scrollToContact}
                    className="bg-white text-[#0A2540] px-10 py-4 rounded font-semibold text-base
                   hover:bg-gray-100 transition-colors duration-200"
                >
                    Свържете се с нас
                </button>
            </div>
        </section>
    );
}
