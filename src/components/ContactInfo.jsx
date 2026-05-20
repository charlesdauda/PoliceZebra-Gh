import { Sparkles, MapPin, Phone, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactInfo = () => {
  const cards = [
    {
      Icon: MapPin,
      title: "Main Location",
      lines: ["29 Soi Pachauthi 33 Junction 4 Pachauthi Rd, Bangmod Thungkru,", "Bangkok 10140, Thailand"],
      bg: "bg-blue-50",
    },
    {
      Icon: Phone,
      title: "24*7 service",
      lines: ["+66 (0) 2872 7199,", "police@policezebra.com"],
      bg: "bg-blue-100/60",
    },
    {
      Icon: Clock,
      title: "Business Hours",
      lines: ["Sat – Mon 10 am – 8 pm", "Fri Off – Day"],
      bg: "bg-slate-100/70",
    },
  ];

  const branches = [
    {
      name: "Germany",
    },
    {
      name: "Thailand",
    },
    {
      name: "Ghana",
    },
  ];

  return (
    <section className="px-6 lg:px-12 py-20">
      {/* CENTERED HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 fill-blue-700 text-blue-700" />
            <span className="text-blue-700 text-sm font-bold tracking-widest uppercase">
              Contact Info
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] tracking-tight text-blue-950 mb-2">
            Contact Join
          </h2>
          <h2 className="font-script text-5xl md:text-6xl lg:text-7xl leading-tight text-blue-700">
            Together
          </h2>
        </ScrollReveal>
      </div>

      {/* 3 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ Icon, title, lines, bg }, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={`${bg} rounded-3xl p-8 flex items-start gap-6 h-full`}>
              <div className="bg-blue-700 hover:bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-300 hover:animate-wiggle">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-blue-950 mb-3">
                  {title}
                </h3>
                {lines.map((line, idx) => (
                  <p key={idx} className="text-blue-950/60 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ============ OUR BRANCHES STRIP ============ */}
      <ScrollReveal delay={400}>
        <div className="mt-8 bg-blue-950 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          {/* Decorative background glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-700/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/30"></div>
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase">
                Our Branches
              </h3>
              <div className="w-8 h-px bg-white/30"></div>
            </div>

            {/* Branches grid — 6 branches in 3 columns × 2 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
              {branches.map((branch, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">
                      {branch.name}
                    </h4>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {branch.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactInfo;