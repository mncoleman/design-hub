import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";

export const DovHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f0f4f8] to-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#1a3a60 1px, transparent 1px), linear-gradient(90deg, #1a3a60 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Splash cursor canvas placeholder */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#39a0ed]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#1a3a60]/8 rounded-full blur-[100px]" />
      </div>

      <div className={`relative z-10 container mx-auto px-6 text-center max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <C name="HeroEyebrowBadge" file="src/components/sites/dovito/DovHero.tsx" prompt="Pill-shaped eyebrow badge with rounded-full, light navy/6 background, uppercase text-xs tracking-[0.15em], navy/60 color." inline={true}>
        <span className="inline-block px-4 py-2 rounded-full bg-[#1a3a60]/[0.06] text-[#1a3a60]/60 text-xs font-medium tracking-[0.15em] uppercase mb-8">
          Operations Consulting & Systems Integration
        </span>
        </C>

        <C name="HeroHeading" file="src/components/sites/dovito/DovHero.tsx" prompt="Large hero h1 heading, responsive sizing from text-5xl to text-8xl, font-bold, navy color, tight leading and tracking.">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#1a3a60] leading-[0.95] tracking-tight mb-6">
          Lead the pack.
        </h1>
        </C>

        <p className="text-lg md:text-xl text-[#1a3a60]/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          The companies that run the tightest operations win the most work. We help construction companies get there with process improvement, systems integration, and measurable outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <C name="HeroPrimaryButton" file="src/components/sites/dovito/DovHero.tsx" prompt="Primary CTA button with navy bg, white text, rounded-xl, px-7 py-3.5, font-semibold, arrow icon that shifts right on hover." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a60] text-white font-semibold rounded-xl hover:bg-[#1a3a60]/90 transition-all group">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </C>
          <C name="HeroSecondaryButton" file="src/components/sites/dovito/DovHero.tsx" prompt="Secondary outline button with border-2, navy/20 border, navy/70 text, rounded-xl, hover darkens border and text." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1a3a60]/20 text-[#1a3a60]/70 font-medium rounded-xl hover:border-[#1a3a60]/40 hover:text-[#1a3a60] transition-all">
            See How It Works
          </button>
          </C>
        </div>
      </div>

      {/* Scroll indicator */}
      <C name="ScrollIndicator" file="src/components/sites/dovito/DovHero.tsx" prompt="Scroll indicator at bottom center: pill-shaped border container (w-6 h-10) with a small bouncing dot inside. Navy/20 border, navy/30 dot.">
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#1a3a60]/20 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#1a3a60]/30 rounded-full animate-bounce" />
        </div>
      </div>
      </C>
    </section>
  );
};
