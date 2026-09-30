import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Calendar, MapPin, Users, Car, AlertCircle, Clock, Loader2, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_CONFIG } from '../data/config.ts';

interface EnquirySectionProps {
  initialDestination?: string;
  initialVehicleCategory?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  initialDestination = '',
  initialVehicleCategory = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: 'Indore',
    destination: initialDestination,
    travelDate: '',
    returnDate: '',
    passengers: '1-4',
    vehiclePreference: initialVehicleCategory || 'SEDAN',
    tripType: 'Outstation',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    if (initialDestination) {
      setFormData((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  React.useEffect(() => {
    if (initialVehicleCategory) {
      setFormData((prev) => ({ ...prev, vehiclePreference: initialVehicleCategory }));
    }
  }, [initialVehicleCategory]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.destination.trim()) {
      setError('Please provide your name, phone number, and intended destination.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    setSubmitting(true);
    // Smooth transition simulation
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Ride Enquiry — DS Travels Indore*%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Traveler')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Pickup:* ${encodeURIComponent(formData.pickupLocation || 'Indore')}%0A` +
      `*Destination:* ${encodeURIComponent(formData.destination || 'Indore Tour')}%0A` +
      `*Travel Date:* ${encodeURIComponent(formData.travelDate || 'Not specified')}%0A` +
      (formData.returnDate ? `*Return Date:* ${encodeURIComponent(formData.returnDate)}%0A` : '') +
      `*Passengers:* ${encodeURIComponent(formData.passengers)}%0A` +
      `*Vehicle Preference:* ${encodeURIComponent(formData.vehiclePreference)}%0A` +
      (formData.message ? `*Notes:* ${encodeURIComponent(formData.message)}` : '');

    return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${text}`;
  };

  return (
    <section 
      id="enquiry" 
      className="relative py-20 sm:py-28 lg:py-32 bg-[#F1ECE2] text-[#172033] border-t border-[rgba(23,32,51,0.10)] overflow-hidden"
    >
      {/* Background Decorative Route Grid & Atmospheric Accents */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M 0 420 Q 380 260, 720 390 T 1440 300" stroke="#C79B4B" strokeWidth="1" strokeDasharray="5 6" opacity="0.45" />
          <path d="M 0 540 Q 440 400, 860 510 T 1440 420" stroke="rgba(23,32,51,0.12)" strokeWidth="1" opacity="1" />
          <circle cx="720" cy="390" r="3.5" fill="#C79B4B" opacity="0.8" />
          <circle cx="1100" cy="340" r="3" fill="#C79B4B" opacity="0.8" />
        </svg>
      </div>

      <div className="premium-container relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
            <Clock className="h-3.5 w-3.5" />
            Prompt Concierge Dispatch
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172033]">
            Where Are You Going?
          </h2>
          <p className="text-base text-[#68738A] leading-relaxed">
            Share your itinerary details for local Indore travel, pilgrimage yatras to Ujjain and Omkareshwar, or long-distance outstation travel across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Communication & Trust Cards (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* WhatsApp Quick Link */}
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 sm:p-5 rounded-[22px] border border-[#C79B4B]/30 bg-[#FFFDF8] text-[#172033] shadow-[0_4px_16px_rgba(17,24,39,0.06)] hover:shadow-[0_8px_24px_rgba(199,155,75,0.14)] hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm shrink-0">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#172033]">Chat on WhatsApp</div>
                  <div className="text-xs text-[#68738A]">Instant fare & vehicle availability</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#C79B4B] group-hover:translate-x-1 transition-transform">
                Chat →
              </span>
            </a>

            {/* Direct Phone Call Link */}
            <a
              href={`tel:${BUSINESS_CONFIG.contact.phone}`}
              className="flex items-center justify-between p-4 sm:p-5 rounded-[22px] border border-[rgba(23,32,51,0.10)] bg-[#FFFDF8] text-[#172033] shadow-[0_4px_16px_rgba(17,24,39,0.03)] hover:border-[#C79B4B]/50 hover:shadow-[0_8px_24px_rgba(199,155,75,0.12)] hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C79B4B] text-white shadow-sm shrink-0 font-bold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#172033]">Call Direct</div>
                  <div className="text-xs text-[#68738A]">Speak directly with DS Travels desk</div>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#C79B4B]">
                {BUSINESS_CONFIG.contact.phone}
              </span>
            </a>

            {/* Reassuring Operational Note */}
            <div className="rounded-[22px] border border-[rgba(23,32,51,0.10)] bg-[#FFFDF8] p-5 space-y-2 shadow-[0_4px_16px_rgba(17,24,39,0.02)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C79B4B]">
                <ShieldCheck className="h-4 w-4" />
                <span>Transparent Fare Guarantee</span>
              </div>
              <p className="text-xs text-[#68738A] leading-relaxed">
                After you submit your trip requirements, our chauffeur coordinator contacts you with vehicle confirmation and all-inclusive transparent rates. No advance online payment is required for enquiry.
              </p>
            </div>

          </div>

          {/* Right Column: Premium Chauffeur Reservation Console in Light Warm Premium */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] border border-[rgba(23,32,51,0.10)] bg-[#FFFDF8] text-[#172033] p-5 sm:p-8 lg:p-9 shadow-[0_20px_60px_rgba(23,32,51,0.07)] relative overflow-hidden">
              
              {/* Subtle card decorative corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79B4B]/8 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                /* Submission Confirmation State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C79B4B]/20 text-[#C79B4B]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#172033]">
                      Enquiry Received
                    </h3>
                    <p className="text-sm text-[#68738A] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#172033]">{formData.name}</strong>. We have logged your reservation enquiry for travel to <strong className="text-[#C79B4B]">{formData.destination}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="rounded-2xl bg-[#F3EFE7] p-4 sm:p-5 text-left border border-[rgba(23,32,51,0.10)] space-y-2 text-xs text-[#68738A]">
                    <div className="flex justify-between py-1.5 border-b border-[rgba(23,32,51,0.07)]">
                      <span className="text-[#68738A]/70">Contact Number:</span>
                      <span className="font-mono text-[#172033] font-medium">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[rgba(23,32,51,0.07)]">
                      <span className="text-[#68738A]/70">Route:</span>
                      <span className="text-[#172033] font-medium">{formData.pickupLocation} ➔ {formData.destination}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[rgba(23,32,51,0.07)]">
                      <span className="text-[#68738A]/70">Vehicle Class:</span>
                      <span className="text-[#C79B4B] font-bold">{formData.vehiclePreference}</span>
                    </div>
                    {formData.travelDate && (
                      <div className="flex justify-between py-1.5">
                        <span className="text-[#68738A]/70">Travel Date:</span>
                        <span className="text-[#172033] font-medium">{formData.travelDate}</span>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Forwarding Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#C79B4B] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#172033] hover:bg-[#D3AA5A] transition-all shadow-md active:scale-98"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Forward to WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider text-[#68738A] hover:text-[#172033] py-3 px-5 rounded-xl border border-[rgba(23,32,51,0.12)] hover:border-[rgba(23,32,51,0.25)] transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Form Console */
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Eyebrow & Console Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[rgba(23,32,51,0.10)] gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C79B4B]">
                        Chauffeur Reservation Console
                      </span>
                      <div className="text-[11px] text-[#B9BFCA]/70 mt-0.5">
                        Doorstep Indore Pickup • Verified Chauffeurs • Transparent Pricing
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C79B4B] bg-[#C79B4B]/15 px-2.5 py-1 rounded-full self-start sm:self-auto">
                      All India Permit
                    </span>
                  </div>

                  {error && (
                    <div className="rounded-xl border border-red-400/40 bg-red-50 p-3 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Section 1: Passenger Information */}
                  <div className="space-y-3 pt-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#C79B4B] font-semibold flex items-center gap-2">
                      <span>1. Passenger Contact</span>
                      <span className="h-px flex-1 bg-[rgba(23,32,51,0.10)]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Verma"
                          required
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] placeholder-[#8790A0] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9876543210"
                          required
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm font-mono text-[#172033] placeholder-[#8790A0] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Itinerary & Destination */}
                  <div className="space-y-3 pt-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#C79B4B] font-semibold flex items-center gap-2">
                      <span>2. Route & Journey Dates</span>
                      <span className="h-px flex-1 bg-[rgba(23,32,51,0.10)]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleChange}
                          placeholder="Indore (Area / Locality)"
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] placeholder-[#8790A0] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <Compass className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Target Destination *
                        </label>
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="e.g. Ujjain / Omkareshwar / Bhopal"
                          required
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] placeholder-[#8790A0] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Departure Date
                        </label>
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleChange}
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Return Date (Optional)
                        </label>
                        <input
                          type="date"
                          name="returnDate"
                          value={formData.returnDate}
                          onChange={handleChange}
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Passenger Count & Fleet Choice */}
                  <div className="space-y-3 pt-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#C79B4B] font-semibold flex items-center gap-2">
                      <span>3. Vehicle & Seating</span>
                      <span className="h-px flex-1 bg-[rgba(23,32,51,0.10)]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Passenger Count
                        </label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleChange}
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="1-2">1 to 2 Passengers</option>
                          <option value="3-4">3 to 4 Passengers</option>
                          <option value="5-7">5 to 7 Passengers (SUV)</option>
                          <option value="8+">8+ Group Travelers (Tempo/Van)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#172033] mb-1.5 flex items-center gap-1.5">
                          <Car className="h-3.5 w-3.5 text-[#C79B4B]" />
                          Vehicle Category
                        </label>
                        <select
                          name="vehiclePreference"
                          value={formData.vehiclePreference}
                          onChange={handleChange}
                          className="w-full min-h-[48px] h-12 rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] px-4 text-sm text-[#172033] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:outline-none transition-all cursor-pointer"
                        >
                          <option value="SMALL">Small / Compact Car</option>
                          <option value="SEDAN">Executive Sedan (Dzire / Etios / Aura)</option>
                          <option value="SUV">Spacious SUV (Ertiga / Innova / Carens)</option>
                          <option value="LARGE GROUPS">Large Group Van (Urbania / Winger / Tempo)</option>
                          <option value="RECOMMEND">Recommend best option for route</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Notes */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-medium text-[#172033]">
                      Trip Notes / Special Requests (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="e.g. Early morning Bhasma Aarti pickup, specific halts, luggage requirements..."
                      className="w-full rounded-xl border border-[rgba(23,32,51,0.12)] bg-[#F3EFE7] p-3 text-sm text-[#172033] placeholder-[#8790A0] focus:border-[#C79B4B] focus:ring-2 focus:ring-[#C79B4B]/25 focus:bg-[#FFFDF8] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submission Button: Large Premium CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative flex h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#C79B4B] px-6 text-sm font-bold tracking-wider uppercase text-[#172033] shadow-[0_4px_18px_rgba(199,155,75,0.30)] transition-all duration-250 ease-out hover:bg-[#D3AA5A] hover:shadow-[0_8px_26px_rgba(199,155,75,0.40)] hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFDF8] cursor-pointer disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-[#172033]" />
                          <span>Processing Reservation...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="h-4 w-4 transition-transform duration-250 ease-out group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
