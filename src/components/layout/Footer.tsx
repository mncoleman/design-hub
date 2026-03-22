import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { C } from "@/components/showcase/C";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const currentRef = logoRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  return (
    <footer className="border-t border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <C name="FooterLogo" file="src/components/layout/Footer.tsx" prompt="Footer logo placeholder with gradient icon (from-primary/30 to-primary/10), border-primary/20, centered initials, and label text.">
              <Link to="/" className="inline-flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">YL</span>
                </div>
                <span className="text-sm font-semibold text-white/70">Your Logo</span>
              </Link>
            </C>
            <p className="text-sm text-muted-foreground">
              Your company tagline goes here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">hello@yourcompany.com</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-white/20">Privacy Policy</span>
            <span className="text-white/20">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Large logo text with cursor spotlight reveal */}
      <C name="SpotlightLogoReveal" file="src/components/layout/Footer.tsx" prompt="Large text 'YOUR LOGO' at low opacity (0.03) that reveals at higher opacity (0.15) via a radial gradient mask that follows the mouse cursor. Uses maskImage/WebkitMaskImage with radial-gradient circle. Fades in on scroll via IntersectionObserver.">
        <div className="w-full overflow-hidden pt-8 pb-6 px-4 md:px-8">
          <div
            ref={logoRef}
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div
              ref={logoContainerRef}
              className="relative max-w-[1400px] mx-auto flex items-center justify-center py-12"
              onMouseMove={(e) => {
                const rect = logoContainerRef.current?.getBoundingClientRect();
                if (!rect) return;
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="text-[6rem] md:text-[10rem] font-bold text-white/[0.03] select-none leading-none tracking-tight">
                YOUR LOGO
              </span>
              <span
                className="absolute text-[6rem] md:text-[10rem] font-bold text-white/[0.15] select-none leading-none tracking-tight transition-opacity duration-300"
                style={{
                  opacity: isHovering ? 1 : 0,
                  maskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
                  WebkitMaskImage: `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 100%)`,
                }}
              >
                YOUR LOGO
              </span>
            </div>
          </div>
        </div>
      </C>
    </footer>
  );
};
