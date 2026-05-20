import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { galleryItems, galleryCategories } from "../data/Gallery";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  const prevImage = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filteredItems.length]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  const formatNumber = (n) => String(n).padStart(2, "0");

  return (
    <>
      {/* ============ EDITORIAL HEADER ============ */}
      <section className="px-6 lg:px-12 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-blue-700"></div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-700 uppercase">
                Issue 01 / 2025
              </span>
              <div className="w-12 h-px bg-blue-700"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] tracking-tight text-blue-950 mb-1">
              Moments
            </h1>
            <h1 className="font-script text-5xl md:text-7xl lg:text-8xl leading-tight text-blue-700 mb-8">
              Captured
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-blue-950/60 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
              An evolving archive of craftsmanship, character and design —
              the moments that shape Police Zebra.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ FILTERS + META LINE ============ */}
      <section className="px-6 lg:px-12 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-bold tracking-[0.15em] uppercase text-[11px] transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-950 text-white shadow-md"
                    : "bg-transparent text-blue-950/60 hover:text-blue-950 hover:bg-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-blue-950/20"></div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-blue-950/50 uppercase">
              {formatNumber(filteredItems.length)} frames · Curated edit
            </span>
            <div className="w-8 h-px bg-blue-950/20"></div>
          </div>
        </div>
      </section>

      {/* ============ MASONRY (columns) ============ */}
      <section className="px-6 lg:px-12 pb-24">
        <div
          key={activeCategory}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-5 max-w-7xl mx-auto"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 60}ms` }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in mb-3 md:mb-5 break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-1200"
              />

              {/* Number badge — top-left, appears on hover */}
              <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-white/90 backdrop-blur-md text-blue-950 text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {formatNumber(index + 1)} / {formatNumber(filteredItems.length)}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-end justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 block mb-1">
                      {
                        galleryCategories.find((c) => c.id === item.category)
                          ?.name
                      }
                    </span>
                    <h3 className="font-display text-lg lg:text-xl text-white uppercase tracking-tight truncate">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ LIGHTBOX ============ */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 z-10">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/60 uppercase">
              {formatNumber(lightboxIndex + 1)} /{" "}
              {formatNumber(filteredItems.length)}
            </span>
            <button
              onClick={closeLightbox}
              className="w-11 h-11 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Image + caption */}
          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-lg"
            />

            <div className="mt-6 text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 block mb-2">
                {
                  galleryCategories.find(
                    (c) => c.id === filteredItems[lightboxIndex].category
                  )?.name
                }
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Keyboard hint — desktop only */}
          <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-white/30 uppercase">
            Use ← → keys to navigate · Esc to close
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;