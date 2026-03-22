import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ScrollFloat from "@/components/ScrollFloat";

export const CTASection = () => {
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
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <div className="glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} aria-hidden="true" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div
          className="rounded-2xl p-12 md:p-16 text-center space-y-8"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(16px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <span className="eyebrow block">READY TO FLY</span>

          <ScrollFloat
            containerClassName="mb-0"
            textClassName="text-4xl md:text-5xl font-bold"
          >
            Need a Pilot on Your Next Job?
          </ScrollFloat>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether it's a one-off mission or ongoing contract work, we plug into
            your operation and handle the flying. FAA-certified, regulation-ready,
            and equipped to run the full operation from planning to execution.
          </p>

          <div className="pt-2">
            <Link to="/contact" className="btn-primary group inline-flex">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
