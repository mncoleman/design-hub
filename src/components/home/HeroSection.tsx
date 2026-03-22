import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Cubes from "@/components/Cubes";
import Squares from "@/components/Squares";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextType } from "@/components/ui/TextType";
import { FallInText } from "@/components/ui/FallInText";
import { BlurText } from "@/components/ui/BlurText";
import { C } from "@/components/showcase/C";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Cubes background - desktop, Squares - mobile */}
      <C
        name="HeroBackground"
        file="src/components/home/HeroSection.tsx"
        prompt="Full-bleed animated background layer: on desktop render a 10x10 Cubes grid with dashed white borders and dark translucent faces that auto-animates; on mobile render diagonal Squares with subtle white borders. Absolutely positioned to fill the section at z-0."
      >
        <div className="absolute inset-0 z-0">
          {isMobile ? (
            <Squares
              speed={0.1}
              squareSize={50}
              direction='diagonal'
              borderColor='rgba(255,255,255,0.06)'
              hoverFillColor='rgba(255,255,255,0.02)'
            />
          ) : (
            <Cubes
              gridSize={10}
              maxAngle={15}
              radius={5}
              borderStyle={'2px dashed rgba(255,255,255,0.15)'}
              faceColor={'rgba(7, 7, 10, 0.8)'}
              autoAnimate={true}
              rippleOnClick={false}
            />
          )}
        </div>
      </C>

      {/* Radial vignette */}
      <C
        name="RadialVignette"
        file="src/components/home/HeroSection.tsx"
        prompt="Overlay div with a radial-gradient vignette: transparent at center (40%), fading to rgba(7,7,10,0.7) at edges. Absolutely positioned, z-1, pointer-events-none."
      >
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,7,10,0.7) 100%)'
        }} />
      </C>

      <C
        name="GrainTexture"
        file="src/components/home/HeroSection.tsx"
        prompt="Film grain texture overlay using the .grain CSS class. Absolutely positioned at z-2, aria-hidden for accessibility."
      >
        <div className="grain" aria-hidden="true" style={{ zIndex: 2 }} />
      </C>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none max-w-4xl">
        <div className="space-y-6">

          {/* Typing badge */}
          <div className="inline-block">
            <C
              name="TypingBadge"
              file="src/components/ui/TextType.tsx"
              prompt="Rounded pill badge with primary/10 background, primary/20 border, and primary text. Uses TextType component to type out 'CONTRACT DRONE PILOTS' letter-by-letter with 200ms delay and 40ms per character speed. Uppercase, extra-wide letter-spacing, xs font size, semibold."
              inline={true}
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                <TextType text="CONTRACT DRONE PILOTS" delay={200} speed={40} />
              </span>
            </C>
          </div>

          {/* Headline with FallIn animation */}
          <C
            name="HeroHeadline"
            file="src/components/ui/FallInText.tsx"
            prompt="Two-line h1 headline using FallInText animation. First line 'Your Drones.' starts at 600ms, second line 'Our Pilots.' at 900ms, both with 900ms duration. Text is 5xl on mobile, 7xl on tablet, 8xl on desktop, bold weight, tight leading."
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <FallInText text="Your Drones." delay={600} duration={900} />
              <br />
              <FallInText text="Our Pilots." delay={900} duration={900} />
            </h1>
          </C>

          {/* Subheadline with BlurText fade-in */}
          <C
            name="HeroSubheadline"
            file="src/components/ui/BlurText.tsx"
            prompt="Subheadline paragraph using BlurText blur-to-sharp fade-in animation. Text: 'FAA-certified contract pilots ready to fly your fleet and run your operations'. Muted foreground color, xl on mobile / 2xl on tablet+, max-w-2xl centered. 1200ms delay, 1000ms duration."
          >
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              <BlurText text="FAA-certified contract pilots ready to fly your fleet and run your operations" delay={1200} duration={1000} />
            </p>
          </C>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pointer-events-auto">
            <C
              name="HirePilotCTA"
              file="src/components/home/HeroSection.tsx"
              prompt="Primary CTA button styled with .btn-primary class, linking to /contact. Text 'Hire a Pilot' with an ArrowRight icon that translates right on hover. Uses React Router Link component."
              inline={true}
            >
              <Link to="/contact" className="btn-primary group">
                Hire a Pilot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </C>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <C
          name="ScrollIndicator"
          file="src/components/home/HeroSection.tsx"
          prompt="Scroll-down indicator: A 6x10 rounded-full container with primary/30 border, containing a small 1x2 rounded dot in primary color that bounces infinitely via animate-bounce. Absolutely positioned at bottom center of hero."
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </C>
      </div>
    </section>
  );
};
