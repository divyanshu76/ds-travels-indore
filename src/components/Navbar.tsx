import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.tsx';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['services', 'tours', 'vehicles', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Tours', href: '#tours', id: 'tours' },
    { label: 'Vehicles', href: '#vehicles', id: 'vehicles' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 pt-[calc(env(safe-area-inset-top)+0.5rem)] ${
          isScrolled ? 'pb-2 sm:pb-2.5' : 'pb-3 sm:pb-4'
        } px-3 sm:px-6`}
      >
        <div
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border border-[#111827]/12 bg-[#FFFDF9]/90 px-4 py-2.5 sm:px-6 sm:py-3.5 shadow-[0_8px_32px_rgba(17,24,39,0.06)] backdrop-blur-[24px] transition-all duration-300 ${
            isScrolled ? 'shadow-[0_12px_36px_rgba(17,24,39,0.12)] bg-[#FFFDF9]/96' : ''
          }`}
        >
          {/* Brand Wordmark & Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center transition-opacity hover:opacity-90 shrink-0"
            aria-label="DS Travels Indore Home"
          >
            <Logo variant="dark" size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-colors whitespace-nowrap ${
                    isActive ? 'text-[#C79B4B] font-semibold' : 'text-[#667085] hover:text-[#111827]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#C79B4B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Zone */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="flex items-center gap-1.5 rounded-full border border-[#111827]/10 bg-[#111827]/[0.03] px-3.5 py-2 text-xs font-medium text-[#111827] transition-all hover:border-[#C79B4B]/50 hover:bg-[#C79B4B]/10 hover:text-[#C79B4B]"
              title="Call DS Travels Indore"
            >
              <Phone className="h-3.5 w-3.5 text-[#C79B4B]" />
              <span className="font-mono text-xs hidden lg:inline">{BUSINESS_CONFIG.contact.phone}</span>
              <span className="lg:hidden font-medium">Call</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="group relative flex items-center gap-1.5 rounded-full bg-[#C79B4B] px-4.5 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#D3AA5A] hover:shadow-[0_4px_16px_rgba(199,155,75,0.35)] whitespace-nowrap cursor-pointer"
            >
              <span>Book / Enquire</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu & Enquire Action Zone */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onOpenBooking}
              className="rounded-full bg-[#C79B4B] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-xs active:scale-95 transition-all"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-xs transition-colors hover:border-[#C79B4B]"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[#F7F4EE]/98 px-6 pt-24 pb-8 backdrop-blur-2xl sm:hidden animate-in fade-in duration-200">
          <div className="flex flex-col space-y-6">
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#C79B4B] font-semibold">
              Explore Services & Tours
            </div>
            <div className="flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xl font-bold tracking-tight text-[#111827] transition-colors hover:text-[#C79B4B] py-1 border-b border-[#111827]/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-3 pt-5 border-t border-[#111827]/10">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#111827]/15 bg-white py-3 text-xs font-semibold text-[#111827] shadow-2xs"
              >
                <Phone className="h-3.5 w-3.5 text-[#C79B4B]" />
                <span>Call Now</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-[#25D366]/40 bg-[#25D366]/10 py-3 text-xs font-semibold text-[#111827] shadow-2xs"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C79B4B] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md active:scale-98"
            >
              <span>Book Your Ride</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
