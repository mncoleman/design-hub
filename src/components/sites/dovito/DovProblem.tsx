import { useEffect, useRef, useState } from "react";
import { C } from "@/components/showcase/C";

const problems = [
  { label: "Disconnected systems.", description: "Project data in one place, financials in another, field teams on paper." },
  { label: "Generic software.", description: "Tools built for everyone serve no one well." },
  { label: "Unmeasured outcomes.", description: "Technology spend without clear ROI." },
];

export const DovProblem = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-white">
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <C name="ProblemEyebrow" file="src/components/sites/dovito/DovProblem.tsx" prompt="Eyebrow label: text-xs font-medium, blue (#39a0ed) color, uppercase tracking-[0.15em], block display." inline={true}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">The Problem</span>
        </C>
        <C name="ProblemHeading" file="src/components/sites/dovito/DovProblem.tsx" prompt="Section h2 heading, text-3xl md:text-4xl, font-bold, navy color.">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-10">What Holds Businesses Back</h2>
        </C>

        <div className="space-y-6">
          {problems.map((p, i) => (
            <C
              key={p.label}
              name="ProblemCard"
              file="src/components/sites/dovito/DovProblem.tsx"
              prompt="Problem card row with left blue accent bar (w-1 h-12 rounded-full), bold label and muted description. Rounded-xl border with light gray bg, hover shadow and darker border."
            >
            <div
              className="flex items-start gap-4 p-6 rounded-xl border border-[#1a3a60]/[0.06] bg-[#f8f9fb] transition-all duration-500 hover:shadow-md hover:border-[#1a3a60]/[0.12]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <C name="ProblemAccentBar" file="src/components/sites/dovito/DovProblem.tsx" prompt="Vertical blue accent bar: w-1 h-12 rounded-full bg-[#39a0ed], flex-shrink-0.">
              <div className="w-1 h-12 rounded-full bg-[#39a0ed] flex-shrink-0 mt-1" />
              </C>
              <div>
                <span className="font-bold text-[#1a3a60]">{p.label}</span>{" "}
                <span className="text-[#1a3a60]/60">{p.description}</span>
              </div>
            </div>
            </C>
          ))}
        </div>

        <p className="mt-8 text-lg text-[#1a3a60]/70 font-medium">
          We fix the workflow, measure the gain, and scale what works.
        </p>
      </div>
    </section>
  );
};
