import { DovNavbar } from "./DovNavbar";
import { DovHero } from "./DovHero";
import { DovStats } from "./DovStats";
import { DovProblem } from "./DovProblem";
import { DovSolution } from "./DovSolution";
import { DovProcess } from "./DovProcess";
import { DovDifference } from "./DovDifference";
import { DovTestimonials } from "./DovTestimonials";
import { DovAppMockup } from "./DovAppMockup";
import { DovCTA } from "./DovCTA";
import { DovFooter } from "./DovFooter";

export const DovitSite = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a3a60]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <DovNavbar />
      <DovHero />
      <DovStats />
      <DovProblem />
      <DovSolution />
      <DovProcess />
      <DovDifference />
      <DovTestimonials />
      <DovAppMockup />
      <DovCTA />
      <DovFooter />
    </div>
  );
};
