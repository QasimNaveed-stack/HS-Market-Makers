import React from 'react';
import { SiteLogo } from './SiteLogo';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center gap-2">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
          <SiteLogo size={42} />

          <div className="min-w-0">
            <h1 className="text-white font-bold text-sm sm:text-base leading-tight truncate">
              HS Market Makers
            </h1>
            <p className="text-green-400 text-[10px] sm:text-xs truncate leading-tight">
              Let&apos;s Grow Together
            </p>
          </div>
        </div>

        {/* WhatsApp Join Button Only */}
        <a
          href="https://whatsapp.com/channel/0029Vb9HcH6AojYo2LADCd0E"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 bg-green-500 text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 whitespace-nowrap"
        >
          Join Now
        </a>
      </div>
    </nav>
  );
};
