import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [data-interactive="true"]');
        setIsHovered(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Primary subtle champagne gold dot cursor */}
      <div
        className="pointer-events-none fixed z-9999 rounded-full bg-[#B89452] transition-transform duration-75 ease-out"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          opacity: 0.9,
        }}
      />
      {/* Trailing expansion ring on hover */}
      <div
        className={`pointer-events-none fixed z-9998 rounded-full border border-[#B89452]/40 transition-all duration-200 ease-out ${
          isHovered ? 'scale-150 bg-[#B89452]/10 border-[#B89452]' : 'scale-100'
        }`}
        style={{
          width: '26px',
          height: '26px',
          transform: `translate3d(${position.x - 13}px, ${position.y - 13}px, 0)`,
        }}
      />
    </>
  );
};
