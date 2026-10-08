import React, { useState } from 'react';
import { LogIn, LogOut, User as UserIcon, MessageCircle } from 'lucide-react';
import { SiteLogo } from './SiteLogo';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const { currentUser, signInWithGoogle, logout, loading } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signInWithGoogle();
    } catch {
      // Handled in context
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070709]/85 border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex justify-between items-center gap-2 sm:gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
          <SiteLogo size={42} />

          <div className="min-w-0">
            <h1 className="text-white font-extrabold text-sm sm:text-base leading-tight truncate tracking-tight flex items-center gap-1.5">
              <span>HS Market Makers</span>
            </h1>
            <p className="text-[#D4AF37] text-[10px] sm:text-xs truncate leading-tight font-medium tracking-wide">
              Trade With Purpose
            </p>
          </div>
        </div>

        {/* Right side actions: Auth state & Join WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {!loading && (
            <>
              {currentUser ? (
                <div className="flex items-center gap-2 bg-[#0E0F14] border border-[#D4AF37]/30 rounded-full pl-1.5 pr-2.5 py-1 shadow-sm">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'Member'}
                      className="w-6 h-6 rounded-full object-cover border border-[#D4AF37]"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#DC2626]/30 to-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center text-xs font-bold">
                      <UserIcon className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <span className="text-xs text-gray-200 font-medium max-w-[90px] sm:max-w-[120px] truncate hidden xs:inline">
                    {currentUser.displayName?.split(' ')[0] || 'Member'}
                  </span>
                  <button
                    onClick={() => logout()}
                    title="Sign Out"
                    className="text-gray-400 hover:text-[#DC2626] transition-colors p-1 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37] bg-[#0E0F14] hover:bg-white/5 text-gray-200 text-xs font-medium transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <LogIn className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="hidden sm:inline">Sign In</span>
                  <span className="sm:hidden">Login</span>
                </button>
              )}
            </>
          )}

          {/* WhatsApp Join Button - Vibrant Green */}
          <a
            href="https://whatsapp.com/channel/0029Vb9HcH6AojYo2LADCd0E"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-black font-extrabold px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-[0_0_20px_rgba(34,197,94,0.45)] hover:shadow-[0_0_30px_rgba(34,197,94,0.75)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Join Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
