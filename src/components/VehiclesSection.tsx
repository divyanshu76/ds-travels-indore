import React, { useState } from 'react';
import { Users, Briefcase, Wind, Check, ArrowRight, Shield } from 'lucide-react';
import { BUSINESS_CONFIG, VehicleOption } from '../data/config.ts';

interface VehiclesSectionProps {
  onSelectVehicle: (category: string) => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Fleet' },
    { id: 'SMALL', label: 'Small Cars' },
    { id: 'SEDAN', label: 'Sedans' },
    { id: 'SUV', label: 'SUVs' },
    { id: 'LARGE GROUPS', label: 'Large Vehicles' },
  ];

  const filteredVehicles = activeCategory === 'ALL'
    ? BUSINESS_CONFIG.vehicles
    : BUSINESS_CONFIG.vehicles.filter((v) => v.category === activeCategory);

  return (
    <section id="vehicles" className="relative py-24 sm:py-32 bg-[#F7F4EE] border-t border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
              <Shield className="h-3.5 w-3.5" />
              Fleet Options
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Choose Your Ride
            </h2>
            <p className="text-base text-[#667085] max-w-xl">
              From compact city cars to executive sedans, spacious touring SUVs, and high-capacity group travel vans.
            </p>
          </div>

          {/* Transparency Badge */}
          <div className="rounded-2xl border border-[#111827]/10 bg-[#FFFDF9] px-4 py-3 text-xs text-[#667085] max-w-xs shadow-2xs">
            <span className="text-[#C79B4B] font-bold">Fleet Note: </span>
            Specific vehicle models are matched to your itinerary requirements, passenger count, and highway luggage needs.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-[#111827]/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C79B4B] text-white shadow-sm'
                  : 'bg-white text-[#667085] hover:text-[#111827] hover:bg-[#EFE9DE] border border-[#111827]/8'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile Horizontal Swipe Carousel + Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible no-scrollbar">
          {filteredVehicles.map((vehicle: VehicleOption) => (
            <div 
              key={vehicle.id} 
              className="min-w-[85vw] sm:min-w-[320px] md:min-w-0 snap-center shrink-0 flex"
            >
              <VehicleCard 
                vehicle={vehicle} 
                onSelect={() => onSelectVehicle(vehicle.category)} 
              />
            </div>
          ))}
        </div>

        {/* Swipe hint on mobile */}
        <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-[#667085] md:hidden">
          <span>Swipe horizontally to browse categories</span>
          <span>→</span>
        </div>

      </div>
    </section>
  );
};

interface VehicleCardProps {
  vehicle: VehicleOption;
  onSelect: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] border border-[#111827]/10 bg-[#FFFDF9] shadow-[0_4px_16px_-2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:border-[#C79B4B]/40 hover:shadow-[0_12px_30px_-6px_rgba(17,24,39,0.08)]">
      
      {/* Vehicle Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DE]">
        {!imageError ? (
          <img
            src={vehicle.imageUrl}
            alt={vehicle.namePlaceholder}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] text-[#111827] font-bold text-xs">
            {vehicle.category}
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#111827] shadow-sm backdrop-blur-md">
            {vehicle.category}
          </span>
        </div>

        <div className="absolute top-3.5 right-3.5 z-10">
          <span className="rounded-full bg-[#111827]/80 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-md">
            {vehicle.specs.comfortLevel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold tracking-tight text-[#111827] group-hover:text-[#C79B4B] transition-colors">
              {vehicle.namePlaceholder}
            </h3>
          </div>

          <p className="text-xs text-[#667085] leading-relaxed line-clamp-1">
            {vehicle.description}
          </p>

          {/* Specs Row */}
          <div className="grid grid-cols-3 gap-1 my-3.5 py-2 border-y border-[#111827]/8 text-center bg-[#F7F4EE]/60 rounded-xl">
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-[#667085] mb-0.5">Pass</span>
              <span className="text-[11px] text-[#111827] font-bold">{vehicle.specs.passengers}</span>
            </div>
            <div className="flex flex-col items-center border-x border-[#111827]/8">
              <span className="text-[10px] text-[#667085] mb-0.5">Bags</span>
              <span className="text-[11px] text-[#111827] font-bold">{vehicle.specs.luggage}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-[#667085] mb-0.5">A/C</span>
              <span className="text-[11px] text-[#111827] font-bold">{vehicle.specs.ac}</span>
            </div>
          </div>

          {/* Features Checkpoints */}
          <div className="space-y-1.5">
            {vehicle.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] text-[#111827] font-medium">
                <Check className="h-3 w-3 text-[#C79B4B] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={onSelect}
            className="group/btn relative flex h-[44px] w-full items-center justify-between rounded-xl border border-[#C79B4B]/40 bg-[#FFFDF9] px-4 text-xs font-bold tracking-wider uppercase text-[#111827] shadow-[0_2px_8px_rgba(17,24,39,0.03)] transition-all duration-250 ease-out hover:border-[#C79B4B] hover:bg-[#C79B4B] hover:text-white hover:shadow-[0_4px_16px_rgba(199,155,75,0.25)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
          >
            <span>Enquire Fleet</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFE9DE] text-[#111827] transition-all duration-200 group-hover/btn:bg-white group-hover/btn:text-[#C79B4B] group-hover/btn:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>

    </div>
  );
};
