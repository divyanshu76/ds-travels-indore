import React, { useState } from 'react';
import { Compass, ArrowRight, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, Destination } from '../data/config.ts';

interface DestinationsSectionProps {
  onPlanTrip: (destinationName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onPlanTrip }) => {
  const featured = BUSINESS_CONFIG.destinations.find((d) => d.featured) || BUSINESS_CONFIG.destinations[0];
  const others = BUSINESS_CONFIG.destinations.filter((d) => !d.featured);

  return (
    <section id="tours" className="relative py-24 sm:py-32 bg-[#EFE9DE]/50 border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
              <Compass className="h-3.5 w-3.5" />
              Regional Pilgrimage & Heritage
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Explore From Indore
            </h2>
            <p className="text-base text-[#667085] max-w-xl">
              Sacred shrines, historic river ghats, and royal hilltop fortresses connected directly with dedicated chauffeur service.
            </p>
          </div>

          <div className="text-xs text-[#667085] flex items-center gap-2 self-start sm:self-auto bg-white/80 px-4 py-2 rounded-full border border-[#111827]/10 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-[#C79B4B]" />
            <span>Doorstep pickup across all Indore localities</span>
          </div>
        </div>

        {/* Asymmetrical Layout: 1 Dominant Card (7 cols) + 3 Side Stacked Cards (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Featured Large Card */}
          <FeaturedDestinationCard 
            dest={featured} 
            onPlanTrip={() => onPlanTrip(featured.name)} 
          />

          {/* Right Side: Stack of 3 Destination Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {others.map((dest) => (
              <SecondaryDestinationCard 
                key={dest.id} 
                dest={dest} 
                onPlanTrip={() => onPlanTrip(dest.name)} 
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

interface DestinationCardProps {
  dest: Destination;
  onPlanTrip: () => void;
}

const FeaturedDestinationCard: React.FC<DestinationCardProps> = ({ dest, onPlanTrip }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="lg:col-span-7 group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#111827]/12 bg-[#FFFDF9] shadow-[0_4px_24px_-4px_rgba(17,24,39,0.05)] transition-all duration-300 hover:border-[#C79B4B]/50 hover:shadow-[0_16px_40px_-8px_rgba(17,24,39,0.10)]"
    >
      {/* Featured Photo Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#EFE9DE]">
        {!imageError ? (
          <img
            src={dest.imageUrl}
            alt={dest.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] text-[#C79B4B] font-serif text-3xl font-bold">
            Mahakaleshwar
          </div>
        )}

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/25 to-transparent" />

        {/* Badges Over Image */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#111827] shadow-sm backdrop-blur-md">
            Featured Pilgrimage
          </span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#EFE9DE]">
            {dest.subtitle}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
            {dest.name}
          </h3>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-6 sm:p-8 space-y-4">
        <p className="text-sm text-[#667085] leading-relaxed">
          {dest.description}
        </p>

        {/* Highlight points */}
        <div className="space-y-1.5 pt-2 border-t border-[#111827]/8">
          {dest.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#667085]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Real Premium CTA Button */}
        <div className="pt-3 border-t border-[#111827]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onPlanTrip}
            className="group/btn flex h-[46px] w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-[#C79B4B]/50 bg-[#FFFDF9] px-5 text-xs font-bold uppercase tracking-wider text-[#111827] shadow-2xs transition-all duration-250 ease-out hover:border-[#C79B4B] hover:bg-[#C79B4B] hover:text-white hover:shadow-[0_4px_16px_rgba(199,155,75,0.25)] hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
          >
            <span>Explore Journey</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 ease-out group-hover/btn:translate-x-1" />
          </button>
          <span className="text-xs font-mono text-[#667085] self-center sm:self-auto shrink-0">{dest.approxDistanceNote}</span>
        </div>
      </div>
    </div>
  );
};

const SecondaryDestinationCard: React.FC<DestinationCardProps> = ({ dest, onPlanTrip }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative flex flex-col sm:flex-row items-stretch overflow-hidden rounded-[20px] border border-[#111827]/10 bg-[#FFFDF9] shadow-[0_2px_12px_rgba(17,24,39,0.03)] transition-all duration-300 hover:border-[#C79B4B]/40 hover:shadow-[0_8px_24px_rgba(17,24,39,0.07)]"
    >
      {/* Side Image */}
      <div className="relative w-full sm:w-44 h-36 sm:h-auto shrink-0 overflow-hidden bg-[#EFE9DE]">
        {!imageError ? (
          <img
            src={dest.imageUrl}
            alt={dest.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-106"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] text-[#C79B4B] text-xs font-bold">
            {dest.name}
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#667085] mb-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C79B4B]">
              {dest.subtitle}
            </span>
            <span className="font-mono text-[10px]">{dest.approxDistanceNote}</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#C79B4B] transition-colors">
            {dest.name}
          </h4>
          <p className="mt-1 text-xs text-[#667085] line-clamp-2 leading-relaxed">
            {dest.description}
          </p>
        </div>

        {/* Real Premium Button */}
        <div className="mt-3.5 pt-2.5 border-t border-[#111827]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={onPlanTrip}
            className="group/btn inline-flex h-[44px] sm:h-[40px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#C79B4B]/45 bg-[#FFFDF9] px-4 text-xs font-bold uppercase tracking-wider text-[#111827] shadow-2xs transition-all duration-250 ease-out hover:border-[#C79B4B] hover:bg-[#C79B4B] hover:text-white hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
          >
            <span>Explore Journey</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 ease-out group-hover/btn:translate-x-1" />
          </button>
          <span className="text-[10px] text-[#667085] flex items-center justify-center sm:justify-start gap-1 shrink-0">
            <MapPin className="h-3 w-3 text-[#C79B4B]" />
            From Indore
          </span>
        </div>
      </div>
    </div>
  );
};
