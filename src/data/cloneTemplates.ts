import { CloneTemplate, PageRequirement, FeatureRequirement } from '../types/cloneSpec';

export const POPULAR_TEMPLATES: CloneTemplate[] = [
  {
    id: 'daraz-ecommerce',
    name: 'E-Commerce Marketplace (Daraz / Amazon Clone)',
    tagline: 'Multi-category shop with cart, product filters, reviews, and checkout',
    category: 'ecommerce',
    inspiredBy: 'Daraz.pk / Amazon / Shopify',
    colorTheme: 'from-orange-500 to-amber-600',
    estimatedEffort: '1 - 2 Days (MVP) / 1 Week (Full)',
    targetPages: ['Home & Flash Deals', 'Product Detail Page (PDP)', 'Cart & Slide Drawer', 'Checkout & Order Summary', 'User Profile & Order History'],
    keyFeatures: ['Live Search & Category Filters', 'Working Shopping Cart & Quantity sync', 'Customer Reviews & Star Ratings', 'Order Placement & Fake Payment Gateway', 'Wishlist / Save for later'],
    recommendedStack: {
      frontend: 'React + TypeScript',
      styling: 'Tailwind CSS',
      backend: 'Node / Express (or Next.js API)',
      database: 'Firebase Firestore or PostgreSQL',
      auth: 'Firebase Auth (Email + Google Sign-In)'
    },
    samplePrompt: 'Mujhe Daraz jesi e-commerce website ka clone chahiye jisme banner slider, flash deals, categories, product catalog with search/filter, functional cart drawer, aur checkout flow ho.'
  },
  {
    id: 'netflix-streaming',
    name: 'Video Streaming (Netflix Clone)',
    tagline: 'Hero billboard video trailer, carousel rows, modal preview & watchlist',
    category: 'streaming',
    inspiredBy: 'Netflix / Disney+',
    colorTheme: 'from-red-600 to-rose-700',
    estimatedEffort: '1 Day (Frontend UI) / 3 Days (With Video Backend)',
    targetPages: ['Browse & Hero Billboard', 'Genre Category Rows', 'Movie/Show Detail Modal', 'My Watchlist', 'Search by Title/Actor'],
    keyFeatures: ['Smooth Netflix-style horizontal row carousels', 'Hover video trailer auto-play / preview', 'Add to My List with local persistence', 'Category filtering (Action, Drama, Sci-Fi)', 'Dark cinematic UI theme'],
    recommendedStack: {
      frontend: 'React + TypeScript + Motion',
      styling: 'Tailwind CSS',
      backend: 'Serverless API / Cloud Storage',
      database: 'Firestore / Supabase',
      auth: 'Firebase Auth or JWT'
    },
    samplePrompt: 'Netflix style dark UI video streaming platform clone chahiye with hero spotlight banner, Netflix rows carousel, movie detail modal, video player, and My List bookmarking.'
  },
  {
    id: 'linear-stripe-saas',
    name: 'Modern SaaS Landing & Dashboard (Stripe / Linear)',
    tagline: 'High-conversion dark/light SaaS with pricing tiers, metrics & board',
    category: 'saas',
    inspiredBy: 'Linear.app / Stripe / Vercel',
    colorTheme: 'from-indigo-600 to-violet-700',
    estimatedEffort: '1 Day (Landing + Dashboard MVP)',
    targetPages: ['High-converting Landing Page', 'Interactive Pricing Calculator', 'App Dashboard (Metrics & Charts)', 'Kanban Task Board / Workspace', 'Settings & Team Members'],
    keyFeatures: ['Interactive monthly/annual pricing toggles', 'Live responsive dashboard with activity feeds', 'Modern glassmorphic / clean typography aesthetic', 'Interactive feature tabs & live product tour'],
    recommendedStack: {
      frontend: 'React + TypeScript + Tailwind CSS',
      styling: 'Tailwind CSS v4 + Lucide Icons',
      backend: 'Express.js backend route',
      database: 'Cloud SQL / PostgreSQL',
      auth: 'OAuth / Firebase Auth'
    },
    samplePrompt: 'Mujhe Linear/Stripe jesa ultra-clean modern SaaS clone chahiye jisme interactive hero, live product demo widget, interactive pricing table, and logged-in analytics dashboard ho.'
  },
  {
    id: 'twitter-social',
    name: 'Social Media Feed (Twitter / X / Threads Clone)',
    tagline: 'Real-time timeline, rich media composer, likes, retweets & bookmarks',
    category: 'social',
    inspiredBy: 'X (Twitter) / Threads',
    colorTheme: 'from-sky-500 to-blue-600',
    estimatedEffort: '2 - 3 Days',
    targetPages: ['Home Timeline (For You / Following)', 'Tweet / Post Composer with Image upload', 'Explore & Trending Hashtags', 'User Profile Page with Tabs', 'Notifications & Bookmarks'],
    keyFeatures: ['Instant like / retweet / bookmark counts update', 'Thread reply view', 'Real-time feed simulation', 'Image attachment preview & emoji picker', 'Character counter & clean sidebar navigation'],
    recommendedStack: {
      frontend: 'React + Tailwind CSS',
      styling: 'Tailwind CSS',
      backend: 'Express + WebSockets / Firebase',
      database: 'Firebase Firestore',
      auth: 'Firebase Auth (Google & Email)'
    },
    samplePrompt: 'Twitter/X ka modern clone banana hy jisme real-time tweet feed, post creation modal with image preview, interactive like/repost buttons, user profile tabs, aur trending hashtags ho.'
  },
  {
    id: 'airbnb-booking',
    name: 'Rental & Booking Platform (Airbnb Clone)',
    tagline: 'Map search, listing cards with photo galleries, date picker & booking modal',
    category: 'marketplace',
    inspiredBy: 'Airbnb / Booking.com',
    colorTheme: 'from-rose-500 to-pink-600',
    estimatedEffort: '2 - 4 Days',
    targetPages: ['Homepage with category icons', 'Search Results with interactive Cards', 'Listing Detail with Photo Grid', 'Booking & Date Picker Calculator', 'Host Dashboard'],
    keyFeatures: ['Interactive Category filter pills (Beaches, Cabins, Mansions)', 'Listing card image slider with favoriting', 'Nightly price calculation with cleaning fee breakdown', 'Google Maps / interactive location display'],
    recommendedStack: {
      frontend: 'React + TypeScript',
      styling: 'Tailwind CSS',
      backend: 'Node / Express',
      database: 'PostgreSQL or Firestore',
      auth: 'OAuth / Firebase'
    },
    samplePrompt: 'Airbnb ka clone chahiye with top category bar, listing cards with image sliders, detailed property view with reviews/amenities, and working booking reservation widget.'
  }
];

export const DEFAULT_PAGES: PageRequirement[] = [
  {
    id: 'home',
    name: 'Home / Landing Page',
    urduName: 'Home Page (Main Page)',
    description: 'Hero section, feature highlights, social proof, call to actions',
    priority: 'must-have',
    selected: true
  },
  {
    id: 'catalog',
    name: 'Product / Item Listing Page',
    urduName: 'Catalog ya Listings Page',
    description: 'Grid/list of items with filter sidebar, sort dropdown, search',
    priority: 'must-have',
    selected: true
  },
  {
    id: 'detail',
    name: 'Detail View Page',
    urduName: 'Detail Page (Single Item)',
    description: 'In-depth item view, image gallery, specs, reviews, actions',
    priority: 'must-have',
    selected: true
  },
  {
    id: 'cart-checkout',
    name: 'Cart & Checkout / Booking Flow',
    urduName: 'Cart & Checkout / Booking',
    description: 'Item counter, price total, discount coupon, address & payment step',
    priority: 'must-have',
    selected: true
  },
  {
    id: 'auth',
    name: 'Login & Signup Modal/Page',
    urduName: 'Login & Register Page',
    description: 'Email/password, social login (Google), password reset',
    priority: 'good-to-have',
    selected: true
  },
  {
    id: 'dashboard',
    name: 'User / Admin Dashboard',
    urduName: 'User / Admin Dashboard',
    description: 'Personalized stats, orders, saved items, settings',
    priority: 'good-to-have',
    selected: false
  },
  {
    id: 'pricing',
    name: 'Pricing & Plans Page',
    urduName: 'Pricing aur Plans Page',
    description: 'Tier cards (Free, Pro, Enterprise) with feature comparison table',
    priority: 'good-to-have',
    selected: false
  },
  {
    id: 'contact-about',
    name: 'About & Contact Us Page',
    urduName: 'About & Contact Us',
    description: 'Company story, contact form, FAQ accordion, location map',
    priority: 'optional',
    selected: false
  }
];

export const DEFAULT_FEATURES: FeatureRequirement[] = [
  {
    id: 'search-filter',
    category: 'interaction',
    name: 'Live Search & Instant Filters',
    urduName: 'Live Search aur Filters',
    description: 'Search bar with instant debounce filtering by price, category, rating',
    selected: true,
    complexity: 'Easy'
  },
  {
    id: 'cart-state',
    category: 'commerce',
    name: 'Interactive Cart / State Management',
    urduName: 'Cart System (Add, Remove, Quantity)',
    description: 'Global state with badge counter, slide-over drawer, local storage save',
    selected: true,
    complexity: 'Medium'
  },
  {
    id: 'auth-user',
    category: 'auth',
    name: 'User Authentication (Email & Google)',
    urduName: 'User Login & Signup',
    description: 'Secure sign-in, profile avatar, persistent session',
    selected: true,
    complexity: 'Medium'
  },
  {
    id: 'dark-mode',
    category: 'ui',
    name: 'Dark / Light Theme Toggle',
    urduName: 'Dark aur Light Theme Toggle',
    description: 'Smooth animated theme switcher that respects system preference',
    selected: true,
    complexity: 'Easy'
  },
  {
    id: 'database-crud',
    category: 'data',
    name: 'Persistent Database (Firebase / SQL)',
    urduName: 'Real Database Storage (CRUD)',
    description: 'Save user records, posts, or products in cloud database',
    selected: false,
    complexity: 'Advanced'
  },
  {
    id: 'checkout-flow',
    category: 'commerce',
    name: 'Checkout & Payment Simulator',
    urduName: 'Order Checkout & Fake Payment',
    description: 'Multi-step address form, shipping method, and card payment simulation',
    selected: true,
    complexity: 'Medium'
  },
  {
    id: 'reviews-rating',
    category: 'interaction',
    name: 'Interactive Reviews & Ratings',
    urduName: 'Reviews aur Star Rating System',
    description: 'User can leave star ratings and written reviews with instant feedback',
    selected: false,
    complexity: 'Easy'
  },
  {
    id: 'mobile-responsive',
    category: 'ui',
    name: '100% Mobile Responsive Layout',
    urduName: 'Mobile Responsive (Phone + Desktop)',
    description: 'Hamburger navigation, bottom navigation bar on mobile, touch gestures',
    selected: true,
    complexity: 'Easy'
  },
  {
    id: 'admin-panel',
    category: 'admin',
    name: 'Admin Management Panel',
    urduName: 'Admin Panel (Add/Edit Products)',
    description: 'CMS screen to upload products, manage orders, and view sales metrics',
    selected: false,
    complexity: 'Advanced'
  }
];

export const REQUIREMENTS_CHECKLIST_URDU = [
  {
    number: '01',
    title: 'Website Ka Link / Naam (Target URL)',
    englishTitle: 'Target Website URL or Name',
    desc: 'Wo website konsi hy jiska clone banana hy? (Maslan: daraz.pk, netflix.com, linear.app, airbnb.com, ya koi specific link). Agar offline hy to screenshots ya design images.',
    critical: true,
    badge: 'Must Have'
  },
  {
    number: '02',
    title: 'Scope & Pages (Kitne Pages Chahiyen?)',
    englishTitle: 'Scope & Pages Required',
    desc: 'Sirf Home/Landing page banana hy ya poori functional website? (Maslan: Home Page, Product List, Single Product Detail, Cart Drawer, Checkout, Login/Signup, User Profile).',
    critical: true,
    badge: 'Must Have'
  },
  {
    number: '03',
    title: 'Working Features & Functionality',
    englishTitle: 'Features & Interactions',
    desc: 'Website sirf static design dikhaye gi ya features bhi active chalne chahiyen? (Maslan: Working Cart, Live Search & Filters, Login/Signup, Like/Comments, Video Player, Form submission).',
    critical: true,
    badge: 'Essential'
  },
  {
    number: '04',
    title: 'Database & Backend Zaroorat',
    englishTitle: 'Backend & Data Storage',
    desc: 'Data kahan save hoga? Agar quick demo/prototype hy to local state/mock data kafi hy. Agar real data save karna hy to Firebase Firestore ya PostgreSQL database connect karenge.',
    critical: false,
    badge: 'Based on Needs'
  },
  {
    number: '05',
    title: 'Branding & Customization (Exact 1:1 ya Rebranded?)',
    englishTitle: 'Branding & Name',
    desc: 'Kia bilkul 100% exact original name aur logo ke sath chahiye, ya aapka apna brand name, logo, custom color theme (maslan green, blue, dark mode) apply karna hy?',
    critical: false,
    badge: 'Customizable'
  },
  {
    number: '06',
    title: 'Content & Assets (Photos, Texts, Products)',
    englishTitle: 'Content & Media Assets',
    desc: 'Kia aapke pas images/products ki list hy? Agar nahi hy to AI high-quality realistic dummy products, images, aur texts automatically generate kar dega.',
    critical: false,
    badge: 'Auto Provided'
  }
];
