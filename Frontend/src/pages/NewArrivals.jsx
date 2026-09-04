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
  ArrowRight,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  Zap,
  Sparkles,
  Clock3,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "CRICX Titan X1 English Willow Bat",
    category: "Cricket Bats",
    type: "Bat",
    price: 28999,
    oldPrice: 34999,
    badge: "JUST DROPPED",
    rating: 5,
    reviews: 18,
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "CRICX Velocity Pro Batting Gloves",
    category: "Batting Gear",
    type: "Gloves",
    price: 4299,
    oldPrice: 4999,
    badge: "NEW",
    rating: 4.9,
    reviews: 24,
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "CRICX Aero Match Cricket Shoes",
    category: "Footwear",
    type: "Shoes",
    price: 6999,
    oldPrice: 7999,
    badge: "NEW",
    rating: 4.8,
    reviews: 31,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "CRICX Pro Shield Cricket Helmet",
    category: "Protection",
    type: "Helmet",
    price: 7499,
    oldPrice: 8999,
    badge: "JUST DROPPED",
    rating: 4.9,
    reviews: 16,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "CRICX Match Grade Red Leather Ball",
    category: "Cricket Balls",
    type: "Ball",
    price: 1199,
    oldPrice: 1499,
    badge: "NEW",
    rating: 4.8,
    reviews: 42,
    image:
      "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "CRICX 2026 Performance Jersey",
    category: "Clothing",
    type: "Jersey",
    price: 2499,
    oldPrice: 2999,
    badge: "2026 EDITION",
    rating: 4.9,
    reviews: 37,
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "CRICX Elite Wheelie Kit Bag",
    category: "Accessories",
    type: "Kit Bag",
    price: 8499,
    oldPrice: 9999,
    badge: "NEW",
    rating: 4.8,
    reviews: 14,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "CRICX Impact Pro Thigh Guard",
    category: "Protection",
    type: "Protection",
    price: 1899,
    oldPrice: 2299,
    badge: "JUST DROPPED",
    rating: 4.7,
    reviews: 21,
    image:
      "https://images.unsplash.com/photo-1593766827228-8737b6cd8eaa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "CRICX Pro Inner Gloves",
    category: "Batting Gear",
    type: "Inner Gloves",
    price: 899,
    oldPrice: 1099,
    badge: "NEW",
    rating: 4.8,
    reviews: 29,
    image:
      "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    name: "CRICX Match Performance Trousers",
    category: "Clothing",
    type: "Trousers",
    price: 1799,
    oldPrice: 2199,
    badge: "2026 EDITION",
    rating: 4.8,
    reviews: 19,
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "CRICX Power Training Ball Pack",
    category: "Cricket Balls",
    type: "Training Ball",
    price: 1499,
    oldPrice: 1799,
    badge: "NEW",
    rating: 4.7,
    reviews: 33,
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "CRICX Performance Duffle Bag",
    category: "Accessories",
    type: "Duffle Bag",
    price: 3299,
    oldPrice: 3999,
    badge: "NEW",
    rating: 4.9,
    reviews: 12,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  {
    name: "Bats",
    subtitle: "Power. Balance. Precision.",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85",
    filter: "Cricket Bats",
  },
  {
    name: "Batting Gear",
    subtitle: "Engineered for confidence.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=85",
    filter: "Batting Gear",
  },
  {
    name: "Performance",
    subtitle: "Built for every movement.",
    image:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=85",
    filter: "Clothing",
  },
];

export default function NewArrivals() {
     const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileFilters, setMobileFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [maxPrice, setMaxPrice] = useState(40000);
  const [quickView, setQuickView] = useState(null);
  const [toast, setToast] = useState("");

  const categoriesFilter = [
    "All",
    "Cricket Bats",
    "Batting Gear",
    "Cricket Balls",
    "Protection",
    "Clothing",
    "Accessories",
    "Footwear",
  ];

  const types = [
    "All",
    "Bat",
    "Gloves",
    "Shoes",
    "Helmet",
    "Ball",
    "Jersey",
    "Kit Bag",
    "Protection",
  ];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedType !== "All") {
      result = result.filter((p) => p.type === selectedType);
    }

    result = result.filter((p) => p.price <= maxPrice);

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
  }, [selectedCategory, selectedType, maxPrice, sort]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (product) => {
    setCartCount((prev) => prev + 1);
    setToast(`${product.name} added to cart`);

    setTimeout(() => {
      setToast("");
    }, 2200);
  };

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <div className="min-h-screen bg-white text-zinc-950">

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-zinc-950 text-white text-center text-[11px] sm:text-xs font-semibold tracking-[0.18em] py-2.5">
        FREE SHIPPING ON ORDERS ABOVE ₹1999
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-8">
          <div className="h-[76px] flex items-center justify-between gap-6">

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden rounded-full p-2 hover:bg-zinc-100 transition"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="text-3xl font-black tracking-[-0.07em] shrink-0"
            >
              CRIC<span className="text-green-600">X</span>
            </button>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
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
                  className={`whitespace-nowrap text-[12px] font-semibold transition duration-300 ${
                    item === "New Arrivals"
                      ? "text-green-600"
                      : "text-zinc-700 hover:text-green-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 shrink-0">

              <button
                className="hidden sm:flex rounded-full p-2.5 hover:bg-zinc-100 transition"
                aria-label="Search"
              >
                <Search size={19} />
              </button>

              <button
                className="relative hidden sm:flex rounded-full p-2.5 hover:bg-zinc-100 transition"
                aria-label="Wishlist"
              >
                <Heart size={19} />
                {wishlist.length > 0 && (
                  <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-green-600 px-1 text-[8px] font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </button>

              <button
                className="hidden sm:flex rounded-full p-2.5 hover:bg-zinc-100 transition"
                aria-label="Account"
              >
                <User size={19} />
              </button>

              <button
                className="relative rounded-full p-2.5 hover:bg-zinc-100 transition"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-green-600 px-1 text-[8px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[100] bg-black/50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-6">

            <div className="flex items-center justify-between mb-12">
              <div className="text-2xl font-black tracking-[-0.05em]">
                CRIC<span className="text-green-600">X</span>
              </div>

              <button onClick={() => setMobileMenu(false)}>
                <X size={25} />
              </button>
            </div>

            <div className="flex flex-col gap-2 text-lg font-semibold">
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
                  className={`flex w-full items-center justify-between border-b border-zinc-200 py-4 text-left ${
                    item === "New Arrivals"
                      ? "text-green-600"
                      : "text-zinc-900"
                  }`}
                >
                  <span>{item}</span>
                  <ArrowRight size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=2000&q=90"
            alt="New cricket collection"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        </div>

        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 py-28 lg:py-36">

          <div className="max-w-4xl">

            <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-[0.25em] mb-6">
              <Sparkles size={15} />
              NEW ARRIVALS • 2026
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-[-0.06em] leading-[0.88]">
              THE NEXT
              <br />
              <span className="text-green-500">GAME.</span>
            </h1>

            <p className="mt-7 max-w-xl text-zinc-300 text-base lg:text-lg leading-7">
              Meet the latest CRICX innovations. Premium cricket equipment,
              performance apparel and game-changing accessories engineered for
              the way cricket is played today.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">

              <a
                href="#collection"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-7 py-4 rounded-full font-bold transition"
              >
                SHOP NEW ARRIVALS
                <ArrowRight size={18} />
              </a>

              <a
                href="#featured"
                className="inline-flex items-center gap-3 border border-white/30 hover:bg-white hover:text-black px-7 py-4 rounded-full font-bold transition"
              >
                EXPLORE 2026
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1500px] mx-auto px-5 lg:px-10 py-20">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          <div>
            <p className="text-green-600 font-bold tracking-[0.2em] text-xs mb-4">
              JUST LANDED
            </p>

            <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.05em]">
              FRESH. FAST.
              <br />
              <span className="text-zinc-400">FEARLESS.</span>
            </h2>
          </div>

          <p className="max-w-lg text-zinc-500 leading-7">
            Discover our newest gear across bats, batting equipment,
            protection, footwear, clothing and accessories. Every product
            brings a new edge to your game.
          </p>

        </div>

      </section>

      {/* CATEGORY CARDS */}
      <section
        id="featured"
        className="max-w-[1500px] mx-auto px-5 lg:px-10 pb-20"
      >

        <div className="grid md:grid-cols-3 gap-5">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(category.filter);
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative h-[390px] overflow-hidden rounded-3xl text-left"
            >

              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">

                <p className="text-green-400 text-xs font-bold tracking-[0.18em] mb-2">
                  NEW COLLECTION
                </p>

                <h3 className="text-3xl font-black tracking-tight">
                  {category.name}
                </h3>

                <p className="text-white/70 mt-1">
                  {category.subtitle}
                </p>

                <div className="mt-5 flex items-center gap-2 font-bold text-sm">
                  SHOP NOW
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </div>
            </button>
          ))}

        </div>
      </section>

      {/* PRODUCT COLLECTION */}
      <section
        id="collection"
        className="bg-zinc-50 border-y border-zinc-200"
      >

        <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-16">

          {/* HEADER */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 mb-8">

            <div>
              <p className="text-green-600 text-xs font-bold tracking-[0.2em] mb-2">
                CRICX DROP 01
              </p>

              <h2 className="text-3xl lg:text-4xl font-black tracking-[-0.04em]">
                NEW ARRIVALS
              </h2>

              <p className="text-zinc-500 text-sm mt-2">
                {filteredProducts.length} products
              </p>
            </div>

            <div className="flex flex-wrap gap-2">

              <button
                onClick={() => setMobileFilters(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-zinc-200 text-sm font-semibold"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none bg-white border border-zinc-200 rounded-full pl-5 pr-10 py-2.5 text-sm font-semibold outline-none"
                >
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Top Rated</option>
                </select>

                <ChevronDown
                  size={15}
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

            </div>
          </div>

          {/* FILTER PILLS */}
          <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide">

            {categoriesFilter.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  selectedCategory === category
                    ? "bg-zinc-950 text-white"
                    : "bg-white border border-zinc-200 hover:border-zinc-950"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-10">

            {/* SIDEBAR */}
            <aside className="hidden lg:block">

              <div className="sticky top-28">

                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-lg">
                    FILTERS
                  </h3>

                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedType("All");
                      setMaxPrice(40000);
                    }}
                    className="text-xs font-semibold text-green-600"
                  >
                    CLEAR
                  </button>
                </div>

                {/* TYPE */}
                <div className="border-t border-zinc-200 py-6">

                  <h4 className="font-bold mb-4">
                    Product Type
                  </h4>

                  <div className="space-y-3">

                    {types.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 text-sm cursor-pointer"
                      >

                        <input
                          type="radio"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="accent-green-600"
                        />

                        <span>{type}</span>

                      </label>
                    ))}

                  </div>

                </div>

                {/* PRICE */}
                <div className="border-t border-zinc-200 py-6">

                  <h4 className="font-bold mb-4">
                    Maximum Price
                  </h4>

                  <input
                    type="range"
                    min="500"
                    max="40000"
                    step="500"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(Number(e.target.value))
                    }
                    className="w-full accent-green-600"
                  />

                  <div className="flex justify-between mt-3 text-sm font-semibold">
                    <span>₹500</span>
                    <span>
                      {formatPrice(maxPrice)}
                    </span>
                  </div>

                </div>

                {/* NEW ONLY */}
                <div className="border-t border-zinc-200 py-6">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Sparkles size={17} />
                    </div>

                    <div>
                      <p className="font-bold text-sm">
                        Fresh Drop
                      </p>
                      <p className="text-xs text-zinc-500 mt-1 leading-5">
                        Latest CRICX products from the 2026 collection.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </aside>

            {/* PRODUCTS */}
            <div>

              {filteredProducts.length === 0 ? (

                <div className="bg-white rounded-3xl p-16 text-center">
                  <p className="font-bold text-xl">
                    No products found
                  </p>

                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedType("All");
                      setMaxPrice(40000);
                    }}
                    className="mt-4 text-green-600 font-semibold"
                  >
                    Clear filters
                  </button>
                </div>

              ) : (

                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">

                  {filteredProducts.map((product) => (

                    <div
                      key={product.id}
                      className="group"
                    >

                      {/* IMAGE */}
                      <div className="relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute top-3 left-3">
                          <span className="bg-green-600 text-white text-[9px] sm:text-[10px] font-black tracking-wider px-3 py-1.5 rounded-full">
                            {product.badge}
                          </span>
                        </div>

                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition ${
                            wishlist.includes(product.id)
                              ? "bg-white text-red-500"
                              : "bg-white/80 text-zinc-900"
                          }`}
                        >
                          <Heart
                            size={17}
                            fill={
                              wishlist.includes(product.id)
                                ? "currentColor"
                                : "none"
                            }
                          />
                        </button>

                        {/* HOVER QUICK VIEW */}
                        <button
                          onClick={() => setQuickView(product)}
                          className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl py-3 font-bold text-xs flex items-center justify-center gap-2 translate-y-16 group-hover:translate-y-0 transition duration-300"
                        >
                          <Eye size={15} />
                          QUICK VIEW
                        </button>

                      </div>

                      {/* DETAILS */}
                      <div className="pt-4">

                        <p className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                          {product.category}
                        </p>

                        <h3 className="font-bold text-sm sm:text-base mt-1 leading-5">
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-1 mt-2">

                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                size={11}
                                fill="currentColor"
                                className="text-yellow-500"
                              />
                            ))}
                          </div>

                          <span className="text-[10px] text-zinc-400">
                            ({product.reviews})
                          </span>

                        </div>

                        <div className="flex items-center gap-2 mt-2">

                          <span className="font-black">
                            {formatPrice(product.price)}
                          </span>

                          <span className="text-xs text-zinc-400 line-through">
                            {formatPrice(product.oldPrice)}
                          </span>

                        </div>

                        <button
                          onClick={() => addToCart(product)}
                          className="mt-4 w-full bg-zinc-950 hover:bg-green-600 text-white rounded-xl py-3 text-xs font-bold transition"
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
        </div>
      </section>

      {/* EDITORIAL BANNER */}
      <section className="max-w-[1500px] mx-auto px-5 lg:px-10 py-20">

        <div className="relative overflow-hidden rounded-[2rem] min-h-[480px] bg-zinc-950 text-white">

          <img
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1800&q=90"
            alt="CRICX 2026 collection"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

          <div className="relative z-10 max-w-2xl p-8 lg:p-16 min-h-[480px] flex flex-col justify-center">

            <div className="flex items-center gap-2 text-green-400 text-xs font-bold tracking-[0.2em]">
              <Zap size={15} />
              CRICX 2026
            </div>

            <h2 className="text-4xl lg:text-6xl font-black tracking-[-0.05em] leading-[0.95] mt-5">
              DESIGNED FOR
              <br />
              THE NEXT
              <br />
              <span className="text-green-500">LEVEL.</span>
            </h2>

            <p className="text-zinc-300 mt-6 leading-7 max-w-lg">
              New materials. Refined silhouettes. Smarter engineering.
              Everything you need to play with more confidence.
            </p>

            <button
              onClick={() => {
                setSelectedCategory("All");
                document
                  .getElementById("collection")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 flex items-center gap-3 font-bold text-sm"
            >
              EXPLORE THE COLLECTION
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </section>

      {/* WHY NEW CRICX */}
      <section className="bg-zinc-50 border-y border-zinc-200">

        <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-20">

          <div className="text-center max-w-2xl mx-auto mb-14">

            <p className="text-green-600 text-xs font-bold tracking-[0.2em]">
              THE CRICX STANDARD
            </p>

            <h2 className="text-4xl lg:text-5xl font-black tracking-[-0.05em] mt-3">
              NEW GEAR.
              <br />
              <span className="text-zinc-400">
                NO COMPROMISE.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                icon: Sparkles,
                title: "Fresh Designs",
                text: "Built around modern cricket and the demands of today's players.",
              },
              {
                icon: Zap,
                title: "Performance First",
                text: "Every detail is designed to help you move, react and perform.",
              },
              {
                icon: ShieldCheck,
                title: "Built To Last",
                text: "Premium materials selected for serious match-day performance.",
              },
              {
                icon: Clock3,
                title: "Always Evolving",
                text: "New technology and refined designs added throughout the season.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-3xl p-7 border border-zinc-200"
                >

                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <h3 className="font-black text-lg mt-6">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-500 leading-6 mt-2">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="max-w-[1500px] mx-auto px-5 lg:px-10 py-16">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="flex items-center gap-4">
            <Truck className="text-green-600" size={26} />
            <div>
              <p className="font-bold text-sm">Free Shipping</p>
              <p className="text-xs text-zinc-500 mt-1">
                Orders above ₹1999
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-600" size={26} />
            <div>
              <p className="font-bold text-sm">Secure Payments</p>
              <p className="text-xs text-zinc-500 mt-1">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RotateCcw className="text-green-600" size={26} />
            <div>
              <p className="font-bold text-sm">Easy Returns</p>
              <p className="text-xs text-zinc-500 mt-1">
                Hassle-free returns
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Zap className="text-green-600" size={26} />
            <div>
              <p className="font-bold text-sm">Built For Cricket</p>
              <p className="text-xs text-zinc-500 mt-1">
                Performance focused
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="bg-zinc-950 text-white">

        <div className="max-w-[1000px] mx-auto px-5 py-20 text-center">

          <p className="text-green-500 text-xs font-bold tracking-[0.2em]">
            STAY AHEAD
          </p>

          <h2 className="text-4xl lg:text-5xl font-black tracking-[-0.05em] mt-3">
            BE FIRST TO KNOW.
          </h2>

          <p className="text-zinc-400 max-w-xl mx-auto mt-4">
            Get early access to new drops, exclusive products and CRICX
            performance stories.
          </p>

          <div className="max-w-xl mx-auto mt-8 flex gap-2">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-white/10 border border-white/10 rounded-full px-5 py-4 outline-none placeholder:text-zinc-500 focus:border-green-500"
            />

            <button className="bg-green-600 hover:bg-green-500 rounded-full px-7 py-4 font-bold transition">
              JOIN
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white">

        <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-16">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div>

              <div className="text-3xl font-black tracking-[-0.06em]">
                CRIC<span className="text-green-600">X</span>
              </div>

              <p className="text-zinc-500 text-sm leading-6 mt-5 max-w-xs">
                Premium cricket equipment designed for players who refuse to
                play ordinary.
              </p>

              <p className="text-green-500 text-xs font-bold tracking-[0.15em] mt-5">
                PLAY BOLD. PLAY BETTER.
              </p>

            </div>

            <div>
              <h4 className="font-bold mb-5">SHOP</h4>

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
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5">DISCOVER</h4>

              <div className="space-y-3 text-sm text-zinc-500">
                <a href="/new-arrivals" className="block hover:text-white">
                  New Arrivals
                </a>
                <a href="/accessories" className="block hover:text-white">
                  Accessories
                </a>
                <a href="#" className="block hover:text-white">
                  Best Sellers
                </a>
                <a href="#" className="block hover:text-white">
                  Our Story
                </a>
                <a href="#" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5">SUPPORT</h4>

              <div className="space-y-3 text-sm text-zinc-500">
                <a href="#" className="block hover:text-white">
                  Shipping & Returns
                </a>
                <a href="#" className="block hover:text-white">
                  Size Guide
                </a>
                <a href="#" className="block hover:text-white">
                  Track Order
                </a>
                <a href="#" className="block hover:text-white">
                  FAQs
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-3 text-xs text-zinc-600">
            <p>
              © 2026 CRICX. All rights reserved.
            </p>

            <div className="flex gap-5">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>

        </div>

      </footer>

      {/* MOBILE FILTER DRAWER */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[90] bg-black/50 lg:hidden">

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto">

            <div className="flex items-center justify-between mb-7">

              <h3 className="text-xl font-black">
                FILTERS
              </h3>

              <button onClick={() => setMobileFilters(false)}>
                <X size={23} />
              </button>

            </div>

            <h4 className="font-bold mb-4">
              Product Type
            </h4>

            <div className="grid grid-cols-2 gap-3">

              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`border rounded-xl px-4 py-3 text-sm font-semibold ${
                    selectedType === type
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-zinc-200"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>

            <h4 className="font-bold mt-8 mb-4">
              Maximum Price
            </h4>

            <input
              type="range"
              min="500"
              max="40000"
              step="500"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Number(e.target.value))
              }
              className="w-full accent-green-600"
            />

            <div className="flex justify-between text-sm font-semibold mt-3">
              <span>₹500</span>
              <span>{formatPrice(maxPrice)}</span>
            </div>

            <button
              onClick={() => setMobileFilters(false)}
              className="w-full bg-zinc-950 text-white rounded-xl py-4 mt-8 font-bold"
            >
              APPLY FILTERS
            </button>

          </div>
        </div>
      )}

      {/* QUICK VIEW */}
      {quickView && (
        <div
          className="fixed inset-0 z-[110] bg-black/60 flex items-center justify-center p-4"
          onClick={() => setQuickView(null)}
        >

          <div
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="grid md:grid-cols-2">

              <div className="aspect-square md:aspect-auto bg-zinc-100">

                <img
                  src={quickView.image}
                  alt={quickView.name}
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="p-7 lg:p-10">

                <div className="flex justify-between">

                  <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full">
                    {quickView.badge}
                  </span>

                  <button onClick={() => setQuickView(null)}>
                    <X size={22} />
                  </button>

                </div>

                <p className="text-xs uppercase tracking-wider text-zinc-400 font-bold mt-8">
                  {quickView.category}
                </p>

                <h2 className="text-3xl font-black tracking-tight mt-2">
                  {quickView.name}
                </h2>

                <div className="flex items-center gap-2 mt-4">

                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        fill="currentColor"
                        className="text-yellow-500"
                      />
                    ))}
                  </div>

                  <span className="text-sm text-zinc-400">
                    {quickView.rating} ({quickView.reviews})
                  </span>

                </div>

                <div className="flex items-center gap-3 mt-6">

                  <span className="text-2xl font-black">
                    {formatPrice(quickView.price)}
                  </span>

                  <span className="text-zinc-400 line-through">
                    {formatPrice(quickView.oldPrice)}
                  </span>

                </div>

                <p className="text-zinc-500 leading-7 mt-6">
                  Designed for modern cricket, this latest CRICX product
                  combines premium construction, performance-focused
                  engineering and a clean professional aesthetic.
                </p>

                <button
                  onClick={() => {
                    addToCart(quickView);
                    setQuickView(null);
                  }}
                  className="w-full bg-zinc-950 hover:bg-green-600 text-white rounded-xl py-4 mt-8 font-bold transition"
                >
                  ADD TO CART
                </button>

                <button
                  onClick={() => toggleWishlist(quickView.id)}
                  className="w-full border border-zinc-200 rounded-xl py-4 mt-3 font-bold flex items-center justify-center gap-2"
                >
                  <Heart
                    size={17}
                    fill={
                      wishlist.includes(quickView.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                  {wishlist.includes(quickView.id)
                    ? "ADDED TO WISHLIST"
                    : "ADD TO WISHLIST"}
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] bg-zinc-950 text-white px-5 py-3 rounded-full shadow-2xl text-sm font-semibold flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {toast}
        </div>
      )}

    </div>
  );
}