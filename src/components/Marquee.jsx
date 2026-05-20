import { Star } from "lucide-react";

const Marquee = () => {
  // The list of items to scroll
  const items = [ "Smooth Silk", "Fine Linen", "PureThread", "ComfortWool", "AeroLinen", "FlexWeave", "CozyBlend", "BSoftBreeze Knit", ];

  return (
    <div className="bg-slate-900 py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <div key={`a-${index}`} className="flex items-center gap-12 px-8">
            <span className="text-white font-bold text-base tracking-widest uppercase">
              {item}
            </span>
            <Star className="w-4 h-4 text-white/60" />
          </div>
        ))}

        {items.map((item, index) => (
          <div key={`b-${index}`} className="flex items-center gap-12 px-8">
            <span className="text-white font-bold text-base tracking-widest uppercase">
              {item}
            </span>
            <Star className="w-4 h-4 text-white/60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;