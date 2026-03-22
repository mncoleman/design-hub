import { useEffect, useRef, useState } from "react";
import { FigmaCursors } from "./FigmaCursors";

const pages = {
  overview: {
    stats: [
      { label: "Active Missions", value: "3", change: "+1 today" },
      { label: "Pilots Deployed", value: "5", change: "2 available" },
      { label: "Flights This Month", value: "28", change: "+12% vs last" },
      { label: "Data Delivered", value: "2.4 TB", change: "98% on time" },
    ],
    missions: [
      { name: "Site Survey - Lot 14B", status: "Completed", pilot: "M. Coleman", date: "Today" },
      { name: "Construction Progress - Phase 3", status: "In Flight", pilot: "J. Harris", date: "Today" },
      { name: "Roof Inspection - Warehouse D", status: "Scheduled", pilot: "M. Coleman", date: "Tomorrow" },
    ],
  },
  missions: {
    stats: [
      { label: "Total Missions", value: "142", change: "All time" },
      { label: "Active Now", value: "2", change: "In progress" },
      { label: "Completed", value: "138", change: "97% success" },
      { label: "Pending", value: "4", change: "This week" },
    ],
    missions: [
      { name: "Tower Inspection - Cell Site 7A", status: "In Flight", pilot: "J. Harris", date: "Now" },
      { name: "Solar Farm Scan - Block C", status: "In Flight", pilot: "R. Vasquez", date: "Now" },
      { name: "Pipeline Survey - Sector 12", status: "Scheduled", pilot: "M. Coleman", date: "Mar 22" },
      { name: "Bridge Assessment - I-40 Overpass", status: "Scheduled", pilot: "J. Harris", date: "Mar 23" },
    ],
  },
  fleet: {
    stats: [
      { label: "Total Aircraft", value: "8", change: "Fleet size" },
      { label: "Operational", value: "6", change: "Ready to fly" },
      { label: "In Maintenance", value: "1", change: "Battery swap" },
      { label: "Flight Hours", value: "2,340", change: "Total logged" },
    ],
    missions: [
      { name: "DJI Matrice 350 RTK", status: "Completed", pilot: "Active", date: "1,240 hrs" },
      { name: "DJI Mavic 3 Enterprise", status: "In Flight", pilot: "In Flight", date: "680 hrs" },
      { name: "Autel EVO II Pro", status: "Scheduled", pilot: "Maintenance", date: "420 hrs" },
    ],
  },
  reports: {
    stats: [
      { label: "Reports Generated", value: "89", change: "This quarter" },
      { label: "Pending Review", value: "3", change: "Awaiting client" },
      { label: "Avg Turnaround", value: "1.2d", change: "-0.3d vs last" },
      { label: "Client Rating", value: "4.9", change: "Out of 5.0" },
    ],
    missions: [
      { name: "Construction Progress Report - Phase 3", status: "Completed", pilot: "Delivered", date: "Today" },
      { name: "Inspection Summary - Warehouse D", status: "Scheduled", pilot: "In Review", date: "Tomorrow" },
      { name: "Survey Data Package - Lot 14B", status: "Completed", pilot: "Delivered", date: "Yesterday" },
    ],
  },
};

type PageKey = keyof typeof pages;

const navItems: { key: PageKey; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "missions", label: "Missions" },
  { key: "fleet", label: "Fleet" },
  { key: "reports", label: "Reports" },
];

export const DashboardMockup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePage, setActivePage] = useState<PageKey>("overview");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const page = pages[activePage];

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <div className="glow" style={{ top: '20%', left: '-10%' }} aria-hidden="true" />
      <div className="glow" style={{ bottom: '10%', right: '-10%', background: 'radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)' }} aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-6xl relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="eyebrow block mb-4">Coming Soon</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Dashboard
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Real-time visibility into your operations, missions, and deliverables. All in one place.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative">
          {/* Figma-style collaboration cursors */}
          <FigmaCursors />

          {/* Browser chrome */}
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
                  app.levoair.com/{activePage === "overview" ? "dashboard" : activePage}
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar with clickable nav */}
                <div className="col-span-12 md:col-span-3 space-y-1">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-600/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-amber-400">LA</span>
                    </div>
                    <span className="text-xs font-semibold text-white/70">LevoAir</span>
                  </div>
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setActivePage(item.key)}
                      className={`w-full px-3 py-2 rounded-lg text-xs font-medium text-left transition-all duration-200 ${
                        activePage === item.key
                          ? 'bg-white/[0.06] text-white/80'
                          : 'text-white/30 hover:text-white/50 hover:bg-white/[0.02]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 mt-4 border-t border-white/[0.04] space-y-1">
                    {["Team", "Settings"].map((item) => (
                      <div key={item} className="px-3 py-2 rounded-lg text-xs font-medium text-white/20">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main content - unique layout per page */}
                <div className="col-span-12 md:col-span-9 space-y-4">

                  {/* ===== OVERVIEW PAGE ===== */}
                  {activePage === "overview" && (
                    <>
                      {/* Stats row */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {page.stats.map((stat) => (
                          <div key={stat.label} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="text-[10px] text-white/30 mb-1">{stat.label}</div>
                            <div className="text-xl font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] text-emerald-400/60 mt-1">{stat.change}</div>
                          </div>
                        ))}
                      </div>
                      {/* Chart + mini map side by side */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="md:col-span-2 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-xs font-medium text-white/60 block mb-3">Mission Activity</span>
                          <div className="flex items-end gap-1.5 h-20">
                            {Array.from({ length: 24 }, (_, i) => {
                              const h = 25 + ((i * 37 + 11) % 70);
                              return <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-amber-500/20 to-amber-400/40" style={{ height: `${h}%` }} />;
                            })}
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-[#0a0e14] border border-white/[0.06] relative overflow-hidden">
                          <span className="text-[9px] text-white/30 font-mono block mb-2">ACTIVE ZONES</span>
                          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                          <div className="relative">
                            {[[30,35],[55,50],[70,25]].map(([x,y], i) => (
                              <div key={i} className="absolute" style={{ left: `${x}%`, top: `${y! + 20}%` }}>
                                <div className="w-2 h-2 rounded-full bg-amber-400/50 animate-pulse" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Recent missions list */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-xs font-medium text-white/60 block mb-3">Recent Missions</span>
                        <div className="space-y-2">
                          {page.missions.map((m) => (
                            <div key={m.name} className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0">
                              <div className="flex items-center gap-3">
                                <div className={`w-1.5 h-1.5 rounded-full ${m.status === 'Completed' ? 'bg-emerald-400/80' : m.status === 'In Flight' ? 'bg-amber-400/80 animate-pulse' : 'bg-white/20'}`} />
                                <div><div className="text-xs text-white/70">{m.name}</div><div className="text-[10px] text-white/25">{m.pilot}</div></div>
                              </div>
                              <div className="text-right"><div className={`text-[10px] font-medium ${m.status === 'Completed' ? 'text-emerald-400/60' : m.status === 'In Flight' ? 'text-amber-400/60' : 'text-white/30'}`}>{m.status}</div><div className="text-[10px] text-white/20">{m.date}</div></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ===== MISSIONS PAGE - Calendar/timeline view ===== */}
                  {activePage === "missions" && (
                    <>
                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-3">
                        {page.stats.map((stat) => (
                          <div key={stat.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                            <div className="text-[9px] text-white/30">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                      {/* Timeline view */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-medium text-white/60">Mission Timeline</span>
                          <span className="text-[10px] text-white/25 font-mono">March 2026</span>
                        </div>
                        <div className="relative pl-6 space-y-4">
                          {/* Vertical line */}
                          <div className="absolute left-2 top-1 bottom-1 w-px bg-white/[0.08]" />
                          {page.missions.map((m) => (
                            <div key={m.name} className="relative">
                              <div className={`absolute left-[-18px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${m.status === 'In Flight' ? 'border-amber-400/60 bg-amber-400/20' : m.status === 'Completed' ? 'border-emerald-400/60 bg-emerald-400/20' : 'border-white/20 bg-white/5'}`} />
                              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-white/70 font-medium">{m.name}</span>
                                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${m.status === 'In Flight' ? 'bg-amber-400/10 text-amber-400/70' : m.status === 'Completed' ? 'bg-emerald-400/10 text-emerald-400/70' : 'bg-white/[0.04] text-white/30'}`}>{m.status}</span>
                                </div>
                                <div className="flex items-center gap-3 mt-1.5">
                                  <span className="text-[9px] text-white/25">{m.pilot}</span>
                                  <span className="text-[9px] text-white/15">|</span>
                                  <span className="text-[9px] text-white/25">{m.date}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ===== FLEET PAGE - Card grid with gauges ===== */}
                  {activePage === "fleet" && (
                    <>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-white/60">Fleet Status</span>
                        <span className="text-[10px] text-emerald-400/50">6 of 8 operational</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { name: "DJI Matrice 350 RTK", status: "Active", battery: 85, hours: "1,240", color: "emerald" },
                          { name: "DJI Mavic 3 Enterprise", status: "In Flight", battery: 62, hours: "680", color: "amber" },
                          { name: "Autel EVO II Pro", status: "Maintenance", battery: 0, hours: "420", color: "red" },
                        ].map((aircraft) => (
                          <div key={aircraft.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] text-white/60 font-medium">{aircraft.name}</span>
                              <div className={`w-1.5 h-1.5 rounded-full ${aircraft.color === 'emerald' ? 'bg-emerald-400' : aircraft.color === 'amber' ? 'bg-amber-400 animate-pulse' : 'bg-red-400'}`} />
                            </div>
                            {/* Battery gauge */}
                            <div className="mb-3">
                              <div className="flex justify-between text-[9px] text-white/25 mb-1">
                                <span>Battery</span>
                                <span>{aircraft.battery}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                                <div className={`h-full rounded-full transition-all duration-500 ${aircraft.battery > 50 ? 'bg-emerald-400/60' : aircraft.battery > 20 ? 'bg-amber-400/60' : 'bg-red-400/60'}`} style={{ width: `${aircraft.battery}%` }} />
                              </div>
                            </div>
                            <div className="flex justify-between text-[9px]">
                              <span className="text-white/25">{aircraft.hours} hrs</span>
                              <span className={`${aircraft.color === 'emerald' ? 'text-emerald-400/50' : aircraft.color === 'amber' ? 'text-amber-400/50' : 'text-red-400/50'}`}>{aircraft.status}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Flight hours chart - horizontal bars */}
                      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <span className="text-xs font-medium text-white/60 block mb-4">Flight Hours by Aircraft</span>
                        <div className="space-y-3">
                          {[
                            { name: "Matrice 350", hours: 1240, max: 1500 },
                            { name: "Mavic 3 Ent", hours: 680, max: 1500 },
                            { name: "EVO II Pro", hours: 420, max: 1500 },
                          ].map((a) => (
                            <div key={a.name} className="flex items-center gap-3">
                              <span className="text-[10px] text-white/40 w-20 flex-shrink-0">{a.name}</span>
                              <div className="flex-1 h-2 rounded-full bg-white/[0.04] overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-blue-500/40 to-blue-400/60" style={{ width: `${(a.hours/a.max)*100}%` }} />
                              </div>
                              <span className="text-[10px] text-white/25 w-12 text-right">{a.hours}h</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* ===== REPORTS PAGE - Document cards ===== */}
                  {activePage === "reports" && (
                    <>
                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-3">
                        {page.stats.map((stat) => (
                          <div key={stat.label} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                            <div className="text-[10px] text-white/30 mb-1">{stat.label}</div>
                            <div className="text-lg font-bold text-white">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                      {/* Report document cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { title: "Construction Progress - Phase 3", type: "PDF", size: "12.4 MB", pages: 24, status: "Delivered", date: "Today" },
                          { title: "Inspection Summary - Warehouse D", type: "PDF", size: "8.1 MB", pages: 16, status: "In Review", date: "Tomorrow" },
                          { title: "Survey Data Package - Lot 14B", type: "ZIP", size: "2.1 GB", pages: null, status: "Delivered", date: "Yesterday" },
                          { title: "Orthomosaic - North Section", type: "TIFF", size: "4.6 GB", pages: null, status: "Processing", date: "Mar 22" },
                        ].map((report) => (
                          <div key={report.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex gap-3">
                            {/* File icon */}
                            <div className={`w-10 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${report.type === 'PDF' ? 'bg-red-500/10 border border-red-500/20' : report.type === 'ZIP' ? 'bg-amber-500/10 border border-amber-500/20' : 'bg-blue-500/10 border border-blue-500/20'}`}>
                              <span className={`text-[8px] font-bold ${report.type === 'PDF' ? 'text-red-400/70' : report.type === 'ZIP' ? 'text-amber-400/70' : 'text-blue-400/70'}`}>{report.type}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs text-white/70 font-medium truncate">{report.title}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[9px] text-white/25">{report.size}</span>
                                {report.pages && <span className="text-[9px] text-white/25">{report.pages} pages</span>}
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <span className={`text-[9px] px-1.5 py-0.5 rounded ${report.status === 'Delivered' ? 'bg-emerald-400/10 text-emerald-400/60' : report.status === 'Processing' ? 'bg-blue-400/10 text-blue-400/60' : 'bg-amber-400/10 text-amber-400/60'}`}>{report.status}</span>
                                <span className="text-[9px] text-white/20">{report.date}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Glow behind mockup */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-amber-500/[0.03] to-transparent -z-10 blur-xl" />
        </div>
      </div>
    </section>
  );
};
