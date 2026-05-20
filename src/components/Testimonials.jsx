import { useState, useEffect } from "react";
import { Sparkles, Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import test1 from "../assets/images/test1.jpg";
import test2 from "../assets/images/test2.jpg";
import test3 from "../assets/images/test3.jpg";
import test4 from "../assets/images/test4.jpg";
import test5 from "../assets/images/test5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      rating: 4,
      quote:
        "The team completely transformed our online presence. Our website traffic has more than doubled in just six months, and we're...",
      name: "Matthew Hunter",
      role: "Designer",
      image: test1,
    },
    {
      rating: 4,
      quote:
        "Working with Police Zebra changed how we source fabric quality, transparency, and fast turnaround on every single order.",
      name: "Michael Lee",
      role: "Fabric Quality Voice",
      image: test2,
    },
    {
      rating: 4,
      quote:
        "Their attention to detail and commitment to sustainable production has made them our go-to supplier across all collections.",
      name: "Tomas White",
      role: "Senior Textile Expert",
      image: test3,
    },
    {
      rating: 5,
      quote:
        "Two years in and we couldn't be happier. The fabric consistency is unmatched and the team always delivers on time.",
      name: "Sarah Chen",
      role: "Design Lead",
      image: test4,
    },
    {
      rating: 5,
      quote:
        "Outstanding service and sustainable practices. The fabric quality exceeds expectations every single time we order.",
      name: "David Patel",
      role: "Production Director",
      image: test5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView(); 
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - cardsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView, testimonials.length]);

  const slidePct = 100 / cardsPerView;

  const dotCount = testimonials.length - cardsPerView + 1;

  return (
    <section>
      <div className="bg-slate-900 px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 fill-white text-white" />
                <span className="text-white text-sm font-bold tracking-widest uppercase">
                  What We Offer
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none tracking-tight text-white">
                What They
              </h2>
              <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-white/60">
                Say
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="border-l border-white/30 pl-6 max-w-md">
              <p className="text-white/80 leading-relaxed">
                Over 5,000 manufacturers and designers trust us for
                quality, speed, and honest sourcing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="px-6 lg:px-12 py-20">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slidePct}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ width: `${slidePct}%` }}
              >
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col">
                  <Quote
                    className="w-8 h-8 fill-blue-200 text-blue-200 mb-6"
                    strokeWidth={0}
                  />

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-4 h-4 ${
                          idx < t.rating
                            ? "fill-blue-700 text-blue-700"
                            : "fill-blue-200 text-blue-200"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="font-script text-lg text-blue-950 mb-6 flex-1 leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="h-px bg-blue-950/10 mb-6" />

                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-blue-950">{t.name}</h4>
                      <p className="text-sm text-blue-950/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: dotCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-8 bg-blue-700"
                  : "w-2 bg-blue-950/20 hover:bg-blue-950/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;