import { Sparkles, Send, Star, ArrowRight } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import ScrollReveal from "./ScrollReveal";
import React from "react";
import { link } from "framer-motion/client";

const Footer = () => {
  const services = [
    "Crafted to Impress",
    "The Future of Fabrics",
    "Weaving Excellence",
    "Precision Stitching",
    "Durability Woven In",
  ];

  const quicklinks = [
    "About Us",
    "Testimonials",
    "Our Team",
    "Latest Articles",
    "Privacy Policy",
  ];

    const socials = [
    { Icon: FaFacebookF, label: "Facebook", link: "https://www.facebook.com/policezebra" },
    { Icon: FaYoutube, label: "Youtube", link: "https://youtu.be/G5hbAaIJH_8?si=eUnVNfd8bRIiVcES" },
    { Icon: FaInstagram, label: "Instagram", link: "https://www.instagram.com/policezebra" }
    ];

  return (
    <footer className="bg-slate-900">
      {/* ============ CTA BANNER ============ */}
      <div className="px-6 lg:px-12 py-24 text-center border-b border-white/10">
        <ScrollReveal>
          <span className="text-blue-500 text-sm font-bold tracking-widest uppercase mb-4 block">
            Limited Time Offer
          </span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight leading-[1.1] text-white mb-8">
          Get Free<span className="text-blue-500"> Sample</span>
            <br />
           or Styling Tip
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
         Discover the comfort and quality of Police Zebra apparel before you buy. 
         Try it or get expert advice with zero commitment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <button className="group inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm tracking-widest uppercase px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all duration-300">
            Claim Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollReveal>
      </div>

      {/* ============ MAIN FOOTER (4 columns) ============ */}
      <div className="px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COLUMN 1: Tagline + Social */}
          <div>
            <p className="font-script text-2xl text-white mb-8 leading-snug">
              Elevating Fashion Through Superior Fabric Solutions
            </p>
            <h4 className="font-display text-lg uppercase text-white tracking-wider mb-4">
              Follow Me
            </h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, label, link }, i) => (
                <a
                  key={i}
                  href={link}
                  aria-label={label}
                  className="border-2 border-blue-700 hover:bg-blue-700 text-blue-700 hover:text-white w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Our Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 fill-blue-500 text-blue-500" />
              <h4 className="font-display text-lg uppercase text-white tracking-wider">
                Our Services
              </h4>
            </div>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="font-script text-white/80 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Quicklinks */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 fill-blue-500 text-blue-500" />
              <h4 className="font-display text-lg uppercase text-white tracking-wider">
                Quicklinks
              </h4>
            </div>
            <ul className="space-y-3">
              {quicklinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="font-script text-white/80 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Get Updates */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 fill-blue-500 text-blue-500" />
              <h4 className="font-display text-lg uppercase text-white tracking-wider">
                Get Updates
              </h4>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Premium fibers turned into high-quality textiles that inspire
              fashion and comfort.
            </p>

            {/* Email subscribe form */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent text-white placeholder:text-white/40 px-4 py-2 focus:outline-none text-sm"
              />
              <button
                aria-label="Subscribe"
                className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4
                        ? "fill-blue-500 text-blue-500"
                        : "fill-blue-500/40 text-blue-500/40"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white text-sm font-bold">
                4.7 | 800+ Reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ============ COPYRIGHT BAR ============ */}
      <div className="border-t border-white/10 px-6 lg:px-12 py-6">
        <p className="text-center text-white/60 text-sm">
          © Copyright 2026. All rights reserved{" "}
          <span className="text-blue-500 font-bold">Police Zebra</span>. Designed by{" "}
          <span className="text-white font-bold">Avexis</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;