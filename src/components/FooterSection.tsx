import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/aizelmarkets?stkn=MXF2ankwMGNmb3BodQ==',
      bg: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
      glow: '0 0 20px rgba(225, 48, 108, 0.5)',
      glowHover: '0 0 40px rgba(225, 48, 108, 0.9)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61594469601709&mibextid=wwXIfr&mibextid=wwXIfr',
      bg: '#1877F2',
      glow: '0 0 20px rgba(24, 119, 242, 0.5)',
      glowHover: '0 0 40px rgba(24, 119, 242, 0.9)',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute w-[300px] h-[300px] bg-green-500/10 blur-[130px] rounded-full -bottom-24 -left-24 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/10 blur-[130px] rounded-full -top-24 -right-24 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Pre-footer Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-[11px] sm:text-sm mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span>Don&apos;t Miss Out On Profitable Opportunities</span>
          </div>

          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight px-2">
            Ready To Start Your
            <span className="block text-[#D4AF37]">Trading Journey?</span>
          </h2>

          <p className="text-gray-400 mt-3 sm:mt-5 max-w-xl mx-auto text-sm sm:text-base px-2">
            Join our WhatsApp Community and Channel to receive market insights, trading opportunities and valuable updates.
          </p>

          <div className="flex justify-center mt-6 sm:mt-8">
            <a
              href="https://whatsapp.com/channel/0029Vb9HcH6AojYo2LADCd0E"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-black font-bold px-8 sm:px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Join WhatsApp Community</span>
            </a>
          </div>
        </div>

        {/* Contact Us & Social Links (Instagram & Facebook) */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-10 sm:pt-12">
          <div className="text-center mb-7 sm:mb-9">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Contact Us
            </h3>
            <p className="text-gray-500 mt-2 text-xs sm:text-sm">
              Follow us on social media for daily trading updates
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className="flex items-center justify-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    width: '48px',
                    height: '48px',
                    background: item.bg,
                    boxShadow: item.glow
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = item.glowHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = item.glow;
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-gray-400 text-[11px] font-medium group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Copyright Row */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-center md:text-left">
              <h4 className="text-white text-sm sm:text-base font-bold">HS Market Makers</h4>
              <p className="text-gray-500 mt-0.5 text-xs">Let&apos;s Grow Together</p>
            </div>
            <p className="text-gray-500 text-xs text-center">
              &copy; 2026 HS Market Makers. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
