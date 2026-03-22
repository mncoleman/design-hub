import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";
import SplashCursor from "./SplashCursor";

export const DovHero = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => { clearTimeout(t); window.removeEventListener('resize', handleResize); };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0c1e3a]">
      {/* SplashCursor - desktop only, Dovito navy background */}
      {!isMobile && (
        <C name="SplashCursor" file="src/components/sites/dovito/SplashCursor.tsx" prompt="WebGL fluid simulation cursor effect on dark navy background. Renders a full-screen canvas with colorful fluid splashes following mouse movement. BACK_COLOR set to Dovito navy (r:0.047, g:0.118, b:0.227). Desktop only.">
          <SplashCursor
            BACK_COLOR={{ r: 0.047, g: 0.118, b: 0.227 }}
            SPLAT_RADIUS={0.15}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            CURL={3}
            activeAreaRef={heroRef as any}
          />
        </C>
      )}

      <div className={`relative z-10 container mx-auto px-6 text-center max-w-4xl transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <C name="HeroEyebrowBadge" file="src/components/sites/dovito/DovHero.tsx" prompt="Pill-shaped eyebrow badge on dark navy bg: rounded-full, white/10 background, white/60 text, uppercase text-xs tracking-[0.15em]." inline={true}>
        <span className="inline-block px-4 py-2 rounded-full bg-white/[0.1] text-white/60 text-xs font-medium tracking-[0.15em] uppercase mb-8">
          Operations Consulting & Systems Integration
        </span>
        </C>

        <C name="HeroHeading" file="src/components/sites/dovito/DovHero.tsx" prompt="Large hero h1 heading on dark navy bg, responsive sizing from text-5xl to text-8xl, font-bold, white color, tight leading and tracking.">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-6">
          Lead the pack.
        </h1>
        </C>

        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          The companies that run the tightest operations win the most work. We help construction companies get there with process improvement, systems integration, and measurable outcomes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <C name="HeroPrimaryButton" file="src/components/sites/dovito/DovHero.tsx" prompt="Primary CTA button on dark bg: cyan/bright blue bg (#39a0ed), white text, rounded-xl, px-7 py-3.5, font-semibold, arrow icon shifts right on hover." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#39a0ed] text-white font-semibold rounded-xl hover:bg-[#39a0ed]/90 transition-all group">
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          </C>
          <C name="HeroSecondaryButton" file="src/components/sites/dovito/DovHero.tsx" prompt="Secondary outline button on dark bg: border-2 white/20, white/70 text, rounded-xl, hover brightens border." inline={true}>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white/70 font-medium rounded-xl hover:border-white/40 hover:text-white transition-all">
            See How It Works
          </button>
          </C>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <C name="ScrollIndicator" file="src/components/sites/dovito/DovHero.tsx" prompt="Scroll indicator on dark bg: pill-shaped container (w-6 h-10) with white/20 border, small bouncing white/40 dot inside.">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </C>
      </div>
    </section>
  );
};
