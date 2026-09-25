import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Zap, Shield, Users, MessageCircle } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#D4AF37',
      title: 'High-Accuracy XAUUSD Setups',
      desc: 'Professional gold signals with precise entry, stop loss & 100–300 pip targets.'
    },
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#22c55e',
      title: 'Real-Time Market Alerts',
      desc: 'Instant WhatsApp notifications the moment a setup forms — never miss a move.'
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#3b82f6',
      title: 'Disciplined Risk Management',
      desc: 'Every signal has clear SL/TP levels. Trade with confidence, not guesswork.'
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#a855f7',
      title: 'Growing Community of Traders',
      desc: 'Join 500+ members who learn, grow and profit together inside HS Market Makers.'
    }
  ];

  return (
    <section className="relative bg-[#050505] py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute w-[300px] h-[300px] bg-[#D4AF37]/5 blur-[140px] rounded-full -top-10 -left-10 pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-green-500/5 blur-[120px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column: Text & Features List */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="text-green-500 font-semibold uppercase tracking-widest text-[11px] sm:text-sm mb-3"
            >
              Why Choose HS Market Makers
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              A World-Class
              <span className="block text-[#D4AF37]">Trading Experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed"
            >
              HS Market Makers is dedicated to delivering high-accuracy XAUUSD setups, professional market guidance, and disciplined risk management.
            </motion.p>

            {/* 4 Feature Items */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
              {features.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.25 }}
                  className="flex items-start gap-3 sm:gap-3.5 group"
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}35`,
                      color: item.color,
                      boxShadow: `0 0 12px ${item.color}20`
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.5 }}
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

          {/* Right Column: Live Updates Phone Mockup */}
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
              className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px]"
            >
              {/* Golden Ambient Blur Glow Behind Phones */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl scale-95 opacity-50 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.4) 0%, transparent 70%)'
                }}
              />

              {/* The Exact Phones Mockup Image (Unobstructed & Clean) */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-black/60 backdrop-blur-sm">
                <img
                  src="/phones-mockup.png"
                  alt="HS Market Makers Official Announcements Dual Gold Phones Mockup"
                  className="w-full h-auto object-cover rounded-3xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
