'use client';

import { useState } from 'react';

/**
 * Contact Form Component
 * Modern, premium form design with enhanced UX
 */
export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <section id="kontakt" className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Section Header - Modern, centered */}
                    <div className="text-center mb-16">
                        <div className="inline-block mb-4">
                            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider px-4 py-2 bg-blue-50 rounded-full">
                                Свържете се с нас
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tight">
                            Заявка за оферта
                        </h2>
                        <p className="text-lg text-gray-600 font-light">
                            Попълнете формата и ще се свържем с вас в рамките на 24 часа
                        </p>
                    </div>

                    {/* Contact Grid - Form + Info */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Side - Contact Info Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-gradient-to-br from-[#0A2540] to-[#1a4870] rounded-2xl p-8 text-white h-full">
                                <h3 className="text-2xl font-bold mb-6">Информация за контакт</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Телефон</div>
                                            <div className="text-white/80 text-sm">+359 2 123 4567</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Имейл</div>
                                            <div className="text-white/80 text-sm">info@fortexsecurity.bg</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold mb-1">Адрес</div>
                                            <div className="text-white/80 text-sm">София 1000<br />бул. Витоша 123</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Working hours */}
                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <div className="text-sm text-white/60 mb-2">Работно време</div>
                                    <div className="text-white font-medium">Понеделник - Петък: 9:00 - 18:00</div>
                                    <div className="text-white/80 text-sm mt-1">Охрана 24/7</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                                {/* First Name and Last Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* First Name */}
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Име
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg 
                                   focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20
                                   transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                                            placeholder="Иван"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block text-sm font-semibold text-gray-700 mb-2"
                                        >
                                            Фамилия
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg 
                                   focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20
                                   transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                                            placeholder="Петров"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mb-6">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Имейл
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg 
                                 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20
                                 transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                                        placeholder="ivan.petrov@company.bg"
                                    />
                                </div>

                                {/* Message/Comment */}
                                <div className="mb-8">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-gray-700 mb-2"
                                    >
                                        Коментар
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-lg 
                                 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20
                                 transition-all duration-200 resize-none text-gray-900 placeholder:text-gray-400"
                                        placeholder="Опишете вашите нужди..."
                                    />
                                </div>

                                {/* Submit Button - Premium styling */}
                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-[#0A2540] to-[#1a4870] text-white px-8 py-4 rounded-lg font-semibold 
                                   hover:from-[#0d2f52] hover:to-[#1a4870] transition-all duration-300 
                                   transform hover:scale-[1.02] shadow-lg hover:shadow-xl
                                   flex items-center justify-center gap-2"
                                >
                                    Изпратете заявка
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

