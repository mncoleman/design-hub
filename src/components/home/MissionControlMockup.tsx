import { useEffect, useRef, useState } from "react";
import { FigmaCursors } from "./FigmaCursors";
import { C } from "@/components/showcase/C";

type View = "map" | "telemetry" | "weather";

export const MissionControlMockup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeView, setActiveView] = useState<View>("map");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden border-t border-white/[0.06]">
      <div className="grain" aria-hidden="true" />
      <div className="grid-pattern" aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-6xl relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <span className="eyebrow block">Mission Control</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Command every{" "}
              mission from one screen
            </h2>
            <p className="text-lg text-white/40 leading-relaxed">
              Live telemetry, flight paths, weather overlays, and team coordination. Mission Control gives you and your team full situational awareness.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["Live Telemetry", "Weather Overlay", "Flight Path", "Team Comms"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs text-white/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mission Control mockup */}
          <div className="relative">
            <FigmaCursors name="You" color="#3B82F6" />

            <C name="MissionControlBrowserFrame" file="src/components/home/MissionControlMockup.tsx" prompt="Browser chrome frame with rounded-xl, dark bg (#0c0c10), white/0.08 border, deep black shadow; macOS traffic lights in title bar, centered monospace URL bar showing 'app.levoair.com/mission-control'; contains tabbed views and content area">
              <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c10] shadow-2xl shadow-black/50">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0a0a0e]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,95,87,0.5)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(255,189,46,0.4)]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(39,201,63,0.4)]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-white/[0.04] text-[11px] text-white/30 font-mono">
                      app.levoair.com/mission-control
                    </div>
                  </div>
                </div>

                {/* View tabs */}
                <C name="MissionControlTabButtons" file="src/components/home/MissionControlMockup.tsx" prompt="Horizontal tab bar with three equal-width buttons (Map View, Telemetry, Weather); active tab has white text, amber bottom border, and subtle bg; inactive tabs are dimmed; separated from content by a thin white/0.06 border">
                  <div className="flex gap-0 border-b border-white/[0.06]">
                    {([
                      { key: "map" as View, label: "Map View" },
                      { key: "telemetry" as View, label: "Telemetry" },
                      { key: "weather" as View, label: "Weather" },
                    ]).map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveView(tab.key)}
                        className={`flex-1 px-4 py-2.5 text-[11px] font-medium transition-all ${
                          activeView === tab.key
                            ? 'text-white/80 border-b-2 border-amber-400/50 bg-white/[0.02]'
                            : 'text-white/25 hover:text-white/40'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </C>

                <div className="p-5 space-y-4">
                  {/* Map View */}
                  {activeView === "map" && (
                    <div className="space-y-4 transition-all duration-300">
                      <C name="MissionControlMapSVG" file="src/components/home/MissionControlMockup.tsx" prompt="Dark map container (bg #0a0e14) with blue grid overlay at 10% opacity; contains an SVG flight path with three amber waypoint dots connected by a dashed curve, center waypoint has animated pulsing ring; zone label badge top-left and altitude readout bottom-right in monospace">
                        <div className="relative h-48 rounded-lg bg-[#0a0e14] border border-white/[0.06] overflow-hidden">
                          <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                          }} />
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                            <path d="M 60 140 Q 120 40 200 80 Q 280 120 340 60" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="2" strokeDasharray="6,4" />
                            <circle cx="60" cy="140" r="4" fill="rgba(245,158,11,0.6)" />
                            <circle cx="200" cy="80" r="4" fill="rgba(245,158,11,0.6)" />
                            <circle cx="340" cy="60" r="4" fill="rgba(245,158,11,0.6)" />
                            <circle cx="200" cy="80" r="8" fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2">
                              <animate attributeName="r" values="8;16;8" dur="2s" repeatCount="indefinite" />
                              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="200" cy="80" r="3" fill="rgba(245,158,11,0.9)" />
                          </svg>
                          <div className="absolute top-3 left-3 px-2 py-1 rounded bg-emerald-500/20 text-[9px] text-emerald-400/80 font-mono">ZONE A - CLEAR</div>
                          <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-blue-500/20 text-[9px] text-blue-400/80 font-mono">ALT: 120m AGL</div>
                        </div>
                      </C>
                    </div>
                  )}

                  {/* Telemetry View */}
                  {activeView === "telemetry" && (
                    <div className="space-y-3 transition-all duration-300">
                      <C name="TelemetryDataCards" file="src/components/home/MissionControlMockup.tsx" prompt="2-column grid of 6 telemetry data cards; each card has a monospace label (9px, white/25), a bold monospace value (sm size, white/80), and an emerald status indicator; cards have subtle white bg and thin border">
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: "GPS Satellites", value: "14", status: "Locked" },
                            { label: "Heading", value: "247.3 deg", status: "NNW" },
                            { label: "Ground Speed", value: "8.2 m/s", status: "Stable" },
                            { label: "Vertical Speed", value: "+0.3 m/s", status: "Climbing" },
                            { label: "Motor RPM Avg", value: "4,820", status: "Normal" },
                            { label: "Gimbal Pitch", value: "-45 deg", status: "Locked" },
                          ].map((t) => (
                            <div key={t.label} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                              <div className="text-[9px] text-white/25 font-mono">{t.label}</div>
                              <div className="text-sm font-bold text-white/80 font-mono mt-1">{t.value}</div>
                              <div className="text-[9px] text-emerald-400/50 mt-0.5">{t.status}</div>
                            </div>
                          ))}
                        </div>
                      </C>
                      {/* Attitude indicator */}
                      <div className="p-4 rounded-lg bg-[#0a0e14] border border-white/[0.06] flex items-center justify-center h-24">
                        <div className="relative w-20 h-20 rounded-full border border-white/[0.1] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-amber-900/20" style={{ transform: 'rotate(3deg)' }} />
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-amber-400/60" />
                          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4 bg-amber-400/40" />
                        </div>
                        <div className="ml-6 space-y-1">
                          <div className="text-[9px] text-white/25 font-mono">PITCH: +3.2 deg</div>
                          <div className="text-[9px] text-white/25 font-mono">ROLL: -1.1 deg</div>
                          <div className="text-[9px] text-white/25 font-mono">YAW: 247.3 deg</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Weather View */}
                  {activeView === "weather" && (
                    <div className="space-y-3 transition-all duration-300">
                      <div className="p-4 rounded-lg bg-[#0a0e14] border border-white/[0.06]">
                        <div className="text-[10px] text-white/30 font-mono mb-3">CURRENT CONDITIONS</div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white/80">72 F</div>
                            <div className="text-[9px] text-white/25">Temperature</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white/80">45%</div>
                            <div className="text-[9px] text-white/25">Humidity</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white/80">30.12</div>
                            <div className="text-[9px] text-white/25">Pressure (inHg)</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[9px] text-white/25 font-mono">WIND</div>
                          <div className="text-sm font-bold text-white/80 font-mono mt-1">6 mph NW</div>
                          <div className="text-[9px] text-emerald-400/50">Below 15 mph limit</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[9px] text-white/25 font-mono">VISIBILITY</div>
                          <div className="text-sm font-bold text-white/80 font-mono mt-1">10 mi</div>
                          <div className="text-[9px] text-emerald-400/50">VFR conditions</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[9px] text-white/25 font-mono">CLOUD CEILING</div>
                          <div className="text-sm font-bold text-white/80 font-mono mt-1">4,500 ft</div>
                          <div className="text-[9px] text-emerald-400/50">SCT</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <div className="text-[9px] text-white/25 font-mono">KP INDEX</div>
                          <div className="text-sm font-bold text-white/80 font-mono mt-1">2</div>
                          <div className="text-[9px] text-emerald-400/50">Low interference</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Status bar */}
                  <C name="MissionControlStatusBar" file="src/components/home/MissionControlMockup.tsx" prompt="Horizontal status bar with subtle bg and thin border, rounded-lg; left side shows a pulsing emerald dot with 'LIVE' label and active flight count in monospace; right side shows UTC timestamp in monospace">
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[10px] text-emerald-400/70 font-mono">LIVE</span>
                        </div>
                        <span className="text-[10px] text-white/30 font-mono">2 active flights</span>
                      </div>
                      <span className="text-[10px] text-white/20 font-mono">14:32:08 UTC</span>
                    </div>
                  </C>
                </div>
              </div>
            </C>

            {/* Glow behind */}
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-blue-500/[0.03] to-transparent -z-10 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
