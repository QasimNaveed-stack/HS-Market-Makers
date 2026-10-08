import React from 'react';

interface SiteLogoProps {
  size?: number;
  className?: string;
  variant?: 'circular' | 'full';
}

export const SiteLogo: React.FC<SiteLogoProps> = ({
  size = 40,
  className = '',
  variant = 'circular',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient gold & ruby concentric backlight aura */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DC2626]/30 via-[#D4AF37]/35 to-transparent blur-md scale-95 group-hover:scale-110 transition-transform duration-300" />

      {/* 3D Metallic HS Market Maker Bull Emblem */}
      <img
        src="/logo.png"
        alt="HS Market Makers Emblem"
        style={{ width: size, height: size }}
        className={`relative z-10 object-cover ${
          variant === 'circular'
            ? 'rounded-full border border-[#D4AF37]/60 shadow-[0_0_18px_rgba(212,175,55,0.4)]'
            : 'rounded-2xl border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.35)]'
        } transition-all duration-300 group-hover:border-[#F5D77F] group-hover:shadow-[0_0_24px_rgba(220,38,38,0.4)]`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/logo.svg';
        }}
      />
    </div>
  );
};
