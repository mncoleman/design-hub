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
import usePageTitle from "@/lib/usePageTitle";

const Home = () => {
  usePageTitle("Design Hub - Drone Services");

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
- Have a "Your Logo" placeholder on the left
Reference: src/components/layout/Navbar.tsx in the design-hub repo.`}
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
- Radial gradient vignette overlay
- Grain texture overlay for depth
- Typing animation badge at top (e.g. "YOUR TAGLINE HERE")
- Large headline with FallInText animation (text drops in word by word)
- Subheadline with BlurText fade-in effect
- Gold gradient CTA button with arrow icon
- Scroll indicator (bouncing dot in rounded border) at bottom
Dependencies: Cubes.tsx, Squares.tsx, TextType.tsx, FallInText.tsx, BlurText.tsx
Reference: src/components/home/HeroSection.tsx`}
        >
          <HeroSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="StatsSection"
          filePath="src/components/home/StatsSection.tsx"
          description="Animated statistics counter with reveal on scroll"
          aiPrompt={`Add a statistics section with:
- Three stat columns with dividers between them (grid with divide-x)
- Eyebrow label text above each number
- Large bold stat values (text-4xl/5xl)
- Reveal animation: fade up on scroll into view (IntersectionObserver)
- Staggered delays for each stat (150ms between each)
- Top and bottom borders using border-white/[0.06]
- Grain texture background overlay
Reference: src/components/home/StatsSection.tsx`}
        >
          <StatsSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="UseCasesSection"
          filePath="src/components/home/UseCasesSection.tsx"
          description="Tabbed content with unique animated SVG illustrations"
          aiPrompt={`Add a tabbed use cases section with:
- Row of tab buttons that switch content (active tab gets bg-white/[0.08] + border)
- Two-column layout: text content left, animated SVG right
- Each tab has a unique animated SVG illustration with:
  - Animated dashed flight paths (stroke-dashoffset animation)
  - Pulsing waypoint markers
  - Rotating rotor circles
  - Scanning sweep lines
  - Data readout overlays with monospace text
- Tab transitions are instant (no fade)
- Gold gradient "Get Started" CTA button
Reference: src/components/home/UseCasesSection.tsx`}
        >
          <UseCasesSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="ProcessSection"
          filePath="src/components/home/ProcessSection.tsx"
          description="3-step process cards with GlassCube 3D hover effect"
          aiPrompt={`Add a process/how-it-works section with:
- Three cards in a grid using GlassCube component (3D tilt on hover)
- Each card has: step number (monospace, primary/50), title (xl bold), description
- Cards have min-h-[240px] with padding p-8
- Reveal animation on scroll with staggered delays (150ms per card)
- Section has top and bottom borders (border-white/[0.06])
- Ambient glow orb positioned bottom-right
Dependencies: GlassCube.tsx (3D perspective tilt component)
Reference: src/components/home/ProcessSection.tsx`}
        >
          <ProcessSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="DashboardMockup"
          filePath="src/components/home/DashboardMockup.tsx"
          description="Interactive browser-frame dashboard with clickable pages"
          aiPrompt={`Add an interactive dashboard mockup section with:
- Browser chrome frame (traffic light dots, URL bar)
- Sidebar with clickable navigation items (Overview, Missions, Fleet, Reports)
- Each page renders unique content:
  - Overview: stat cards + bar chart + mini map + mission list
  - Missions: timeline view with status badges
  - Fleet: aircraft cards with battery gauges + horizontal bar chart
  - Reports: document cards with file type icons (PDF/ZIP/TIFF)
- Figma-style cursor overlay (spring physics name pill that follows mouse)
- Ambient glow behind the mockup
Dependencies: FigmaCursors.tsx
Reference: src/components/home/DashboardMockup.tsx`}
        >
          <DashboardMockup />
        </ComponentOverlay>

        <ComponentOverlay
          name="MissionControlMockup"
          filePath="src/components/home/MissionControlMockup.tsx"
          description="Interactive mission control with map, telemetry, weather views"
          aiPrompt={`Add a mission control mockup with:
- Two-column layout: description text left, browser mockup right
- Feature tag pills below description text
- Browser frame with three clickable tabs (Map View, Telemetry, Weather)
- Map view: SVG flight path with animated waypoints + zone labels
- Telemetry view: 6 data cards + attitude indicator
- Weather view: conditions display + wind/visibility/ceiling/KP cards
- Live status bar with green pulse dot + timestamp
- Figma-style cursor with spring physics
Dependencies: FigmaCursors.tsx
Reference: src/components/home/MissionControlMockup.tsx`}
        >
          <MissionControlMockup />
        </ComponentOverlay>

        <ComponentOverlay
          name="BenefitsSection"
          filePath="src/components/home/BenefitsSection.tsx"
          description="6 benefit cards with GlassCube 3D hover effect"
          aiPrompt={`Add a benefits/features grid with:
- 3-column grid (responsive: 1 col mobile, 2 md, 3 lg)
- Each card uses GlassCube component (3D perspective tilt on hover)
- Card content: icon in rounded bg (h-7 w-7, primary color), title (text-lg bold), description
- Cards min-h-[220px] with p-8 padding
- Staggered reveal animation (80ms delay per card)
- Gap of 5 (gap-5) between cards
Dependencies: GlassCube.tsx, lucide-react icons
Reference: src/components/home/BenefitsSection.tsx`}
        >
          <BenefitsSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="IndustriesSection"
          filePath="src/components/home/IndustriesSection.tsx"
          description="Enterprise features grid with scrolling industry marquee"
          aiPrompt={`Add an enterprise/industries section with:
- Large heading with line breaks per word for visual impact
- 2x2 feature card grid (zera-card style: bg-white/[0.02], border-white/[0.06])
- Auto-scrolling industry marquee at bottom:
  - Items are pill-shaped tags with border (industry-tag class)
  - Triple-duplicated array for infinite scroll illusion
  - CSS animation: @keyframes marquee translateX(0) to translateX(-50%)
  - Gradient fade-out on left and right edges
- Top and bottom section borders
Reference: src/components/home/IndustriesSection.tsx`}
        >
          <IndustriesSection />
        </ComponentOverlay>

        <ComponentOverlay
          name="CTASection"
          filePath="src/components/home/CTASection.tsx"
          description="Glassmorphism CTA card with ScrollFloat animation"
          aiPrompt={`Add a call-to-action section with:
- Centered glassmorphism card (bg rgba white 0.02, backdrop-blur, border white/0.1)
- Eyebrow text at top (uppercase, tracked, muted)
- ScrollFloat heading (text scales/fades based on scroll position)
- Supporting paragraph text
- Gold gradient CTA button with arrow icon
- Ambient glow orb behind the card
Dependencies: ScrollFloat.tsx
Reference: src/components/home/CTASection.tsx`}
        >
          <CTASection />
        </ComponentOverlay>

        <ComponentOverlay
          name="FAQSection"
          filePath="src/components/home/FAQSection.tsx"
          description="Accordion FAQ with chevron animation"
          aiPrompt={`Add an FAQ accordion section with:
- ScrollFloat animated heading
- List of FAQ items with bottom borders (border-white/[0.06])
- Each item: clickable question row with chevron icon that rotates 180deg on open
- Answer slides open with max-height + overflow-hidden transition (300ms)
- Question text highlights to white on hover
- Narrow max-width (max-w-3xl) for readability
- Reveal animation on scroll
Reference: src/components/home/FAQSection.tsx`}
        >
          <FAQSection />
        </ComponentOverlay>
      </main>

      <ComponentOverlay
        name="Footer"
        filePath="src/components/layout/Footer.tsx"
        description="Multi-column footer with cursor spotlight logo reveal"
        aiPrompt={`Add a footer with:
- Three-column grid: brand info + quick links + contact
- Brand column: logo placeholder, description, LinkedIn icon in bordered button
- Link columns with eyebrow headers (uppercase, tracked)
- Bottom bar: copyright + privacy/terms links
- Large logo reveal effect at bottom:
  - Grayscale logo at low opacity as base
  - On mouse hover: radial gradient mask reveals full-color logo
  - Fade-in animation on scroll into view (IntersectionObserver)
Reference: src/components/layout/Footer.tsx`}
      >
        <div className="relative z-10">
          <Footer />
        </div>
      </ComponentOverlay>
    </div>
  );
};

export default Home;
