import { useState, useEffect, useRef } from "react";
import { Plane, Building2, Map, Cpu, ArrowRight } from "lucide-react";
import { C } from "@/components/showcase/C";

const useCases = [
  {
    id: "contract",
    label: "Contract Pilot Services",
    icon: Plane,
    title: "Contract Pilot Services",
    description: "Certified pilots available for single missions or ongoing contracts, flying your equipment on your schedule. We integrate with your team and operate like an extension of your crew.",
    svgColor: "#F59E0B",
  },
  {
    id: "construction",
    label: "Construction",
    icon: Building2,
    title: "Construction & Infrastructure",
    description: "Experienced in construction site operations, progress documentation, and infrastructure inspection flights. From site surveys to final documentation, we handle the aerial work.",
    svgColor: "#3B82F6",
  },
  {
    id: "mapping",
    label: "Mapping",
    icon: Map,
    title: "Mapping Operations",
    description: "Skilled in photogrammetry, orthomosaic, and survey-grade flight planning for land and site assessment projects. Precision data collection with professional deliverables.",
    svgColor: "#10B981",
  },
  {
    id: "data",
    label: "Data Collection",
    icon: Cpu,
    title: "Data Collection & Processing",
    description: "LiDAR, thermal imaging, multispectral surveys, and more. We capture the data your team needs to make informed decisions.",
    svgColor: "#06B6D4",
  },
];

// Contract - Drone with animated flight path + rotating waypoints
const ContractSVG = ({ color }: { color: string }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    {/* Flight path arc */}
    <path d="M 40 230 Q 90 80 150 130 Q 210 180 260 50" stroke={color} strokeWidth="2" strokeDasharray="8,4" opacity="0.5">
      <animate attributeName="stroke-dashoffset" values="0;-24" dur="2s" repeatCount="indefinite" />
    </path>
    {/* Waypoints with pulse */}
    {[[40,230],[150,130],[260,50]].map(([cx,cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="8" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15" />
        <circle cx={cx} cy={cy} r="3" fill={color} fillOpacity="0.8" />
        <circle cx={cx} cy={cy} r="14" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3">
          <animate attributeName="r" values="14;22;14" dur={`${2+i*0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2+i*0.5}s`} repeatCount="indefinite" />
        </circle>
        <text x={cx!+14} y={cy!+4} fill={color} fillOpacity="0.5" fontSize="10" fontFamily="monospace" fontWeight="bold">WP{i+1}</text>
      </g>
    ))}
    {/* Drone at center waypoint */}
    <g transform="translate(150, 108)" opacity="0.7">
      <ellipse cx="0" cy="0" rx="16" ry="6" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" />
      <line x1="-16" y1="0" x2="-40" y2="-18" stroke={color} strokeWidth="1.5" />
      <line x1="16" y1="0" x2="40" y2="-18" stroke={color} strokeWidth="1.5" />
      <line x1="-16" y1="0" x2="-40" y2="18" stroke={color} strokeWidth="1.5" />
      <line x1="16" y1="0" x2="40" y2="18" stroke={color} strokeWidth="1.5" />
      {[[-40,-18],[40,-18],[-40,18],[40,18]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="14" stroke={color} strokeWidth="1" fill="none" strokeDasharray="3,2" opacity="0.5">
          <animateTransform attributeName="transform" type="rotate" from={`0 ${x} ${y}`} to={`${i%2?360:-360} ${x} ${y}`} dur="2s" repeatCount="indefinite" />
        </circle>
      ))}
    </g>
    {/* Status badge */}
    <rect x="20" y="20" width="90" height="26" rx="6" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1" opacity="0.5" />
    <text x="65" y="37" fill={color} fillOpacity="0.7" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MISSION LIVE</text>
    {/* Schedule lines */}
    <g transform="translate(175, 210)" opacity="0.35">
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="0" y={i*20} width={65 + (i%2)*25} height="10" rx="3" fill={color} fillOpacity="0.15" />
          <circle cx="-12" cy={i*20+5} r="3.5" stroke={color} strokeWidth="1" fill={i<2 ? color : 'none'} fillOpacity="0.4" />
        </g>
      ))}
    </g>
  </svg>
);

// Construction - Building with progress scan + crane
const ConstructionSVG = ({ color }: { color: string }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    {/* Ground */}
    <line x1="20" y1="250" x2="280" y2="250" stroke={color} strokeWidth="1.5" opacity="0.3" />
    {/* Building frame */}
    <g opacity="0.5">
      <rect x="55" y="100" width="110" height="150" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.04" rx="2" />
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="55" y1={100+i*30} x2="165" y2={100+i*30} stroke={color} strokeWidth="0.8" opacity="0.4" />
      ))}
      {[0,1,2,3,4].map(row => [0,1,2].map(col => (
        <rect key={`${row}-${col}`} x={65+col*32} y={106+row*30} width="16" height="20" rx="2" stroke={color} strokeWidth="0.8" fill={color} fillOpacity={row < 3 ? "0.1" : "0.03"} />
      )))}
    </g>
    {/* Crane */}
    <g opacity="0.4">
      <line x1="210" y1="50" x2="210" y2="250" stroke={color} strokeWidth="2.5" />
      <line x1="210" y1="50" x2="275" y2="50" stroke={color} strokeWidth="2" />
      <line x1="210" y1="50" x2="175" y2="50" stroke={color} strokeWidth="2" />
      <line x1="210" y1="50" x2="175" y2="75" stroke={color} strokeWidth="1" />
      <line x1="245" y1="50" x2="245" y2="100" stroke={color} strokeWidth="0.8" strokeDasharray="3,3">
        <animate attributeName="y2" values="100;120;100" dur="3s" repeatCount="indefinite" />
      </line>
    </g>
    {/* Scanning laser sweep */}
    <g opacity="0.3">
      <line x1="110" y1="75" x2="55" y2="100" stroke={color} strokeWidth="1" strokeDasharray="2,2">
        <animate attributeName="x2" values="55;165;55" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="110" y1="75" x2="55" y2="250" stroke={color} strokeWidth="0.5" strokeDasharray="2,2">
        <animate attributeName="x2" values="55;165;55" dur="4s" repeatCount="indefinite" />
      </line>
    </g>
    {/* Drone scanning overhead */}
    <g transform="translate(110, 65)" opacity="0.6">
      <ellipse cx="0" cy="0" rx="10" ry="4" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
      <circle cx="0" cy="0" r="2" fill={color} fillOpacity="0.6" />
    </g>
    {/* Progress bar */}
    <rect x="55" y="262" width="110" height="8" rx="4" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.5" />
    <rect x="55" y="262" width="72" height="8" rx="4" fill={color} fillOpacity="0.3">
      <animate attributeName="width" values="50;80;50" dur="6s" repeatCount="indefinite" />
    </rect>
    <text x="110" y="285" fill={color} fillOpacity="0.5" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">65% DOCUMENTED</text>
  </svg>
);

// Mapping - Topo lines + survey grid + flight pattern
const MappingSVG = ({ color }: { color: string }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    {/* Topographic contour lines */}
    <g opacity="0.35">
      <ellipse cx="145" cy="170" rx="120" ry="75" stroke={color} strokeWidth="1" />
      <ellipse cx="143" cy="165" rx="90" ry="55" stroke={color} strokeWidth="1" />
      <ellipse cx="140" cy="160" rx="65" ry="38" stroke={color} strokeWidth="1" />
      <ellipse cx="138" cy="155" rx="40" ry="22" stroke={color} strokeWidth="1" />
      <ellipse cx="136" cy="150" rx="18" ry="10" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08" />
    </g>
    {/* Survey grid */}
    <g opacity="0.2">
      {[0,1,2,3,4,5].map(i => (
        <g key={i}>
          <line x1={35+i*48} y1="70" x2={35+i*48} y2="270" stroke={color} strokeWidth="0.5" strokeDasharray="4,6" />
          <line x1="35" y1={70+i*40} x2="275" y2={70+i*40} stroke={color} strokeWidth="0.5" strokeDasharray="4,6" />
        </g>
      ))}
    </g>
    {/* GCP markers */}
    {[[80,130],[210,140],[145,225],[95,200],[230,210]].map(([x,y], i) => (
      <g key={i} opacity="0.55">
        <line x1={x!-7} y1={y} x2={x!+7} y2={y} stroke={color} strokeWidth="1.5" />
        <line x1={x} y1={y!-7} x2={x} y2={y!+7} stroke={color} strokeWidth="1.5" />
        <circle cx={x} cy={y} r="5" stroke={color} strokeWidth="1" fill="none" />
      </g>
    ))}
    {/* Lawn-mower flight pattern with animation */}
    <path d="M 50 85 L 250 85 L 250 120 L 50 120 L 50 155 L 250 155 L 250 190 L 50 190" stroke={color} strokeWidth="1.5" strokeDasharray="6,3" opacity="0.4">
      <animate attributeName="stroke-dashoffset" values="0;-18" dur="2s" repeatCount="indefinite" />
    </path>
    {/* Active drone */}
    <circle cx="50" cy="190" r="6" fill={color} fillOpacity="0.5">
      <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
      <animate attributeName="fillOpacity" values="0.5;0.15;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="50" cy="190" r="4" fill={color} fillOpacity="0.8" />
    {/* Data readout */}
    <g transform="translate(175, 25)" opacity="0.45">
      <rect x="0" y="0" width="100" height="55" rx="6" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.8" />
      <text x="12" y="17" fill={color} fontSize="9" fontFamily="monospace" fontWeight="bold">GSD: 2.4 cm/px</text>
      <text x="12" y="32" fill={color} fontSize="9" fontFamily="monospace">Overlap: 80/70</text>
      <text x="12" y="47" fill={color} fontSize="9" fontFamily="monospace">Area: 12.4 ac</text>
    </g>
  </svg>
);

// Data Collection - LiDAR scatter + terrain + processing pipeline (with motion)
const DataSVG = ({ color }: { color: string }) => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    {/* Point cloud scatter with subtle drift animation */}
    <g opacity="0.45">
      {Array.from({ length: 100 }, (_, i) => {
        const x = 35 + ((i * 37 + 11) % 230);
        const y = 60 + ((i * 23 + 7) % 150);
        const r = 1.5 + (i % 3) * 0.8;
        const o = 0.25 + (i % 5) * 0.12;
        const drift = (i % 2 === 0) ? 3 : -3;
        return (
          <circle key={i} cx={x} cy={y} r={r} fill={color} fillOpacity={o}>
            <animate attributeName="cy" values={`${y};${y+drift};${y}`} dur={`${2+i%3}s`} repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values={`${o};${o*1.5};${o}`} dur={`${3+i%4}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
    </g>
    {/* Scanning sweep line */}
    <line x1="30" y1="60" x2="30" y2="210" stroke={color} strokeWidth="1.5" opacity="0.3">
      <animate attributeName="x1" values="30;270;30" dur="5s" repeatCount="indefinite" />
      <animate attributeName="x2" values="30;270;30" dur="5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.1;0.4;0.1" dur="5s" repeatCount="indefinite" />
    </line>
    {/* Terrain profile */}
    <path d="M 30 210 Q 75 175 125 195 Q 175 215 215 180 Q 255 145 270 170" stroke={color} strokeWidth="2" opacity="0.45" fill="none" />
    <path d="M 30 210 Q 75 175 125 195 Q 175 215 215 180 Q 255 145 270 170 L 270 260 L 30 260 Z" fill={color} fillOpacity="0.05" />
    {/* LiDAR scan lines from drone - drone drifts side to side */}
    <g opacity="0.4">
      <animateTransform attributeName="transform" type="translate" values="130,40;170,40;130,40" dur="6s" repeatCount="indefinite" />
      <ellipse cx="0" cy="0" rx="12" ry="5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15" />
      <circle cx="0" cy="0" r="2.5" fill={color} fillOpacity="0.6" />
      {[-35,-20,-5,10,25].map((angle, i) => (
        <line key={i} x1="0" y1="7" x2={angle} y2="90" stroke={color} strokeWidth="0.8" opacity={0.7 - Math.abs(angle)*0.01}>
          <animate attributeName="opacity" values={`${0.3};${0.7};${0.3}`} dur={`${1.2+i*0.3}s`} repeatCount="indefinite" />
        </line>
      ))}
    </g>
    {/* Processing pipeline with flowing dots */}
    <g transform="translate(25, 268)" opacity="0.45">
      {[["RAW",0],["FILTER",68],["PROCESS",136],["OUTPUT",204]].map(([label, x], i) => (
        <g key={i}>
          <rect x={x as number} y="0" width="58" height="24" rx="5" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.8">
            <animate attributeName="fillOpacity" values="0.06;0.12;0.06" dur={`${2+i*0.5}s`} repeatCount="indefinite" />
          </rect>
          <text x={(x as number)+29} y="16" fill={color} fontSize="7" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{label as string}</text>
          {i < 3 && (
            <>
              <line x1={(x as number)+58} y1="12" x2={(x as number)+68} y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
              <circle cx={(x as number)+58} cy="12" r="2" fill={color} fillOpacity="0.6">
                <animate attributeName="cx" values={`${(x as number)+58};${(x as number)+68};${(x as number)+58}`} dur={`${1.5+i*0.3}s`} repeatCount="indefinite" />
              </circle>
            </>
          )}
        </g>
      ))}
    </g>
    {/* Data type badges */}
    <g transform="translate(25, 25)" opacity="0.4">
      {["LiDAR","Thermal","RGB","Multi"].map((label, i) => (
        <g key={label}>
          <rect x={i*65} y="0" width="56" height="22" rx="11" fill={color} fillOpacity="0.08" stroke={color} strokeWidth="0.8" />
          <text x={i*65+28} y="15" fill={color} fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">{label}</text>
        </g>
      ))}
    </g>
  </svg>
);

const svgComponents: Record<string, React.FC<{ color: string }>> = {
  contract: ContractSVG,
  construction: ConstructionSVG,
  mapping: MappingSVG,
  data: DataSVG,
};

export const UseCasesSection = () => {
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 md:py-36">
      <div className="grain" aria-hidden="true" />
      <div className={`container mx-auto px-6 max-w-6xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-16">
          <span className="eyebrow block mb-4">USE CASES</span>
          <C name="UseCasesSectionHeading" file="src/components/home/UseCasesSection.tsx" prompt="Bold white heading 'What We Do For You' centered, text-4xl on mobile scaling to text-5xl on md breakpoint">
            <h2 className="text-4xl md:text-5xl font-bold text-white">What We Do For You</h2>
          </C>
        </div>

        {/* Tab buttons */}
        <C name="UseCasesTabButtons" file="src/components/home/UseCasesSection.tsx" prompt="Horizontally centered flex-wrap row of pill-shaped tab buttons with rounded-xl corners; active tab has subtle white bg and border, inactive tabs are dimmed white text with transparent border and hover state">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active === i
                    ? 'bg-white/[0.08] text-white border border-white/[0.12]'
                    : 'text-white/40 border border-transparent hover:text-white/60'
                }`}
              >
                {uc.label}
              </button>
            ))}
          </div>
        </C>

        {/* Active content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">{useCases[active].title}</h3>
            <p className="text-lg text-white/50 leading-relaxed">{useCases[active].description}</p>
            <C name="UseCasesGetStartedButton" file="src/components/home/UseCasesSection.tsx" prompt="Primary CTA button linking to /contact with 'Get Started' text and a right arrow icon that translates right on hover; uses btn-primary class with inline-flex and group hover animation">
              <a href="/contact" className="btn-primary inline-flex group">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </C>
          </div>

          {/* Custom SVG illustration */}
          <div className="flex items-center justify-center">
            <C name="AnimatedUseCaseSVG" file="src/components/home/UseCasesSection.tsx" prompt="Square container with max-w-sm holding an animated SVG illustration that changes per active tab; has a rounded border card with subtle background and a blurred radial gradient glow behind it using the active use case color">
              <div className="relative w-full max-w-sm aspect-square">
                <div className="absolute inset-0 rounded-3xl border border-white/[0.06] bg-white/[0.01] overflow-hidden">
                  {(() => {
                    const SvgComponent = svgComponents[useCases[active].id];
                    return SvgComponent ? <SvgComponent color={useCases[active].svgColor} /> : null;
                  })()}
                </div>
                <div className="absolute -inset-8 rounded-3xl -z-10 blur-2xl" style={{
                  background: `radial-gradient(circle at center, ${useCases[active].svgColor}10, transparent 60%)`
                }} />
              </div>
            </C>
          </div>
        </div>
      </div>
    </section>
  );
};
