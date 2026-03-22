import { useEffect, useRef, useState } from "react";
import { Shield, Users, FileCheck, MessageSquare, Zap, Award } from "lucide-react";
import GlassCube from "@/components/ui/GlassCube";

const benefits = [
  {
    icon: Shield,
    title: "FAA Part 107 Certified",
    description: "LAANC authorizations, airspace waivers, and full regulatory compliance handled for you. Every flight is legal, documented, and insured.",
  },
  {
    icon: Users,
    title: "Seamless Team Integration",
    description: "We show up, learn your workflow, and operate like an extension of your crew. No ramp-up time, no friction.",
  },
  {
    icon: FileCheck,
    title: "Operational Precision",
    description: "Thorough flight planning, safety protocols, and mission execution you can count on. Every detail planned before wheels up.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Coordination and updates throughout every operation so you always know the status. No surprises, no guesswork.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Need a pilot on short notice? We mobilize quickly with equipment checks, flight plans, and authorizations handled fast.",
  },
  {
    icon: Award,
    title: "Your Data, Your Way",
    description: "All flight data, imagery, and deliverables are yours. We capture what you need in the formats your team uses.",
  },
];

export const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36">
      <div className="grain" aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-5xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-16">
          <span className="eyebrow block mb-4">WHY COMPANIES CHOOSE LEVOAIR</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built for your success. Designed for growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <GlassCube
                key={benefit.title}
                className="min-h-[220px]"
                wobbleAngle={(i / 6) * Math.PI * 2}
              >
                <div
                  className={`p-8 flex flex-col h-full min-h-[220px] transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{benefit.description}</p>
                </div>
              </GlassCube>
            );
          })}
        </div>
      </div>
    </section>
  );
};
