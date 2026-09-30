import React from 'react';
import { BUSINESS_CONFIG } from '../data/config.ts';

export const JourneyProcess: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F7F4EE] border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
            Route to Departure
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            How It Works
          </h2>
          <p className="text-base text-[#667085] leading-relaxed">
            From your first inquiry to arriving smoothly at your destination, booking your chauffeur is effortless.
          </p>
        </div>

        {/* 4 Connected Journey Steps */}
        <div className="relative">
          
          {/* Desktop Connecting Curved Route Line */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-[#C79B4B]/40 to-transparent z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {BUSINESS_CONFIG.processSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center p-6 rounded-[22px] border border-[#111827]/8 bg-[#FFFDF9] shadow-[0_4px_16px_rgba(17,24,39,0.03)] hover:border-[#C79B4B]/40 hover:shadow-[0_8px_24px_rgba(17,24,39,0.06)] transition-all duration-300"
              >
                {/* Circular Numbered Marker */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C79B4B] bg-white text-[#C79B4B] shadow-sm transition-transform duration-300 group-hover:scale-108">
                  <span className="font-serif text-lg font-bold">{step.number}</span>
                  
                  {/* Outer subtle orbit ring */}
                  <div className="absolute -inset-1.5 rounded-full border border-[#C79B4B]/20 group-hover:border-[#C79B4B]/50 transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-[#111827] tracking-tight group-hover:text-[#C79B4B] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
