import { useEffect, useRef, useState } from "react";
import { C } from "@/components/showcase/C";

const stats = [
  { value: "16x", label: "average ROI on our engagements" },
  { value: "80+", label: "hours recovered monthly for clients" },
  { value: "98%", label: "team adoption rate on systems we build" },
  { value: "3", label: "phase methodology, measured at every step" },
];

export const DovStats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-16 md:py-20 bg-white">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-[#1a3a60]/[0.06]">
          {stats.map((stat, i) => (
            <C
              key={stat.value}
              name="StatItem"
              file="src/components/sites/dovito/DovStats.tsx"
              prompt="Stat display: large bold number (text-4xl md:text-5xl) in navy color, with smaller muted description text below. Items separated by vertical dividers on desktop."
            >
            <div
              className={`text-center px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-[#1a3a60] tracking-tight mb-2">{stat.value}</div>
              <p className="text-sm text-[#1a3a60]/45 leading-relaxed">{stat.label}</p>
            </div>
            </C>
          ))}
        </div>
      </div>
    </section>
  );
};
