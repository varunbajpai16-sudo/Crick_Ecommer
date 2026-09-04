import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Gauge,
  Gem,
  Truck,
  Eye,
} from "lucide-react";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "CRICX PRO X1 English Willow Bat",
    price: 14999,
    oldPrice: 17999,
    rating: 4.9,
    badge: "BESTSELLER",
    category: "Bats",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    name: "CRICX Elite Batting Gloves",
    price: 3499,
    oldPrice: 3999,
    rating: 4.8,
    badge: "NEW",
    category: "Gear",
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b04a5c7d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    name: "CRICX Velocity Cricket Shoes",
    price: 6999,
    oldPrice: 7999,
    rating: 4.7,
    badge: "",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    name: "CRICX Pro Match Ball",
    price: 1299,
    oldPrice: 1499,
    rating: 4.9,
    badge: "BESTSELLER",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    name: "CRICX Strike Kashmir Willow",
    price: 7499,
    oldPrice: 8999,
    rating: 4.8,
    badge: "HOT",
    category: "Bats",
    image:
      "https://images.unsplash.com/photo-1594470117722-de4b9a02eb5f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    name: "CRICX Impact Batting Pads",
    price: 2899,
    oldPrice: 3299,
    rating: 4.7,
    badge: "",
    category: "Gear",
    image:
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 7,
    name: "CRICX Aero Performance Trainer",
    price: 5999,
    oldPrice: 6999,
    rating: 4.8,
    badge: "NEW",
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 8,
    name: "CRICX Pro Grip Bat Handle",
    price: 899,
    oldPrice: 1099,
    rating: 4.6,
    badge: "",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  {
    name: "Cricket Bats",
    description: "Power, pickup & precision.",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Batting Gloves",
    description: "Control every shot.",
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b04a5c7d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cricket Shoes",
    description: "Built for explosive movement.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Protective Gear",
    description: "Confidence at every delivery.",
    image:
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cricket Balls",
    description: "Match-ready performance.",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Teamwear",
    description: "Look sharp. Play together.",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85",
  },
];

const navItems = [
  "Cricket Bats",
  "Cricket Balls",
  "Batting Gear",
  "Protection",
  "Clothing",
  "Accessories",
  "New Arrivals",
];

const filters = ["All", "Bats", "Gear", "Shoes", "Accessories"];

const reviews = [
  {
    name: "Arjun Sharma",
    initials: "AS",
    text: "Absolutely love the balance of the bat. The pickup feels incredible.",
  },
  {
    name: "Rohan Mehta",
    initials: "RM",
    text: "The gloves are comfortable, premium and match-ready.",
  },
  {
    name: "Karan Singh",
    initials: "KS",
    text: "CRICX feels like a proper professional cricket brand.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let frameId;

    const updateProgress = (now) => {
      const elapsed = now - start;
      const progress = Math.min((elapsed / 5000) * 100, 100);
      setLoadingProgress(progress);

      if (progress < 100) {
        frameId = requestAnimationFrame(updateProgress);
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timer);
    };
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [toast, setToast] = useState("");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 1800);
  };

  const addToCart = () => {
    setCartCount((count) => count + 1);
    setQuickView(null);
    showToast("Added to cart");
  };

  const toggleWishlist = (id) => {
    setWishlist((current) => {
      if (current.includes(id)) {
        showToast("Removed from wishlist");
        return current.filter((item) => item !== id);
      }

      showToast("Added to wishlist");
      return [...current, id];
    });
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#050606] text-white">
          <style>{`
            @keyframes loaderBall {
              0% { transform: translate3d(0, -10px, 0) rotate(0deg); }
              18% { transform: translate3d(22vw, 5px, 0) rotate(110deg); }
              38% { transform: translate3d(43vw, -7px, 0) rotate(240deg); }
              58% { transform: translate3d(63vw, 6px, 0) rotate(390deg); }
              78% { transform: translate3d(82vw, -5px, 0) rotate(540deg); }
              100% { transform: translate3d(105vw, 0, 0) rotate(720deg); }
            }

            @keyframes loaderTrail {
              0%, 100% { opacity: 0; transform: scaleX(0.2); }
              15%, 75% { opacity: 0.7; transform: scaleX(1); }
              90% { opacity: 0; transform: scaleX(0.4); }
            }

            @keyframes loaderPulse {
              0%, 100% { opacity: 0.35; transform: scale(0.98); }
              50% { opacity: 1; transform: scale(1); }
            }

            @keyframes loaderScan {
              0% { transform: translateX(-110%); }
              100% { transform: translateX(210%); }
            }

            .cricx-loader-ball {
              animation: loaderBall 5s cubic-bezier(.18,.75,.2,1) forwards;
            }

            .cricx-loader-trail {
              animation: loaderTrail 5s ease-in-out forwards;
            }

            .cricx-loader-pulse {
              animation: loaderPulse 1.4s ease-in-out infinite;
            }

            .cricx-loader-scan {
              animation: loaderScan 1.8s cubic-bezier(.4,0,.2,1) infinite;
            }

            @media (max-width: 640px) {
              @keyframes loaderBall {
                0% { transform: translate3d(0, -10px, 0) rotate(0deg); }
                22% { transform: translate3d(20vw, 5px, 0) rotate(110deg); }
                45% { transform: translate3d(43vw, -7px, 0) rotate(240deg); }
                68% { transform: translate3d(66vw, 6px, 0) rotate(390deg); }
                100% { transform: translate3d(108vw, 0, 0) rotate(720deg); }
              }
            }
          `}</style>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(22,163,74,.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,.04),transparent_42%)]" />

          <div className="absolute left-0 right-0 top-[54%] h-px bg-white/10">
            <div className="cricx-loader-trail absolute left-0 top-1/2 h-[3px] w-32 -translate-y-1/2 origin-left bg-gradient-to-r from-transparent via-[#16A34A] to-white/80 blur-[1px]" />
            <div className="cricx-loader-ball absolute left-[-18px] top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-[#a91515] shadow-[0_0_22px_rgba(220,40,40,.35)]">
              <div className="absolute left-1/2 top-[-2px] h-9 w-[2px] -translate-x-1/2 rotate-[38deg] rounded-full bg-white/80" />
              <div className="absolute left-1/2 top-[-2px] h-9 w-[2px] -translate-x-1/2 -rotate-[38deg] rounded-full bg-white/80" />
            </div>
          </div>

          <div className="relative flex h-full flex-col items-center justify-center px-6">
            <div className="cricx-loader-pulse text-center">
              <div className="font-['Space_Grotesk'] text-[4.5rem] font-bold leading-none tracking-[-0.1em] sm:text-[7rem]">
                CRIC<span className="text-[#16A34A]">X</span>
              </div>

              <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.38em] text-white/45 sm:text-[10px]">
                PLAY BOLD. PLAY BETTER.
              </p>
            </div>

            <div className="mt-32 w-full max-w-md">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/35">
                  Preparing your game
                </span>
                <span className="font-mono text-[10px] font-bold text-[#16A34A]">
                  {Math.round(loadingProgress)}%
                </span>
              </div>

              <div className="relative h-[3px] overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#16A34A] shadow-[0_0_14px_rgba(22,163,74,.7)] transition-[width] duration-75"
                  style={{ width: `${loadingProgress}%` }}
                />
                <div className="cricx-loader-scan absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>

              <div className="mt-4 flex justify-between text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                <span>CRICX / 2026</span>
                <span>Loading experience</span>
              </div>
            </div>
          </div>
        </div>
      )}

    <div className="min-h-screen bg-[#f7f7f5] text-[#111]">
      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      <div className="bg-[#080909] px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white">
        Free shipping on orders above ₹1999
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          {/* Logo */}

          <button
            onClick={() => navigate("/")}
            className="font-['Space_Grotesk'] text-[26px] font-bold tracking-[-0.07em]"
          >
            CRIC<span className="text-[#16A34A]">X</span>
          </button>

          {/* Desktop navigation */}

          <nav className="hidden items-center gap-5 xl:flex">
            {[
              ["Cricket Bats", "/cricket-bats"],
              ["Cricket Balls", "/cricket-balls"],
              ["Batting Gear", "/batting-gears"],
              ["Protection", "/protection"],
              ["Clothing", "/clothing"],
              ["Accessories", "/accessories"],
              ["New Arrivals", "/new-arrivals"],
            ].map(([item, path]) => (
              <button
                key={item}
                onClick={() => navigate(path)}
                className="text-[10px] font-bold uppercase tracking-[0.08em] text-black/70 transition duration-300 hover:text-[#16A34A]"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right actions */}

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hidden rounded-full p-2.5 transition hover:bg-black/5 sm:block"
            >
              <Search size={18} />
            </button>

            <button className="relative hidden rounded-full p-2.5 transition hover:bg-black/5 sm:block">
              <Heart size={18} />

              {wishlist.length > 0 && (
                <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#16A34A] px-1 text-[8px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button className="hidden rounded-full p-2.5 transition hover:bg-black/5 sm:block">
              <User size={18} />
            </button>

            <button className="relative rounded-full p-2.5 transition hover:bg-black/5">
              <ShoppingBag size={19} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#16A34A] px-1 text-[8px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="rounded-full p-2.5 transition hover:bg-black/5 xl:hidden"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>

        {/* Search */}

        {searchOpen && (
          <div className="border-t border-black/10 bg-white px-5 py-4">
            <div className="mx-auto flex max-w-[900px] items-center gap-3 rounded-full border border-black/10 bg-black/[0.03] px-5 py-3">
              <Search size={17} className="text-black/40" />

              <input
                autoFocus
                placeholder="Search bats, gloves, shoes..."
                className="w-full bg-transparent text-sm outline-none"
              />

              <button onClick={() => setSearchOpen(false)}>
                <X size={17} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {mobileMenu && (
        <div className="fixed inset-0 z-[100] bg-[#090a0a] text-white">
          <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
            <div className="font-['Space_Grotesk'] text-[26px] font-bold tracking-[-0.07em]">
              CRIC<span className="text-[#16A34A]">X</span>
            </div>

            <button
              onClick={() => setMobileMenu(false)}
              className="rounded-full border border-white/10 p-3"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="px-5 pt-8">
            {[
              ["Cricket Bats", "/cricket-bats"],
              ["Cricket Balls", "/cricket-balls"],
              ["Batting Gear", "/batting-gears"],
              ["Protection", "/protection"],
              ["Clothing", "/clothing"],
              ["Accessories", "/accessories"],
              ["New Arrivals", "/new-arrivals"],
            ].map(([item, path]) => (
              <button
                key={item}
                onClick={() => {
                  setMobileMenu(false);
                  navigate(path);
                }}
                className="flex w-full items-center justify-between border-b border-white/10 py-5 text-left text-xl font-bold"
              >
                {item}

                <ArrowRight size={19} />
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-black lg:h-[730px]">
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2200&q=90"
          alt="Premium cricket"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_55%,rgba(22,163,74,.28),transparent_30%)]" />

        <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-center px-5 sm:px-8 lg:h-[730px] lg:px-10">
          <div className="max-w-[800px] text-white">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] shadow-[0_0_14px_#16A34A]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
                New 2026 Collection
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-[clamp(4rem,10vw,8.5rem)] font-bold leading-[0.82] tracking-[-0.08em]">
              DOMINATE
              <br />
              <span className="text-[#16A34A]">EVERY BALL.</span>
            </h1>

            <p className="mt-8 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
              Premium cricket equipment engineered for players who refuse to
              settle.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#16A34A] hover:text-white"
              >
                Shop Cricket Bats
                <ArrowRight size={15} />
              </a>

              <a
                href="#collection"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] backdrop-blur-md transition duration-300 hover:bg-white/10"
              >
                Explore Collection
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SHOP BY CATEGORY
      ===================================================== */}

      <section className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
              Explore CRICX
            </p>

            <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              SHOP BY CATEGORY
            </h2>

            <p className="mt-3 text-sm text-black/50">
              Everything you need to elevate your game.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <a
                key={category.name}
                href="#shop"
                className="group relative min-h-[310px] overflow-hidden rounded-[24px] bg-black"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/5" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">
                        {category.name}
                      </h3>

                      <p className="mt-1 text-xs text-white/60">
                        {category.description}
                      </p>
                    </div>

                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#16A34A]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section id="shop" className="py-24 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-7 border-b border-black/10 pb-7 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                Built for performance
              </p>

              <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                PRO-LEVEL EQUIPMENT.
              </h2>

              <p className="mt-3 max-w-xl text-sm text-black/50">
                Professional-grade equipment designed for serious cricketers.
              </p>
            </div>

            {/* Filters */}

            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] transition ${
                    filter === item
                      ? "bg-black text-white"
                      : "bg-black/5 text-black/55 hover:bg-black/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            {filteredProducts.map((product) => {
              const liked = wishlist.includes(product.id);

              return (
                <article key={product.id} className="group relative">
                  {/* Image */}

                  <div className="relative aspect-[4/4.6] overflow-hidden rounded-[22px] bg-[#e9e9e5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                    />

                    {product.badge && (
                      <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em]">
                        {product.badge}
                      </span>
                    )}

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border backdrop-blur-md transition ${
                        liked
                          ? "border-[#16A34A] bg-[#16A34A] text-white"
                          : "border-black/10 bg-white/80"
                      }`}
                    >
                      <Heart size={15} fill={liked ? "currentColor" : "none"} />
                    </button>

                    {/* Hover actions */}

                    <div className="absolute inset-x-4 bottom-4 flex translate-y-2 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <button
                        onClick={() => setQuickView(product)}
                        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/95 py-3 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur"
                      >
                        <Eye size={14} />
                        Quick View
                      </button>

                      <button
                        onClick={addToCart}
                        className="grid h-11 w-11 place-items-center rounded-full bg-[#16A34A] text-white transition hover:scale-105"
                      >
                        <ShoppingBag size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Details */}

                  <div className="pt-4">
                    <div className="mb-1 flex items-center gap-1 text-[10px] font-bold">
                      <Star
                        size={11}
                        fill="currentColor"
                        className="text-[#16A34A]"
                      />
                      {product.rating}
                    </div>

                    <h3 className="text-sm font-bold leading-5">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-extrabold">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      <span className="text-xs text-black/35 line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={addToCart}
                      className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#16A34A]"
                    >
                      Add to cart →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROMO BANNER
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="relative min-h-[450px] overflow-hidden rounded-[28px] bg-black text-white">
          <img
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1900&q=85"
            alt="Cricket stadium"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="relative flex min-h-[450px] items-center p-8 sm:p-14 lg:p-20">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                Performance Series / 2026
              </p>

              <h2 className="mt-4 font-['Space_Grotesk'] text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-7xl">
                ENGINEERED FOR THE NEXT INNINGS.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/65">
                Professional cricket gear. Built without compromise.
              </p>

              <a
                href="#shop"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-black transition hover:bg-[#16A34A] hover:text-white"
              >
                Explore Performance Gear
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CRICX
      ===================================================== */}

      <section className="border-y border-black/10 py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
              The CRICX standard
            </p>

            <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.05em]">
              WHY CRICX?
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Gauge,
                "Performance First",
                "Equipment engineered to help you perform at your best.",
              ],
              [
                ShieldCheck,
                "Premium Protection",
                "Advanced protection without compromising mobility.",
              ],
              [
                Gem,
                "Pro-Level Quality",
                "Built with premium materials trusted by serious players.",
              ],
              [Truck, "Fast Delivery", "Reliable delivery across India."],
            ].map(([Icon, title, description]) => (
              <div
                key={title}
                className="bg-[#f7f7f5] p-8 transition hover:bg-white"
              >
                <Icon size={24} strokeWidth={1.5} />

                <h3 className="mt-8 font-bold">{title}</h3>

                <p className="mt-2 text-xs leading-6 text-black/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          2026 COLLECTION
      ===================================================== */}

      <section id="collection" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-20 lg:px-10">
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[28px] bg-black">
            <img
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1500&q=90"
              alt="2026 collection"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            <span className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">
              CRICX / 2026
            </span>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
              The new collection
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-7xl">
              BUILT FOR
              <br />
              THE MOMENT.
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-black/55">
              From the first ball to the final run, every detail matters. Meet
              the new generation of CRICX performance gear.
            </p>

            <a
              href="#shop"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#16A34A]"
            >
              Shop the Collection
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
              Player feedback
            </p>

            <h2 className="mt-2 font-['Space_Grotesk'] text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              WHAT PLAYERS SAY
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-[24px] border border-black/10 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex gap-1 text-[#16A34A]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={13} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-8 text-lg font-semibold leading-7 tracking-tight">
                  “{review.text}”
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-black text-[10px] font-bold text-white">
                    {review.initials}
                  </div>

                  <div>
                    <p className="text-xs font-bold">{review.name}</p>

                    <p className="text-[10px] text-black/40">Verified player</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <section className="bg-[#090a0a] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8 lg:px-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
            Stay in the game
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl font-['Space_Grotesk'] text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            STAY AHEAD OF THE GAME.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/50">
            Get first access to new drops, exclusive offers and cricket updates.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              showToast("Welcome to CRICX");
            }}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm outline-none placeholder:text-white/35 focus:border-[#16A34A]"
            />

            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-black transition hover:bg-[#16A34A] hover:text-white">
              Join CRICX
              <ArrowRight size={15} />
            </button>
          </form>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#111212] text-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
            <div>
              <div className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.06em]">
                CRIC<span className="text-[#16A34A]">X</span>
              </div>

              <p className="mt-3 max-w-xs text-xs leading-6 text-white/40">
                PLAY BOLD. PLAY BETTER.
              </p>

              <div className="mt-7 flex gap-2">
                {[FaInstagram, FaFacebookF, FaYoutube].map((Icon) => (
                  <a
                    href="#"
                    key={Icon.name}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-[#16A34A]"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                [
                  "SHOP",
                  "Cricket Bats",
                  "Cricket Balls",
                  "Batting Gear",
                  "Protection",
                  "Shoes",
                  "Accessories",
                ],
                [
                  "HELP",
                  "Contact Us",
                  "Shipping",
                  "Returns",
                  "Track Order",
                  "Size Guide",
                  "FAQs",
                ],
                [
                  "COMPANY",
                  "About CRICX",
                  "Our Story",
                  "Careers",
                  "Store Locator",
                ],
                [
                  "LEGAL",
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Refund Policy",
                ],
              ].map((column) => (
                <div key={column[0]}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                    {column[0]}
                  </p>

                  <div className="mt-5 space-y-3">
                    {column.slice(1).map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block text-xs text-white/60 transition hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/30 sm:flex-row">
            <span>© 2026 CRICX. All rights reserved.</span>

            <span>Made for the next innings ↗</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          QUICK VIEW MODAL
      ===================================================== */}

      {quickView && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >
          <div
            className="grid max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[28px] bg-white md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-[350px] bg-[#e9e9e5]">
              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-full min-h-[350px] w-full object-cover"
              />
            </div>

            <div className="relative p-7 sm:p-10">
              <button
                onClick={() => setQuickView(null)}
                className="absolute right-5 top-5 rounded-full bg-black/5 p-2"
              >
                <X size={17} />
              </button>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                {quickView.category}
              </p>

              <h2 className="mt-3 font-['Space_Grotesk'] text-3xl font-bold leading-tight">
                {quickView.name}
              </h2>

              <div className="mt-4 flex items-center gap-1 text-xs">
                <Star
                  size={13}
                  fill="currentColor"
                  className="text-[#16A34A]"
                />
                {quickView.rating} / 5
              </div>

              <p className="mt-6 text-2xl font-extrabold">
                ₹{quickView.price.toLocaleString("en-IN")}
              </p>

              <p className="mt-5 text-sm leading-6 text-black/50">
                Designed around performance, comfort and match-day confidence. A
                premium CRICX essential for serious players.
              </p>

              <button
                onClick={addToCart}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-[#16A34A]"
              >
                <ShoppingBag size={16} />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          TOAST
      ===================================================== */}

      {toast && (
        <div className="fixed bottom-5 left-1/2 z-[120] -translate-x-1/2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white shadow-2xl">
          {toast}
        </div>
      )}
    </div>
    </>
  );
}
