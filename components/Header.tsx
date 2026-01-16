'use client';

import { useState } from 'react';
import Image from 'next/image';

/**
 * Header Component
 * Modern sticky navigation with glassmorphism
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
    <header className="sticky top-0 z-50 bg-[#0A2540]/95 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <nav className="container mx-auto px-6 md:px-12 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/fortex_logo.png"
              alt="Fortex Security"
              width={180}
              height={60}
              className="h-16 w-auto scale-150 origin-left"
              priority
            />
          </div>

          {/* Desktop Navigation - Modern, clean */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('nachalo')}
              className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium 
                       relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                       after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 
                       hover:after:w-full after:transition-all after:duration-300"
            >
              Начало
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="text-white/90 hover:text-white transition-all duration-200 text-sm font-medium
                       relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 
                       after:bg-gradient-to-r after:from-blue-400 after:to-cyan-400 
                       hover:after:w-full after:transition-all after:duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2.5 rounded-lg 
                       font-semibold text-sm hover:from-blue-600 hover:to-cyan-600 
                       transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Контакт
            </button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg 
                     bg-white/10 hover:bg-white/20 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
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

        {/* Mobile Menu - Slide-in animation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-white/10 pt-4 animate-fadeIn">
            <button
              onClick={() => scrollToSection('nachalo')}
              className="block w-full text-left py-3 text-white/90 hover:text-white 
                       transition-all duration-200 text-sm font-medium hover:translate-x-1"
            >
              Начало
            </button>
            <button
              onClick={() => scrollToSection('uslugi')}
              className="block w-full text-left py-3 text-white/90 hover:text-white 
                       transition-all duration-200 text-sm font-medium hover:translate-x-1"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left py-3 px-4 mt-2 text-white font-medium
                       bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg
                       hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
            >
              Контакт
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

