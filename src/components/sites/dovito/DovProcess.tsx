import { useEffect, useRef, useState } from "react";
import { C } from "@/components/showcase/C";

const phases = [
  {
    number: "1",
    title: "Discover",
    description: "We study how your business runs to build the foundation for continuous improvement.",
    color: "#39a0ed",
  },
  {
    number: "2",
    title: "Validate",
    description: "We test changes on a small scale in a controlled environment and prove the ROI before you commit.",
    color: "#1a3a60",
  },
  {
    number: "3",
    title: "Transform",
    description: "Positive, lasting change through process improvement, systems integration, and custom applications.",
    color: "#c47d20",
  },
];

export const DovProcess = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-white">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <C name="ProcessEyebrow" file="src/components/sites/dovito/DovProcess.tsx" prompt="Eyebrow label: text-xs font-medium, blue (#39a0ed) color, uppercase tracking-[0.15em], block display." inline={true}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">The Process</span>
        </C>
        <C name="ProcessHeading" file="src/components/sites/dovito/DovProcess.tsx" prompt="Section h2 heading, text-3xl md:text-4xl, font-bold, navy color.">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-16">How It Works</h2>
        </C>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-[#1a3a60]/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, i) => (
              <C
                key={phase.number}
                name="ProcessPhaseCard"
                file="src/components/sites/dovito/DovProcess.tsx"
                prompt="Process phase card: centered layout with numbered circle (w-16 h-16, border-2, dynamic color), phase title, and description text."
              >
              <div
                className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Circle */}
                <C name="ProcessPhaseCircle" file="src/components/sites/dovito/DovProcess.tsx" prompt="Numbered circle: w-16 h-16 rounded-full with colored border-2, centered number in matching color, white bg, z-10.">
                <div className="relative mx-auto mb-6">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto bg-white relative z-10"
                    style={{ borderColor: phase.color }}
                  >
                    <span className="text-lg font-bold" style={{ color: phase.color }}>{phase.number}</span>
                  </div>
                </div>
                </C>

                <h3 className="text-xl font-bold text-[#1a3a60] mb-3">{phase.title}</h3>
                <p className="text-sm text-[#1a3a60]/55 leading-relaxed max-w-xs mx-auto">{phase.description}</p>
              </div>
              </C>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <C name="ProcessCTAButton" file="src/components/sites/dovito/DovProcess.tsx" prompt="Navy primary button 'See Our Services', px-6 py-3, rounded-xl, text-sm font-semibold, white text, hover darkens." inline={true}>
          <button className="px-6 py-3 bg-[#1a3a60] text-white font-semibold rounded-xl text-sm hover:bg-[#1a3a60]/90 transition-colors">
            See Our Services
          </button>
          </C>
        </div>
      </div>
    </section>
  );
};
