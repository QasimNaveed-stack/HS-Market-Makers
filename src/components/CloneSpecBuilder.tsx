import React, { useState } from 'react';
import { DEFAULT_PAGES, DEFAULT_FEATURES, POPULAR_TEMPLATES } from '../data/cloneTemplates';
import { CloneProjectSpec, CloneTemplate } from '../types/cloneSpec';
import {
  Sparkles,
  Copy,
  Check,
  Globe,
  Layout,
  Sliders,
  Database,
  Palette,
  Layers,
  Download,
  Terminal,
  ExternalLink,
  RefreshCw,
  Play
} from 'lucide-react';

interface CloneSpecBuilderProps {
  spec: CloneProjectSpec;
  setSpec: React.Dispatch<React.SetStateAction<CloneProjectSpec>>;
  lang: 'roman-urdu' | 'english';
  onLaunchDemoType: (category: string) => void;
}

export const CloneSpecBuilder: React.FC<CloneSpecBuilderProps> = ({
  spec,
  setSpec,
  lang,
  onLaunchDemoType
}) => {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);

  // Quick helper to toggle pages
  const togglePage = (pageId: string) => {
    setSpec((prev) => {
      const exists = prev.selectedPages.includes(pageId);
      const updated = exists
        ? prev.selectedPages.filter((p) => p !== pageId)
        : [...prev.selectedPages, pageId];
      return { ...prev, selectedPages: updated };
    });
  };

  // Quick helper to toggle features
  const toggleFeature = (featureId: string) => {
    setSpec((prev) => {
      const exists = prev.selectedFeatures.includes(featureId);
      const updated = exists
        ? prev.selectedFeatures.filter((f) => f !== featureId)
        : [...prev.selectedFeatures, featureId];
      return { ...prev, selectedFeatures: updated };
    });
  };

  // Pre-load a template into the spec
  const applyTemplate = (template: CloneTemplate) => {
    setSpec({
      websiteUrl: template.inspiredBy.split(' / ')[0].toLowerCase() + '.com',
      projectName: template.name,
      targetBrand: template.inspiredBy.split(' / ')[0],
      projectType: template.category,
      isExactClone: true,
      customBrandName: '',
      colorPreference: 'indigo',
      selectedPages: ['home', 'catalog', 'detail', 'cart-checkout', 'auth'],
      selectedFeatures: ['search-filter', 'cart-state', 'auth-user', 'dark-mode', 'mobile-responsive'],
      backendType: template.category === 'saas' ? 'cloudsql' : 'firebase',
      specialNotes: template.samplePrompt,
      assetsProvided: {
        hasLogo: false,
        hasScreenshots: false,
        hasContent: false,
        needAiGeneration: true
      }
    });
  };

  // Generate the formatted prompt to copy
  const generatedPrompt = `### WEBSITE CLONE SPECIFICATION & DEVELOPMENT PROMPT

Target Website: ${spec.websiteUrl || 'Not specified (e.g. Daraz / Netflix / Stripe)'}
Project Name: ${spec.isExactClone ? spec.targetBrand || 'Target Clone' : (spec.customBrandName || 'Custom Rebranded Clone')}
Clone Type: ${spec.isExactClone ? 'Exact 1:1 Pixel & Functional Replication' : `Rebranded Clone (${spec.customBrandName})`}
Category: ${spec.projectType.toUpperCase()}

Required Pages:
${spec.selectedPages.map((p) => `- ${p.toUpperCase()}`).join('\n')}

Key Interactive Features:
${spec.selectedFeatures.map((f) => `- ${f}`).join('\n')}

Backend & Data Storage:
- Choice: ${spec.backendType.toUpperCase()} (${spec.backendType === 'firebase' ? 'Persistent Firebase Firestore & Auth' : spec.backendType === 'cloudsql' ? 'Relational Cloud SQL / PostgreSQL' : 'Local State / Mock Prototype'})

Design & Styling:
- Framework: React 19 + TypeScript + Tailwind CSS
- Responsive: Fully optimized for Mobile, Tablet, and Desktop screens
- Theme: ${spec.colorPreference} accent palette with polished dark/light mode

Special Requirements & Notes:
"${spec.specialNotes || 'Please make it interactive with working navigation, instant search, realistic mock data, and smooth micro-interactions.'}"

Please build this complete clone application directly!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left side: Interactive Configuration Steps */}
      <div className="lg:col-span-7 space-y-6">
        {/* Step indicator header */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 sm:pb-0">
            {[
              { num: 1, label: lang === 'roman-urdu' ? 'Target & Brand' : 'Target & Brand' },
              { num: 2, label: lang === 'roman-urdu' ? 'Pages (Scope)' : 'Pages (Scope)' },
              { num: 3, label: lang === 'roman-urdu' ? 'Features & Tech' : 'Features & Tech' },
              { num: 4, label: lang === 'roman-urdu' ? 'Notes & Custom' : 'Notes & Custom' }
            ].map((st) => (
              <button
                key={st.num}
                onClick={() => setActiveStep(st.num as any)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeStep === st.num
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                  activeStep === st.num ? 'bg-slate-950 text-amber-400' : 'bg-slate-800 text-slate-300'
                }`}>
                  {st.num}
                </span>
                <span>{st.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 1: Target Website & Branding */}
        {activeStep === 1 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>{lang === 'roman-urdu' ? 'Target Website Ka Link ya Naam' : 'Target Website Link or Name'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'roman-urdu'
                  ? 'Kis website ko replicate karna hy? (Maslan: daraz.pk, netflix.com, linear.app, amazon.com)'
                  : 'Enter the exact URL or brand you wish to clone.'}
              </p>
            </div>

            {/* Quick Template pills */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                {lang === 'roman-urdu' ? '⚡ Ya inme se koi popular clone chunein:' : '⚡ Or quick-load a popular blueprint:'}
              </label>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TEMPLATES.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => applyTemplate(tmpl)}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 hover:border-amber-400/50 hover:text-amber-300 text-slate-300 transition-colors"
                  >
                    {tmpl.inspiredBy.split(' / ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Website URL / Domain
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={spec.websiteUrl}
                    onChange={(e) => setSpec({ ...spec, websiteUrl: e.target.value })}
                    placeholder="e.g. https://daraz.pk or netflix.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'roman-urdu' ? 'Target Brand Naam' : 'Target Brand Name'}
                  </label>
                  <input
                    type="text"
                    value={spec.targetBrand}
                    onChange={(e) => setSpec({ ...spec, targetBrand: e.target.value })}
                    placeholder="e.g. Daraz / Netflix / Stripe"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {lang === 'roman-urdu' ? 'Website Ki Category' : 'Website Category'}
                  </label>
                  <select
                    value={spec.projectType}
                    onChange={(e) => setSpec({ ...spec, projectType: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="ecommerce">E-Commerce & Online Store</option>
                    <option value="saas">SaaS Landing & Web App</option>
                    <option value="streaming">Video / Media Streaming</option>
                    <option value="social">Social Media Feed / Community</option>
                    <option value="marketplace">Rental / Marketplace Booking</option>
                    <option value="portfolio">Portfolio & Creative Agency</option>
                    <option value="custom">Custom Web Application</option>
                  </select>
                </div>
              </div>

              {/* Exact vs Rebranded */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <label className="text-xs font-semibold text-slate-200">
                  {lang === 'roman-urdu' ? 'Branding Preference:' : 'Branding Strategy:'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSpec({ ...spec, isExactClone: true })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      spec.isExactClone
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-amber-300">Exact 1:1 Clone</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {lang === 'roman-urdu' ? 'Original logo, colors, aur name ke sath' : 'Replicate original branding and styling'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSpec({ ...spec, isExactClone: false })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      !spec.isExactClone
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-amber-300">Rebranded / Custom Brand</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {lang === 'roman-urdu' ? 'Aapka apna custom name aur color scheme' : 'Use your company name, custom palette'}
                    </div>
                  </button>
                </div>

                {!spec.isExactClone && (
                  <div className="pt-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      {lang === 'roman-urdu' ? 'Aapka Custom Brand Name:' : 'Your Custom Brand Name:'}
                    </label>
                    <input
                      type="text"
                      value={spec.customBrandName}
                      onChange={(e) => setSpec({ ...spec, customBrandName: e.target.value })}
                      placeholder="e.g. MyShopify / ApexFlow / StreamSphere"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="pt-3 flex justify-end">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
              >
                {lang === 'roman-urdu' ? 'Agla Step: Pages Select Karein →' : 'Next Step: Select Pages →'}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Pages Scope */}
        {activeStep === 2 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layout className="w-4 h-4 text-amber-400" />
                <span>{lang === 'roman-urdu' ? 'Website Ke Kaunse Pages Chahiyen? (Scope)' : 'Required Pages & Scope'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'roman-urdu'
                  ? 'Jo jo pages aapke clone me shamil karne hain unko tick karein:'
                  : 'Select all individual pages or sections to be developed.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DEFAULT_PAGES.map((page) => {
                const isSelected = spec.selectedPages.includes(page.id);
                return (
                  <div
                    key={page.id}
                    onClick={() => togglePage(page.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-indigo-500/80 bg-indigo-950/20 text-white shadow-sm'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="mt-1 h-4 w-4 rounded border-slate-700 text-indigo-600 focus:ring-0 cursor-pointer"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-slate-100">
                          {lang === 'roman-urdu' ? page.urduName : page.name}
                        </span>
                        <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${
                          page.priority === 'must-have'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {page.priority}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {page.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(1)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                ← Wapis
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
              >
                {lang === 'roman-urdu' ? 'Agla Step: Features Chunein →' : 'Next Step: Features →'}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Working Features & Tech Stack */}
        {activeStep === 3 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                <span>{lang === 'roman-urdu' ? 'Interactive Features & Backend' : 'Interactive Features & Backend'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'roman-urdu'
                  ? 'Website me kaun kaunse buttons aur interactive functions chalne chahiyen?'
                  : 'Choose interactive modules and data persistence.'}
              </p>
            </div>

            {/* Features check grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {DEFAULT_FEATURES.map((feat) => {
                const isSelected = spec.selectedFeatures.includes(feat.id);
                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-3 rounded-xl border cursor-pointer select-none transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'border-indigo-500/80 bg-indigo-950/20 text-white shadow-sm'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      className="mt-1 h-4 w-4 rounded border-slate-700 text-indigo-600 focus:ring-0 cursor-pointer"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-xs text-slate-100">
                          {lang === 'roman-urdu' ? feat.urduName : feat.name}
                        </span>
                        <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          {feat.complexity}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Backend Choice */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <label className="text-xs font-semibold text-slate-200">
                {lang === 'roman-urdu' ? 'Data Kahan Save Hoga? (Backend)' : 'Database & Data Storage Choice:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  {
                    id: 'mock-frontend',
                    title: 'Mock / Local State',
                    sub: lang === 'roman-urdu' ? 'Fastest (Demo & UI prototype)' : 'Instant UI prototype'
                  },
                  {
                    id: 'firebase',
                    title: 'Firebase Firestore',
                    sub: lang === 'roman-urdu' ? 'Real Auth + Real Cloud DB' : 'NoSQL Database & Auth'
                  },
                  {
                    id: 'cloudsql',
                    title: 'Cloud SQL / Postgres',
                    sub: lang === 'roman-urdu' ? 'Relational SQL database' : 'PostgreSQL relational'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSpec({ ...spec, backendType: item.id as any })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      spec.backendType === item.id
                        ? 'border-indigo-500 bg-indigo-500/10 text-white font-semibold'
                        : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>{item.title}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                ← Wapis
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
              >
                {lang === 'roman-urdu' ? 'Agla Step: Final Review →' : 'Next Step: Review →'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Notes & Custom Details */}
        {activeStep === 4 && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-5 animate-in fade-in duration-200">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Palette className="w-4 h-4 text-amber-400" />
                <span>{lang === 'roman-urdu' ? 'Khas Hidayat (Special Notes) & Instructions' : 'Special Notes & Assets'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'roman-urdu'
                  ? 'Koi bhi aisi baat jo khas taur par clone me chahiye (maslan Urdu font, fast animation, specific header layout):'
                  : 'Add any specific requirements, design instructions, or behavioral quirks.'}
              </p>
            </div>

            <div>
              <textarea
                rows={4}
                value={spec.specialNotes}
                onChange={(e) => setSpec({ ...spec, specialNotes: e.target.value })}
                placeholder={
                  lang === 'roman-urdu'
                    ? 'Maslan: Header sticky hona chahiye, checkout me Cash on Delivery option ho, aur products Pakistan rupees (Rs.) me show hon...'
                    : 'e.g. Ensure sticky nav, show currency in PKR / USD, include real working cart modal, and high-conversion CTA...'
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 leading-relaxed font-sans"
              />
            </div>

            {/* Asset checklist checkboxes */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-2.5">
              <label className="text-xs font-semibold text-slate-200 block">
                {lang === 'roman-urdu' ? 'Media aur Assets Ki Soorat-e-Haal:' : 'Assets Status:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={spec.assetsProvided.needAiGeneration}
                    onChange={(e) =>
                      setSpec({
                        ...spec,
                        assetsProvided: {
                          ...spec.assetsProvided,
                          needAiGeneration: e.target.checked
                        }
                      })
                    }
                    className="h-4 w-4 rounded border-slate-700 text-indigo-600 focus:ring-0"
                  />
                  <span>
                    {lang === 'roman-urdu' ? 'AI realistic dummy images aur products banaye' : 'Generate realistic dummy data & media'}
                  </span>
                </label>

                <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={spec.assetsProvided.hasLogo}
                    onChange={(e) =>
                      setSpec({
                        ...spec,
                        assetsProvided: {
                          ...spec.assetsProvided,
                          hasLogo: e.target.checked
                        }
                      })
                    }
                    className="h-4 w-4 rounded border-slate-700 text-indigo-600 focus:ring-0"
                  />
                  <span>
                    {lang === 'roman-urdu' ? 'Logo aur custom colors mere pas hain' : 'I have custom logos & hex codes'}
                  </span>
                </label>
              </div>
            </div>

            <div className="pt-3 flex justify-between items-center">
              <button
                onClick={() => setActiveStep(3)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                ← Wapis
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLaunchDemoType(spec.projectType)}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{lang === 'roman-urdu' ? 'Is Type Ka Live Demo Dekhein' : 'Test Live Sandbox'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right side: Live Generated Prompt & Output Summary */}
      <div className="lg:col-span-5 space-y-5 sticky top-20">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-amber-400" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {lang === 'roman-urdu' ? 'Tayar Shuda Prompt (Clone Spec)' : 'Ready Clone Specification'}
              </h3>
            </div>
            <button
              onClick={copyToClipboard}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (lang === 'roman-urdu' ? 'Copy Ho Gaya!' : 'Copied!') : (lang === 'roman-urdu' ? 'Copy Prompt' : 'Copy Prompt')}</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">
            {lang === 'roman-urdu'
              ? 'Ye prompt copy karke aap chat me bhej sakte hain ta ke hum foran is specification ke mutabiq exact code likh dein!'
              : 'Copy this spec and send it in our chat or use it with any engineer to build your clone.'}
          </p>

          {/* Formatted Code Block preview */}
          <div className="mt-3.5 bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-[11px] text-slate-300 max-h-96 overflow-y-auto leading-relaxed scrollbar-thin">
            <pre className="whitespace-pre-wrap font-mono text-slate-300">
              {generatedPrompt}
            </pre>
          </div>

          {/* Quick summary stats */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase">Pages</div>
              <div className="text-sm font-bold text-indigo-400">{spec.selectedPages.length}</div>
            </div>
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase">Features</div>
              <div className="text-sm font-bold text-amber-400">{spec.selectedFeatures.length}</div>
            </div>
            <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60">
              <div className="text-[10px] text-slate-400 uppercase">Backend</div>
              <div className="text-xs font-bold text-emerald-400 truncate">{spec.backendType}</div>
            </div>
          </div>

          {/* Interactive CTA */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => onLaunchDemoType(spec.projectType)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>
                {lang === 'roman-urdu'
                  ? `Is Clone Ka Interactive Demo Kholein (${spec.projectType.toUpperCase()})`
                  : `Launch Interactive Demo for ${spec.projectType.toUpperCase()}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
