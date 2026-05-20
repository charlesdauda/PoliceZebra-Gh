import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CountUp from "./CountUp";

import heroImage1 from "../assets/images/hero.jpeg";
import heroImage2 from "../assets/images/hero1.png";

const slides = [
  {
    image: heroImage1,
    alt: "High quality fabric on loom",
    badge: "New Arrivals",
    offer: {
      label: "Current Offer",
      price: "₵890",
      note: "Fast, delivery for every order",
    },
    featured: {
      tag: "Featured",
      title: "Classic Boxers Pro",
      meta: "Breathable Fabric · 150gsm · Pack of 2",
    },
  },
  {
    image: heroImage2,
    alt: "Premium cotton fabric collection",
    badge: "Best Seller",
    offer: {
      label: "Limited Drop",
      price: "₵1,050",
      note: "Fast, delivery for every order",
    },
    featured: {
      tag: "Trending Now",
      title: "Heritage Linen Set",
      meta: "Stone Washed · 200gsm · Pack of 3",
    },
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const current = slides[active];

  return (
    <section className="px-6 lg:px-12 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ===== Left side ===== */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-6 animate-fade-up delay-100">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span className="text-slate-900 text-sm font-bold tracking-widest uppercase">
              New 2026 Collection Live Now
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight uppercase mb-6 animate-fade-up delay-200">
            <span className="text-blue-950 block">Comfort Fits</span>
            <span className="text-blue-700 block">Made For</span>
            <span className="text-blue-950/15 block">You</span>
          </h1>

          <p className="text-blue-950/70 text-base lg:text-lg max-w-lg mb-8 leading-relaxed animate-fade-up delay-300">
            Quality materials sourced globally for{" "}
            <span className="font-bold text-blue-950">comfort and style</span>{" "}
            Loved by thousands of shoppers across multiple countries worldwide.
          </p>

          <div className="flex items-center gap-4 mb-12 animate-fade-up delay-400">
            <Link
              to="/shop"
              className="bg-blue-900 text-white font-bold text-sm tracking-wider uppercase px-7 py-4 rounded-full flex items-center gap-3 hover:bg-blue-800 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Browse Collection
              <span className="bg-white/20 p-1.5 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <a
              href="https://youtu.be/G5hbAaIJH_8?si=Bax0o52gqtdU6tXQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-950 font-bold text-sm px-6 py-4 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-blue-700 text-blue-700" />
              Our Story
            </a>
          </div>

          <div className="flex items-center gap-10 mb-10 animate-fade-up delay-500">
            <div>
              <p className="font-display text-4xl text-blue-700">
                <CountUp end={5} duration={1500} delay={700} />K
                <sup className="text-2xl">+</sup>
              </p>
              <p className="text-xs font-bold tracking-widest text-blue-950/60 uppercase mt-1">
                Clients Worldwide
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-blue-700">
                <CountUp end={340} duration={1800} delay={700} />
                <sup className="text-2xl">+</sup>
              </p>
              <p className="text-xs font-bold tracking-widest text-blue-950/60 uppercase mt-1">
                Style SKUs
              </p>
            </div>
            <div>
              <p className="font-display text-4xl text-blue-700">
                <CountUp end={18} duration={1500} delay={700} />
              </p>
              <p className="text-xs font-bold tracking-widest text-blue-950/60 uppercase mt-1">
                Country Origins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 animate-fade-up delay-700">
            <div className="w-8 h-px bg-blue-950" />
            <span className="text-xs font-bold tracking-widest text-blue-950 uppercase">
              Scroll to Explore
            </span>
          </div>
        </div>

        {/* ===== Right side (slideshow) ===== */}
        <div className="relative animate-fade-right delay-300">
          <div className="relative rounded-2xl overflow-hidden h-125 lg:h-150">
            {slides.map((s, i) => (
              <img
                key={i}
                src={s.image}
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div
            key={`badge-${active}`}
            className="absolute top-3 right-3 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 shadow-lg flex items-center gap-1.5 lg:gap-2 animate-fade-in"
          >
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[9px] lg:text-xs font-bold tracking-widest text-slate-800 uppercase">
              {current.badge}
            </span>
          </div>

          <div
            key={`offer-${active}`}
            className="absolute top-1/2 -translate-y-1/2 -left-2 lg:-left-8 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-5 w-36 lg:w-52 border border-slate-100 animate-fade-in"
          >
            <div className="flex items-center gap-1.5 lg:gap-2 mb-2 lg:mb-3">
              <div className="w-5 lg:w-8 h-px bg-slate-800"></div>
              <p className="text-[8px] lg:text-[10px] font-bold tracking-[0.15em] lg:tracking-[0.2em] text-slate-500 uppercase">
                {current.offer.label}
              </p>
            </div>
            <p className="font-display text-3xl lg:text-5xl text-blue-700 leading-none mb-2 lg:mb-3">
              {current.offer.price}
            </p>
            <p className="text-[10px] lg:text-xs text-slate-500 leading-relaxed">
              {current.offer.note}
            </p>
          </div>

          <div
            key={`featured-${active}`}
            className="hidden lg:flex absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-5 w-[85%] border border-slate-100 items-center justify-between gap-4 animate-fade-in"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  {current.featured.tag}
                </span>
              </div>
              <h3 className="font-display text-xl text-blue-950 mb-1 truncate">
                {current.featured.title}
              </h3>
              <p className="text-xs text-slate-500">{current.featured.meta}</p>
            </div>

            <div className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center shrink-0 hover:scale-110 transition-all cursor-pointer">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;