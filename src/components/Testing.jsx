import { Sparkles, Star, ArrowRight, Grid2x2, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import aesthetic from "../assets/images/aesthetic.png";
import design from "../assets/images/design.png";

const Testing = () => {
  const bullets = [
    "Smooth Touch",
    "Flexible Fit",
    "Premium Finish",
  ];

  const stats = [
    { number: 80, suffix: "+", label: "Active Clients", sub: "Across 40 countries" },
    { number: 340, suffix: "+", label: "Style SKUs", sub: "New styles every quarter" },
    { number: 18, suffix: "+", label: "Countries Sourced", sub: "Premium global mills" },
    { number: 24, suffix: "H", label: "Dispatch Time", sub: "Guaranteed same-day" },
  ];

  return (
    <section>
      <div className="px-6 lg:px-12 py-20">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 fill-blue-700 text-blue-700" />
                <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
                 Premium Quality
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-blue-950">
                Fabric & Comfort 
              </h2>
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-700">
            Collection
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
          </ScrollReveal>
        </div>

        {/* THREE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          <ScrollReveal>
            <div className="bg-white/60 rounded-3xl p-8 h-auto flex flex-col">
              <div className="bg-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-8">
                <Grid2x2 className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-display text-3xl uppercase tracking-tight text-blue-950 mb-4">
                Superior Comfort
              </h3>
              <p className="text-blue-950/60 mb-6 leading-relaxed">
                Apparel designed for ultimate ease 
                perfect for home, casual outings, and daily wear.
              </p>
              <div className="border-t border-blue-950/10 pt-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8">
                  {bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-blue-950 text-sm font-bold tracking-widest uppercase"
                    >
                      <span className="w-2 h-2 bg-blue-700 rounded-full shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Just an image */}
          <ScrollReveal delay={100}>
            <div className="rounded-3xl overflow-hidden h-full min-h-125">
              <img
                src={aesthetic}
                alt="Aesthetic apparel"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>


          <ScrollReveal delay={200}>
            <div className="rounded-3xl p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-blue-700 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Excellence
                </span>
                <span className="border border-blue-950/20 text-blue-950 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                  Durable
                </span>
              </div>
              <h3 className="font-display text-3xl uppercase tracking-tight text-blue-950 mb-4">
                Gentle Touch
              </h3>
              <p className="text-blue-950/60 mb-6 leading-relaxed">
              Experience the soft, breathable fabrics of Police Zebra, 
              designed to feel gentle on your skin. Perfect for everyday wear
               for all-day confidence.
              </p>
              <div className="border-t border-blue-950/10 pt-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-6 text-blue-700 text-xs font-bold tracking-widest uppercase">
                  <span className="w-2 h-2 bg-blue-700 rounded-full" />
                  Effortless Fit
                </div>
                <div className="rounded-2xl overflow-hidden flex-1 min-h-50">
                  <img
                    src={design}
                    alt="Apparel design"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="bg-blue-700 p-3 rounded-full">
                <Phone className="w-5 h-5 text-white" fill="white" />
              </div>
              <h4 className="font-display text-xl md:text-2xl uppercase tracking-tight text-blue-950">
                Gain Insights from Logistics Experts —
                <span className="text-blue-700"> Call Us: +(123) 456-789</span>
              </h4>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-display text-3xl text-blue-950">4.0/5</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4
                        ? "fill-blue-700 text-blue-700"
                        : "fill-blue-200 text-blue-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-blue-950/40 text-xs font-bold tracking-[0.3em] uppercase">
              Verified Industry Results
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ============= BOTTOM: FULL-WIDTH STATS BAR ============= */}
      <div className="bg-slate-900 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
        {stats.map((stat, i) => (
          <div key={i} className="p-10 text-center">
            <p className="font-display text-5xl text-white mb-2">
              <CountUp end={stat.number} duration={1800} />
              <sup className="text-2xl">{stat.suffix}</sup>
            </p>
            <p className="text-white text-sm font-bold tracking-widest uppercase mb-1">
              {stat.label}
            </p>
            <p className="text-white/70 text-sm italic">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testing;