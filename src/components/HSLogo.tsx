import React from 'react';

interface HSLogoProps {
  className?: string;
  size?: number | string;
}

export const HSLogo: React.FC<HSLogoProps> = ({
  className = '',
  size = 48
}) => {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: size, height: size }}
        className="drop-shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-transform duration-300"
      >
        <defs>
          {/* Gold Rim Gradient */}
          <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="20%" stopColor="#E6C260" />
            <stop offset="45%" stopColor="#996D15" />
            <stop offset="70%" stopColor="#F7DF8D" />
            <stop offset="85%" stopColor="#C8972D" />
            <stop offset="100%" stopColor="#6E4A05" />
          </linearGradient>

          {/* Gold Bevel Accent Gradient */}
          <linearGradient id="goldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBE6" />
            <stop offset="30%" stopColor="#DFB648" />
            <stop offset="60%" stopColor="#8C620E" />
            <stop offset="85%" stopColor="#E5BE53" />
            <stop offset="100%" stopColor="#5E3F05" />
          </linearGradient>

          {/* Brushed Steel / Silver Face Gradient */}
          <linearGradient id="brushedSteel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#E2E7ED" />
            <stop offset="50%" stopColor="#9BA3AF" />
            <stop offset="75%" stopColor="#CFD6DF" />
            <stop offset="100%" stopColor="#5B626E" />
          </linearGradient>

          {/* Steel Edge Gradient */}
          <linearGradient id="steelDark" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2D333B" />
            <stop offset="50%" stopColor="#4A525E" />
            <stop offset="100%" stopColor="#7B8491" />
          </linearGradient>

          {/* Background Texture Radial */}
          <radialGradient id="bgRadial" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E2024" />
            <stop offset="60%" stopColor="#101114" />
            <stop offset="100%" stopColor="#050608" />
          </radialGradient>

          {/* Candle Green Glow */}
          <filter id="greenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Candle Red Glow */}
          <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Circular Rim with Double Gold Ring */}
        <circle cx="250" cy="250" r="240" fill="url(#bgRadial)" stroke="url(#goldRim)" strokeWidth="12" />
        <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="3" />

        {/* Inner subtle concentric texture rings */}
        <circle cx="250" cy="250" r="215" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
        <circle cx="250" cy="250" r="195" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

        {/* 3D Geometric "H" Letter (Left & Upper Bridge) */}
        {/* Left Vertical Pillar of H */}
        <g id="letter-H">
          {/* Base shadow */}
          <polygon
            points="58,138 122,96 122,364 58,406"
            fill="#050505"
            opacity="0.8"
          />
          {/* 3D Gold Extrusion Base */}
          <polygon
            points="55,135 120,92 120,368 55,410"
            fill="url(#goldBevel)"
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="bevel"
          />
          {/* Beveled Face */}
          <polygon
            points="65,142 110,108 110,358 65,392"
            fill="url(#brushedSteel)"
            stroke="url(#steelDark)"
            strokeWidth="2"
          />

          {/* Right Vertical Pillar of H (Upper Section) */}
          <polygon
            points="378,92 445,135 445,410 378,368"
            fill="url(#goldBevel)"
            stroke="#000000"
            strokeWidth="3"
            strokeLinejoin="bevel"
          />
          <polygon
            points="390,108 435,142 435,392 390,358"
            fill="url(#brushedSteel)"
            stroke="url(#steelDark)"
            strokeWidth="2"
          />

          {/* Horizontal Bridge / Diagonal Chiseled connector */}
          <polygon
            points="120,240 235,310 200,335 120,285"
            fill="url(#goldBevel)"
          />
          <polygon
            points="120,248 215,310 190,325 120,280"
            fill="url(#brushedSteel)"
          />
        </g>

        {/* 3D Geometric "S" Monogram (Top Crest & Bottom Hook) */}
        <g id="letter-S">
          {/* S Upper Hexagonal Roof */}
          <polygon
            points="162,142 250,85 338,142 288,172 250,146 208,172"
            fill="url(#goldBevel)"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="bevel"
          />
          <polygon
            points="175,145 250,97 325,145 285,166 250,140 215,166"
            fill="url(#brushedSteel)"
            stroke="url(#steelDark)"
            strokeWidth="2"
          />

          {/* S Upper Right Diagonal Downward Spine */}
          <polygon
            points="338,142 390,175 255,275 208,242"
            fill="url(#goldBevel)"
          />
          <polygon
            points="332,150 375,178 255,265 218,238"
            fill="url(#brushedSteel)"
          />

          {/* S Bottom Hexagonal Foundation */}
          <polygon
            points="162,358 208,328 250,354 288,328 338,358 250,415"
            fill="url(#goldBevel)"
            stroke="#000"
            strokeWidth="3"
            strokeLinejoin="bevel"
          />
          <polygon
            points="175,355 215,334 250,360 285,334 325,355 250,403"
            fill="url(#brushedSteel)"
            stroke="url(#steelDark)"
            strokeWidth="2"
          />
        </g>

        {/* Diagonal Ascending Trading Candlesticks */}
        <g id="candlesticks">
          {/* Candle 1: Red (far bottom left) */}
          <line x1="140" y1="330" x2="140" y2="400" stroke="#ef4444" strokeWidth="3" />
          <rect x="133" y="348" width="14" height="36" rx="2" fill="#ef4444" filter="url(#redGlow)" />

          {/* Candle 2: Green */}
          <line x1="165" y1="310" x2="165" y2="385" stroke="#22c55e" strokeWidth="3" />
          <rect x="158" y="325" width="14" height="42" rx="2" fill="#22c55e" filter="url(#greenGlow)" />

          {/* Candle 3: Red */}
          <line x1="190" y1="285" x2="190" y2="360" stroke="#ef4444" strokeWidth="3" />
          <rect x="183" y="302" width="14" height="30" rx="2" fill="#ef4444" filter="url(#redGlow)" />

          {/* Candle 4: Red */}
          <line x1="215" y1="290" x2="215" y2="365" stroke="#ef4444" strokeWidth="3" />
          <rect x="208" y="315" width="14" height="24" rx="2" fill="#ef4444" filter="url(#redGlow)" />

          {/* Candle 5: Green (Bullish momentum) */}
          <line x1="240" y1="250" x2="240" y2="340" stroke="#22c55e" strokeWidth="3" />
          <rect x="233" y="270" width="14" height="48" rx="2" fill="#22c55e" filter="url(#greenGlow)" />

          {/* Candle 6: Green (Strong upward breakout) */}
          <line x1="268" y1="210" x2="268" y2="305" stroke="#22c55e" strokeWidth="3.5" />
          <rect x="261" y="225" width="15" height="58" rx="2" fill="#22c55e" filter="url(#greenGlow)" />

          {/* Candle 7: Red (Top pullback wick) */}
          <line x1="295" y1="195" x2="295" y2="280" stroke="#ef4444" strokeWidth="3" />
          <rect x="288" y="208" width="14" height="38" rx="2" fill="#ef4444" filter="url(#redGlow)" />
        </g>

        {/* Gold Specular Highlights & Glints */}
        <polygon points="122,96 130,90 125,105 118,102" fill="#FFFFFF" />
        <polygon points="250,85 258,80 252,92 245,90" fill="#FFFFFF" />
        <polygon points="378,92 388,86 382,98 375,96" fill="#FFFFFF" />
        <polygon points="288,328 295,322 290,332 284,330" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
