import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Cubes from "@/components/Cubes";
import Squares from "@/components/Squares";
import { useIsMobile } from "@/hooks/use-mobile";
import { TextType } from "@/components/ui/TextType";
import { FallInText } from "@/components/ui/FallInText";
import { BlurText } from "@/components/ui/BlurText";

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

      {/* Radial vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,7,10,0.7) 100%)'
      }} />

      <div className="grain" aria-hidden="true" style={{ zIndex: 2 }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none max-w-4xl">
        <div className="space-y-6">

          {/* Typing badge */}
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              <TextType text="CONTRACT DRONE PILOTS" delay={200} speed={40} />
            </span>
          </div>

          {/* Headline with FallIn animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <FallInText text="Your Drones." delay={600} duration={900} />
            <br />
            <FallInText text="Our Pilots." delay={900} duration={900} />
          </h1>

          {/* Subheadline with BlurText fade-in */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            <BlurText text="FAA-certified contract pilots ready to fly your fleet and run your operations" delay={1200} duration={1000} />
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pointer-events-auto">
            <Link to="/contact" className="btn-primary group">
              Hire a Pilot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
