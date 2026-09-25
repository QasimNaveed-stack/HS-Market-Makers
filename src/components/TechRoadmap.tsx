import React from 'react';
import { Layers, Cpu, Database, Cloud, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TechRoadmapProps {
  lang: 'roman-urdu' | 'english';
  onOpenBuilder: () => void;
}

export const TechRoadmap: React.FC<TechRoadmapProps> = ({ lang, onOpenBuilder }) => {
  const steps = [
    {
      num: '01',
      title: lang === 'roman-urdu' ? 'Target Link & Layout Ka Tajziya (Analysis)' : 'Target Link & Layout Analysis',
      time: '1 - 2 Hours',
      desc: lang === 'roman-urdu'
        ? 'Website ka structure, header, footer, hero section, color palette aur typography analyze ki jati hy.'
        : 'Deconstruct visual hierarchy, responsive breakpoints, color schemes, and navigational patterns.'
    },
    {
      num: '02',
      title: lang === 'roman-urdu' ? 'Frontend UI & Component Scaffolding' : 'Frontend UI Scaffolding',
      time: '1 Day',
      desc: lang === 'roman-urdu'
        ? 'React 19 aur Tailwind CSS me pixel-perfect components bante hain (Mobile + Desktop friendly).'
        : 'Build modular, zero-pill, domain-native React 19 components with Tailwind CSS.'
    },
    {
      num: '03',
      title: lang === 'roman-urdu' ? 'Interactive Functionality & Local State' : 'Interactive States & Functionality',
      time: '1 Day',
      desc: lang === 'roman-urdu'
        ? 'Cart system, search filter, category toggles, video modals, aur form validations connect hoti hain.'
        : 'Implement state machines, cart drawers, live debounce search, and smooth micro-interactions.'
    },
    {
      num: '04',
      title: lang === 'roman-urdu' ? 'Database & Authentication Setup' : 'Database & Auth Integration',
      time: '1 - 2 Days',
      desc: lang === 'roman-urdu'
        ? 'Firebase Firestore ya Cloud SQL PostgreSQL connect karke real user login aur data save kiya jata hy.'
        : 'Provision secure cloud database, security rules, and user authentication with session persistence.'
    },
    {
      num: '05',
      title: lang === 'roman-urdu' ? 'Testing & Cloud Run Deployment' : 'Testing & Live Deployment',
      time: 'Same Day',
      desc: lang === 'roman-urdu'
        ? 'Code verify hota hy aur instant public live URL par deploy ho jata hy jo sab ko share ho sakta hy.'
        : 'Verify zero errors via compile check, optimize bundle, and host live with SSL.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* 5-Step Process */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-black border border-emerald-500/30">
                🚀
              </span>
              <span>
                {lang === 'roman-urdu'
                  ? 'Website Clone Ka Development Roadmap'
                  : 'Website Clone Engineering Roadmap'}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'roman-urdu'
                ? 'Dekhein ke requirements milne ke baad website kis tarah step-by-step tayar hoti hy.'
                : 'From your initial requirement to a fully deployed live production clone.'}
            </p>
          </div>

          <button
            onClick={onOpenBuilder}
            className="self-start sm:self-auto text-xs font-semibold px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow"
          >
            {lang === 'roman-urdu' ? 'Apna Clone Configure Karein' : 'Configure Your Clone'}
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-3.5">
          {steps.map((st, i) => (
            <div
              key={st.num}
              className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono font-bold text-amber-400 text-sm">{st.num}</span>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {st.time}
                  </span>
                </div>
                <h4 className="font-bold text-xs text-white leading-snug">{st.title}</h4>
                <p className="text-[11px] text-slate-400 mt-1.5 leading-normal">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
        <h3 className="text-base font-bold text-white mb-1">
          {lang === 'roman-urdu' ? 'Hamara Recommended Modern Tech Stack' : 'Recommended Modern Tech Stack'}
        </h3>
        <p className="text-xs text-slate-400 mb-5">
          {lang === 'roman-urdu'
            ? 'Hum purani slow technologies ke bajaye industry ke latest standards use karte hain:'
            : 'Built using bleeding-edge, highly optimized web technologies:'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
              <Cpu className="w-4 h-4" />
              <span>Frontend Core</span>
            </div>
            <div className="text-sm font-bold text-white">React 19 + TypeScript</div>
            <p className="text-[11px] text-slate-400">
              Ultra-fast DOM rendering, strict type-safety, zero memory leaks, modern hooks.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
              <Zap className="w-4 h-4" />
              <span>Styling & Micro-animations</span>
            </div>
            <div className="text-sm font-bold text-white">Tailwind CSS v4 + Motion</div>
            <p className="text-[11px] text-slate-400">
              High speed styling, dark/light themes, zero bulky CSS files, mobile responsive.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <Database className="w-4 h-4" />
              <span>Cloud Database</span>
            </div>
            <div className="text-sm font-bold text-white">Firestore / Cloud SQL</div>
            <p className="text-[11px] text-slate-400">
              Real-time sync, secure permissions, relational tables or flexible NoSQL document storage.
            </p>
          </div>

          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
              <Cloud className="w-4 h-4" />
              <span>Hosting & Deployment</span>
            </div>
            <div className="text-sm font-bold text-white">Google Cloud Run & CDN</div>
            <p className="text-[11px] text-slate-400">
              Instant SSL certificates, auto-scaling, low latency edge delivery across the globe.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
