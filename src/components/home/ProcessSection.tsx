import { useEffect, useRef, useState } from "react";
import GlassCube from "@/components/ui/GlassCube";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We learn your operation, equipment, and objectives. Whether it's a one-day job or a long-term contract, we start by understanding what you need.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Full flight planning including airspace authorization, LAANC clearances, safety protocols, and mission parameters. Everything handled before we arrive.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Our certified pilot shows up, runs the operation, and delivers results. Clean handoff, clear communication, professional execution every time.",
  },
];

export const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36 border-y border-white/[0.06]">
      <div className="grain" aria-hidden="true" />
      <div className="glow" style={{ bottom: '-30%', right: '-10%' }} aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-20">
          <span className="eyebrow block mb-4">HOW IT WORKS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-white/40 max-w-xl mx-auto">
            A streamlined process for reliable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <GlassCube
              key={step.number}
              className="min-h-[240px]"
              wobbleAngle={(i / 3) * Math.PI * 2}
            >
              <div
                className={`p-8 flex flex-col h-full min-h-[240px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span className="text-sm font-mono text-primary/50 block mb-4">{step.number}</span>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
              </div>
            </GlassCube>
          ))}
        </div>
      </div>
    </section>
  );
};
