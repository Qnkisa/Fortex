/**
 * Services Section Component
 * Modern card layout with professional icons and hover effects
 */
export default function Services() {
    const services = [
        {
            title: 'Физическа охрана',
            description: 'Професионални охранители за 24/7 защита на вашите обекти и активи.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            title: 'Видеонаблюдение',
            description: 'Модерни системи за видеонаблюдение и непрекъснат мониторинг.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            gradient: 'from-cyan-500 to-cyan-600',
        },
        {
            title: 'Охрана на събития',
            description: 'Специализирана охрана за корпоративни и частни мероприятия.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            gradient: 'from-indigo-500 to-indigo-600',
        },
        {
            title: 'Контрол на достъпа',
            description: 'Електронни системи за контрол и управление на достъпа.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            gradient: 'from-purple-500 to-purple-600',
        },
        {
            title: 'Мобилни патрули',
            description: 'Редовни обиколки и бърза реакция при инциденти.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: 'from-amber-500 to-amber-600',
        },
        {
            title: 'Охрана на обекти',
            description: 'Комплексна защита на складове, офиси и бази.',
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            gradient: 'from-emerald-500 to-emerald-600',
        },
    ];

    return (
        <section id="uslugi" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                {/* Section Header - Modern, with gradient accent */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full">
                            Нашите Услуги
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 tracking-tight">
                        Професионални охранителни услуги
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                        Цялостни решения за вашата сигурност с модерна технология и експертен екип
                    </p>
                </div>

                {/* Services Grid - Premium card design */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl 
                                     transition-all duration-500 transform hover:-translate-y-2 
                                     border border-gray-100 hover:border-transparent overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                                          group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Icon container with gradient background */}
                            <div className="relative mb-6">
                                <div className={`inline-flex items-center justify-center w-16 h-16 
                                              bg-gradient-to-br ${service.gradient} rounded-xl 
                                              text-white shadow-lg group-hover:scale-110 
                                              transition-transform duration-500`}>
                                    {service.icon}
                                </div>
                            </div>

                            {/* Service Title - Bold, dark */}
                            <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                {service.title}
                            </h3>

                            {/* Service Description - Light, readable */}
                            <p className="text-gray-600 leading-relaxed font-light mb-4">
                                {service.description}
                            </p>

                            {/* Learn more link with arrow */}
                            <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-300">
                                <span>Научете повече</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">18+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">години опит</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">500+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">доволни клиенти</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">24/7</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">наблюдение</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">100%</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wider">надеждност</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
