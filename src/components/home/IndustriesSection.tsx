import { useEffect, useRef, useState } from "react";
import { C } from "@/components/showcase/C";

const industries = [
  "Construction", "Real Estate", "Agriculture", "Energy", "Telecom",
  "Insurance", "Mining", "Government", "Environmental", "Film & Media",
  "Surveying", "Emergency Response"
];

export const IndustriesSection = () => {
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

  const doubled = [...industries, ...industries, ...industries];

  return (
    <section ref={ref} className="relative py-28 md:py-36 border-y border-white/[0.06] overflow-hidden">
      <div className="grain" aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-5xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center">
          <span className="eyebrow block mb-4">Enterprise-Ready</span>
          <C name="IndustriesSectionHeading" file="src/components/home/IndustriesSection.tsx" prompt="Large stacked heading with three lines: 'Reliable.' in full white, 'Scalable.' in white/80, 'Certified.' in full white; text-4xl scaling to text-6xl on lg, bold weight, centered">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              <span className="block">Reliable.</span>
              <span className="block text-white/80">Scalable.</span>
              <span className="block">Certified.</span>
            </h2>
          </C>
        </div>
      </div>

      {/* Features grid */}
      <div className={`container mx-auto px-6 max-w-5xl mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <C name="FeatureCardFAACompliance" file="src/components/home/IndustriesSection.tsx" prompt="Dark glass-morphism card (zera-card class) with p-8 padding containing a bold white h3 title and sm-size white/40 paragraph description; used in a 2-col grid">
            <div className="zera-card p-8">
              <h3 className="font-bold text-white mb-2">FAA Compliance</h3>
              <p className="text-sm text-white/40">Part 107 certified with airspace authorizations, waivers, and full documentation on every flight.</p>
            </div>
          </C>
          <C name="FeatureCardInsuredOps" file="src/components/home/IndustriesSection.tsx" prompt="Dark glass-morphism card (zera-card class) with p-8 padding containing a bold white h3 title and sm-size white/40 paragraph description; used in a 2-col grid">
            <div className="zera-card p-8">
              <h3 className="font-bold text-white mb-2">Insured Operations</h3>
              <p className="text-sm text-white/40">Fully insured with comprehensive liability coverage. Certificate of insurance available on request.</p>
            </div>
          </C>
          <C name="FeatureCardSafetyProtocols" file="src/components/home/IndustriesSection.tsx" prompt="Dark glass-morphism card (zera-card class) with p-8 padding containing a bold white h3 title and sm-size white/40 paragraph description; used in a 2-col grid">
            <div className="zera-card p-8">
              <h3 className="font-bold text-white mb-2">Safety Protocols</h3>
              <p className="text-sm text-white/40">Pre-flight checklists, risk assessments, and emergency procedures for every mission. Safety is non-negotiable.</p>
            </div>
          </C>
          <C name="FeatureCardDeliverables" file="src/components/home/IndustriesSection.tsx" prompt="Dark glass-morphism card (zera-card class) with p-8 padding containing a bold white h3 title and sm-size white/40 paragraph description; used in a 2-col grid">
            <div className="zera-card p-8">
              <h3 className="font-bold text-white mb-2">Professional Deliverables</h3>
              <p className="text-sm text-white/40">Organized data handoff in your preferred format. Orthomosaics, point clouds, inspection reports, and more.</p>
            </div>
          </C>
        </div>
      </div>

      {/* Industry marquee */}
      <C name="IndustryMarquee" file="src/components/home/IndustriesSection.tsx" prompt="Infinite horizontal marquee of industry tag pills scrolling left using CSS animate-marquee-slow; edge fade gradients on left and right sides using absolute positioned divs with gradient backgrounds; tags are tripled for seamless loop">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07070a] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07070a] to-transparent z-10" />

          <div className="text-center mb-6">
            <span className="eyebrow">Trusted across industries</span>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-3 animate-marquee-slow">
              {doubled.map((ind, i) => (
                <span key={`${ind}-${i}`} className="industry-tag">{ind}</span>
              ))}
            </div>
          </div>
        </div>
      </C>
    </section>
  );
};
