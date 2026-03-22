import { useEffect, useState } from "react";

export const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Large ambient orbs */}
      <div className="absolute w-[800px] h-[800px] rounded-full top-[-200px] left-[-200px] animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.03), transparent 60%)' }} />
      <div className="absolute w-[600px] h-[600px] rounded-full top-[40%] right-[-200px] animate-float-medium"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.025), transparent 60%)' }} />
      <div className="absolute w-[700px] h-[700px] rounded-full bottom-[-100px] left-[30%] animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.02), transparent 60%)' }} />
    </div>
  );
};

export const GridBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Perspective grid */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
      }} />
    </div>
  );
};

export const FloatingParticles = () => {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.15 + 0.03,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export const ScanLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.015]" aria-hidden="true"
      style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
      }}
    />
  );
};
