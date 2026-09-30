import React, { useState } from 'react';
import { ShieldCheck, Compass, Clock, Award } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';

export const WhyUsSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  // Large editorial image representing chauffeur hospitality & highway road travel
  const editorialImageSrc = "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80";

  const iconList = [ShieldCheck, Compass, Clock, Award];

  return (
    <section className="relative py-24 sm:py-32 bg-[#FFFDF9] border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
            Core Values
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            More Than Just A Ride.
          </h2>
          <p className="text-base text-[#667085] leading-relaxed">
            Built on integrity, punctuality, and an unwavering commitment to safe, comfortable road travel across Indore and India.
          </p>
        </div>

        {/* Editorial Layout: Large Editorial Photo Anchor (Left) + 4 Editorial Benefits (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Large Editorial Image Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-[26px] sm:rounded-[30px] border border-[#111827]/12 bg-[#F7F4EE] shadow-[0_12px_36px_rgba(17,24,39,0.06)] aspect-[4/5] w-full">
              {!imageError ? (
                <img
                  src={editorialImageSrc}
                  alt="Chauffeur executive journey and highway road travel"
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] text-[#111827] p-8 text-center">
                  <span className="font-serif text-2xl font-bold text-[#C79B4B]">DS Travels Indore</span>
                </div>
              )}

              {/* Floating Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md border border-white/50">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#C79B4B] block">
                  Chauffeur Hospitality
                </span>
                <span className="text-xs font-bold text-[#111827] block mt-0.5">
                  Verified All India Commercial Permit Chauffeurs
                </span>
              </div>
            </div>
          </div>

          {/* Right: 4 Editorial Benefits with Circular Route Identifiers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {BUSINESS_CONFIG.principles.map((item, idx) => {
              const Icon = iconList[idx % iconList.length];
              return (
                <div
                  key={idx}
                  className="group relative rounded-[22px] border border-[#111827]/10 bg-[#F7F4EE]/60 p-6 transition-all duration-300 hover:border-[#C79B4B]/40 hover:bg-[#FFFDF9] hover:shadow-[0_8px_24px_rgba(17,24,39,0.04)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C79B4B]/30 bg-white text-[#C79B4B] shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#C79B4B]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111827] tracking-tight group-hover:text-[#C79B4B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
