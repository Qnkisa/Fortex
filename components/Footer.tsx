/**
 * Footer Component
 * Clean, minimal footer design
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0A2540] text-white py-16">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Fortex Security</h3>
                        <p className="text-gray-400 leading-relaxed font-light max-w-md">
                            Професионални охранителни услуги от 2005 година.
                            Гарантираме вашата сигурност с непоколебимо превъзходство.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-gray-300">КОНТАКТИ</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-light">
                            <li>+359 2 123 4567</li>
                            <li>info@fortexsecurity.bg</li>
                            <li>София 1000<br />бул. Витоша 123</li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-gray-300">КОМПАНИЯ</h4>
                        <ul className="space-y-3 text-sm text-gray-400 font-light">
                            <li><a href="#uslugi" className="hover:text-white transition-colors">Услуги</a></li>
                            <li><a href="#kontakt" className="hover:text-white transition-colors">Контакт</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">За нас</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Minimal */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                        <p className="text-gray-500 font-light mb-4 md:mb-0">
                            © {currentYear} Fortex Security. Всички права запазени.
                        </p>

                        {/* Social Links - Minimal */}
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light">
                                LinkedIn
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
