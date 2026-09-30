import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Route, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BUSINESS_CONFIG } from '../data/config.ts';

interface HeroProps {
  onBookClick: () => void;
  onExploreToursClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreToursClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 50]);
  const bgY = useTransform(scrollY, [0, 800], [0, -30]);

  // Reliable editorial travel image
  const heroImageSrc = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85";

  return (
    <section 
      id="hero" 
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F7F4EE] via-[#F7F4EE] to-[#EFE9DE]/50"
    >
      {/* Background Animated Travel Route */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.12] sm:opacity-[0.18]"
      >
        <svg className="w-full h-[150%] sm:h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          {/* Main animated flight/travel path */}
          <motion.path 
            d="M -100 600 C 300 400, 600 700, 1000 300 S 1500 500, 1600 400" 
            stroke="#C79B4B" 
            strokeWidth="1.5" 
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          />
          {/* Subtle secondary route */}
          <motion.path 
            d="M -100 450 C 400 300, 800 600, 1200 350 S 1500 450, 1600 350" 
            stroke="#23342D" 
            strokeWidth="1"
            opacity="0.6"
            strokeDasharray="2 6"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          />
          {/* Glowing nodes */}
          <circle cx="1000" cy="300" r="4" fill="#C79B4B" className="animate-pulse" />
          <circle cx="600" cy="510" r="3" fill="#C79B4B" opacity="0.6" />
        </svg>
      </motion.div>

      <div className="premium-container relative z-10">
        
        {/* Editorial 2-Column Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 lg:items-center">
          
          {/* Left Column Wrapper: Unwraps on mobile to allow reordering, acts as flex column on desktop */}
          <div className="contents lg:flex lg:flex-col lg:col-span-6 lg:items-start lg:space-y-5">
            
            {/* Badge, Headline & Description (Order 1 on mobile) */}
            <div className="flex flex-col items-start space-y-4 sm:space-y-5 order-1 mb-1 sm:mb-2 lg:mb-0">
              
              {/* Small Premium Trust Badge Above Headline */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="inline-flex items-center gap-2.5 rounded-full border border-[#C79B4B]/40 bg-[#FFFDF9] px-3.5 py-1.5 shadow-[0_2px_10px_rgba(199,155,75,0.08)]"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B]">
                  <Route className="h-3 w-3" />
                </div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#111827]">
                    ALL INDIA PERMIT
                  </span>
                  <span className="text-[#111827]/25">·</span>
                  <span className="text-[10px] text-[#667085] font-medium tracking-wide">
                    Travel Across India
                  </span>
                </div>
              </motion.div>

              {/* Main Editorial Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
                className="font-editorial text-[2.35rem] sm:text-[3.25rem] lg:text-[4.2rem] font-bold text-[#172033] tracking-[0.01em] leading-[1.06] text-balance"
              >
                Your Journey,<br />
                Handled With{' '}
                <span className="font-handwritten text-[#C79B4B] not-italic" style={{fontSize:'0.88em', letterSpacing:'0.01em'}}>
                  Care.
                </span>
              </motion.h1>

              {/* Shortened Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="max-w-md text-base sm:text-lg text-[#667085] font-normal leading-relaxed text-balance"
              >
                Reliable chauffeur taxi services from Indore to destinations across India.
              </motion.p>
            </div>

            {/* CTA Buttons (Order 3 on mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto order-3 mt-4 sm:mt-5 lg:mt-0 pt-1 lg:pt-0"
            >
              <button
                type="button"
                onClick={onBookClick}
                className="group flex w-full sm:w-auto min-h-[48px] sm:h-[54px] items-center justify-center gap-2 rounded-xl sm:rounded-xl bg-[#C79B4B] px-7 text-sm sm:text-[15px] font-bold uppercase tracking-wider text-white shadow-[0_4px_18px_rgba(199,155,75,0.32)] transition-all duration-250 ease-out hover:bg-[#D3AA5A] hover:shadow-[0_8px_26px_rgba(199,155,75,0.42)] hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
              >
                <span>Book Your Ride</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onExploreToursClick}
                className="group flex w-full sm:w-auto min-h-[48px] sm:h-[54px] items-center justify-center gap-2 rounded-xl sm:rounded-xl border border-[#111827]/15 bg-white/90 px-6 text-sm sm:text-[15px] font-bold uppercase tracking-wider text-[#111827] transition-all duration-250 ease-out hover:border-[#C79B4B] hover:bg-[#FFFDF9] hover:text-[#C79B4B] hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer shadow-2xs"
              >
                <Compass className="h-4 w-4 text-[#C79B4B]" />
                <span>Explore Tours</span>
              </button>
            </motion.div>

            {/* Desktop Trust Points (Order 4 on mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 lg:pt-2 text-[13px] text-[#667085] order-4 mt-4 lg:mt-0"
            >
              <div className="flex items-center gap-1.5 font-medium text-[#111827]">
                <ShieldCheck className="h-4 w-4 text-[#C79B4B]" />
                <span>All India Permit Taxi</span>
              </div>
              <span className="text-[#111827]/20">·</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
                <span>Small Cars to Large Fleet</span>
              </div>
              <span className="text-[#111827]/20">·</span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
                <span>Doorstep Indore Pickup</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dominant Travel Image (Order 2 on mobile) */}
          <div className="lg:col-span-6 relative w-full order-2 mt-1 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
              className="relative group w-full overflow-hidden rounded-[24px] sm:rounded-[32px] border border-[#111827]/12 bg-[#FFFDF9] shadow-[0_16px_45px_-12px_rgba(17,24,39,0.12)]"
            >
              {/* Image Frame: Compact 250px on mobile, 340px sm, 490px on lg */}
              <div className="relative h-[250px] sm:h-[340px] lg:h-[490px] xl:h-[510px] w-full overflow-hidden bg-[#EFE9DE]">
                {!imageError ? (
                  <motion.img
                    style={{ y: imageY }}
                    src={heroImageSrc}
                    alt="Premium chauffeur vehicle traveling on scenic Indian road at golden hour"
                    className={`absolute -top-[10%] left-0 h-[120%] w-full object-cover transition-all duration-700 group-hover:scale-103 ${
                      imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    loading="eager"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#EFE9DE] to-[#E2D8C7] text-center">
                    <div className="h-14 w-14 rounded-full bg-[#C79B4B]/20 flex items-center justify-center text-[#C79B4B] mb-3">
                      <Compass className="h-7 w-7" />
                    </div>
                    <span className="text-base font-bold text-[#111827]">Chauffeur Travel From Indore</span>
                    <span className="text-xs text-[#667085] mt-1">Connecting Central India & All Destinations</span>
                  </div>
                )}

                {/* Subtle soft gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Route Badge Inside Image */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#C79B4B] animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#111827]">
                    INDORE → ALL INDIA
                  </span>
                </div>
              </div>

              {/* Bottom Info Bar inside card */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-20 flex items-center justify-between rounded-xl border border-white/30 bg-white/95 px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-md backdrop-blur-md">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C79B4B]">
                    Signature Chauffeur Service
                  </span>
                  <span className="text-xs font-bold text-[#111827]">
                    Local · Pilgrimage · Outstation
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs font-bold text-[#111827]">
                    {BUSINESS_CONFIG.contact.phone}
                  </span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Mobile Trust Points — Under hero CTAs on mobile */}
          <div className="grid grid-cols-3 gap-2 pt-3 text-[11px] text-[#667085] lg:hidden order-5 w-full">
            <div className="flex items-center gap-1.5 bg-[#FFFDF9] p-2 rounded-lg border border-[#111827]/8 text-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B] shrink-0" />
              <span className="font-medium text-[#111827] truncate">All India Permit</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FFFDF9] p-2 rounded-lg border border-[#111827]/8 text-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B] shrink-0" />
              <span className="truncate">Fleet Choice</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FFFDF9] p-2 rounded-lg border border-[#111827]/8 text-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B] shrink-0" />
              <span className="truncate">Doorstep Pickup</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
