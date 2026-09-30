import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';
import { ServiceMap } from './ServiceMap.tsx';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#F7F4EE] border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
            <MapPin className="h-3.5 w-3.5" />
            Connect With Us
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            Get In Touch
          </h2>
          <p className="text-base text-[#667085] leading-relaxed">
            Planning a journey or need immediate taxi arrangements from Indore? Reach our desk directly via phone, WhatsApp, or online enquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Phone Card */}
            <div className="rounded-[22px] border border-[#111827]/10 bg-[#FFFDF9] p-6 shadow-[0_4px_16px_rgba(17,24,39,0.03)] transition-all hover:border-[#C79B4B]/50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#667085] font-medium">
                    Primary Booking Phone
                  </div>
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                    className="font-mono text-xl font-bold text-[#111827] hover:text-[#C79B4B] transition-colors"
                  >
                    +91 {BUSINESS_CONFIG.contact.phone}
                  </a>
                  <div className="text-[11px] text-[#667085] mt-0.5">
                    Available for direct calls & trip planning
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="rounded-[22px] border border-[#25D366]/40 bg-[#25D366]/10 p-6 transition-all hover:bg-[#25D366]/15">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shrink-0 shadow-sm">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#23342D] font-bold">
                    WhatsApp Desk
                  </div>
                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-lg font-bold text-[#111827] hover:text-[#25D366] transition-colors"
                  >
                    +91 {BUSINESS_CONFIG.contact.phone}
                  </a>
                  <div className="text-[11px] text-[#667085] mt-0.5">
                    Fastest response for quotes & instant pickup
                  </div>
                </div>
              </div>
            </div>

            {/* Email Placeholder Card */}
            <div className="rounded-[22px] border border-[#111827]/10 bg-[#FFFDF9] p-6 shadow-[0_4px_16px_rgba(17,24,39,0.03)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111827]/5 text-[#667085] shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#667085] font-medium">
                    Official Business Email
                  </div>
                  <div className="text-sm font-bold text-[#111827] mt-0.5 font-mono">
                    {BUSINESS_CONFIG.contact.email}
                  </div>
                  <div className="text-[10px] text-[#C79B4B] mt-0.5 font-medium">
                    {BUSINESS_CONFIG.contact.emailPlaceholderNote}
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-[22px] border border-[#111827]/10 bg-[#FFFDF9] p-6 shadow-[0_4px_16px_rgba(17,24,39,0.03)]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#667085] font-medium">
                    Operational Base
                  </div>
                  <div className="text-base font-bold text-[#111827]">
                    {BUSINESS_CONFIG.contact.location}
                  </div>
                  <div className="text-[11px] text-[#C79B4B] mt-0.5 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>{BUSINESS_CONFIG.contact.operatingPermit} Authorized</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Styled Map Graphic (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-[28px] border border-[#111827]/12 bg-[#FFFDF9] p-6 sm:p-8 shadow-[0_8px_32px_rgba(17,24,39,0.04)] overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#111827]/8 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#C79B4B]">
                  Service Radius & Headquarters
                </span>
                <h4 className="text-lg font-bold text-[#111827]">
                  Indore, Madhya Pradesh
                </h4>
              </div>
              <span className="text-xs font-mono text-[#667085]">
                Central India Hub
              </span>
            </div>

            {/* Real Interactive Map — Leaflet + OpenStreetMap (CartoDB Positron tiles) */}
            <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-[#111827]/10 bg-[#EFE9DE]">
              <ServiceMap />

              <div className="absolute top-3 left-3 z-[1000] rounded-lg bg-white/95 px-3 py-1.5 border border-[#111827]/10 text-[11px] text-[#111827] shadow-sm backdrop-blur-md pointer-events-none">
                <span className="font-bold text-[#C79B4B]">Active Hub: </span>
                Doorstep pickup across Indore
              </div>

              <div className="absolute bottom-3 right-3 z-[1000] rounded-lg bg-white/95 px-3 py-1.5 border border-[#111827]/10 text-[11px] text-[#667085] shadow-sm backdrop-blur-md pointer-events-none">
                Indore · Ujjain · Omkareshwar · Maheshwar · Mandav
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-5 pt-4 border-t border-[#111827]/8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-[#667085]">
                Direct coordination for immediate & planned departures:
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="rounded-xl border border-[#111827]/15 bg-[#111827]/[0.03] px-4 py-2.5 text-xs font-bold text-[#111827] hover:border-[#C79B4B] hover:text-[#C79B4B] transition-colors"
                >
                  Call Now
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="group rounded-xl bg-[#C79B4B] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#D3AA5A] hover:shadow-[0_4px_16px_rgba(199,155,75,0.3)] transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-98"
                >
                  <span>Send Enquiry</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
