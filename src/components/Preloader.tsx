import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'exit'>('initial');

  useEffect(() => {
    // Stage 1: Quick reveal
    const t1 = setTimeout(() => {
      setPhase('exit');
    }, 450);

    // Fast completion under 700ms total
    const t2 = setTimeout(() => {
      onComplete();
    }, 680);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#F7F4EE] transition-opacity duration-300 ${
        phase === 'exit' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Monogram emblem */}
        <div className="relative mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#C79B4B]/40 bg-[#FFFDF9] shadow-sm">
          <span className="font-serif text-xl font-bold tracking-wider text-[#111827]">
            DS
          </span>
          <div 
            className="absolute inset-0 rounded-full border-2 border-[#C79B4B] border-t-transparent animate-spin"
            style={{ animationDuration: '1.2s' }}
          />
        </div>

        <div>
          <span className="text-xs font-bold tracking-[0.25em] text-[#111827]">
            DS TRAVELS
          </span>
          <span className="block text-[9px] tracking-[0.35em] text-[#C79B4B] uppercase mt-0.5">
            INDORE
          </span>
        </div>
      </div>
    </div>
  );
};
