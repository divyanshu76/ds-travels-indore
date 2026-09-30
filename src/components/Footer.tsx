import React from 'react';
import { Logo } from './Logo.tsx';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, MessageSquare, ArrowRight, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquire = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#F0EBE1] text-[#172033] border-t border-[rgba(23,32,51,0.10)] pt-16 sm:pt-20 pb-12 overflow-hidden">
      
      {/* Background Decorative Route Lines & Journey Graphic */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-100 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path d="M -100 200 C 300 100, 600 350, 1000 180 S 1500 280, 1600 220" stroke="rgba(199,155,75,0.40)" strokeWidth="1.2" strokeDasharray="6 8" />
          <path d="M -100 320 C 400 220, 800 420, 1200 280 S 1500 360, 1600 300" stroke="rgba(23,32,51,0.10)" strokeWidth="0.8" opacity="0.8" />
          <circle cx="600" cy="350" r="4" fill="rgba(199,155,75,0.50)" />
          <circle cx="1000" cy="180" r="4" fill="rgba(199,155,75,0.50)" />
        </svg>
      </div>

      <div className="premium-container relative z-10">
        
        {/* Top Footer Conversion Banner */}
        <div className="relative mb-14 overflow-hidden rounded-[24px] border border-[rgba(23,32,51,0.10)] bg-[#FFFDF8] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl">
          
          {/* Subtle Route Line Background inside Banner */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
              <path d="M -50 150 C 200 50, 400 180, 850 80" stroke="rgba(199,155,75,0.30)" strokeWidth="1.5" strokeDasharray="4 6" />
            </svg>
          </div>

          <div className="space-y-3 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C79B4B]">
              Planning Your Next Journey?
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172033]">
              Travel Comfortably <br className="hidden lg:block"/> From Indore
            </h3>
            <p className="text-sm text-[#68738A] max-w-md leading-relaxed">
              From Indore city rides to pilgrimage journeys and long-distance travel across India.
            </p>
          </div>

          <button
            type="button"
            onClick={handleEnquire}
            className="group relative z-10 inline-flex h-[54px] sm:h-[60px] items-center justify-center gap-3 rounded-xl bg-[#C79B4B] px-8 text-sm font-bold uppercase tracking-wider text-[#172033] shadow-[0_4px_24px_rgba(199,155,75,0.4)] transition-all duration-300 ease-out hover:bg-[#D3AA5A] hover:text-[#172033] hover:shadow-[0_8px_32px_rgba(199,155,75,0.30)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>Enquire Now</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </button>
        </div>

        {/* Main 4-Column Footer Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[rgba(23,32,51,0.10)]">
          
          {/* Column 1: Brand & Certification (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-[#68738A] leading-relaxed max-w-sm pt-1">
              Premium chauffeur taxi services, local pilgrimage tours, and nationwide outstation journeys based in Indore, Madhya Pradesh.
            </p>
            <div className="inline-flex items-center gap-2 pt-1 text-xs text-[#C79B4B] font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified All India Permit Carrier</span>
            </div>
            <div className="pt-1">
              <div className="text-[11px] text-[#F7F4EC]/60 font-mono">
                Operating Commercial Fleet • Verified Chauffeurs
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79B4B]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#68738A]">
              <li><a href="#hero" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Home</a></li>
              <li><a href="#services" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Services</a></li>
              <li><a href="#tours" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Tours</a></li>
              <li><a href="#vehicles" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Vehicles</a></li>
              <li><a href="#about" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">About</a></li>
              <li><a href="#contact" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79B4B]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#68738A]">
              <li><a href="#services" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Local Taxi</a></li>
              <li><a href="#services" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Outstation Taxi</a></li>
              <li><a href="#services" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">All India Taxi</a></li>
              <li><a href="#tours" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Mahakal / Ujjain Darshan</a></li>
              <li><a href="#tours" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Omkareshwar Jyotirlinga</a></li>
              <li><a href="#tours" className="hover:text-[#C79B4B] hover:translate-x-0.5 transition-all inline-block py-0.5">Maheshwar & Mandav Excursions</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Dispatch Desk (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79B4B]">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-[#F7F4EC]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#C79B4B] shrink-0 mt-0.5" />
                <span>Indore, Madhya Pradesh</span>
              </div>
              
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-[#C79B4B] shrink-0 mt-0.5" />
                <a 
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`} 
                  className="font-mono text-[#172033] hover:text-[#C79B4B] transition-colors font-semibold"
                >
                  +91 {BUSINESS_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <a 
                  href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C79B4B] transition-colors font-mono"
                >
                  WhatsApp: +91 {BUSINESS_CONFIG.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-[#C79B4B] shrink-0 mt-0.5" />
                <span className="text-xs font-mono">{BUSINESS_CONFIG.contact.email}</span>
              </div>
            </div>

            {/* Quick Action Link for Mobile Call/Chat */}
            <div className="pt-2 flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="flex-1 py-2 text-center rounded-lg bg-[rgba(23,32,51,0.08)] text-xs font-bold uppercase tracking-wider text-[#172033] hover:bg-[rgba(23,32,51,0.14)] transition-colors"
              >
                Call Desk
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded-lg bg-[#C79B4B]/15 text-xs font-bold uppercase tracking-wider text-[#C79B4B] hover:bg-[#C79B4B]/25 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#68738A]">
          <div>
            © 2026 DS Travels Indore. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#C79B4B]">All India Permit Taxi Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#C79B4B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
