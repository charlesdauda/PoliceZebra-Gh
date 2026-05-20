import { Sparkles, Search, Package, CheckCircle2, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import step1Image from "../assets/images/fits.png";
import step2Image from "../assets/images/request.png";
import step3Image from "../assets/images/packing.png";
import step4Image from "../assets/images/delivery.png";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      Icon: Search,
      title: "Browse & Select",
      description:
        "Explore our curated collection of tees, boxers, shorts, and more handpicked for style, comfort, and quality.",
      image: step1Image,
    },
    {
      number: "02",
      Icon: Package,
      title: "Request Samples",
      description:
        "Get a feel for the fabric and fit with our sample options before committing to your order.",
      image: step2Image,
    },
    {
      number: "03",
      Icon: CheckCircle2,
      title: "Place Order",
      description:
        "Easily select your sizes and quantities, and place your order with confidence.",
      image: step3Image,
    },
    {
      number: "04",
      Icon: Rocket,
      title: "Fast Dispatch",
      description:
        "Orders are processed and shipped promptly, ensuring your Police Zebra products reach you quickly.",
      image: step4Image,
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 fill-blue-700 text-blue-700" />
            <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
              How It Works
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tight text-blue-950 mb-2">
            From Designing
          </h2>
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-700 mb-6">
            to delivery
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-blue-950/60 leading-relaxed max-w-2xl mx-auto">
            A seamless process from sourcing to your doorstep designed for
            speed, quality, and trust at every step of the journey.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="rounded-2xl overflow-hidden h-48 mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <step.Icon className="w-6 h-6 text-blue-700" />
                </div>
                <span className="font-display text-6xl text-blue-200 group-hover:text-blue-700 leading-none transition-colors duration-300">
                  {step.number}
                </span>
              </div>
              <h3 className="font-bold text-2xl text-blue-950 mb-3">
                {step.title}
              </h3>
              <p className="text-blue-950/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;