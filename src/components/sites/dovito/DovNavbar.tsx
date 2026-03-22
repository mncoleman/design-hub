import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "START HERE" },
  { label: "LEARN" },
  { label: "SERVICES" },
  { label: "WORKSHOPS" },
];

export const DovNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-11 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? '' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className={`relative flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-500 ${
          scrolled ? 'bg-transparent' : 'bg-white/80 backdrop-blur-xl border border-[#1a3a60]/[0.08] shadow-sm'
        }`}>
          {/* Logo */}
          <div className={`flex items-center gap-2 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl px-4 py-2 rounded-xl border border-[#1a3a60]/[0.06] shadow-sm' : ''}`}>
            <div className="w-8 h-8 rounded-lg bg-[#1a3a60] flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">YL</span>
            </div>
            <span className="text-sm font-semibold text-[#1a3a60]">Your Logo</span>
          </div>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-6 transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            {navLinks.map((link) => (
              <button key={link.label} className="text-xs font-medium text-[#1a3a60]/70 hover:text-[#1a3a60] transition-colors tracking-wide">
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className={`hidden md:block transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl px-2 py-1.5 rounded-xl border border-[#1a3a60]/[0.06] shadow-sm' : ''}`}>
            <button className="px-5 py-2 bg-[#1a3a60] text-white text-xs font-semibold rounded-lg hover:bg-[#1a3a60]/90 transition-colors">
              Apply
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-[#1a3a60]">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[7.75rem] bg-white/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <button key={link.label} className="text-lg font-medium text-[#1a3a60]/70" onClick={() => setMobileOpen(false)}>
              {link.label}
            </button>
          ))}
          <button className="px-6 py-3 bg-[#1a3a60] text-white font-semibold rounded-lg">Apply</button>
        </div>
      )}
    </nav>
  );
};
