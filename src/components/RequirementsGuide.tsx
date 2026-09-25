import React, { useState } from 'react';
import { REQUIREMENTS_CHECKLIST_URDU, POPULAR_TEMPLATES } from '../data/cloneTemplates';
import { CloneTemplate } from '../types/cloneSpec';
import {
  HelpCircle,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  ShoppingBag,
  Film,
  Compass,
  MessageSquare
} from 'lucide-react';

interface RequirementsGuideProps {
  lang: 'roman-urdu' | 'english';
  onSelectTemplate: (template: CloneTemplate) => void;
  onGoToBuilder: () => void;
}

export const RequirementsGuide: React.FC<RequirementsGuideProps> = ({
  lang,
  onSelectTemplate,
  onGoToBuilder
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      {/* 6 Step Detailed Breakdown */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-black border border-indigo-500/30">
                01
              </span>
              <span>
                {lang === 'roman-urdu'
                  ? 'Complete Checklist: Website Clone Ke Liye 6 Zaroori Cheezein'
                  : 'Complete Checklist: 6 Essential Inputs for Cloning'}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'roman-urdu'
                ? 'Har point par click karke dekhein ke AI ya Developer ko kia details dene se best result milta hy.'
                : 'Click each requirement to see recommendations, sample answers, and practical examples.'}
            </p>
          </div>
          <button
            onClick={onGoToBuilder}
            className="self-start sm:self-auto text-xs font-semibold px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/20 transition-colors flex items-center gap-1.5"
          >
            <span>{lang === 'roman-urdu' ? 'Spec Builder Kholein' : 'Open Spec Builder'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {REQUIREMENTS_CHECKLIST_URDU.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.number}
                className={`border rounded-xl transition-all ${
                  isExpanded
                    ? 'border-indigo-500/50 bg-slate-950/70 shadow-md'
                    : 'border-slate-800/80 bg-slate-950/30 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="text-sm font-mono font-bold text-amber-400 shrink-0">
                      {item.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm text-slate-100">
                          {lang === 'roman-urdu' ? item.title : item.englishTitle}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                            item.critical
                              ? 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                              : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5 max-w-xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 text-slate-400">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800/60 text-xs text-slate-300 space-y-3">
                    <div className="bg-slate-900/80 rounded-lg p-3.5 border border-slate-800 space-y-2">
                      <div className="font-medium text-amber-300">
                        {lang === 'roman-urdu' ? '💡 Misal (Example) Kaise Batayein:' : '💡 Example Prompt:'}
                      </div>
                      {index === 0 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Bhai mujhe daraz.pk ka clone banana hy, khas tor par unka flash deals aur product page.&quot;
                        </p>
                      )}
                      {index === 1 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Pages me: Homepage, Product Listing page with category filter, Product detail page with image zoom, aur Cart drawer chahiye.&quot;
                        </p>
                      )}
                      {index === 2 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Add to cart button click karne pe cart counter update ho, search bar me likhte hi products filter hon, aur light/dark mode switch ho.&quot;
                        </p>
                      )}
                      {index === 3 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Abhi prototype ke liye local state ya dummy products kafi hain, ya phir Firebase Firestore connect kar do ta ke orders save hon.&quot;
                        </p>
                      )}
                      {index === 4 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Logo aur colors exact Daraz jese rakho, ya iska naam &apos;BazaarMart&apos; rakh do aur theme dark blue kar do.&quot;
                        </p>
                      )}
                      {index === 5 && (
                        <p className="font-mono text-slate-300 bg-slate-950 p-2.5 rounded border border-slate-800">
                          &quot;Electronics, fashion, aur groceries ki 10 realistic products with HD pictures aur prices generate kar do.&quot;
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        {lang === 'roman-urdu'
                          ? 'Aap inme se jitni zyada maloomat denge, clone utna hi perfect aur fast banega.'
                          : 'The clearer your input on these 6 areas, the faster and more precise your clone will be.'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Popular Ready-to-Clone Templates */}
      <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-black border border-amber-500/30">
                02
              </span>
              <span>
                {lang === 'roman-urdu'
                  ? 'Ready-to-Clone Blueprints (Aam Tore Par Kaunse Clones Bante Hain?)'
                  : 'Ready-to-Clone Blueprints (Popular Archetypes)'}
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {lang === 'roman-urdu'
                ? 'Kisi bhi card par click karein to uski saari requirements aur ready prompt automatically load ho jayegi.'
                : 'Click any template to instantly load full specifications and ready-to-use prompt.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_TEMPLATES.map((tmpl) => (
            <div
              key={tmpl.id}
              className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[11px] font-semibold text-amber-400/90 tracking-wide uppercase">
                    {tmpl.inspiredBy}
                  </span>
                  <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {tmpl.estimatedEffort}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                  {tmpl.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {tmpl.tagline}
                </p>

                {/* Key features bullets */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5">
                  <div className="text-[11px] font-semibold text-slate-300">
                    {lang === 'roman-urdu' ? 'Khas Features:' : 'Key Included Features:'}
                  </div>
                  {tmpl.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {tmpl.recommendedStack.frontend}
                </span>
                <button
                  onClick={() => onSelectTemplate(tmpl)}
                  className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group-hover:translate-x-0.5 transform duration-150"
                >
                  <span>{lang === 'roman-urdu' ? 'Yeh Clone Select Karein' : 'Load Blueprint'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
