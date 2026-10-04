import React from 'react';

/**
 * ============================================================================
 * SARKAR SEVA & GOVERNMENT OF MAHARASHTRA OFFICIAL LOGOS
 * ============================================================================
 * These vector SVGs reside in `/public/` and are automatically bundled into the
 * root of every production build so all visitors can see them permanently.
 * ============================================================================
 */
export const DEFAULT_LOGO_PATH = '/logo.svg';
export const MAHARASHTRA_EMBLEM_PATH = '/emblem-maharashtra.svg';
export const MAHARASHTRA_SEAL_PATH = '/seal-maharashtra.svg';
export const INDIA_FLAG_PATH = '/flag-india.svg';

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textClassName?: string;
  customSrc?: string;
  className?: string;
  onClick?: () => void;
}

export const SarkarSevaLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  textClassName = '',
  customSrc,
  className = '',
  onClick,
}) => {
  const logoSrc = customSrc || DEFAULT_LOGO_PATH;

  const sizeStyles = {
    xs: { icon: 'w-6 h-6', text: 'text-xs' },
    sm: { icon: 'w-7 h-7', text: 'text-sm' },
    md: { icon: 'w-9 h-9', text: 'text-lg' },
    lg: { icon: 'w-11 h-11', text: 'text-xl' },
    xl: { icon: 'w-14 h-14', text: 'text-2xl' },
  }[size];

  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2.5 ${onClick ? 'cursor-pointer group' : ''} ${className}`}
    >
      {/* Official Maharashtra & India Composite Emblem */}
      <div
        className={`${sizeStyles.icon} shrink-0 rounded-full overflow-hidden shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform flex items-center justify-center bg-white border border-slate-200 p-0.5`}
      >
        <img
          src={logoSrc}
          alt="Government of Maharashtra & Sarkar Seva Emblem"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black tracking-tight text-inherit transition-colors ${sizeStyles.text} ${textClassName}`}
          >
            Sarkar Seva
          </span>
          <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
            Govt. of Maharashtra
          </span>
        </div>
      )}
    </div>
  );
};

/**
 * Dedicated Header Bar Component that showcases all 3 official government logos:
 * 1. Indian National Flag (Tiranga)
 * 2. National Emblem of India (Government of Maharashtra)
 * 3. Official State Seal of Maharashtra (Rajmudra & Samai Lamp)
 */
export const GovOfficialLogosBar: React.FC<{
  variant?: 'light' | 'dark' | 'transparent';
  className?: string;
  onClickHome?: () => void;
}> = ({ variant = 'light', className = '', onClickHome }) => {
  const isDark = variant === 'dark';

  return (
    <div
      onClick={onClickHome}
      className={`flex items-center space-x-3.5 py-1 px-2 rounded-xl transition-all ${
        onClickHome ? 'cursor-pointer group' : ''
      } ${className}`}
    >
      {/* 1. Indian National Flag (Tiranga) */}
      <div
        className="w-8 h-5.5 rounded-sm overflow-hidden shadow-xs border border-slate-300/60 shrink-0 group-hover:scale-105 transition-transform"
        title="National Flag of India (Tiranga)"
      >
        <img
          src={INDIA_FLAG_PATH}
          alt="National Flag of India"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Official National Emblem of India (Government of Maharashtra) */}
      <div
        className="w-7 h-7 bg-white rounded-full p-0.5 border border-slate-200 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
        title="National Emblem of India • Government of Maharashtra"
      >
        <img
          src={MAHARASHTRA_EMBLEM_PATH}
          alt="Government of Maharashtra Emblem"
          className="w-full h-full object-contain"
        />
      </div>

      {/* 3. Official State Seal of Maharashtra (Rajmudra) */}
      <div
        className="w-7 h-7 bg-white rounded-full p-0.5 border border-slate-200 shadow-xs shrink-0 group-hover:scale-105 transition-transform"
        title="State Seal of Maharashtra (Rajmudra)"
      >
        <img
          src={MAHARASHTRA_SEAL_PATH}
          alt="Official Seal of Maharashtra"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Branding */}
      <div className="flex flex-col leading-tight border-l border-slate-300/60 pl-2.5">
        <span
          className={`font-black text-xs md:text-sm tracking-tight transition-colors ${
            isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
          }`}
        >
          Sarkar Seva
        </span>
        <span
          className={`text-[9px] font-bold tracking-wider uppercase ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Government of Maharashtra
        </span>
      </div>
    </div>
  );
};
