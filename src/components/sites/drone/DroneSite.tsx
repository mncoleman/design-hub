import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { MissionControlMockup } from "@/components/home/MissionControlMockup";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { FloatingOrbs, FloatingParticles, GridBackground, ScanLines } from "@/components/home/FloatingElements";
import { ComponentOverlay } from "@/components/showcase/ComponentOverlay";

const REPO = "https://github.com/mncoleman/design-hub/blob/main";

export const DroneSite = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingOrbs />
      <FloatingParticles />
      <GridBackground />
      <ScanLines />

      <ComponentOverlay
        name="Navbar"
        filePath="src/components/layout/Navbar.tsx"
        description="Scroll-responsive navbar with fade animation"
        aiPrompt={`Add a scroll-responsive navbar to my project. It should:
- Be fixed at the top with a glassmorphism background (bg/50 + backdrop-blur)
- Collapse when scrolling down, expand when scrolling up (desktop only)
- Have centered navigation links in uppercase
- Include a gradient CTA button on the right
- Use a staggered mobile menu on small screens
Reference: ${REPO}/src/components/layout/Navbar.tsx`}
      >
        <Navbar />
      </ComponentOverlay>

      <main className="relative z-10 pt-16">
        <ComponentOverlay
          name="HeroSection"
          filePath="src/components/home/HeroSection.tsx"
          description="Full-viewport hero with 3D cube grid background"
          aiPrompt={`Add a full-viewport hero section with:
- Animated 3D cube grid background (desktop) / diagonal squares (mobile)
- Radial gradient vignette overlay + grain texture
- Typing animation badge, FallInText headline, BlurText subheadline
- Gold gradient CTA button with arrow icon
- Scroll indicator at bottom
Dependencies: Cubes.tsx, Squares.tsx, TextType.tsx, FallInText.tsx, BlurText.tsx
Reference: ${REPO}/src/components/home/HeroSection.tsx`}
        >
          <HeroSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="StatsSection"
          filePath="src/components/home/StatsSection.tsx"
          description="Animated statistics counter with reveal on scroll"
          aiPrompt={`Add a statistics section with three stat columns, dividers, eyebrow labels, large values, and staggered reveal animation.
Reference: ${REPO}/src/components/home/StatsSection.tsx`}
        >
          <StatsSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="UseCasesSection"
          filePath="src/components/home/UseCasesSection.tsx"
          description="Tabbed content with unique animated SVG illustrations"
          aiPrompt={`Add a tabbed use cases section with unique animated SVG illustrations per tab, two-column layout, and gold gradient CTA.
Reference: ${REPO}/src/components/home/UseCasesSection.tsx`}
        >
          <UseCasesSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="ProcessSection"
          filePath="src/components/home/ProcessSection.tsx"
          description="3-step process cards with GlassCube 3D hover effect"
          aiPrompt={`Add a 3-step process section using GlassCube 3D hover cards with step numbers, titles, descriptions, and staggered reveal.
Dependencies: GlassCube.tsx
Reference: ${REPO}/src/components/home/ProcessSection.tsx`}
        >
          <ProcessSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="DashboardMockup"
          filePath="src/components/home/DashboardMockup.tsx"
          description="Interactive browser-frame dashboard with clickable pages"
          aiPrompt={`Add an interactive dashboard mockup in a browser frame with clickable sidebar (Overview, Missions, Fleet, Reports), each rendering unique content. Includes Figma cursor overlay.
Dependencies: FigmaCursors.tsx
Reference: ${REPO}/src/components/home/DashboardMockup.tsx`}
        >
          <DashboardMockup />
        </ComponentOverlay>

        <ComponentOverlay
          name="MissionControlMockup"
          filePath="src/components/home/MissionControlMockup.tsx"
          description="Interactive mission control with map, telemetry, weather views"
          aiPrompt={`Add a mission control mockup with map/telemetry/weather tabs, SVG flight paths, live telemetry data, and Figma cursor.
Dependencies: FigmaCursors.tsx
Reference: ${REPO}/src/components/home/MissionControlMockup.tsx`}
        >
          <MissionControlMockup />
        </ComponentOverlay>

        <ComponentOverlay
          name="BenefitsSection"
          filePath="src/components/home/BenefitsSection.tsx"
          description="6 benefit cards with GlassCube 3D hover effect"
          aiPrompt={`Add a 3x2 grid of benefit cards using GlassCube 3D hover with icons (h-7), titles (text-lg), descriptions, and staggered reveal.
Dependencies: GlassCube.tsx
Reference: ${REPO}/src/components/home/BenefitsSection.tsx`}
        >
          <BenefitsSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="IndustriesSection"
          filePath="src/components/home/IndustriesSection.tsx"
          description="Enterprise features grid with scrolling industry marquee"
          aiPrompt={`Add an enterprise section with 2x2 feature cards and auto-scrolling industry marquee with gradient edge fades.
Reference: ${REPO}/src/components/home/IndustriesSection.tsx`}
        >
          <IndustriesSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="CTASection"
          filePath="src/components/home/CTASection.tsx"
          description="Glassmorphism CTA card with ScrollFloat animation"
          aiPrompt={`Add a CTA section with glassmorphism card, ScrollFloat heading, and gold gradient button.
Dependencies: ScrollFloat.tsx
Reference: ${REPO}/src/components/home/CTASection.tsx`}
        >
          <CTASection />
        </ComponentOverlay>

        <ComponentOverlay
          name="FAQSection"
          filePath="src/components/home/FAQSection.tsx"
          description="Accordion FAQ with chevron animation"
          aiPrompt={`Add an FAQ accordion with rotating chevrons, sliding answers, and ScrollFloat heading.
Reference: ${REPO}/src/components/home/FAQSection.tsx`}
        >
          <FAQSection />
        </ComponentOverlay>
      </main>

      <ComponentOverlay
        name="Footer"
        filePath="src/components/layout/Footer.tsx"
        description="Multi-column footer with cursor spotlight logo reveal"
        aiPrompt={`Add a footer with multi-column links and a large text logo at the bottom that reveals with a cursor spotlight effect (radial gradient mask).
Reference: ${REPO}/src/components/layout/Footer.tsx`}
      >
        <div className="relative z-10">
          <Footer />
        </div>
      </ComponentOverlay>
    </div>
  );
};
