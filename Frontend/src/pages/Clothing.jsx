import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  User,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  SlidersHorizontal,
  Eye,
  Star,
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Shirt,
  Zap,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "CRICX Pro Match Jersey",
    category: "Matchwear",
    type: "Jersey",
    fit: "Regular",
    level: "Professional",
    price: 2499,
    oldPrice: 2999,
    rating: 4.9,
    reviews: 146,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 2,
    name: "CRICX Performance Training Tee",
    category: "Training",
    type: "T-Shirt",
    fit: "Athletic",
    level: "Performance",
    price: 1499,
    oldPrice: 1799,
    rating: 4.8,
    reviews: 118,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 3,
    name: "CRICX Elite Cricket Trousers",
    category: "Matchwear",
    type: "Trousers",
    fit: "Regular",
    level: "Professional",
    price: 1999,
    oldPrice: 2299,
    rating: 4.8,
    reviews: 87,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 4,
    name: "CRICX Flex Training Pants",
    category: "Training",
    type: "Track Pants",
    fit: "Athletic",
    level: "Performance",
    price: 1799,
    oldPrice: 2199,
    rating: 4.7,
    reviews: 92,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 5,
    name: "CRICX Club Polo Shirt",
    category: "Casual",
    type: "Polo",
    fit: "Regular",
    level: "Club",
    price: 1699,
    oldPrice: 1999,
    rating: 4.8,
    reviews: 74,
    badge: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 6,
    name: "CRICX Lightweight Training Shorts",
    category: "Training",
    type: "Shorts",
    fit: "Athletic",
    level: "Performance",
    price: 1299,
    oldPrice: 1599,
    rating: 4.7,
    reviews: 81,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 7,
    name: "CRICX Premium Cricket Hoodie",
    category: "Lifestyle",
    type: "Hoodie",
    fit: "Relaxed",
    level: "Lifestyle",
    price: 2799,
    oldPrice: 3299,
    rating: 4.9,
    reviews: 61,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: 8,
    name: "CRICX Pro Zip Training Jacket",
    category: "Training",
    type: "Jacket",
    fit: "Athletic",
    level: "Professional",
    price: 3499,
    oldPrice: 3999,
    rating: 4.9,
    reviews: 43,
    badge: "PRO",
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=1200&q=90",
  },
];

const categories = [
  {
    title: "Matchwear",
    subtitle: "Built for match day.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Training",
    subtitle: "Move. Train. Improve.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Lifestyle",
    subtitle: "Cricket beyond the boundary.",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Clothing() {
   const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState("");
  const [sort, setSort] = useState("Featured");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFits, setSelectedFits] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [price, setPrice] = useState(10000);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  };

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const toggleFit = (fit) => {
    setSelectedFits((prev) =>
      prev.includes(fit)
        ? prev.filter((item) => item !== fit)
        : [...prev, fit]
    );
  };

  const toggleLevel = (level) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((item) => item !== level)
        : [...prev, level]
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast("Removed from wishlist");
        return prev.filter((id) => id !== product.id);
      }

      showToast("Added to wishlist");
      return [...prev, product.id];
    });
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToast(`${product.name} added to cart`);
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const typeMatch =
        selectedTypes.length === 0 || selectedTypes.includes(product.type);

      const fitMatch =
        selectedFits.length === 0 || selectedFits.includes(product.fit);

      const levelMatch =
        selectedLevels.length === 0 ||
        selectedLevels.includes(product.level);

      const priceMatch = product.price <= price;

      return typeMatch && fitMatch && levelMatch && priceMatch;
    });

    if (sort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "Top Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [selectedTypes, selectedFits, selectedLevels, price, sort]);

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Announcement Bar */}
      <div className="bg-zinc-950 px-4 py-2.5 text-center text-[11px] font-bold tracking-[0.18em] text-white">
        FREE SHIPPING ON ORDERS ABOVE ₹1999
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-5 lg:px-8">
          <a
            href="/"
            className="text-2xl font-black tracking-[-0.07em]"
          >
            CRIC<span className="text-green-600">X</span>
          </a>

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

          <div className="flex items-center gap-2">
            <button className="hidden rounded-full p-2.5 transition hover:bg-zinc-100 sm:block">
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button className="hidden rounded-full p-2.5 transition hover:bg-zinc-100 sm:block">
              <Heart size={20} strokeWidth={1.8} />
            </button>

            <button className="hidden rounded-full p-2.5 transition hover:bg-zinc-100 sm:block">
              <User size={20} strokeWidth={1.8} />
            </button>

            <button className="relative rounded-full p-2.5 transition hover:bg-zinc-100">
              <ShoppingBag size={20} strokeWidth={1.8} />

              {cart.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-green-600 px-1 text-[9px] font-bold text-white">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenu(true)}
              className="rounded-full p-2.5 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[100] bg-black/50 lg:hidden">
          <div className="ml-auto h-full w-[86%] max-w-sm bg-white p-6 shadow-2xl">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-2xl font-black tracking-[-0.07em]">
                CRIC<span className="text-green-600">X</span>
              </span>

              <button
                onClick={() => setMobileMenu(false)}
                className="rounded-full bg-zinc-100 p-2"
              >
                <X size={20} />
              </button>
            </div>

            <nav>
              {[
                ["Cricket Bats", "/cricket-bats"],
                ["Cricket Balls", "/cricket-balls"],
                ["Batting Gear", "/batting-gears"],
                ["Protection", "/protection"],
                ["Clothing", "/clothing"],
                ["Accessories", "/accessories"],
                ["New Arrivals", "/new-arrivals"],
              ].map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="block border-b border-zinc-100 py-4 text-lg font-semibold"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1500px] px-5 py-5 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <span>/</span>
          <span className="font-semibold text-zinc-950">
            Clothing
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative mx-4 overflow-hidden rounded-[28px] bg-zinc-950 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=2200&q=90"
            alt="Cricket clothing"
            className="h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />
        </div>

        <div className="relative flex min-h-[520px] items-center px-7 py-20 sm:px-12 lg:min-h-[620px] lg:px-20">
          <div className="max-w-2xl text-white">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.25em] text-green-400">
              <span className="h-px w-8 bg-green-400" />
              CRICX PERFORMANCE APPAREL
            </div>

            <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              LOOK THE
              <br />
              <span className="text-green-500">
                PART.
              </span>
              <br />
              PLAY THE PART.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              Performance cricket clothing designed to move with you.
              Lightweight fabrics, athletic fits and premium styling for match
              day, training and everything beyond the boundary.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-green-500"
              >
                SHOP CLOTHING
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("categories")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                EXPLORE APPAREL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-[1500px] px-5 pb-10 pt-20 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-green-600">
              CRICX APPAREL
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              MADE TO MOVE.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-zinc-500">
            Whether you're walking onto the pitch, grinding through a training
            session or representing your team off the field, CRICX apparel is
            designed to keep you comfortable and sharp.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section
        id="categories"
        className="mx-auto max-w-[1500px] px-5 py-8 lg:px-8"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group relative h-[430px] overflow-hidden rounded-3xl bg-zinc-100"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="mb-2 text-xs font-semibold tracking-wider text-zinc-300">
                  CRICX COLLECTION
                </p>

                <h3 className="text-3xl font-black tracking-[-0.04em]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-300">
                  {category.subtitle}
                </p>

                <button className="mt-5 flex items-center gap-2 text-sm font-bold">
                  SHOP NOW
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-[1500px] px-5 pb-24 pt-20 lg:px-8"
      >
        <div className="mb-8 flex flex-col gap-5 border-b border-zinc-200 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.2em] text-green-600">
              THE CRICX APPAREL COLLECTION
            </p>

            <h2 className="text-4xl font-black tracking-[-0.05em]">
              CLOTHING
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setMobileFilters(true)}
              className="flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-semibold lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-zinc-200 bg-white py-3 pl-5 pr-10 text-sm font-semibold outline-none"
              >
                <option>Featured</option>
                <option>Top Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[230px_1fr]">
          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-wider">
                    Clothing Type
                  </h3>

                  <SlidersHorizontal size={16} />
                </div>

                <div className="space-y-3">
                  {[
                    "Jersey",
                    "T-Shirt",
                    "Trousers",
                    "Track Pants",
                    "Polo",
                    "Shorts",
                    "Hoodie",
                    "Jacket",
                  ].map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3 text-sm text-zinc-600"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="h-4 w-4 accent-green-600"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8 border-t border-zinc-200 pt-7">
                <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
                  Fit
                </h3>

                <div className="space-y-3">
                  {["Regular", "Athletic", "Relaxed"].map((fit) => (
                    <label
                      key={fit}
                      className="flex cursor-pointer items-center gap-3 text-sm text-zinc-600"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFits.includes(fit)}
                        onChange={() => toggleFit(fit)}
                        className="h-4 w-4 accent-green-600"
                      />
                      {fit}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8 border-t border-zinc-200 pt-7">
                <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
                  Collection
                </h3>

                <div className="space-y-3">
                  {[
                    "Professional",
                    "Performance",
                    "Club",
                    "Lifestyle",
                  ].map((level) => (
                    <label
                      key={level}
                      className="flex cursor-pointer items-center gap-3 text-sm text-zinc-600"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLevels.includes(level)}
                        onChange={() => toggleLevel(level)}
                        className="h-4 w-4 accent-green-600"
                      />
                      {level}
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-7">
                <h3 className="mb-4 text-sm font-black uppercase tracking-wider">
                  Maximum Price
                </h3>

                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full accent-green-600"
                />

                <div className="mt-3 flex justify-between text-xs font-semibold">
                  <span>₹500</span>
                  <span>₹{price.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div>
            {filteredProducts.length === 0 ? (
              <div className="flex min-h-[350px] items-center justify-center rounded-3xl bg-zinc-50">
                <div className="text-center">
                  <p className="text-xl font-black">
                    No clothing found
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    Try adjusting your filters.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative aspect-[0.84] overflow-hidden rounded-2xl bg-zinc-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute left-3 top-3">
                        {product.badge && (
                          <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-black tracking-wider shadow-sm">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleWishlist(product)}
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105"
                      >
                        <Heart
                          size={17}
                          className={
                            wishlist.includes(product.id)
                              ? "fill-red-500 text-red-500"
                              : ""
                          }
                        />
                      </button>

                      <button
                        onClick={() => setQuickView(product)}
                        className="absolute bottom-3 left-3 right-3 flex translate-y-14 items-center justify-center gap-2 rounded-xl bg-white/95 py-3 text-xs font-bold opacity-0 shadow-lg backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <Eye size={15} />
                        QUICK VIEW
                      </button>
                    </div>

                    <div className="pt-4">
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          {product.category}
                        </p>

                        <div className="flex items-center gap-1 text-[10px] font-semibold">
                          <Star
                            size={11}
                            className="fill-yellow-400 text-yellow-400"
                          />
                          {product.rating}
                        </div>
                      </div>

                      <h3 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 sm:text-[15px]">
                        {product.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm font-black">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>

                        <span className="text-xs text-zinc-400 line-through">
                          ₹{product.oldPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="mt-4 w-full rounded-xl bg-zinc-950 py-3 text-xs font-bold text-white transition hover:bg-green-600"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Editorial Banner */}
      <section className="mx-4 mb-24 overflow-hidden rounded-[30px] bg-green-600 sm:mx-6 lg:mx-8">
        <div className="grid min-h-[470px] lg:grid-cols-2">
          <div className="flex items-center px-7 py-16 sm:px-12 lg:px-20">
            <div>
              <p className="mb-4 text-xs font-black tracking-[0.25em] text-green-950">
                PERFORMANCE APPAREL
              </p>

              <h2 className="max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl">
                MOVE
                <br />
                WITHOUT
                <br />
                <span className="text-green-950">
                  LIMITS.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-green-50">
                Breathable fabrics, flexible construction and athletic
                silhouettes engineered for the intensity of modern cricket.
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-black">
                EXPLORE PERFORMANCE
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1600&q=90"
              alt="Cricket training apparel"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Apparel Technology */}
      <section className="mx-auto max-w-[1500px] px-5 pb-24 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-black tracking-[0.25em] text-green-600">
            CRICX TECHNOLOGY
          </p>

          <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            DESIGNED FOR MOVEMENT.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-zinc-500">
            Performance details built into every layer so your clothing works
            with your game, not against it.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            {
              icon: Shirt,
              title: "BREATHABLE",
              text: "Lightweight fabrics help keep you comfortable through long sessions.",
            },
            {
              icon: Zap,
              title: "FLEXIBLE",
              text: "Stretch construction supports unrestricted cricket movement.",
            },
            {
              icon: ShieldCheck,
              title: "DURABLE",
              text: "Designed to handle demanding training and match-day use.",
            },
            {
              icon: Check,
              title: "PREMIUM FIT",
              text: "Athletic silhouettes balance performance and modern style.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-zinc-50 p-7 transition hover:-translate-y-1 hover:bg-zinc-100"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-600 text-white">
                  <Icon size={21} />
                </div>

                <h3 className="text-sm font-black tracking-wide">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Statement */}
      <section className="bg-zinc-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black tracking-[0.25em] text-green-500">
            FROM THE PITCH TO EVERYWHERE ELSE
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
            CRICKET ISN'T
            <br />
            JUST A GAME.
            <br />
            <span className="text-green-500">
              IT'S A LIFESTYLE.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-400">
            Wear the mindset. Represent the game. CRICX apparel is made for
            players who carry cricket with them long after they leave the
            crease.
          </p>
        </div>
      </section>

      {/* Service Features */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-[1500px] divide-y divide-zinc-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
          {[
            {
              icon: Truck,
              title: "FREE SHIPPING",
              text: "On orders above ₹1999",
            },
            {
              icon: ShieldCheck,
              title: "SECURE PAYMENTS",
              text: "100% safe & secure checkout",
            },
            {
              icon: RotateCcw,
              title: "EASY RETURNS",
              text: "Simple 7-day returns",
            },
          ].map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4 py-7 sm:px-8 sm:py-10"
              >
                <Icon size={23} strokeWidth={1.7} />

                <div>
                  <p className="text-xs font-black tracking-wider">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-green-500">
            STAY IN THE GAME
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            GET THE LATEST FROM CRICX.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-400">
            New drops, exclusive offers and cricket performance content,
            delivered straight to your inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full bg-white px-6 text-sm text-black outline-none"
            />

            <button className="h-14 rounded-full bg-green-600 px-7 text-sm font-bold transition hover:bg-green-500">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 px-5 pb-10 text-white lg:px-8">
        <div className="mx-auto max-w-[1500px] border-t border-zinc-800 pt-14">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="text-3xl font-black tracking-[-0.07em]">
                CRIC<span className="text-green-600">X</span>
              </div>

              <p className="mt-3 text-sm font-bold tracking-wider text-zinc-500">
                PLAY BOLD. PLAY BETTER.
              </p>

              <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-500">
                Premium cricket equipment and apparel designed for players who
                want to perform without compromise.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-black tracking-widest">
                SHOP
              </h4>

              <div className="space-y-3 text-sm text-zinc-500">
                <a href="/cricket-bats" className="block hover:text-white">
                  Cricket Bats
                </a>
                <a href="/cricket-balls" className="block hover:text-white">
                  Cricket Balls
                </a>
                <a href="/batting-gears" className="block hover:text-white">
                  Batting Gear
                </a>
                <a href="/protection" className="block hover:text-white">
                  Protection
                </a>
                <a href="/clothing" className="block hover:text-white">
                  Clothing
                </a>
                <a href="/new-arrivals" className="block hover:text-white">
                  New Arrivals
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-black tracking-widest">
                SUPPORT
              </h4>

              <div className="space-y-3 text-sm text-zinc-500">
                <a href="/contact" className="block hover:text-white">
                  Contact Us
                </a>
                <a href="/shipping" className="block hover:text-white">
                  Shipping & Delivery
                </a>
                <a href="/returns" className="block hover:text-white">
                  Returns
                </a>
                <a href="/size-guide" className="block hover:text-white">
                  Size Guide
                </a>
                <a href="/faq" className="block hover:text-white">
                  FAQs
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-zinc-800 pt-7 text-xs text-zinc-600 sm:flex-row">
            <p>© 2026 CRICX. All rights reserved.</p>

            <div className="flex gap-5">
              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Filters */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[110] bg-black/50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-y-auto rounded-t-[30px] bg-white p-6">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-xl font-black">FILTERS</h3>

              <button
                onClick={() => setMobileFilters(false)}
                className="rounded-full bg-zinc-100 p-2"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider">
                Clothing Type
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Jersey",
                  "T-Shirt",
                  "Trousers",
                  "Track Pants",
                  "Polo",
                  "Shorts",
                  "Hoodie",
                  "Jacket",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 rounded-xl border border-zinc-200 p-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                      className="accent-green-600"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider">
                Fit
              </h4>

              <div className="grid grid-cols-3 gap-3">
                {["Regular", "Athletic", "Relaxed"].map((fit) => (
                  <label
                    key={fit}
                    className="flex items-center gap-2 rounded-xl border border-zinc-200 p-3 text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFits.includes(fit)}
                      onChange={() => toggleFit(fit)}
                      className="accent-green-600"
                    />
                    {fit}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider">
                Collection
              </h4>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Professional",
                  "Performance",
                  "Club",
                  "Lifestyle",
                ].map((level) => (
                  <label
                    key={level}
                    className="flex items-center gap-2 rounded-xl border border-zinc-200 p-3 text-xs"
                  >
                    <input
                      type="checkbox"
                      checked={selectedLevels.includes(level)}
                      onChange={() => toggleLevel(level)}
                      className="accent-green-600"
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider">
                Maximum Price
              </h4>

              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-green-600"
              />

              <div className="mt-3 flex justify-between text-xs font-bold">
                <span>₹500</span>
                <span>₹{price.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <button
              onClick={() => setMobileFilters(false)}
              className="mt-8 w-full rounded-full bg-zinc-950 py-4 text-sm font-bold text-white"
            >
              SHOW {filteredProducts.length} PRODUCTS
            </button>
          </div>
        </div>
      )}

      {/* Quick View */}
      {quickView && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white">
            <button
              onClick={() => setQuickView(null)}
              className="absolute right-5 top-5 z-10 rounded-full bg-white p-2.5 shadow-lg"
            >
              <X size={19} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="aspect-square bg-zinc-100">
                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">
                  {quickView.category}
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">
                  {quickView.name}
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-bold">
                    {quickView.rating}
                  </span>

                  <span className="text-sm text-zinc-400">
                    ({quickView.reviews} reviews)
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-2xl font-black">
                    ₹{quickView.price.toLocaleString("en-IN")}
                  </span>

                  <span className="text-sm text-zinc-400 line-through">
                    ₹{quickView.oldPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-6 text-zinc-500">
                  Premium CRICX apparel engineered for comfort, unrestricted
                  movement and modern cricket performance.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <Shirt size={18} />
                    <p className="mt-2 text-xs font-bold">
                      PERFORMANCE FIT
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <Zap size={18} />
                    <p className="mt-2 text-xs font-bold">
                      LIGHTWEIGHT
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickView);
                    setQuickView(null);
                  }}
                  className="mt-8 rounded-full bg-zinc-950 py-4 text-sm font-bold text-white transition hover:bg-green-600"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[150] flex -translate-x-1/2 items-center gap-3 rounded-full bg-zinc-950 px-5 py-3 text-xs font-bold text-white shadow-2xl">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
            <Check size={13} />
          </span>
          {toast}
        </div>
      )}
    </div>
  );
}