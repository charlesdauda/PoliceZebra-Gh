import { Sparkles, Building2, Microscope, Recycle, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import AboutUsImage from "../assets/images/aboutimg.png";

const AboutUs = () => {
  const features = [
    {
      Icon: Building2,
      title: "Direct Mill Partnerships",
      description:
        "We work directly with 80+ certified mills — no middlemen, better prices.",
    },
    {
      Icon: Microscope,
      title: "Quality Certification",
      description:
        "Every batch is lab-tested for GSM, tensile strength and colorfastness.",
    },
    {
      Icon: Recycle,
      title: "Sustainable Sourcing",
      description:
        "GOTS certified organic options and responsible sourcing across all categories.",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          {/* Main image */}
        <div className="rounded-3xl overflow-hidden h-150 lg:h-200">
          <img
            src={AboutUsImage}
            alt="Textile factory"
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>

          {/* Floating card — hidden on mobile */}
          <div className="hidden lg:block absolute top-6 right-6 lg:top-8 lg:right-8 bg-white rounded-2xl px-6 py-5 shadow-xl text-center animate-fade-up delay-300">
            <p className="font-display text-4xl lg:text-5xl text-blue-700 leading-none">
              <CountUp end={15} duration={2000} />
              <sup className="text-2xl lg:text-3xl">+</sup>
            </p>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-950/60 mt-2">
              Years of
              <br />
              Excellence
            </p>
          </div>

          {/* Floating dark card — 100% Ethical (bottom left) */}
          <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 bg-blue-950 rounded-2xl p-4 flex items-center gap-3 animate-fade-up delay-500">
            <div className="bg-blue-700 p-2.5 rounded-lg">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-white text-sm font-bold tracking-widest uppercase">
              100% Ethical
            </span>
          </div>
        </div>

        {/* ============ RIGHT: Text content ============ */}
        <div>
          {/* Badge */}
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 fill-blue-700 text-blue-700" />
              <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
                Who We Are
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={100}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.1] tracking-tight text-blue-950 mb-6">
              Your Partner In
              <br />
              <span className="font-script normal-case text-blue-700">
                Premium
              </span>{" "}
              Fits
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={200}>
            <p className="text-blue-950/60 mb-8 leading-relaxed">
            Police Zebra is a trusted lifestyle apparel brand, delivering high-quality tees, 
            boxers, singlets, shorts, and flip-flops. We craft everyday essentials using soft, 
            durable fabrics, designed for comfort, style, and effortless living.
            </p>
          </ScrollReveal>

          {/* Feature cards */}
          <div className="space-y-4">
            {features.map(({ Icon, title, description }, i) => (
              <ScrollReveal key={i} delay={300 + i * 100}>
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-blue-950 mb-1">
                      {title}
                    </h3>
                    <p className="text-blue-950/60 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;