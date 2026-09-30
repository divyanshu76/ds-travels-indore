import React from 'react';
import { ArrowRight, Clock, Shield, Sparkles, Navigation, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';

interface DestinationPreviewProps {
  onPlanTrip: (destName: string) => void;
}

export const DestinationPreview: React.FC<DestinationPreviewProps> = ({ onPlanTrip }) => {
  const mahakal = BUSINESS_CONFIG.destinations.find((d) => d.id === 'ujjain') || BUSINESS_CONFIG.destinations[0];

  return (
    <section className="relative py-20 sm:py-28 bg-[#F7F4EE] border-b border-[#111827]/10 overflow-hidden">
      
      <div className="premium-container">
        
        <div className="rounded-[32px] border border-[#111827]/12 bg-[#FFFDF9] p-7 sm:p-12 lg:p-14 shadow-[0_8px_32px_rgba(17,24,39,0.04)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Story & Trip Highlights (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C79B4B]">
                <Sparkles className="h-3.5 w-3.5" />
                Featured Sacred Journey
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
                From Indore to <br />
                <span className="text-[#C79B4B]">Mahakaleshwar</span>
              </h3>

              <p className="text-base text-[#667085] leading-relaxed max-w-xl">
                Experience a peaceful, punctual pilgrimage from Indore to the holy city of Ujjain. 
                Whether you are attending the sacred Bhasma Aarti, exploring the revered Shri Mahakal Lok corridor, 
                or visiting Harsiddhi and Kal Bhairav temples, our dedicated chauffeurs ensure a smooth, respectful journey.
              </p>

              {/* Informational checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0 mt-0.5">
                    <Navigation className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Direct 4-Lane Highway
                    </h5>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Smooth transit from your doorstep in Indore straight to the temple premises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0 mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Flexible Darshan Timing
                    </h5>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Vehicle and chauffeur wait during your temple darshan and return.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0 mt-0.5">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Multiple Vehicle Classes
                    </h5>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Compact cars, executive sedans, and family SUVs available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C79B4B]/15 text-[#C79B4B] shrink-0 mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Direct Dispatch Desk
                    </h5>
                    <p className="text-xs text-[#667085] mt-0.5">
                      Direct driver contact and prompt doorstep pickup coordination.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onPlanTrip(mahakal.name)}
                  className="group flex h-[48px] items-center justify-center gap-2 rounded-xl bg-[#C79B4B] px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-250 ease-out hover:bg-[#D3AA5A] hover:shadow-[0_4px_16px_rgba(199,155,75,0.3)] hover:scale-[1.015] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] cursor-pointer"
                >
                  <span>Plan This Trip</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                  className="flex h-[48px] items-center justify-center gap-2 rounded-xl border border-[#111827]/15 bg-white px-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111827] hover:border-[#C79B4B] hover:text-[#C79B4B] transition-colors shadow-2xs"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C79B4B]" />
                  <span>Call {BUSINESS_CONFIG.contact.phone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Route Spec Box in Warm Stone Tone (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-[24px] border border-[#111827]/10 bg-[#EFE9DE]/70 p-6 sm:p-7 space-y-5">
                
                <div className="flex items-center justify-between pb-3.5 border-b border-[#111827]/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C79B4B]">
                    Route Specifications
                  </span>
                  <span className="text-xs text-[#667085]">
                    Indore Origin
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between py-1.5 border-b border-[#111827]/6 text-xs">
                    <span className="text-[#667085]">Pickup Location</span>
                    <span className="text-[#111827] font-semibold">Anywhere in Indore</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#111827]/6 text-xs">
                    <span className="text-[#667085]">Target Destination</span>
                    <span className="text-[#111827] font-semibold">Ujjain / Mahakaleshwar</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#111827]/6 text-xs">
                    <span className="text-[#667085]">Approximate Distance</span>
                    <span className="text-[#C79B4B] font-mono font-bold">~55 km (one way)</span>
                  </div>

                  <div className="flex items-center justify-between py-1.5 border-b border-[#111827]/6 text-xs">
                    <span className="text-[#667085]">Permit Status</span>
                    <span className="text-[#111827] font-semibold">All India Commercial Permit</span>
                  </div>

                  <div className="flex items-center justify-between py-1 text-xs">
                    <span className="text-[#667085]">Trip Options</span>
                    <span className="text-[#111827] font-semibold">One-Way / Same Day Return / Extended</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/90 p-4 text-[11px] text-[#667085] leading-relaxed border border-[#111827]/8 shadow-2xs">
                  <span className="text-[#C79B4B] font-bold">Customizable Itinerary: </span>
                  Option to include Kaal Bhairav, Ram Ghat on the Shipra River, and Mangalnath temple upon request during enquiry.
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
