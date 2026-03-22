import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import ScrollFloat from "@/components/ScrollFloat";
import { C } from "@/components/showcase/C";

const faqs = [
  {
    question: "What services does LevoAir offer?",
    answer: "We provide FAA-certified contract drone pilots for construction documentation, mapping, inspections, surveying, and more. We fly your drones on your schedule.",
  },
  {
    question: "Do your pilots fly our equipment or yours?",
    answer: "Both. We can fly your fleet or bring our own equipment. We'll match the setup to your project requirements and preferred workflow.",
  },
  {
    question: "What certifications do your pilots have?",
    answer: "All pilots hold FAA Part 107 Remote Pilot Certificates. We handle LAANC authorizations, airspace waivers, and all regulatory compliance for every flight.",
  },
  {
    question: "How quickly can you deploy a pilot?",
    answer: "Depending on the mission scope and location, we can often mobilize within 24-48 hours. For ongoing contracts, we coordinate scheduling in advance.",
  },
  {
    question: "What industries do you serve?",
    answer: "Construction, real estate, agriculture, energy, telecom, insurance, surveying, and more. If it involves drone operations, we can support it.",
  },
];

export const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
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
    <section ref={ref} className="relative py-28 md:py-36 border-t border-white/[0.06]">
      <div className="grain" aria-hidden="true" />

      <div className={`container mx-auto px-6 max-w-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="text-center mb-16">
          <span className="eyebrow block mb-4">FAQ</span>
          <C name="FAQScrollFloatHeading" file="src/components/home/FAQSection.tsx" prompt="ScrollFloat animated section heading that floats into view on scroll. Text is 4xl/5xl bold white. Uses ScrollFloat with containerClassName='mb-0'.">
            <ScrollFloat
              containerClassName="mb-0"
              textClassName="text-4xl md:text-5xl font-bold"
            >
              The essentials, explained.
            </ScrollFloat>
          </C>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <C key={i} name="FAQItem" file="src/components/home/FAQSection.tsx" prompt="Accordion FAQ item with .faq-item class. Full-width button with question text left-aligned and chevron icon right-aligned. Clicking toggles a collapsible answer area with max-height transition. Chevron rotates 180deg when open.">
              <div className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors pr-8">
                    {faq.question}
                  </span>
                  <C name="FAQChevron" file="src/components/home/FAQSection.tsx" prompt="ChevronDown icon from Lucide, 4x4, muted white/30 color. Rotates 180 degrees with 300ms transition when the parent FAQ item is open." inline={true}>
                    <ChevronDown className={`h-4 w-4 text-white/30 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
                  </C>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </C>
          ))}
        </div>
      </div>
    </section>
  );
};
