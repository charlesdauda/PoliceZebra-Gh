import { Sparkles, ArrowRight, Globe, Feather, Zap, ShieldCheck} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Process = () => {

  const features = [
    {
      Icon: Globe,
      title: "Global Network",
      description:
        "Direct access to 50+ certified mills across 12 countries for agility.",
    },
    {
      Icon: Feather,
      title: "Sustainability",
      description:
        "Every piece crafted responsibly for you and the planet.",
    },
    {
      Icon: Zap,
      title: "Fast Logistics",
      description:
        "Supply chain network that reduces lead times by 30% anywhere.",
    },
    {
      Icon: ShieldCheck,
      title: "Premium Quality",
      description:
        "Soft, comfortable, and built for everyday wear.",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
        <div className="flex-1">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 fill-blue-700 text-blue-700" />
              <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
                Our Process
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tight text-blue-950">
              Unparalleled{" "}
              <span className="font-script normal-case text-blue-700">
                Strategic Advantage
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-start lg:items-end gap-4 max-w-md">
            <p className="text-blue-950/60 leading-relaxed">
              For more than 30 years, we’ve crafted clothing that 
              blends comfort, quality, and timeless everyday style.
            </p>
          </div>
        </ScrollReveal>
      </div>
      <div className="h-px bg-blue-950/10 mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="flex flex-col">
              <div className="bg-blue-950/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.Icon className="w-6 h-6 text-blue-700" strokeWidth={2} />
              </div>
              <h3 className="font-display text-2xl uppercase tracking-tight text-blue-950 mb-3">
                {feature.title}
              </h3>
              <p className="text-blue-950/60 leading-relaxed">{feature.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Process;