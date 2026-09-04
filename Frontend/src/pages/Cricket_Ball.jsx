import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  Star,
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Gauge,
  Gem,
  Truck,
  RotateCcw,
  Eye,
} from "lucide-react";

const balls = [
  {
    id: 1,
    name: "CRICX PRO MATCH RED",
    price: 1299,
    oldPrice: 1499,
    rating: 4.9,
    reviews: 186,
    badge: "BESTSELLER",
    type: "Leather",
    format: "Red Ball",
    level: "Professional",
    construction: "4-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    name: "CRICX ELITE TEST 156",
    price: 1699,
    oldPrice: 1999,
    rating: 4.9,
    reviews: 92,
    badge: "PREMIUM",
    type: "Leather",
    format: "Red Ball",
    level: "Professional",
    construction: "5-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    name: "CRICX CLUB 4-PIECE",
    price: 899,
    oldPrice: 1099,
    rating: 4.8,
    reviews: 241,
    badge: "POPULAR",
    type: "Leather",
    format: "Red Ball",
    level: "Club",
    construction: "4-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    name: "CRICX WHITE PRO LIMITED",
    price: 1399,
    oldPrice: 1599,
    rating: 4.8,
    reviews: 78,
    badge: "NEW",
    type: "Leather",
    format: "White Ball",
    level: "Professional",
    construction: "4-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    name: "CRICX ODI MATCH WHITE",
    price: 1199,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 134,
    badge: "",
    type: "Leather",
    format: "White Ball",
    level: "Match",
    construction: "4-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    name: "CRICX TRAINER RED",
    price: 499,
    oldPrice: 599,
    rating: 4.6,
    reviews: 315,
    badge: "VALUE",
    type: "Synthetic",
    format: "Red Ball",
    level: "Training",
    construction: "2-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    name: "CRICX PREMIER LEAGUE BALL",
    price: 1099,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 109,
    badge: "HOT",
    type: "Leather",
    format: "White Ball",
    level: "Club",
    construction: "4-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    name: "CRICX PRO TRAINING BALL",
    price: 699,
    oldPrice: 799,
    rating: 4.7,
    reviews: 164,
    badge: "",
    type: "Synthetic",
    format: "White Ball",
    level: "Training",
    construction: "2-Piece",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
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

export default function CricketBalls() {
   const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState(0);
  const [quickView, setQuickView] = useState(null);

  const [sort, setSort] = useState("Featured");
  const [ballType, setBallType] = useState("All");
  const [format, setFormat] = useState("All");
  const [level, setLevel] = useState("All");
  const [price, setPrice] = useState(2000);

  const [filterOpen, setFilterOpen] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 1800);
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

  const addToCart = () => {
    setCart((current) => current + 1);
    setQuickView(null);
    showToast("Added to cart");
  };

  const filteredBalls = useMemo(() => {
    let result = balls.filter((ball) => {
      const typeMatch =
        ballType === "All" || ball.type === ballType;

      const formatMatch =
        format === "All" || ball.format === format;

      const levelMatch =
        level === "All" || ball.level === level;

      const priceMatch = ball.price <= price;

      return (
        typeMatch &&
        formatMatch &&
        levelMatch &&
        priceMatch
      );
    });

    if (sort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [ballType, format, level, price, sort]);

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-[#111]">

      {/* =====================================================
          ANNOUNCEMENT
      ===================================================== */}

      <div className="bg-[#080909] py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white">
        Free shipping on orders above ₹1999
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">

          {/* LOGO */}

          <a
            href="/"
            className="font-['Space_Grotesk'] text-[26px] font-bold tracking-[-0.07em]"
          >
            CRIC<span className="text-[#16A34A]">X</span>
          </a>

          {/* NAVIGATION */}

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

          {/* ACTIONS */}

          <div className="flex items-center gap-1">

            <button className="hidden rounded-full p-2.5 transition hover:bg-black/5 sm:block">
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

              {cart > 0 && (
                <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[#16A34A] px-1 text-[8px] font-bold text-white">
                  {cart}
                </span>
              )}

            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="rounded-full p-2.5 xl:hidden"
            >
              <Menu size={21} />
            </button>

          </div>

        </div>

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

          <nav className="px-5 pt-7">

            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold"
              >
                {item}

                <ArrowRight size={18} />
              </a>
            ))}

          </nav>

        </div>
      )}

      {/* =====================================================
          BREADCRUMB
      ===================================================== */}

      <div className="mx-auto max-w-[1400px] px-5 pt-8 sm:px-8 lg:px-10">

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-black/35">

          <a href="/" className="transition hover:text-black">
            Home
          </a>

          <ChevronRight size={12} />

          <span className="text-black">
            Cricket Balls
          </span>

        </div>

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24 lg:pt-12">

        <div className="relative min-h-[520px] overflow-hidden rounded-[30px] bg-[#090909]">

          <img
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=2200&q=90"
            alt="CRICX cricket balls"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(22,163,74,.18),transparent_35%)]" />

          <div className="relative flex min-h-[520px] items-center px-7 py-16 sm:px-12 lg:px-20">

            <div className="max-w-[700px] text-white">

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#16A34A]">
                CRICX / MATCH BALL COLLECTION
              </p>

              <h1 className="mt-5 font-['Space_Grotesk'] text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.86] tracking-[-0.075em]">

                EVERY BALL
                <br />

                <span className="text-[#16A34A]">
                  MATTERS.
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Match-ready cricket balls engineered for consistent seam,
                swing, durability and performance from the first delivery to
                the final over.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-black transition hover:bg-[#16A34A] hover:text-white"
                >
                  Shop Cricket Balls
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={() => setFilterOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] backdrop-blur-md transition hover:bg-white/10"
                >
                  Find Your Ball
                  <SlidersHorizontal size={15} />
                </button>

              </div>

            </div>

          </div>

          {/* FLOATING STATS */}

          <div className="absolute bottom-7 right-7 hidden gap-2 lg:flex">

            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                Collection
              </p>

              <p className="mt-1 text-sm font-bold">
                8 Match Balls
              </p>

            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">

              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                Starting at
              </p>

              <p className="mt-1 text-sm font-bold">
                ₹499
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="pb-16">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <div className="max-w-3xl">

            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
              Precision in every delivery
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              FIND YOUR PERFECT BALL.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/50">
              Whether you're playing a Test match, club cricket, limited-overs
              game or training session, CRICX delivers cricket balls built
              around consistent performance and durability.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          SORT BAR
      ===================================================== */}

      <section
        id="products"
        className="border-y border-black/10 bg-white"
      >

        <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-4">

              <p className="text-xs font-bold">
                {filteredBalls.length} Balls
              </p>

              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.12em] lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

            </div>

            <div className="flex items-center gap-2">

              <span className="hidden text-[10px] font-bold uppercase tracking-[0.15em] text-black/35 sm:block">
                Sort by
              </span>

              <div className="relative">

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-full border border-black/10 bg-[#f7f7f5] py-2.5 pl-4 pr-9 text-[10px] font-bold outline-none"
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>

                <ChevronDown
                  size={13}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCT AREA
      ===================================================== */}

      <section className="py-12 sm:py-16">

        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[230px_1fr] lg:px-10">

          {/* =================================================
              DESKTOP FILTERS
          ================================================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-28">

              <div className="flex items-center justify-between">

                <h3 className="text-xs font-extrabold uppercase tracking-[0.15em]">
                  Filter
                </h3>

                <button
                  onClick={() => {
                    setBallType("All");
                    setFormat("All");
                    setLevel("All");
                    setPrice(2000);
                  }}
                  className="text-[9px] font-bold uppercase tracking-wider text-black/35 hover:text-[#16A34A]"
                >
                  Reset
                </button>

              </div>

              {/* BALL TYPE */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                  Ball Type
                </p>

                <div className="mt-4 space-y-3">

                  {[
                    "All",
                    "Leather",
                    "Synthetic",
                  ].map((item) => (

                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-xs"
                    >

                      <input
                        type="radio"
                        name="ballType"
                        checked={ballType === item}
                        onChange={() => setBallType(item)}
                        className="accent-[#16A34A]"
                      />

                      {item}

                    </label>

                  ))}

                </div>

              </div>

              {/* FORMAT */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                  Format
                </p>

                <div className="mt-4 space-y-3">

                  {[
                    "All",
                    "Red Ball",
                    "White Ball",
                  ].map((item) => (

                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-xs"
                    >

                      <input
                        type="radio"
                        name="format"
                        checked={format === item}
                        onChange={() => setFormat(item)}
                        className="accent-[#16A34A]"
                      />

                      {item}

                    </label>

                  ))}

                </div>

              </div>

              {/* LEVEL */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                  Level
                </p>

                <div className="mt-4 space-y-3">

                  {[
                    "All",
                    "Professional",
                    "Match",
                    "Club",
                    "Training",
                  ].map((item) => (

                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-xs"
                    >

                      <input
                        type="radio"
                        name="level"
                        checked={level === item}
                        onChange={() => setLevel(item)}
                        className="accent-[#16A34A]"
                      />

                      {item}

                    </label>

                  ))}

                </div>

              </div>

              {/* PRICE */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <div className="flex justify-between">

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                    Price
                  </p>

                  <span className="text-[10px] font-bold text-[#16A34A]">
                    ₹{price.toLocaleString("en-IN")}
                  </span>

                </div>

                <input
                  type="range"
                  min="400"
                  max="2000"
                  step="100"
                  value={price}
                  onChange={(e) =>
                    setPrice(Number(e.target.value))
                  }
                  className="mt-5 w-full accent-[#16A34A]"
                />

                <div className="mt-2 flex justify-between text-[9px] text-black/35">
                  <span>₹400</span>
                  <span>₹2,000</span>
                </div>

              </div>

              {/* HELP CARD */}

              <div className="mt-10 rounded-2xl bg-black p-5 text-white">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#16A34A]">
                  Need help?
                </p>

                <p className="mt-2 text-sm font-bold">
                  Not sure which ball to choose?
                </p>

                <button className="mt-4 text-[9px] font-bold uppercase tracking-wider text-white/60 transition hover:text-white">
                  Get a recommendation →
                </button>

              </div>

            </div>

          </aside>

          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div>

            {/* MOBILE FILTER */}

            {filterOpen && (
              <div className="mb-8 rounded-2xl border border-black/10 bg-white p-5 lg:hidden">

                <div className="flex items-center justify-between">

                  <h3 className="font-bold">
                    Filters
                  </h3>

                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} />
                  </button>

                </div>

                {/* TYPE */}

                <div className="mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Ball Type
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {[
                      "All",
                      "Leather",
                      "Synthetic",
                    ].map((item) => (

                      <button
                        key={item}
                        onClick={() => setBallType(item)}
                        className={`rounded-full px-4 py-2 text-[10px] font-bold ${
                          ballType === item
                            ? "bg-black text-white"
                            : "bg-black/5"
                        }`}
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>

                {/* FORMAT */}

                <div className="mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Format
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {[
                      "All",
                      "Red Ball",
                      "White Ball",
                    ].map((item) => (

                      <button
                        key={item}
                        onClick={() => setFormat(item)}
                        className={`rounded-full px-4 py-2 text-[10px] font-bold ${
                          format === item
                            ? "bg-black text-white"
                            : "bg-black/5"
                        }`}
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>

                {/* LEVEL */}

                <div className="mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Level
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {[
                      "All",
                      "Professional",
                      "Match",
                      "Club",
                      "Training",
                    ].map((item) => (

                      <button
                        key={item}
                        onClick={() => setLevel(item)}
                        className={`rounded-full px-4 py-2 text-[10px] font-bold ${
                          level === item
                            ? "bg-black text-white"
                            : "bg-black/5"
                        }`}
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>

              </div>
            )}

            {/* PRODUCT GRID */}

            {filteredBalls.length === 0 ? (

              <div className="rounded-3xl border border-black/10 bg-white py-24 text-center">

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold">
                  No balls found
                </h3>

                <p className="mt-2 text-sm text-black/45">
                  Try changing your filters.
                </p>

              </div>

            ) : (

              <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">

                {filteredBalls.map((ball) => {

                  const liked = wishlist.includes(ball.id);

                  return (
                    <article
                      key={ball.id}
                      className="group"
                    >

                      {/* IMAGE */}

                      <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-[#e8e8e4]">

                        <img
                          src={ball.image}
                          alt={ball.name}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        {ball.badge && (

                          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em]">
                            {ball.badge}
                          </span>

                        )}

                        <button
                          onClick={() =>
                            toggleWishlist(ball.id)
                          }
                          className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${
                            liked
                              ? "bg-[#16A34A] text-white"
                              : "bg-white/85 text-black"
                          }`}
                        >

                          <Heart
                            size={15}
                            fill={
                              liked
                                ? "currentColor"
                                : "none"
                            }
                          />

                        </button>

                        {/* HOVER ACTIONS */}

                        <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                          <button
                            onClick={() =>
                              setQuickView(ball)
                            }
                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-white/95 py-3 text-[9px] font-extrabold uppercase tracking-wider"
                          >
                            <Eye size={14} />
                            Quick View
                          </button>

                          <button
                            onClick={addToCart}
                            className="grid h-11 w-11 place-items-center rounded-full bg-[#16A34A] text-white"
                          >
                            <ShoppingBag size={15} />
                          </button>

                        </div>

                      </div>

                      {/* DETAILS */}

                      <div className="pt-4">

                        <div className="flex items-center gap-1 text-[10px] font-bold">

                          <Star
                            size={11}
                            fill="currentColor"
                            className="text-[#16A34A]"
                          />

                          {ball.rating}

                          <span className="ml-1 text-black/30">
                            ({ball.reviews})
                          </span>

                        </div>

                        <h3 className="mt-1 text-sm font-bold leading-5">
                          {ball.name}
                        </h3>

                        <div className="mt-2 flex items-center gap-2">

                          <span className="text-sm font-extrabold">
                            ₹{ball.price.toLocaleString("en-IN")}
                          </span>

                          <span className="text-xs text-black/30 line-through">
                            ₹{ball.oldPrice.toLocaleString("en-IN")}
                          </span>

                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">

                          <span className="rounded-full bg-black/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-black/50">
                            {ball.format}
                          </span>

                          <span className="rounded-full bg-black/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-black/50">
                            {ball.level}
                          </span>

                        </div>

                        <button
                          onClick={addToCart}
                          className="mt-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#16A34A]"
                        >
                          Add to cart →
                        </button>

                      </div>

                    </article>
                  );
                })}

              </div>

            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          EDITORIAL BANNER
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-10">

        <div className="relative min-h-[460px] overflow-hidden rounded-[30px] bg-black">

          <img
            src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1900&q=90"
            alt="Professional cricket ball"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

          <div className="relative flex min-h-[460px] items-center p-8 sm:p-14 lg:p-20">

            <div className="max-w-xl text-white">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#16A34A]">
                Match performance
              </p>

              <h2 className="mt-4 font-['Space_Grotesk'] text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                CONSISTENCY
                <br />
                WINS GAMES.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
                Precision stitching, premium leather and carefully engineered
                construction for predictable performance delivery after
                delivery.
              </p>

              <a
                href="#products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#16A34A] hover:text-white"
              >
                Shop Match Balls
                <ArrowRight size={15} />
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BALL TECHNOLOGY
      ===================================================== */}

      <section className="border-y border-black/10 bg-white py-20">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                CRICX ball technology
              </p>

              <h2 className="mt-3 font-['Space_Grotesk'] text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl">
                BUILT FOR
                <br />
                CONSISTENCY.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-black/50">
                Every CRICX match ball is designed with attention to
                construction, seam profile, leather quality and durability.
              </p>

            </div>

            <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">

              <div className="bg-white p-7">

                <ShieldCheck
                  size={24}
                  strokeWidth={1.5}
                />

                <h3 className="mt-7 font-bold">
                  Premium Leather
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Selected leather designed for durability and consistent
                  performance.
                </p>

              </div>

              <div className="bg-white p-7">

                <Gauge
                  size={24}
                  strokeWidth={1.5}
                />

                <h3 className="mt-7 font-bold">
                  Consistent Seam
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Engineered seam profile for reliable movement and control.
                </p>

              </div>

              <div className="bg-white p-7">

                <Gem
                  size={24}
                  strokeWidth={1.5}
                />

                <h3 className="mt-7 font-bold">
                  Match Quality
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Built for players who demand dependable match-day equipment.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICE FEATURES
      ===================================================== */}

      <section className="py-20">

        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 px-5 sm:px-8 md:grid-cols-3 lg:px-10">

          {[
            [
              Truck,
              "Free Shipping",
              "On all orders above ₹1999.",
            ],
            [
              RotateCcw,
              "Easy Returns",
              "Simple returns within our policy.",
            ],
            [
              ShieldCheck,
              "Secure Checkout",
              "Safe and protected payments.",
            ],
          ].map(([Icon, title, description]) => (

            <div
              key={title}
              className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white p-6"
            >

              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-black text-white">

                <Icon size={19} />

              </div>

              <div>

                <h3 className="text-sm font-bold">
                  {title}
                </h3>

                <p className="mt-1 text-xs text-black/45">
                  {description}
                </p>

              </div>

            </div>

          ))}

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

                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-[#16A34A]"
                >
                  <span className="text-xs">IG</span>
                </a>

                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-[#16A34A]"
                >
                  <span className="text-xs">FB</span>
                </a>

                <a
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-[#16A34A]"
                >
                  <span className="text-xs">YT</span>
                </a>

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
                ],
                [
                  "HELP",
                  "Contact Us",
                  "Shipping",
                  "Returns",
                  "Track Order",
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
                  "Terms",
                  "Refund Policy",
                  "FAQs",
                ],
              ].map((column) => (

                <div key={column[0]}>

                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                    {column[0]}
                  </p>

                  <div className="mt-5 space-y-3">

                    {column.slice(1).map((item) => (

                      <a
                        href="#"
                        key={item}
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

          <div className="mt-16 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/30">
            © 2026 CRICX. All rights reserved.
          </div>

        </div>

      </footer>

      {/* =====================================================
          QUICK VIEW MODAL
      ===================================================== */}

      {quickView && (

        <div
          className="fixed inset-0 z-[110] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setQuickView(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[28px] bg-white md:grid-cols-2"
          >

            {/* IMAGE */}

            <div className="min-h-[400px] bg-[#e8e8e4]">

              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-full min-h-[400px] w-full object-cover"
              />

            </div>

            {/* CONTENT */}

            <div className="relative p-8 sm:p-10">

              <button
                onClick={() => setQuickView(null)}
                className="absolute right-5 top-5 rounded-full bg-black/5 p-2"
              >
                <X size={17} />
              </button>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                {quickView.format}
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

                {quickView.rating}

                <span className="text-black/35">
                  ({quickView.reviews} reviews)
                </span>

              </div>

              <p className="mt-7 text-3xl font-extrabold">
                ₹{quickView.price.toLocaleString("en-IN")}
              </p>

              {/* SPECS */}

              <div className="mt-7 grid grid-cols-2 gap-2">

                <div className="rounded-xl bg-black/5 p-4">

                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Type
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.type}
                  </p>

                </div>

                <div className="rounded-xl bg-black/5 p-4">

                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Format
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.format}
                  </p>

                </div>

                <div className="rounded-xl bg-black/5 p-4">

                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Level
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.level}
                  </p>

                </div>

                <div className="rounded-xl bg-black/5 p-4">

                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Construction
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.construction}
                  </p>

                </div>

              </div>

              <p className="mt-6 text-sm leading-6 text-black/50">
                Designed for consistent match-day performance with a focus on
                durability, seam response and reliable ball behavior.
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

        <div className="fixed bottom-5 left-1/2 z-[150] -translate-x-1/2 rounded-full bg-black px-5 py-3 text-xs font-bold text-white shadow-2xl">
          {toast}
        </div>

      )}

    </div>
  );
}