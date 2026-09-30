import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config.ts';

export const WhatsAppButton: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(BUSINESS_CONFIG.contact.whatsappDefaultMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Subtle contextual helper tooltip */}
      {!tooltipDismissed && (
        <div className="mb-2 hidden sm:flex items-center gap-2 rounded-xl border border-[#20221F]/10 bg-[#FFFDF9] px-3 py-1.5 text-xs text-[#20221F] shadow-[0_4px_16px_rgba(32,34,31,0.08)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2">
          <span>Chat with DS Travels</span>
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
            className="text-[#686963] hover:text-[#20221F] ml-1 p-0.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Small, refined floating circular button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-106 hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] focus:outline-none"
        aria-label="Chat with DS Travels Indore on WhatsApp"
      >
        <MessageSquare className="h-5 w-5 text-white transition-transform duration-200 group-hover:scale-108" />
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping opacity-20 pointer-events-none" />
      </a>
    </div>
  );
};
