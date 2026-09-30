import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_CONFIG } from '../data/config.ts';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <div className="fixed z-40 pointer-events-none select-none right-4 sm:right-6 bottom-4 sm:bottom-6 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)]">
      
      {/* Back to Top Button — Positioned ABOVE WhatsApp with smooth entrance/exit */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={scrollToTop}
            className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#20221F]/12 bg-[#FFFDF9] text-[#20221F] shadow-[0_4px_16px_rgba(32,34,31,0.08)] transition-all duration-200 hover:border-[#B89452] hover:bg-white hover:text-[#B89452] hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Tooltip (Desktop only) */}
      {!tooltipDismissed && (
        <div className="pointer-events-auto mb-1 hidden sm:flex items-center gap-2 rounded-full border border-[#20221F]/10 bg-[#FFFDF9] px-3.5 py-1.5 text-xs text-[#20221F] shadow-[0_4px_14px_rgba(32,34,31,0.08)] backdrop-blur-md animate-in fade-in">
          <span className="font-medium">Chat with DS Travels</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#25D366] hover:underline"
          >
            Open →
          </a>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#686963] hover:text-[#20221F] p-0.5 cursor-pointer ml-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* WhatsApp Button — Sits below Back to Top */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_18px_rgba(37,211,102,0.35)] transition-all duration-200 hover:scale-105 hover:shadow-[0_6px_22px_rgba(37,211,102,0.45)] active:scale-95 focus:outline-none"
        aria-label="Chat with DS Travels Indore on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="h-6 w-6 text-white transition-transform duration-200 group-hover:scale-105" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping opacity-20 pointer-events-none" />
      </a>
    </div>
  );
};
