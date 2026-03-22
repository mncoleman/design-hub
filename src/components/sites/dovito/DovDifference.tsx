import { useEffect, useRef, useState } from "react";
import { Target, BarChart3 } from "lucide-react";
import { C } from "@/components/showcase/C";

const differences = [
  {
    icon: Target,
    title: "Industry Focus",
    description: "We specialize in construction and trades because we understand the workflows, pain points, and software landscape that matter to your business.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description: "Every deliverable is tied to key metrics. We define success before we start, then we deliver it.",
  },
];

export const DovDifference = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#f8f9fb]">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <C name="DifferenceEyebrow" file="src/components/sites/dovito/DovDifference.tsx" prompt="Eyebrow label: text-xs font-medium, blue (#39a0ed) color, uppercase tracking-[0.15em], block display." inline={true}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">Why Us</span>
        </C>
        <C name="DifferenceHeading" file="src/components/sites/dovito/DovDifference.tsx" prompt="Section h2 heading, text-3xl md:text-4xl, font-bold, navy color.">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-12">The Difference</h2>
        </C>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differences.map((d, i) => {
            const Icon = d.icon;
            return (
              <C
                key={d.title}
                name="DifferenceCard"
                file="src/components/sites/dovito/DovDifference.tsx"
                prompt="Difference card with left navy border-l-4, white bg, rounded-2xl, shadow-sm. Contains icon in light bg container, bold title, and muted description."
              >
              <div
                className={`p-8 rounded-2xl bg-white border-l-4 border-[#1a3a60] shadow-sm transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <C name="DifferenceIcon" file="src/components/sites/dovito/DovDifference.tsx" prompt="Icon container: p-3 rounded-xl with light navy/5 background, w-fit. Contains a lucide icon h-6 w-6 in navy.">
                <div className="p-3 rounded-xl bg-[#1a3a60]/[0.05] w-fit mb-5">
                  <Icon className="h-6 w-6 text-[#1a3a60]" />
                </div>
                </C>
                <h3 className="text-lg font-bold text-[#1a3a60] mb-3">{d.title}</h3>
                <p className="text-sm text-[#1a3a60]/55 leading-relaxed">{d.description}</p>
              </div>
              </C>
            );
          })}
        </div>
      </div>
    </section>
  );
};
