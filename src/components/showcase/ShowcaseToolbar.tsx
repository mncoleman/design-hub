import { useState } from "react";
import { ChevronDown, Eye, EyeOff, Layers } from "lucide-react";
import { useShowcase } from "./ShowcaseContext";

export const ShowcaseToolbar = () => {
  const { activeSite, setActiveSite, showComponents, setShowComponents, sites } = useShowcase();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentSite = sites.find(s => s.id === activeSite);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[#07070a]/95 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 h-11 flex items-center justify-between">
        {/* Left: Brand + Site Switcher */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary/70" />
            <span className="text-xs font-semibold text-white/70 tracking-wide uppercase hidden sm:inline">Design Hub</span>
          </div>

          <div className="h-4 w-px bg-white/[0.08]" />

          {/* Site Switcher */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.06] transition-all text-sm"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: currentSite?.color }} />
              <span className="text-white/70 text-xs font-medium">{currentSite?.name}</span>
              <ChevronDown className={`h-3 w-3 text-white/30 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-[#0c0c10] border border-white/[0.08] shadow-2xl shadow-black/50 z-20 overflow-hidden">
                  <div className="p-2">
                    {sites.map((site) => (
                      <button
                        key={site.id}
                        onClick={() => { setActiveSite(site.id); setDropdownOpen(false); }}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left ${
                          activeSite === site.id ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        <div className="w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: site.color }} />
                        <div>
                          <div className="text-xs font-medium text-white/80">{site.name}</div>
                          <div className="text-[10px] text-white/30 mt-0.5">{site.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="border-t border-white/[0.06] p-3">
                    <div className="text-[10px] text-white/20 text-center">More sites coming soon</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: View Components Toggle - prominent with shine animation */}
        <button
          onClick={() => setShowComponents(!showComponents)}
          className={`relative flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all overflow-hidden ${
            showComponents
              ? 'bg-primary/20 border border-primary/40 text-primary shadow-[0_0_15px_rgba(245,158,11,0.15)]'
              : 'bg-white/[0.06] border border-white/[0.1] text-white/70 hover:text-white hover:border-white/[0.2] showcase-shine'
          }`}
        >
          {/* Shine sweep animation when inactive */}
          {!showComponents && (
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute inset-0 animate-shine" style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)',
                backgroundSize: '200% 100%',
              }} />
            </div>
          )}
          {/* Pulse ring when active */}
          {showComponents && (
            <div className="absolute inset-0 rounded-lg animate-pulse-ring" style={{
              boxShadow: '0 0 0 0 rgba(245,158,11,0.4)',
            }} />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {showComponents ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
            <span>View Components</span>
          </span>
        </button>
      </div>
    </div>
  );
};
