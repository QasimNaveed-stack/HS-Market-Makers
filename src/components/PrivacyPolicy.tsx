import React from 'react';
import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { SiteLogo } from './SiteLogo';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Header Bar */}
      <header className="border-b border-[#D4AF37]/20 backdrop-blur-xl bg-[#070709]/85 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SiteLogo size={36} />
            <div>
              <span className="text-white font-extrabold text-sm tracking-tight block">
                HS Market Makers
              </span>
              <span className="text-[#D4AF37] text-[10px] font-semibold tracking-wider uppercase block">
                Trade With Purpose
              </span>
            </div>
          </div>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-[#D4AF37] px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#D4AF37]/40 bg-white/5 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-[#0E0F14] border border-[#D4AF37]/25 rounded-2xl p-6 sm:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.5)]">
          {/* Header Title Section */}
          <div className="mb-8 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#F5D77F] text-xs font-semibold mb-3">
              <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Official Policy</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy — HS Market Makers
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Last updated: October 2026
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                1. Who we are
              </h2>
              <p>
                HS Market Makers (&quot;we&quot;, &quot;our&quot;) operates the website{' '}
                <a
                  href="https://hs-market-makers-rozp.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D4AF37] hover:underline"
                >
                  https://hs-market-makers-rozp.vercel.app
                </a>
                , a community website where visitors can read and share reviews.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                2. Information we collect
              </h2>
              <p>
                When you sign in with Google, we receive your name, email address and profile photo from your Google account. If you post a review, we also store the review text, rating, and optional details you choose to add (such as trading pair or profit).
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                3. How we use your information
              </h2>
              <ul className="list-disc list-inside space-y-1.5 ml-1 text-gray-300">
                <li>Your name and profile photo are shown next to reviews you publish.</li>
                <li>Your email address is stored privately and is never shown publicly.</li>
                <li>We use your information only to run the website, let you post and manage your own reviews, and prevent abuse.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                4. Public content
              </h2>
              <p>
                Reviews you publish are visible to all visitors of the website. You can delete your own reviews at any time while signed in.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                5. Data storage and security
              </h2>
              <p>
                Data is stored using Google Firebase (Authentication and Cloud Firestore). We apply access rules so that private information such as email addresses cannot be read by other users.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                6. Sharing
              </h2>
              <p>
                We do not sell, rent or trade your personal information. We do not share it with third parties except the service providers needed to run the site (Google Firebase and Vercel hosting).
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                7. Your choices
              </h2>
              <p>
                You may sign out at any time. To request deletion of your account data or reviews, contact us using the details below.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                8. Contact
              </h2>
              <p className="flex items-center gap-2 flex-wrap">
                <span>For any privacy questions or deletion requests, email:</span>
                <a
                  href="mailto:naveednagra9@gmail.com"
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:underline font-semibold"
                >
                  <Mail className="w-4 h-4" />
                  <span>naveednagra9@gmail.com</span>
                </a>
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2 text-[#F5D77F]">
                9. Changes
              </h2>
              <p>
                We may update this policy from time to time. The latest version will always be available on this page.
              </p>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] hover:from-[#c29d2b] hover:to-[#e2c66d] px-5 py-2.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
            <span className="text-xs text-gray-500">
              &copy; 2026 HS Market Makers
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
