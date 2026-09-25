import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Radial Warm Lighting Glows */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D4AF37]/10 blur-[120px] sm:blur-[160px] rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-green-500/10 blur-[100px] sm:blur-[140px] rounded-full bottom-10 right-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-3xl mx-auto pt-24 sm:pt-28 pb-14">
        {/* Large Central 3D Executive HS Market Maker Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-fit mx-auto mb-6 sm:mb-8 group"
        >
          {/* Ambient Gold Backlight Glow */}
          <div className="absolute inset-0 rounded-3xl bg-[#D4AF37]/25 blur-3xl scale-125 pointer-events-none" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-[#D4AF37]/50 via-amber-500/20 to-transparent blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

          {/* 3D Metallic Emblem Card */}
          <div className="relative p-2 sm:p-2.5 rounded-3xl border border-[#D4AF37]/60 bg-black/90 shadow-[0_0_50px_rgba(212,175,55,0.4)] backdrop-blur-md transition-transform group-hover:scale-[1.02] duration-300">
            <img
              src="/logo.png"
              alt="HS Market Makers 3D Executive Emblem"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Green Category Tag */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-green-500 font-semibold tracking-[0.12em] sm:tracking-[0.18em] uppercase text-[11px] sm:text-sm"
        >
          Premium Trading Community
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 sm:mt-5 leading-tight"
        >
          Learn Forex Trading With
          <span className="block text-[#D4AF37]">Professional Signals</span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-lg mx-auto leading-relaxed px-1"
        >
          Join HS Market Makers and get access to market insights, high-quality trading opportunities, expert guidance, and a community focused on growth.
        </motion.p>

        {/* Big WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex justify-center mt-7 sm:mt-9"
        >
          <a
            href="https://whatsapp.com/channel/0029Vb9HcH6AojYo2LADCd0E"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-green-500 text-black font-bold text-base hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.7)] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Join WhatsApp Community</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
