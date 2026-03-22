import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";

const phases = [
  {
    number: "1",
    title: "Discover",
    description: "We study how your business runs to build the foundation for continuous improvement.",
    color: "#39a0ed",
    features: ["Process mapping", "Bottleneck identification", "Data audit", "Stakeholder interviews"],
  },
  {
    number: "2",
    title: "Validate",
    description: "We test changes on a small scale in a controlled environment and prove the ROI before you commit.",
    color: "#1a3a60",
    features: ["Pilot programs", "A/B testing", "ROI measurement", "Risk mitigation"],
  },
  {
    number: "3",
    title: "Transform",
    description: "Positive, lasting change through process improvement, systems integration, and custom applications.",
    color: "#c47d20",
    features: ["Full rollout", "Team training", "Systems integration", "Ongoing support"],
  },
];

export const DovProcess = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#f8f9fb]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-16">
          <C name="ProcessEyebrow" file="src/components/sites/dovito/DovProcess.tsx" prompt="Centered eyebrow: text-xs font-medium, navy/40 color, uppercase tracking-[0.15em]." inline={true}>
          <span className="text-xs font-medium text-[#1a3a60]/40 uppercase tracking-[0.15em] block mb-4">The Process</span>
          </C>
          <C name="ProcessHeading" file="src/components/sites/dovito/DovProcess.tsx" prompt="Section heading: text-3xl md:text-4xl lg:text-5xl, font-bold, navy color, centered.">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a60] mb-4">How It Works</h2>
          </C>
          <p className="text-lg text-[#1a3a60]/50 max-w-2xl mx-auto">
            Three phases. Each one measured. The companies adopting this now are pulling ahead.
          </p>
        </div>

        {/* Workshop-style phase cards */}
        <div className="space-y-6">
          {phases.map((phase, i) => (
            <C
              key={phase.number}
              name="ProcessPhaseCard"
              file="src/components/sites/dovito/DovProcess.tsx"
              prompt="Process phase card (workshops style): rounded-2xl with subtle border, two-column layout on desktop. Left has large phase number + circle + title. Right has description + feature bullets in 2-col grid + CTA button."
            >
            <div
              className={`rounded-2xl border border-[#1a3a60]/[0.06] bg-white overflow-hidden transition-all duration-500 hover:shadow-lg ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left: Number + visual */}
                <div className="md:w-1/3 p-8 md:p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#1a3a60]/[0.06]">
                  <C name="ProcessPhaseCircle" file="src/components/sites/dovito/DovProcess.tsx" prompt="Phase number circle: w-20 h-20 rounded-full, border-2 in phase color, centered bold number text-2xl. White bg.">
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center mb-4"
                    style={{ borderColor: phase.color }}
                  >
                    <span className="text-2xl font-bold" style={{ color: phase.color }}>{phase.number}</span>
                  </div>
                  </C>
                  <h3 className="text-xl font-bold text-[#1a3a60]">{phase.title}</h3>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 p-8 md:p-10">
                  <p className="text-[#1a3a60]/55 leading-relaxed mb-6">{phase.description}</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6">
                    {phase.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-[#1a3a60]/60">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: phase.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </C>
          ))}
        </div>

        <div className="text-center mt-12">
          <C name="ProcessCTAButton" file="src/components/sites/dovito/DovProcess.tsx" prompt="Navy primary button, px-7 py-3.5, rounded-xl, font-semibold, white text, arrow icon." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a60] text-white font-semibold rounded-xl hover:bg-[#1a3a60]/90 transition-colors group">
            See Our Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </C>
        </div>
      </div>
    </section>
  );
};
