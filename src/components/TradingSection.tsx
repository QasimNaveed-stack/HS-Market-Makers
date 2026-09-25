import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const TradingSection: React.FC = () => {
  return (
    <section className="bg-[#050505] py-14 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Column: Heading & Description */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.p
            initial={{ opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-green-500 font-semibold uppercase tracking-wider text-[11px] sm:text-sm"
          >
            Step Ahead. Trade Smart.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3 leading-tight"
          >
            Make Smarter Trades
            <span className="block text-[#D4AF37]">With The Right Guidance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Stay updated with valuable market insights, trading opportunities, educational content, and real-time updates directly through our WhatsApp Channel.
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
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.6)] transition-all duration-300 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Join WhatsApp Community</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: User-Provided Signal Image (download.png) */}
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
            className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px]"
          >
            {/* Ambient Radial Golden Glow */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-35 scale-95 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)'
              }}
            />

            {/* The User-Provided Signal Image (download.png / chart-signal.png) */}
            <div className="relative z-10 p-1.5 sm:p-2 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/50 bg-black/80 shadow-[0_0_35px_rgba(212,175,55,0.25)] backdrop-blur-md">
              <img
                src="/chart-signal.png"
                alt="HS Market Makers XAUUSD 1M Key Level Trading Chart"
                className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-2xl"
                loading="eager"
              />
            </div>

            {/* Floating Live Signal Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-4 left-3 z-20 bg-black/90 border border-green-500/50 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 shadow-[0_0_12px_rgba(34,197,94,0.35)] backdrop-blur-xs"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <span className="text-green-400 text-[10px] sm:text-xs font-bold whitespace-nowrap">
                XAUUSD 1M Sniper
              </span>
            </motion.div>

            {/* Floating Key Level Hit Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-4 right-3 z-20 bg-black/90 border border-[#D4AF37]/50 rounded-xl px-2.5 py-1.5 shadow-[0_0_12px_rgba(212,175,55,0.35)] backdrop-blur-xs"
            >
              <p className="text-[#D4AF37] text-[11px] sm:text-xs font-extrabold leading-tight">
                Key Level Smashed
              </p>
              <p className="text-gray-400 text-[9px] sm:text-[10px] leading-tight">
                +150 Pips Rally 🚀
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
