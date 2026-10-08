/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TradingSection } from './components/TradingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FooterSection } from './components/FooterSection';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const isPrivacyPage = currentPath === '/privacy' || currentPath === '/privacy/';

  if (isPrivacyPage) {
    return <PrivacyPolicy />;
  }

  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#070709] text-white flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
        {/* Fixed Navigation Bar */}
        <Navbar />

        <main className="flex-1 w-full">
          {/* Section 1: Hero Section */}
          <section id="hero">
            <HeroSection />
          </section>

          {/* Subtle Dual Gold Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

          {/* Section 2: Why Choose HS Market Makers / Trading Experience (MB.png) */}
          <section id="whyus">
            <WhyChooseSection />
          </section>

          {/* Subtle Dual Gold Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

          {/* Section 3: Step Ahead. Trade Smart. / Make Smarter Trades (download.png) */}
          <section id="trading">
            <TradingSection />
          </section>

          {/* Subtle Dual Gold Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

          {/* Section 4: Community Feedback & Reviews Hub */}
          <section id="reviews">
            <ReviewsSection />
          </section>

          {/* Subtle Dual Gold Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

          {/* Section 5: CTA & Footer / Socials (Instagram & Facebook) */}
          <footer id="footer">
            <FooterSection />
          </footer>
        </main>
      </div>
    </AuthProvider>
  );
}
