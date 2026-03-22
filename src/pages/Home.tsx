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
import usePageTitle from "@/lib/usePageTitle";

const Home = () => {
  usePageTitle("Home");

  return (
    <div className="min-h-screen bg-background relative">
      <FloatingOrbs />
      <FloatingParticles />
      <GridBackground />
      <ScanLines />

      <Navbar />
      <main className="relative z-10 pt-16">
        <HeroSection />
        <StatsSection />
        <UseCasesSection />
        <ProcessSection />
        <DashboardMockup />
        <MissionControlMockup />
        <BenefitsSection />
        <IndustriesSection />
        <CTASection />
        <FAQSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
