import React from 'react';

interface ChatGPTLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const ChatGPTLogo: React.FC<ChatGPTLogoProps> = ({
  className = '',
  size = 48,
  showText = false
}) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
        className="drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
      >
        <defs>
          {/* Metallic Gold Gradient */}
          <linearGradient id="goldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#AA7C11" />
            <stop offset="75%" stopColor="#F5D77F" />
            <stop offset="100%" stopColor="#8E6508" />
          </linearGradient>

          {/* Brushed Platinum / Silver Gradient */}
          <linearGradient id="silverFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#D8DCE3" />
            <stop offset="70%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#6B7280" />
          </linearGradient>

          {/* Deep Inset Shadow */}
          <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Back Glow */}
        <circle cx="100" cy="100" r="95" fill="url(#ambientGlow)" />

        {/* Outer Hexagon Gold Frame */}
        <polygon
          points="100,10 180,55 180,145 100,190 20,145 20,55"
          fill="#111111"
          stroke="url(#goldBevel)"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        {/* Inner Hexagon Bevel */}
        <polygon
          points="100,22 168,60 168,140 100,178 32,140 32,60"
          fill="#0a0a0a"
          stroke="rgba(212,175,55,0.4)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Stylized Interlocking M/S Monogram with Beveled Silver Face */}
        {/* Left Pillar */}
        <path
          d="M48 65 L76 65 L76 135 L48 135 Z"
          fill="url(#silverFace)"
          stroke="url(#goldBevel)"
          strokeWidth="2"
        />
        {/* Right Pillar */}
        <path
          d="M124 65 L152 65 L152 135 L124 135 Z"
          fill="url(#silverFace)"
          stroke="url(#goldBevel)"
          strokeWidth="2"
        />
        {/* Angular Geometric Cross / Central Monogram */}
        <path
          d="M76 65 L100 48 L124 65 L100 82 Z"
          fill="url(#silverFace)"
          stroke="url(#goldBevel)"
          strokeWidth="2"
        />
        <path
          d="M76 135 L100 152 L124 135 L100 118 Z"
          fill="url(#silverFace)"
          stroke="url(#goldBevel)"
          strokeWidth="2"
        />

        {/* Vibrant Candlestick Chart in the center of the emblem */}
        {/* Candlestick 1: Red */}
        <line x1="84" y1="92" x2="84" y2="114" stroke="#ef4444" strokeWidth="1.5" />
        <rect x="81.5" y="96" width="5" height="12" fill="#ef4444" rx="0.5" />

        {/* Candlestick 2: Green */}
        <line x1="94" y1="84" x2="94" y2="108" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="91.5" y="88" width="5" height="15" fill="#22c55e" rx="0.5" />

        {/* Candlestick 3: Red */}
        <line x1="104" y1="78" x2="104" y2="100" stroke="#ef4444" strokeWidth="1.5" />
        <rect x="101.5" y="82" width="5" height="12" fill="#ef4444" rx="0.5" />

        {/* Candlestick 4: Green (Bullish breakout) */}
        <line x1="114" y1="68" x2="114" y2="94" stroke="#22c55e" strokeWidth="1.5" />
        <rect x="111.5" y="72" width="5" height="16" fill="#22c55e" rx="0.5" />
      </svg>

      {showText && (
        <div className="mt-2 text-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-amber-200 to-amber-400 font-black text-sm tracking-[0.25em] uppercase">
            Market Maker
          </div>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-4 h-[1px] bg-[#D4AF37]/60" />
            <span className="w-1 h-2 bg-[#22c55e]" />
            <span className="w-1 h-3 bg-[#D4AF37]" />
            <span className="w-1 h-2 bg-[#ef4444]" />
            <span className="w-4 h-[1px] bg-[#D4AF37]/60" />
          </div>
        </div>
      )}
    </div>
  );
};
