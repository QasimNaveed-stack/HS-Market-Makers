import React from 'react';

interface SiteLogoProps {
  size?: number;
  className?: string;
  variant?: 'circular' | 'full';
}

export const SiteLogo: React.FC<SiteLogoProps> = ({
  size = 40,
  className = '',
  variant = 'circular'
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient gold glow */}
      <div className="absolute inset-0 rounded-full bg-[#D4AF37]/25 blur-md scale-95 group-hover:scale-110 transition-transform duration-300" />

      {/* Photorealistic 3D Metallic HS Market Maker Logo Image */}
      <img
        src="/logo.png"
        alt="HS Market Makers 3D Logo"
        style={{ width: size, height: size }}
        className={`relative z-10 object-cover ${
          variant === 'circular'
            ? 'rounded-full border border-[#D4AF37]/50 shadow-[0_0_15px_rgba(212,175,55,0.35)]'
            : 'rounded-2xl border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.3)]'
        } transition-all duration-300 group-hover:border-[#D4AF37]`}
        onError={(e) => {
          // Fallback to svg or alternative path if needed
          (e.target as HTMLImageElement).src = '/logo.svg';
        }}
      />
    </div>
  );
};
