import { useShowcase } from "@/components/showcase/ShowcaseContext";
import { DroneSite } from "@/components/sites/drone/DroneSite";
import { DovitSite } from "@/components/sites/dovito/DovitSite";
import usePageTitle from "@/lib/usePageTitle";

const Home = () => {
  const { activeSite } = useShowcase();

  usePageTitle(activeSite === "consulting" ? "Design Hub - Operations Consulting" : "Design Hub - Drone Services");

  if (activeSite === "consulting") {
    return <DovitSite />;
  }

  return <DroneSite />;
};

export default Home;
