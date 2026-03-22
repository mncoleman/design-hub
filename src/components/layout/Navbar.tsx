import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { StaggeredMenu } from "@/components/ui/StaggeredMenu";
import type { StaggeredMenuItem } from "@/components/ui/StaggeredMenu";
import { C } from "@/components/showcase/C";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const staggeredMenuItems: StaggeredMenuItem[] = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) { setIsScrolled(false); return; }

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const shouldAnimate = isScrolled && !isMobile;

  return (
    <header className="fixed top-11 left-0 right-0 z-50 h-24 flex justify-center items-start">
      <div className={`relative top-4 w-[calc(100%-1.5rem)] max-w-7xl mx-auto transition-all duration-300 ease-in-out ${
        shouldAnimate ? 'h-12' : 'h-16'
      }`}>
        {/* Glassmorphism pill background */}
        <C name="NavbarPill" file="src/components/layout/Navbar.tsx" prompt="Add a glassmorphism navbar pill: bg-background/50 backdrop-blur-lg, border border-white/[0.06], shadow-lg, rounded-lg. Fades out on scroll down (opacity-0), fades in on scroll up.">
          <div className={`absolute inset-0 bg-background/50 backdrop-blur-lg border border-white/[0.06] shadow-lg rounded-lg transition-opacity duration-300 ease-in-out ${
            shouldAnimate ? 'opacity-0' : 'opacity-100'
          }`} />
        </C>

        <div className="relative flex items-center justify-between h-full px-4">
          {/* Logo placeholder */}
          <C name="LogoPlaceholder" file="src/components/layout/Navbar.tsx" prompt="Add a logo placeholder: rounded-lg div with gradient bg from-primary/30 to-primary/10, border-primary/20, centered initials text, and 'Your Logo' label next to it.">
            <Link to="/" className="flex items-center space-x-2 z-10">
              <div className={`transition-all duration-300 flex items-center gap-2 ${shouldAnimate ? 'h-7' : 'h-8'}`}>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-primary">YL</span>
                </div>
                <span className="text-sm font-semibold text-white/70 hidden sm:inline">Your Logo</span>
              </div>
            </Link>
          </C>

          {/* Desktop Navigation Links */}
          <C name="NavLinks" file="src/components/layout/Navbar.tsx" prompt="Add centered uppercase nav links: absolute left-1/2 -translate-x-1/2, flex with space-x-8, text-sm font-medium, hover:text-primary. Fades out on scroll (opacity-0 + pointer-events-none).">
            <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8 transition-opacity duration-300 ease-in-out ${
              shouldAnimate ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </C>

          {/* CTA Button */}
          <C name="GoldGradientCTA" file="src/components/layout/Navbar.tsx" prompt="Add a gold gradient CTA button: gradient-primary class (linear-gradient 135deg through gold hues), font-semibold text-sm, px-5 py-2.5, rounded-lg. Dark text on gold background.">
            <div className="flex items-center space-x-2 z-10">
              <div className="hidden md:block">
                <Link to="/contact" className="gradient-primary font-semibold text-sm whitespace-nowrap px-5 py-2.5 rounded-lg inline-flex items-center">
                  Get Started
                </Link>
              </div>
            </div>
          </C>
        </div>
      </div>

      {/* Mobile Staggered Menu */}
      <C name="StaggeredMobileMenu" file="src/components/ui/StaggeredMenu.tsx" prompt="Add a staggered mobile menu: fixed to top-right, animated menu items that stagger in from the right with numbered items, custom accent color, hamburger toggle button.">
        <div className="md:hidden fixed top-11 right-0 w-screen h-screen pointer-events-none z-[60]">
          <StaggeredMenu
            position="right"
            items={staggeredMenuItems}
            displaySocials={false}
            displayItemNumbering={true}
            menuButtonColor="hsl(40, 10%, 96%)"
            openMenuButtonColor="hsl(40, 10%, 96%)"
            changeMenuColorOnOpen={false}
            colors={['hsl(0, 0%, 8%)', 'hsl(0, 0%, 12%)']}
            logoUrl=""
            accentColor="hsl(38, 90%, 50%)"
            isFixed={false}
          />
        </div>
      </C>
    </header>
  );
};
