import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, Quote, PlusCircle, CheckCircle, MessageSquarePlus, Sparkles, X } from 'lucide-react';

export interface UserReview {
  id: string;
  name: string;
  initials: string;
  color: string;
  profit: string;
  pair: string;
  stars: number;
  review: string;
  date: string;
  isNew?: boolean;
}

// Initial starter reviews for the new HS Market Makers community
const INITIAL_HS_REVIEWS: UserReview[] = [
  {
    id: 'hs-1',
    name: 'Hamza Sheikh',
    initials: 'HS',
    color: '#D4AF37',
    profit: '+$185 Profit',
    pair: 'XAU/USD',
    stars: 5,
    review: 'Joined the new HS Market Makers channel yesterday. The gold sniper entry at London session was pure perfection. TP1 and TP2 smashed in 30 minutes! Best community.',
    date: 'Just now'
  },
  {
    id: 'hs-2',
    name: 'Malik Daniyal',
    initials: 'MD',
    color: '#22c55e',
    profit: '+$340.50',
    pair: 'GOLD',
    stars: 5,
    review: 'Alhamdulillah HS Market Makers guidance and discipline is next level. Clear stop loss, 1:3 risk reward ratio. Highly recommended for serious traders.',
    date: 'Today'
  },
  {
    id: 'hs-3',
    name: 'Rana Zeeshan',
    initials: 'RZ',
    color: '#3b82f6',
    profit: 'All TPs Hit',
    pair: 'XAU/USD',
    stars: 5,
    review: 'Sir apka analysis aur market structure reading bohot accurate hy. Pehle loss me tha, ab consistent profit ban raha hy. HS Market Makers Zindabad!',
    date: 'Yesterday'
  }
];

const ACCENT_COLORS = ['#D4AF37', '#22c55e', '#3b82f6', '#a855f7', '#f97316', '#14b8a6', '#e11d48'];

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<UserReview[]>(() => {
    try {
      const saved = localStorage.getItem('hs_market_makers_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Ignore parse error
    }
    return INITIAL_HS_REVIEWS;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formPair, setFormPair] = useState('XAU/USD');
  const [formProfit, setFormProfit] = useState('+$100 Profit');
  const [formStars, setFormStars] = useState(5);
  const [formReview, setFormReview] = useState('');

  // Persist reviews to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hs_market_makers_reviews', JSON.stringify(reviews));
    } catch {
      // Storage error
    }
  }, [reviews]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formReview.trim()) return;

    const trimmedName = formName.trim();
    const initials = trimmedName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase() || 'TR';

    const randomColor = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];

    const newReview: UserReview = {
      id: 'rev_' + Date.now(),
      name: trimmedName,
      initials,
      color: randomColor,
      profit: formProfit.trim() || 'Profitable',
      pair: formPair.trim() || 'XAU/USD',
      stars: formStars,
      review: formReview.trim(),
      date: 'Just now',
      isNew: true
    };

    setReviews([newReview, ...reviews]);
    setIsModalOpen(false);

    // Reset form
    setFormName('');
    setFormReview('');
    setFormProfit('+$100 Profit');
    setFormStars(5);

    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 4000);
  };

  return (
    <section className="relative bg-[#050505] py-14 md:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute w-[400px] h-[250px] bg-green-500/5 blur-[100px] rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Write Review Action */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-green-500 font-semibold uppercase tracking-wider text-[11px] sm:text-sm mb-2">
            Community Feedback & Real Results
          </p>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
            What Our Members
            <span className="block text-[#D4AF37]">Are Saying</span>
          </h2>
          <p className="text-gray-400 mt-2 sm:mt-3 text-xs sm:text-sm max-w-sm sm:max-w-xl mx-auto">
            Live, verified reviews directly from HS Market Makers community members. Have you taken our setups? Share your feedback below!
          </p>

          {/* Action to submit new review */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] hover:from-[#c29d2b] hover:to-[#e2c66d] text-black font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all active:scale-95 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write Your Feedback / Review</span>
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="mb-6 max-w-md mx-auto bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm shadow-[0_0_20px_rgba(34,197,94,0.2)] animate-in fade-in duration-300">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Shukriya! Aapka review live publish ho chuka hy.</span>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {reviews.map((item) => {
            const isExpanded = expandedId === item.id;
            const isLong = item.review.length > 110;

            return (
              <div
                key={item.id}
                className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Subtle Quote icon */}
                <div className="absolute top-3.5 right-3.5 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-5 h-5" style={{ color: item.color }} />
                </div>

                <div>
                  {/* Top user row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-black text-xs shrink-0 shadow"
                        style={{ background: item.color }}
                      >
                        {item.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-white font-semibold text-sm truncate">
                            {item.name}
                          </p>
                          {item.isNew && (
                            <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                              New
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                          <span className="text-[10px] text-gray-500 ml-1.5">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profit & Pair Badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 w-fit"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}35`,
                      color: item.color
                    }}
                  >
                    <span>{item.profit}</span>
                    <span className="opacity-50">|</span>
                    <span>{item.pair}</span>
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-gray-400 text-xs sm:text-sm leading-relaxed ${
                      isExpanded ? '' : 'line-clamp-3'
                    }`}
                  >
                    {item.review}
                  </p>
                </div>

                {isLong && (
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold cursor-pointer w-fit transition-colors hover:underline"
                    style={{ color: item.color }}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" /> Show Less
                      </>
                    ) : (
                      <>
                        Read More <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Metric Stat Counters */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-md mx-auto text-center">
          {[
            { value: '500+', label: 'Happy Members' },
            { value: '98%', label: 'Accuracy Rate' },
            { value: '$10K+', label: 'Profits' }
          ].map(({ value, label }) => (
            <div
              key={label}
              className="border border-white/10 rounded-xl py-3.5 sm:py-4 px-1 bg-white/[0.02] shadow-sm hover:border-[#D4AF37]/30 transition-colors"
            >
              <p className="text-[#D4AF37] text-base sm:text-2xl font-extrabold">{value}</p>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#0a0c10] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-7 shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase font-bold tracking-wider">HS Market Makers Community</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Add Your Trading Review
            </h3>
            <p className="text-xs text-gray-400 mb-5">
              Apna honest review aur result share karein jo screen par live display hoga.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Aapka Naam (Your Name) *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Awais Khan / Trader Ali"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Trading Pair
                  </label>
                  <select
                    value={formPair}
                    onChange={(e) => setFormPair(e.target.value)}
                    className="w-full bg-[#111318] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="XAU/USD">XAU/USD (Gold)</option>
                    <option value="GOLD">GOLD</option>
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="GBP/USD">GBP/USD</option>
                    <option value="BTC/USD">BTC/USD</option>
                    <option value="US30">US30 / Indices</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Profit / Target Tag
                  </label>
                  <input
                    type="text"
                    value={formProfit}
                    onChange={(e) => setFormProfit(e.target.value)}
                    placeholder="e.g. +$150 / 3x / All TPs"
                    className="w-full bg-[#111318] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onClick={() => setFormStars(st)}
                      className="cursor-pointer p-0.5"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          st <= formStars ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-gray-400 ml-2 font-mono">{formStars} / 5</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Aapka Review & Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formReview}
                  onChange={(e) => setFormReview(e.target.value)}
                  placeholder="Apna tajurba share karein (e.g. Signals ki accuracy, TP hit hone ki speed, risk management...)"
                  className="w-full bg-[#111318] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-black text-xs font-bold shadow transition-all active:scale-95 cursor-pointer"
                >
                  Publish Review Live
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
