import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import tee from "../assets/images/ap1.jpeg";
import boxer from "../assets/images/ap2.jpeg";
import material from "../assets/images/ap3.jpeg";
import shorts from "../assets/images/ap4.jpeg";
import flips from "../assets/images/ap5.jpg";

const Services = () => {
  const services = [
    {
      number: "01",
      badge: "Smooth",
      title: "Soft & Comfortable Tees",
      description:
        "Premium cotton t-shirts designed for all-day comfort and effortless style. Perfect for lounging or casual outings.",
      image: tee,
    },
    {
      number: "02",
      badge: "Comfort",
      title: "Breathable Boxers",
      description:
        "Lightweight, breathable fabrics keep you comfortable throughout the day. Ideal for relaxing or staying active.",
      image: boxer,
    },
    {
      number: "03",
      badge: "Sturdy",
      title: "Tailored Perfection",
      description:
        "Experience years of innovation and craftsmanship, we bring you fabrics that speak of quality.",
      image: material,
    },
    {
      number: "04",
      badge: "Versatile",
      title: "Durable Cotton Shorts",
      description:
        "Soft yet resilient cotton shorts built to withstand everyday wear while keeping you cool.",
      image: shorts,
    },
    {
      number: "05",
      badge: "Quality",
      title: "Cozy Flip-Flops",
      description:
        "Soft, durable, and lightweight — step into comfort whether at home or on the go.",
      image: flips,
    },
  ];

  return (
    <section className="bg-slate-900 pb-20 px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 pt-20">
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 fill-blue-500 text-blue-500" />
              <span className="text-blue-500 text-sm font-bold tracking-widest uppercase">
                Featured Products
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-white">
              Premium Apparel
            </h2>
            <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-500">
              Our Core Essentials
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-start lg:items-end gap-4 max-w-md">
            <p className="text-white/60 leading-relaxed">
              Comfortable, high-quality clothing crafted for your daily life 
               tees, boxers, singlets, shorts, and flip-flops you can rely on.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <ScrollReveal key={index} delay={index * 80}>
            <div className="group relative cursor-pointer transition-all duration-300 px-6 lg:px-8 py-10 rounded-2xl border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5">
              <div className="flex items-center gap-6 lg:gap-10">
                <span className="font-display text-5xl md:text-6xl lg:text-7xl text-white/10 group-hover:text-blue-500/30 transition-colors duration-300 shrink-0">
                  {service.number}
                </span>
                <div className="hidden lg:block overflow-hidden transition-all duration-500 w-0 group-hover:w-32 shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-32 h-32 rounded-2xl object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                    {service.badge}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-white group-hover:text-blue-500 transition-colors duration-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base max-w-2xl">
                    {service.description}
                  </p>
                </div>

                <div className="bg-blue-500 group-hover:bg-blue-400 text-white p-4 rounded-full transition-all duration-300 group-hover:scale-110 shrink-0">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </div>

              <div className="absolute bottom-0 left-6 right-6 lg:left-8 lg:right-8 h-px bg-white/10 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Services;