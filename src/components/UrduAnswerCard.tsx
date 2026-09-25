import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Link2, Layout, Sliders, Database, Palette, Image as ImageIcon } from 'lucide-react';

interface UrduAnswerCardProps {
  onStartBuilder: () => void;
  lang: 'roman-urdu' | 'english';
}

export const UrduAnswerCard: React.FC<UrduAnswerCardProps> = ({ onStartBuilder, lang }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-indigo-950/40 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Glow decorative element */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{lang === 'roman-urdu' ? 'Seedha aur Aasan Jawab' : 'Direct Answer'}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {lang === 'roman-urdu' ? (
            <>
              Website ka clone banane ke liye mujhe <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">sirf ye 4 se 5 cheezein</span> chahiyen:
            </>
          ) : (
            <>
              To build a high-fidelity website clone, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">here is exactly what is required</span>:
            </>
          )}
        </h1>

        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          {lang === 'roman-urdu' ? (
            <>
              Aap bas website ka <strong>Link (URL)</strong> ya naam batayein aur bta dein ke <strong>sirf design</strong> chahiye ya <strong>buttons, cart aur data bhi live chalna chahiye</strong>. Baqi sara code, structure, responsive mobile view aur assets hum yahan instant tayar kar lenge!
            </>
          ) : (
            <>
              Simply provide the <strong>Target Website URL / Name</strong> and specify if you need <strong>frontend layout only</strong> or <strong>working functional interactions</strong> (like cart, search, login, or database). We can scaffold and code the entire system right here!
            </>
          )}
        </p>

        {/* 4 Quick Pills / Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-1.5">
              <Link2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>1. Target Website Link</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              {lang === 'roman-urdu'
                ? 'Website ka URL (e.g. Daraz, Netflix, Linear, ya koi bhi link) ya screenshots.'
                : 'URL or live link of the site you want to replicate, or reference screenshots.'}
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-1.5">
              <Layout className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>2. Kaunse Pages Chahiyen?</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              {lang === 'roman-urdu'
                ? 'Sirf Home Page chahiye, ya Product Detail, Cart Drawer, Dashboard aur Login bhi?'
                : 'Home only, or full multi-page flows like Product Page, Cart, Checkout & Auth.'}
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-1.5">
              <Sliders className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>3. Working Features</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              {lang === 'roman-urdu'
                ? 'Cart chalna chahiye, Live search, Dark/Light mode, ya Videos play hon?'
                : 'Interactive states like working cart, live search debounce, filters & video modal.'}
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1.5">
              <Database className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>4. Database & Branding</span>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              {lang === 'roman-urdu'
                ? 'Data save karna hy (Firebase/SQL)? Aur apna brand name ya 100% same clone?'
                : 'Persistent cloud database needed, plus whether to rebrand with your colors/logo.'}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onStartBuilder}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <span>{lang === 'roman-urdu' ? 'Abhi Clone Requirements Configure Karein' : 'Configure Clone Spec Now'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {lang === 'roman-urdu'
                ? 'Aap niche diye gaye templates me se 1-click select bhi kar sakte hain!'
                : 'Or click any pre-configured template below to load instant specs!'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
