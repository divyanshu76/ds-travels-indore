import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG, ServiceItem } from '../data/config.ts';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#F7F4EE] overflow-hidden">
      
      <div className="premium-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
              Core Capabilities
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Travel, Your Way.
            </h2>
            <p className="text-base text-[#667085] max-w-xl">
              From everyday local rides to long-distance journeys across India.
            </p>
          </div>

          <div className="text-xs text-[#667085] border-l border-[#111827]/15 pl-4 py-1 max-w-xs hidden md:block">
            Authorized All India Permit travel with prompt doorstep pickup and seasoned highway chauffeurs.
          </div>
        </div>

        {/* 3 Distinct Service Blocks with Large Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.services.map((service: ServiceItem) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onSelect={() => onSelectService(service.title)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#111827]/10 bg-[#FFFDF9] shadow-[0_4px_20px_-2px_rgba(17,24,39,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C79B4B]/50 hover:shadow-[0_16px_36px_-6px_rgba(17,24,39,0.08)]"
    >
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE9DE]">
        {!imageError ? (
          <img
            src={service.imageUrl}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-[#EFE9DE] text-[#C79B4B] font-serif text-3xl font-bold">
            {service.number}
          </div>
        )}

        {/* Gradient Scrim & Number Tag */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/15 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#111827] shadow-sm backdrop-blur-md">
            {service.badge}
          </span>
        </div>

        <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <span className="font-serif text-2xl font-light text-[#EFE9DE]">
              {service.number}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 space-y-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-wider text-[#C79B4B] font-semibold">
            {service.tagline}
          </p>
          <p className="text-sm text-[#667085] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Feature Checkpoints */}
        <div className="space-y-2 pt-3 border-t border-[#111827]/8">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#667085]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#C79B4B] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Real Premium CTA Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onSelect}
            className="group/btn relative flex h-[46px] w-full items-center justify-between rounded-xl border border-[#C79B4B]/40 bg-[#FFFDF9] px-5 text-xs font-bold tracking-wider uppercase text-[#111827] shadow-[0_2px_8px_rgba(17,24,39,0.03)] transition-all duration-250 ease-out hover:border-[#C79B4B] hover:bg-[#C79B4B] hover:text-white hover:shadow-[0_4px_16px_rgba(199,155,75,0.25)] hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
          >
            <span>Enquire Service</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFE9DE] text-[#111827] transition-all duration-200 group-hover/btn:bg-white group-hover/btn:text-[#C79B4B] group-hover/btn:translate-x-1">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
