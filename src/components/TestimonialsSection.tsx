import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  locationTrip: string;
  rating: number; // 4 or 5
  quote: string;
  isSample: true;
}

export const TestimonialsSection: React.FC = () => {
  // 10 realistic Indian travel reviews (structured with data honesty metadata)
  const row1Reviews: TestimonialItem[] = [
    {
      id: 'rev-1',
      name: 'Amit Sharma',
      locationTrip: 'Indore • Ujjain Mahakal Darshan',
      rating: 5,
      quote: 'Pickup was prompt at 4:30 AM for the Bhasma Aarti. Clean sedan, respectful chauffeur, and smooth transit along the 4-lane Ujjain expressway.',
      isSample: true,
    },
    {
      id: 'rev-2',
      name: 'Priya Verma',
      locationTrip: 'Indore Airport • Corporate Transit',
      rating: 4,
      quote: 'Chauffeur was waiting right at the arrival terminal. Luggage assistance was courteous, the car was spotless, and the air conditioning was excellent.',
      isSample: true,
    },
    {
      id: 'rev-3',
      name: 'Rahul Jain',
      locationTrip: 'Indore • Omkareshwar Jyotirlinga Yatra',
      rating: 5,
      quote: 'Traveled with elderly parents. The driver was exceptionally patient with ghat halts and drove gently on the river approach roads without any rush.',
      isSample: true,
    },
    {
      id: 'rev-4',
      name: 'Neha Patel',
      locationTrip: 'Indore to Bhopal • Highway Travel',
      rating: 5,
      quote: 'Excellent highway etiquette and punctual timing for my business summit. Authorized All India Permit vehicle with pristine interior comfort.',
      isSample: true,
    },
    {
      id: 'rev-5',
      name: 'Vivek Tiwari',
      locationTrip: 'Indore to Maheshwar & Mandav Forts',
      rating: 4,
      quote: 'Chauffeur knew the best scenic viewpoints near Ahilya Fort and Jahaz Mahal. Made our one-day weekend heritage excursion effortless and memorable.',
      isSample: true,
    },
  ];

  const row2Reviews: TestimonialItem[] = [
    {
      id: 'rev-6',
      name: 'Anjali Singh',
      locationTrip: 'Indore to Ahmedabad • Outstation Trip',
      rating: 5,
      quote: 'Booked an Ertiga SUV for an interstate family visit. Chauffeur had complete paperwork and drove safely through highway toll plazas through the night.',
      isSample: true,
    },
    {
      id: 'rev-7',
      name: 'Rakesh Gupta',
      locationTrip: 'Indore City • Heritage Sightseeing',
      rating: 5,
      quote: 'Covered Rajwada, Lal Bagh Palace, and 56 Dukan with visiting relatives. The chauffeur navigated congested city avenues with great calm.',
      isSample: true,
    },
    {
      id: 'rev-8',
      name: 'Pooja Mishra',
      locationTrip: 'Indore to Pachmarhi • Hill Station Holiday',
      rating: 4,
      quote: 'Scenic road journey across Madhya Pradesh ghats. Comfortable vehicle suspension, polite driver conduct, and timely refreshment stops.',
      isSample: true,
    },
    {
      id: 'rev-9',
      name: 'Saurabh Joshi',
      locationTrip: 'Indore Railway Station • Late Night Pickup',
      rating: 5,
      quote: 'Arrived on the late night express. Chauffeur confirmed my arrival via call, met me at Platform 1 exit, and drove safely to our hotel.',
      isSample: true,
    },
    {
      id: 'rev-10',
      name: 'Nidhi Agarwal',
      locationTrip: 'Indore to Kota • Outstation Relocation',
      rating: 5,
      quote: 'Long highway journey with substantial luggage. Large boot space, courteous chauffeur behavior, and no hidden toll or tariff disputes.',
      isSample: true,
    },
  ];

  const allReviews = [...row1Reviews, ...row2Reviews];

  // Desktop Carousel Index: 0, 1, or 2 (showing 3 cards out of 5 in each row)
  const [desktopPage, setDesktopPage] = useState(0);
  const maxDesktopPages = 3; // 0: items 0,1,2 | 1: items 1,2,3 | 2: items 2,3,4

  // Mobile Single-Card Carousel Index
  const [mobileIndex, setMobileIndex] = useState(0);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped left -> next
      setMobileIndex((prev) => (prev === allReviews.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      setMobileIndex((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleDesktopPrev = () => {
    setDesktopPage((prev) => (prev === 0 ? maxDesktopPages - 1 : prev - 1));
  };

  const handleDesktopNext = () => {
    setDesktopPage((prev) => (prev === maxDesktopPages - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 sm:py-32 bg-[#EFE9DE]/50 border-t border-[#111827]/10 overflow-hidden"
    >
      {/* Decorative Warm Ivory Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C79B4B]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#23342D]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="premium-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#C79B4B]">
              <Sparkles className="h-3.5 w-3.5" />
              Traveler Experiences
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              What Our Travelers Say
            </h2>
            <p className="text-base text-[#667085] max-w-xl">
              Representative feedback illustrating traveler satisfaction across city, pilgrimage, and outstation routes.
            </p>
          </div>

          {/* Trust Indicator & Sample Tag */}
          <div className="flex flex-col sm:items-end gap-2">
            <div className="text-xs font-semibold text-[#111827] flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-[#111827]/10 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#C79B4B]" />
              <span>Comfort • Punctuality • Trusted Travel</span>
            </div>
            <span className="text-[11px] text-[#667085] font-mono">
              Sample Feedback & Passenger Experiences
            </span>
          </div>
        </div>

        {/* ---------------- MOBILE VIEW (Single Large Swipeable Card) ---------------- */}
        <div 
          className="block lg:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden rounded-[24px]">
            <TestimonialCard item={allReviews[mobileIndex]} />
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center justify-between mt-6 pt-3 border-t border-[#111827]/10">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[180px]">
              {allReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    mobileIndex === idx ? 'w-6 bg-[#C79B4B]' : 'w-2 bg-[#111827]/20 hover:bg-[#111827]/40'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileIndex((prev) => (prev === 0 ? allReviews.length - 1 : prev - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/15 bg-[#FFFDF9] text-[#111827] hover:border-[#C79B4B] hover:text-[#C79B4B] active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setMobileIndex((prev) => (prev === allReviews.length - 1 ? 0 : prev + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/15 bg-[#FFFDF9] text-[#111827] hover:border-[#C79B4B] hover:text-[#C79B4B] active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="text-center mt-3 text-[11px] text-[#667085]">
            Swipe horizontally or use arrows to view testimonials
          </div>
        </div>

        {/* ---------------- DESKTOP VIEW (Two-Row Editorial Carousel) ---------------- */}
        <div className="hidden lg:block space-y-6 marquee-container">
          
          {/* Row 1 Infinite Marquee (Left to Right) */}
          <div className="relative overflow-hidden w-[100vw] left-1/2 -ml-[50vw]">
            <div className="animate-marquee gap-6 py-2">
              <div className="flex gap-6 shrink-0">
                {row1Reviews.map((item) => (
                  <div key={`r1-1-${item.id}`} className="w-[380px] shrink-0">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
              <div className="flex gap-6 shrink-0" aria-hidden="true">
                {row1Reviews.map((item) => (
                  <div key={`r1-2-${item.id}`} className="w-[380px] shrink-0">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 Infinite Marquee (Right to Left) */}
          <div className="relative overflow-hidden w-[100vw] left-1/2 -ml-[50vw]">
            <div className="animate-marquee-reverse gap-6 py-2" style={{ animationDuration: '45s' }}>
              <div className="flex gap-6 shrink-0">
                {row2Reviews.map((item) => (
                  <div key={`r2-1-${item.id}`} className="w-[380px] shrink-0">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
              <div className="flex gap-6 shrink-0" aria-hidden="true">
                {row2Reviews.map((item) => (
                  <div key={`r2-2-${item.id}`} className="w-[380px] shrink-0">
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Footer Bar (No Pagination Needed for Marquee) */}
          <div className="pt-6 border-t border-[#111827]/10 flex justify-between items-center">
             <div className="flex items-center gap-2 text-xs text-[#667085]">
               <span className="h-1.5 w-1.5 rounded-full bg-[#C79B4B]" />
               <span>Chauffeur feedback across city transit, religious circuits, and intercity corridors</span>
             </div>
             <div className="text-[11px] font-medium tracking-wide uppercase text-[#C79B4B] opacity-80">
               Hover to Pause
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ item }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-[24px] border border-[#111827]/10 bg-[#FFFDF9] p-6 sm:p-7 shadow-[0_4px_20px_rgba(17,24,39,0.03)] transition-all duration-300 hover:border-[#C79B4B]/50 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(17,24,39,0.07)] min-h-[230px]">
      
      {/* Top Stars & Quote Icon */}
      <div>
        <div className="flex items-center justify-between mb-4">
          {/* Star Rating Display */}
          <div className="flex items-center gap-1 text-[#C79B4B]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < item.rating 
                    ? 'fill-[#C79B4B] text-[#C79B4B]' 
                    : 'text-[#111827]/20 stroke-1'
                }`}
              />
            ))}
          </div>
          <Quote className="h-5 w-5 text-[#C79B4B]/35" />
        </div>

        {/* Natural Customer-Style Feedback */}
        <p className="text-sm text-[#667085] italic leading-relaxed">
          "{item.quote}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-6 pt-4 border-t border-[#111827]/8 flex items-end justify-between">
        <div>
          <h4 className="text-sm font-bold text-[#111827]">
            {item.name}
          </h4>
          <p className="text-xs text-[#C79B4B] font-medium mt-0.5">
            {item.locationTrip}
          </p>
        </div>

        <span className="text-[10px] font-mono uppercase tracking-wider text-[#667085]/70 bg-[#111827]/5 px-2 py-0.5 rounded">
          Sample Review
        </span>
      </div>

    </div>
  );
};
