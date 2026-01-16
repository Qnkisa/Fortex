'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Header Component
 * Minimal, clean navigation bar
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A2540] border-b border-gray-700/30">
      <nav className="container mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/fortex_logo.png"
              alt="Fortex Security"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation - Minimal, clean */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection('nachalo')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Начало
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Контакт
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-gray-700/30 pt-4">
            <button
              onClick={() => scrollToSection('nachalo')}
              className="block w-full text-left py-3 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Начало
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="block w-full text-left py-3 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left py-3 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Контакт
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
