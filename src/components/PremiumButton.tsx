import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  showArrow?: boolean;
  children: React.ReactNode;
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  fullWidth = false,
  icon,
  showArrow = true,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'h-[40px] sm:h-[42px] px-4 text-xs',
    md: 'h-[46px] sm:h-[48px] px-5 text-xs sm:text-sm',
    lg: 'h-[50px] sm:h-[54px] px-6 text-sm sm:text-base font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#C79B4B] text-white border border-[#C79B4B] shadow-[0_4px_16px_rgba(199,155,75,0.28)] hover:bg-[#D3AA5A] hover:border-[#D3AA5A] hover:shadow-[0_6px_22px_rgba(199,155,75,0.38)]',
    secondary:
      'bg-[#FFFDF9] text-[#111827] border border-[#C79B4B]/40 shadow-[0_2px_8px_rgba(35,52,45,0.04)] hover:bg-[#C79B4B] hover:border-[#C79B4B] hover:text-white hover:shadow-[0_4px_16px_rgba(199,155,75,0.25)]',
    dark:
      'bg-[#23342D] text-[#FFFDF7] border border-white/14 shadow-md hover:bg-[#C79B4B] hover:border-[#C79B4B] hover:text-white hover:shadow-[0_4px_16px_rgba(199,155,75,0.3)]',
    outline:
      'bg-transparent text-[#111827] border border-[#111827]/15 hover:border-[#C79B4B] hover:text-[#C79B4B] hover:bg-[#C79B4B]/5',
    whatsapp:
      'bg-[#25D366] text-white border border-[#25D366] shadow-[0_4px_16px_rgba(37,211,102,0.25)] hover:bg-[#20ba59] hover:shadow-[0_6px_22px_rgba(37,211,102,0.35)]',
  };

  return (
    <button
      disabled={disabled}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-xl font-bold tracking-wider uppercase transition-all duration-250 ease-out active:scale-[0.98] hover:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C79B4B] focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer ${
        sizeClasses[size]
      } ${variantClasses[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && (
        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-250 ease-out group-hover:translate-x-1" />
      )}
    </button>
  );
};
