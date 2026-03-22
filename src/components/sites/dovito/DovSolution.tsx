import { useEffect, useRef, useState } from "react";
import { Search, Wrench, Puzzle } from "lucide-react";
import { C } from "@/components/showcase/C";

const solutions = [
  {
    number: "01",
    icon: Search,
    title: "Operational Assessment",
    description: "We map how work moves through your business. Every process, handoff, and bottleneck. Then we tell you exactly what to fix and in what order.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Process Improvement",
    description: "We fix the workflows, ownership gaps, and handoffs before touching any software. The process has to work first.",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Systems Integration",
    description: "Once the process works, we connect or build the tools to support it. Custom applications, API connections, and automation.",
  },
];

export const DovSolution = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#f8f9fb]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <C name="SolutionEyebrow" file="src/components/sites/dovito/DovSolution.tsx" prompt="Eyebrow label: text-xs font-medium, blue (#39a0ed) color, uppercase tracking-[0.15em], block display." inline={true}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">What We Do</span>
        </C>
        <C name="SolutionHeading" file="src/components/sites/dovito/DovSolution.tsx" prompt="Section h2 heading, text-3xl md:text-4xl, font-bold, navy color.">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-12">The Solution</h2>
        </C>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <C
                key={s.number}
                name="SolutionCard"
                file="src/components/sites/dovito/DovSolution.tsx"
                prompt="Solution card with number label, icon in rounded bg container, title, and description. White bg, rounded-2xl, border, shadow-sm, hover elevates with shadow-lg."
              >
              <div
                className={`p-8 rounded-2xl bg-white border border-[#1a3a60]/[0.06] shadow-sm hover:shadow-lg hover:border-[#1a3a60]/[0.12] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-xs font-mono text-[#39a0ed] block mb-4">{s.number}</span>
                <C name="SolutionIcon" file="src/components/sites/dovito/DovSolution.tsx" prompt="Icon container: p-3 rounded-xl with light navy/5 background, w-fit. Contains a lucide icon h-6 w-6 in navy/70.">
                <div className="p-3 rounded-xl bg-[#1a3a60]/[0.05] w-fit mb-5">
                  <Icon className="h-6 w-6 text-[#1a3a60]/70" />
                </div>
                </C>
                <h3 className="text-lg font-bold text-[#1a3a60] mb-3">{s.title}</h3>
                <p className="text-sm text-[#1a3a60]/55 leading-relaxed">{s.description}</p>
              </div>
              </C>
            );
          })}
        </div>
      </div>
    </section>
  );
};
