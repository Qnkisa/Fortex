'use client';

import { useState } from 'react';

/**
 * Contact Form Component
 * Modern, minimal form design
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
        <section id="kontakt" className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header - Clean, centered */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] mb-4 tracking-tight">
                            Заявка за оферта
                        </h2>
                        <p className="text-base text-gray-600 font-light">
                            Попълнете формата и ще се свържем с вас в рамките на 24 часа
                        </p>
                    </div>

                    {/* Contact Form - Modern, clean styling */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                        {/* First Name and Last Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* First Name */}
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
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
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded 
                           focus:outline-none focus:border-[#0A2540] focus:bg-white
                           transition-all duration-200 text-gray-900"
                                    placeholder="Иван"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
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
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded 
                           focus:outline-none focus:border-[#0A2540] focus:bg-white
                           transition-all duration-200 text-gray-900"
                                    placeholder="Петров"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
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
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded 
                         focus:outline-none focus:border-[#0A2540] focus:bg-white
                         transition-all duration-200 text-gray-900"
                                placeholder="ivan.petrov@company.bg"
                            />
                        </div>

                        {/* Message/Comment */}
                        <div className="mb-8">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Коментар
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded 
                         focus:outline-none focus:border-[#0A2540] focus:bg-white
                         transition-all duration-200 resize-none text-gray-900"
                                placeholder="Опишете вашите нужди..."
                            />
                        </div>

                        {/* Submit Button - Clean, full-width */}
                        <button
                            type="submit"
                            className="w-full bg-[#0A2540] text-white px-8 py-4 rounded font-semibold 
                       hover:bg-[#0d2f52] transition-colors duration-200"
                        >
                            Изпратете заявка
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
