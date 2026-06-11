import React from 'react';

interface KorixLogoProps {
  className?: string;
  showMotto?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
}

export default function KorixLogo({
  className = '',
  showMotto = true,
  size = 'md',
  light = false
}: KorixLogoProps) {
  // Dimensions based on size
  const iconSizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const textSizes = {
    sm: { title: 'text-lg', sub: 'text-[9px]', motto: 'text-[9px]' },
    md: { title: 'text-2xl', sub: 'text-xs', motto: 'text-xs' },
    lg: { title: 'text-4xl', sub: 'text-sm', motto: 'text-sm' },
    xl: { title: 'text-6xl', sub: 'text-lg', motto: 'text-base' }
  };

  return (
    <div id="korix-logo-wrapper" className={`flex items-center gap-3 ${className}`}>
      {/* Brand Vector (Crescent & Rocket Chevron with Stars and Stripes) */}
      <svg
        id="korix-brand-mark"
        className={`${iconSizes[size]} shrink-0 select-none animate-pulse-slow`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Navy Crescent Hoop */}
        <path
          d="M48 90C25.9086 90 8 72.0914 8 50C8 27.9086 25.9086 10 48 10C55.4522 10 62.4042 12.0401 68.3615 15.5843C65.311 17.5147 62.6105 20.0163 60.5142 22.955C56.8407 21.0394 52.5484 20 48 20C31.4315 20 18 33.4315 18 50C18 66.5685 31.4315 80 48 80C55.6791 80 62.6611 77.1068 67.9242 72.3551C70.6186 76.5165 74.3315 79.9194 78.756 82.2539C70.9234 87.1683 60.1032 90 48 90Z"
          fill={light ? '#FFFFFF' : '#0B2C6F'}
        />

        {/* Shadow Overlay */}
        <path
          d="M84 25L32 50L50 68L84 25Z"
          fill="rgba(0,0,0,0.06)"
        />

        {/* Rocket Chevron - Upper wing (Blue with star decals) */}
        <path
          d="M84 25L32 50L45 57L84 25Z"
          fill="#1E73BE"
        />
        {/* Upper wing stars details represent Texas / USA */}
        <circle cx="50" cy="43" r="1" fill="#FFFFFF" />
        <circle cx="60" cy="38" r="1.2" fill="#FFFFFF" />
        <circle cx="70" cy="32.5" r="1" fill="#FFFFFF" />
        <circle cx="78" cy="28" r="0.8" fill="#FFFFFF" />

        {/* Red stripe sweep rocket base */}
        <path
          d="M84 25L45 57L50 68L84 25Z"
          fill="#C8102E"
        />

        {/* Intersecting white swooshes inside red stripe */}
        <path
          d="M45 57L40 65C38 60 41 58 45 57Z"
          fill="#FFFFFF"
        />
        <path
          d="M74 35L76 43L84 25"
          stroke="#FFFFFF"
          strokeWidth="1.5"
        />
      </svg>

      {/* Brand Text Block */}
      <div id="korix-brand-text" className="flex flex-col select-none">
        <div className="flex items-baseline gap-1">
          <span
            id="brand-name-text"
            className={`${textSizes[size].title} font-display font-bold tracking-wider leading-none ${
              light ? 'text-white' : 'text-brand-navy'
            }`}
          >
            KORIX
          </span>
          <span
            id="brand-tm-symbol"
            className={`text-[8px] font-bold align-super ${
              light ? 'text-white/80' : 'text-brand-navy/80'
            }`}
          >
            TM
          </span>
        </div>

        <div id="brand-llc-text" className="flex items-center justify-between w-full h-3">
          <span className={`h-[1px] flex-grow mx-1 opacity-60 ${light ? 'bg-white' : 'bg-brand-red'}`}></span>
          <span
            className={`${textSizes[size].sub} font-sans font-semibold tracking-[0.2em] leading-none ${
              light ? 'text-white/90' : 'text-brand-red'
            }`}
          >
            LLC
          </span>
          <span className={`h-[1px] flex-grow mx-1 opacity-60 ${light ? 'bg-white' : 'bg-brand-red'}`}></span>
        </div>

        {showMotto && (
          <span
            id="brand-motto-text"
            className={`${textSizes[size].motto} font-sans font-medium tracking-[0.15em] mt-1 uppercase whitespace-nowrap leading-none ${
              light ? 'text-blue-200' : 'text-brand-navy/95'
            }`}
          >
            Focus • Execute • Win
          </span>
        )}
      </div>
    </div>
  );
}
