import { ComponentOverlay } from "@/components/showcase/ComponentOverlay";
import { DovNavbar } from "./DovNavbar";
import { DovHero } from "./DovHero";
import { DovProblem } from "./DovProblem";
import { DovSolution } from "./DovSolution";
import { DovProcess } from "./DovProcess";
import { DovDifference } from "./DovDifference";
import { DovTestimonials } from "./DovTestimonials";
import { DovAppMockup } from "./DovAppMockup";
import { DovCTA } from "./DovCTA";
import { DovFooter } from "./DovFooter";

const REPO = "https://github.com/mncoleman/design-hub/blob/main";

export const DovitSite = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a3a60]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ComponentOverlay
        name="DovNavbar"
        filePath="src/components/sites/dovito/DovNavbar.tsx"
        description="Light mode navbar with scroll collapse"
        aiPrompt={`Add a light-mode navbar with scroll-responsive behavior:
- White/transparent background with backdrop-blur on scroll
- Logo placeholder on left, centered nav links, CTA button right
- Nav links: START HERE, LEARN, SERVICES, WORKSHOPS
- Navy blue "Apply" CTA button (bg-[#1a3a60])
- On scroll down: pill bg fades, links fade, logo/CTA get individual glass backgrounds
- Mobile: bottom-fixed expandable menu with hamburger
Reference: ${REPO}/src/components/sites/dovito/DovNavbar.tsx`}
      >
        <DovNavbar />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovHero"
        filePath="src/components/sites/dovito/DovHero.tsx"
        description="Full-viewport hero with fluid cursor effect"
        aiPrompt={`Add a full-viewport hero section with WebGL splash cursor:
- Full screen height, content centered vertically
- Eyebrow text: "Operations Consulting & Systems Integration"
- Large headline: "Lead the pack." (text-6xl to text-8xl)
- Supporting copy about operations consulting
- Two buttons: "Get Started" (primary navy) + "See How It Works" (outline)
- WebGL fluid/splash cursor effect on desktop (SplashCursor component)
- Animation toggle button in corner
- Light mode: white bg, navy text (#1a3a60)
Reference: ${REPO}/src/components/sites/dovito/DovHero.tsx`}
      >
        <DovHero />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovProblem"
        filePath="src/components/sites/dovito/DovProblem.tsx"
        description="Problem statement with three pain points"
        aiPrompt={`Add a problem statement section:
- Eyebrow: "The Problem", heading: "What Holds Businesses Back"
- Three pain point cards with bold label + description:
  1. "Disconnected systems." - data fragmentation
  2. "Generic software." - one-size-fits-none
  3. "Unmeasured outcomes." - unclear ROI
- Closing statement: "We fix the workflow, measure the gain, and scale what works."
- Light background, navy text, cards with subtle left border accent
Reference: ${REPO}/src/components/sites/dovito/DovProblem.tsx`}
      >
        <DovProblem />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovSolution"
        filePath="src/components/sites/dovito/DovSolution.tsx"
        description="Three-service solution grid with numbered cards"
        aiPrompt={`Add a solution/services section with three numbered cards:
- Eyebrow: "What We Do", heading: "The Solution"
- Three cards in a row (responsive to stacked):
  1. Operational Assessment - process mapping and bottleneck identification
  2. Process Improvement - fix workflows before touching software
  3. Systems Integration - connect or build tools to support the process
- Each card: step number, title, description, subtle border, hover shadow
- Navy primary color scheme on white background
Reference: ${REPO}/src/components/sites/dovito/DovSolution.tsx`}
      >
        <DovSolution />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovProcess"
        filePath="src/components/sites/dovito/DovProcess.tsx"
        description="Three-phase methodology timeline (Discover, Validate, Transform)"
        aiPrompt={`Add a methodology/process section with three phases:
- Eyebrow: "The Process", heading: "How It Works"
- Three connected phases in a horizontal timeline:
  1. Discover - continuous improvement foundation
  2. Validate - small scale, controlled, prove ROI
  3. Transform - lasting change through systems
- Connected by a horizontal line with numbered circles
- "See Our Services" CTA button at bottom
- Light background with alternating card styles
Reference: ${REPO}/src/components/sites/dovito/DovProcess.tsx`}
      >
        <DovProcess />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovDifference"
        filePath="src/components/sites/dovito/DovDifference.tsx"
        description="Differentiator cards highlighting industry focus and measurable outcomes"
        aiPrompt={`Add a differentiator section:
- Eyebrow: "Why Us", heading: "The Difference"
- Two feature cards side by side:
  1. Industry Focus - specialized in construction and trades
  2. Measurable Outcomes - deliverables tied to key metrics, ROI defined upfront
- Cards with navy left border accent, icon, title, and description
- Clean white background with subtle shadows
Reference: ${REPO}/src/components/sites/dovito/DovDifference.tsx`}
      >
        <DovDifference />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovTestimonials"
        filePath="src/components/sites/dovito/DovTestimonials.tsx"
        description="Testimonial carousel with prev/next controls"
        aiPrompt={`Add a testimonial carousel:
- Eyebrow: "Proof", heading: "What Clients Say"
- Carousel with cards showing: quote text, client name, company name
- Previous/Next arrow buttons below
- Star rating display (5 stars)
- Cards have subtle border and shadow
- Use CSS scroll-snap or Embla Carousel for smooth sliding
Reference: ${REPO}/src/components/sites/dovito/DovTestimonials.tsx`}
      >
        <DovTestimonials />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovAppMockup"
        filePath="src/components/sites/dovito/DovAppMockup.tsx"
        description="Interactive Systematics app mockup with clickable sidebar"
        aiPrompt={`Add an interactive app/dashboard mockup in a browser frame:
- Browser chrome with traffic light dots and URL bar showing "app.yoursite.com"
- Left sidebar with navigation: Home, Projects, Pipeline, Resources, Messages, Tasks
- Clickable sidebar items that switch the main content area:
  - Home: welcome card + quick action cards (Learn, Apply, Resources)
  - Projects: project cards with status badges and progress bars
  - Pipeline: kanban-style columns (New, Review, Interview, Approved, Active)
  - Resources: tab switcher (AI Tools, Prompts, Workshops, Media)
- Light theme: #FAFAF9 bg, #1A1A1A text, #2563EB blue accent
- Figma cursor overlay with spring physics
Reference: ${REPO}/src/components/sites/dovito/DovAppMockup.tsx`}
      >
        <DovAppMockup />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovCTA"
        filePath="src/components/sites/dovito/DovCTA.tsx"
        description="Final CTA section with apply and services buttons"
        aiPrompt={`Add a final call-to-action section:
- Heading: "Ready to Start a Conversation?"
- Supporting text about the application process
- Two buttons: "Apply Now" (primary navy) + "View Services" (outline)
- Email contact link below
- Dark navy background (#1a3a60) with white text for contrast
Reference: ${REPO}/src/components/sites/dovito/DovCTA.tsx`}
      >
        <DovCTA />
      </ComponentOverlay>

      <ComponentOverlay
        name="DovFooter"
        filePath="src/components/sites/dovito/DovFooter.tsx"
        description="Multi-column footer with contact info and industry list"
        aiPrompt={`Add a multi-column footer:
- Four columns: Contact (address, email, phone, hours), Industries, Services, Company
- Contact column includes physical address, email, phone, business hours
- Industries: Construction, Skilled Trades, Professional Services, Manufacturing
- Services: Assessment, Implementation, Retained Support
- Company: Start Here, Services, Learn, Apply, Legal
- Copyright bar with privacy/terms/copyright links
- Dark background with light text
Reference: ${REPO}/src/components/sites/dovito/DovFooter.tsx`}
      >
        <DovFooter />
      </ComponentOverlay>
    </div>
  );
};
