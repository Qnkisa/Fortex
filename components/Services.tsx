/**
 * Services Section Component
 * Minimal grid layout matching the reference design
 */
export default function Services() {
    const services = [
        {
            title: 'Физическа охрана',
            description: 'Професионални охранители за 24/7 защита на вашите обекти и активи.',
        },
        {
            title: 'Видеонаблюдение',
            description: 'Модерни системи за видеонаблюдение и непрекъснат мониторинг.',
        },
        {
            title: 'Охрана на събития',
            description: 'Специализирана охрана за корпоративни и частни мероприятия.',
        },
        {
            title: 'Контрол на достъпа',
            description: 'Електронни системи за контrol и управление на достъпа.',
        },
    ];

    return (
        <section id="uslugi" className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Section Header - Clean, centered */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tight">
                        Професионални охранителни услуги
                    </h2>
                </div>

                {/* Services Grid - 4 columns, minimal design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className="text-center">
                            {/* Minimal gray placeholder box - matching reference design */}
                            <div className="w-full aspect-square bg-gray-200 rounded-sm mb-6 flex items-center justify-center">
                                <div className="w-16 h-16 border-2 border-gray-300 rounded-full opacity-30"></div>
                            </div>

                            {/* Service Title - Bold, dark */}
                            <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                                {service.title}
                            </h3>

                            {/* Service Description - Light, subtle */}
                            <p className="text-sm text-gray-600 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Services Row - 2 more cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="w-full aspect-square bg-gray-200 rounded-sm mb-6 flex items-center justify-center">
                            <div className="w-16 h-16 border-2 border-gray-300 rounded-full opacity-30"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                            Мобилни патрули
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                            Редовни обиколки и бърза реакция при инциденти.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-full aspect-square bg-gray-200 rounded-sm mb-6 flex items-center justify-center">
                            <div className="w-16 h-16 border-2 border-gray-300 rounded-full opacity-30"></div>
                        </div>
                        <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                            Охрана на обекти
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">
                            Комплексна защита на складове, офиси и бази.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
