import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Shield } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070709]">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Ambient Radial Warm Lighting Glows (Gold & Ruby) */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#D4AF37]/15 blur-[130px] sm:blur-[160px] rounded-full top-6 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[220px] sm:w-[380px] h-[220px] sm:h-[380px] bg-[#DC2626]/12 blur-[110px] sm:blur-[150px] rounded-full top-1/3 left-1/4 pointer-events-none" />
      <div className="absolute w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-[#D4AF37]/10 blur-[100px] sm:blur-[140px] rounded-full bottom-10 right-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-3xl mx-auto pt-24 sm:pt-28 pb-14">
        {/* Large Central 3D Executive HS Market Maker Bull Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative w-fit mx-auto mb-6 sm:mb-8 group"
        >
          {/* Ambient Gold & Ruby Dual Aura Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DC2626]/40 via-[#D4AF37]/35 to-transparent blur-3xl scale-125 pointer-events-none" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-b from-[#D4AF37]/60 via-[#DC2626]/30 to-transparent blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

          {/* 3D Metallic Medallion Container */}
          <div className="relative p-2 sm:p-2.5 rounded-full border-2 border-[#D4AF37]/70 bg-[#070709] shadow-[0_0_55px_rgba(212,175,55,0.45)] backdrop-blur-md transition-transform group-hover:scale-[1.02] duration-300">
            <img
              src="/logo.png"
              alt="HS Market Makers 3D Bull Emblem"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Brand Category Tag with Red & Gold Accent */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0E0F14] text-[#F5D77F] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
          <span>Institutional Gold Strategy • Trade With Purpose</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-white text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 sm:mt-4 leading-tight tracking-tight"
        >
          Learn Forex Trading With
          <span className="block gold-text-gradient font-black">
            Professional Signals
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-gray-300 text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-lg mx-auto leading-relaxed px-1 font-normal"
        >
          Join HS Market Makers and get access to structured market structure insights, calculated XAU/USD setups, and disciplined risk-to-reward execution.
        </motion.p>

        {/* Executive Gold & Emerald WhatsApp CTA Button */}
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
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-extrabold text-base shadow-[0_0_35px_rgba(34,197,94,0.6)] hover:shadow-[0_0_50px_rgba(34,197,94,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Join WhatsApp Community</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
