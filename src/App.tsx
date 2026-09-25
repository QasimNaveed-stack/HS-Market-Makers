/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TradingSection } from './components/TradingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-green-500 selection:text-black">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* Section 1: Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Subtle Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 2: Why Choose HS Market Makers / Trading Experience (MB.png) */}
        <section id="whyus">
          <WhyChooseSection />
        </section>

        {/* Subtle Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 3: Step Ahead. Trade Smart. / Make Smarter Trades (download.png) */}
        <section id="trading">
          <TradingSection />
        </section>

        {/* Subtle Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 4: Community Feedback & Reviews Hub */}
        <section id="reviews">
          <ReviewsSection />
        </section>

        {/* Subtle Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Section 5: CTA & Footer / Socials (Instagram & Facebook) */}
        <footer id="footer">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
}
