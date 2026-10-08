import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const TradingSection: React.FC = () => {
  return (
    <section className="bg-[#070709] py-14 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[150px] rounded-full top-10 right-0 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-[#DC2626]/10 blur-[130px] rounded-full bottom-0 left-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Heading & Description */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[11px] sm:text-sm flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            <span>Step Ahead • Trade Smart</span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 leading-tight tracking-tight"
          >
            Make Smarter Trades
            <span className="block gold-text-gradient">With Institutional Guidance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Stay updated with institutional market structure, high-impact session timings, educational chart breakdowns, and real-time setup discussions directly through our WhatsApp community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className="mt-7 sm:mt-9"
          >
            <a
              href="https://whatsapp.com/channel/0029Vb9HcH6AojYo2LADCd0E"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-black font-extrabold px-8 py-4 rounded-full hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.75)] transition-all duration-300 text-base cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Join WhatsApp Community</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Key Level Chart Signal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center mt-6 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[390px]"
          >
            {/* Ambient Radial Golden & Ruby Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-95 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, rgba(220,38,38,0.2) 60%, transparent 75%)'
              }}
            />

            {/* The Chart Image Card */}
            <div className="relative z-10 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/50 bg-[#0E0F14]/90 shadow-[0_0_40px_rgba(212,175,55,0.3)] backdrop-blur-md">
              <img
                src="/chart-signal.png"
                alt="HS Market Makers XAUUSD 1M Key Level Trading Chart"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Floating Live Signal Badge with Ruby & Gold Accent */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-3 z-20 bg-[#070709]/95 border border-[#DC2626]/60 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_0_15px_rgba(220,38,38,0.35)] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse shrink-0" />
              <span className="text-[#F8FAFC] text-[10px] sm:text-xs font-bold whitespace-nowrap">
                XAUUSD 1M Sniper
              </span>
            </motion.div>

            {/* Floating Key Level Hit Badge with Gold Accent */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 right-3 z-20 bg-[#070709]/95 border border-[#D4AF37]/60 rounded-xl px-2.5 py-1.5 shadow-[0_0_15px_rgba(212,175,55,0.35)] backdrop-blur-sm"
            >
              <p className="text-[#D4AF37] text-[11px] sm:text-xs font-extrabold leading-tight">
                Key Level Smashed
              </p>
              <p className="text-gray-300 text-[9px] sm:text-[10px] leading-tight font-medium">
                +150 Pips Rally 🚀
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
