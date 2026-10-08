import React, { useState, useEffect } from 'react';
import {
  Star,
  ChevronDown,
  ChevronUp,
  Quote,
  CheckCircle,
  MessageSquarePlus,
  Sparkles,
  X,
  Trash2,
  LogIn,
  Users,
  Loader2,
  AlertCircle,
  Flag,
  Info
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  FirestoreReview,
  subscribeToReviews,
  createReview,
  deleteReview,
  submitReviewReport
} from '../firebase/reviewsService';

export interface DisplayReview {
  id: string;
  userId?: string;
  name: string;
  initials: string;
  photoUrl?: string;
  color: string;
  profit: string;
  pair: string;
  stars: number;
  review: string;
  date: string;
  isFirestore?: boolean;
  isDemo?: boolean;
}

// Sample layout previews - clearly distinguished and labeled for visual reference
const SAMPLE_LAYOUT_PREVIEWS: DisplayReview[] = [
  {
    id: 'sample-layout-1',
    name: 'Sample Member A',
    initials: 'SM',
    color: '#D4AF37',
    profit: '+$185 Setup',
    pair: 'XAU/USD',
    stars: 5,
    review: 'Example feedback: Clear market structure breakdowns with defined entry invalidation levels during the London session.',
    date: 'Sample Layout',
    isDemo: true,
  },
  {
    id: 'sample-layout-2',
    name: 'Sample Member B',
    initials: 'SB',
    color: '#DC2626',
    profit: '1:3 Risk/Reward',
    pair: 'GOLD',
    stars: 5,
    review: 'Example feedback: Disciplined stop-loss management and patient execution during high-volatility New York trading hours.',
    date: 'Sample Layout',
    isDemo: true,
  },
  {
    id: 'sample-layout-3',
    name: 'Sample Member C',
    initials: 'SC',
    color: '#E2E8F0',
    profit: 'Key Level Hit',
    pair: 'XAU/USD',
    stars: 5,
    review: 'Example feedback: Detailed multi-timeframe liquidity sweep perspectives shared inside the community discussion channel.',
    date: 'Sample Layout',
    isDemo: true,
  }
];

const ACCENT_COLORS = ['#D4AF37', '#DC2626', '#E2E8F0', '#F59E0B', '#EF4444', '#F5D77F'];

export const ReviewsSection: React.FC = () => {
  const { currentUser, signInWithGoogle, loading: authLoading } = useAuth();

  const [firestoreReviews, setFirestoreReviews] = useState<FirestoreReview[]>([]);
  const [isReviewsLoading, setIsReviewsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeletingId, setIsDeletingId] = useState<string | null>(null);
  const [reviewToDelete, setReviewToDelete] = useState<string | null>(null);

  // Form states
  const [formName, setFormName] = useState('');
  const [formPair, setFormPair] = useState('XAU/USD');
  const [formProfit, setFormProfit] = useState('+$100 Target');
  const [formStars, setFormStars] = useState(5);
  const [formReview, setFormReview] = useState('');
  const [formValidationErr, setFormValidationErr] = useState<string | null>(null);

  // Reporting state
  const [reportingReviewId, setReportingReviewId] = useState<string | null>(null);
  const [reportReason, setReportReason] = useState('Inappropriate content');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);

  // Subscribe to live Firestore reviews
  useEffect(() => {
    setIsReviewsLoading(true);
    const unsubscribe = subscribeToReviews(
      (items) => {
        setFirestoreReviews(items);
        setIsReviewsLoading(false);
      },
      (err) => {
        console.error('Failed to stream reviews:', err);
        setErrorMsg('Unable to connect to live review feed.');
        setIsReviewsLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Pre-fill name when currentUser becomes available
  useEffect(() => {
    if (currentUser?.displayName) {
      setFormName(currentUser.displayName);
    }
  }, [currentUser]);

  // Combined list: Real Firestore community reviews first, then clearly labeled sample previews if needed
  const realReviews: DisplayReview[] = firestoreReviews.map((item) => {
    const initials = (item.authorName || 'TR')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

    let formattedDate = 'Recently';
    if (item.createdAt?.toDate) {
      const d = item.createdAt.toDate();
      const diffMinutes = Math.floor((Date.now() - d.getTime()) / 60000);
      if (diffMinutes < 1) formattedDate = 'Just now';
      else if (diffMinutes < 60) formattedDate = `${diffMinutes}m ago`;
      else if (diffMinutes < 1440) formattedDate = `${Math.floor(diffMinutes / 60)}h ago`;
      else formattedDate = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    }

    return {
      id: item.id,
      userId: item.userId,
      name: item.authorName,
      initials: initials || 'TR',
      photoUrl: item.authorPhoto,
      color: item.color || '#D4AF37',
      profit: item.profit || 'Community Member',
      pair: item.pair || 'XAU/USD',
      stars: item.rating,
      review: item.content,
      date: formattedDate,
      isFirestore: true,
      isDemo: false,
    };
  });

  const displayReviews: DisplayReview[] =
    realReviews.length >= 3
      ? realReviews
      : [...realReviews, ...SAMPLE_LAYOUT_PREVIEWS.slice(0, 3 - realReviews.length)];

  const handleOpenModal = () => {
    setFormValidationErr(null);
    if (currentUser?.displayName) {
      setFormName(currentUser.displayName);
    }
    setIsModalOpen(true);
  };

  const handleGoogleSignInFromModal = async () => {
    try {
      await signInWithGoogle();
    } catch {
      // Handled via context
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;

    const trimmedName = formName.trim();
    const trimmedReview = formReview.trim();

    if (!trimmedName) {
      setFormValidationErr('Please provide a display name.');
      return;
    }

    if (trimmedReview.length < 5) {
      setFormValidationErr('Please write at least 5 characters in your review.');
      return;
    }

    if (trimmedReview.length > 1000) {
      setFormValidationErr('Review cannot exceed 1000 characters.');
      return;
    }

    setFormValidationErr(null);
    setIsSubmitting(true);
    setErrorMsg(null);

    const randomColor = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];

    try {
      await createReview({
        userId: currentUser.uid,
        authorName: trimmedName,
        authorPhoto: currentUser.photoURL || undefined,
        userEmail: currentUser.email || undefined,
        rating: formStars,
        profit: formProfit.trim() || 'Community Member',
        pair: formPair.trim() || 'XAU/USD',
        content: trimmedReview,
        color: randomColor,
      });

      setIsModalOpen(false);
      setFormReview('');
      setFormProfit('+$100 Target');
      setFormStars(5);

      setToastMessage('Thank you! Your community review has been published live.');
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 5000);
    } catch (err) {
      console.error('Submit review error:', err);
      setErrorMsg('Failed to publish review. Please check your network connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestDelete = (reviewId: string) => {
    setReviewToDelete(reviewId);
  };

  const handleConfirmDelete = async () => {
    if (!reviewToDelete) return;
    setIsDeletingId(reviewToDelete);
    try {
      await deleteReview(reviewToDelete);
      setReviewToDelete(null);
      setToastMessage('Your review has been successfully removed.');
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 4000);
    } catch (err) {
      console.error('Delete error:', err);
      setErrorMsg('Could not delete review. Only the original author can perform this action.');
      setTimeout(() => setErrorMsg(null), 5000);
    } finally {
      setIsDeletingId(null);
    }
  };

  const handleOpenReport = (reviewId: string) => {
    if (!currentUser) {
      handleOpenModal();
      return;
    }
    setReportingReviewId(reviewId);
    setReportReason('Inappropriate content');
  };

  const handleSubmitReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser || !reportingReviewId) return;

    setIsSubmittingReport(true);
    try {
      await submitReviewReport({
        reviewId: reportingReviewId,
        reporterId: currentUser.uid,
        reason: reportReason,
      });
      setReportingReviewId(null);
      setToastMessage('Thank you. Your report has been submitted for administrative review.');
      setShowSuccessToast(true);
      setTimeout(() => setShowSuccessToast(false), 5000);
    } catch (err) {
      console.error('Report error:', err);
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmittingReport(false);
    }
  };

  return (
    <section className="relative bg-[#070709] py-14 md:py-24 overflow-hidden">
      {/* Background ambient lighting (Gold & Ruby) */}
      <div className="absolute w-[400px] h-[300px] bg-[#D4AF37]/10 blur-[140px] rounded-full top-0 left-1/3 -translate-x-1/2 pointer-events-none" />
      <div className="absolute w-[350px] h-[250px] bg-[#DC2626]/10 blur-[130px] rounded-full bottom-10 right-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading & Write Review Action */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[#D4AF37] font-semibold uppercase tracking-wider text-[11px] sm:text-sm mb-2 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
            <Users className="w-4 h-4 text-[#D4AF37]" />
            <span>Community Feedback & Live Reviews</span>
          </p>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What Community Members
            <span className="block gold-text-gradient">Are Saying</span>
          </h2>
          <p className="text-gray-300 mt-2 sm:mt-3 text-xs sm:text-sm max-w-sm sm:max-w-xl mx-auto leading-relaxed">
            Authentic reviews submitted directly by community members. Have you taken our setups? Share your thoughts below.
          </p>

          {/* Action to submit new review */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] hover:from-[#c29d2b] hover:to-[#e2c66d] text-black font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all active:scale-95 cursor-pointer hover:scale-105"
            >
              <MessageSquarePlus className="w-4 h-4 fill-black" />
              <span>Write Community Review</span>
            </button>

            {currentUser && (
              <span className="text-xs text-gray-300 flex items-center gap-1.5 bg-[#0E0F14] border border-[#D4AF37]/25 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse" />
                Signed in as <strong className="text-white">{currentUser.displayName || 'Community Member'}</strong>
              </span>
            )}
          </div>
        </div>

        {/* Success Toast */}
        {showSuccessToast && (
          <div className="mb-6 max-w-md mx-auto bg-[#0E0F14] border border-[#D4AF37]/50 text-[#F5D77F] px-4 py-3 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm shadow-[0_0_25px_rgba(212,175,55,0.25)] animate-in fade-in duration-300">
            <CheckCircle className="w-4 h-4 shrink-0 text-[#D4AF37]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Loading Spinner for Initial Feed */}
        {isReviewsLoading && firestoreReviews.length === 0 && (
          <div className="flex justify-center py-8">
            <Loader2 className="w-6 h-6 text-[#D4AF37] animate-spin" />
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {displayReviews.map((item) => {
            const isExpanded = expandedId === item.id;
            const isLong = item.review.length > 110;
            const isAuthor = currentUser && item.userId === currentUser.uid;

            return (
              <div
                key={item.id}
                className="relative bg-[#0E0F14]/90 border border-[#D4AF37]/20 rounded-2xl p-4 sm:p-5 hover:border-[#D4AF37]/50 hover:bg-[#12141C] transition-all duration-300 group flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Subtle Quote icon */}
                <div className="absolute top-3.5 right-3.5 opacity-15 group-hover:opacity-30 transition-opacity duration-300">
                  <Quote className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <div>
                  {/* Top user row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.photoUrl ? (
                        <img
                          src={item.photoUrl}
                          alt={item.name}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shrink-0 shadow border border-[#D4AF37]/50"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-black text-xs shrink-0 shadow border border-[#D4AF37]/40"
                          style={{ background: item.color }}
                        >
                          {item.initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <p className="text-white font-semibold text-sm truncate">
                            {item.name}
                          </p>
                          {item.isFirestore ? (
                            <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#DC2626]/20 text-[#FCA5A5] border border-[#DC2626]/40 flex items-center gap-0.5">
                              Live Review
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase font-semibold px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                              Sample Preview
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {Array.from({ length: item.stars }).map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-[#D4AF37] text-[#D4AF37]" />
                          ))}
                          <span className="text-[10px] text-gray-400 ml-1.5">{item.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons on card: Author Delete or Community Report */}
                    <div className="flex items-center gap-1 shrink-0">
                      {isAuthor && item.isFirestore && (
                        <button
                          onClick={() => handleRequestDelete(item.id)}
                          disabled={isDeletingId === item.id}
                          title="Delete your review"
                          className="text-gray-400 hover:text-[#DC2626] p-1.5 rounded-lg hover:bg-[#DC2626]/10 transition-colors cursor-pointer"
                        >
                          {isDeletingId === item.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#DC2626]" />
                          ) : (
                            <Trash2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}

                      {!isAuthor && item.isFirestore && (
                        <button
                          onClick={() => handleOpenReport(item.id)}
                          title="Report inappropriate review"
                          className="text-gray-500 hover:text-gray-300 p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
                        >
                          <Flag className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Profit & Pair Badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-3 w-fit"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}45`,
                      color: item.color
                    }}
                  >
                    <span>{item.profit}</span>
                    <span className="opacity-50">|</span>
                    <span>{item.pair}</span>
                  </div>

                  {/* Review Text */}
                  <p
                    className={`text-gray-300 text-xs sm:text-sm leading-relaxed ${
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

        {/* Honest Value Pillars (Non-quantitative & Transparent) */}
        <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-4 max-w-sm sm:max-w-lg mx-auto text-center">
          {[
            { value: 'XAU/USD', label: 'Primary Market Focus' },
            { value: 'Disciplined', label: 'Risk:Reward Framework' },
            { value: 'Real-Time', label: 'Structure Analysis' }
          ].map(({ value, label }) => (
            <div
              key={label}
              className="border border-[#D4AF37]/25 rounded-xl py-3.5 sm:py-4 px-2 bg-[#0E0F14]/70 shadow-sm hover:border-[#D4AF37]/50 transition-colors"
            >
              <p className="text-[#D4AF37] text-sm sm:text-xl font-black">{value}</p>
              <p className="text-gray-400 text-[10px] sm:text-xs mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => !isSubmitting && setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#0A0B10] border border-[#D4AF37]/45 rounded-2xl p-6 sm:p-7 shadow-[0_0_55px_rgba(212,175,55,0.3)] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              disabled={isSubmitting}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase font-extrabold tracking-wider">HS Market Makers Community</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Submit Community Feedback
            </h3>
            <p className="text-xs text-gray-400 mb-5 leading-relaxed">
              Share your genuine feedback and market experience. Published reviews appear live in the community feed.
            </p>

            {/* If user is NOT signed in: Google Sign-in Prompt */}
            {!currentUser ? (
              <div className="bg-[#12141C] border border-[#D4AF37]/25 rounded-xl p-5 text-center my-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-3 text-[#D4AF37]">
                  <LogIn className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Google Sign-In Required
                </h4>
                <p className="text-xs text-gray-400 mb-4 max-w-xs mx-auto leading-relaxed">
                  To maintain an authentic community and prevent spam, please sign in with your Google account to post a review.
                </p>
                <button
                  onClick={handleGoogleSignInFromModal}
                  disabled={authLoading}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-100 text-black font-semibold text-xs transition-all shadow cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            ) : (
              /* If signed in: Review submission form */
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Active user banner */}
                <div className="flex items-center gap-2.5 p-2.5 bg-[#12141C] border border-[#D4AF37]/30 rounded-xl">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || ''}
                      className="w-8 h-8 rounded-full object-cover border border-[#D4AF37] shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-xs shrink-0">
                      {currentUser.displayName?.[0] || 'T'}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white truncate">
                      {currentUser.displayName || 'Community Member'}
                    </p>
                    <p className="text-[10px] text-gray-400 truncate flex items-center gap-1">
                      <Info className="w-3 h-3 text-[#D4AF37] shrink-0" />
                      <span>Authenticated via Google (email kept private)</span>
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Enter your display name"
                    className="w-full bg-[#12141C] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
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
                      className="w-full bg-[#12141C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
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
                      Result / Profit Tag
                    </label>
                    <input
                      type="text"
                      maxLength={60}
                      value={formProfit}
                      onChange={(e) => setFormProfit(e.target.value)}
                      placeholder="e.g. +$180, 1:2 RR, Breakeven"
                      className="w-full bg-[#12141C] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
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
                    <span className="text-xs text-[#D4AF37] ml-2 font-mono font-bold">{formStars} / 5</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Review *
                  </label>
                  <textarea
                    required
                    minLength={5}
                    maxLength={1000}
                    rows={3}
                    value={formReview}
                    onChange={(e) => {
                      setFormReview(e.target.value);
                      if (formValidationErr) setFormValidationErr(null);
                    }}
                    placeholder="Share your experience with HS Market Makers. Please keep your feedback honest and respectful."
                    className="w-full bg-[#12141C] border border-white/10 rounded-xl p-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] leading-relaxed"
                  />
                  <div className="flex justify-between items-center text-[10px] text-gray-400 mt-1">
                    <span>Public community feedback (minimum 5 characters)</span>
                    <span className={formReview.trim().length < 5 ? 'text-[#DC2626]' : 'text-[#D4AF37]'}>
                      {formReview.trim().length} / 1000
                    </span>
                  </div>
                </div>

                {formValidationErr && (
                  <div className="p-2.5 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/40 text-[#FCA5A5] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#DC2626]" />
                    <span>{formValidationErr}</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/40 text-[#FCA5A5] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#DC2626]" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] hover:from-[#c29d2b] hover:to-[#e2c66d] disabled:opacity-50 text-black text-xs font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.35)] transition-all active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <span>Publish Review</span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Moderation Report Modal */}
      {reportingReviewId && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => !isSubmittingReport && setReportingReviewId(null)}
        >
          <div
            className="relative w-full max-w-sm bg-[#0A0B10] border border-[#DC2626]/40 rounded-2xl p-5 shadow-[0_0_40px_rgba(220,38,38,0.3)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setReportingReviewId(null)}
              disabled={isSubmittingReport}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#DC2626]">
              <Flag className="w-4 h-4" />
              <span className="text-xs uppercase font-extrabold tracking-wider">Report Review</span>
            </div>

            <h4 className="text-sm font-bold text-white mb-1">
              Flag Content for Moderation
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Help maintain a high standard in our community by reporting inappropriate or misleading reviews.
            </p>

            <form onSubmit={handleSubmitReport} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Reason for Report
                </label>
                <select
                  value={reportReason}
                  onChange={(e) => setReportReason(e.target.value)}
                  className="w-full bg-[#12141C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626]"
                >
                  <option value="Inappropriate content or language">Inappropriate content or language</option>
                  <option value="Spam or commercial promotion">Spam or commercial promotion</option>
                  <option value="Misleading or inaccurate claim">Misleading or inaccurate claim</option>
                  <option value="Harassment or personal attack">Harassment or personal attack</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  disabled={isSubmittingReport}
                  onClick={() => setReportingReviewId(null)}
                  className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingReport}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#ef4444] hover:to-[#dc2626] text-white text-xs font-semibold shadow transition-all cursor-pointer"
                >
                  {isSubmittingReport ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Submit Report</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* In-App Review Deletion Confirmation Modal (Reliable in preview panels / iframes) */}
      {reviewToDelete && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => !isDeletingId && setReviewToDelete(null)}
        >
          <div
            className="relative w-full max-w-sm bg-[#0E0F14] border border-[#DC2626]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(220,38,38,0.35)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-full bg-[#DC2626]/15 border border-[#DC2626]/40 flex items-center justify-center mx-auto mb-3 text-[#DC2626]">
              <Trash2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white text-center mb-1">
              Delete Your Review?
            </h4>
            <p className="text-xs text-gray-400 text-center mb-5 leading-relaxed">
              Are you sure you want to remove your review from the community feed? This action cannot be undone.
            </p>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                disabled={!!isDeletingId}
                onClick={() => setReviewToDelete(null)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold cursor-pointer transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!!isDeletingId}
                onClick={handleConfirmDelete}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#DC2626] to-[#B91C1C] hover:from-[#EF4444] hover:to-[#DC2626] text-white text-xs font-bold shadow transition-all cursor-pointer disabled:opacity-50"
              >
                {isDeletingId ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Deleting...</span>
                  </>
                ) : (
                  <span>Yes, Delete</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
