import { useState, useEffect, useRef } from "react";

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      style={{ animationDelay: `${delay}ms` }}
      className={isVisible ? "animate-fade-up" : "opacity-0"}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;