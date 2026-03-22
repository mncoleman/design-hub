import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  { quote: "A master when it comes to business systems and marketing. Knowledgeable and asks the right questions to make sure you get the right help.", name: "Arnold J.", company: "Telos Creative" },
  { quote: "A great help in scaling our business. Very quick to respond and correct any problems. They find solutions that work better and cost-saving ideas.", name: "John B.", company: "Creative Coatings" },
  { quote: "Impressed with the can-do, solution-minded professionalism. They helped us launch a brand new concept, creating a platform for client acquisition and retainment.", name: "Dan H.", company: "40 Day Fight" },
  { quote: "Enabled us to scale and automate our marketing and communication in a huge way. Their support has been fantastic, providing quick responses.", name: "Jobe L.", company: "40 Day Fight" },
];

export const DovTestimonials = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="px-6 py-20 md:py-28 bg-white">
      <div className={`max-w-3xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <span className="text-xs font-medium text-[#39a0ed] uppercase tracking-[0.15em] block mb-3">Proof</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a60] mb-12">What Clients Say</h2>

        <div className="relative">
          <div className="p-8 md:p-12 rounded-2xl border border-[#1a3a60]/[0.06] bg-[#f8f9fb] min-h-[200px]">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-[#c47d20] text-[#c47d20]" />)}
            </div>

            <p className="text-lg text-[#1a3a60]/80 leading-relaxed mb-8">
              "{testimonials[active].quote}"
            </p>

            <div>
              <p className="font-semibold text-[#1a3a60]">- {testimonials[active].name}</p>
              <p className="text-sm text-[#1a3a60]/50">{testimonials[active].company}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-lg border border-[#1a3a60]/10 hover:border-[#1a3a60]/20 text-[#1a3a60]/40 hover:text-[#1a3a60] transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all ${active === i ? 'bg-[#1a3a60] w-6' : 'bg-[#1a3a60]/20'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="p-2 rounded-lg border border-[#1a3a60]/10 hover:border-[#1a3a60]/20 text-[#1a3a60]/40 hover:text-[#1a3a60] transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
