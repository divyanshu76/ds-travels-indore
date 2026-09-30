import React from 'react';
import { ShieldCheck, Compass, Car, MapPin, Navigation } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    { title: "ALL INDIA PERMIT", icon: ShieldCheck, desc: "Certified Interstate Travel" },
    { title: "LOCAL TAXI", icon: Navigation, desc: "City & Station Transfers" },
    { title: "OUTSTATION", icon: Compass, desc: "Flexible Highway Trips" },
    { title: "MULTIPLE VEHICLES", icon: Car, desc: "Small Cars to Large Vans" },
    { title: "INDORE BASED", icon: MapPin, desc: "Doorstep Pickup Across City" },
  ];

  return (
    <section 
      aria-label="Core Travel Services & Accreditations"
      className="relative border-y border-[#111827]/10 bg-[#EFE9DE] py-3 sm:py-4 overflow-hidden marquee-container select-none"
    >
      {/* Subtle edge fade overlays for infinite gradient blending */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#EFE9DE] via-[#EFE9DE]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#EFE9DE] via-[#EFE9DE]/80 to-transparent z-10" />

      {/* Infinite Scrolling Track (Duplicated internally for flawless continuous 50% translation) */}
      <div className="animate-marquee flex items-center">
        {/* Set 1 */}
        <div className="flex items-center shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={`track1-${idx}`} 
                className="flex items-center px-6 sm:px-8 border-r border-[#111827]/10 shrink-0 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C79B4B]/40 bg-[#FFFDF9] text-[#C79B4B] shadow-2xs shrink-0 mr-3.5 transition-all duration-300 group-hover:border-[#C79B4B] group-hover:bg-[#C79B4B] group-hover:text-white group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display-accent text-xs tracking-[0.10em] uppercase text-[#111827] group-hover:text-[#C79B4B] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#667085] font-normal whitespace-nowrap mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Set 2 (Identical for seamless loop) */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={`track2-${idx}`} 
                className="flex items-center px-6 sm:px-8 border-r border-[#111827]/10 shrink-0 group transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C79B4B]/40 bg-[#FFFDF9] text-[#C79B4B] shadow-2xs shrink-0 mr-3.5 transition-all duration-300 group-hover:border-[#C79B4B] group-hover:bg-[#C79B4B] group-hover:text-white group-hover:scale-105">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display-accent text-xs tracking-[0.10em] uppercase text-[#111827] group-hover:text-[#C79B4B] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[11px] text-[#667085] font-normal whitespace-nowrap mt-0.5">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
