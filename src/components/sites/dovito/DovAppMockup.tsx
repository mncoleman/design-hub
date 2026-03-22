import { useState, useEffect, useRef } from "react";
import { FigmaCursors } from "@/components/home/FigmaCursors";
import { C } from "@/components/showcase/C";
import { Home, Users, Building2, FolderOpen, ClipboardList, GitBranch, BookOpen, MessageSquare, Settings, ChevronDown, Search, Bell } from "lucide-react";

type Page = "home" | "people" | "companies" | "projects" | "tasks" | "pipeline" | "learn" | "messages";

const sidebarExternal = [
  { key: "people" as const, label: "People", icon: Users },
  { key: "companies" as const, label: "Companies", icon: Building2 },
  { key: "projects" as const, label: "Projects", icon: FolderOpen },
  { key: "tasks" as const, label: "Tasks", icon: ClipboardList },
  { key: "pipeline" as const, label: "Pipeline", icon: GitBranch },
  { key: "learn" as const, label: "Learn", icon: BookOpen },
];

const sidebarInternal = [
  { key: "messages" as const, label: "Messages", icon: MessageSquare },
  { key: "" as const, label: "Business Profile", icon: Building2 },
  { key: "" as const, label: "Feedback", icon: MessageSquare },
  { key: "" as const, label: "Permissions", icon: Settings },
  { key: "" as const, label: "Timecards", icon: ClipboardList },
  { key: "" as const, label: "Payments", icon: Settings },
];

export const DovAppMockup = () => {
  const [activePage, setActivePage] = useState<Page>("home");
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#f8f9fb]">
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <C name="MockupEyebrow" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Eyebrow label: text-xs font-medium, blue (#39a0ed) color, uppercase tracking-[0.15em], block display." inline={true}>
          <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">Platform Preview</span>
          </C>
          <C name="MockupHeading" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Section h2 heading, text-3xl md:text-4xl, font-bold, navy color.">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-4">Your Client Portal</h2>
          </C>
          <p className="text-lg text-[#1a3a60]/50 max-w-2xl mx-auto">
            AI resources, project management, and operational tools. All in one place.
          </p>
        </div>

        <div className="relative">
          <FigmaCursors name="You" color="#2563EB" />

          {/* Browser chrome */}
          <C name="AppMockupFrame" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Browser window frame: rounded-xl, border, light warm-gray bg (#FAFAF9), shadow-2xl. Contains title bar with traffic light dots and URL bar, then sidebar + main content layout.">
          <div className="rounded-xl overflow-hidden border border-[#1a3a60]/[0.1] bg-[#FAFAF9] shadow-2xl shadow-black/10">
            {/* Title bar */}
            <C name="MockupTitleBar" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Browser title bar with traffic light dots (red/yellow/green circles w-3 h-3), centered URL bar with search icon and mono text showing current page path.">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e5e5e5] bg-[#f5f5f4]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 rounded-md bg-white border border-[#e5e5e5] text-[11px] text-[#999] font-mono flex items-center gap-2">
                  <Search className="h-3 w-3" />
                  app.yoursite.com/{activePage}
                </div>
              </div>
            </div>
            </C>

            <div className="flex min-h-[450px]">
              {/* Sidebar */}
              <C name="MockupSidebar" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="App sidebar: w-52, border-right, warm-gray bg, flex-col. Contains logo, business selector dropdown, Home button, EXTERNAL nav section, INTERNAL nav section, and user avatar at bottom.">
              <div className="w-52 border-r border-[#e8e8e8] bg-[#FAFAF9] flex-shrink-0 hidden md:flex flex-col">
                {/* Logo */}
                <div className="px-4 py-4 border-b border-[#e8e8e8]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1A1A1A]">Systematics</span>
                    <span className="text-[7px] text-[#999]">TM</span>
                  </div>
                </div>

                {/* Business selector */}
                <div className="px-3 py-2 border-b border-[#e8e8e8]">
                  <div className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-[#1A1A1A]">
                    <Building2 className="h-3 w-3 text-[#999]" />
                    <span className="flex-1 truncate text-[10px]">Your Company</span>
                    <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Agency</span>
                    <ChevronDown className="h-3 w-3 text-[#999]" />
                  </div>
                </div>

                {/* Home */}
                <div className="px-3 pt-2">
                  <button
                    onClick={() => setActivePage("home")}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all ${
                      activePage === "home" ? 'bg-[#1A1A1A]/[0.06] font-medium text-[#1A1A1A]' : 'text-[#5C5650] hover:bg-[#1A1A1A]/[0.03]'
                    }`}
                  >
                    <Home className="h-3.5 w-3.5" />
                    Home
                  </button>
                </div>

                {/* EXTERNAL section */}
                <div className="px-3 pt-3">
                  <div className="flex items-center gap-1 px-3 mb-1">
                    <span className="text-[9px] font-semibold text-[#999] tracking-wider">EXTERNAL</span>
                    <ChevronDown className="h-2.5 w-2.5 text-[#ccc]" />
                  </div>
                  {sidebarExternal.map(item => {
                    const Icon = item.icon;
                    const isActive = activePage === item.key;
                    return (
                      <button
                        key={item.label}
                        onClick={() => setActivePage(item.key as Page)}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-all ${
                          isActive ? 'bg-[#1A1A1A]/[0.06] font-medium text-[#1A1A1A]' : 'text-[#5C5650] hover:bg-[#1A1A1A]/[0.03]'
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>

                {/* INTERNAL section */}
                <div className="px-3 pt-3">
                  <div className="flex items-center gap-1 px-3 mb-1">
                    <span className="text-[9px] font-semibold text-[#999] tracking-wider">INTERNAL</span>
                    <ChevronDown className="h-2.5 w-2.5 text-[#ccc]" />
                  </div>
                  {sidebarInternal.slice(0, 4).map(item => {
                    const Icon = item.icon;
                    const isActive = item.key && activePage === item.key;
                    return item.key ? (
                      <button
                        key={item.label}
                        onClick={() => setActivePage(item.key as Page)}
                        className={`w-full flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-all ${
                          isActive ? 'bg-[#1A1A1A]/[0.06] font-medium text-[#1A1A1A]' : 'text-[#5C5650] hover:bg-[#1A1A1A]/[0.03]'
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {item.label}
                      </button>
                    ) : (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#5C5650]/60">
                        <Icon className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                    );
                  })}
                </div>

                {/* User */}
                <div className="mt-auto px-3 py-3 border-t border-[#e8e8e8]">
                  <div className="flex items-center gap-2 px-2">
                    <div className="w-7 h-7 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[9px] font-bold text-[#5C5650]">YN</div>
                    <div>
                      <div className="text-[10px] font-medium text-[#1A1A1A]">Your Name</div>
                      <div className="text-[8px] text-[#999]">Admin</div>
                    </div>
                  </div>
                </div>
              </div>
              </C>

              {/* Main content area */}
              <div className="flex-1 flex flex-col">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-[#e8e8e8] bg-white">
                  <div />
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAFAF9] border border-[#e8e8e8] text-[10px] text-[#999]">
                    <Search className="h-3 w-3" />
                    Search... with AI
                    <span className="text-[8px] bg-white border border-[#ddd] px-1 rounded">Cmd K</span>
                  </div>
                  <Bell className="h-4 w-4 text-[#999]" />
                </div>

                <div className="flex-1 p-6 overflow-auto">
                  {/* HOME - Dashboard */}
                  {activePage === "home" && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">Dashboard</h3>
                        <p className="text-xs text-[#5C5650]">Overview of your pipeline and projects.</p>
                      </div>
                      {/* Stat cards */}
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { label: "New Applications", value: "3", color: "text-blue-600" },
                          { label: "Under Review", value: "1", color: "text-amber-600" },
                          { label: "Active Projects", value: "9", color: "text-green-600" },
                          { label: "Total Projects", value: "12", color: "text-[#1A1A1A]" },
                        ].map(s => (
                          <C key={s.label} name="MockupStatCard" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Dashboard stat card: p-4 rounded-xl, border, white bg, centered large number (text-2xl font-bold with dynamic color) and small label below.">
                          <div className="p-4 rounded-xl border border-[#e8e8e8] bg-white text-center">
                            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                            <div className="text-[9px] text-[#5C5650] mt-1">{s.label}</div>
                          </div>
                          </C>
                        ))}
                      </div>
                      {/* Pipeline snapshot + Recent projects */}
                      <div className="grid grid-cols-2 gap-3">
                        <C name="MockupPipelineSnapshot" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Pipeline snapshot card: p-4 rounded-xl border white bg. Header with GitBranch icon and title. List of pipeline stages with counts in small gray badges.">
                        <div className="p-4 rounded-xl border border-[#e8e8e8] bg-white">
                          <div className="flex items-center gap-2 mb-3">
                            <GitBranch className="h-4 w-4 text-[#5C5650]" />
                            <span className="text-xs font-semibold text-[#1A1A1A]">Pipeline Snapshot</span>
                          </div>
                          {["New", "Under Review", "Interview", "Approved", "Active"].map((stage, i) => (
                            <div key={stage} className="flex items-center justify-between py-1.5 border-b border-[#f5f5f4] last:border-0">
                              <span className="text-[10px] text-[#5C5650]">{stage}</span>
                              <span className="text-[10px] font-medium bg-[#f5f5f4] px-2 py-0.5 rounded">{[3, 1, 0, 2, 0][i]}</span>
                            </div>
                          ))}
                        </div>
                        </C>
                        <C name="MockupRecentProjects" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Recent projects card: p-4 rounded-xl border white bg. Header with FolderOpen icon and title. List of projects with name, client, and colored status badge.">
                        <div className="p-4 rounded-xl border border-[#e8e8e8] bg-white">
                          <div className="flex items-center gap-2 mb-3">
                            <FolderOpen className="h-4 w-4 text-[#5C5650]" />
                            <span className="text-xs font-semibold text-[#1A1A1A]">Recent Projects</span>
                          </div>
                          {[
                            { name: "Operations Platform", client: "Vertex", status: "planning" },
                            { name: "Company Website", client: "Client A", status: "in progress" },
                            { name: "CRM Integration", client: "Client B", status: "completed" },
                          ].map(p => (
                            <div key={p.name} className="flex items-center justify-between py-1.5 border-b border-[#f5f5f4] last:border-0">
                              <div>
                                <div className="text-[10px] font-medium text-[#1A1A1A]">{p.name}</div>
                                <div className="text-[8px] text-[#999]">{p.client}</div>
                              </div>
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${
                                p.status === 'completed' ? 'bg-green-50 text-green-700' :
                                p.status === 'in progress' ? 'bg-blue-50 text-blue-700' :
                                'bg-amber-50 text-amber-700'
                              }`}>{p.status}</span>
                            </div>
                          ))}
                        </div>
                        </C>
                      </div>
                    </div>
                  )}

                  {/* PROJECTS - Table view */}
                  {activePage === "projects" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-[#1A1A1A]">Projects</h3>
                          <p className="text-xs text-[#5C5650]">Manage all client projects.</p>
                        </div>
                        <C name="MockupNewProjectButton" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Small dark button '+ New Project': text-[10px], px-3 py-1.5, black bg, white text, rounded-lg." inline={true}>
                        <button className="text-[10px] px-3 py-1.5 bg-[#1A1A1A] text-white rounded-lg font-medium">+ New Project</button>
                        </C>
                      </div>
                      {/* Filter pills */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#e8e8e8] bg-white text-[10px] text-[#999]">
                          <Search className="h-3 w-3" />
                          Search projects...
                        </div>
                        {["All", "Planning", "In Progress", "Completed"].map((f, i) => (
                          <button key={f} className={`px-3 py-1.5 rounded-full text-[10px] font-medium ${i === 0 ? 'bg-[#1A1A1A] text-white' : 'text-[#5C5650] border border-[#e8e8e8]'}`}>{f}</button>
                        ))}
                      </div>
                      {/* Table */}
                      <C name="MockupProjectTable" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Data table: rounded-xl border, white bg, overflow-hidden. Header row with 5 columns (Project, Client, Status, Started, Description) on gray bg. Body rows with project data and colored status badges.">
                      <div className="rounded-xl border border-[#e8e8e8] bg-white overflow-hidden">
                        <div className="grid grid-cols-5 gap-0 px-4 py-2 bg-[#FAFAF9] border-b border-[#e8e8e8] text-[9px] font-medium text-[#999]">
                          <span>Project</span><span>Client</span><span>Status</span><span>Started</span><span>Description</span>
                        </div>
                        {[
                          { name: "Operations Platform", client: "Vertex Fiber", status: "Planning", date: "--", desc: "Custom web application..." },
                          { name: "Company Website", client: "Client A", status: "In Progress", date: "3/19/2026", desc: "Website design and dev..." },
                          { name: "Material Reporting", client: "Client B", status: "Completed", date: "3/17/2026", desc: "" },
                          { name: "CRM Integration", client: "Client B", status: "In Progress", date: "2/16/2026", desc: "" },
                        ].map(p => (
                          <C key={p.name} name="MockupProjectRow" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Project table row: 5-column grid, px-4 py-3, bottom border. Shows project name (bold), client, colored status badge, date, and truncated description.">
                          <div className="grid grid-cols-5 gap-0 px-4 py-3 border-b border-[#f5f5f4] last:border-0 text-[10px]">
                            <span className="font-medium text-[#1A1A1A]">{p.name}</span>
                            <span className="text-[#5C5650]">{p.client}</span>
                            <span><span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${
                              p.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' :
                              p.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                              'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}>{p.status}</span></span>
                            <span className="text-[#999]">{p.date}</span>
                            <span className="text-[#999] truncate">{p.desc}</span>
                          </div>
                          </C>
                        ))}
                      </div>
                      </C>
                    </div>
                  )}

                  {/* PIPELINE - Kanban */}
                  {activePage === "pipeline" && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">Pipeline</h3>
                        <p className="text-xs text-[#5C5650]">Drag applications between columns to update status</p>
                      </div>
                      {/* Status pills */}
                      <div className="flex items-center gap-2">
                        {[
                          { label: "2 Active", color: "" },
                          { label: "3 New", color: "text-gray-700" },
                          { label: "1 Review", color: "text-blue-600" },
                          { label: "0 Interview", color: "text-amber-600" },
                          { label: "2 Approved", color: "text-green-600" },
                        ].map(p => (
                          <span key={p.label} className={`text-[9px] px-2 py-1 rounded-full border border-[#e8e8e8] font-medium ${p.color}`}>{p.label}</span>
                        ))}
                      </div>
                      {/* Kanban columns */}
                      <div className="grid grid-cols-5 gap-2">
                        {[
                          { stage: "New", count: 3, color: "bg-gray-100 text-gray-700 border-gray-300", items: [{ name: "Acme Corp", person: "Jane D.", date: "3/20" }] },
                          { stage: "Review", count: 1, color: "bg-blue-50 text-blue-700 border-blue-300", items: [{ name: "BuildRight", person: "Tom S.", date: "3/18" }] },
                          { stage: "Interview", count: 0, color: "bg-amber-50 text-amber-700 border-amber-300", items: [] },
                          { stage: "Approved", count: 2, color: "bg-green-50 text-green-700 border-green-300", items: [{ name: "Client A", person: "You", date: "3/16" }, { name: "Client B", person: "You", date: "3/9" }] },
                          { stage: "Active", count: 0, color: "bg-emerald-50 text-emerald-700 border-emerald-300", items: [] },
                        ].map(col => (
                          <C key={col.stage} name="MockupKanbanColumn" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Kanban column: colored header bar with stage name and count, white body with border and min-height. Contains draggable cards or dashed empty-state placeholder.">
                          <div>
                            <div className={`text-[9px] font-semibold ${col.color} border px-2 py-1.5 rounded-t-lg flex items-center justify-between`}>
                              {col.stage}
                              <span className="opacity-60">{col.count}</span>
                            </div>
                            <div className="border border-t-0 border-[#e8e8e8] rounded-b-lg p-1.5 space-y-1.5 min-h-[120px] bg-white">
                              {col.items.length === 0 && (
                                <div className="h-16 border-2 border-dashed border-[#e8e8e8] rounded-lg flex items-center justify-center text-[8px] text-[#ccc]">Drop here</div>
                              )}
                              {col.items.map(item => (
                                <C key={item.name} name="MockupKanbanCard" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Kanban card: p-2.5 rounded-lg border, light gray bg, text-[9px]. Shows company name (bold), person, and date.">
                                <div className="p-2.5 rounded-lg border border-[#e8e8e8] bg-[#FAFAF9] text-[9px]">
                                  <div className="font-semibold text-[#1A1A1A]">{item.name}</div>
                                  <div className="text-[#999]">{item.person}</div>
                                  <div className="text-[#ccc]">{item.date}</div>
                                </div>
                                </C>
                              ))}
                            </div>
                          </div>
                          </C>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PEOPLE */}
                  {activePage === "people" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div><h3 className="text-xl font-bold text-[#1A1A1A]">People</h3><p className="text-xs text-[#5C5650]">Manage contacts and team members.</p></div>
                        <button className="text-[10px] px-3 py-1.5 bg-[#1A1A1A] text-white rounded-lg font-medium">+ Add Person</button>
                      </div>
                      <div className="rounded-xl border border-[#e8e8e8] bg-white overflow-hidden">
                        <div className="grid grid-cols-4 gap-0 px-4 py-2 bg-[#FAFAF9] border-b border-[#e8e8e8] text-[9px] font-medium text-[#999]">
                          <span>Name</span><span>Email</span><span>Role</span><span>Company</span>
                        </div>
                        {[
                          { name: "Jane Doe", email: "jane@acme.com", role: "Client", company: "Acme Corp" },
                          { name: "Tom Smith", email: "tom@buildright.com", role: "Client", company: "BuildRight" },
                          { name: "Sarah Kim", email: "sarah@vertex.io", role: "Client", company: "Vertex Fiber" },
                          { name: "Alex Chen", email: "alex@team.com", role: "Team", company: "Your Company" },
                        ].map(p => (
                          <div key={p.name} className="grid grid-cols-4 gap-0 px-4 py-3 border-b border-[#f5f5f4] last:border-0 text-[10px]">
                            <span className="font-medium text-[#1A1A1A]">{p.name}</span>
                            <span className="text-[#5C5650]">{p.email}</span>
                            <span><span className={`px-1.5 py-0.5 rounded text-[9px] font-medium ${p.role === 'Team' ? 'bg-purple-50 text-purple-700 border border-purple-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>{p.role}</span></span>
                            <span className="text-[#999]">{p.company}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* COMPANIES */}
                  {activePage === "companies" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div><h3 className="text-xl font-bold text-[#1A1A1A]">Companies</h3><p className="text-xs text-[#5C5650]">Client organizations.</p></div>
                        <button className="text-[10px] px-3 py-1.5 bg-[#1A1A1A] text-white rounded-lg font-medium">+ Add Company</button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          { name: "Acme Corp", industry: "Construction", projects: 3, status: "Active" },
                          { name: "BuildRight", industry: "General Contractor", projects: 1, status: "Active" },
                          { name: "Vertex Fiber", industry: "Telecom", projects: 2, status: "Active" },
                          { name: "ProBuild Inc", industry: "Specialty Contractor", projects: 0, status: "Prospect" },
                        ].map(c => (
                          <div key={c.name} className="p-4 rounded-xl border border-[#e8e8e8] bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-semibold text-[#1A1A1A]">{c.name}</span>
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${c.status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-gray-50 text-gray-600 border border-gray-200'}`}>{c.status}</span>
                            </div>
                            <div className="text-[9px] text-[#5C5650]">{c.industry}</div>
                            <div className="text-[9px] text-[#999] mt-1">{c.projects} project{c.projects !== 1 ? 's' : ''}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TASKS */}
                  {activePage === "tasks" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div><h3 className="text-xl font-bold text-[#1A1A1A]">Tasks</h3><p className="text-xs text-[#5C5650]">Track work across all projects.</p></div>
                        <button className="text-[10px] px-3 py-1.5 bg-[#1A1A1A] text-white rounded-lg font-medium">+ New Task</button>
                      </div>
                      <div className="flex gap-2 mb-2">
                        {["All", "To Do", "In Progress", "Done"].map((f, i) => (
                          <button key={f} className={`px-3 py-1.5 rounded-full text-[10px] font-medium ${i === 0 ? 'bg-[#1A1A1A] text-white' : 'text-[#5C5650] border border-[#e8e8e8]'}`}>{f}</button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {[
                          { title: "Review CRM integration spec", project: "CRM Integration", status: "In Progress", assignee: "AC", priority: "High" },
                          { title: "Configure API endpoints", project: "Operations Platform", status: "To Do", assignee: "YN", priority: "Medium" },
                          { title: "Write onboarding docs", project: "Company Website", status: "Done", assignee: "AC", priority: "Low" },
                          { title: "Test payment webhook", project: "CRM Integration", status: "In Progress", assignee: "YN", priority: "High" },
                          { title: "Deploy staging environment", project: "Operations Platform", status: "To Do", assignee: "AC", priority: "Medium" },
                        ].map(t => (
                          <div key={t.title} className="flex items-center justify-between p-3 rounded-xl border border-[#e8e8e8] bg-white">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${t.status === 'Done' ? 'bg-green-400' : t.status === 'In Progress' ? 'bg-blue-400' : 'bg-gray-300'}`} />
                              <div>
                                <div className="text-[10px] font-medium text-[#1A1A1A]">{t.title}</div>
                                <div className="text-[8px] text-[#999]">{t.project}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${t.priority === 'High' ? 'bg-red-50 text-red-600' : t.priority === 'Medium' ? 'bg-amber-50 text-amber-600' : 'bg-gray-50 text-gray-500'}`}>{t.priority}</span>
                              <div className="w-5 h-5 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[7px] font-bold text-[#5C5650]">{t.assignee}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* MESSAGES */}
                  {activePage === "messages" && (
                    <div className="space-y-4">
                      <div><h3 className="text-xl font-bold text-[#1A1A1A]">Messages</h3><p className="text-xs text-[#5C5650]">Team and client conversations.</p></div>
                      <div className="flex gap-3">
                        {/* Thread list */}
                        <div className="w-1/3 space-y-1.5">
                          {[
                            { name: "Acme Corp", preview: "Sounds good, let's proceed...", time: "2m", unread: true },
                            { name: "BuildRight", preview: "When can we schedule the...", time: "1h", unread: false },
                            { name: "Vertex Fiber", preview: "The spec looks great. One...", time: "3h", unread: false },
                            { name: "Internal Team", preview: "Sprint planning tomorrow at...", time: "5h", unread: true },
                          ].map(t => (
                            <div key={t.name} className={`p-3 rounded-lg border ${t.unread ? 'border-[#2563EB]/20 bg-[#2563EB]/[0.02]' : 'border-[#e8e8e8] bg-white'} cursor-pointer`}>
                              <div className="flex items-center justify-between mb-0.5">
                                <span className={`text-[10px] font-semibold ${t.unread ? 'text-[#1A1A1A]' : 'text-[#5C5650]'}`}>{t.name}</span>
                                <span className="text-[8px] text-[#999]">{t.time}</span>
                              </div>
                              <p className="text-[9px] text-[#999] truncate">{t.preview}</p>
                            </div>
                          ))}
                        </div>
                        {/* Chat area */}
                        <div className="flex-1 rounded-xl border border-[#e8e8e8] bg-white p-4 flex flex-col">
                          <div className="border-b border-[#f5f5f4] pb-2 mb-3">
                            <span className="text-xs font-semibold text-[#1A1A1A]">Acme Corp</span>
                          </div>
                          <div className="flex-1 space-y-3 mb-3">
                            <div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[7px] font-bold text-blue-600">JD</div><div className="p-2 rounded-lg bg-[#f5f5f4] text-[9px] text-[#1A1A1A] max-w-[70%]">The assessment report looks thorough. Can we schedule the review?</div></div>
                            <div className="flex gap-2 justify-end"><div className="p-2 rounded-lg bg-[#2563EB] text-[9px] text-white max-w-[70%]">Absolutely. I have Thursday at 2pm or Friday at 10am open.</div><div className="w-5 h-5 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[7px] font-bold text-[#5C5650]">YN</div></div>
                            <div className="flex gap-2"><div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[7px] font-bold text-blue-600">JD</div><div className="p-2 rounded-lg bg-[#f5f5f4] text-[9px] text-[#1A1A1A] max-w-[70%]">Sounds good, let's proceed with Thursday.</div></div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1 px-3 py-2 rounded-lg border border-[#e8e8e8] text-[9px] text-[#999]">Type a message...</div>
                            <button className="px-3 py-2 bg-[#2563EB] text-white rounded-lg text-[9px] font-medium">Send</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* LEARN */}
                  {activePage === "learn" && (
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1A1A1A]">Learn</h3>
                        <p className="text-xs text-[#5C5650]">Workshops, resources, and AI tools.</p>
                      </div>
                      <div className="flex gap-2">
                        {["AI Tools", "Prompts", "Workshops", "Media"].map((tab, i) => (
                          <button key={tab} className={`px-3 py-1.5 rounded-lg text-[10px] font-medium ${i === 0 ? 'bg-[#2563EB] text-white' : 'text-[#5C5650] border border-[#e8e8e8]'}`}>{tab}</button>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "ChatGPT", cat: "AI Assistant", desc: "General purpose AI for content and analysis" },
                          { name: "Claude", cat: "AI Assistant", desc: "Advanced reasoning and coding" },
                          { name: "Midjourney", cat: "Image Gen", desc: "AI image creation from prompts" },
                          { name: "Notion AI", cat: "Productivity", desc: "AI-powered docs and knowledge base" },
                          { name: "Canva AI", cat: "Design", desc: "AI-assisted graphic design" },
                          { name: "Zapier", cat: "Automation", desc: "Connect apps and automate workflows" },
                        ].map(tool => (
                          <C key={tool.name} name="MockupToolCard" file="src/components/sites/dovito/DovAppMockup.tsx" prompt="Tool resource card: p-3 rounded-xl border white bg, hover blue border accent. Shows tool name (xs semibold), category (blue text), and description (gray).">
                          <div className="p-3 rounded-xl border border-[#e8e8e8] bg-white hover:border-[#2563EB]/30 transition-colors">
                            <div className="text-xs font-semibold text-[#1A1A1A]">{tool.name}</div>
                            <div className="text-[9px] text-[#2563EB] font-medium">{tool.cat}</div>
                            <div className="text-[9px] text-[#999] mt-1">{tool.desc}</div>
                          </div>
                          </C>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          </C>

          {/* Glow */}
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-b from-[#2563EB]/[0.03] to-transparent -z-10 blur-xl" />
        </div>
      </div>
    </section>
  );
};
