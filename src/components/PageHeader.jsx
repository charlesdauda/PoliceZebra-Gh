import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const PageHeader = ({ title, breadcrumb, backgroundImage }) => {
  return (
    <div className="relative h-72 lg:h-96 flex items-center px-6 lg:px-12 overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-blue-950/80" />
      <div className="relative w-full flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 animate-fade-up">
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white">
          {title}
        </h1>
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm font-bold tracking-wider uppercase">
            {breadcrumb.map((item, i) => {
              const isLast = i === breadcrumb.length - 1;

              return (
                <div key={i} className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-white">{item.name}</span>
                  ) : (
                    <>
                      <Link
                        to={item.path}
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

export default PageHeader;