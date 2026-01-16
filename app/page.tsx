import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

/**
 * Main Page Component
 * Single-page application for Fortex Security Company
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky Navigation */}
      <Header />

      {/* Hero Section with CTA */}
      <Hero />

      {/* Services Grid Section */}
      <Services />

      {/* Call To Action Section */}
      <CTA />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
