import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";

export const DovCTA = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#1a3a60]">
      <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <C name="CTAHeading" file="src/components/sites/dovito/DovCTA.tsx" prompt="CTA section h2 heading on dark navy bg, text-3xl md:text-4xl, font-bold, white text.">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start a Conversation?</h2>
        </C>
        <p className="text-lg text-white/60 mb-10 leading-relaxed">
          Tell us about your business and what you're looking to accomplish. We review every application.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <C name="CTAPrimaryButton" file="src/components/sites/dovito/DovCTA.tsx" prompt="Primary CTA button on dark bg: white bg, navy text, px-7 py-3.5, rounded-xl, font-semibold, arrow icon shifts right on hover." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1a3a60] font-semibold rounded-xl hover:bg-white/90 transition-all group">
            Apply Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </C>
          <C name="CTASecondaryButton" file="src/components/sites/dovito/DovCTA.tsx" prompt="Secondary outline button on dark bg: border-2 white/20, white/80 text, rounded-xl, hover brightens border." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white/80 font-medium rounded-xl hover:border-white/40 transition-all">
            View Services
          </button>
          </C>
        </div>

        <p className="text-sm text-white/40">
          Questions? Email us: <span className="text-white/60">hello@yourcompany.com</span>
        </p>
      </div>
    </section>
  );
};
