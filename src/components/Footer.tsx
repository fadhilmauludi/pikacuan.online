import { Mail, MessageCircle, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <img src="/Pikacuan.png" alt="Pikacuan" className="w-10 md:w-12 h-10 md:h-12" />
              <span className="text-xl md:text-2xl font-bold text-white">Pikacuan</span>
            </div>
            <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed max-w-md">
              Komunitas trading saham terpercaya dengan mentor berpengalaman, strategi proven, dan akses eksklusif ke analisis pasar real-time.
            </p>
            <div className="flex items-center space-x-2 md:space-x-4">
              <a
                href="https://discord.gg/pikacuan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 md:p-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://instagram.com/pikacuan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 md:p-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="https://twitter.com/pikacuan"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 md:p-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Twitter className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a
                href="mailto:hello@pikacuan.com"
                className="bg-slate-800 p-2 md:p-3 rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <a href="#benefits" className="hover:text-amber-400 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm md:text-base mb-3 md:mb-4">Support</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="mailto:support@pikacuan.com" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs md:text-sm">
            <p className="text-slate-400">
              &copy; 2025 Pikacuan. All rights reserved.
            </p>
            <p className="text-slate-400">
              Made with <span className="text-red-500">❤</span> for Indonesian Traders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
