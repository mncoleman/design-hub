import { useEffect, useRef, useState } from "react";
import { Search, Wrench, Puzzle } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Search,
    title: "Operational Assessment",
    description: "We map how work moves through your business. Every process, handoff, and bottleneck. Then we tell you exactly what to fix and in what order.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Process Improvement",
    description: "We fix the workflows, ownership gaps, and handoffs before touching any software. The process has to work first.",
  },
  {
    number: "03",
    icon: Puzzle,
    title: "Systems Integration",
    description: "Once the process works, we connect or build the tools to support it. Custom applications, API connections, and automation.",
  },
];

export const DovSolution = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-[#f8f9fb]">
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">What We Do</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-12">The Solution</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.number}
                className={`p-8 rounded-2xl bg-white border border-[#1a3a60]/[0.06] shadow-sm hover:shadow-lg hover:border-[#1a3a60]/[0.12] transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-xs font-mono text-[#39a0ed] block mb-4">{s.number}</span>
                <div className="p-3 rounded-xl bg-[#1a3a60]/[0.05] w-fit mb-5">
                  <Icon className="h-6 w-6 text-[#1a3a60]/70" />
                </div>
                <h3 className="text-lg font-bold text-[#1a3a60] mb-3">{s.title}</h3>
                <p className="text-sm text-[#1a3a60]/55 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
