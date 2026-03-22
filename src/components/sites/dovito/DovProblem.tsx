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
    <section ref={ref} className="px-4 sm:px-6 py-16 md:py-24 bg-[#f8f9fb]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-12">
          <C name="ProblemEyebrow" file="src/components/sites/dovito/DovProblem.tsx" prompt="Centered eyebrow: text-xs font-medium, navy/40 color, uppercase tracking-[0.15em]." inline={true}>
          <span className="text-xs font-medium text-[#1a3a60]/40 uppercase tracking-[0.15em] block mb-4">The Problem</span>
          </C>
          <C name="ProblemHeading" file="src/components/sites/dovito/DovProblem.tsx" prompt="Section heading: text-3xl md:text-4xl lg:text-5xl, font-bold, navy color, centered.">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a3a60] mb-4">What Holds Businesses Back</h2>
          </C>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {problems.map((p, i) => (
            <C
              key={p.label}
              name="ProblemCard"
              file="src/components/sites/dovito/DovProblem.tsx"
              prompt="Problem card: rounded-2xl, white bg, border, p-6 md:p-8. Top blue accent bar (h-1 w-12 rounded-full). Bold label + muted description. Hover elevates with shadow."
            >
            <div
              className={`p-6 md:p-8 rounded-2xl bg-white border border-[#1a3a60]/[0.06] transition-all duration-500 hover:shadow-lg hover:border-[#1a3a60]/[0.12] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <C name="ProblemAccentBar" file="src/components/sites/dovito/DovProblem.tsx" prompt="Horizontal blue accent bar: h-1 w-12 rounded-full bg-[#39a0ed], mb-5.">
              <div className="h-1 w-12 rounded-full bg-[#39a0ed] mb-5" />
              </C>
              <h3 className="font-bold text-lg text-[#1a3a60] mb-2">{p.label}</h3>
              <p className="text-sm text-[#1a3a60]/50 leading-relaxed">{p.description}</p>
            </div>
            </C>
          ))}
        </div>

        <p className="text-center text-lg text-[#1a3a60]/60 font-medium max-w-2xl mx-auto">
          We fix the workflow, measure the gain, and scale what works.
        </p>
      </div>
    </section>
  );
};
