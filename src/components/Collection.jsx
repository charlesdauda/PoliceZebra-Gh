import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

// Card 1 — Shorts
import shorts1 from "../assets/images/wool.png";
import shorts2 from "../assets/images/wool1.jpeg";

// Card 2 — Lacoste
import lacoste1 from "../assets/images/denim.png";
import lacoste2 from "../assets/images/denim1.jpeg";

// Card 3 — Sleeveless
import sleeveless1 from "../assets/images/silk.png";
import sleeveless2 from "../assets/images/silk1.jpeg";

const Collection = () => {
  const cards = [
    {
      type: "image",
      title: "Shorts",
      subtitle: "Authentic cotton",
      images: [shorts1, shorts2],
    },
    {
      type: "image",
      title: "Lacoste",
      subtitle: "Best Fit",
      images: [lacoste1, lacoste2],
    },
    { type: "cta" },
    {
      type: "image",
      title: "Sleeveless",
      subtitle: "Lightweight & Breathable",
      images: [sleeveless1, sleeveless2],
    },
  ];

  // Shared index — all cards swap together every 5s
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % 2); // 2 = number of images per card
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="pt-20">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-4 h-4 fill-blue-700 text-blue-700" />
              <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
                Essential Threads
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-blue-950">
              Luxe Material
            </h2>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-700">
              Collection
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}></ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          if (card.type === "cta") {
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-blue-800 p-8 h-full min-h-100 flex flex-col justify-end text-white">
                  <div>
                    <h3 className="font-display text-3xl uppercase mb-4 tracking-tight">
                      Explore Collection
                    </h3>
                    <p className="text-white/80 text-sm mb-6 leading-relaxed">
                      Premium fabrics curated from the world's finest mills,
                      crafted for durability, comfort, and lasting style.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          }

          return (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="relative overflow-hidden group cursor-pointer min-h-125 h-full">
                {/* Stacked images — crossfade between them */}
                {card.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={card.title}
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out group-hover:grayscale group-hover:scale-110 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="font-display text-3xl uppercase tracking-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-bold tracking-widest uppercase text-white/80">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;