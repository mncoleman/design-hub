import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Missions Flown", value: "200+", sub: "" },
  { label: "Client Satisfaction", value: "100%", sub: "" },
  { label: "Years Experience", value: "5+", sub: "" },
];

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 border-y border-white/[0.06]">
      <div className="grain" aria-hidden="true" />
      <div ref={ref} className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="eyebrow mb-3">{stat.label}</div>
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
