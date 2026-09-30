/**
 * DS TRAVELS INDORE — Master Application Component
 * Premium Light Luxury Travel Theme with Mobile-First Polish
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { DestinationsSection } from './components/DestinationsSection.tsx';
import { DestinationPreview } from './components/DestinationPreview.tsx';
import { VehiclesSection } from './components/VehiclesSection.tsx';
import { WhyUsSection } from './components/WhyUsSection.tsx';
import { JourneyProcess } from './components/JourneyProcess.tsx';
import { EnquirySection } from './components/EnquirySection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';
import { CustomCursor } from './components/CustomCursor.tsx';
import { Preloader } from './components/Preloader.tsx';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState<string>('');

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTours = () => {
    const el = document.getElementById('tours');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanTrip = (destinationName: string) => {
    setSelectedDestination(destinationName);
    scrollToEnquiry();
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedDestination(serviceName);
    scrollToEnquiry();
  };

  const handleSelectVehicle = (category: string) => {
    setSelectedVehicleCategory(category);
    scrollToEnquiry();
  };

  return (
    <div className="relative min-h-screen bg-[#F7F4EE] text-[#111827] selection:bg-[#C29A52] selection:text-white">
      {/* Luxury Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Circular Navbar */}
      <Navbar onOpenBooking={scrollToEnquiry} />

      {/* Hero Section */}
      <Hero 
        onBookClick={scrollToEnquiry} 
        onExploreToursClick={scrollToTours} 
      />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Core Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Local Destinations */}
      <DestinationsSection onPlanTrip={handlePlanTrip} />

      {/* Mahakaleshwar Pilgrimage Spotlight */}
      <DestinationPreview onPlanTrip={handlePlanTrip} />

      {/* Vehicle Fleet Showcase */}
      <VehiclesSection onSelectVehicle={handleSelectVehicle} />

      {/* Why DS Travels Principles */}
      <WhyUsSection />

      {/* 4-Step Journey Process */}
      <JourneyProcess />

      {/* Lead Enquiry / Booking Section (Option B: #EFE9DE background with #27352F container) */}
      <EnquirySection 
        initialDestination={selectedDestination}
        initialVehicleCategory={selectedVehicleCategory}
      />

      {/* Editorial About Section */}
      <AboutSection />

      {/* Testimonials Placeholder Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection onOpenBooking={scrollToEnquiry} />

      {/* Footer */}
      <Footer />

      {/* Unified Floating Actions: WhatsApp + Back to Top */}
      <FloatingActions />
    </div>
  );
}
