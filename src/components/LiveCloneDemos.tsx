import React, { useState } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  X,
  Check,
  Star,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Repeat2,
  Bookmark,
  Share2,
  BarChart3,
  Calendar,
  Layers,
  ArrowUpRight,
  Filter,
  CreditCard,
  Lock
} from 'lucide-react';

interface LiveCloneDemosProps {
  initialDemo?: 'ecommerce' | 'saas' | 'social';
  lang: 'roman-urdu' | 'english';
}

// Sample product for E-Commerce demo
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  category: string;
  image: string;
  badge?: string;
  inStock: boolean;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Wireless ANC Noise-Cancelling Headphones Pro',
    price: 89,
    originalPrice: 149,
    rating: 4.8,
    reviewsCount: 142,
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80',
    badge: 'Flash Deal -40%',
    inStock: true
  },
  {
    id: 'p2',
    name: 'Smart AMOLED Fitness Tracker & Heart Rate Watch',
    price: 49,
    originalPrice: 79,
    rating: 4.6,
    reviewsCount: 88,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    inStock: true
  },
  {
    id: 'p3',
    name: 'Minimal Mechanical RGB Gaming Keyboard (Blue Switch)',
    price: 65,
    originalPrice: 99,
    rating: 4.9,
    reviewsCount: 215,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80',
    badge: 'Popular',
    inStock: true
  },
  {
    id: 'p4',
    name: 'Ultra-Slim Magnetic Wireless Power Bank 10,000mAh',
    price: 35,
    originalPrice: 50,
    rating: 4.5,
    reviewsCount: 64,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d8173087ec?w=500&auto=format&fit=crop&q=80',
    inStock: true
  }
];

export const LiveCloneDemos: React.FC<LiveCloneDemosProps> = ({
  initialDemo = 'ecommerce',
  lang
}) => {
  const [activeDemo, setActiveDemo] = useState<'ecommerce' | 'saas' | 'social'>(initialDemo);

  // E-Commerce Demo States
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  // SaaS Demo States
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [saasTasks, setSaasTasks] = useState([
    { id: 't1', title: 'Implement Stripe Checkout API', status: 'progress', priority: 'High', points: '5' },
    { id: 't2', title: 'Design mobile responsive sidebar', status: 'done', priority: 'Medium', points: '3' },
    { id: 't3', title: 'Setup PostgreSQL Cloud instance', status: 'backlog', priority: 'Urgent', points: '8' },
    { id: 't4', title: 'Add dark/light theme persistence', status: 'done', priority: 'Low', points: '2' }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Social / Twitter Demo States
  const [tweets, setTweets] = useState([
    {
      id: 'tw1',
      author: 'Hamza Developer',
      handle: '@hamzacodes',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      time: '12m',
      content: 'Just launched our Daraz & Netflix clone in AI Studio! React 19 + Tailwind CSS is blazing fast. Drop your target website links below! 🚀🔥',
      likes: 24,
      liked: false,
      retweets: 5,
      retweeted: false,
      bookmarks: 8,
      bookmarked: false
    },
    {
      id: 'tw2',
      author: 'Sara UI/UX',
      handle: '@saradesigns',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      time: '1h',
      content: 'Website clone ke liye requirements bilkul clear honi chahiyen: Target link, Scope of pages, and working features. Ye 3 cheezein hon to developer 1 din me live app khara kar deta hy! 💻✨',
      likes: 58,
      liked: true,
      retweets: 12,
      retweeted: false,
      bookmarks: 19,
      bookmarked: true
    }
  ]);
  const [newTweetText, setNewTweetText] = useState('');

  // E-Commerce cart actions
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as { product: Product; quantity: number }[]
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Social tweet actions
  const toggleLike = (id: string) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, liked: !t.liked, likes: t.liked ? t.likes - 1 : t.likes + 1 }
          : t
      )
    );
  };

  const toggleRetweet = (id: string) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, retweeted: !t.retweeted, retweets: t.retweeted ? t.retweets - 1 : t.retweets + 1 }
          : t
      )
    );
  };

  const toggleBookmark = (id: string) => {
    setTweets((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, bookmarked: !t.bookmarked, bookmarks: t.bookmarked ? t.bookmarks - 1 : t.bookmarks + 1 }
          : t
      )
    );
  };

  const addTweet = () => {
    if (!newTweetText.trim()) return;
    const newPost = {
      id: 'tw_' + Date.now(),
      author: 'You (Preview)',
      handle: '@creator',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      time: 'Just now',
      content: newTweetText,
      likes: 0,
      liked: false,
      retweets: 0,
      retweeted: false,
      bookmarks: 0,
      bookmarked: false
    };
    setTweets([newPost, ...tweets]);
    setNewTweetText('');
  };

  // SaaS Kanban task move
  const moveTask = (taskId: string, targetStatus: string) => {
    setSaasTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: targetStatus } : t))
    );
  };

  const addSaasTask = () => {
    if (!newTaskTitle.trim()) return;
    setSaasTasks([
      ...saasTasks,
      {
        id: 't_' + Date.now(),
        title: newTaskTitle,
        status: 'backlog',
        priority: 'Medium',
        points: '3'
      }
    ]);
    setNewTaskTitle('');
  };

  const filteredProducts = products.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Demo Selector Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {lang === 'roman-urdu' ? 'Interactive Sandbox' : 'Live Interactive Sandbox'}
            </span>
          </div>
          <h2 className="text-lg font-bold text-white mt-1">
            {lang === 'roman-urdu'
              ? 'Dekhein: Hum Kis Tarah Ka Real Working Clone Bnatay Hain'
              : 'Test-Drive Real Clone Archetypes Built Directly in AI Studio'}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'roman-urdu'
              ? 'Ye koi dummy screenshot nahi balki live working code hy! Buttons click karein, cart me item add karein, tweet karein.'
              : 'Every button, modal, and state update below is fully functional.'}
          </p>
        </div>

        {/* Demo Switcher Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveDemo('ecommerce')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDemo === 'ecommerce'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🛒 Daraz / E-Commerce
          </button>
          <button
            onClick={() => setActiveDemo('saas')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDemo === 'saas'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ⚡ Linear / Stripe SaaS
          </button>
          <button
            onClick={() => setActiveDemo('social')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeDemo === 'social'
                ? 'bg-sky-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            💬 X / Twitter Feed
          </button>
        </div>
      </div>

      {/* ----------------- DEMO 1: E-COMMERCE CLONE ----------------- */}
      {activeDemo === 'ecommerce' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in duration-200">
          {/* Top Bar / Header of Clone */}
          <div className="bg-slate-900 border-b border-slate-800 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="font-black text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                BazaarMall
              </span>
              <span className="text-[10px] bg-orange-500/10 text-orange-400 border border-orange-500/20 px-2 py-0.5 rounded font-mono">
                Daraz/Amazon Clone
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md relative min-w-[200px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search headphones, watch, keyboard..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3 py-1.5 bg-orange-500 hover:bg-orange-400 text-slate-950 rounded-lg text-xs font-bold transition-all shadow"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart (${cartTotal.toFixed(2)})</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-slate-950 text-orange-400 border border-orange-400 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>

          {/* Flash Deals Promo Banner */}
          <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-6 py-2.5 text-slate-950 text-xs font-bold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>⚡ FLASH SALE: Up to 50% OFF on Top Tech & Accessories — Ends Tonight!</span>
            </div>
            <span className="hidden sm:inline font-mono uppercase bg-slate-950/20 px-2 py-0.5 rounded text-[11px]">
              Code: CLONE50
            </span>
          </div>

          {/* Categories Bar */}
          <div className="bg-slate-900/60 border-b border-slate-800/80 px-6 py-2.5 flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-slate-400 text-xs font-medium mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {['All', 'Audio', 'Wearables', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-400/40 transition-all group"
              >
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {p.badge && (
                    <span className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      {p.badge}
                    </span>
                  )}
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold">{p.rating}</span>
                      <span className="text-slate-500 text-[10px]">({p.reviewsCount})</span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {p.name}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-white">${p.price}</div>
                      <div className="text-[10px] text-slate-500 line-through">${p.originalPrice}</div>
                    </div>

                    <button
                      onClick={() => addToCart(p)}
                      className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow active:scale-95 transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide-in Cart Drawer */}
          {isCartOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
              <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-200">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-amber-400" />
                      <h3 className="font-bold text-base text-white">Your Shopping Cart</h3>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="text-slate-400 hover:text-white p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Cart Items List */}
                  <div className="mt-4 space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                    {cart.length === 0 ? (
                      <div className="text-center py-12 text-slate-400 text-xs">
                        Your cart is empty. Click &quot;Add&quot; on any product!
                      </div>
                    ) : (
                      cart.map(({ product, quantity }) => (
                        <div
                          key={product.id}
                          className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center gap-3"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="text-xs font-bold text-white truncate">
                              {product.name}
                            </h5>
                            <div className="text-xs text-amber-400 font-semibold mt-0.5">
                              ${product.price} × {quantity} = ${(product.price * quantity).toFixed(2)}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(product.id, -1)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 text-xs"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-mono text-white font-bold">{quantity}</span>
                              <button
                                onClick={() => updateQuantity(product.id, 1)}
                                className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 text-xs"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => updateQuantity(product.id, -quantity)}
                            className="text-rose-400 hover:text-rose-300 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Cart Footer */}
                {cart.length > 0 && (
                  <div className="pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Subtotal:</span>
                      <span className="text-white font-bold font-mono">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Standard Delivery:</span>
                      <span className="text-emerald-400 font-bold">FREE</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-bold pt-2 border-t border-slate-800/80">
                      <span className="text-white">Total:</span>
                      <span className="text-amber-400 font-mono text-lg">${cartTotal.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={() => {
                        setCheckoutComplete(true);
                        setTimeout(() => {
                          setCart([]);
                          setCheckoutComplete(false);
                          setIsCartOpen(false);
                        }, 2500);
                      }}
                      className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                    >
                      {checkoutComplete ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Order Placed Successfully! (Demo)</span>
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-4 h-4" />
                          <span>Simulate Checkout & Pay Now</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ----------------- DEMO 2: SAAS LINEAR/STRIPE CLONE ----------------- */}
      {activeDemo === 'saas' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white">LinearSync SaaS</span>
                <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-0.5 rounded font-mono">
                  SaaS / Product Management Clone
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Modern high-performance issue tracker and team workspace.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  billingCycle === 'monthly' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-3 py-1 rounded-lg font-medium transition-all flex items-center gap-1 ${
                  billingCycle === 'annual' ? 'bg-indigo-600 text-white font-bold' : 'text-slate-400'
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1 rounded">
                  -20%
                </span>
              </button>
            </div>
          </div>

          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <div className="text-xs text-slate-400">Total Active Tasks</div>
              <div className="text-2xl font-black text-white mt-1">{saasTasks.length}</div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                <ArrowUpRight className="w-3.5 h-3.5" /> +14% completed this week
              </div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <div className="text-xs text-slate-400">Sprint Velocity</div>
              <div className="text-2xl font-black text-indigo-400 mt-1">42 pts</div>
              <div className="text-[11px] text-indigo-300 mt-1">Sprint 14 in progress</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <div className="text-xs text-slate-400">Plan Status</div>
              <div className="text-2xl font-black text-amber-400 mt-1">
                {billingCycle === 'annual' ? '$19/mo (Annual)' : '$24/mo'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Enterprise SLA Active</div>
            </div>
          </div>

          {/* Interactive Kanban Board */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Live Interactive Kanban Board (Click buttons to move tasks):
              </h4>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="New task title..."
                  className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={addSaasTask}
                  className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Task</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/* Backlog Column */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 space-y-2">
                <div className="text-xs font-bold text-slate-400 flex items-center justify-between pb-2 border-b border-slate-800">
                  <span>Backlog</span>
                  <span className="font-mono text-[11px]">
                    {saasTasks.filter((t) => t.status === 'backlog').length}
                  </span>
                </div>
                {saasTasks
                  .filter((t) => t.status === 'backlog')
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2"
                    >
                      <div className="text-xs font-semibold text-white">{task.title}</div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                          {task.points} pts
                        </span>
                        <button
                          onClick={() => moveTask(task.id, 'progress')}
                          className="text-indigo-400 hover:text-indigo-300 font-bold"
                        >
                          Start →
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* In Progress Column */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 space-y-2">
                <div className="text-xs font-bold text-indigo-400 flex items-center justify-between pb-2 border-b border-slate-800">
                  <span>In Progress</span>
                  <span className="font-mono text-[11px]">
                    {saasTasks.filter((t) => t.status === 'progress').length}
                  </span>
                </div>
                {saasTasks
                  .filter((t) => t.status === 'progress')
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-slate-950 p-3 rounded-lg border border-indigo-900/40 space-y-2"
                    >
                      <div className="text-xs font-semibold text-white">{task.title}</div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 px-1.5 py-0.5 rounded">
                          {task.points} pts
                        </span>
                        <button
                          onClick={() => moveTask(task.id, 'done')}
                          className="text-emerald-400 hover:text-emerald-300 font-bold"
                        >
                          Mark Done ✓
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Done Column */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3 space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center justify-between pb-2 border-b border-slate-800">
                  <span>Completed</span>
                  <span className="font-mono text-[11px]">
                    {saasTasks.filter((t) => t.status === 'done').length}
                  </span>
                </div>
                {saasTasks
                  .filter((t) => t.status === 'done')
                  .map((task) => (
                    <div
                      key={task.id}
                      className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-2 opacity-80"
                    >
                      <div className="text-xs font-semibold text-slate-300 line-through">
                        {task.title}
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                          Done
                        </span>
                        <button
                          onClick={() => moveTask(task.id, 'backlog')}
                          className="text-slate-400 hover:text-slate-200"
                        >
                          Reopen
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- DEMO 3: TWITTER / X CLONE ----------------- */}
      {activeDemo === 'social' && (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-6 max-w-3xl mx-auto space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-white">X / Twitter Clone</span>
              <span className="text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-2 py-0.5 rounded font-mono">
                Social Feed
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">Real-time interactions</span>
          </div>

          {/* Post Composer */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                alt="Avatar"
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <textarea
                value={newTweetText}
                onChange={(e) => setNewTweetText(e.target.value)}
                placeholder="What is happening?! Type here to test live post creation..."
                rows={2}
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none resize-none"
              />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
              <span className="text-xs text-slate-500 font-mono">
                {280 - newTweetText.length} characters left
              </span>
              <button
                onClick={addTweet}
                disabled={!newTweetText.trim()}
                className="px-4 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-slate-950 font-bold text-xs transition-all shadow"
              >
                Post (Tweet)
              </button>
            </div>
          </div>

          {/* Feed List */}
          <div className="space-y-3">
            {tweets.map((tw) => (
              <div
                key={tw.id}
                className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={tw.avatar}
                    alt={tw.author}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <span className="font-bold text-xs text-white mr-1.5">{tw.author}</span>
                    <span className="text-xs text-slate-500">{tw.handle} · {tw.time}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed pl-11">
                  {tw.content}
                </p>

                {/* Engagement Action Bar */}
                <div className="flex items-center justify-between pl-11 pt-2 text-slate-400 text-xs">
                  <button className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span>3</span>
                  </button>

                  <button
                    onClick={() => toggleRetweet(tw.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      tw.retweeted ? 'text-emerald-400 font-bold' : 'hover:text-emerald-400'
                    }`}
                  >
                    <Repeat2 className="w-4 h-4" />
                    <span>{tw.retweets}</span>
                  </button>

                  <button
                    onClick={() => toggleLike(tw.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      tw.liked ? 'text-rose-500 font-bold' : 'hover:text-rose-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${tw.liked ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{tw.likes}</span>
                  </button>

                  <button
                    onClick={() => toggleBookmark(tw.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      tw.bookmarked ? 'text-amber-400 font-bold' : 'hover:text-amber-400'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${tw.bookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                    <span>{tw.bookmarks}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
