import React from 'react';
import { Layers, Sparkles, Globe, Copy, Check } from 'lucide-react';

interface HeaderProps {
  activeTab: 'guide' | 'builder' | 'demos' | 'roadmap';
  setActiveTab: (tab: 'guide' | 'builder' | 'demos' | 'roadmap') => void;
  lang: 'roman-urdu' | 'english';
  setLang: (lang: 'roman-urdu' | 'english') => void;
  onOpenQuickSpec: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  lang,
  setLang,
  onOpenQuickSpec
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-white">CloneCraft</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                  Studio
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Website Clone Requirements Analyzer & Interactive Builder
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'guide'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {lang === 'roman-urdu' ? '📋 Kia Chahiye? (Checklist)' : '📋 Requirements Guide'}
            </button>
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'builder'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {lang === 'roman-urdu' ? '🛠️ Clone Spec Builder' : '🛠️ Clone Builder'}
            </button>
            <button
              onClick={() => setActiveTab('demos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'demos'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {lang === 'roman-urdu' ? '⚡ Live Working Clones' : '⚡ Live Clones'}
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {lang === 'roman-urdu' ? '🚀 Roadmap & Tech' : '🚀 Tech Roadmap'}
            </button>
          </nav>

          {/* Controls: Language toggle & Quick Spec */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs font-medium">
              <button
                onClick={() => setLang('roman-urdu')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'roman-urdu' ? 'bg-slate-800 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Roman Urdu
              </button>
              <button
                onClick={() => setLang('english')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'english' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                English
              </button>
            </div>

            <button
              onClick={onOpenQuickSpec}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 rounded-lg shadow transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'roman-urdu' ? 'Abhi Clone Bnao' : 'Create Spec'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Tab row */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-800/60 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('guide')}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium ${
              activeTab === 'guide' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            📋 Kia Chahiye?
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium ${
              activeTab === 'builder' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            🛠️ Spec Builder
          </button>
          <button
            onClick={() => setActiveTab('demos')}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium ${
              activeTab === 'demos' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            ⚡ Live Demos
          </button>
          <button
            onClick={() => setActiveTab('roadmap')}
            className={`whitespace-nowrap px-3 py-1 rounded-md font-medium ${
              activeTab === 'roadmap' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            🚀 Tech Stack
          </button>
        </div>
      </div>
    </header>
  );
};
