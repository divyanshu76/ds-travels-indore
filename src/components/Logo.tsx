import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  const iconSize = size === 'sm' ? 28 : size === 'lg' ? 40 : 34;
  const brandTextSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';
  const subTextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  const isLightMode = variant === 'dark'; // Dark logo on light background
  const primaryTextColor = isLightMode ? '#111827' : '#F7F4EE';
  const secondaryTextColor = isLightMode ? '#667085' : '#EFE9DE';
  const goldAccent = '#C79B4B';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Refined D+S Monogram with Highway/Route Element */}
      <div 
        className={`relative flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 hover:scale-105 ${
          isLightMode 
            ? 'border border-[#20221F]/15 bg-[#FFFDF9] shadow-sm' 
            : 'border border-white/15 bg-[#1C2622]'
        }`}
        style={{ width: iconSize, height: iconSize }}
        aria-label="DS Travels Monogram"
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Subtle outer circular orbit */}
          <circle 
            cx="50" 
            cy="50" 
            r="44" 
            stroke={goldAccent} 
            strokeWidth="1.2" 
            strokeOpacity={isLightMode ? "0.4" : "0.5"} 
            strokeDasharray="3 3" 
          />
          
          {/* Letter 'D' Architecture */}
          <path 
            d="M 28 26 L 28 74 M 28 26 L 46 26 C 60 26, 62 44, 46 50 C 64 54, 62 74, 46 74 L 28 74" 
            stroke={primaryTextColor} 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Dynamic Highway Route curve forming the 'S' */}
          <path 
            d="M 68 34 C 64 26, 48 24, 42 36 C 36 46, 68 48, 64 64 C 60 76, 42 74, 34 68" 
            stroke={goldAccent} 
            strokeWidth="4.5" 
            strokeLinecap="round" 
          />
          
          {/* Central waypoint node */}
          <circle cx="50" cy="50" r="2.5" fill={goldAccent} />
        </svg>
      </div>

      {/* Brand Wordmark & City */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span 
            className={`font-semibold tracking-tight ${brandTextSize}`}
            style={{ color: primaryTextColor }}
          >
            DS
          </span>
          <span 
            className={`font-light tracking-[0.2em] ${brandTextSize}`}
            style={{ color: goldAccent }}
          >
            TRAVELS
          </span>
        </div>
        {showSubtitle && (
          <span 
            className={`font-medium tracking-[0.3em] uppercase mt-0.5 ${subTextSize}`}
            style={{ color: secondaryTextColor }}
          >
            INDORE
          </span>
        )}
      </div>
    </div>
  );
};
