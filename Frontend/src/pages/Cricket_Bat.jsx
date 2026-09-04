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
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  Eye,
  Gauge,
  Gem
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
const bats = [
  {
    id: 1,
    name: "CRICX PRO X1 English Willow",
    shortName: "PRO X1",
    price: 14999,
    oldPrice: 17999,
    rating: 4.9,
    reviews: 128,
    badge: "BESTSELLER",
    willow: "English Willow",
    grade: "Grade 1",
    weight: "1180 - 1220g",
    profile: "Mid Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    name: "CRICX ELITE 900 English Willow",
    shortName: "ELITE 900",
    price: 21999,
    oldPrice: 24999,
    rating: 4.9,
    reviews: 96,
    badge: "PREMIUM",
    willow: "English Willow",
    grade: "Grade 1+",
    weight: "1170 - 1210g",
    profile: "Mid-Low Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b04a5c7d?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    name: "CRICX STRIKE Kashmir Willow",
    shortName: "STRIKE",
    price: 7499,
    oldPrice: 8999,
    rating: 4.8,
    reviews: 184,
    badge: "HOT",
    willow: "Kashmir Willow",
    grade: "Grade A",
    weight: "1180 - 1230g",
    profile: "Mid Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1594470117722-de4b9a02eb5f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    name: "CRICX TITAN Pro English Willow",
    shortName: "TITAN PRO",
    price: 16999,
    oldPrice: 19999,
    rating: 4.8,
    reviews: 74,
    badge: "NEW",
    willow: "English Willow",
    grade: "Grade 2",
    weight: "1190 - 1230g",
    profile: "Mid Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 5,
    name: "CRICX IMPACT Kashmir Willow",
    shortName: "IMPACT",
    price: 5499,
    oldPrice: 6499,
    rating: 4.7,
    reviews: 211,
    badge: "",
    willow: "Kashmir Willow",
    grade: "Grade A",
    weight: "1200 - 1240g",
    profile: "Low Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    name: "CRICX VORTEX English Willow",
    shortName: "VORTEX",
    price: 12999,
    oldPrice: 14999,
    rating: 4.8,
    reviews: 63,
    badge: "NEW",
    willow: "English Willow",
    grade: "Grade 2",
    weight: "1160 - 1200g",
    profile: "Mid-Low Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    name: "CRICX POWER Kashmir Willow",
    shortName: "POWER",
    price: 6999,
    oldPrice: 7999,
    rating: 4.7,
    reviews: 145,
    badge: "",
    willow: "Kashmir Willow",
    grade: "Grade A",
    weight: "1190 - 1240g",
    profile: "Mid Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    name: "CRICX SIGNATURE English Willow",
    shortName: "SIGNATURE",
    price: 18999,
    oldPrice: 21999,
    rating: 4.9,
    reviews: 51,
    badge: "LIMITED",
    willow: "English Willow",
    grade: "Grade 1",
    weight: "1170 - 1210g",
    profile: "Mid Sweet Spot",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=90",
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

export default function CricketBats() {
   const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState(0);
  const [quickView, setQuickView] = useState(null);
  const [sort, setSort] = useState("Featured");
  const [willow, setWillow] = useState("All");
  const [grade, setGrade] = useState("All");
  const [price, setPrice] = useState(25000);
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

  const filteredBats = useMemo(() => {
    let result = bats.filter((bat) => {
      const willowMatch =
        willow === "All" || bat.willow === willow;

      const gradeMatch =
        grade === "All" || bat.grade === grade;

      const priceMatch = bat.price <= price;

      return willowMatch && gradeMatch && priceMatch;
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
  }, [willow, grade, price, sort]);

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-[#111]">

      {/* =====================================================
          ANNOUNCEMENT BAR
      ===================================================== */}

      <div className="bg-[#080909] py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white">
        Free shipping on orders above ₹1999
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">

          {/* Logo */}

          <a
            href="/"
            className="font-['Space_Grotesk'] text-[26px] font-bold tracking-[-0.07em]"
          >
            CRIC<span className="text-[#16A34A]">X</span>
          </a>

          {/* Navigation */}

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

          {/* Actions */}

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
          <a href="/" className="hover:text-black">
            Home
          </a>

          <ChevronRight size={12} />

          <span className="text-black">
            Cricket Bats
          </span>
        </div>
      </div>

      {/* =====================================================
          CATEGORY HERO
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24 lg:pt-12">

        <div className="relative min-h-[500px] overflow-hidden rounded-[30px] bg-[#0a0b0b]">

          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2200&q=90"
            alt="CRICX cricket bats"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/15" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(22,163,74,.25),transparent_32%)]" />

          <div className="relative flex min-h-[500px] items-center px-7 py-16 sm:px-12 lg:px-20">

            <div className="max-w-[700px] text-white">

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#16A34A]">
                CRICX / BAT COLLECTION
              </p>

              <h1 className="mt-5 font-['Space_Grotesk'] text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.86] tracking-[-0.075em]">
                BUILT TO
                <br />
                <span className="text-[#16A34A]">
                  DOMINATE.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Discover premium cricket bats crafted for explosive power,
                exceptional pickup and complete confidence at the crease.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="#products"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-black transition hover:bg-[#16A34A] hover:text-white"
                >
                  Shop Bats
                  <ArrowRight size={15} />
                </a>

                <button
                  onClick={() => setFilterOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Find Your Bat
                  <SlidersHorizontal size={15} />
                </button>

              </div>
            </div>
          </div>

          {/* Hero floating information */}

          <div className="absolute bottom-7 right-7 hidden gap-2 lg:flex">

            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                Collection
              </p>

              <p className="mt-1 text-sm font-bold">
                8 Premium Bats
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                Starting at
              </p>

              <p className="mt-1 text-sm font-bold">
                ₹5,499
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
              The right weapon
            </p>

            <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              FIND YOUR PERFECT BAT.
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/50">
              From premium English Willow for competitive players to powerful
              Kashmir Willow bats for club cricket, every CRICX bat is designed
              around balance, pickup and performance.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FILTER / SORT BAR
      ===================================================== */}

      <section
        id="products"
        className="border-y border-black/10 bg-white"
      >

        <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex items-center gap-4">

              <p className="text-xs font-bold">
                {filteredBats.length} Bats
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
          PRODUCTS AREA
      ===================================================== */}

      <section className="py-12 sm:py-16">

        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[230px_1fr] lg:px-10">

          {/* DESKTOP FILTERS */}

          <aside className="hidden lg:block">

            <div className="sticky top-28">

              <div className="flex items-center justify-between">
                <h3 className="text-xs font-extrabold uppercase tracking-[0.15em]">
                  Filter
                </h3>

                <button
                  onClick={() => {
                    setWillow("All");
                    setGrade("All");
                    setPrice(25000);
                  }}
                  className="text-[9px] font-bold uppercase tracking-wider text-black/35 hover:text-[#16A34A]"
                >
                  Reset
                </button>
              </div>

              {/* Willow */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                  Willow Type
                </p>

                <div className="mt-4 space-y-3">

                  {["All", "English Willow", "Kashmir Willow"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 text-xs"
                      >
                        <input
                          type="radio"
                          name="willow"
                          checked={willow === item}
                          onChange={() => setWillow(item)}
                          className="accent-[#16A34A]"
                        />

                        {item}
                      </label>
                    )
                  )}

                </div>
              </div>

              {/* Grade */}

              <div className="mt-8 border-t border-black/10 pt-6">

                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em]">
                  Grade
                </p>

                <div className="mt-4 space-y-3">

                  {["All", "Grade 1+", "Grade 1", "Grade 2", "Grade A"].map(
                    (item) => (
                      <label
                        key={item}
                        className="flex cursor-pointer items-center gap-3 text-xs"
                      >
                        <input
                          type="radio"
                          name="grade"
                          checked={grade === item}
                          onChange={() => setGrade(item)}
                          className="accent-[#16A34A]"
                        />

                        {item}
                      </label>
                    )
                  )}

                </div>

              </div>

              {/* Price */}

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
                  min="5000"
                  max="25000"
                  step="500"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="mt-5 w-full accent-[#16A34A]"
                />

                <div className="mt-2 flex justify-between text-[9px] text-black/35">
                  <span>₹5,000</span>
                  <span>₹25,000</span>
                </div>

              </div>

              {/* Help */}

              <div className="mt-10 rounded-2xl bg-black p-5 text-white">

                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#16A34A]">
                  Need help?
                </p>

                <p className="mt-2 text-sm font-bold">
                  Not sure which bat to choose?
                </p>

                <button className="mt-4 text-[9px] font-bold uppercase tracking-wider text-white/60 transition hover:text-white">
                  Get a recommendation →
                </button>

              </div>

            </div>

          </aside>

          {/* PRODUCT GRID */}

          <div>

            {/* Mobile filters */}

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

                <div className="mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Willow
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {["All", "English Willow", "Kashmir Willow"].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setWillow(item)}
                          className={`rounded-full px-4 py-2 text-[10px] font-bold ${
                            willow === item
                              ? "bg-black text-white"
                              : "bg-black/5"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}

                  </div>

                </div>

                <div className="mt-6">

                  <p className="text-[10px] font-bold uppercase tracking-wider">
                    Grade
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    {["All", "Grade 1+", "Grade 1", "Grade 2", "Grade A"].map(
                      (item) => (
                        <button
                          key={item}
                          onClick={() => setGrade(item)}
                          className={`rounded-full px-4 py-2 text-[10px] font-bold ${
                            grade === item
                              ? "bg-black text-white"
                              : "bg-black/5"
                          }`}
                        >
                          {item}
                        </button>
                      )
                    )}

                  </div>

                </div>

              </div>
            )}

            {filteredBats.length === 0 ? (
              <div className="rounded-3xl border border-black/10 bg-white py-24 text-center">

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold">
                  No bats found
                </h3>

                <p className="mt-2 text-sm text-black/45">
                  Try changing your filters.
                </p>

              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">

                {filteredBats.map((bat) => {

                  const liked = wishlist.includes(bat.id);

                  return (
                    <article
                      key={bat.id}
                      className="group"
                    >

                      {/* IMAGE */}

                      <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-[#e8e8e4]">

                        <img
                          src={bat.image}
                          alt={bat.name}
                          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                        />

                        {bat.badge && (
                          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.15em]">
                            {bat.badge}
                          </span>
                        )}

                        <button
                          onClick={() => toggleWishlist(bat.id)}
                          className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full backdrop-blur-md transition ${
                            liked
                              ? "bg-[#16A34A] text-white"
                              : "bg-white/85 text-black"
                          }`}
                        >
                          <Heart
                            size={15}
                            fill={liked ? "currentColor" : "none"}
                          />
                        </button>

                        {/* Hover */}

                        <div className="absolute bottom-4 left-4 right-4 flex translate-y-2 gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                          <button
                            onClick={() => setQuickView(bat)}
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

                          {bat.rating}

                          <span className="ml-1 text-black/30">
                            ({bat.reviews})
                          </span>
                        </div>

                        <h3 className="mt-1 text-sm font-bold leading-5">
                          {bat.name}
                        </h3>

                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm font-extrabold">
                            ₹{bat.price.toLocaleString("en-IN")}
                          </span>

                          <span className="text-xs text-black/30 line-through">
                            ₹{bat.oldPrice.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-1.5">

                          <span className="rounded-full bg-black/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-black/50">
                            {bat.willow}
                          </span>

                          <span className="rounded-full bg-black/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-black/50">
                            {bat.grade}
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
          PERFORMANCE BANNER
      ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-10">

        <div className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-black">

          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1900&q=90"
            alt="Premium English willow"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          <div className="relative flex min-h-[450px] items-center p-8 sm:p-14 lg:p-20">

            <div className="max-w-xl text-white">

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#16A34A]">
                English Willow / Grade 1+
              </p>

              <h2 className="mt-4 font-['Space_Grotesk'] text-5xl font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl">
                MORE POWER.
                <br />
                MORE CONTROL.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/60">
                Carefully selected willow. Precision shaping. Match-ready
                performance.
              </p>

              <a
                href="#products"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-black transition hover:bg-[#16A34A] hover:text-white"
              >
                Shop English Willow
                <ArrowRight size={15} />
              </a>

            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          BAT TECHNOLOGY
      ===================================================== */}

      <section className="border-y border-black/10 bg-white py-20">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                Why CRICX bats
              </p>

              <h2 className="mt-3 font-['Space_Grotesk'] text-5xl font-bold leading-[0.92] tracking-[-0.06em] sm:text-6xl">
                CRAFTED
                <br />
                TO PERFORM.
              </h2>

            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-3">

              <div className="bg-white p-7">
                <ShieldCheck size={24} strokeWidth={1.5} />

                <h3 className="mt-7 font-bold">
                  Premium Willow
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Selected for grain quality, response and consistency.
                </p>
              </div>

              <div className="bg-white p-7">
                <Gauge size={24} strokeWidth={1.5} />

                <h3 className="mt-7 font-bold">
                  Precision Balance
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Carefully engineered pickup for effortless stroke play.
                </p>
              </div>

              <div className="bg-white p-7">
                <Gem size={24} strokeWidth={1.5} />

                <h3 className="mt-7 font-bold">
                  Match Ready
                </h3>

                <p className="mt-2 text-xs leading-6 text-black/45">
                  Built for players who expect professional-level equipment.
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

                {[FaInstagram, FaFacebookF, FaYoutube].map((Icon) => (
                  <a
                    key={Icon.name}
                    href="#"
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
          QUICK VIEW
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

            <div className="min-h-[400px] bg-[#e8e8e4]">

              <img
                src={quickView.image}
                alt={quickView.name}
                className="h-full min-h-[400px] w-full object-cover"
              />

            </div>

            <div className="relative p-8 sm:p-10">

              <button
                onClick={() => setQuickView(null)}
                className="absolute right-5 top-5 rounded-full bg-black/5 p-2"
              >
                <X size={17} />
              </button>

              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#16A34A]">
                {quickView.willow}
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

              <div className="mt-7 grid grid-cols-2 gap-2">

                <div className="rounded-xl bg-black/5 p-4">
                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Grade
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.grade}
                  </p>
                </div>

                <div className="rounded-xl bg-black/5 p-4">
                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Weight
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.weight}
                  </p>
                </div>

                <div className="rounded-xl bg-black/5 p-4">
                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Profile
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.profile}
                  </p>
                </div>

                <div className="rounded-xl bg-black/5 p-4">
                  <p className="text-[9px] uppercase tracking-wider text-black/40">
                    Willow
                  </p>

                  <p className="mt-1 text-xs font-bold">
                    {quickView.willow}
                  </p>
                </div>

              </div>

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