import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Zap, Shield, Users, MessageCircle } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#D4AF37',
      title: 'Structured XAU/USD Setups',
      desc: 'Institutional gold analysis with precise entry invalidation, defined stop loss, and structured multi-target exits.'
    },
    {
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#DC2626',
      title: 'Real-Time Market Alerts',
      desc: 'Instant WhatsApp notifications the moment high-probability structure forms — stay ahead of major session moves.'
    },
    {
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#E2E8F0',
      title: 'Disciplined Risk Management',
      desc: 'Every shared setup emphasizes strict capital preservation, calculated position sizing, and disciplined execution.'
    },
    {
      icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: '#F59E0B',
      title: 'Dedicated Trading Community',
      desc: 'Connect with traders who learn, analyze market structures, and navigate setups together.'
    }
  ];

  return (
    <section className="relative bg-[#070709] py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting (Gold & Ruby) */}
      <div className="absolute w-[320px] h-[320px] bg-[#D4AF37]/10 blur-[150px] rounded-full -top-10 -left-10 pointer-events-none" />
      <div className="absolute w-[280px] h-[280px] bg-[#DC2626]/10 blur-[140px] rounded-full bottom-0 right-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column: Text & Features List */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="text-[#D4AF37] font-semibold uppercase tracking-widest text-[11px] sm:text-sm mb-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span>Why Choose HS Market Makers</span>
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
            >
              A World-Class
              <span className="block gold-text-gradient">Trading Experience</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed"
            >
              HS Market Makers is built around institutional liquidity awareness, multi-session gold execution, and uncompromising risk control.
            </motion.p>

            {/* 4 Feature Items */}
            <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
              {features.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.25 }}
                  className="flex items-start gap-3 sm:gap-4 group p-2.5 rounded-2xl bg-[#0E0F14]/40 border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      boxShadow: `0 0 15px ${item.color}25`
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
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
                className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-black font-extrabold px-8 py-4 rounded-full hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.75)] transition-all duration-300 text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
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
                  background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.35) 0%, rgba(220,38,38,0.2) 50%, transparent 75%)'
                }}
              />

              {/* The Exact Phones Mockup Image with Luxury Gold Rim */}
              <div className="relative z-10 rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.35)] bg-black/70 backdrop-blur-sm">
                <img
                  src="/phones-mockup.png"
                  alt="HS Market Makers Announcements Dual Phones Mockup"
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
