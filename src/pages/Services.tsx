import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Plane, Building2, Map, Camera, Radio, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import usePageTitle from "@/lib/usePageTitle";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Plane,
    title: "Contract Pilot Services",
    description: "Certified pilots available for single missions or ongoing contracts, flying your equipment on your schedule.",
    features: ["Single-day or multi-day missions", "Your equipment or ours", "Ongoing contract availability"],
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    description: "Experienced in construction site operations, progress documentation, and infrastructure inspection flights.",
    features: ["Progress documentation", "Site surveys", "As-built verification"],
  },
  {
    icon: Map,
    title: "Mapping & Survey Operations",
    description: "Skilled in photogrammetry, orthomosaic, and survey-grade flight planning for land and site assessment projects.",
    features: ["Orthomosaic maps", "Point cloud generation", "Volumetric calculations"],
  },
  {
    icon: Camera,
    title: "Aerial Inspections",
    description: "Detailed visual inspections for rooftops, towers, solar farms, and other structures.",
    features: ["Roof inspections", "Tower assessments", "Solar farm monitoring"],
  },
  {
    icon: Radio,
    title: "Telecom & Utilities",
    description: "Specialized flights for cell tower inspections, power line surveys, and utility infrastructure monitoring.",
    features: ["Cell tower inspections", "Power line surveys", "Infrastructure monitoring"],
  },
  {
    icon: Cpu,
    title: "Data Collection & Processing",
    description: "LiDAR, thermal imaging, multispectral surveys, and more. We capture the data your team needs.",
    features: ["LiDAR scanning", "Thermal imaging", "Multispectral analysis"],
  },
];

const Services = () => {
  usePageTitle("Our Services");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="container mx-auto px-6 max-w-5xl text-center mb-20">
          <span className="eyebrow block mb-4">Our Services</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            What We{" "}
            Build For You
          </h1>
          <p className="text-lg text-white/45 max-w-2xl mx-auto">
            We provide the pilots. You keep running your business. From single missions to long-term contracts, we handle the aerial work.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`zera-card p-8 md:p-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="p-3 rounded-xl bg-white/[0.04] w-fit mb-6">
                    <Icon className="h-6 w-6 text-white/60" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                  <p className="text-sm text-white/40 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/30">
                        <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <Link to="/contact" className="btn-primary">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
