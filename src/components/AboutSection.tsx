import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '../data/config.ts';
import { MapPin, CheckCircle, Phone } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // High-end travel photo
  const aboutImageSrc = "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80";

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#F7F4EE] border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Image Composition */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[30px] border border-[#111827]/12 bg-[#FFFDF9] shadow-[0_12px_36px_rgba(17,24,39,0.06)] aspect-[4/5] w-full">
              {!imageError ? (
                <img
                  src={aboutImageSrc}
                  alt="Scenic highway journey through Central India"
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] p-8 text-center">
                  <span className="font-serif text-2xl font-bold text-[#C79B4B]">DS Travels Indore</span>
                </div>
              )}

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-md backdrop-blur-md border border-white/40">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#C79B4B]" />
                  <span className="text-xs font-bold text-[#111827]">
                    Indore, Madhya Pradesh
                  </span>
                </div>
                <span className="text-[11px] text-[#667085] block mt-0.5">
                  Operating Hub for Central India & Beyond
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
              The DS Travels Commitment
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Your Journey Starts With <br />
              <span className="text-[#C79B4B]">DS Travels.</span>
            </h2>

            <p className="text-base text-[#667085] leading-relaxed">
              <strong className="text-[#111827]">DS Travels Indore</strong> provides local, outstation, and all-India taxi services with a dedicated focus on comfortable, dependable journeys.
            </p>

            <p className="text-base text-[#667085] leading-relaxed">
              Whether you need reliable city rides across Indore, sacred pilgrimage travel to Mahakaleshwar Jyotirlinga and Omkareshwar, or extended cross-country road trips, we operate with verified <strong className="text-[#111827]">All India Permit</strong> compliance.
            </p>

            {/* Core commitments */}
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#C79B4B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#111827]">All India Permit Fleet: </span>
                  <span className="text-sm text-[#667085]">Authorized for legal, peaceful travel across all state borders without transit hassle.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#C79B4B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#111827]">Fleet Flexibility: </span>
                  <span className="text-sm text-[#667085]">Vehicle classes ranging from compact cars to executive sedans, rugged SUVs, and high-capacity group travel vans.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#C79B4B] shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-[#111827]">Seasoned Chauffeurs: </span>
                  <span className="text-sm text-[#667085]">Professional drivers who prioritize passenger safety, cleanliness, and smooth route navigation.</span>
                </div>
              </div>
            </div>

            {/* Direct hotline */}
            <div className="pt-3 border-t border-[#111827]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-xl bg-[#C79B4B] px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-250 ease-out hover:bg-[#D3AA5A] hover:shadow-[0_4px_16px_rgba(199,155,75,0.3)] hover:scale-[1.015] active:scale-[0.98]"
              >
                <Phone className="h-4 w-4" />
                <span>Call {BUSINESS_CONFIG.contact.displayPhone}</span>
              </a>
              <span className="text-xs text-[#667085] text-center sm:text-left">
                Centrally located in Indore • Doorstep Pickup
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
