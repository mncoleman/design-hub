import { useEffect, useRef, useState } from "react";
import { Search, Wrench, Puzzle, ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";

const solutions = [
  {
    number: "01",
    icon: Search,
    title: "Operational Assessment",
    description: "We map how work moves through your business. Every process, handoff, and bottleneck. Then we tell you exactly what to fix and in what order.",
    features: ["Full process audit", "Technology review", "Prioritized action plan", "ROI projections"],
  },
  {
    number: "02",
    icon: Wrench,
    title: "Process Improvement",
    description: "We fix the workflows, ownership gaps, and handoffs before touching any software. The process has to work first.",
    features: ["Workflow redesign", "Ownership mapping", "SOP development", "Team training"],
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Systems Integration",
    description: "Once the process works, we connect or build the tools to support it. Custom applications, API connections, and automation.",
    features: ["Custom applications", "API integrations", "Automation setup", "Data migration"],
  },
];

export const DovSolution = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-white">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-16">
          <C name="SolutionEyebrow" file="src/components/sites/dovito/DovSolution.tsx" prompt="Centered eyebrow: text-xs font-medium, navy/40 color, uppercase tracking-[0.15em]." inline={true}>
          <span className="text-xs font-medium text-[#1a3a60]/40 uppercase tracking-[0.15em] block mb-4">What We Do</span>
          </C>
          <C name="SolutionHeading" file="src/components/sites/dovito/DovSolution.tsx" prompt="Section heading: text-3xl md:text-4xl lg:text-5xl, font-bold, navy color, centered.">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a60] mb-4">The Solution</h2>
          </C>
          <p className="text-lg text-[#1a3a60]/50 max-w-2xl mx-auto">
            Three phases. Measurable outcomes. Systems your team adopts.
          </p>
        </div>

        {/* Workshop-style alternating cards */}
        <div className="space-y-8">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const isReversed = i % 2 === 1;
            return (
              <C
                key={s.number}
                name="SolutionCard"
                file="src/components/sites/dovito/DovSolution.tsx"
                prompt="Alternating two-column service card (workshops page style): rounded-2xl with subtle border and shadow. One side has icon + number + title + description + bullet features in 2-column grid + outline CTA button. Layout reverses on odd items."
              >
              <div
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-2xl border border-[#1a3a60]/[0.06] overflow-hidden transition-all duration-500 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Visual side */}
                <div className={`md:w-2/5 p-10 flex items-center justify-center ${i === 0 ? 'bg-[#f0f4f8]' : i === 1 ? 'bg-[#1a3a60]' : 'bg-[#f8f9fb]'}`}>
                  <div className="text-center">
                    <span className={`text-6xl font-bold ${i === 1 ? 'text-white/10' : 'text-[#1a3a60]/[0.06]'} block mb-4`}>{s.number}</span>
                    <div className={`p-4 rounded-2xl ${i === 1 ? 'bg-white/10' : 'bg-[#1a3a60]/[0.05]'} w-fit mx-auto`}>
                      <Icon className={`h-10 w-10 ${i === 1 ? 'text-white/60' : 'text-[#1a3a60]/40'}`} />
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-white">
                  <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-2">SERVICE {s.number}</span>
                  <h3 className="text-2xl font-bold text-[#1a3a60] mb-3">{s.title}</h3>
                  <p className="text-[#1a3a60]/55 leading-relaxed mb-6">{s.description}</p>

                  {/* Feature bullets in 2-column grid */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-[#1a3a60]/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39a0ed]" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <C name="ServiceCTAButton" file="src/components/sites/dovito/DovSolution.tsx" prompt="Outline CTA button: border-2 navy/20, navy/70 text, rounded-xl, px-6 py-2.5, font-medium, arrow icon. Hover darkens." inline={true}>
                  <button className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#1a3a60]/20 text-[#1a3a60]/70 font-medium rounded-xl text-sm hover:border-[#1a3a60]/40 transition-all w-fit group">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  </C>
                </div>
              </div>
              </C>
            );
          })}
        </div>
      </div>
    </section>
  );
};
